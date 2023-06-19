<template>
  <el-card shadow="never">
    <el-row :gutter="20">
      <el-form-item label="排序">
        <el-col :span="8">
          <el-select placeholder="帐号" v-model="formData.sort" @change="handleChangeSort">
            <el-option label="帐号" value="UserName" />
            <el-option label="新增日期" value="AddDate" />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-select placeholder="升冥(由小到大)" v-model="formData.orderby" @change="handleChangeSort">
            <el-option label="升冥(由小到大)" value="asc" />
            <el-option label="降冥(由大到小)" value="desc" />
          </el-select>
        </el-col>
      </el-form-item>
      <el-col :span="4">
        <el-button type="primary" @click="addSubUserDialogShow">新增</el-button>
      </el-col>
    </el-row>
    <el-table :data="subUserList" v-loading="loading" border header-align="center" stripe>
      <el-table-column prop="UserName" label="帐号">
        <template #default="scope">
          <el-input v-model="scope.row.UserName" />
        </template>
      </el-table-column>
      <el-table-column prop="Passwd" label="密码">
        <template #default="scope">
          <el-input v-model="scope.row.Passwd" />
        </template>
      </el-table-column>
      <el-table-column prop="Alias" label="名称">
        <template #default="scope">
          <el-input v-model="scope.row.Alias" />
        </template>
      </el-table-column>
      <el-table-column prop="AddDate" label="日期" />
      <el-table-column prop="Status" label="帐号状况">
        <template #default="scope">
          <Font v-if="scope.row.Status == 2">
            启用
          </Font>
          <Font color="red" v-else>
            停用
          </Font>
        </template>
      </el-table-column>
      <el-table-column label="功能" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="updateSubUser(scope.row)">
            修改
          </el-button>
          <br />
          <el-button link type="warning" size="small" @click="suspendSubUser(scope.row.id, scope.row.Status)">
            停用
          </el-button>
          <br />
          <el-button link type="success" size="small" @click="permissionDialogShow(scope.row)">
            权限
          </el-button>
          <br />
          <el-button link type="danger" size="small" @click="deleteSubUser(scope.row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange"
        :page-size="pageSize" v-model:current-page="formData.page_no" />
    </div>
    <el-dialog v-model="permissionDialogVisible">
      <h2>功能菜单</h2>
      <el-form>
        <el-row>
          <el-col :span="8">
            <el-form-item label="在线人数: ">
              <el-checkbox v-model="competence[0]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统参数: ">
              <el-checkbox v-model="competence[1]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统公告: ">
              <el-checkbox v-model="competence[2]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统短信: ">
              <el-checkbox v-model="competence[3]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统消息: ">
              <el-checkbox v-model="competence[4]"></el-checkbox>
            </el-form-item>
            <el-form-item label="数据刷新: ">
              <el-checkbox v-model="competence[5]"></el-checkbox>
            </el-form-item>
            <el-form-item label="幣值设置: ">
              <el-checkbox v-model="competence[6]"></el-checkbox>
            </el-form-item>
            <el-form-item label="联盟限制: ">
              <el-checkbox v-model="competence[7]"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="数据操盘: ">
              <el-checkbox v-model="competence[8]"></el-checkbox>
            </el-form-item>
            <el-form-item label="在线人数: ">
              <el-checkbox v-model="competence[9]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统参数: ">
              <el-checkbox v-model="competence[10]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统公告: ">
              <el-checkbox v-model="competence[11]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统短信: ">
              <el-checkbox v-model="competence[12]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统消息: ">
              <el-checkbox v-model="competence[13]"></el-checkbox>
            </el-form-item>
            <el-form-item label="数据刷新: ">
              <el-checkbox v-model="competence[14]"></el-checkbox>
            </el-form-item>
            <el-form-item label="幣值设置: ">
              <el-checkbox v-model="competence[15]"></el-checkbox>
            </el-form-item>
            <el-form-item label="联盟限制: ">
              <el-checkbox v-model="competence[16]"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="数据操盘: ">
              <el-checkbox v-model="competence[17]"></el-checkbox>
            </el-form-item>
            <el-form-item label="在线人数: ">
              <el-checkbox v-model="competence[18]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统参数: ">
              <el-checkbox v-model="competence[19]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统公告: ">
              <el-checkbox v-model="competence[20]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统短信: ">
              <el-checkbox v-model="competence[21]"></el-checkbox>
            </el-form-item>
            <el-form-item label="系统消息: ">
              <el-checkbox v-model="competence[22]"></el-checkbox>
            </el-form-item>
            <el-form-item label="数据刷新: ">
              <el-checkbox v-model="competence[23]"></el-checkbox>
            </el-form-item>
            <el-form-item label="幣值设置: ">
              <el-checkbox v-model="competence[24]"></el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <h2>网站样式</h2>
      <el-form :inline="true">
        <el-form-item>
          <el-radio-group v-model="style">
            <el-radio label="1">皇冠</el-radio>
            <el-radio label="2">皇家</el-radio>
            <el-radio label="3">皇马</el-radio>
            <el-radio label="4">皇室</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <el-footer style="text-align: center;">
        <el-button type="danger" @click="resetPermissioin">重置</el-button>
        <el-button type="primary" @click="updatePermission">设置</el-button>
      </el-footer>
    </el-dialog>
    <el-dialog v-model="newUserDialogVisible">
      <h2>新增使用者</h2>
      <el-form>
        <el-form-item label="帐号: ">
          <el-input v-model="subUser.UserName" />
        </el-form-item>
        <el-form-item label="密码: ">
          <el-input v-model="subUser.Passwd" />
        </el-form-item>
        <el-form-item label="名称: ">
          <el-input v-model="subUser.Alias" />
        </el-form-item>
        <el-form-item label="">
          ◎密码规则：須為<Font color="red"><b>6~12碼英數字夾雜</b></Font>且符合0~9及a~z字。
        </el-form-item>
      </el-form>
      <el-footer style="text-align: center;">
        <el-button type="primary" @click="addSubUser">确定</el-button>
      </el-footer>
    </el-dialog>
  </el-card>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { subUserStore } from "@/pinia/modules/sub_user.js";
