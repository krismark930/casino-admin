<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; text-align: center;">
    <h3>公告内容</h3>
    <el-form :model="formData" label-width="100px" inline="true">
      <el-form-item label="内容" prop="title">
        <el-form-item>
          <el-input
            v-model="formData.language.zh"
            placeholder="简体"
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-input
            v-model="formData.language.cn"
            placeholder="繁体"
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-input
            v-model="formData.language.en"
            placeholder="英文"
          ></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-date-picker
          v-model="formData.publishTime"
          type="datetime"
          placeholder="Select date and time"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="选项" prop="title">
        <el-checkbox-group v-model="formData.option">
          <el-checkbox :label="key" :key="key" v-for="(value, key) in options">
            {{ value }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确定</el-button>
        <el-button type="default">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        language: {
          zh: '',
          cn: '',
          en: '',
        },
        publishTime: '',
        option: [],
      },
      options: {
        0: '会员',
        1: '代理',
        2: '总代理',
        3: '股东',
        4: '公司',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
