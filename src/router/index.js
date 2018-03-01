import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import Backstage from '../components/Backstage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: Backstage
    }
  ],
  mode: "history"
});
