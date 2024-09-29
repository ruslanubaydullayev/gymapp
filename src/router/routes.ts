import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/pages/sign-in.vue'),
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/main.vue'),
  },
  {
    path: '/athletes',
    name: 'athletes-index',
    component: () => import('@/pages/athletes/index.vue'),
  },
  {
    path: '/athletes/add',
    name: 'athletes-add',
    component: () => import('@/pages/athletes/add.vue'),
  },
  {
    path: '/athletes/:id',
    name: 'athletes-detail',
    component: () => import('@/pages/athletes/id.vue'),
  },
  {
    path: '/auction',
    name: 'auction',
    component: () => import('@/pages/auction/index.vue'),
  },
  {
    path: '/auction/:id',
    name: 'auction-detail',
    component: () => import('@/pages/auction/id.vue'),
  },
  {
    path: '/auction/add',
    name: 'auction-add',
    component: () => import('@/pages/auction/add.vue'),
  },

  {
    path: '/stats',
    name: 'stats',
    component: () => import('@/pages/stats.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/profile.vue'),
  },
  /*  {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About.vue'),
    },*/
  /*{
    path: '/',
    component: () => import('../components/Home.vue'),
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'animate__animated animate__fadeOutRight'
    }

  },
  {
    path: '/about',
    component: () => import('../components/About.vue'),
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft'
    }
  }*/
] as RouteRecordRaw[]
