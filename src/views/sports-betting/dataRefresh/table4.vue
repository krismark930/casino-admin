<template>
  <el-table
    :data="titleData"
    style="width: 100%; margin-top: 1rem;"
    border
    stripe
    v-loading="loading"
  >
    <el-table-column property="title" label="刷新设置" align="center" />
    <el-table-column
      v-for="index in 12"
      :key="index"
      :label="labelData[index]"
      align="center"
    >
      <template #default="scope">
        <el-input
          v-model="userdata[propertyData[scope.$index][index - 1]]"
          placeholder=""
        />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="" align="center" width="80px">
      <el-button type="primary" size="small" @click="handleClick">
        确定
      </el-button>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ['initialUserdata', 'loading', 'setData'],
  data() {
    return {
      userdata: { ...this.initialUserdata },
      titleData: [{ title: '结果' }],
      labelData: [
        '刷新设置',
        '足球比分',
        '足球结算',
        '篮球比分',
        '篮球结算',
        '棒球比分',
        '棒球结算',
        '网球比分',
        '网球结算',
        '排球比分',
        '排球结算',
        '其他比分',
        '其他结算',
      ],
      propertyData: [
        [
          'udp_ft_results',
          'udp_ft_score',
          'udp_bk_results',
          'udp_bk_score',
          'udp_bs_results',
          'udp_bs_score',
          'udp_tn_results',
          'udp_tn_score',
          'udp_vb_results',
          'udp_vb_score',
          'udp_op_results',
          'udp_op_score',
        ],
      ],
    }
  },
  watch: {
    initialUserdata(newUserData, oldUserData) {
      this.userdata = { ...this.initialUserdata }
    },
  },
  methods: {
    handleClick() {
      this.setData(this.userdata)
    },
  },
}
</script>

<style lang="scss" scoped></style>
