const Layout = () => import('@/layout/index.vue')
const SystemParameters = () =>
  import('@/views/system-setting/system-parameters/index.vue')
const Notifications = () =>
  import('@/views/system-setting/notifications/index.vue')
const SystemSmss = () => import('@/views/system-setting/system-smss/index.vue')
const SystemMessages = () =>
  import('@/views/system-setting/system-messages/index.vue')
const DataRefreshs = () =>
  import('@/views/system-setting/data-refreshs/index.vue')

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
        path: 'system-parameters',
        name: 'system-parameters',
        component: SystemParameters,
        meta: {
          title: 'menu.systemParameters',
          affix: true,
        },
      },
      {
        path: '/notifications',
        name: 'notifications',
        component: Notifications,
        meta: {
          title: 'menu.notifications',
          affix: true,
        },
      },
      {
        path: '/system-smss',
        name: 'system-smss',
        component: SystemSmss,
        meta: {
          title: 'menu.systemSmss',
          affix: true,
        },
      },
      {
        path: '/system-messages',
        name: 'system-messages',
        component: SystemMessages,
        meta: {
          title: 'menu.systemMessages',
          affix: true,
        },
      },
      {
        path: '/data-refreshs',
        name: 'data-refreshs',
        component: DataRefreshs,
        meta: {
          title: 'menu.dataRefreshs',
          affix: true,
        },
      },
    ],
  },
]
