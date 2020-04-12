<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col cols="4" style="height:100vh" class="overflow-y-auto">
          <item-shop
            :items="items"
            :clicks="clicks"
            @purchaseItem="purchaseItem"
          />
        </v-col>
        <v-col cols="4" class="text-center">
          <div id="main-content" class="page">
            <score :clicks="clicks" :cps="cps" />
            <main-button @clicked="onMainButtonClick()" />
          </div>
        </v-col>
        <v-col cols="4" style="height:100vh" class="overflow-y-auto">
          <upgrade-shop
            :upgrades="upgrades"
            :clicks="clicks"
            @purchaseUpgrade="purchaseUpgrade"
          />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
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
      clicks: 0,
      cps: 0, // clicks per second
      items: config.items,
      upgrades: config.upgrades,
      cpsIntervalID: -1,
      mainButtonClickValue: 1, //clicks per manual click
      purchasedItems: []
    };
  },
  methods: {
    onMainButtonClick() {
      this.clicks += this.mainButtonClickValue;
    },
    purchaseItem(item, totalCost) {
      item.total += item.buyNumber;

      this.clicks -= totalCost;

      for (let i = 0; i < item.buyNumber; i++) this.purchasedItems.push(item);

      this.updateCps();

      this.updatePrice(item);

      this.unlockItems();
    },
    unlockItems() {
      this.items.forEach((item, i) => {
        if (i != 0) {
          if (this.items[i - 1].total >= item.unlockAt) {
            item.unlocked = true;
            this.upgrades[i + 1].unlocked = true;
          }
        }
      });
    },
    purchaseUpgrade(upgrade) {
      upgrade.total++;
      upgrade.disabled = upgrade.total >= upgrade.limit;

      this.clicks -= upgrade.cost;

      this.updatePrice(upgrade);

      if (upgrade.upgradeId === -1)
        this.mainButtonClickValue += upgrade.increase;
      else {
        this.items[upgrade.upgradeId].clickValue += upgrade.increase;
        this.updateCps();
      }
    },
    updateCps() {
      this.cps = this.purchasedItems
        .map(i => i.clickValue / i.clickTime)
        .reduce((a, b) => a + b, 0);

      this.updateClicks();
    },
    updateClicks() {
      if (this.cpsIntervalID !== -1) window.clearInterval(this.cpsIntervalID);
      if (this.cps === 0) return;

      let time = 1000 / this.cps;

      const minTime = 10;

      let addClicks;

      if (time < minTime) {
        time = minTime;
        addClicks = this.cps / 100;
      } else addClicks = 1;

      this.cpsIntervalID = window.setInterval(() => {
        this.clicks += addClicks;
      }, time);
    },
    updatePrice(object) {
      object.cost *= object.increaseMulti;
    }
  }
};
</script>
