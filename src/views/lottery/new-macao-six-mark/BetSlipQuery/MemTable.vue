<template>
  <el-scrollbar>
    <el-table :data="memberList" v-loading="loading" class="betslip-wrapper" show-summary header-align="center" stripe
      style="width: 100%">
      <el-table-column type="index" width="80" label="序号" />
      <el-table-column prop="name" :label="gradeLabel">
        <template #default="scope">
          {{ scope.row.name }}
          <font color=ff6600> ({{ scope.row.xm }})</font>
        </template>
      </el-table-column>
      <el-table-column prop="re" label="注数" />
      <el-table-column prop="sum_m" label="下注金额">
        <template #default="scope">
          <div @click="getMemberByGrade(scope.row.name, scope.row.grade)" style="cursor: pointer;">
            <Font color="red">{{ scope.row.sum_m }}</Font>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sum_st" label="实投" />
      <el-table-column prop="dagu_zc" label="公司占成" />
      <el-table-column prop="guan_zc" label="股东占成" />
      <el-table-column prop="zong_zc" label="总代占成" />
      <el-table-column prop="dai_zc" label="代理占成" />
    </el-table>
  </el-scrollbar>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs, watch } from 'vue';
import { queryStore } from "@/pinia/modules/new_macao_six_mark/query.js";
import { ElLoading } from 'element-plus'
import { storeToRefs } from "pinia";

const emit = defineEmits(['showMainTable']);

const props = defineProps({
  selectedPeriod1: Number,
});

const { selectedPeriod1 } = toRefs(props);

const { dispatchMemberQuery } = queryStore();
const gradeLabel = ref("股东");
const loading = ref(false);

const memberList = computed(() => {
  const { getMemberList } = storeToRefs(queryStore());
  if (getMemberList.value.length > 0) {
    console.log(getMemberList.value[0].grade);
    switch (getMemberList.value[0].grade) {
      case 1:
        gradeLabel.value = "股东";
        break;
      case 2:
        gradeLabel.value = "总代理";
        break;
      case 3:
        gradeLabel.value = "代理";
        break;
      case 4:
        gradeLabel.value = "会员账号";
        break;
    }
  }
  return getMemberList.value;
})

watch(selectedPeriod1, async () => {
  if (selectedPeriod1.value != "") {
    const loading = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchMemberQuery({ period: selectedPeriod1.value });
    loading.close();
  }
}, { deep: true });

const getMemberByGrade = async (name, grade) => {
  let data = {};
  if (grade == 1) {
    loading.value = true;
    data = {
      period: selectedPeriod1.value,
      guan_name: name,
    }
  } else if (grade == 2) {
    loading.value = true;
    data = {
      period: selectedPeriod1.value,
      zong_name: name,
    }
  } else if (grade == 3) {
    loading.value = true;
    data = {
      period: selectedPeriod1.value,
      dai_name: name,
    }
  } else if (grade == 4) {
    emit("showMainTable", { name: name, period: selectedPeriod1.value });
    return;
  }
  await dispatchMemberQuery(data);
  loading.value = false;
}

onMounted(async () => {
  if (selectedPeriod1.value != "") {
    const loading = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchMemberQuery({ period: selectedPeriod1.value });
    loading.close();
  }
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
