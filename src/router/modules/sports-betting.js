const Layout = () => import('@/layout/index.vue')
const LeagueManagements = () =>
  import('@/views/sports-betting/league-managements/index.vue')
const DataManagements = () =>
  import('@/views/sports-betting/data-managements/index.vue')
const CheckScores = () =>
  import('@/views/sports-betting/check-scores/index.vue')
const CheckScores2 = () =>
  import('@/views/sports-betting/check-scores2/index.vue')
const DiceBettings = () =>
  import('@/views/sports-betting/dice-bettings/index.vue')
const ChampionBettings = () =>
  import('@/views/sports-betting/champion-bettings/index.vue')
const SearchBettings = () =>
  import('@/views/sports-betting/search-bettings/index.vue')

export default [
  {
    path: '/sports-betting',
    component: Layout,
    name: 'sports-betting',
    meta: {
      title: 'menu.sportsBetting',
    },
    icon: 'Trophy',
    children: [
      {
        path: '/league-managements',
        name: 'league-managements',
        component: LeagueManagements,
        meta: {
          title: 'menu.leagueManagements',
          affix: true,
        },
      },
      {
        path: '/data-managements',
        name: 'data-managements',
        component: DataManagements,
        meta: {
          title: 'menu.dataManagements',
          affix: true,
        },
      },
      {
        path: '/check-scores',
        name: 'check-scores',
        component: CheckScores,
        meta: {
          title: 'menu.checkScores',
          affix: true,
        },
      },
      {
        path: '/check-scores2',
        name: 'check-scores2',
        component: CheckScores2,
        meta: {
          title: 'menu.checkScores2',
          affix: true,
        },
      },
      {
        path: '/dice-bettings',
        name: 'dice-bettings',
        component: DiceBettings,
        meta: {
          title: 'menu.diceBettings',
          affix: true,
        },
      },
      {
        path: '/champion-bettings',
        name: 'champion-bettings',
        component: ChampionBettings,
        meta: {
          title: 'menu.championBettings',
          affix: true,
        },
      },
      {
        path: '/search-bettings',
        name: 'search-bettings',
        component: SearchBettings,
        meta: {
          title: 'menu.searchBettings',
          affix: true,
        },
      },
    ],
  },
]
