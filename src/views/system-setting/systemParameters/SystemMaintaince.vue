<template>
  <div class="sysmaintain-wrapper">
    <el-table :data="systemMaintainceList" class="sysmaintain-table">
      <el-table-column prop="sysmain" label="系统维护" width="200">
        <template #default="scope">
          <el-switch v-model="scope.row.website" />
        </template>
      </el-table-column>
      <el-table-column prop="maintenance" label="维护公告">
        <template #default="scope">
          <el-input v-model="scope.row.systime" autocomplete="off" />
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button type="primary" @click="updateSystemMaintance(scope.row)">
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
const {dispatchUpdateNotification} = systemStore();
const props = defineProps<{ systemMaintainceList: Array<any> }>();
const { systemMaintainceList } = toRefs(props);
const updateSystemMaintance = async (item: any) => {
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
    await dispatchUpdateNotification({website: item.website ? 1 : 0, systime: item.systime});
    successResult();
    loading.close();
  })
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
.sysmaintain-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.sysmaintain-table {
  width: 100%;
}
</style>
