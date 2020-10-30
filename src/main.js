import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import got from './components/got.vue'
import lotr from './components/lotr.vue'
import starwars from './components/starwars.vue'

Vue.config.productionTip = false

const router = new VueRouter({

  routes: [
    {path:'/', component:Home, name:'Home'},
    {path:'/lotr', component: lotr, name:'lotr'},
    {path:'/got', component: got, name:'got'},
    {path:'/starwars', component: starwars, name:'starwars'}
  ],
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
