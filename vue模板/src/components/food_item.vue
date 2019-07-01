<template>
    <div class="content">
        <div>
            <img class="img" :src="item.img_url"/>
        </div>
        <p class="f_name">{{item.name}}</p>
        <p class="sell">月销{{item.sales}}</p>
    </div>
</template>

<script>
    export default {
        name: "food_item",
        props:{
            item:{
                type:Object,
                default:{}
            }
        }
    }
</script>

<style scoped>
    .content
    {
        width: 256px;
        height: 290px;
        box-sizing: border-box;
        border:1px solid #e5e5e5;
        margin-right: 30px;
        float:left;
    }
    .img
    {
        width: 256px;
        height: 170px;
    }
    .sell
    {
        color:#999;
        font-size: 24px;
    }
    .f_name
    {
        font-style: 28px;
        color:#333;
        text-align: center;
        padding-top: 10px;
    }
</style>
