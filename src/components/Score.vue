<template>
  <v-content>
    <p>Clicked {{ clicks.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") }} times</p>
    <p>per second: {{Math.round(cps).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")}}</p>
  </v-content>
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
