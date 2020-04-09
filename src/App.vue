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
      window.clearInterval(this.cpsIntervalID);

      const time = 1000/this.cps;

      console.log("time:", time);

      return window.setInterval(() => {
        this.clicks ++;
      }, time);
    }
  }
}
</script>

