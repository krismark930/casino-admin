const Layout = () => import('@/layout/index.vue')
const SubAccounts = () => import('@/views/account/sub-accounts/index.vue')
const Companys = () => import('@/views/account/companys/index.vue')
const ShareHolders = () => import('@/views/account/shareholders/index.vue')
const GeneralAgents = () => import('@/views/account/general-agents/index.vue')
const Agents = () => import('@/views/account/agents/index.vue')
const CountUser = () => import('@/views/account/agents/count_user.vue')
const Record = () => import('@/views/account/agents/record.vue')
const RecordIP = () => import('@/views/account/agents/record_ip.vue')
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
        meta: {
          title: 'menu.agents',
          affix: true,
        },
        noChildren: true,
        children: [
          {
            path: '',
            name: 'agents.home',
            component: Agents,
          },
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
