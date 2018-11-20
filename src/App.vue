<template>
  <div id="app">
    <!-- <TodoList></TodoList> -->
    <NewTodoList></NewTodoList>
  </div>
</template>

<script>
// import TodoList from './views/TodoList.vue'
import NewTodoList from './views/TodoListNew.vue'

export default {
  name: 'app',
  components: {
    // TodoList,
    NewTodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
