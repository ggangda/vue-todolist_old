<template>

  <md-list-item>
    <md-checkbox v-model="listItem" />
    <span class="md-list-item-text">{{ todoText }}</span>
  </md-list-item>
</template>

<script>
export default {
  name: 'TodoItems',
  props:{
    item:{
      type: Object,
      required: true,
    },
  },
  data(){
    return{
      todoText : "할일",
      listItem: null//['dd','dd']
    }
  }
}
</script>
<style lang="scss" scoped>
  .md-list {
    width: 100%;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>