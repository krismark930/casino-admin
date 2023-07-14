const Layout = () => import('@/layout/index.vue')
const CountUser = () => import('@/views/account/agents/count_user.vue')
const Record = () => import('@/views/account/agents/record.vue')
const RecordIP = () => import('@/views/account/agents/record_ip.vue')

export default [
  {
    path: '/account',
    component: Layout,
    name: 'account',
    meta: {
      title: 'menu.accounts',
    },
    icon: 'User',
    children: [
      {
        path: '/agents',
        name: 'agents',
        meta: {
          title: 'menu.agents',
          affix: true,
        },
        noChildren: true,
        children: [
          {
            path: 'count-user',
            name: 'agents.count_user',
            component: CountUser,
            props: true,
          },
          {
            path: 'record',
            name: 'agents.record',
            component: Record,
            props: true,
          },
          {
            path: 'record-ip',
            name: 'agents.record_ip',
            component: RecordIP,
            props: true,
          },
        ],
      },
    ],
  },
]
