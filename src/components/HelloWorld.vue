<template>
  <div class="full-control">
    <span id="clock" class="md-display-4">시계 {{ time }}</span>
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
        <md-button class="md-icon-button">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </div>
    <div>
      <md-list>
        <md-subheader>Notifications</md-subheader>
        <md-list-item>
          <md-checkbox v-model="notification" value="preview" />
          <span class="md-list-item-text">Show content preview</span>
        </md-list-item>
        <md-list-item>
          <md-checkbox v-model="notification" value="sound" />
          <span class="md-list-item-text">Sound</span>
        </md-list-item>
        <md-list-item>
          <md-checkbox v-model="notification" value="vibrate" />
          <span class="md-list-item-text">Vibrate</span>
        </md-list-item>
        <md-list-item>
          <md-checkbox v-model="notification" value="light" />
          <span class="md-list-item-text">Notification light</span>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  data: () => ({
    notification: ['sound', 'vibrate'],
    priority: null,
    type: null,
    time : ''
  })
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
