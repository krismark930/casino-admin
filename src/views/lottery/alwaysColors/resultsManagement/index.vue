<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 1rem; text-align: center;"
  >
    <h3>彩票结果管理</h3>
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="item in lotteryType"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <component :is="item.value" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ChongqingConstantColor from '@/views/lottery/alwaysColors/resultsManagement/chongqingConstantColor/index.vue'
import XinjiangConstantColor from '@/views/lottery/alwaysColors/resultsManagement/xinjiangConstantColor/index.vue'
import TianjinConstantColor from '@/views/lottery/alwaysColors/resultsManagement/tianjinConstantColor/index.vue'
import GuangdongTenLottery from '@/views/lottery/alwaysColors/resultsManagement/guangdongTenLottery/index.vue'
import GuangxiTenLottery from '@/views/lottery/alwaysColors/resultsManagement/guangxiTenLottery/index.vue'
import TianjinTenLottery from '@/views/lottery/alwaysColors/resultsManagement/tianjinTenLottery/index.vue'
import ChongqingTenLottery from '@/views/lottery/alwaysColors/resultsManagement/chongqingTenLottery/index.vue'
import BeijingHappy8 from '@/views/lottery/alwaysColors/resultsManagement/beijingHappy8/index.vue'
import BeijingPKPick from '@/views/lottery/alwaysColors/resultsManagement/beijingPKPick/index.vue'
import Guangdong11Choose5 from '@/views/lottery/alwaysColors/resultsManagement/guangdong11Choose5/index.vue'
import D3Color from '@/views/lottery/alwaysColors/resultsManagement/3DColor/index.vue'
import RankThree from '@/views/lottery/alwaysColors/resultsManagement/rankThree/index.vue'
import ShanghaiShile from '@/views/lottery/alwaysColors/resultsManagement/shanghaiShile/index.vue'
import LuckyAirship from '@/views/lottery/alwaysColors/resultsManagement/luckyAirship/index.vue'
import FifthLottery from '@/views/lottery/alwaysColors/resultsManagement/fifthLottery/index.vue'
import TencentConstantColor from '@/views/lottery/alwaysColors/resultsManagement/tencentConstantColor/index.vue'
import TaiwanConstantColor from '@/views/lottery/alwaysColors/resultsManagement/taiwanConstantColor/index.vue'
import AustralianLucky5 from '@/views/lottery/alwaysColors/resultsManagement/australianLucky5/index.vue'
import AustralianLucky10 from '@/views/lottery/alwaysColors/resultsManagement/australianLucky10/index.vue'

export default {
  data() {
    return {
      lotteryType: [
        {
          value: 'ChongqingConstantColor',
          label: '重庆时时彩',
        },
        {
          value: 'XinjiangConstantColor',
          label: '新疆时时彩',
        },
        {
          value: 'TianjinConstantColor',
          label: '天津时时彩',
        },
        {
          value: 'GuangdongTenLottery',
          label: '广东十分彩',
        },
        {
          value: 'GuangxiTenLottery',
          label: '广西十分彩',
        },
        {
          value: 'TianjinTenLottery',
          label: '天津十分彩',
        },
        {
          value: 'ChongqingTenLottery',
          label: '重庆十分彩',
        },
        {
          value: 'BeijingHappy8',
          label: '北京快乐8',
        },
        {
          value: 'BeijingPKPick',
          label: '北京PK拾',
        },
        {
          value: 'Guangdong11Choose5',
          label: '广东11选5',
        },
        {
          value: 'D3Color',
          label: '3D彩',
        },
        {
          value: 'RankThree',
          label: '排列三',
        },
        {
          value: 'ShanghaiShile',
          label: '上海时时乐',
        },
        {
          value: 'LuckyAirship',
          label: '幸运飞艇',
        },
        {
          value: 'FifthLottery',
          label: '五分彩',
        },
        {
          value: 'TencentConstantColor',
          label: '腾讯时时彩',
        },
        {
          value: 'TaiwanConstantColor',
          label: '台湾时时彩',
        },
        {
          value: 'AustralianLucky5',
          label: '澳洲幸运5',
        },
        {
          value: 'AustralianLucky10',
          label: '澳洲幸运10',
        },
      ],
    }
  },
  methods: {},
  components: {
    D3Color,
    ChongqingConstantColor,
    XinjiangConstantColor,
    TianjinConstantColor,
    GuangdongTenLottery,
    GuangxiTenLottery,
    TianjinTenLottery,
    ChongqingTenLottery,
    BeijingHappy8,
    BeijingPKPick,
    Guangdong11Choose5,
    RankThree,
    ShanghaiShile,
    LuckyAirship,
    FifthLottery,
    TencentConstantColor,
    TaiwanConstantColor,
    AustralianLucky5,
    AustralianLucky10,
  },
}
</script>
<style lang="scss" scoped></style>
