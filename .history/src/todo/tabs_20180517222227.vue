<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLenght}}items left</span>
    <span class="tabs">
    </span 
      v-for="state in states"
      :key="state"
      :class="[state,filter === state ? 'actived':'']"
    >
  </div>
</template>
