<template>
  <el-card shadow="never" v-if="mainTableShow">
    <el-row :gutter="10">
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
          <el-button type="warning" @click="showKaguanAddTable">添加会员</el-button>
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
      <el-table-column label="总/代/会">
        <template #default="scope">
          {{ scope.row.memnum }} / {{ scope.row.memnum1 }} / {{ scope.row.memnum2 }}
        </template>
      </el-table-column>
      <el-table-column prop="sf" label="股%" />
      <el-table-column label="公司%">
        <template #default="scope">
          {{ 100 - scope.row.sf }}
        </template>
      </el-table-column>
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
  <div v-if="addKaguanTableShow">
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
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">走飞：</td>
        <td bordercolor="#CCCCCC" style="display: flex; align-items: center">
          <el-checkbox v-model="tv5" label="(充许走飞/禁止走飞)" />
        </td>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">状态：</td>
        <td bordercolor="#CCCCCC">
          <el-checkbox v-model="tv6" label="(开启/禁止)" />
        </td>
      </tr>
      <tr>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          总代占成：
        </td>
        <td bordercolor="#CCCCCC">
          <el-select placeholder="" v-model="sj">
            <el-option
              v-for="(item, index) in sjList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </td>
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          代理占成：
        </td>
        <td bordercolor="#CCCCCC">
          <el-select placeholder="" v-model="sf">
            <el-option
              v-for="(item, index) in sfList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
        <td height="30" align="right" bordercolor="#CCCCCC" bgcolor="#FDF4CA">
          会员人数：
        </td>
        <td bordercolor="#CCCCCC">
          <el-input v-model="rs" />
        </td>
      </tr>
      <tr>
        <td height="30" colspan="4" bordercolor="#CCCCCC">
          <table
            width="100%"
            border="1"
            cellpadding="3"
            cellspacing="1"
            bordercolor="f1f1f1"
          >
            <tr>
              <td width="90" height="25" align="center" bgcolor="#FDF4CA">
                <span class="STYLE2">类型</span>
              </td>
              <td align="center" bgcolor="#FDF4CA">佣金%A</td>
              <td align="center" bgcolor="#FDF4CA">佣金%B</td>
              <td align="center" bgcolor="#FDF4CA">佣金%C</td>
              <td align="center" bgcolor="#FDF4CA">佣金%D</td>
              <td align="center" bgcolor="#FDF4CA">单注限额</td>
              <td align="center" bgcolor="#FDF4CA">单项(号)限额</td>
            </tr>
            <tr v-for="(item, i) in kaguanOtherList" :key="i">
              <td height="20" align="center" bgcolor="#FDF4CA">
                {{ item.ds }}
              </td>
              <td align="center" bgcolor="#FEFBE9">
                <el-input v-model="item.yg" />
              </td>
              <td align="center" bgcolor="#FEFBE9">
                <el-input v-model="item.ygb" />
              </td>
              <td align="center" bgcolor="#FEFBE9">
                <el-input v-model="item.ygc" />
              </td>
              <td align="center" bgcolor="#FEFBE9">
                <el-input v-model="item.ygd" />
              </td>
              <td align="center" bgcolor="#FEFBE9">
                <el-input v-model="item.xx" />
              </td>
              <td align="center" bgcolor="#FEFBE9">
                <el-input v-model="item.xxx" />
              </td>
            </tr>
          </table>
        </td>
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
          <el-button type="primary" @click="addKaguan">保存会员</el-button>
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
import { memberStore } from "@/pinia/modules/new_macao_six_mark/member.js";
import { storeToRefs } from "pinia";

