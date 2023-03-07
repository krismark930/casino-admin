<template>
  <div class="weburl-wrapper">
    <!-- <h5 class="url-notice">注:网址以/结尾!</h5> -->

    <el-table :data="tableData" class="weburl-table">
      <el-table-column prop="version" label="电脑版网址" width="200" />
      <el-table-column prop="url" label="手机版网址" />
      <el-table-column label="功能" width="200">
        <template #default="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.row.version, scope.row.url)"
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
import { reactive, ref } from 'vue'

const dialogVisible = ref(false)
const form = reactive({
  version: '',
  url: '',
})
const formLabelWidth = '90px'
const tableData = [
  {
    version: '电脑版网址',
    url: 'http://vip.pj6678.com',
  },
  {
    version: '手机版网址',
    url: 'http://wap.pj6678.com',
  },
]

const handleEdit = (versionName: string, url: string) => {
  dialogVisible.value = true
  form.version = versionName
  form.url = url
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
