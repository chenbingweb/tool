<template>
    <div class="fiexd">
        <div class="info_box">
            <slider :bannerList="bannerList"/>
            <ul class="flex_between info">
                <li class="left">
                    <p>{{detail.name}}</p>
                    <p>销量{{detail.sales}} 库存{{detail.stock}}</p>
                </li>

                <li class="right">2323</li>
            </ul>
            <div class="flex_between price">
                <div>￥{{detail.price}}</div>
                <div></div>
            </div>
            <div class="title_detail">商品描述</div>
            <div class="detail_reach" v-html="detail.details">

            </div>
        </div>
        <div class="c_box">
            <cartBox/>
        </div>
    </div>
</template>

<script>
    import slider from '@/components/slider.vue'
    import cartBox from "@/components/cart-box"

    export default {
        name: "foodDetail",
        components:{
            slider,
            cartBox
        },
        beforeRouteEnter (to, from, next) {

            let {fid}=to.params;
            console.log(to)
            next(vm => {

                console.log(fid)
                vm.$tool.fetchPost(vm.$interface.getResDetail,{
                    id:fid
                }).then(res=>{
                    vm.$tip.Loading.close()
                    console.log(res.data.images)
                    if(res.errcode==0)
                    {
                       res.data.images.forEach(item=>{
                           console.log({img_url:vm.$imgUrl+item})
                           vm.bannerList.push({img_url:vm.$imgUrl+item})
                        })
                        vm.detail=res.data
                        console.log(res)
                    }
                }).catch(err=>{
                    vm.$tip.Loading.close()
                })
                // 通过 `vm` 访问组件实例
            })
        },
        data:function () {
            return {
                bannerList:[],
                detail:{}
            }
        },
        created:function () {
            //let list=await this.$tool.fetchPost(this.$interface.getResDetail)
            //console.log(list)
        }
    }
</script>

<style scoped>

</style>