const { dispatchKaguanByGrade } = memberStore();
const { dispatchUpdateKaguanStatus } = memberStore();
const { dispatchKaguanSuperior } = memberStore();
const { dispatchAddKaguan } = memberStore();
const mainTableShow = ref(true);
const addKaguanTableShow = ref(false);
const page = ref(1);
const loading = ref(false);
const searchKey = ref("");
const kauser = ref("");
const xm = ref("");
const kapassword = ref("");
const kyx = ref(2000000000);
const cs = ref(0);
const xy = ref("");
const tv6 = ref(false);
const tv5 = ref(false);
const rs = ref("");
const sff = ref(0);
const sf = ref(0);
const sfList = ref([
  {
    label: "不占成",
    value: 0,
  },
  {
    label: "10%",
    value: 10,
  },
  {
    label: "20%",
    value: 20,
  },
  {
    label: "30%",
    value: 30,
  },
  {
    label: "40%",
    value: 40,
  },
  {
    label: "50%",
    value: 50,
  },
  {
    label: "60%",
    value: 60,
  },
  {
    label: "70%",
    value: 70,
  },
  {
    label: "80%",
    value: 80,
  },
  {
    label: "90%",
    value: 90,
  },
  {
    label: "100%",
    value: 100,
  },
]);
const sj = ref(0);
const sjList = ref([
  {
    label: "不占成",
    value: 0,
  },
  {
    label: "10%",
    value: 10,
  },
  {
    label: "20%",
    value: 20,
  },
  {
    label: "30%",
    value: 30,
  },
  {
    label: "40%",
    value: 40,
  },
  {
    label: "50%",
    value: 50,
  },
  {
    label: "60%",
    value: 60,
  },
  {
    label: "70%",
    value: 70,
  },
  {
    label: "80%",
    value: 80,
  },
  {
    label: "90%",
    value: 90,
  },
  {
    label: "100%",
    value: 100,
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

const showKaguanAddTable = async () => {
  mainTableShow.value = false;
  addKaguanTableShow.value = true;
  await dispatchKaguanSuperior();
};

const addKaguan = async () => {
  if (kauser.value == "") {
    alert("用户名不能为空!");
    return;
  }
  if (kapassword.value === "") {
    alert("密码不能为空!");
    return;
  }
  if (Number(cs.value) > 2000000000) {
    alert("信用额度超过可用信用额!");
    return;
  }
  if (Number(sf.value) + Number(sj.value) > 100) {
    alert("对不起,请正确设置占成!");
    return;
  }
  let formData = {
    stat: tv6.value ? 0 : 1,
    pz: tv5.value ? 0 : 1,
    kauser: kauser.value,
    kapassword: kapassword.value,
    xm: xm.value,
    kyx: kyx.value,
    cs: cs.value,
    xy: xy.value,
    sf: sf.value,
    sj: sj.value,
    rs: rs.value,
    tmb: tmb.value,
    other_data: JSON.stringify(kaguanOtherList.value),
  };
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAddKaguan(formData);
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
const back = () => {
  mainTableShow.value = true;
  addKaguanTableShow.value = false;
};

const onPageChange = async () => {
  loading.value = true;
  await dispatchKaguanByGrade({
    page_no: page.value,
    account: searchKey.value,
    grade: 1,
  });
  loading.value = false;
  successResult();
};

const memberList = computed(() => {
  const { getMemberList } = storeToRefs(memberStore());
  return getMemberList.value;
});

const getMemberByStatus = async (status) => {
  loading.value = true;
  await dispatchKaguanByGrade({
    page_no: page.value,
    account: searchKey.value,
    status: status,
    grade: 1,
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
  await dispatchUpdateKaguanStatus({ id, status });
  await dispatchKaguanByGrade({
    page_no: page.value,
    account: searchKey.value,
    grade: 1,
  });
  loading.value = false;
  successResult();
};

const getMemberBySearchKey = async () => {
  loading.value = true;
  await dispatchKaguanByGrade({
    page_no: page.value,
    account: searchKey.value,
    grade: 1,
  });
  loading.value = false;
  successResult();
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

const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(memberStore());
  return getErrMessage.value;
});

const kaguanOtherList = computed(() => {
  const { getKaguanOtherList } = storeToRefs(memberStore());
  return getKaguanOtherList.value;
});
const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(memberStore());
  return getTotalCount.value;
});

const success = computed(() => {
  const { getSuccess } = storeToRefs(memberStore());
  return getSuccess.value;
});

onMounted(async () => {
  loading.value = true;
  await dispatchKaguanByGrade({
    page_no: page.value,
    account: searchKey.value,
    grade: 1,
  });
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
</style>
