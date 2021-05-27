import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Accounts from '../views/Accounts.vue';
import Tutorial from '../views/Tutorial.vue';
import Conferences from '../views/Conferences.vue';
import Miscellaneous from '../views/Miscellaneous.vue';
import MyRelax from '../views/MyRelax.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts,
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial,
  },
  {
    path: '/conferences',
    name: 'Conferences',
    component: Conferences
  },
  {
    path: '/miscellaneous',
    name: 'Miscellaneous',
    component: Miscellaneous
  },
  {
    path: '/relax',
    name: 'MyRelax',
    component: MyRelax
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
