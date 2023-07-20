<template>
  <div class="customerservice-wrapper">
    <el-table :data="customerserviceList" class="customerservice-table" :cell-style="{ verticalAlign: 'top' }">
      <el-table-column prop="kf1" label="客服网址1">
        <template #default="scope">
          <el-input v-model="scope.row.kf1" autocomplete="off" />
        </template>
      </el-table-column>
      <el-table-column prop="kf2" label="客服网址2">
        <template #default="scope">
          <el-input v-model="scope.row.kf2" autocomplete="off" />
          <h5>禁止投注第2节</h5>
        </template>
      </el-table-column>
      <el-table-column prop="kf3" label="客服网址3">
        <template #default="scope">
          <el-input v-model="scope.row.kf3" autocomplete="off" />
          <h5>禁止投注第3节</h5>
        </template>
      </el-table-column>
      <el-table-column prop="kf4" label="客服网址4">
        <template #default="scope">
          <el-input v-model="scope.row.kf4" autocomplete="off" />
          <h5>禁止投注第3节，第4节，加时</h5>
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button type="primary" @click="updateCustomserService(scope.row)">
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
const { dispatchUpdateUrl } = systemStore();
const props = defineProps<{ customerserviceList: Array<any> }>();
const { customerserviceList } = toRefs(props);
const updateCustomserService = async (item: any) => {
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
    await dispatchUpdateUrl(item);
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
.customerservice-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}

.customerservice-table {
  width: 100%;
}
</style>
