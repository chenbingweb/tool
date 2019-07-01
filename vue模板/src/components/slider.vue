<template>
    <yd-slider autoplay="3000">
        <yd-slider-item v-for="(item,index) in bannerList" :key="'slider_'+index">
            <a href="http://www.ydcss.com">
                <img :src="item.img_url">
            </a>
        </yd-slider-item>

    </yd-slider>
</template>

<script>
    export default {
        name: "slider",
        props:{
            bannerList:{
                type:Array,
                default:[1,2,2]
            }
        }
    }
</script>

<style scoped>

</style>
