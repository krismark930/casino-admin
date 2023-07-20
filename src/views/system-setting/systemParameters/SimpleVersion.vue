<template>
  <div class="simpleversion-wrapper">
    <el-table :data="simpleVersionList" class="simpleversion-table">
      <el-table-column prop="simpleVersion" label="简易版公告">
        <template #default="scope">
          <el-input v-model="scope.row.simpleVersion" type="textarea" :rows="15" />
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button type="primary" @click="updateSimpleVersion(scope.row)">
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
const props = defineProps<{ simpleVersionList: Array<any> }>();
const { simpleVersionList } = toRefs(props);
const updateSimpleVersion = async (item: any) => {
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
    await dispatchUpdateNotification({ systimee: item.simpleVersion });
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
.simpleversion-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}

.simpleversion-table {
  width: 100%;
}
</style>
