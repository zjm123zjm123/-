<template>
  <div class="home">
      <div class="main">
          <span v-for="(item,index) in list.data.list" :key="index" @click="getnum(index)">{{item.nav}}</span>
          <input type="text" placeholder="请输入内容" v-model="getfilter">
      </div>
      <!-- {{list.data.list[num].content}} -->
      <div class="main-page">
            <tabdom v-for="(item,index) in list.data.list[num].content" :key="index"
        :img="item.img"
        :name="item.name"
        :txt="item.txt"
        :xing="item.xing"
        :work="item.work"
    
       >
{{item.work}}
       </tabdom>
      </div>
      </div>
</template>

<script>
// 引入组件
import tabdom from "../../components/tabdom.vue"
// 引vuex
import {mapState,mapMutations} from "vuex"
export default {
    //接收vuex中的数据
      computed:{
          ...mapState(["list","num"])
      },
      //接收vuex中的方法
      created(){
        this.getnum(index),
        this.getfilter()
      },
      //接收vuex中的筛选条件
       methods:{
           ...mapMutations(["getnum","getfilter"])
       },
       components:{
           tabdom
       }
}
</script>

<style lang="scss" scoped>
    .home{
        width: 100%;
        height: 100%;
         display: flex;
  flex-direction: column;
    }
    .main{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .main-page{
        width: 100%;
        height: 100%;
         display: flex;
         flex-direction: column;
    }
</style>