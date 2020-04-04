<template>
    <div class="page">
        <h1 class="centre">Shop</h1>
        <div class="header" v-if="items">
            <template v-for="item in items">
                <div :key="item.name" v-if="item.unlocked" class="item-info">
                    <md-button
                        class="md-raised md-primary button-style"
                        @click="purchaseItem(item.id)"
                    >
                        {{item.name}}
                    </md-button>
                    <p>Cost: {{item.cost}}</p>
                    <p>Click value: {{item.clickValue}}</p>
                    <p>Time to click: {{item.clickTime}} second(s)</p>
                    <p>Purchased: {{item.total}}</p>
                    <p>Current clicks per sec: {{Math.round((item.clickValue/item.clickTime)*item.total)}}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
      items: Array
  },
  methods: {
      purchaseItem(id) {
          this.$emit('purchaseItem',id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.centre {
    text-align: center;
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
