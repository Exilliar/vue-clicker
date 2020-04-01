<template>
  <div>
    <p>Clicked {{clicks}} times</p>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    clicks: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
