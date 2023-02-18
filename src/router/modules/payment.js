const Layout = () => import('@/layout/index.vue')
const PaymentMethods = () => import('@/views/payment/payment-methods/index.vue')
const BankTransfers = () => import('@/views/payment/bank-transfers/index.vue')
const AlipayTransfers = () =>
  import('@/views/payment/alipay-transfers/index.vue')
const CashSystems = () => import('@/views/payment/cash-systems/index.vue')

export default [
  {
    path: '/payment',
    component: Layout,
    name: 'payment',
    meta: {
      title: 'menu.payments',
    },
    icon: 'setting',
    children: [
      {
        path: '/payment-methods',
        name: 'payment-methods',
        component: PaymentMethods,
        meta: {
          title: 'menu.paymentMethods',
          affix: true,
        },
      },
      {
        path: '/bank-transfers',
        name: 'bank-transfers',
        component: BankTransfers,
        meta: {
          title: 'menu.bankTransfers',
          affix: true,
        },
      },
      {
        path: '/alipay-transfers',
        name: 'alipay-transfers',
        component: AlipayTransfers,
        meta: {
          title: 'menu.alipayTransfers',
          affix: true,
        },
      },
      {
        path: '/cash-systems',
        name: 'cash-systems',
        component: CashSystems,
        meta: {
          title: 'menu.cashSystems',
          affix: true,
        },
      },
    ],
  },
]
