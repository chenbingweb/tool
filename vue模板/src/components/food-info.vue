<template>
    <div class="box">
        <p class="img_box">
            <img class="img" :src="this.$imgUrl+food.img_url" alt="">
        </p>
        <div class="info_box_c">
            <p class="title_3">{{food.name}}</p>
            <p class="title_3">¥{{food.price}}</p>
        </div>
        

    </div>

</template>
<script>
export default {
    props:{
            food:{
                type:Object,
                default:{}
            }
        }
}
</script>
<style scoped>
    .box
    {
        width: 750px;
        height: 160px;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 0 30px;
        border-top: 1px solid #e5e5e5;
    }
    
    .img_box
    {
        width: 166px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img
    {
        width: 166px;
        height: 137px;
    }
    .title_3
    {
        color:#333;
        font-size: 28px;
    }
    .info_box_c
    {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        height: 127px;
        text-align: left;
        margin-left: 20px;
    }
</style>


