<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; text-align: center; margin: 1rem;">
    <div style="text-align: center;">
      <h3>{{ $t('menu.systemNotifications') }}</h3>
      <el-form :model="systemNoticeItem" label-width="100px" inline="true">
        <el-form-item label="内容">
          <el-form-item>
            <el-input clearable v-model="noticeFormData.Msg_System" placeholder="简体"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: 10px;">
            <el-input clearable v-model="noticeFormData.Msg_System_tw" placeholder="繁体"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: 10px;">
            <el-input clearable v-model="noticeFormData.Msg_System_en" placeholder="英文"></el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker v-model="noticeFormData.ntime" type="datetime" format="YYYY-MM-DD HH:mm:ss"
            placeholder="选择日期和时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="选项" prop="title">
          <el-checkbox label="会员" v-model="noticeFormData.member" />
          <el-checkbox label="代理" v-model="noticeFormData.agents" />
          <el-checkbox label="总代理" v-model="noticeFormData.world" />
          <el-checkbox label="股东" v-model="noticeFormData.corprator" />
          <el-checkbox label="公司" v-model="noticeFormData.super" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addSystemNotice">确定</el-button>
          <el-button type="danger" @click="resetSystemNotice">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align: center;">
      <el-form :inline="true" :model="formData">
        <el-form-item label="线上数据－公告管理"></el-form-item>
        <el-form-item>
          <el-select v-model="formData.level" placeholder="" @change="getSystemNoticeByFilter">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-date-picker v-model="formData.date_start" type="date" format="YYYY-MM-DD" placeholder=""
            @change="getSystemNoticeByFilter"></el-date-picker>
        </el-form-item>
      </el-form>
      <el-table :data="webMarqueeDataList" style="width: 100%;" border header-align="center" stripe>
        <el-table-column type="index" label="#" />
        <el-table-column label="日期" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-date-picker v-model="scope.row.Date" type="date" format="YYYY-MM-DD" placeholder=""></el-date-picker>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="zh" label="简体信息">
          <template #default="scope">
            <el-input v-model="scope.row.Message" />
          </template>
        </el-table-column>
        <el-table-column property="cn" label="繁体信息">
          <template #default="scope">
            <el-input v-model="scope.row.Message_tw" />
          </template>
        </el-table-column>
        <el-table-column property="en" label="英文信息">
          <template #default="scope">
            <el-input v-model="scope.row.Message_en" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="功能" width="120">
          <template #default="scope">
            <el-button-group>
              <el-button type="primary" icon="edit" @click="updateSystemNotice(scope.row)"></el-button>
              <el-button type="primary" icon="delete" @click="deleteSystemNotice(scope.row.ID)"></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, computed, onMounted } from 'vue'
import moment from "moment-timezone"
import { systemNoticeStore } from '@/pinia/system_notice';
import { ElNotification, ElLoading } from "element-plus";
import { storeToRefs } from 'pinia';
const { dispatchSystemNotice } = systemNoticeStore();
const { dispatchAddSystemNotice } = systemNoticeStore();
const { dispatchUpdateSystemNotice } = systemNoticeStore();
const { dispatchDeleteSystemNotice } = systemNoticeStore();

const options = ref([
  {
    value: 'MEM',
    label: '会员',
  },
  {
    value: 'D',
    label: '代理',
  },
  {
    value: 'C',
    label: '总代理',
  },
  {
    value: 'B',
    label: '股东',
  },
  {
    value: 'A',
    label: '公司',
  },
])
const noticeFormData = ref({
  Msg_System: "公司维护中。。。",
  Msg_System_tw: "公司维护中213",
  Msg_System_en: "This is test",
  ntime: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:MM:SS"),
  member: true,
  agents: false,
  world: false,
  corprator: false,
  super: false
})
const formData = ref({
  date_start: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
  level: 'MEM',
})
const addSystemNotice = async () => {
  noticeFormData.value.member = noticeFormData.value.member ? 1 : 0;
  noticeFormData.value.agents = noticeFormData.value.agents ? 1 : 0;
  noticeFormData.value.world = noticeFormData.value.world ? 1 : 0;
  noticeFormData.value.corprator = noticeFormData.value.corprator ? 1 : 0;
  noticeFormData.value.super = noticeFormData.value.super ? 1 : 0;
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAddSystemNotice(noticeFormData.value);
  await dispatchSystemNotice(formData.value)
  successResult();
  loading.close();
  noticeFormData.value.member = noticeFormData.value.member == 1 ? true : false;
  noticeFormData.value.agents = noticeFormData.value.agents == 1 ? true : false;
  noticeFormData.value.world = noticeFormData.value.world == 1 ? true : false;
  noticeFormData.value.corprator = noticeFormData.value.corprator == 1 ? true : false;
  noticeFormData.value.super = noticeFormData.value.super == 1 ? true : false;
}
const resetSystemNotice = () => {
  noticeFormData.value = {
    Msg_System: "公司维护中。。。",
    Msg_System_tw: "公司维护中213",
    Msg_System_en: "This is test",
    ntime: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:MM::SS"),
    member: true,
    agents: false,
    world: false,
    corprator: false,
    super: false
  }
}
const updateSystemNotice = async (item) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateSystemNotice(item);
  await dispatchSystemNotice(formData.value)
  successResult();
  loading.close();
}
const deleteSystemNotice = async (ID) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchDeleteSystemNotice({ ID });
  await dispatchSystemNotice(formData.value)
  successResult();
  loading.close();
}
const success = computed(() => {
  const { getSuccess } = storeToRefs(systemNoticeStore());
  return getSuccess.value;
})
const systemNoticeItem = computed(() => {
  const { getSystemNoticeItem } = storeToRefs(systemNoticeStore());
  noticeFormData.value.Msg_System = getSystemNoticeItem.value.Msg_System
  noticeFormData.value.Msg_System_tw = getSystemNoticeItem.value.Msg_System_tw
  noticeFormData.value.Msg_System_en = getSystemNoticeItem.value.Msg_System_en
  return getSystemNoticeItem.value
})
const webMarqueeDataList = computed(() => {
  const { getWebMarqueeDataList } = storeToRefs(systemNoticeStore());
  return getWebMarqueeDataList.value;
})
const getSystemNoticeByFilter = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSystemNotice(formData.value)
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
  await dispatchSystemNotice(formData.value)
  console.log(systemNoticeItem.value);
  loading.close();
})
</script>
<style lang="scss" scoped></style>
