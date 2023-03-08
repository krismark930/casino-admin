<template>
  <div style="text-align: center;">
    <h3>一键返水（电子游戏）</h3>
    <el-form :model="formData" inline="true">
      <el-form-item label="">
        <el-date-picker
          v-model="formData.dateRange"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">开始返水</el-button>
      </el-form-item>
    </el-form>
    <h6>注：不自动返水的会员请填把会员的返水改为0</h6>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        dateRange: '',
      },
    }
  },
}
</script>
