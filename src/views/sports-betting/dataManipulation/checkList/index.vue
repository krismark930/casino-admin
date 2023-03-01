<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>过关注单</h3>
    <el-table
      :data="checkListData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        label="投注时间"
        property="bettingTime"
        align="center"
      ></el-table-column>
      <el-table-column
        label="用户名称"
        property="userName"
        align="center"
      ></el-table-column>
      <el-table-column
        label="球赛种类"
        property="gameType"
        align="center"
      ></el-table-column>
      <el-table-column
        label="MID"
        property="mid"
        align="center"
      ></el-table-column>
      <el-table-column
        label="內容"
        property="content"
        align="center"
      ></el-table-column>
      <el-table-column
        label="投注"
        property="betting"
        align="center"
      ></el-table-column>
      <el-table-column
        label="会员"
        property="member"
        align="center"
      ></el-table-column>
      <el-table-column
        label="取消"
        property="cancel"
        align="center"
      ></el-table-column>
      <el-table-column fixed="right" label="功能" width="70">
        <!-- <template #default="scope">
                    <el-button
                        type="primary"
                        icon="delete"
                        @click="deleteData(scope.$index, scope.row)"
                    ></el-button>
                </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkListData: [
        {
          bettingTime: '',
          userName: '',
          gameType: '',
          mid: '',
          content: '',
          betting: '',
          member: '',
          cancel: '',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
