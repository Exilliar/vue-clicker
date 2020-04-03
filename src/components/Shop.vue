<template>
    <div>
        <h1 class="centre">Shop</h1>
        <div class="header" v-if="items">
            <template v-for="item in items">
                <div :key="item.name" v-if="item.unlocked">
                    <button @click="purchaseItem(item.id)">{{item.name}}</button>
                    <p>Cost: {{item.cost}}</p>
                    <p>Click value: {{item.clickValue}}</p>
                    <p>Time to click: {{item.clickTime}} second(s)</p>
                    <p>Purchased: {{item.total}}</p>
                    <p>Current clicks per sec: {{(item.clickValue/item.clickTime)*item.total}}</p>
                </div>
            </template>
        </div>
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
.centre {
    text-align: center;
}
</style>
