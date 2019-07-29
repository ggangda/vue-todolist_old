<template>
<div class="full-control">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-15">
        <md-field>
          <md-select v-model="priority" name="priority" id="priority" placeholder="중요도">
            <md-option value="1">높음</md-option>
            <md-option value="2">보통</md-option>
            <md-option value="3">낮음</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-75">
        <md-field>
          <label>Type here!</label>
          <md-input v-model="type"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-10">
        <md-button class="md-icon-button" v-on:click="add">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </div>
    <div>
    
    <TodoItems v-for="item in items" :key="item.id" :item="item"/>
    </div>
</div>
</template>

<script>
import TodoItems from './TodoItems';

export default {
  name: 'TodoList',
  components : {
    TodoItems
  },
  data: () => ({
    priority: null,
    type: null,
    items : [
      {
        'todoText': 'test'
      }
    ]  
  }),
  methods:{
    add : function(){
      this.items.push({'todoText':'12312312323123123'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .full-control{
    margin: 0 20% 0 20%;
    position: relative;
  }
  .md-list {
    width: 100%;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
