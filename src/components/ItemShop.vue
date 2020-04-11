<template>
  <v-content>
    <h1 class="text-center">Item Shop</h1>
    <div v-if="items">
      <template v-for="item in items">
        <v-card
          :key="item.name"
          v-if="item.unlocked"
          raised
          :style="'margin: 2em;'"
        >
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>
            <p>Cost: {{ Math.round(item.cost) }}</p>
            <p>Click value: {{ item.clickValue }}</p>
            <p>Time to click: {{ item.clickTime }} second(s)</p>
            <p>Purchased: {{ item.total }}</p>
            <p>
              Current clicks per sec:
              {{ Math.round((item.clickValue / item.clickTime) * item.total) }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="md-raised md-primary button-style"
              @click="purchaseItem(item)"
              :disabled="item.cost > clicks"
              color="primary"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'ItemShop',
  props: {
    items: Array,
    clicks: Number
  },
  methods: {
    purchaseItem(item) {
      this.$emit('purchaseItem', item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
