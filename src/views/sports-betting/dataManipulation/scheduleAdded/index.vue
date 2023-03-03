<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>足球-赛事新增</h3>
    <el-form
      label-width="100px"
      :model="formData"
      style="width: 600px; display: inline-block;"
    >
      <el-form-item label="MID">
        <el-input
          v-model="formData.mid"
          placeholder="MID是针对赛事的标志，请把相对应的MID填写正确"
          clearable
        />
      </el-form-item>
      <el-form-item label="日期时间">
        <el-date-picker
          v-model="formData.datetime"
          placeholder="选择日期和时间"
          type="datetime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="开赛时间">
        <el-date-picker
          v-model="formData.startDateTime"
          placeholder="选择日期和时间"
          type="datetime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="简体队名">
        <el-input
          v-model="formData.simplifiedTeamName.alliance"
          placeholder="联盟"
          clearable
        />
        <el-input
          v-model="formData.simplifiedTeamName.homeTeam"
          placeholder="主队"
          clearable
        />
        <el-input
          v-model="formData.simplifiedTeamName.visitingTeam"
          placeholder="客队"
          clearable
        />
      </el-form-item>
      <el-form-item label="繁体队名">
        <el-input
          v-model="formData.traditionalTeamName.alliance"
          placeholder="联盟"
          clearable
        />
        <el-input
          v-model="formData.traditionalTeamName.homeTeam"
          placeholder="主队"
          clearable
        />
        <el-input
          v-model="formData.traditionalTeamName.visitingTeam"
          placeholder="客队"
          clearable
        />
      </el-form-item>
      <el-form-item label="英文队名">
        <el-input
          v-model="formData.englishTeamName.alliance"
          placeholder="联盟"
          clearable
        />
        <el-input
          v-model="formData.englishTeamName.homeTeam"
          placeholder="主队"
          clearable
        />
        <el-input
          v-model="formData.englishTeamName.visitingTeam"
          placeholder="客队"
          clearable
        />
      </el-form-item>
      <el-form-item style="display: inline-flex;">
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        mid: '',
        dateTime: '',
        startDateTime: '',
        simplifiedTeamName: {
          alliance: '',
          homeTeam: '',
          visitingTeam: '',
        },
        traditionalTeamName: {
          alliance: '',
          homeTeam: '',
          visitingTeam: '',
        },
        englishTeamName: {
          alliance: '',
          homeTeam: '',
          visitingTeam: '',
        },
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
