<template>
  <div class="blacklist-wrapper">
    <el-table :data="badMemberList" class="blacklist-table">
      <el-table-column prop="blackList" label="坏会员">
        <template #default="scope">
          <h5>坏会员：</h5>
          <el-input v-model="scope.row.BadMember" autocomplete="off" />
          <h5>坏会员2：</h5>
          <el-input v-model="scope.row.BadMember2" autocomplete="off" />
          <h5>坏会员(角球)：</h5>
          <el-input v-model="scope.row.BadMember_JQ" autocomplete="off" />
          <h5>
            注：坏会员禁止投注第4节、加时篮球赛事,坏会员2禁止投注足球过关,坏会员角球禁止投注角球、点球,多个会员用半角,隔开。
          </h5>
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button type="primary" @click="updateBadMember">
            确定
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, computed } from 'vue'
import { systemStore } from '@/pinia/modules/system';
import { ElNotification, ElLoading } from "element-plus";
import { storeToRefs } from 'pinia';
const {dispatchUpdateUrl} = systemStore();
const props = defineProps<{ badMemberList: Array<any> }>();
const { badMemberList } = toRefs(props);
const updateBadMember = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  let formData = {
    BadMember: badMemberList.value[0].BadMember,
    BadMember2: badMemberList.value[0].BadMember2,
    BadMember_JQ: badMemberList.value[0].BadMember_JQ
  }
  await dispatchUpdateUrl(formData);
  successResult();
  loading.close();
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
.blacklist-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.blacklist-table {
  width: 100%;
}
</style>
