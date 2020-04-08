<template>
    <div class="page">
        <h1 class="centre">Item Shop</h1>
        <div class="header" v-if="items">
            <template v-for="item in items">
                <div :key="item.name" v-if="item.unlocked" class="item-info">
                    <v-btn
                        class="md-raised md-primary button-style"
                        @click="purchaseItem(item)"
                        :disabled="item.cost > clicks"
                    >
                        {{item.name}}
                    </v-btn>
                    <p>Cost: {{item.cost}}</p>
                    <p>Click value: {{item.clickValue}}</p>
                    <p>Time to click: {{item.clickTime}} second(s)</p>
                    <p>Purchased: {{item.total}}</p>
                    <p>Current clicks per sec: {{Math.round((item.clickValue/item.clickTime)*item.total)}}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ItemShop',
  props: {
      items: Array,
      clicks: Number
  },
  methods: {
      purchaseItem(item) { this.$emit('purchaseItem',item); }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centre {
    text-align: center;
}
</style>
