const Layout = () => import('@/layout/index.vue')
const SubAccounts = () => import('@/views/account/sub-accounts/index.vue')
const Companys = () => import('@/views/account/companys/index.vue')
const ShareHolders = () => import('@/views/account/shareholders/index.vue')
const GeneralAgents = () => import('@/views/account/general-agents/index.vue')
const Agents = () => import('@/views/account/agents/index.vue')
const VIPs = () => import('@/views/account/vips/index.vue')
const VIP2s = () => import('@/views/account/vip2s/index.vue')
const Onlines = () => import('@/views/account/onlines/index.vue')

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
        path: '/sub-accounts',
        name: 'sub-accounts',
        component: SubAccounts,
        meta: {
          title: 'menu.subAccounts',
          affix: true,
        },
      },
      {
        path: '/companys',
        name: 'companys',
        component: Companys,
        meta: {
          title: 'menu.companys',
          affix: true,
        },
      },
      {
        path: '/shareholders',
        name: 'shareholders',
        component: ShareHolders,
        meta: {
          title: 'menu.shareHolders',
          affix: true,
        },
      },
      {
        path: '/general-agents',
        name: 'general-agents',
        component: GeneralAgents,
        meta: {
          title: 'menu.generalAgents',
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
      {
        path: '/vip2s',
        name: 'vip2s',
        component: VIP2s,
        meta: {
          title: 'menu.vip2s',
          affix: true,
        },
      },
      {
        path: '/onlines',
        name: 'onlines',
        component: Onlines,
        meta: {
          title: 'menu.onlines',
          affix: true,
        },
      },
    ],
  },
]
