import axios from 'axios'

export default class Tool {
  constructor() {

  }
  //返回一个Promise(发送post请求)
  fetchPost(url, params = {}) {
    params = Object.assign({
      token:"w6iTlIg7y9XRsViHjyn2-ihdiMYY7JJm3T0TMWy2hO85_28JX0Q-q30K9ZZlPdubolrZ_plagCxjwld0F42zUcB5rIHTKiErrRUPVhaeXwfR8h8SY2EaWumwO3KtnWqHbtvew7UESgc="

    }, params)
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  //返回一个Promise(发送get请求)
  fetchGet(url, param) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: param
        })
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}