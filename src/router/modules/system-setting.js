const Layout = () => import('@/layout/index.vue')
const SystemParameters = () =>
  import('@/views/system-setting/systemParameters/index.vue')
const SystemNotifications = () =>
  import('@/views/system-setting/systemNotification/index.vue')
const SystemSMS = () => import('@/views/system-setting/systemSMS/index.vue')
const Member = () => import('@/views/system-setting/member/index.vue')
const ConversionRecords = () =>
  import('@/views/system-setting/conversionRecords/index.vue')
const BasicDataSettings = () =>
  import('@/views/system-setting/basicDataSettings/index.vue')

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
          title: 'menu.systemSms',
          affix: true,
        },
      },
      {
        path: '/member',
        name: 'member',
        component: Member,
        meta: {
          title: 'menu.memberInformation',
          affix: true,
        },
      },
      {
        path: '/conversionRecords',
        name: 'conversionRecords',
        component: ConversionRecords,
        meta: {
          title: 'menu.conversionRecords',
          affix: true,
        },
      },
      {
        path: '/basicDataSettings',
        name: 'basicDataSettings',
        component: BasicDataSettings,
        meta: {
          title: 'menu.basicDataSettings',
          affix: true,
        },
      },
    ],
  },
]