import { ElNotification, ElLoading } from "element-plus";
import { storeToRefs } from "pinia";
const { dispatchSubUserData } = subUserStore();
const { dispatchAddSubUserData } = subUserStore();
const { dispatchUpdateSubUserData } = subUserStore();
const { dispatchSuspendSubUserData } = subUserStore();
const { dispatchDeleteSubUserData } = subUserStore();
const { dispatchPermissionSubUser } = subUserStore();
const permissionDialogVisible = ref(false);
const newUserDialogVisible = ref(false);
const selectedId = ref(0);
const style = ref(0);
const pageSize = ref(20)
const formData = ref({
  page_no: 1,
  sort: "UserName",
  orderby: "asc"
})
const subUser = ref({
  UserName: "",
  Passwd: "",
  Alias: "",
})
const competence = ref([]);
const loading = ref(false);
const permissionDialogShow = (item) => {
  permissionDialogVisible.value = true;
  selectedId.value = item.id;
  competence.value = [];
  item.Competence.split(",").map(item => {
    competence.value = [...competence.value, Number(item) == 1 ? true : false];
  })
  console.log(item.Style);
  style.value = item.Style.toString();
}
const resetPermissioin = () => {
  competence.value = competence.value.map(item => true);
  style.value = "4";
}
const updatePermission = async () => {
  let form = {
    id: selectedId.value,
    Competence: competence.value.map(item => item ? 1 : 0).toString(),
    Style: Number(style.value)
  }
  loading.value = true;
  await dispatchPermissionSubUser(form)
  permissionDialogVisible.value = false;
  await dispatchSubUserData(formData.value);
  loading.value = false;
}
const addSubUserDialogShow = () => {
  newUserDialogVisible.value = true;
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

const success = computed(() => {
  const { getSuccess } = storeToRefs(subUserStore());
  return getSuccess.value;
})
const errMessage = computed(() => {
  const {getErrMessage} = storeToRefs(subUserStore());
  return getErrMessage.value;
})
const subUserList = computed(() => {
  const { getSubUserList } = storeToRefs(subUserStore());
  console.log(getSubUserList.value);
  return getSubUserList.value;
})
const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(subUserStore());
  return getTotalCount.value
})
const addSubUser = async () => {
  if (subUser.value.UserName == "") {
    alert("请输入帐号!!");
    return;
  }
  if (subUser.value.Passwd == "") {
    alert("请输入密码!!");
    return;
  }
  if (subUser.value.Alias == "") {
    alert("请输入名称!!");
    return;
  }
  loading.value = true;
  await dispatchAddSubUserData(subUser.value);
  successResult();
  newUserDialogVisible.value = false;
  await dispatchSubUserData(formData.value);
  subUser.value = {
    UserName: "",
    Passwd: "",
    Alias: "",
  }
  loading.value = false;
}
const updateSubUser = async (item) => {
  loading.value = true;
  await dispatchUpdateSubUserData(item);
  await dispatchSubUserData(formData.value);
  loading.value = false;
}
const handleChangeSort = async () => {
  loading.value = true;
  await dispatchSubUserData(formData.value);
  loading.value = false;
}
const suspendSubUser = async (id, Status) => {
  let status = Status == 0 ? 2 : 0;
  loading.value = true;
  await dispatchSuspendSubUserData({ id, Status: status });
  await dispatchSubUserData(formData.value);
  loading.value = false;
}
const deleteSubUser = async (id) => {
  loading.value = true;
  await dispatchDeleteSubUserData({ id });
  await dispatchSubUserData(formData.value);
  loading.value = false
}
const onPageChange = async () => {
  loading.value = true;
  await dispatchSubUserData(formData.value);
  loading.value = false;
}
onMounted(async () => {
  loading.value = true;
  await dispatchSubUserData(formData.value);
  loading.value = false;
})
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
