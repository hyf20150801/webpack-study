<template>
  <div>
    <input type="checkbox" class="toggle" v-model="todo.completed" >
    <label>{{todo.content}}</label>
  </div>

</template>
