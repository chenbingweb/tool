<template>
  <div>
     <div class="relative">
          <span class="show_time">{{date}}</span>
         <yd-datetime class="zuji" :init-emit="false" type="date" v-model="datetime0" :callback="this.onCallStart"></yd-datetime>
        
    </div> 
    
  </div>
</template>
<script>
    import Vue from "vue";
    import { DateTime } from "vue-ydui/dist/lib.rem/datetime";
    Vue.component(DateTime.name, DateTime);
    export default {
        props:['ty'],
        data(){
            return {
                datetime0:'',
                date:this.ty
            }
        },    
        watch:{
            date(n){
                console.log('->',n)

                console.log(this.date)
               
            }
        },
        methods: {
            onCallStart(date) {
                this.date=date;
                console.log(this.date)
                this.$emit('date',date)
                
            }
        }
    };
</script>
<style scoped>
   .relative
   {
       position: relative;
       width: 160px;
       height: 80px;
   } 
   .zuji
   {
       position: absolute;
       left:0;
       top:0;
       width: 100%;
       height: 100%;
       opacity: 0;
   }
   .show_time
   {
        position: absolute;
       left:0;
       top:0;
       width: 100%;
       height: 100%;
       line-height:80px;
       text-align: center;
   }
</style>


