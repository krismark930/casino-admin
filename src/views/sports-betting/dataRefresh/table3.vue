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
      v-for="index in 6"
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
      titleData: [{ title: '篮球' }, { title: '网球' }, { title: '排球' }],
      labelData: [
        '刷新设置',
        '单式繁体',
        '单式',
        '单节',
        '走地',
        '让球过关',
        '冠军',
      ],
      propertyData: [
        [
          'udp_bk_tw',
          'udp_bk_r',
          'udp_bk_rq',
          'udp_bk_re',
          'udp_bk_pr',
          'udp_fs_fs',
        ],
        [
          'udp_tn_tw',
          'udp_tn_r',
          'udp_tn_re',
          'udp_tn_pd',
          'udp_tn_p',
          'udp_tn_pr',
        ],
        [
          'udp_vb_tw',
          'udp_vb_r',
          'udp_vb_re',
          'udp_vb_pd',
          'udp_vb_p',
          'udp_vb_pr',
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
