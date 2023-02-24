<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>{{ $t('menu.systemInformation') }}</h3>
    <el-table
      :data="systemInformation"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" width="120" />
      <el-table-column property="name" label="名字" width="180" />
      <el-table-column label="日期" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="content" label="内容" />
      <el-table-column property="phoneNumber" label="电话号码" width="120" />
      <el-table-column property="qqSkype" label="QQSkype" width="120" />
      <el-table-column property="email" label="电邮信箱" width="120" />
      <el-table-column property="ip" label="IP" width="120" />
      <el-table-column property="url" label="网址" width="120" />
      <el-table-column fixed="right" label="功能" width="70">
        <template #default="scope">
          <el-button
            type="primary"
            icon="delete"
            @click="deleteData(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      systemInformation: [
        {
          id: 1,
          name: '2021-04-28',
          time: '2021-04-28',
          content: '测试',
          phoneNumber: '未阅',
          qqSkype: 'adfasdf',
          email: 'admin@admin.com',
          ip: '10.10.10.1',
          url: 'google.com',
        },
        {
          id: 2,
          name: '2021-04-28',
          time: '2021-04-28',
          content: '测试',
          phoneNumber: '未阅',
          qqSkype: 'adfasdf',
          email: 'admin@admin.com',
          ip: '10.10.10.1',
          url: 'google.com',
        },
        {
          id: 3,
          name: '2021-04-28',
          time: '2021-04-28',
          content: '测试',
          phoneNumber: '未阅',
          qqSkype: 'adfasdf',
          email: 'admin@admin.com',
          ip: '10.10.10.1',
          url: 'google.com',
        },
      ],
    }
  },
  methods: {
    deleteData(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
