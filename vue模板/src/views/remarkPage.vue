<template>
  <div>
    <div class="remark_content">
      <p class="title_4">备注信息</p>
      <textarea name class="textarea" v-model="fill" placeholder="请输入备注信息"></textarea>
    </div>
    <ul class="label_box">
      <li class="label_item" @click="onSelect(item)" v-for="item in list" :key="'_'+item.id">
          {{item.name}}
      </li>
    </ul>
    <div class="finish_btn" @click="onFinish">完成</div>
  </div>
</template>
<script>
export default {
  name: "remarkPage",
  data(){
      return {
          list:[],
          fill:this.$store.state.remarkContent
      }
  },
  created:async function() {
    let markList=await this.$tool.fetchPost(this.$interface.getMarkList, { })
     if(markList.errcode==0)
     {
         this.list=markList.data;
         console.log(markList)
     }
  },
  methods:{
      onSelect(item){
          var fill=this.fill;
          fill+=item.name+','
          this.fill=fill;
      },
      onFinish(){
         
          this.$store.commit('setRemarkContent',this.fill)
        //this.$root.$emit('content',this.fill);
        this.$router.go(-1)
      }
  }
};
</script>
<style scoped>
.remark_content {
  width: 750px;
  height: 220px;
  background-color: #f8f8f8;
}
.title_4 {
  color: #333;
  font-size: 28px;
  box-sizing: border-box;
  padding: 0 30px;
  line-height: 80px;
  text-align: left;
}
.textarea {
  width: 695px;
  height: 140px;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 15px;
  border: none;
  background-color: #f8f8f8;
  color: #999;
  font-size: 22px;
}
.label_box {
    width: 750px;
    margin: 0 auto;
    display: inline-flex;
    box-sizing: border-box;
    padding: 30px;
}
.label_item
{
    border:1px solid #e5e5e5;
    padding: 20px;
    font-size: 22px;
    color:#999;
    margin-right:10px; 
}
.finish_btn
{
    width:626px;
height:80px;
background-color:#e26161;
border-radius:40px;
text-align:center;
line-height:80px;
font-size:32px;
color:#fff;
position:relative;
margin:0 auto;

}
</style>



