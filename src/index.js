import Vue from 'vue'
import App from './App.vue'
/*
 * styling related imports
 * mainly referencing bulma and bulma related extensions.
 */
import './styles/main.scss'

new Vue({
  el: '#app',
  render: h => h(App)
})