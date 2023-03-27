<template>
  <el-table :data="[{}]" style="width: 100%;" border stripe v-loading="loading">
    <el-table-column label="下注设置" align="center">
      足(网/排/篮/棒)球
    </el-table-column>
    <el-table-column label="让球" align="center">
      <el-input v-model="userdata.R" placeholder="" />
    </el-table-column>
    <el-table-column label="大小球" align="center">
      <el-input v-model="userdata.OU" placeholder="" />
    </el-table-column>
    <el-table-column label="独赢" align="center">
      <el-input v-model="userdata.M" placeholder="" />
    </el-table-column>
    <el-table-column label="滚球" align="center">
      <el-input v-model="userdata.RE" placeholder="" />
    </el-table-column>
    <el-table-column label="滚球大小" align="center">
      <el-input v-model="userdata.ROU" placeholder="" />
    </el-table-column>
    <el-table-column label="波胆" align="center">
      <el-input v-model="userdata.PD" placeholder="" />
    </el-table-column>
    <el-table-column label="入球数" align="center">
      <el-input v-model="userdata.T" placeholder="" />
    </el-table-column>
    <el-table-column label="半全场" align="center">
      <el-input v-model="userdata.F" placeholder="" />
    </el-table-column>
    <el-table-column label="标准过关" align="center">
      <el-input v-model="userdata.P" placeholder="" />
    </el-table-column>
    <el-table-column label="让球过关" align="center">
      <el-input v-model="userdata.PR" placeholder="" />
    </el-table-column>
    <el-table-column label="综合过关" align="center">
      <el-input v-model="userdata.P3" placeholder="" />
    </el-table-column>
    <el-table-column label="冠军" align="center">
      <el-input v-model="userdata.FS" placeholder="" />
    </el-table-column>
    <el-table-column label="最大单场" align="center">
      <el-input v-model="userdata.MAX" placeholder="" name="asdfasdfasdf" />
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
    }
  },
  watch: {
    initialUserdata(newUserData, oldUserData) {
      this.userdata = { ...this.initialUserdata }
    },
  },
  mounted() {},
  methods: {
    handleClick() {
      this.setData(this.userdata)
    },
  },
}
</script>

<style lang="scss" scoped></style>
