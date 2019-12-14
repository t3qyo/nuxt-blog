import Vue from 'vue'
// import App from './App'
// import router from './router'
import Amplify from 'aws-amplify'
import aws_exports from '../src/aws-exports'
import { components } from 'aws-amplify-vue' 

Vue.config.productionTip = false

Amplify.configure(aws_exports)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App,
    ...components
  },
  template: '<App/>'
})