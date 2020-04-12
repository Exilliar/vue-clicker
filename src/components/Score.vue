<template>
  <v-content>
    <p>
      Clicked
      {{ displayClicks }}
      times
    </p>
    <p>
      per second:
      {{ displayCps }}
    </p>
  </v-content>
</template>

<script>
export default {
  name: 'Score',
  props: {
    clicks: Number,
    cps: Number
  },
  computed: {
    displayClicks() {
      return Math.round(this.clicks)
        .toString()
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    displayCps() {
      return Math.round(this.cps)
        .toString()
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
