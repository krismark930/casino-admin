const Layout = () => import('@/layout/index.vue')
const SubAccount = () => import('@/views/user-setting/subAccount/index.vue')
const Member = () => import('@/views/user-setting/member/index.vue')
const Agency = () => import('@/views/user-setting/agency/index.vue')
const Company = () => import('@/views/user-setting/company/index.vue');
const Share = () => import('@/views/user-setting/share/index.vue');
const GeneralAgent = () => import('@/views/user-setting/general_agent/index.vue');
const Member2 = () => import('@/views/user-setting/member_2/index.vue');


export default [
  {
    path: '/user-setting',
    component: Layout,
    name: 'user-setting',
    meta: {
      title: 'menu.userSetting',
    },
    icon: 'User',
    children: [
      {
        path: '/subAccount',
        name: 'subAccount',
        component: SubAccount,
        meta: {
          title: 'menu.subAccount',
          affix: true,
        },
      },
      {
        path: '/company',
        name: 'Company',
        component: Company,
        meta: {
          title: 'menu.companys',
          affix: true,
        },
      },
      {
        path: '/share',
        name: 'Share',
        component: Share,
        meta: {
          title: 'menu.shareHolders',
          affix: true,
        },
      },
      {
        path: '/general-agent',
        name: 'GeneralAgent',
        component: GeneralAgent,
        meta: {
          title: 'menu.generalAgents',
          affix: true,
        },
      },
      {
        path: '/agency',
        name: 'Agency',
        component: Agency,
        meta: {
          title: 'menu.agency',
          affix: true,
        },
      },
      {
        path: '/userMember',
        name: 'userMember',
        component: Member,
        meta: {
          title: 'menu.member',
          affix: true,
        },
      },
      // {
      //   path: '/member-2',
      //   name: 'Member2',
      //   component: Member2,
      //   meta: {
      //     title: 'menu.vip2s',
      //     affix: true,
      //   },
      // },
    ],
  },
]
