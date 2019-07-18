<template>
  <div class="full-control">
    <span class="md-display-4">시계</span>
    <div class="md-layout-item">
      <md-field>
        <md-select v-model="priority" name="priority" id="priority" placeholder="중요도">
          <md-option value="1">높음</md-option>
          <md-option value="2">보통</md-option>
          <md-option value="3">낮음</md-option>
        </md-select>
      </md-field>
    </div>
    <div>
      <md-field>
        <label>Type here!</label>
        <md-input v-model="type"></md-input>
      </md-field>
    </div>
    <div>
      <md-button class="md-icon-button">
        <md-icon>add</md-icon>
      </md-button>
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
    type: null
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
