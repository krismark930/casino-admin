<template>
  <el-table
    :data="dataRefresh1"
    style="width: 100%; margin-top: 1rem;"
    border
    stripe
  >
    <el-table-column
      property="refreshSettings"
      label="刷新设置"
      align="center"
    />
    <el-table-column label="足球比分" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.footballScore"
          placeholder=""
          :value="scope.row.footballScore"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="足球结算" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.footballSettlement"
          placeholder=""
          :value="scope.row.footballSettlement"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="篮球比分" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.basketballScore"
          placeholder=""
          :value="scope.row.basketballScore"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="篮球结算" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.basketballSettlement"
          placeholder=""
          :value="scope.row.basketballSettlement"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="棒球比分" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.baseballScore"
          placeholder=""
          :value="scope.row.baseballScore"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="棒球结算" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.baseballSettlement"
          placeholder=""
          :value="scope.row.baseballSettlement"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="网球比分" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.tennisScore"
          placeholder=""
          :value="scope.row.tennisScore"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="网球结算" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.tennisSettlement"
          placeholder=""
          :value="scope.row.tennisSettlement"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="排球比分" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.volleyballScore"
          placeholder=""
          :value="scope.row.volleyballScore"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="排球结算" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.volleyballSettlement"
          placeholder=""
          :value="scope.row.volleyballSettlement"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="其他比分" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.otherScores"
          placeholder=""
          :value="scope.row.otherScores"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="其他结算" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.otherSettlement"
          placeholder=""
          :value="scope.row.otherSettlement"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="" align="center" width="80px">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          @click="confirmData(scope.$index, scope.row)"
        >
          确定
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      dataRefresh1: [
        {
          refreshSettings: '结果',
          footballScore: '3',
          footballSettlement: '60',
          basketballScore: '3',
          basketballSettlement: '65',
          baseballScore: '4',
          baseballSettlement: '180',
          tennisScore: '4',
          tennisSettlement: '180',
          volleyballScore: '4',
          volleyballSettlement: '180',
          otherScores: '4',
          otherSettlement: '180',
        },
      ],
    }
  },
  methods: {
    confirmData() {},
  },
}
</script>

<style lang="scss" scoped></style>
