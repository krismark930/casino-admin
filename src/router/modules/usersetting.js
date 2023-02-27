const Layout = () => import('@/layout/index.vue')
const SubAccounts = () => import('@/views/usersetting/sub-accounts/index.vue')
const Agents = () => import('@/views/usersetting/agents/index.vue')
const VIPs = () => import('@/views/usersetting/vips/index.vue')

export default [
  {
    path: '/usersetting',
    component: Layout,
    name: 'usersetting',
    meta: {
      title: 'menu.userSettings',
    },
    icon: 'User',
    children: [
      {
        path: '/sub-accounts',
        name: 'sub-accounts',
        component: SubAccounts,
        meta: {
          title: 'menu.subAccounts',
          affix: true,
        },
      },
      {
        path: '/agents',
        name: 'agents',
        component: Agents,
        meta: {
          title: 'menu.agents',
          affix: true,
        },
      },
      {
        path: '/vips',
        name: 'vips',
        component: VIPs,
        meta: {
          title: 'menu.vips',
          affix: true,
        },
      },
    ],
  },
]
