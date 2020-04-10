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
            <score :clicks="clicks" :cps="cps"/>
            <main-button @clicked="onMainButtonClick()"/>
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
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    Score,
    MainButton,
    ItemShop,
    UpgradeShop,
    // HelloWorld
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
        // this.cps += item.clickValue/item.clickTime;
        this.purchasedItems.push(item);
        this.updateCps();

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
      else {
        this.items[upgrade.upgradeId].clickValue += upgrade.increase;
        this.updateCps();
      }
    },
    updateCps() {
      this.cps = this.purchasedItems.map(i => i.clickValue/i.clickTime).reduce((a,b) => a + b, 0);

      this.updateClicks();
    },
    updateClicks() {
      if (this.cpsIntervalID !== -1) window.clearInterval(this.cpsIntervalID);
      if (this.cps === 0) return;

      let time = 1000/this.cps;

      const minTime = 10;

      let addClicks;

      if (time < minTime) {
        time = minTime;
        addClicks = this.cps/100;
      } else addClicks = 1;

      this.cpsIntervalID = window.setInterval(() => {
        this.clicks += addClicks;
      }, time);
    }
  }
}
</script>

