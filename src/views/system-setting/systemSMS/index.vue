<template>
  <div style="padding: 1rem;">
    <div style="border: 1px solid #eee; padding: 0.75rem; text-align: center;">
      <h3>{{ $t('menu.systemSmss') }}</h3>
      <el-form :model="newsFormData" label-width="100px" style="width: 600px; display: inline-block;">
        <el-form-item label="帐号">
          <el-input v-model="newsFormData.UserName" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="newsFormData.Subject" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="短信息">
          <el-input type="textarea" autosize placeholder="Please input message" v-model="newsFormData.Message"></el-input>
        </el-form-item>
        <el-form-item style="display: inline-flex;">
          <el-button type="primary" @click="addWebMessageData">确定</el-button>
          <el-button type="danger" @click="resetWebMessageData">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;">
      <h3>统计数据</h3>
      <el-form :model="formData" inline="true">
        <el-form-item>
          <el-input v-model="formData.user_name" placeholder="会员账号" clearable style="width: 300px; padding-right: 10px;">
            <template #append>
              <el-button type="primary" @click="getWebMessageDataByFilter">
                <el-icon style="vertical-align: middle">
                  <Search />
                </el-icon>
                <span style="vertical-align: middle">搜索</span>
              </el-button>
            </template>
          </el-input>
          <el-button type="danger" @click="bulkDelete">
            删除所选
            <el-icon class="el-icon--right">
              <Delete />
            </el-icon>
          </el-button>
        </el-form-item>
      </el-form>
      <el-table :data="webMessageDataList" v-loading="loading" style="width: 100%;" border header-align="center" stripe
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column property="UserName" label="帐号" width="120" />
        <el-table-column label="新增时间" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon>
                <timer />
              </el-icon>
              <span style="margin-left: 10px">
                {{ scope.row.Date }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="Subject" label="标题" width="120" />
        <el-table-column property="Message" label="内容" />
        <el-table-column property="state" label="状态" width="120">
          <template #default="scope">
            <font v-if="scope.row.isRead >= 1">已阅</font>
            <font color='red' v-else>未阅</font>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="功能" width="70">
          <template #default="scope">
            <el-button type="primary" icon="delete" @click="deleteWebMessageData(scope.row.ID)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange" :page-size="20"
          v-model:current-page="formData.page_no" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, computed, onMounted } from 'vue'
import moment from "moment-timezone"
import { systemNewsStore } from '@/pinia/system_news';
import { ElNotification, ElLoading } from "element-plus";
import { storeToRefs } from 'pinia';
const { dispatchWebMessageData } = systemNewsStore();
const { dispatchAddWebMessageData } = systemNewsStore();
const { dispatchDeleteWebMessageData } = systemNewsStore();

const selectedItems = ref([]);

const newsFormData = ref({
  UserName: "",
  Subject: "",
  Message: "",
})
const formData = ref({
  user_name: "",
  page_no: 1
})
const addWebMessageData = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAddWebMessageData(newsFormData.value);
  await dispatchWebMessageData(formData.value)
  successResult();
  loading.close();
}
const resetWebMessageData = () => {
  newsFormData.value = {
    UserName: "",
    Subject: "",
    Message: "",
  }
}
const deleteWebMessageData = async (ID) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchDeleteWebMessageData({ ID });
  await dispatchWebMessageData(formData.value)
  successResult();
  loading.close();
}
const success = computed(() => {
  const { getSuccess } = storeToRefs(systemNewsStore());
  return getSuccess.value;
})
const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(systemNewsStore());
  return getTotalCount.value
})
const webMessageDataList = computed(() => {
  const { getWebMessageDataList } = storeToRefs(systemNewsStore());
  return getWebMessageDataList.value;
})
const handleSelectionChange = (items) => {
  selectedItems.value = items
}
const bulkDelete = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  selectedItems.value.map(async item => {
    console.log(item);
    await dispatchDeleteWebMessageData({ ID: item.ID });
  })
  await dispatchWebMessageData(formData.value)
  loading.close();
}
const onPageChange = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchWebMessageData(formData.value)
  loading.close();
}
const getWebMessageDataByFilter = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchWebMessageData(formData.value)
  loading.close();
}
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
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchWebMessageData(formData.value)
  loading.close();
})
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
