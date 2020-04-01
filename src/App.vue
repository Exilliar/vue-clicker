<template>
 <div id="app">
    <shop
        :items="items"
        @purchaseItem="purchaseItem"
    ></shop>
  <div id="main-content">
    <score :clicks="clicks"></score>
    <main-button @clicked="onMainButtonClick()"></main-button>
  </div>
 </div>
</template>
<script>

import Score from './components/Score.vue';
import MainButton from './components/MainButton.vue';
import Shop from './components/Shop.vue';

export default {
  name: 'App',
  components: {
    Score,
    MainButton,
    Shop
  },
  data() {
    return {
      clicks: 5,
      items: [{
          id: 0,
          name: "Item 1",
          total: 0,
          clickValue: 1,
          cost: 50,
          unlocked: true
        }, {
          id: 1,
          name: "Item 2",
          total: 0,
          clickValue: 1,
          cost: 100,
          unlocked: true
        }, {
          id: 2,
          name: "Item 3",
          total: 0,
          clickValue: 1,
          cost: 150,
          unlocked: false
      }]
    }
  },
  methods: {
    onMainButtonClick() {
      this.clicks ++;
    },
    purchaseItem(id) {
      const item = this.items[id];
      if (this.clicks >= item.cost) {
        item.total ++;
        this.clicks -= item.cost;
      } else console.log("Cannot afford");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main-content {
  text-align: center;
  margin-top: 60px;
}
</style>
