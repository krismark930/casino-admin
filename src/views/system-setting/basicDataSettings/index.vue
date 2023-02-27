<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.basicDataSettings') }}</h3>
    <el-form
      label-width="100px"
      :model="formData"
      style="width: 600px; display: inline-block;"
    >
      <el-form-item label="帐号">
        <el-input v-model="formData.accountNumber" />
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input v-model="formData.oldPass" />
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="formData.newPass" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="formData.confirmPass" />
      </el-form-item>
      <el-form-item style="display: inline-flex;">
        <el-button type="primary">确定</el-button>
        <el-button type="danger">取消</el-button>
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
