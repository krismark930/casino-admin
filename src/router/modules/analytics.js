const Layout = () => import('@/layout/index.vue')
const Earnings = () => import('@/views/analytics/earnings/index.vue')
const Reports = () => import('@/views/analytics/reports/index.vue')

export default [
  {
    path: '/analytics',
    component: Layout,
    name: 'analytics',
    meta: {
      title: 'menu.analytics',
    },
    icon: 'setting',
    children: [
      {
        path: '/earnings',
        name: 'earnings',
        component: Earnings,
        meta: {
          title: 'menu.earnings',
          affix: true,
        },
      },
      {
        path: '/reports',
        name: 'reports',
        component: Reports,
        meta: {
          title: 'menu.reports',
          affix: true,
        },
      },
    ],
  },
]
