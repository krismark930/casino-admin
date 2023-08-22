<template>
  <el-card shadow="never" v-if="mainTableShow">
    <el-row :gutter="10">
      <el-col :span="3">
        <el-form-item label="股东">
          <el-select placeholder="全部" v-model="kaguanMember">
            <el-option
              v-for="(item, index) in kaguanMemberList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="总代">
          <el-select placeholder="全部" v-model="kazongMember">
            <el-option
              v-for="(item, index) in kazongMemberList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="代里">
          <el-select placeholder="全部" v-model="kadanMember">
            <el-option
              v-for="(item, index) in kadanMemberList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-row :gutter="4">
          <el-col :span="16">
            <el-form-item label="会员账号：">
              <el-input v-model="searchKey" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button @click="getMemberBySearchKey">确定搜索</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="7">
        <div class="flex">
          <el-button type="primary" @click="getMemberByStatus('')">所有会员</el-button>
          <el-button type="success" @click="getMemberByStatus(0)">开启</el-button>
          <el-button type="danger" @click="getMemberByStatus(1)">禁止</el-button>
          <el-button type="warning" @click="showKamemAddTable">添加会员</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      v-loading="loading"
      :data="memberList"
      header-align="center"
      stripe
      style="width: 100%"
    >
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column prop="kauser" label="账号" />
      <el-table-column prop="xm" label="姓名" />
      <el-table-column label="信用额度/余额">
        <template #default="scope">
          <Font>{{ scope.row.cs }} / </Font>
          <Font color="red">{{ scope.row.ts.toFixed(2) }}</Font>
        </template>
      </el-table-column>
      <el-table-column prop="dan" label="代理" />
      <el-table-column prop="zhong" label="总代" />
      <el-table-column prop="guan" label="股东" />
      <el-table-column prop="dan_zc" label="代%" />
      <el-table-column prop="zong_zc" label="总%" />
      <el-table-column prop="guan_zc" label="股%" />
      <el-table-column prop="dagu_zc" label="公司%" />
      <el-table-column prop="abcd" label="类型" />
      <el-table-column label="状况">
        <template #default="scope">
          <el-checkbox
            size="large"
            v-model="scope.row.stat"
            @change="updateMemberStatus(scope.row.id, scope.row.stat)"
          ></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="adddate" label="注册时间" />
      <el-table-column prop="look" label="登录次数" />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button-group>
            <el-button icon="edit" type="primary"></el-button>
            <el-button icon="delete" type="primary"></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex; justify-content: center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="page"
      />
    </div>
  </el-card>
  <div v-if="addKamemTableShow">
    <table width="100%" border="0" cellspacing="0" cellpadding="5">
      <tr class="tbtitle">
        <td width="29%"><span class="STYLE3">添加会员</span></td>
        <td width="34%">&nbsp;</td>
        <td width="37%">&nbsp;</td>
      </tr>
      <tr>
        <td height="5" colspan="3"></td>
      </tr>
    </table>
    <table width="99%" border="1" cellpadding="2" cellspacing="1" bordercolor="#ECE9D8">
      <tr>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          上级代理用户：
        </td>
        <td height="30" bordercolor="#CCCCCC">
          <el-select placeholder="" v-model="dan_id">
            <el-option
              v-for="(item, index) in kamemSuperiorList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span class="style2">*(请先选择好上级)</span>
        </td>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          会员盘口：
        </td>
        <td height="30" bordercolor="#CCCCCC">
          <el-select placeholder="" v-model="memberHandicap">
            <el-option
              v-for="(item, index) in memberHandicapList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </td>
      </tr>
      <tr>
        <td width="11%" height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          账号：
        </td>
        <td width="27%" bordercolor="#CCCCCC">
          <el-input v-model="kauser" />
        </td>
        <td width="9%" height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          姓名：
        </td>
        <td width="53%" bordercolor="#CCCCCC">
          <el-input v-model="xm" />
        </td>
      </tr>
      <tr>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">密码：</td>
        <td bordercolor="#CCCCCC">
          <el-input v-model="kapassword" type="password" show-password />
        </td>
        <td align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">总信用额：</td>
        <td bordercolor="#CCCCCC" style="display: flex; align-items: center">
          <el-input v-model="cs" />
          <span style="width: 234px">可用信用额度：</span>
          <el-input v-model="kyx" />
        </td>
      </tr>
      <tr>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          最低限额：
        </td>
        <td bordercolor="#CCCCCC" style="display: flex; align-items: center">
          <el-input v-model="xy" style="width: 200px" />
          <span class="style2"> *（下注最低限额） </span>
        </td>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">状态：</td>
        <td bordercolor="#CCCCCC">
          <el-checkbox v-model="tv6" label="(开启/禁止)" />
        </td>
      </tr>
      <tr>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          自否允许特B：
        </td>
        <td height="30" bordercolor="#CCCCCC">
          <el-select placeholder="" v-model="tmb">
            <el-option
              v-for="(item, index) in tmbList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </td>
        <td bordercolor="#CCCCCC">&nbsp;</td>
        <td bordercolor="#CCCCCC">&nbsp;</td>
      </tr>
      <tr>
        <td height="30" bordercolor="#CCCCCC" bgcolor="#FDF4CA">&nbsp;</td>
        <td colspan="3" bordercolor="#CCCCCC">
          <br />
          <table width="100" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="6"></td>
            </tr>
          </table>
          <el-button type="primary" @click="addKamem">保存会员</el-button>
          <el-button type="danger" @click="back">后退</el-button>
          <br />
          <table width="100" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="10"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { ElNotification } from "element-plus";
import { ElLoading } from "element-plus";
import { memberStore } from "@/pinia/modules/mark_six/member.js";
import { storeToRefs } from "pinia";

