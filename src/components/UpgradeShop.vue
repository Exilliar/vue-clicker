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
            <v-card-subtitle>{{upgrade.description}}</v-card-subtitle>
            <v-card-text>
              <p>Cost: {{upgrade.cost}}</p>
              <p>Currently bought: {{upgrade.total}}</p>
              <p>Limit: {{upgrade.limit}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                class="md-raised md-primary button-style"
                :disabled="upgrade.disabled || upgrade.cost > clicks"
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
    upgrades: Array,
    clicks: Number
  },
  methods: {
    purchaseUpgrade(upgrade) { this.$emit('purchaseUpgrade',upgrade); }
  },
  mounted() {
    console.log("clicks:", this.clicks);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centre {
    text-align: center;
}
</style>
