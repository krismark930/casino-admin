const Layout = () => import('@/layout/index.vue')
const AllianceRestrictions = () =>
  import('@/views/sports-betting/allianceRestrictions/index.vue')
const DataRefresh = () => import('@/views/sports-betting/dataRefresh/index.vue')
const DataManipulation = () =>
  import('@/views/sports-betting/dataManipulation/index.vue')
const CheckScores = () =>
  import('@/views/sports-betting/check-scores/index.vue')
const CheckScores2 = () =>
  import('@/views/sports-betting/check-scores2/index.vue')
const LiveBetting = () => import('@/views/sports-betting/liveBetting/index.vue')
const SearchBettings = () =>
  import('@/views/sports-betting/search-bettings/index.vue')
const ChampionBettings = () =>
  import('@/views/sports-betting/champion-bettings/index.vue')
const SportsEvent = () => import('@/views/sports-betting/sportsEvent/index.vue')

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
        path: '/allianceRestrictions',
        name: 'allianceRestrictions',
        component: AllianceRestrictions,
        meta: {
          title: 'menu.allianceRestrictions',
          affix: true,
        },
      },
      {
        path: '/dataRefresh',
        name: 'dataRefresh',
        component: DataRefresh,
        meta: {
          title: 'menu.dataRefresh',
          affix: true,
        },
      },
      {
        path: '/dataManipulation',
        name: 'DataManipulation',
        component: DataManipulation,
        meta: {
          title: 'menu.dataManipulation',
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
        path: '/liveBetting',
        name: 'liveBetting',
        component: LiveBetting,
        meta: {
          title: 'menu.liveBetting',
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
        path: '/sportsEvent',
        name: 'sportsEvent',
        component: SportsEvent,
        meta: {
          title: 'menu.sportsEvent',
          affix: true,
        },
      },
    ],
  },
]
