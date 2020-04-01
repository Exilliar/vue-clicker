<template>
    <div class="header">
        <template v-for="item in items">
            <div :key="item.name" v-if="item.unlocked">
                <button @click="purchaseItem(item.id)">{{item.name}}</button>
                <p>Cost: {{item.cost}}</p>
                <p>Purchased: {{item.total}}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
      items: Array
  },
  methods: {
      purchaseItem(id) {
          this.$emit('purchaseItem',id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    display: flex;
    justify-content: space-around;
}
</style>
