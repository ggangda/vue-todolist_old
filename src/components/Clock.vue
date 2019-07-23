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
            time : null
        }
    },
    methods: {
        setTimeData(){
            var cd = new Date();
            var cdtime = cd.toLocaleTimeString('en-GB');
            this.time = cdtime;
        }
    },
    created(){
        setInterval(() => {
            this.setTimeData()
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