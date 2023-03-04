// import { reject } from 'core-js/fn/promise'
import { createStore } from 'vuex'
import uInfo from "./state/userList.js"


export default createStore({
  // 全局状态初始值
  state: {
    count:1,
  },
  // 计算state，获取对应的值
  getters: {
    countStatus(state){
      return state.count<=1
    }
  },
  // 更新状态的方法state的唯一方法，commit  mutations
  mutations: {
    setCount(state,num){
      state.count=num
    }
  },
  //可以异步操作，可以返回promise，更新数据还是传递到mutations去修改
  actions: {
    setCountPromise(context,num){
      return new Promise((resolve,reject)=>{
        if(num>100){
          reject("值不能大于100")
        }else{
          context.commit("setCount",num)
          resolve()
        }
      })
    }
  },
  // 数据比较多，分模块
  modules: {
    uInfo
  }
})
