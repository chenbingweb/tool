<template>

    <div class="item flex_between" @click="onToNav(path)">
        <div class="flex_start">
            <p class="flex_center icon_width">
                <slot name="icon"></slot>
            </p>
            <p class="f_28_333">{{title}}</p>
        </div>
     
        <div class="flex_center">
            <img class="arrow" src="../assets/img/arrow_right.png" alt="">
        </div> 
    </div>
   
</template>

<script>
    export default {
        name: "linkItem",
        props:['title','path'],
        methods:{
            onToNav(path){
                console.log(path)
                this.$router.push({path})
            }
        }
    }
</script>

<style scoped>
    .item
    {
        width: 690px;
        height: 100px;
        box-sizing: border-box;
        padding: 0 28px;
        margin: 0 auto;
        border-bottom: 1px solid #e5e5e5;
    }
    .icon_width
    {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
    .arrow
    {
        width: 14px;
        height: 26px;
    }

</style>
