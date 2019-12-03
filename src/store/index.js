import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import list from "../../mock/mock.js"
export default new Vuex.Store({
  state: {
    list:list,
    num:0,
  },
  mutations: {
    //数据
    getlist(state,item){
      state.list=item
    },
    //tab切换
    getnum(state,index){
      state.num=index
    },
    //搜索
    getfilter(state,ii){
      let filt=state.list.data.list.filter(item=>{
        return item.id==ii.id
      })
       console.log(filt)
      state.list=filt
    }
  },
  actions: {
  },
  modules: {
  }
})
