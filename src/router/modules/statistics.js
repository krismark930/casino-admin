const Layout = () => import('@/layout/index.vue')
const DailyAccounts = () => import('@/views/statistics/dailyAccounts/index.vue')
const DividendDetails = () =>
  import('@/views/statistics/dividendDetails/index.vue')
const SystemLog = () => import('@/views/statistics/systemLog/index.vue')
const NumberofUser = () => import('@/views/statistics/numberofUser/index.vue')

export default [
  {
    path: '/statistics',
    component: Layout,
    name: 'statistics',
    meta: {
      title: 'menu.statistics',
    },
    icon: 'DataAnalysis',
    children: [
      {
        path: '/dailyAccounts',
        name: 'dailyAccounts',
        component: DailyAccounts,
        meta: {
          title: 'menu.dailyAccounts',
          affix: true,
        },
      },
      {
        path: '/dividendDetails',
        name: 'dividendDetails',
        component: DividendDetails,
        meta: {
          title: 'menu.dividendDetails',
          affix: true,
        },
      },
      {
        path: '/systemLog',
        name: 'systemLog',
        component: SystemLog,
        meta: {
          title: 'menu.systemLog',
          affix: true,
        },
      },
      {
        path: '/numberofUser',
        name: 'numberofUser',
        component: NumberofUser,
        meta: {
          title: 'menu.numberofUserOnline',
          affix: true,
        },
      },
    ],
  },
]
