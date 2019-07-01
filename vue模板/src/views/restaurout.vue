<template>
  <ul>
    <li @click="back(item.id)" class="res_box" v-for="item in list" :key="'index_'+item.id">
      <img :src="$imgUrl+item.img_url" alt="">
      <div class="res_info">
        <p>{{item.name}}</p>
        <p>{{item.address}}</p>
        <p>
          <img src="../assets/img/local_address.png" alt="">
          <span>{{item.distance}}</span>
        </p>
      </div>
    </li>

  </ul>
</template>
<script>
  export default {
    name: "restShop",
    data: function () {
      return {
        list: []
      };
    },
    created: async function () {
      document.title='餐厅列表'
      let data = await this.$tool.fetchPost(this.$interface.getNearShop, { latitude: 39.72684, longitude: 116.34159});
      if (data.errcode == 0) {
        this.list = data.data;
      }
    },
    methods:{
        back:async function(id){
            let data = await this.$tool.fetchPost(this.$interface.setRestaurantId, {id:id});
            if(data.errcode==0)
            {
              this.$store.commit('setShopId',{id:id})
              this.$router.go()
            }
        }
    }
  };
</script>