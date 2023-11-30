
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/ueberuns', component: () => import('pages/AboutPage.vue') },
      { path: '/kontakt', component: () => import('pages/ContactPage.vue') },
      { path: 'datenschutz', component: () => import('pages/DatenschutzPage.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
