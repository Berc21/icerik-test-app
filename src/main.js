import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faQuestion,faBell, faUser, faExclamationCircle,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faQuestion, faBell, faUser, faExclamationCircle, faPencilAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.component(Buefy.Modal.name, Buefy.Modal)
Vue.component(Buefy.Message.name, Buefy.Message)
Vue.component(Buefy.Input.name, Buefy.Input)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
