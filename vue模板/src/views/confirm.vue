<template>
  <keep-alive>
  <div class="confirmPage">
    <p class="title_2">点餐信息</p>
    <div>
      <food-info :food="item" v-for="(item,index) in cartList" :key="index"/>
    </div>
    <p class="title_2">其他信息</p>
    <p class="flex_between info_2">
      <span>订单总额</span>
      <span>￥{{priceTotal}}</span>
    </p>
    <label class="flex_between info_2">
      <span>余额支付（{{amount}}）</span>
      <img v-if="isAmount" class="select_radio" src="../assets/img/radio_ok.png" />
      <img v-else class="select_radio" src="../assets/img/radio_no.png" />
      <input hidden v-model="isAmount" type="checkbox">
    </label>
    <div class="remark"  @click="onToFillRemark">
      <p>备注信息</p>
      <p class="remark_content">{{this.$store.state.remarkContent}}</p>
    </div>
    <div class="flex_between pay_box">
      <div class="pay_info_box_1 flex_start">
        <span>待支付</span>
        <span>¥{{isAmount?this.isAmountFn():priceTotal}}</span>
      </div>
      <div class="to_pay">
        立即支付
      </div>
    </div>
  </div>
  </keep-alive>
</template>
<script>
import foodInfo from "@/components/food-info.vue";
export default {
  name: "Comfirm",
  data:function(){
    return {
      cartList:this.$store.state.carsInfo,
      content:'',
      isAmount:true,
      amount:this.$store.state.shopDetil.amount
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      
      if(!vm.$store.state.carsInfo)
      {
        console.log('getCartsInfo')
        vm.$store.dispatch('getCartsInfo');
      }
      //  vm.$root.$off('content', vm.upDateContent)
      // vm.$root.$on('content',vm.upDateContent)
    })
  },
  async created(){
      console.log('getCartsInfo')
      if(this.$store.state.carsInfo.length==0)
      {
        let carList= await this.$tool.fetchPost( this.$interface.getCartList,{ id:this.$store.state.restaurant_id});
        if(carList.errcode==0)
        {
          this.cartList=carList.data;
        }
        
        console.log(carList)
      }
      // this.$store.dispatch('getCartsInfo');
    // this.$root.$off('markcontent', this.upDateContent)
    // this.$root.$on('markcontent',this.upDateContent)
  },
  watch:{
    isAmount(){

      console.log(this.isAmount)
    }
  },
  components: {
    foodInfo
  },
  computed:{
    
    upDateContent(res,e){
      console.log(res,e)
      this.content=res;
    },
    priceTotal(){
      let totalPrice=0;

     this.$store.state.carsInfo.forEach(item=>{
       totalPrice+=parseFloat(item.price)*item.quantity
     })
      return totalPrice.toFixed(2)
    }
  },
  methods:{
    isAmountFn(){
      let fee=0;
       let totalPrice=0;
     this.$store.state.carsInfo.forEach(item=>{
       totalPrice+=parseFloat(item.price)
     })
     let total=totalPrice
     console.log(parseFloat(total)<parseFloat(this.amount))
      if(parseFloat(total)>parseFloat(this.amount))
      {
        fee=total-parseFloat(this.amount)
      }
      console.log(fee)
      return fee.toFixed(2)
    },
    onToFillRemark(){
      this.$router.push({ path: '/remarkPage' })
    },
    priceTotal2(){
      let totalPrice=0;
     this.$store.state.carsInfo.forEach(item=>{
       totalPrice+=parseFloat(item.price)
     })
      return totalPrice.toFixed(2)
    }
  }
};
</script>
