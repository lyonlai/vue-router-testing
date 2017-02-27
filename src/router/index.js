import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Login';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  debugger;
  if (to.path !== '/login' && !window.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
