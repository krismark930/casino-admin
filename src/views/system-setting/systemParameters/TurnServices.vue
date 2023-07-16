<template>
  <div class="turnservice-wrapper">
    <el-table :data="turnServiceList" class="turnservice-table">
      <el-table-column prop="service" label="服务"></el-table-column>
      <el-table-column prop="status" label="开关" width="200">
        <template #default="scope">
          <el-switch v-model="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="功能" width="200">
        <template #default="scope">
          <el-button
            size="small"
            @click="updateTurnService(scope.row)"
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
import { ElNotification, ElLoading, ElMessageBox } from "element-plus";
import { storeToRefs } from 'pinia';
const {dispatchUpdateTurnService} = systemStore();
const props = defineProps<{ turnServiceList: Array<any> }>();
const { turnServiceList } = toRefs(props);
const updateTurnService = async (item: any) => {
  let formData = {};
  switch (item.service) {
    case "开放注册":
      formData = {
        isReg: item.status ? 1 : 0
      }
      break;  
    case "AG平台":
      formData = {
        AG_Repair: item.status ? 1 : 0
      }
      break;  
    case "OG平台":
      formData = {
        OG_Repair: item.status ? 1 : 0
      }
      break;  
    case "BBIN平台":
      formData = {
        BBIN_Repair: item.status ? 1 : 0
      }
      break;  
    case "MG平台":
      formData = {
        MG_Repair: item.status ? 1 : 0
      }
      break;  
    case "PT平台":
      formData = {
        PT_Repair: item.status ? 1 : 0
      }
      break;  
    case "开元棋牌":
      formData = {
        KY_Repair: item.status ? 1 : 0
      }
      break;  
    default:
      break;
  }
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
    await dispatchUpdateTurnService(formData);
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
.turnservice-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.turnservice-table {
  width: 100%;
}
</style>
