<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.dataRefresh') }}</h3>
    <el-form :model="formData">
      <el-form-item label="" style="display: inline-flex;">
        <el-button type="primary" link>滚球确认</el-button>
        <el-button type="primary" link>自动刷水</el-button>
        <el-button type="primary" link>早餐自动刷水</el-button>
        <el-button type="primary" link>自动刷比分</el-button>
        <el-button type="primary" link>更新UID</el-button>
        <el-button type="primary" link>刷水速度测试</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        accountNumber: 'admin',
        oldPass: '',
        newPass: '',
        confirmPass: '',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
