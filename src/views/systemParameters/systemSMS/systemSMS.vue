<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; text-align: center;">
    <h3>系统短信</h3>
    <el-form :model="formData" label-width="100px">
      <el-form-item label="帐号">
        <el-input
          v-model="formData.accountNumber"
          placeholder=""
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="formData.title" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="短信息">
        <el-input
          type="textarea"
          autosize
          placeholder="Please input message"
          v-model="formData.message"
        ></el-input>
      </el-form-item>
      <el-form-item>
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
        accountNumber: '',
        title: '',
        message: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
