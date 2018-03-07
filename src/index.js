import Vue from 'vue'
import AtHand from './AtHand.vue'

import store from './store';

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(AtHand)
}).$mount('#app')
