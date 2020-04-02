<template>
 <div id="app">
    <shop
        :items="items"
        @purchaseItem="purchaseItem"
    ></shop>
  <div id="main-content">
    <score :clicks="clicks"></score>
    <main-button @clicked="onMainButtonClick()"></main-button>
    <button @click="stopAutoClick()">Stop auto clicking</button>
  </div>
 </div>
</template>
<script>

// import axios from 'axios';

import config from './config';

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
      clicks: 500,
      items: config.items
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
        if (item.total-1 === 0) item.intervalID = this.autoIncClick(item);

        this.items.forEach((item, i) => {
          if (i != 0) {
            if (this.items[i-1].total >= item.unlockAt) item.unlocked = true;
          }
        });
      } else console.log("Cannot afford");
    },
    autoIncClick(item) {
      return window.setInterval(() => {
        console.log("go", item.name);
        this.clicks += item.clickValue * item.total;
      }, item.clickTime*1000);
    },
    stopAutoClick() {
      this.items.forEach(i => {
        window.clearInterval(i.intervalID);
      });
    }
  },
  beforeDestroy() {
    this.stopAutoClick();
  },
  // mounted() {
  //   axios.get('http://localhost:3000/items')
  //   .then(data => {
  //     console.log("data:", data);
  //     this.items = data.data;
  //   })
  // }
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
