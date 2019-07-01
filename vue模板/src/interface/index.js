import {_interface} from "./interface"
let Obj={
  install:function(Vue,option){
     Vue.prototype.$interface=_interface
  }
}
export default Obj
