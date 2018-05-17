<template>
   <div id="app">
       <div id="cover"></div>
       <Header></Header>
   </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer'
export default {
      components:{
           Header,
       },
  data(){
      return{
     
      }
  }
}
</script>

<style lang="stylus" scoped>
// lang是指定语言,scoped只应用于这个组件内
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
