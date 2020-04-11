<template>
  <v-container>
    <v-btn
      color="red"
      class="round"
      fab
      height="15em"
      width="15em"
      @click="handleClick()"
      >Click this button!</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: 'MainButton',
  methods: {
    handleClick() {
      this.$emit('clicked');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round {
  border-radius: 50%;
  height: 15em;
  width: 15em;
}
</style>
