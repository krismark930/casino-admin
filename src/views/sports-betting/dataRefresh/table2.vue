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
      v-for="index in 9"
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
      titleData: [{ title: '足球' }, { title: '棒球' }, { title: '其他' }],
      labelData: [
        '刷新设置',
        '单式繁体',
        '单式',
        '上半场',
        '走地',
        '波胆',
        '入球',
        '半全场',
        '让球过关',
        '标准过关',
      ],
      propertyData: [
        [
          'udp_ft_tw',
          'udp_ft_r',
          'udp_ft_v',
          'udp_ft_re',
          'udp_ft_pd',
          'udp_ft_t',
          'udp_ft_f',
          'udp_ft_p',
          'udp_ft_pr',
        ],
        [
          'udp_bs_tw',
          'udp_bs_r',
          'udp_bs_v',
          'udp_bs_re',
          'udp_bs_pd',
          'udp_bs_t',
          'udp_bs_m',
          'udp_bs_p',
          'udp_bs_pr',
        ],
        [
          'udp_op_tw',
          'udp_op_r',
          'udp_op_v',
          'udp_op_re',
          'udp_op_pd',
          'udp_op_t',
          'udp_op_f',
          'udp_op_p',
          'udp_op_pr',
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
