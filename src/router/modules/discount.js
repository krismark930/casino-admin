const Layout = () => import('@/layout/index.vue')
const Discount = () => import('@/views/discount/index.vue')

export default [
  {
    path: '/discount',
    component: Layout,
    meta: {
      title: 'menu.discount',
    },
    icon: 'Message',
    children: [
      {
        path: '',
        name: 'Discount',
        component: Discount,
        meta: {
          title: 'menu.discount',
          affix: true,
        },
      },
    ],
  },
]
