<template>
  <div>
    <table border="1" align="center" cellspacing="1" cellpadding="1" bordercolordark="#FFFFFF" bordercolor="f1f1f1"
      width="99%">
      <tr>
        <td width="4%" height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">序号</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会员</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" width="14%">下单时间 </td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" width="10%">期数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下注金额</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">赔率</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">退佣%</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">类型1</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">类型2</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">球号</td>
        <td width="30" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">操作</TD>
      </tr>
      <tr v-for="(item, index) in mainList" :key="index">
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ index + 1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.username }}<font color=ff6600> ({{ item.xm }})</font>
          .{{ item.abcd }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.adddate" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <font color="ff6600">{{ item.kithe }}期</font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.sum_m" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.rate" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.user_ds" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.class1" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.class2" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-input v-model="item.class3" />
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <el-button type="primary" @click="updateKatanById(item)">修改</el-button>
          <el-button type="danger" @click="deleteKatanById(item.id)">删除</el-button>
        </td>
      </tr>
      <tr>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">总计</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ mainSumItem.z_re }}注
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ mainSumItem.z_sum }}
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">&nbsp;</td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">&nbsp;</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch, defineProps, toRefs } from 'vue';
import { ElNotification } from 'element-plus';
import { queryStore } from "@/pinia/modules/macao_six_mark/query.js";
import { storeToRefs } from "pinia";
import { ElLoading } from 'element-plus'
import moment from 'moment-timezone';

const props = defineProps({
  class2: String,
  class4: String,
  selectedPeriod: Number,
  fromDate: String,
  endDate: String,
  searchKey: String,
  userName: String,
  updateMainData: Boolean
});

const { selectedPeriod, class2, fromDate, endDate, searchKey, userName, class4, updateMainData } = toRefs(props);

const { dispatchMainQuery } = queryStore();
const { dispatchDeleteKatan } = queryStore();
const { dispatchUpdateKatan } = queryStore();

const deleteKatanById = async (id) => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchDeleteKatan({ id });
  let data = {
    search_key: searchKey.value,
    user_name: userName.value,
    period: selectedPeriod.value,
    class2: class2.value,
    class4: class4.value,
    from_date: moment(fromDate.value).format("YYYY-MM-DD"),
    end_date: moment(endDate.value).format("YYYY-MM-DD")
  }
  await dispatchMainQuery(data);
  successResult();
  loading.close();
}

const updateKatanById = async (item) => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchUpdateKatan(item);
  let data = {
    search_key: searchKey.value,
    user_name: userName.value,
    period: selectedPeriod.value,
    class2: class2.value,
    class4: class4.value,
    from_date: moment(fromDate.value).format("YYYY-MM-DD"),
    end_date: moment(endDate.value).format("YYYY-MM-DD")
  }
  await dispatchMainQuery(data);
  successResult();
  loading.close();
}

const successResult = () => {
  if (success.value) {
    ElNotification({
      title: '成功',
      message: '操作成功。',
      type: 'success',
    })
  } else {
    ElNotification({
      title: '错误',
      message: '操作失败。',
      type: 'error',
    })
  }
}

watch(updateMainData, async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  let data = {
    search_key: searchKey.value,
    user_name: userName.value,
    period: selectedPeriod.value,
    class2: class2.value,
    class4: class4.value,
    from_date: moment(fromDate.value).format("YYYY-MM-DD"),
    end_date: moment(endDate.value).format("YYYY-MM-DD")
  }
  await dispatchMainQuery(data);
  loading.close();
}, { deep: true });
const success = computed(() => {
  const { getSuccess } = storeToRefs(queryStore());
  return getSuccess.value;
})
const mainList = computed(() => {
  const { getMainList } = storeToRefs(queryStore());
  return getMainList.value;
})

const mainSumItem = computed(() => {
  const { getMainSumItem } = storeToRefs(queryStore());
  return getMainSumItem.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  let data = {
    search_key: searchKey.value,
    user_name: userName.value,
    period: selectedPeriod.value,
    class2: class2.value,
    class4: class4.value,
    from_date: moment(fromDate.value).format("YYYY-MM-DD"),
    end_date: moment(endDate.value).format("YYYY-MM-DD")
  }
  await dispatchMainQuery(data);
  loading.close();
})
</script>
<style scoped>
.red {
  color: red
}

.black {
  color: black
}
</style>
