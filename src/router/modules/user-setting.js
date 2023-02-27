const Layout = () => import('@/layout/index.vue')
const SubAccount = () => import('@/views/user-setting/subAccount/index.vue')
const Member = () => import('@/views/user-setting/member/index.vue')
const Agency = () => import('@/views/user-setting/agency/index.vue')

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
        path: '/agency',
        name: 'Agency',
        component: Agency,
        meta: {
          title: 'menu.agency',
          affix: true,
        },
      },
      {
        path: '/member',
        name: 'member',
        component: Member,
        meta: {
          title: 'menu.member',
          affix: true,
        },
      },
    ],
  },
]
