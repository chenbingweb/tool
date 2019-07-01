<template>
    <div>
        <div class="shop_header_box">
           <header class="shop_header">
                <p>
                    <img class="shop_img_bg" :src="imgUrl+ detail.logo_url" alt="">
                    <span class="changeShop" @click="toList">切换餐厅</span>
                </p>
                <p class="shop_box"><img class="shop_photo" :src="imgUrl+ detail.img_url" alt=""></p>
           </header>
            <div class="shop_content">
                <p class="f_36_333 ">{{detail.name}}</p>
                <p class="f_24_333 shop_address">{{detail.address}}</p>
                <p class="f_22_999">{{detail.summary}}</p>
            </div>
        </div>
        <div class="shop_list_box">
            <ul class="shop_left">
                <li @click="onSelect(item.id)" :class="{select:item.checked}" v-for="(item,index) in detail.food_category" :key="index">{{item.name}}</li>
            </ul>
            <ul class="shop_right">
                <div  class="shop_item" v-for="(item,index) in list"  :key="index" >
                    <router-link :to="'foodDetail/'+item.id"  class="shop_img_logo">
                        <img :src="imgUrl+ item.img_url" alt="">
                    </router-link>
                    <div class="shop_item_detail">
                        <p class="f_28_333">{{item.name}}</p>
                        <p class="f_22_999"><span>销量 {{item.sales}}</span> <span>库存 {{item.stock}}</span></p>
                        <p class="shop_select_box flex_between">
                            <span>¥{{item.price}}</span>
                            <sel-custom :fid="item.id" :num="item.num"  v-model="item.num"/>
                        </p>
                    </div>
                </div>

            </ul>

        </div>
        <div class="c_box">
            <cartBox/>
        </div>
        
    </div>
</template>

<script>
    import selCustom from '@/components/sel-custom.vue'
    import cartBox from "@/components/cart-box"


    export default {
        components:{
            selCustom,
            cartBox
        },
        name: "shopList",
        data:()=>{
            return {
                detail:{},
                imgUrl:'',
                currentId:'',
                list:[],
                selectId:0
            }
        },
        watch:{
            list:function (o,n) {
                console.log(o,n)
            },
            currentId:function(n,o){
                console.log(n,o)
                
                setTimeout(()=>{
                     this.list= this.detail.food.filter(item=>{

                            return item.category_id==n;
                    })
                },0)
               

            }
        },
        computed:{
            filters:function(){
                
                return this.detail.food.filter(item=>{
                        
                        return item.category_id==this.currentId;
                    })

            }
        },
        created(){
             document.title='餐厅详情'
            this.$store.state.UIEvent.On(this,this.cartsInfo);
            this.$store.dispatch('getCartsInfo');
            let that=this;
            this.imgUrl=this.$imgUrl
            this.$tip.Loading.open('加载中...')
            this.$tool.fetchPost(this.$interface.getResDetailInfo,{
                latitude:that.$store.state.latitude,
                longitude:that.$store.state.longitude,
                id:that.$store.state.restaurant_id
            }).then(res=>{
                that.$tip.Loading.close();
                that.$store.commit('setShopDetail',res.data)
                if(res.errcode==0)
                {
                    res.data.food_category.forEach((item,index)=>{

                        if(index==0)
                        {
                            item.checked=true
                        }
                        else
                        {
                            item.checked=false
                        }
                    })


                    that.currentId=res.data.food_category[0].id//res.data.food[0] ? res.data.food[0].category_id:'';
                    
                    that.list= res.data.food.filter(item=>{
                       // item.num=0;
                           
                        return item.category_id==that.currentId;
                    })

                    that.detail=res.data;
                    that.$store.state.UIEvent.Emit()
                    //that.items(that.currentId)


                }
            }).catch(err=>{
                that.$tip.Loading.close()
            })
           
        },
        methods:{
          cartsInfo: function(){
            console.log('CF')
            let that=this;
            that.detail.food.forEach(item=>{
                  item.num=0
                that.$store.state.carsInfo.forEach(child=>{
                   
                    if(item.id==child.food_id)
                    {
                        //console.log(item)
                        item.num=parseInt(child.quantity)
                    }
                   
                })

            })
            if(this.currentId!='')
            {
                console.log(this.currentId)
                this.items(this.currentId)
            }
            
            console.log( that.detail)
          },
            onSelect:function (id) {
               // let list=this.detail.food_category;
                this.detail.food_category.forEach(item=>{
                    if(item.id==id)
                    {
                        item.checked=true
                    }
                    else
                    {
                        item.checked=false
                    }
                })
               this.currentId=id
                this.list=[]
               // this.detail
               this.items(id)

            },

            items:function(id){
    
                 this.list= this.detail.food.filter(item=>{
                        
                        return item.category_id==id;
                    })


            },
            toList(){
                this.$router.push({ path: '/restShop'})
            }
        }
    }
</script>

<style scoped>

</style>
