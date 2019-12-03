<template>
  <div class="tabdom">
      <span class="a1">
          <img :src="img" alt="">
      </span>
      <span class="a2">
          <h3>{{txt}}</h3>
           <xing :xing="xing"></xing>
           <p>{{name}}</p>
        
      </span>
      <span class="a3">
             <work :work="work"></work>
      </span>
     
  </div>
</template>

<script>
//引入星星的组件
import xing from "../components/xing.vue"
//引入工作的组件
import work from "../components/work.vue"
export default {

    //接收数据props
props:["img","name","xing","txt","work"],
components:{
    xing,
    work
}
}
</script>

<style lang="scss" scoped>
   .tabdom{
       width: 100%;
       height: 100px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        align-items: center;
   }
   .a1{
       width: 20%;
   }
   .a2{
       width: 60%;
   }
    .tabdom span{
            display: flex;
      flex-direction: column;
    }

    .tabdom .a3{
          display: flex;
  flex-direction: column;
    }
</style>