<template>
    <div class="flex_end item">
        <p v-if="counts>0" @click="reduce" class="left">-</p>
        <p class="num" v-if="counts>0" >{{counts}}</p>
        <p class="left" @click="add">+</p>
    </div>
</template>

<script>
    export default {
       
        name: "sel-custom",
        props:{
            num:{
                type:Number,
                default:0
            },
            value:{
                type:Number,
                default:0
            },
            fid:{
                type:Number,
                default: 0
            }
        },
        watch:{
            num:function(n){
                this.counts=n
            }
        },
        mounted:function(){
            
            console.log(this.value)
            this.counts=this.value
        },
        beforeCreate:function(){
          
            console.log('beforeCreate')
        },
        updated:function(){
          //  console.log(this.num)
           // this.counts=this.num
           this.$nextTick(function () {
               console.log(22)
            })
        },
        computed:{
            // countFn:function(){
            //     return this.counts+this.num
            // }
        },
        data:function(){

            return {
                counts:this.value
            }
        },
        created:function(){
            //this.number=0;
            // console.log('sww',this.num)
            // console.log('creatre')
        },
     
        methods:{
            add:function () {
                this.counts++;
                //this.$emit('numChange',{fid:this.fid,counts:this.counts})
                this.$emit("update:num", this.counts)
                this.$store.dispatch('addFood',{fid:this.fid,counts:this.counts});
            },
            reduce:function () {
                this.counts--;
                this.$emit("update:num", this.counts)
                 this.$store.dispatch('addFood',{fid:this.fid,counts:this.counts});
                //this.$emit('numChange',{fid:this.fid,counts:this.counts})
            }
        }
    }
</script>

<style scoped>
    .item
    {
        width: 144px;
        height: 50px;
    }
    .left
    {
        width: 50px;
        height: 50px;
        border:1px solid red;
        border-radius: 50%;
        line-height: 50px;
        text-align: center;
        font-size:40px;
    }
    .num
    {
        width: 50px;
        text-align: center;
    }
</style>
