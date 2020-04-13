<template>
  <v-content>
    <!-- <shop-header :title="'Item Shop'" /> -->
    <shop-header :title="'Item Shop'">
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
    </shop-header>
  </v-content>
</template>

<script>
import ShopHeader from './ShopHeader.vue';
import ItemCard from './ItemCard.vue';

export default {
  name: 'ItemShop',
  components: {
    ItemCard,
    ShopHeader
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
