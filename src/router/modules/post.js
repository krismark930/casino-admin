const Layout = () => import('@/layout/index.vue')
const Post = () => import('@/views/post/index.vue')

export default [
  {
    path: '/post',
    component: Layout,
    name: 'Post Management',
    meta: {
      title: 'menu.post',
    },
    icon: 'Message',
    children: [
      {
        path: '',
        name: 'Post',
        component: Post,
        meta: {
          title: 'menu.post',
          affix: true,
        },
      },
    ],
  },
]
