const Layout = () => import('@/layout/index.vue')
const SystemLog = () => import('@/views/systemlogs/system-logs/index.vue')
export default [
  {
    path: '/systemlogs',
    component: Layout,
    name: 'systemlogs',
    meta: {
      title: 'menu.systemLogs',
    },
    icon: 'Document',
    children: [
      {
        path: '/system-logs',
        name: 'system-logs',
        component: SystemLog,
      },
    ],
  },
]
