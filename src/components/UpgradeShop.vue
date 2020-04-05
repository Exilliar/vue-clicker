<template>
  <div class="page">
      <h1 class="centre">Upgrades Shop</h1>
      <div class="header" v-if="upgrades">
        <template v-for="upgrade in upgrades">
          <div :key="upgrade.id" class="item-info" v-if="upgrade.unlocked">
            <md-button
              class="md-raised md-primary button-style"
              :disabled="upgrade.disabled"
              @click="purchaseUpgrade(upgrade)"
            >
              {{upgrade.name}}
            </md-button>
            <p>{{upgrade.description}}</p>
          </div>
        </template>
      </div>
  </div>
</template>

<script>
export default {
  name: 'UpgradeShop',
  props: {
    upgrades: Array
  },
  methods: {
    purchaseUpgrade(upgrade) { this.$emit('purchaseUpgrade',upgrade); }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centre {
    text-align: center;
}
</style>
