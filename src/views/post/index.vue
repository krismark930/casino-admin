<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left; margin: 1rem;">
    <el-row style="margin: 20px; justify-content: start;">
      <el-form-item>
        <el-form-item label="日期区间:">
          <el-date-picker type="daterange" style="width: 200px" v-model="dateRange"
            value-format="YYYY-MM-DD"></el-date-picker>
        </el-form-item>
        <el-button style="margin-left: 8px;" @click="handleDateRange('yesterday')">昨日</el-button>
        <el-button @click="handleDateRange('today')">今日</el-button>
        <el-button @click="handleDateRange('tomorrow')">明日</el-button>
        <el-button @click="handleDateRange('this week')">本星期</el-button>
        <el-button @click="handleDateRange('last week')">上星期</el-button>
        <el-button @click="handleDateRange('this month')">本月份</el-button>
        <el-button @click="handleDateRange('last month')">上月份</el-button>
      </el-form-item>
      <el-form-item style="margin-left: 20px">
        <el-button type="primary" @click="getPostsByFilter">
          查询
        </el-button>
        <el-button type="danger" @click="bulkPostDelete">
          批量删除
        </el-button>
      </el-form-item>
    </el-row>
    <el-row style="text: center;">
      <el-table :data="postList" style="width: 100%; text: center;" @selection-change="handleSelectionChange" border
        stripe v-loading="loading">
        <el-table-column type="selection" width="60" header-align="center" align="center" />
        <el-table-column property="sender" label="反馈用户" width="160" header-align="center" align="center" />
        <el-table-column property="title" label="类型" width="180" header-align="center" align="center" />
        <el-table-column property="content" label="内容" width="500" header-align="center" align="center" />
        <el-table-column label="状态" width="160" header-align="center" align="center">
          <template #default="scope">
            <div v-if="scope.row.status == '0'">
              未回复
            </div>
            <div v-else>
              已回复
            </div>
          </template>
        </el-table-column>
        <el-table-column label="反馈日期" width="200" header-align="center" align="center">
          <template #default="scope">{{ moment(scope.row.created_at).format("YYYY-MM-DD HH:mm:ss") }}</template>
        </el-table-column>
        <el-table-column label="操作" header-align="center" align="center">
          <template #default="scope">
            <el-button type="primary" link @click="editPost(scope.row)">回复</el-button>
            <el-button type="danger" link @click="deletePost(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" :page-size="20"
        @current-change="onPageChange" v-model:current-page="page" />
    </div>
    <el-backtop :right="60" :bottom="60" target=".main" />
    <el-dialog title="回复" v-model="postDialogVisible" width="60%">
      <el-form label-width="150">
        <el-form-item label="会员:">
          <el-input type="textarea" :rows="10" v-model="postItem.content" />
        </el-form-item>
        <el-form-item label="回复内容">
          <el-input type="text" v-model="postItem.answer" />
        </el-form-item>
      </el-form>
      <el-footer>
        <el-button @click="postDialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="updatePost">保存</el-button>
      </el-footer>
    </el-dialog>
    <el-dialog title="警告" v-model="deleteDialogVisible" width="30%">
      <div style="margin-bottom: 20px;">你确定删除吗？</div>
      <el-footer>
        <el-button @click="deleteDialogVisible = false">警告</el-button>
        <el-button type="primary" @click="confirmBulkDelete">是的</el-button>
      </el-footer>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import moment from 'moment-timezone';
import { postStore } from "@/pinia/modules/post";
import { storeToRefs } from "pinia";
import { ElNotification, ElMessageBox } from "element-plus";
import { ElLoading } from "element-plus";
import { useRouter } from 'vue-router';

const router = useRouter();
const { dispatchPosts } = postStore();
const { dispatchUpdatePost } = postStore();
const { dispatchDeletePost } = postStore();

const dateRange = ref([
  moment.tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
  moment.tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
]);

