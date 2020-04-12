<template>
  <v-content>
    <v-card
      :key="item.name"
      v-if="item.unlocked"
      raised
      :style="'margin: 2em;'"
    >
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-text>
        <v-select
          v-model="item.buyNumber"
          :items="[1, 10, 100]"
          solo
          :style="'width:25%;'"
        ></v-select>
        <p>Cost: {{ Math.round(totalCost) }}</p>
        <p>Click value: {{ item.clickValue }}</p>
        <p>Time to click: {{ item.clickTime }} second(s)</p>
        <p>Purchased: {{ item.total }}</p>
        <p>
          Current clicks per sec:
          {{ currentcps }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="md-raised md-primary button-style"
          @click="purchaseItem(item)"
          :disabled="totalCost > clicks"
          color="primary"
        >
          Buy
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>
<script>
export default {
  name: 'ItemCard',
  props: {
    item: Object,
    clicks: Number
  },
  computed: {
    totalCost() {
      let cost = this.item.cost;
      let multi = this.item.increaseMulti;
      let total = 0;

      for (let i = 0; i < this.item.buyNumber; i++) {
        total += cost;
        cost *= multi;
      }

      return total;
    },
    currentcps() {
      return Math.round(
        (this.item.clickValue / this.item.clickTime) * this.item.total
      );
    }
  },
  methods: {
    purchaseItem(item) {
      this.$emit('purchaseItem', item, this.totalCost);
    }
  }
};
</script>
