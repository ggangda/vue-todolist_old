<template>
  <div id="app">
    <Clock/>
    <router-view/>
  </div>
</template>

<script>
import Clock from './components/Clock';
import TodoItems from './components/TodoItems';

export default {
  name: 'App',
  components:{
    Clock,
    TodoItems
  }
}
</script>
<style>

</style>
