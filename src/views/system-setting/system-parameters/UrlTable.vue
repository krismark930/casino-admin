<template>
  <div class="weburl-wrapper">
    <!-- <h5 class="url-notice">注:网址以/结尾!</h5> -->

    <el-table :data="tableData" class="weburl-table">
      <el-table-column prop="version" label="Version" width="200" />
      <el-table-column prop="url" label="URL" />
      <el-table-column label="Operations" width="200">
        <template #default="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.row.version, scope.row.url)"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="Edit">
      <el-form :model="form">
        <el-form-item label="Version:" :label-width="formLabelWidth">
          <el-input v-model="form.version" autocomplete="off" disabled />
        </el-form-item>
        <el-form-item label="URL:" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Save
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
const formLabelWidth = '70px'
const tableData = [
  {
    version: 'PC Version URL',
    url: 'http://vip.pj6678.com',
  },
  {
    version: 'Mobile Version URL',
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
