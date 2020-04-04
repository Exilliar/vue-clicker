<template>
  <div>
    <md-button class="md-raised md-accent round" @click="handleClick()">Click this button!</md-button>
  </div>
</template>

<script>
export default {
  name: 'MainButton',
  methods: {
      handleClick() {
          this.$emit('clicked');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round {
  border-radius: 50%;
  height: 15em;
  width: 15em;
}
</style>
