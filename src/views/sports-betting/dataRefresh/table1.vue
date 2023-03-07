<template>
  <el-table :data="dataRefresh1" style="width: 100%;" border stripe>
    <el-table-column property="betSettings" label="下注设置" align="center" />
    <el-table-column label="让球" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.handicap"
          placeholder=""
          :value="scope.row.handicap"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="大小球" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.ballSize"
          placeholder=""
          :value="scope.row.ballSize"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="独赢" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.winAlone"
          placeholder=""
          :value="scope.row.winAlone"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="滚球" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.rollingBall"
          placeholder=""
          :value="scope.row.rollingBall"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="滚球大小" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.rollingBallSize"
          placeholder=""
          :value="scope.row.rollingBallSize"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="波胆" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.cholesterol"
          placeholder=""
          :value="scope.row.cholesterol"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="入球数" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.goals"
          placeholder=""
          :value="scope.row.goals"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="半全场" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.halfTime"
          placeholder=""
          :value="scope.row.halfTime"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="标准过关" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.standardPass"
          placeholder=""
          :value="scope.row.standardPass"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="让球过关" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.passBall"
          placeholder=""
          :value="scope.row.passBall"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="综合过关" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.comprehensivePass"
          placeholder=""
          :value="scope.row.comprehensivePass"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="冠军" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.champion"
          placeholder=""
          :value="scope.row.champion"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="最大单场" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.maxSingleGame"
          placeholder=""
          :value="scope.row.maxSingleGame"
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
          betSettings: '足(网/排/篮/棒)球',
          handicap: '10',
          ballSize: '10',
          winAlone: '10',
          rollingBall: '10',
          rollingBallSize: '10',
          cholesterol: '10',
          goals: '10',
          halfTime: '10',
          standardPass: '10',
          passBall: '10',
          comprehensivePass: '10',
          champion: '10',
          maxSingleGame: '10000',
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
