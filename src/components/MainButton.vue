<template>
  <div>
    <button @click="handleClick()">Click this button!</button>
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
</style>
