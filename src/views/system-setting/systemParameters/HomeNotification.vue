<template>
  <div class="homenotification-wrapper">
    <el-table :data="notificationList" class="homenotification-table">
      <el-table-column prop="notification" label="首页公告">
        <template #default="scope">
          <el-input v-model="scope.row.notification" type="textarea" :rows="15" />
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button type="primary" @click="updateNotification(scope.row)">
            确定
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, computed } from 'vue'
import { systemStore } from '@/pinia/modules/system';
import { ElNotification, ElLoading, ElMessageBox } from "element-plus";
import { storeToRefs } from 'pinia';
const { dispatchUpdateNotification } = systemStore();
const props = defineProps<{ notificationList: Array<any> }>();
const { notificationList } = toRefs(props);
const updateNotification = async (item: any) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await dispatchUpdateNotification({ GongGao: item.notification, update_type: "gong_gao" });
    successResult();
    loading.close();
  }).catch(() => { });
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
.homenotification-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}

.homenotification-table {
  width: 100%;
}
</style>
