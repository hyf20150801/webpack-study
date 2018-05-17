<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input type="checkbox" class="toggle" v-model="todo.completed" >
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo"></button>
  </div>

</template>

<script>
export default {
  props:{
    todo:{
      type:Object,
      required:true,
    }
  },
  methods:{
    deleteTodo(){

    }
  }
}
</script>


<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
