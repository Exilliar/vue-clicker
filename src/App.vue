<template>
 <div id="app">
    <item-shop
        :items="items"
        :clicks="clicks"
        @purchaseItem="purchaseItem"
    />
    <div id="main-content" class="page">
      <score :clicks="clicks" :cps="cps"/>
      <main-button @clicked="onMainButtonClick()"/>
    </div>
    <upgrade-shop
        :upgrades="upgrades"
        @purchaseUpgrade="purchaseUpgrade"
    />
 </div>
</template>
<script>

// import axios from 'axios';

import config from './config';

import Score from './components/Score.vue';
import MainButton from './components/MainButton.vue';
import ItemShop from './components/ItemShop.vue';
import UpgradeShop from './components/UpgradeShop.vue';

export default {
  name: 'App',
  components: {
    Score,
    MainButton,
    ItemShop,
    UpgradeShop
  },
  data() {
    return {
      clicks: 500,
      cps: 0, // clicks per second
      items: config.items,
      upgrades: config.upgrades,
      cpsIntervalID: null,
      mainButtonClickValue: 1, //clicks per click
    }
  },
  methods: {
    onMainButtonClick() {
      this.clicks += this.mainButtonClickValue;
    },
    purchaseItem(item) {
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
    purchaseUpgrade(upgrade) {
      upgrade.total ++;
      upgrade.disabled = upgrade.total >= upgrade.limit;

      this.clicks -= upgrade.cost;

      if (upgrade.upgradeId === -1) this.mainButtonClickValue += upgrade.increase;
      else this.items[upgrade.upgradeId].clickValue += upgrade.increase;
    },
    updateClicks() {
      const time = 1000/this.cps;

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
  overflow-y: hidden;
}
#main-content {
  text-align: center;
  /* margin-top: 60px; */
}
.page {
    height: 100vh;
    width: 33vw;
    overflow-y: scroll;
}
.header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.item-info {
    border: 1px solid #ccc;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;
    margin-right: 0.5em;
    padding: 0.5em;
}
.button-style {
    border-radius: 16px;
}
</style>
