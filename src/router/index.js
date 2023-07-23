import { createRouter, createWebHashHistory } from 'vue-router';

import StateListVue from '@/components/StateList.vue';

import AboutSite from '@/components/AboutSite.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // Each object inside this array is essentially a route to navigate to
    {
      path: '/',
      name: 'StateList',
      component: StateListVue,
    },

    {
      path: '/about',
      name: 'AboutSite',
      component: AboutSite,
    },
  ],
});
