const Layout = () => import('@/layout/index.vue')
const SystemParameters = () =>
  import('@/views/system-setting/systemParameters/index.vue')
const SystemNotifications = () =>
  import('@/views/system-setting/systemNotification/index.vue')
const SystemSMS = () => import('@/views/system-setting/systemSMS/index.vue')
const SystemInformation = () =>
  import('@/views/system-setting/systemInformation/index.vue')
const MemberDeposit = () =>
  import('@/views/system-setting/memberDeposit/index.vue')
const MemberWithdrawal = () =>
  import('@/views/system-setting/memberWithdrawal/index.vue')
const DailyAccount = () =>
  import('@/views/system-setting/dailyAccounts/index.vue')
const AGConversionRecord = () =>
  import('@/views/system-setting/AGconversionRecord/index.vue')
const OGConversionRecord = () =>
  import('@/views/system-setting/OGconversionRecord/index.vue')
const BBConversionRecord = () =>
  import('@/views/system-setting/BBconversionRecord/index.vue')
const MGConversionRecord = () =>
  import('@/views/system-setting/MGconversionRecord/index.vue')
const PTConversionRecord = () =>
  import('@/views/system-setting/PTconversionRecord/index.vue')
const ChessConversionRecord = () =>
  import('@/views/system-setting/chessconversionRecord/index.vue')
const MemberInformation = () =>
  import('@/views/system-setting/memberInformation/index.vue')

export default [
  {
    path: '/system-setting',
    component: Layout,
    name: 'system-setting',
    meta: {
      title: 'menu.systemSetting',
    },
    icon: 'Setting',
    children: [
      {
        path: '/systemParameters',
        name: 'systemParameters',
        component: SystemParameters,
        meta: {
          title: 'menu.systemParameters',
          affix: true,
        },
      },
      {
        path: '/systemNotifications',
        name: 'systemNotifications',
        component: SystemNotifications,
        meta: {
          title: 'menu.systemNotifications',
          affix: true,
        },
      },
      {
        path: '/systemSMS',
        name: 'systemSMS',
        component: SystemSMS,
        meta: {
          title: 'menu.systemSmss',
          affix: true,
        },
      },
      {
        path: '/systemInformation',
        name: 'systemInformation',
        component: SystemInformation,
        meta: {
          title: 'menu.systemInformation',
          affix: true,
        },
      },
      {
        path: '/memberDeposit',
        name: 'memberDeposit',
        component: MemberDeposit,
        meta: {
          title: 'menu.memberDeposit',
          affix: true,
        },
      },
      {
        path: '/memberWithdrawal',
        name: 'memberWithdrawal',
        component: MemberWithdrawal,
        meta: {
          title: 'menu.memberWithdrawal',
          affix: true,
        },
      },
      {
        path: '/dailyAccount',
        name: 'dailyAccount',
        component: DailyAccount,
        meta: {
          title: 'menu.dailyAccount',
          affix: true,
        },
      },
      {
        path: '/AGconversionRecord',
        name: 'AGconversionRecord',
        component: AGConversionRecord,
        meta: {
          title: 'menu.AGconveresionRecord',
          affix: true,
        },
      },
      {
        path: '/OGconversionRecord',
        name: 'OGconversionRecord',
        component: OGConversionRecord,
        meta: {
          title: 'menu.OGconveresionRecord',
          affix: true,
        },
      },
      {
        path: '/BBconversionRecord',
        name: 'BBconversionRecord',
        component: BBConversionRecord,
        meta: {
          title: 'menu.BBconveresionRecord',
          affix: true,
        },
      },
      {
        path: '/MGconversionRecord',
        name: 'MGConversionRecord',
        component: MGConversionRecord,
        meta: {
          title: 'menu.MGconveresionRecord',
          affix: true,
        },
      },
      {
        path: '/PTconversionRecord',
        name: 'PTConversionRecord',
        component: PTConversionRecord,
        meta: {
          title: 'menu.PTconveresionRecord',
          affix: true,
        },
      },
      {
        path: '/chessconversionRecord',
        name: 'chessconversionRecord',
        component: ChessConversionRecord,
        meta: {
          title: 'menu.chessconveresionRecord',
          affix: true,
        },
      },
      {
        path: '/memberInformation',
        name: 'memberInformation',
        component: MemberInformation,
        meta: {
          title: 'menu.memberInformation',
          affix: true,
        },
      },
    ],
  },
]
