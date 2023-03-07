<template>
  <div class="mobilesetting-form-wrapper">
    <el-form
      :model="mobileSettingForm"
      class="mobilesetting-form"
      :size="formSize"
      label-width="150px"
    >
      <el-form-item label="网站标题:" prop="webtitle">
        <el-input v-model="mobileSettingForm.webtitle" />
      </el-form-item>
      <el-form-item label="网站名称:" prop="webname">
        <el-input v-model="mobileSettingForm.webname" />
      </el-form-item>
      <el-form-item label="公告:" prop="announcement">
        <el-input v-model="mobileSettingForm.announcement" />
      </el-form-item>
      <el-form-item label="弹出框:">
        <el-input v-model="mobileSettingForm.popup" type="textarea" />
      </el-form-item>
      <el-form-item label="网站描述:" prop="webdesc">
        <el-input v-model="mobileSettingForm.webdesc" />
      </el-form-item>
      <el-form-item label="关键字:" prop="keywords">
        <el-input v-model="mobileSettingForm.keywords" />
      </el-form-item>
      <el-form-item label="作者:" prop="author">
        <el-input v-model="mobileSettingForm.author" class="author" />
        <h5>不建议修改</h5>
      </el-form-item>
      <el-form-item label="轮播图片:">
        <el-input v-model="mobileSettingForm.caroselpic" type="textarea" />
      </el-form-item>
      <el-form-item label="轮播时间:" prop="caroseltime">
        <el-input
          v-model="mobileSettingForm.caroseltime"
          class="carouseltime"
        />
        <h5>毫秒</h5>
      </el-form-item>
      <el-form-item label="刷新时间:" prop="refreshtime">
        <el-input v-model="mobileSettingForm.refreshtime" class="refreshtime" />
        <h5>秒</h5>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const formSize = ref('default')

const mobileSettingForm = reactive({
  webtitle: '',
  webname: '',
  announcement: '',
  webdesc: '',
  keywords: '',
  author: '',
  caroselpic: '',
  caroseltime: '',
  refreshtime: '',
})
</script>
<style lang="scss" scoped>
.mobilesetting-form-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
h5 {
  margin-top: 0;
}
.mobilesetting-form {
  width: 100%;
}
.author {
  width: 50%;
}
.refreshtime {
  width: 30%;
}
.carouseltime {
  width: 25%;
}
</style>
