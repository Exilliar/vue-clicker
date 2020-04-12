<template>
  <v-content>
    <h1 class="text-center">Item Shop</h1>
    <div v-if="items">
      <template v-for="item in items">
        <item-card
          :key="item.id"
          :item="item"
          :clicks="clicks"
          @purchaseItem="purchaseItem"
        />
      </template>
    </div>
  </v-content>
</template>

<script>
import ItemCard from './ItemCard.vue';

export default {
  name: 'ItemShop',
  components: {
    ItemCard
  },
  props: {
    items: Array,
    clicks: Number
  },
  methods: {
    purchaseItem(item, totalCost) {
      this.$emit('purchaseItem', item, totalCost);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
