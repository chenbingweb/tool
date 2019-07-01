<template>
  <div class="totalFeePage">
    <div class="totail flex_between">
      <span>累计消费 899.00</span>
      <div class="flex_start">
        <data-select ty="开始时间" @date="onDateStart"/>
        <span>至</span>
        <data-select ty="结束时间" @date="onDateEnd"/>
      </div>
    </div>
    <!-- <div class="wrapper" ref="wrapper">
      <div class="log_box">
        <div class="log_item flex_center" v-for="(item,index) in data" :key="index">
          <p class="log_1 flex_between">
            <span>{{item.source}}</span>
            <span>{{item.type=='add'?'+':'-'}} {{(item.total_amount)}}</span>
          </p>
          <p class="date_time">{{item.create_at}}</p>
        </div>
      </div>
    </div>-->
    <scroll class="wrapper" :data="data" :pullup="pullup" @scrollToEnd="getList">
      <div class="log_box">
        <div class="log_item flex_center" v-for="(item,index) in data" :key="index">
          <p class="log_1 flex_between">
            <span>{{item.source}}</span>
            <span>{{item.type=='add'?'+':'-'}} {{(item.total_amount)}}</span>
          </p>
          <p class="date_time">{{item.create_at}}</p>
        </div>
        <div v-if="loading" class="more_load">加载中...</div>
        <div v-if="noMore" class="more_load">没有了:(</div>
      </div>
      
    </scroll>
  </div>
</template>
<script>
import dataSelect from "@/components/date-select.vue";
import BScroll from "better-scroll";
import scroll from "@/components/scroll-view.vue";
export default {
  components: {
    dataSelect,
    scroll,
  },
  data() {
    return {
        loading:false,
        noMore:false,
      datetime0: "",
      startDate: "",
      endDatte: "",
      data: [
        //       {source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},
        //   {source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},
        //   {source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},
        //   {source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},
        //   {source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},{source:1,type:'add',total_amount:12},
      ],
      pullup: true
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log("scroll->", this.$refs);
    //   this.scroll = new BScroll(this.$refs.wrapper, {});
    // });
  },
  created() {
    this.getList();
    this.page = 1;
  },
  methods: {
    async getList(scroll) {
        this.loading=true;
        this.noMore=false;
        setTimeout(()=>{},2000)
      let res = await this.$tool.fetchPost(this.$interface.getNoteList, {
        start_date: this.startDate,
        end_date: this.endDatte,
        page: this.page || 1,
        page_size: 10
      });
      if (res.errcode == 0) {
        this.data = res.data.concat(this.data);
        this.page++;
        this.loading=false;
        this.noMore=false;
        if(this.data.length==0)
        {
             this.loading=false;
        this.noMore=true;
        }
        if (scroll) {
          scroll.finishPullDown();
        }

        // this.$nextTick(() => {
        //   if (!this.scroll) {
        //     this.scroll = new BScroll(this.$refs.wrapper, {});

        //     this.scroll.on("touchend", pos => {
        //       console.log(pos);
        //       // 下拉动作
        //       if (pos.y > 50) {
        //         this.loadData();
        //       } else {
        //         console.log(22);
        //       }
        //     });
        //   } else {
        //     this.scroll.refresh();
        //   }
        // });
      }
    },
    onDateStart(date) {
      this.startDate = date;
      // console.log('startDate',date)
    },
    onDateEnd(date) {
      this.endDatte = date;
      // console.log('endDatte',date)
    }
  }
};
</script>

