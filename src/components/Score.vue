<template>
  <div>
    <p>Clicked {{clicks}} times</p>
    <p>per second: {{Math.round(cps)}}</p>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    clicks: Number,
    cps: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
