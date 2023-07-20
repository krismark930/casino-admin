<template>
  <div class="weburl-wrapper">
    <!-- <h5 class="url-notice">注:网址以/结尾!</h5> -->

    <el-table :data="urlList" class="weburl-table">
      <el-table-column prop="PCURL" label="电脑版网址" width="500">
        <template #default="scope">
          <el-input v-model="scope.row.PCURL"/>
        </template>
      </el-table-column>
      <el-table-column prop="WAPURL" label="手机版网址">        
        <template #default="scope">
          <el-input v-model="scope.row.WAPURL"/>
        </template>
      </el-table-column>
      <el-table-column label="功能">
        <template #default="scope">
          <el-button
            size="small"
            @click="updateUrl(scope.row)"
          >
            设定
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="设定">
      <el-form :model="form">
        <el-form-item label="电脑版网址:" :label-width="formLabelWidth">
          <el-input v-model="form.version" autocomplete="off" disabled />
        </el-form-item>
        <el-form-item label="手机版网址:" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            节省
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, computed } from 'vue'
import {systemStore} from "@/pinia/modules/system";
import { storeToRefs } from 'pinia';
import { ElNotification, ElLoading, ElMessageBox,ElMessage } from "element-plus";
const {dispatchUpdateUrl} = systemStore();
const props = defineProps<{ urlList: Array<any> }>();
const { urlList } = toRefs(props);
const dialogVisible = ref(false)
const form = reactive({
  version: '',
  url: '',
})

const formLabelWidth = '90px'

const updateUrl = async (item: any) => {
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
  })
  .catch(() => {});
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
.weburl-table {
  width: 100%;
}
.weburl-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.url-notice {
  color: red;
}
</style>
