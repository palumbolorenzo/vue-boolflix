import Vue from 'vue'
import App from './App.vue'

import LangFlag from 'vue-lang-code-flags';
 
Vue.component('LangFlag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
