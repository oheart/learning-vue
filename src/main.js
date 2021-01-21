import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/common.css'

createApp(App).mount('#app')

// vue2中渲染app
/* new Vue({
  router,
  store,
  i18n,
  data: {
    bus
  },
  mounted() {
  },
  render: h => h(App)
}).$mount('#app')
 */
