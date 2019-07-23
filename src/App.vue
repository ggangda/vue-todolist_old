<template>
  <div id="app">
    <Clock></Clock>
    <router-view/>
  </div>
</template>

<script>
import Clock from './components/Clock';

export default {
  name: 'App',
  components:{
    Clock
  }
}
</script>
<style>

</style>
