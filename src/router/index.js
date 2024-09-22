import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
      path: '/',
      name: 'hello',
      component: () => import('../views/HelloView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue') 
    },
    {
      path: '/verif',
      name: 'verif',
      component: () => import('../views/VerifView.vue') 
    },
    {
      path: '/stins',
      name: 'stins',
      component: () => import('../views/StinsView.vue') 
    },
  ];

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

  export default router;
