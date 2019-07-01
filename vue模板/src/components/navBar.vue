<template>
    <yd-tabbar>
        <yd-tabbar-item title="首页" link="/" :active="nav=='index'" replace>
            <yd-icon name="home" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/myCenter" :active="nav=='center'" replace>
            <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</template>

<script>
    export default {
        name: "navBar",
        props:['nav']
    }
</script>

<style scoped>

</style>
