<template>
  <v-content>
      <h1 class="text-center">Upgrades Shop</h1>
      <div class="header" v-if="upgrades">
        <template v-for="upgrade in upgrades">
          <v-card
            :key="upgrade.id"
            v-if="upgrade.unlocked"
            raised
            :style="'margin: 2em;'"
          >
            <v-card-title>{{upgrade.name}}</v-card-title>
            <v-card-text>{{upgrade.description}}</v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                class="md-raised md-primary button-style"
                :disabled="upgrade.disabled"
                @click="purchaseUpgrade(upgrade)"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </div>
  </v-content>
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
