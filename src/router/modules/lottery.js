const Layout = () => import('@/layout/index.vue')
const MarkSixs = () => import('@/views/lottery/mark-sixs/index.vue')
const TimelyColors = () => import('@/views/lottery/timely-colors/index.vue')
export default [
  {
    path: '/lottery',
    component: Layout,
    name: 'lottery',
    meta: {
      title: 'menu.lotterys',
    },
    icon: 'Orange',
    children: [
      {
        path: '/mark-sixs',
        component: MarkSixs,
        name: 'mark-sixs',
        meta: {
          title: 'menu.markSixs',
          affix: true,
        },
      },
      {
        path: '/timely-colors',
        component: TimelyColors,
        name: 'timely-colors',
        meta: {
          title: 'menu.timelyColor2',
          affix: true,
        },
      },
    ],
  },
]
