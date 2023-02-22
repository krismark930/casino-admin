<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <el-form :inline="true" :model="formData">
      <el-form-item label="线上数据－公告管理"></el-form-item>
      <el-form-item>
        <el-select v-model="formData.option" placeholder="Select type">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.date"
          type="date"
          placeholder="Select date"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <el-table
      :data="onlineData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="time" label="日期"></el-table-column>
      <el-table-column prop="zh" label="简体信息"></el-table-column>
      <el-table-column prop="cn" label="繁体信息"></el-table-column>
      <el-table-column prop="en" label="英文信息"></el-table-column>
      <el-table-column fixed="right" label="功能" width="120">
        <el-button-group>
          <el-button
            type="primary"
            icon="edit"
            @click="editOnlineData(scope.$index)"
          ></el-button>
          <el-button
            type="primary"
            icon="delete"
            @click="deleteOnlineData(scope.row.id, scope.$index)"
          ></el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        date: '',
        option: '',
      },
      onlineData: [
        {
          id: 1,
          zh: '公司维护中',
          cn: '公司维护中',
          en: '公司维护中',
          time: '2023-02-21',
        },
        {
          id: 2,
          zh: '公司维护中',
          cn: '公司维护中',
          en: '公司维护中',
          time: '2023-02-22',
        },
        {
          id: 3,
          zh: '公司维护中',
          cn: '公司维护中',
          en: '公司维护中',
          time: '2023-02-23',
        },
      ],
      options: [
        {
          value: '会员',
          label: '会员',
        },
        {
          value: '代理',
          label: '代理',
        },
        {
          value: '总代理',
          label: '总代理',
        },
        {
          value: '股东',
          label: '股东',
        },
        {
          value: '公司',
          label: '公司',
        },
      ],
    }
  },
  methods: {
    editOnlineData(id) {
      console.log(id)
    },
    deleteOnlineData(id) {
      console.log(id)
    },
  },
}
</script>
<style></style>
