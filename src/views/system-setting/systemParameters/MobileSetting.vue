<template>
  <div class="mobilesetting-form-wrapper">
    <el-form
      :model="sysConfigItem"
      class="mobilesetting-form"
      :size="formSize"
      label-width="150px"
    >
      <el-form-item label="网站标题:" prop="web_name_wap">
        <el-input v-model="sysConfigItem.web_name_wap" />
      </el-form-item>
      <el-form-item label="网站名称:" prop="web_title_wap">
        <el-input v-model="sysConfigItem.web_title_wap" />
      </el-form-item>
      <el-form-item label="公告:" prop="web_gonggao_wap">
        <el-input v-model="sysConfigItem.web_gonggao_wap" />
      </el-form-item>
      <el-form-item label="弹出框:">
        <el-input v-model="sysConfigItem.web_popmsg_wap" type="textarea" />
      </el-form-item>
      <el-form-item label="网站描述:" prop="web_description_wap">
        <el-input v-model="sysConfigItem.web_description_wap" />
      </el-form-item>
      <el-form-item label="关键字:" prop="web_keywords_wap">
        <el-input v-model="sysConfigItem.web_keywords_wap" />
      </el-form-item>
      <el-form-item label="作者:" prop="web_author_wap">
        <el-input v-model="sysConfigItem.web_author_wap" class="author" />
        <h5>不建议修改</h5>
      </el-form-item>
      <el-form-item label="轮播图片:">
        <el-input v-model="sysConfigItem.web_banner_wap" type="textarea" />
      </el-form-item>
      <el-form-item label="轮播时间:" prop="web_slider_time_wap">
        <el-input
          v-model="sysConfigItem.web_slider_time_wap"
          class="carouseltime"
        />
        <h5>毫秒</h5>
      </el-form-item>
      <el-form-item label="刷新时间:" prop="web_refreshtime_wap">
        <el-input v-model="sysConfigItem.web_refreshtime_wap" class="refreshtime" />
        <h5>秒</h5>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateMobileSetting">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, computed } from 'vue'
import { systemStore } from '@/pinia/modules/system';
import { ElNotification, ElLoading } from "element-plus";
import { storeToRefs } from 'pinia';
const {dispatchUpdateTurnService} = systemStore();
const props = defineProps<{ sysConfigItem: Array<any> }>();
const { sysConfigItem } = toRefs(props);
const updateMobileSetting = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateTurnService(sysConfigItem.value);
  successResult();
  loading.close();
}
const success = computed(() => {
  const { getSuccess } = storeToRefs(systemStore());
  return getSuccess.value;
})
const successResult = () => {
  if (success.value) {
    ElNotification({
      title: "成功",
      message: "操作成功。",
      type: "success",
    });
  } else {
    ElNotification({
      title: "错误",
      message: "操作失败。",
      type: "error",
    });
  }
}
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
