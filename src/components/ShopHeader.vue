<template>
  <v-content>
    <v-app-bar
      flat
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title> {{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
      <slot></slot>
    </v-sheet>
  </v-content>
</template>
<script>
export default {
  name: 'ShopHeader',
  props: {
    title: String
  }
};
</script>
