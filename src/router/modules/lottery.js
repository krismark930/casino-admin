const Layout = () => import('@/layout/index.vue')
const MarkSixs = () => import('@/views/lottery/mark-sixs/index.vue')
const MacaoSixMark = () => import('@/views/lottery/macao-six-mark/index.vue')
const AlwaysColors = () => import('@/views/lottery/alwaysColors/index.vue')
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
        path: '/macao-six-mark',
        component: MacaoSixMark,
        name: 'macaoSixMark',
        meta: {
          title: 'menu.macaoSixMark',
          affix: true,
        },
      },
      {
        path: '/alwaysColors',
        component: AlwaysColors,
        name: 'alwaysColors',
        meta: {
          title: 'menu.alwaysColor2',
          affix: true,
        },
      },
    ],
  },
]
