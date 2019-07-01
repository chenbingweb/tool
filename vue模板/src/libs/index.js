import Tool from "./Tool";
//{ Confirm, Alert, Toast, Notify, Loading }
import { Confirm, Alert, Toast, Notify, Loading }from 'vue-ydui/dist/lib.rem/dialog';
import {baseConfig} from "../config/config"
import {UIEvent} from "./UIEvent"

let Obj={
  install:function(Vue,option){
    Vue.prototype.$tool=new Tool();
    Vue.prototype.$tip={
      Confirm, Alert, Toast, Notify, Loading
    }
    Vue.prototype.$imgUrl=baseConfig.imgUrl
    Vue.prototype.$UE=new UIEvent()
  }
}
export default Obj
