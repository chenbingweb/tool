import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Tool from "@/libs/Tool.js";
import {_interface} from "@/interface/interface.js"
let tool=new Tool();
import { Confirm, Alert, Toast, Notify, Loading }from 'vue-ydui/dist/lib.rem/dialog';
import { UIEvent } from "@/libs/UIEvent.js" 
export default new Vuex.Store({
  state: {
      latitude:39.9219,
      longitude:116.44355,
     // "token": "xrCBdiD-9MtZ3CSH6iTq4GnQnDNVXZXXKshyOc4kZKhvBD25sn3rELFGx-PbwgcoqId2aUwnYqR_II0Pyw0itU7widPg-WuctvlJPr7OdacX8wJegc_grX2j-yyhu3AwJt1J3OOEWK0=",
      "time_out": 7200,
      "nickname": "jorn",
      "avatar": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83erkFtQaXbLUZVkuGEBicwNIibVrmNALQdZ4qCgb6qKicTPWYOLjSeUZ79vZIRKA9u6AOAeYQkZfQVwgg\/132",
      "mobile": "17600539259",
      "birthday": "2015-11-13",
      "amount": "921.00",
      "restaurant_id": 16,
      carsInfo:[],
      UIEvent:new UIEvent(),
      carsInfoUE:new UIEvent(),
      cartTotal:0,
      shopDetil:{},
      remarkContent:''
  },
  mutations: {
    setShopId:function(status,payload){
      this.state.restaurant_id=payload.id
    },
    setCarsInfo:function(status,payload){
      
      this.state.carsInfo=payload;
      this.state.UIEvent.Emit();
      this.state.carsInfoUE.Emit()
    },
    setShopDetail(status,payload){
      this.state.shopDetil=payload
    },
    setRemarkContent(status,payload){
      this.state.remarkContent=payload
    }
  },
  actions: {
    //获取购物车列表
    getCartsInfo:function(status){
      
     let {commit}=status;
     console.log('获取购物车列表')
     //commit('setCarsInfo',[])
     tool.fetchPost( _interface.getCartList,{
      // token:this.state.token,
       id:this.state.restaurant_id
     }).then(res=>{
  
      // commit('setCarsInfo',res)
      if (res.errcode == 0) {
        let data=res.data;
        let cartTotal=0
        data.forEach(item=>{
          cartTotal+=item.quantity
        })
        this.state.cartTotal=cartTotal
        commit('setCarsInfo',data)
      }
      
     }).catch(err=>{
      // Toast({
      //     mes: '系统繁忙',
      //     timeout: 3000,
      //     callback: () => {
      //         console.log('我走咯！');
      //     }
      //   });
     })

    },
    addFood:function(status,payload){
      let {commit}=status;
      let {fid,counts}=payload;
      tool.fetchPost(_interface.addCart,{
        quantity: counts,
        id: fid
      }).then(res=>{
        
       // this.getCartsInfo(status)
        if(res.errcode==0)
        {
          this.dispatch('getCartsInfo');
        }
        else
        {
            Toast({
          mes: res.msg,
          timeout: 3000,
          callback: () => {
              console.log('我走咯！');
          }
        });
        }
      }).catch(err=>{

      })
    }
  }
})
