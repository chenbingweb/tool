<template>
    <dl class="content">
        <dt class="img_box">
            <img class="img" :src="item.img_url"/>
        </dt>
        <dd>{{item.name}}</dd>
    </dl>
</template>

<script>
    export default {
        name: "recom_food",
        props:{
            item:{
                type:Object,
                default:{}
            }
        }
    }
</script>

<style scoped>
    .img ,.img_box
    {
        width: 334px;
        height: 250px;
    }

    .content
    {
        width: 334px;
        height: 333px;
        border:1px solid #e5e5e5;
        margin-bottom: 20px;
        font-size: 28px;
        color:#333;
        line-height: 80px;
    }
</style>
