import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve)=> {
          return require.ensure([], () => {
              resolve(require("./views/Home.vue"))
          })},
        beforeEnter:function(to,from,next){
           
           next()
        }
     },
    
    {
      path: '/foodDetail/:fid',
      name: 'foodDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: (resolve) => {
          return require.ensure([], () => {
              resolve(require("./views/foodDetail.vue"))
          })
      }
    },
    {
        path: '/myCenter',
        name: 'MyCenter',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/myCenter.vue'),
        beforeEnter:function(to,from,next){
           
            next()
         }
    },
    {
        path: '/shopList',
        name: 'shopList',
        component:(resolve)=> {
            return require.ensure([], () => {
                resolve(require("./views/shopList.vue"))
            })}
    },
    {
        path: '/restShop',
        name: 'restShop',
        component:(resolve)=> {
            return require.ensure([], () => {
                resolve(require("./views/restaurout.vue"))
            })}
    },
    {
        path:"/confirm",
        name:'confirm',
        component:resolve=>{
            return require.ensure([],()=>{
                resolve(require("./views/confirm.vue"))
            })
        }
    },
    {
        path:"/remarkPage",
        name:'remarkPage',
        component:resolve=>{
            return require.ensure([],()=>{
                resolve(require("./views/remarkPage.vue"))
            })
        }
    },
    {
        path:"/totalFee",
        name:'totalFee',
        component:resolve=>{
            return require.ensure([],()=>{
                resolve(require("./views/totalFee.vue"))
            })
        }
    }
    

  ]
})
