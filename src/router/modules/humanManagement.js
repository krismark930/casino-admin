const Layout = () => import('@/layout/index.vue')
const QueryBetSlip = () =>
  import('@/views/humanManagement/queryBetSlip/index.vue')
const QueryBetSlipK = () =>
  import('@/views/humanManagement/queryBetSlipK/index.vue')
const QueryBetSlipF = () =>
  import('@/views/humanManagement/queryBetSlipF/index.vue')
const Report = () => import('@/views/humanManagement/report/index.vue')
const ReportK = () => import('@/views/humanManagement/reportK/index.vue')
const ReportF = () => import('@/views/humanManagement/reportF/index.vue')
const Rebate = () => import('@/views/humanManagement/rebate/index.vue')
const SystemSetting = () =>
  import('@/views/humanManagement/systemSetting/index.vue')

export default [
  {
    path: '/humanManagement',
    component: Layout,
    name: 'humanManagement',
    meta: {
      title: 'menu.humanManagement',
    },
    icon: 'UserFilled',
    children: [
      {
        path: '/queryBetSlip',
        name: 'queryBetSlip',
        component: QueryBetSlip,
        meta: {
          title: 'menu.queryBetSlip',
          affix: true,
        },
      },
      {
        path: '/queryBetSlipK',
        name: 'queryBetSlipK',
        component: QueryBetSlipK,
        meta: {
          title: 'menu.queryBetSlipK',
          affix: true,
        },
      },
      {
        path: '/queryBetSlipF',
        name: 'queryBetSlipF',
        component: QueryBetSlipF,
        meta: {
          title: 'menu.queryBetSlipF',
          affix: true,
        },
      },
      {
        path: '/report',
        name: 'report',
        component: Report,
        meta: {
          title: 'menu.report',
          affix: true,
        },
      },
      {
        path: '/reportK',
        name: 'reportK',
        component: ReportK,
        meta: {
          title: 'menu.reportK',
          affix: true,
        },
      },
      {
        path: '/reportF',
        name: 'reportK',
        component: ReportF,
        meta: {
          title: 'menu.reportF',
          affix: true,
        },
      },
      {
        path: '/rebate',
        name: 'rebate',
        component: Rebate,
        meta: {
          title: 'menu.rebate',
          affix: true,
        },
      },
      {
        path: '/systemSetting',
        name: 'systemSetting',
        component: SystemSetting,
        meta: {
          title: 'menu.systemSetting',
          affix: true,
        },
      },
    ],
  },
]
