import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Accounts from '../views/Accounts.vue';
import Tutorial from '../views/Tutorial.vue';
import Conferences from '../views/Conferences.vue';
import Birthdays from '../views/Birthdays.vue';

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
    path: '/birthdays',
    name: 'Birthdays',
    component: Birthdays
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
