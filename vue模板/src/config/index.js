import {baseConfig} from "./config"
import qs from 'qs'
import { Toast } from 'vue-ydui/dist/lib.rem/dialog';
function AxioConfig(axios) {
  console.log(axios.defaults.headers)
  axios.defaults.timeout = 5000; //响应时间
  //application/json; charset=utf-8
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
  axios.defaults.baseURL = baseConfig.url   //配置接口地址
  //POST传参序列化(添加请求拦截器)
  axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(config.method  === 'post'){
      config.data = qs.stringify(config.data);
    }
    return config;
  },(error) =>{
    Toast({
      mes: '错误的传参',
      timeout: 1500
    });
    return Promise.reject(error);
  });

//返回状态判断(添加响应拦截器)
  axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(parseInt(res.data.errcode)!=0){
      Toast({
        mes:res.msg|| '服务器繁忙',
        timeout: 1500
      });
      return Promise.reject(res);
    }
    return res;
  }, (error) => {
    Toast({
      mes:res.msg||'服务器繁忙',
      timeout: 1500
    });
    return Promise.reject(error);
  });

}
export default AxioConfig




