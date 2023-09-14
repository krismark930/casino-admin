<template>
  <div style="margin-left: 20px;">
    <MainTable v-if="mainTableShow" @showSubTable="showSubTable" />
    <SubTable v-else :selectedPeriod="selectedPeriod" @showMainTable="showMainTable" />
  </div>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs } from 'vue';
import MainTable from "./MainTable.vue";
import SubTable from "./SubTable.vue";

const mainTableShow = ref(true);
const selectedPeriod = ref("");

const showSubTable = (data) => {
  selectedPeriod.value = data;
  mainTableShow.value = false;
}

const showMainTable = () => {
  mainTableShow.value = true;
}
</script>
<style scoped>
.tbtitle {
  background: #0077cc;
  color: #ffffff;
}

.red {
  color: red
}

.black {
  color: black
}
</style>
