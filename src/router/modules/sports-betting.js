const Layout = () => import('@/layout/index.vue')
const AllianceRestrictions = () =>
  import('@/views/sports-betting/allianceRestrictions/index.vue')
const AllianceRestrictionsEdit = () =>
  import('@/views/sports-betting/allianceRestrictions/EditLeague.vue')
const DataRefresh = () => import('@/views/sports-betting/dataRefresh/index.vue')
const DataManipulation = () =>
  import('@/views/sports-betting/dataManipulation/index.vue')
const Retime = () =>
  import('@/views/sports-betting/dataManipulation/scheduleData/Retime.vue')
const BetCheck = () =>
  import('@/views/sports-betting/dataManipulation/scheduleData/BetCheck.vue')
const CheckScores = () =>
  import('@/views/sports-betting/check-scores/index.vue')
const CheckScores2 = () =>
  import('@/views/sports-betting/check-scores2/index.vue')
const CheckScores2BetSlip = () =>
  import('@/views/sports-betting/check-scores2/bet-slip.vue')
const CheckScores2Operate = () =>
  import('@/views/sports-betting/check-scores2/operation.vue')
const LiveBetting = () => import('@/views/sports-betting/liveBetting/index.vue')
const SearchBettings = () =>
  import('@/views/sports-betting/search-bettings/index.vue')
const ChampionBettings = () =>
  import('@/views/sports-betting/champion-bettings/index.vue')
const SportsEvent = () => import('@/views/sports-betting/sportsEvent/index.vue')
import checkScores2 from '@/i18n/locales/zh-cn/check-scores2'

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
        path: '/allianceRestrictions/editLeague/:id',
        name: 'allianceRestrictions.editLeague',
        component: AllianceRestrictionsEdit,
        hidden: true,
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
        path: '/dataManipulation/retime/:id/:type',
        name: 'DataManipulation.Retime',
        component: Retime,
        hidden: true,
      },
      {
        path: '/dataManipulation/betcheck/:id/:type',
        name: 'DataManipulation.BetCheck',
        component: BetCheck,
        hidden: true,
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
        meta: {
          title: 'menu.checkScores2',
          affix: true,
        },
        noChildren: true,
        children: [
          {
            path: '',
            name: 'check-scores2.home',
            component: CheckScores2,
          },
          {
            path: 'bet-slip',
            name: 'check-scores2.bet-slip',
            component: CheckScores2BetSlip,
            props: true
          },
          {
            path: 'operate/:id',
            name: 'check-scores2.operate',
            component: CheckScores2Operate,
          },
        ],
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
