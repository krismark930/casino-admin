<template>
  <el-form>
    <Kakithe v-if="kakitheShow" @updateYaKitheList="updateYaKitheList" />
    <Yakithe v-else :yakitheId="yakitheId" @updateYaKitheList="updateYaKitheList" @showKakithe="showKakithe" />
    <table class="handicap-yakithe">
      <thead>
        <tr>
          <th>预设开奖期数</th>
          <th>开奖时间</th>
          <th>自动开盘时间</th>
          <th>自动封盘时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in yakitheList" :key="index">
          <td>{{ item.nn }}</td>
          <td>{{ item.nd }}</td>
          <td>{{ item.zfbdate1 }}</td>
          <td>{{ item.zfbdate }}</td>
          <td>
            <el-button size="small" @click="showYakithe(item.id)">
              <el-icon>
                <Setting />
              </el-icon>
              设置
            </el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </el-form>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { storeToRefs } from "pinia";
import Kakithe from "./components/Kakithe.vue";
import Yakithe from "./components/Yakithe.vue";
import { handicapStore } from "@/pinia/modules/macao_six_mark/handicap.js";
const kakitheShow = ref(true);
const yakitheId = ref(0);
const { dispatchYakitheAll } = handicapStore();
const yakitheList = computed(() => {
  const { getYakitheList } = storeToRefs(handicapStore());
  return getYakitheList.value;
})
const updateYaKitheList = async () => {
  await dispatchYakitheAll();
}
const showYakithe = (id) => {
  kakitheShow.value = false;
  yakitheId.value = id;
}
const showKakithe = () => {
  kakitheShow.value = true;
}
onMounted(async () => {
  await dispatchYakitheAll();
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

.handicap-yakithe {
  width: 100%;
  border: $table-border;
  border-collapse: collapse;

  tr {
    height: 30px;
  }

  th {
    background-color: $table-th-bgcolor;
  }

  th,
  td {
    width: 20%;
    text-align: center;
    border: $table-border;
  }
}
</style>