const postDialogVisible = ref(false);
const deleteDialogVisible = ref(false);

const postItem = ref({});

const selectedItems = ref([]);

const loading = ref(false);

const page = ref(1);

const handleDateRange = (date) => {
  switch (date) {
    case "yesterday":
      dateRange.value[0] = moment().subtract(1, 'day').format('YYYY-MM-DD');
      dateRange.value[1] = moment().subtract(1, 'day').format('YYYY-MM-DD');
      break;
    case "today":
      dateRange.value[0] = moment().format('YYYY-MM-DD');
      dateRange.value[1] = moment().format('YYYY-MM-DD');
      break;
    case "tomorrow":
      dateRange.value[0] = moment().add(1, 'day').format('YYYY-MM-DD');
      dateRange.value[1] = moment().add(1, 'day').format('YYYY-MM-DD');
      break;
    case "this week":
      dateRange.value[0] = moment().clone().startOf('week').format('YYYY-MM-DD');
      dateRange.value[1] = moment().clone().endOf('week').format('YYYY-MM-DD');
      break;
    case "last week":
      dateRange.value[0] = moment().clone().subtract(1, 'week').startOf('week').format('YYYY-MM-DD');
      dateRange.value[1] = moment().clone().subtract(1, 'week').endOf('week').format('YYYY-MM-DD');
      break;
    case "this month":
      dateRange.value[0] = moment().clone().startOf('month').format('YYYY-MM-DD');
      dateRange.value[1] = moment().clone().endOf('month').format('YYYY-MM-DD');
      break;
    case "last month":
      dateRange.value[0] = moment().clone().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
      dateRange.value[1] = moment().clone().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
      break;
  }
}
const success = computed(() => {
  const { getSuccess } = storeToRefs(postStore());
  return getSuccess.value;
})

const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(postStore());
  return getErrMessage.value;
})

const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(postStore());
  return getTotalCount.value
})

const postList = computed(() => {
  const { getPostList } = storeToRefs(postStore());
  return getPostList.value;
})

const handleSelectionChange = (val) => {
  console.log(val);
  selectedItems.value = val;
}

const editPost = (item) => {
  postItem.value = item;
  postDialogVisible.value = true;
}

const bulkPostDelete = async () => {
  deleteDialogVisible.value = true;
}

const confirmBulkDelete = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  selectedItems.value.map(async item => {
    await dispatchDeletePost({ id: item.id });
  })
  deleteDialogVisible.value = false;
  await dispatchPosts({
    start_date: dateRange.value[0],
    end_date: dateRange.value[1],
    page_no: page.value
  });
  loading.close();
}

const updatePost = async () => {
  await dispatchUpdatePost(postItem.value);
  postDialogVisible.value = false;
  successResult();
  loading.value = true;
  await dispatchPosts({
    start_date: dateRange.value[0],
    end_date: dateRange.value[1],
    page_no: page.value
  });
  loading.value = false;
}

const deletePost = async (id) => {

  ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    loading.value = true;
    await dispatchDeletePost({ id });
    successResult();
    await dispatchPosts({
      start_date: dateRange.value[0],
      end_date: dateRange.value[1],
      page_no: page.value
    });
    loading.value = false;
  }).catch(() => { });
}

const getPostsByFilter = async () => {
  loading.value = true;
  await dispatchPosts({
    start_date: dateRange.value[0],
    end_date: dateRange.value[1],
    page_no: page.value
  });
  loading.value = false;
}

const onPageChange = async () => {
  loading.value = true;
  await dispatchPosts({
    start_date: dateRange.value[0],
    end_date: dateRange.value[1],
    page_no: page.value
  });
  loading.value = false;
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
      message: errMessage.value,
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
  await dispatchPosts({
    start_date: dateRange.value[0],
    end_date: dateRange.value[1],
    page_no: page.value
  });
  successResult();
  loading.close();
})
</script>

<style lang="scss">
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>