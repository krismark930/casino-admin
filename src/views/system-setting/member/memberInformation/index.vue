<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>{{ $t('menu.memberInformation') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="关键字查找">
        <el-input
          clearable
          v-model="formData.keyword"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="memberInformationData" style="width: 100%;" border stripe>
      <el-table-column type="index" label="编号" align="center" />
      <el-table-column
        property="credentialInfo"
        label="帐号密码"
        align="center"
      >
        <template #default="scope">
          <el-space :size="5" spacer=":">
            <el-icon size="mid"><User /></el-icon>
            <span>{{ scope.row.credentialInfo.username }}</span>
          </el-space>
          <br />
          <el-space :size="5" spacer=":">
            <el-icon size="mid"><Unlock /></el-icon>
            <span>{{ scope.row.credentialInfo.username }}</span>
          </el-space>
        </template>
      </el-table-column>
      <el-table-column label="日期时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template #default="scope">
          <el-input
            v-model="scope.row.remark"
            placeholder=""
            type="textarea"
            :value="scope.row.remark"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column label="电话号码" align="center">
        <template #default="scope">
          <el-input
            v-model="scope.row.phoneNumber"
            placeholder=""
            :value="scope.row.phoneNumber"
            clearable
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column property="name" label="姓名" align="center">
        <template #default="scope">
          <el-input
            v-model="scope.row.name"
            placeholder=""
            :value="scope.row.name"
            clearable
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        property="availableBalance"
        label="可用余额"
        align="center"
      />
      <el-table-column property="ip" label="IP" align="center" />
      <el-table-column property="contactInfo" label="联系方式" align="center" />
      <el-table-column fixed="right" label="操作" align="center" width="220px">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="editMemberData(scope.$index, scope.row)"
          >
            更改
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="deleteMemberData(scope.$index, scope.row)"
          >
            删除
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="deleteSimailarData(scope.$index, scope.row)"
          >
            删除同类
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        keyword: '',
      },
      memberInformationData: [
        {
          id: 1,
          credentialInfo: {
            username: 'aa123',
            password: '112233',
          },
          datetime: '2023-02-22 12:48:27',
          remark: '转入',
          phoneNumber: '138****9999',
          name: '测试',
          availableBalance: '0.0',
          ip: '103.170.73.18',
          contactInfo: '',
        },
        {
          id: 2,
          credentialInfo: {
            username: 'aa123',
            password: '112233',
          },
          datetime: '2023-02-22 12:48:27',
          remark: '转入2',
          phoneNumber: '138****9999',
          name: '测试',
          availableBalance: '0.0',
          ip: '103.170.73.18',
          contactInfo: '',
        },
        {
          id: 3,
          credentialInfo: {
            username: 'aa123',
            password: '112233',
          },
          datetime: '2023-02-22 12:48:27',
          remark: '转入3',
          phoneNumber: '138****9999',
          name: '测试',
          availableBalance: '0.0',
          ip: '103.170.73.18',
          contactInfo: '',
        },
      ],
    }
  },
  methods: {
    editMemberData(index, row) {
      console.log(index, row)
    },
    deleteMemberData(index, row) {
      console.log(index, row)
    },
    deleteSimailarData(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
