<template>
<md-list id="itemlist">
  <md-subheader>To-do-list</md-subheader>
  <md-list-item>
    <md-checkbox v-model="listItem"/>
    <span class="md-list-item-text">{{ todoText }}</span>
  </md-list-item>
</md-list>
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
      todoText : this.item.todoText,
      listItem: ''          //['dd','dd']
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