const { dispatchGetKamemAll } = memberStore();
const { dispatchUpdateMemberStatus } = memberStore();
const { dispatchGetKaguanAll } = memberStore();
const { dispatchKamemSuperior } = memberStore();
const { dispatchAddKamem } = memberStore();
const mainTableShow = ref(true);
const addKamemTableShow = ref(false);
const page = ref(1);
const loading = ref(false);
const searchKey = ref("");
const kaguanMember = ref("");
const kadanMember = ref("");
const dan_id = ref("");
const kazongMember = ref("");
const memberHandicap = ref("A");
const kauser = ref("");
const xm = ref("");
const kapassword = ref("");
const kyx = ref("");
const cs = ref(0);
const xy = ref("");
const tv6 = ref(false);

const memberHandicapList = ref([
  {
    label: "A盘",
    value: "A",
  },
  {
    label: "B盘",
    value: "B",
  },
  {
    label: "C盘",
    value: "C",
  },
  {
    label: "D盘",
    value: "D",
  },
]);
const tmb = ref(0);
const tmbList = ref([
  {
    label: "允许",
    value: 0,
  },
  {
    label: "不允许",
    value: 1,
  },
]);

const onPageChange = async () => {
  loading.value = true;
  await dispatchGetKamemAll({ page_no: page.value, account: searchKey.value });
  loading.value = false;
  successResult();
};

const getMemberByStatus = async (status) => {
  loading.value = true;
  await dispatchGetKamemAll({
    page_no: page.value,
    account: searchKey.value,
    status: status,
  });
  loading.value = false;
  successResult();
};

const updateMemberStatus = async (id, checked) => {
  console.log(checked);
  let status = 0;
  if (!checked) {
    status = 1;
  }
  loading.value = true;
  await dispatchUpdateMemberStatus({ id, status });
  await dispatchGetKamemAll({ page_no: page.value, account: searchKey.value });
  loading.value = false;
  successResult();
};

const showKamemAddTable = async () => {
  mainTableShow.value = false;
  addKamemTableShow.value = true;
  await dispatchKamemSuperior();
};

const back = () => {
  mainTableShow.value = true;
  addKamemTableShow.value = false;
};

const getMemberBySearchKey = async () => {
  loading.value = true;
  await dispatchGetKamemAll({ page_no: page.value, account: searchKey.value });
  loading.value = false;
  successResult();
};

const addKamem = async () => {
  if (kauser.value == "") {
    alert("用户名不能为空!");
    return;
  }
  if (kapassword.value === "") {
    alert("密码不能为空!");
    return;
  }

  if (xy.value === "") {
    alert("最低限额不能为空!");
    return;
  }
  if (Number(cs.value) > Number(kyx.value)) {
    alert("信用额度超过可用信用额!");
    return;
  }
  if (dan_id.value === "") {
    alert("请选择上级!!");
    return;
  }
  let formData = {
    stat: tv6.value ? 0 : 1,
    dan_id: dan_id.value,
    kauser: kauser.value,
    kapassword: kapassword.value,
    xm: xm.value,
    kyx: kyx.value,
    cs: cs.value,
    xy: xy.value,
    abcd: memberHandicap.value,
    tmb: tmb.value,
  }
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAddKamem(formData);
  if (!success.value) {
    ElNotification({
      title: "错误",
      message: errMessage.value,
      type: "error",
    });
  } else {
    ElNotification({
      title: "成功",
      message: "操作成功。",
      type: "success",
    });
  }
  loading.close();
};

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
};
watch(
  kaguanMember,
  async () => {
    loading.value = true;
    await dispatchGetKamemAll({
      page_no: page.value,
      account: searchKey.value,
      guan_id: kaguanMember.value,
    });
    loading.value = false;
    successResult();
  },
  { deep: true }
);
watch(
  kazongMember,
  async () => {
    loading.value = true;
    await dispatchGetKamemAll({
      page_no: page.value,
      account: searchKey.value,
      zong_id: kazongMember.value,
    });
    loading.value = false;
    successResult();
  },
  { deep: true }
);
watch(
  kadanMember,
  async () => {
    loading.value = true;
    await dispatchGetKamemAll({
      page_no: page.value,
      account: searchKey.value,
      dan_id: kadanMember.value,
    });
    loading.value = false;
    successResult();
  },
  { deep: true }
);
const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(memberStore());
  return getErrMessage.value;
});
const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(memberStore());
  return getTotalCount.value;
});

const kamemSuperiorList = computed(() => {
  const { getKamemSuperiorList } = storeToRefs(memberStore());
  return getKamemSuperiorList.value;
});

const success = computed(() => {
  const { getSuccess } = storeToRefs(memberStore());
  return getSuccess.value;
});

const memberList = computed(() => {
  const { getMemberList } = storeToRefs(memberStore());
  return getMemberList.value;
});

const kaguanMemberList = computed(() => {
  const { getKaguanMember } = storeToRefs(memberStore());
  return getKaguanMember.value;
});

const kazongMemberList = computed(() => {
  const { getKazongMember } = storeToRefs(memberStore());
  return getKazongMember.value;
});

const kadanMemberList = computed(() => {
  const { getKadanMember } = storeToRefs(memberStore());
  return getKadanMember.value;
});

onMounted(async () => {
  loading.value = true;
  await dispatchGetKamemAll({ page_no: page.value, account: searchKey.value });
  await dispatchGetKaguanAll({});
  loading.value = false;
  successResult();
});
</script>
<style lang="scss" scoped>
.member-wrapper {
  width: 100%;
  max-height: 500px;
  margin: 10px 0px;
}
.style2 {
  color: #ff0000;
}
</style>
