<template>
  <div class="monitormember-wrapper">
    <el-table :data="monitorMemberList" class="monitormember-table">
      <el-table-column prop="monitormember" label="监控会员">
        <template #default="scope">
          <el-input v-model="scope.row.BadArea" autocomplete="off" />
          <h5>
            注：列表中的会员投注滚球(篮球除外)会有声音提醒，多个会员用半解,隔开。
          </h5>
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button
            type="primary"
            @click="updateMonitorMember(scope.row)"
          >
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
import { ElNotification, ElLoading } from "element-plus";
import { storeToRefs } from 'pinia';
const {dispatchUpdateNotification} = systemStore();
const props = defineProps<{ monitorMemberList: Array<any> }>();
const { monitorMemberList } = toRefs(props);
const updateMonitorMember = async (item: any) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateNotification(item);
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
.monitormember-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.monitormember-table {
  width: 100%;
}
</style>
