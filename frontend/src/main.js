import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6ImpvYW8iLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NDM3MzM0NjUsImV4cCI6MTY0Mzk5MjY2NX0.XbPp97ViBptwmEZgpGshIvzhuFWjK5tqNn9FatzTkYs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')