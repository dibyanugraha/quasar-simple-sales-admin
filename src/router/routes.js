
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/menu',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Menu.vue') }
    ]
  },
  {
    path: '/document',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Document.vue') }
    ]
  },
  {
    path: '/setup',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/setup.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth.vue') }
    ]
  },
  {
    path: '/wizard',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SetupWizard.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes;
