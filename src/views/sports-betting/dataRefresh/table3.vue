<template>
  <el-table
    :data="dataRefresh2"
    style="width: 100%; margin-top: 1rem;"
    border
    stripe
  >
    <el-table-column property="title" label="刷新设置" align="center" />
    <el-table-column label="单式繁体" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.singleTraditional"
          placeholder=""
          :value="scope.row.handicap"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="单式" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.single"
          placeholder=""
          :value="scope.row.single"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="单节" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.singleSection"
          placeholder=""
          :value="scope.row.singleSection"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="走地" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.runningGround"
          placeholder=""
          :value="scope.row.runningGround"
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
    <el-table-column label="冠军" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.champion"
          placeholder=""
          :value="scope.row.champion"
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
      dataRefresh2: [
        {
          title: '篮球',
          singleTraditional: '150',
          single: '155',
          singleSection: '156',
          runningGround: '30',
          passBall: '280',
          champion: '300',
        },
        {
          title: '网球',
          singleTraditional: '150',
          single: '155',
          singleSection: '156',
          runningGround: '30',
          passBall: '280',
          champion: '300',
        },
        {
          title: '排球',
          singleTraditional: '150',
          single: '155',
          singleSection: '156',
          runningGround: '30',
          passBall: '280',
          champion: '300',
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
