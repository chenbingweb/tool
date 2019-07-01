<template>
    <yd-layout>
        <header class="relative">
            <div class="img">
                <img src="../assets/img/center_bg.png" alt="">
            </div>
            <div class="absolute flex_center info_3">
                <div class="photo">
                    <img :src="avatar" alt="">
                </div>
                <p class="user_name">{{nickname}}</p>
                <p class="phone_num user_name">{{mobile}}</p>
            </div>
        </header>
        <section>
            <link-item title="个人信息" >
                <img slot="icon" class="info_icon" src="../assets/img/info.png" alt="">
            </link-item>
            <link-item title="我的订单">
                <img slot="icon" class="info_icon" src="../assets/img/my_order.png" alt="">
            </link-item>
            <link-item title="我的账户">
                <img slot="icon" class="info_icon" src="../assets/img/my_money.png" alt="">
            </link-item>
            <link-item title="消费统计" path="/totalFee">
                <img slot="icon" class="info_icon" src="../assets/img/my_count.png" alt="">
            </link-item>
        </section>
        <nav-bar nav="center" slot="tabbar"/>
    </yd-layout>
</template>

<script>
    import navBar from '@/components/navBar.vue';
    import linkItem from '@/components/linkItem.vue'
    export default {
        name: "myCenter",
        components:{
            navBar,
            linkItem
        },
        data:()=>{
            return {
                "nickname":'',
                "avatar":'',
                "mobile": '',
                "birthday":'',
                "amount":'',
                "restaurant_id":'',
            }
        },
        created(){
              document.title='个人中心'
            this.nickname=this.$store.state.nickname
            this.avatar= this.$store.state.avatar
            this.mobile= this.$store.state.mobile
            this.birthday=  this.$store.state.birthday
            this.amount=this.$store.state.amount

        }
    }
</script>

<style scoped>

</style>
