<template>
<div class="clock-control">
    <span id="clock" class="md-display-4">{{ time }}</span>
</div>
</template>
<script>
	export default {
	    name : 'Clock',
	    data() {
	        return{
	            time :  this.$moment(new Date()).format('HH:mm:ss')
	        }
	    },
	    created(){
	        setInterval(() => {
                this.time = this.$moment(new Date()).format('HH:mm:ss')
	        }, 1000);        
	    }
	}
</script>
<style lang="scss" scoped>
  .clock-control{
    margin: 0 40% 0 40%;
    position: relative;
  }
</style>