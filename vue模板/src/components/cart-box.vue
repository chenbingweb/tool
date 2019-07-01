<template>
    <div class="cart_content"  v-bind:class="{con_bg_color:show}">

        <div class="cart_box flex_between "  >
            <div class="car_info"  @click="show=!show">
                <span class="img">
                    <i class="num">{{this.$store.state.cartTotal}}</i>
                </span>
                <span>¥{{totalPrice}}</span>
            </div>
            <div @click="toTotal" class="cart_right">
                去结算
            </div>

        </div>
        <!-- 列表 -->
        <div class="list" v-if="show">
            <div class="l_h">
                <div class="title_left">蜜夏菜馆</div>
                <div class="clear_btn" @click="onClear">
                    <span class="icon_box"></span>
                    <span>清空</span>
                </div>
            </div>
            <div class="list_box_scroll">
                <p class="item_p" v-for="item in this.$store.state.carsInfo" :key="'_'+item.food_id"> 
                    <span>{{item.name}}</span>
                    <span>¥{{item.price}}</span>
                    <span> <sel-custom :num="item.quantity" v-model="item.quantity" :fid="item.food_id"/></span>
                   
                </p>

            </div>
        </div>
    </div>
</template>

<script>
    import selCustom from '@/components/sel-custom.vue'

    
    export default {
        components:{
            selCustom
        },
        name: "cart-box",
        data:function(){
            return {
                total:10,
                show:false,
                cartList:this.$store.state.carsInfo
            }
        },
        created(){
            
         this.$store.state.UIEvent.On(this,this.CarsList)
            
        },
        computed:{
            totalPrice:function(){
                let num=0;
                this.$store.state.carsInfo.forEach(item=>{
                    num+=item.quantity*parseFloat(item.price)
                })
                return num.toFixed(2)
            }
        },
        methods:{
            CarsList:function(){
                console.log('event')
                if(this.$store.state.carsInfo.length==0)
                {
                    setTimeout(()=>{
                        this.show=false
                    })
                  
                }
            },
             onClear:async function(){
                 let that=this;
                let res =await this.$tool.fetchPost(this.$interface.clearCart,{id:this.$store.state.restaurant_id})
                if(res.errcode==0)
                {
                    this.$store.dispatch('getCartsInfo');
                   
                }
               
            },
            toTotal(){
               this.$router.push({path:'/confirm' })
            }
        }
    }
</script>

<style scoped>
    .item_p span:nth-of-type(3)
    {
        float: right;
        width: 150px;
        height:80px;
        padding-top: 13px;
    }
    .item_p span:nth-of-type(1)
    {
        float: left;
    }
    .item_p
    {
        width: 690px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        background-color: white;
        color:#333;
        font-size: 28px;
    }
    .list_box_scroll
    {
        width: 750rpx;
        height: 300px;
     
        overflow-y: scroll;
    }
    .icon_box
    {
        display: block;
        width: 22px;
        height: 60px;
         background: url('../assets/img/del.png') center center no-repeat;
        background-size: 22px 22px;
        float: left;
        
    }
    
    .title_left
    {
        float: left;
    }
    .clear_btn
    {
        float: right;
        width: 75px;
        line-height: 60px;
        color:#999999;
        font-size: 22px;
        float:right;
    }
    .l_h
    {
        width: 100%;
        height: 64px;
        line-height: 64px;
        background-color: #f4f4f4;
        box-sizing: border-box;
        padding: 0 32px;
        color:#333333;
        font-size: 26px;
    }
    .con_bg_color
    {
         background-color: rgba(0, 0, 0, 0.8) !important
    }
    .cart_content
    {
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      
    }
    .list
    {
        position: absolute;
        width: 750px;
        height: 400px;
        background-color: white;
        left: 0;
        bottom: 80px;
        z-index: -1;
        pointer-events: all;
    }
    .cart_box {
        pointer-events: all;
        position: absolute;
        background-color: white;
        width: 750px;
        height: 80px;
        left: 0;
        bottom: 0;
        border-top: 2px solid #e5e5e5;
    }

    .cart_right {
        width: 160px;
        height: 80px;
        background-color: #e26161;
        text-align: center;
        line-height: 80px;
        font-size: 28px;
        color: #fff;
    }

    .car_info {
        width: 570px;
        height: 80px;
        position: relative;
        box-sizing: border-box;
        padding-left: 150px;
        color: #e26161;
        font-size: 32px;
        line-height: 80px;
        text-align: left;
    }

    .img {
        position: absolute;
        left: 50px;
        top: -20px;
        width: 90px;
        height: 90px;
        border: 1px solid #6c6565;
        border-radius: 50%;
        background: url('../assets/img/cart.png') white center center no-repeat;
        background-size: 45px 42px;
    }

    .num {
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #e26161;
        border-radius: 50%;
        top: -10px;
        right: 0;
        text-align: center;
        line-height: 30px;
        color: white;
        font-size: 22px;
    }
</style>