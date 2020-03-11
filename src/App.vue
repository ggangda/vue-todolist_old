<template>
  <div id="app">
    <Clock/>
    <TodoList/>
  </div>
</template>

<script>
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

export default {
  name: 'App',
  components:{
    Clock,
    TodoList,
    TodoItems
  }
}
</script>
<style>

</style>
