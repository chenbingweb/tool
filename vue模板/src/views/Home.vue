<template>
  <yd-layout>
      <div class="relative">
          <slider :bannerList="bannerList"/>
          <router-link tag="p" class="pos" :to="{ name: 'shopList', params: { userId: 123 }}">
              <img src="../assets/img/order_btn.png" class="btn_img" alt="">
          </router-link>
      </div>

    <div class="food_range">
        <div class="title flex_center">
            <div class="font_zi">菜品排行</div>
        </div>
    </div>
    <div class="scroll_x">
        <food-item v-for="(item,index) in foodRank" :item="item" :key="'item_'+index"/>
    </div>
   <div class="food_range">
      <div class="title flex_center">
          <div class="font_zi">菜品排行</div>
      </div>
   </div>
   <div class="flex_between conner">
    <recomFood v-for="(item,index) in recomFoods" :item="item" :key="'ig_'+index"/>

   </div>

   <nav-bar slot="tabbar" nav="index"/>
  </yd-layout>
</template>

<script>
// @ is an alias to /src
import navBar from '@/components/navBar.vue'
import slider from '@/components/slider.vue'
import foodItem from '@/components/food_item.vue';
import recomFood from '@/components/recom_food.vue';

export default {
  name: 'home',
  data:()=>{
      return {
          bannerList:[],
          foodRank:[],
          recomFoods:[]
      }
  },
  components: {
      navBar,
      slider,
      foodItem,
      recomFood
  },
    created(){
        document.title='首页'
        let that=this;
        //获取banner 图
        this.$tip.Loading.open('加载中...')
        this.$tool.fetchPost(this.$interface.getBanner).then(res=>{
            that.$tip.Loading.close()
            if(res.errcode==0)
            {
                res.data.forEach(item=>{
                    item.img_url=that.$imgUrl+ item.img_url
                })
                that.bannerList=res.data;
            }
        }).catch(err=>{
            that.$tip.Loading.close()
        })
     
        this.$tool.fetchPost(this.$interface.foodRange).then(res=>{
            that.$tip.Loading.close()
            if(res.errcode==0)
            {
                res.data.forEach(item=>{
                    item.img_url=that.$imgUrl+ item.img_url
                })
                that.foodRank=res.data;
            }
        }).catch(err=>{
            that.$tip.Loading.close()
        })
        this.$tool.fetchPost(this.$interface.recommontFood).then(res=>{
            that.$tip.Loading.close()
            if(res.errcode==0)
            {
                res.data.forEach(item=>{
                    item.img_url=that.$imgUrl+ item.img_url
                })
                that.recomFoods=res.data;
            }
        }).catch(err=>{
            that.$tip.Loading.close()
        })
    }
}
</script>
<style>


</style>
