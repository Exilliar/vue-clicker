import Vue from 'vue';
import App from './App.vue';

import { MdButton, MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdCard);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
