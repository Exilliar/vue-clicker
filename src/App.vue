<template>
 <div id="app">
    <shop
        :items="items"
        @purchaseItem="purchaseItem"
    ></shop>
    <div id="main-content">
      <score :clicks="clicks" :cps="cps"></score>
      <main-button @clicked="onMainButtonClick()"></main-button>
    </div>
    <upgrades></upgrades>
 </div>
</template>
<script>

// import axios from 'axios';

import config from './config';

import Score from './components/Score.vue';
import MainButton from './components/MainButton.vue';
import Shop from './components/Shop.vue';
import Upgrades from './components/Upgrades.vue';

export default {
  name: 'App',
  components: {
    Score,
    MainButton,
    Shop,
    Upgrades
  },
  data() {
    return {
      clicks: 500,
      cps: 0, // clicks per second
      items: config.items,
      upgrades: config.upgrades,
      cpsIntervalID: null
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
        this.cps += item.clickValue/item.clickTime;

        window.clearInterval(this.cpsIntervalID);
        this.cpsIntervalID = this.updateClicks();

        this.items.forEach((item, i) => {
          if (i != 0) {
            if (this.items[i-1].total >= item.unlockAt) item.unlocked = true;
          }
        });
      } else console.log("Cannot afford");
    },
    updateClicks() {
      const time = 1000/this.cps;
      console.log("time:", time);
      console.log(1000/1);

      return window.setInterval(() => {
        this.clicks ++;
      }, time);
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main-content {
  text-align: center;
  margin-top: 60px;
}
.page {
    height: 100vh;
    overflow-y: scroll;
}
</style>
