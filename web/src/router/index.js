import { createRouter, createWebHashHistory } from 'vue-router'

import LayOut from '@/views/LayOut/LayOut.vue'

import store from '../store/index.js'

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/login.vue")

  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/pages/register.vue")

  },
  {
    path: "/homePage",
    name: "homePage",
    redirect: "/homeIndex",
    component: () => import("../views/pages/homePage.vue"),
    children:[
      {
        path: "/homeIndex",
        name: "homeIndex",
        component: () => import("../views/pages/homeIndex.vue")
      },
      {
        path: "/homeLiterature",
        name: "homeLiterature",
        component: () => import("../views/pages/homeLiterature.vue")
      },
      {
        path: "/homePhilosophy",
        name: "homePhilosophy",
        component: () => import("../views/pages/homePhilosophy.vue")
      },
      {
        path: "/shoppingCart",
        name: "shoppingCart",
        component: () => import("../views/pages/shoppingCart.vue")
      },
      {
        path: "/orderForm",
        name: "orderForm",
        component: () => import("../views/pages/orderForm.vue")
      },
      {
        path: "/goodsDetails",
        name: "goodsDetails",
        component: () => import("../views/pages/goodsDetails.vue")
      },
      {
        path: "/homehhh",
        name: "homehhh",
        component: () => import("../views/pages/homehhh.vue")
      },
    ]
  },
  {
    path: "/",
    name: "layout",
    component: LayOut,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/pages/index.vue")
      },
      {
        path: "/rolesList",
        name: "rolesList",
        component: () => import("../views/pages/rolesList.vue")
      },
      {
        path: "/commodityList",
        name: "commodityList",
        component: () => import("../views/pages/commodityList.vue")
      },
      // ????????????
      {
        path: "/releaseCommodities",
        name: "releaseCommodities",
        component: () => import("../views/pages/releaseCommodities.vue")
      },
      {
        path: "/orderList",
        name: "orderList",
        component: () => import("../views/pages/orderList.vue")
      },

      {
        path: "/userList",
        name: "userList",
        component: () => import("../views/pages/userList.vue")
      }
    ]
  }
]
// ??????hash????????????
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, form, next) => {
  /**
   * to:???????????????
   * form??????????????????
   * next???????????????next????????????????????????
   * 
   */
  // ????????????????????????
  // console.log("store",store.state.uInfo);
  const uInfo = store.state.uInfo.userInfo
  if (!uInfo.token) {
    // ?????????????????????login??????
    if (to.path === "/login" || to.path==='/register') {
      next()
      return
    }else{
      next("/login")
    }
  } else {
    next()
  }

})




export default router
