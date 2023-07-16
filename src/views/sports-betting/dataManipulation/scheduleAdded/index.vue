<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left;"
  >
    <h3>足球-赛事新增</h3>
    <el-form
      label-width="100px"
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      :size="formSize"
      style="width: 600px; display: inline-block;"
    >
      <el-form-item label="MID" prop="mid">
        <el-input
          v-model="formData.mid"
          placeholder="MID是针对赛事的标志，请把相对应的MID填写正确"
          clearable
        />
      </el-form-item>
      <el-form-item label="日期时间" prop="dateTime">
        <el-date-picker
          v-model="formData.dateTime"
          placeholder="选择日期和时间"
          type="datetime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="开赛时间" prop="startDateTime">
        <el-date-picker
          v-model="formData.startDateTime"
          placeholder="选择日期和时间"
          type="datetime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="简体队名" required>
        <el-row>
          <el-col>
            <el-form-item prop="simplifiedTeamName.alliance" class="teamname">
              <el-input
                v-model="formData.simplifiedTeamName.alliance"
                placeholder="联盟"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item prop="simplifiedTeamName.homeTeam" class="teamname">
              <el-input
                v-model="formData.simplifiedTeamName.homeTeam"
                placeholder="主队"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              prop="simplifiedTeamName.visitingTeam"
              class="teamname"
            >
              <el-input
                v-model="formData.simplifiedTeamName.visitingTeam"
                placeholder="客队"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="繁体队名" required>
        <el-row>
          <el-col>
            <el-form-item prop="traditionalTeamName.alliance" class="teamname">
              <el-input
                v-model="formData.traditionalTeamName.alliance"
                placeholder="联盟"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item prop="traditionalTeamName.homeTeam" class="teamname">
              <el-input
                v-model="formData.traditionalTeamName.homeTeam"
                placeholder="主队"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              prop="traditionalTeamName.visitingTeam"
              class="teamname"
            >
              <el-input
                v-model="formData.traditionalTeamName.visitingTeam"
                placeholder="客队"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="英文队名" required>
        <el-row>
          <el-col>
            <el-form-item prop="englishTeamName.alliance" class="teamname">
              <el-input
                v-model="formData.englishTeamName.alliance"
                placeholder="联盟"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item prop="englishTeamName.homeTeam" class="teamname">
              <el-input
                v-model="formData.englishTeamName.homeTeam"
                placeholder="主队"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item prop="englishTeamName.visitingTeam" class="teamname">
              <el-input
                v-model="formData.englishTeamName.visitingTeam"
                placeholder="客队"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item style="display: inline-flex;">
        <el-button type="primary" @click="addItem">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import { ref } from 'vue'
import { AddItem } from '@/api/sports/data-manipulation/schedule-added'

export default {
  props: ['gtype'],
  data() {
    const ruleFormRef = ref()
    const formSize = ref('default')
    return {
      formData: {
        mid: '',
        dateTime: new Date(),
        startDateTime: new Date(),
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
      rules: {
        mid: [
          {
            required: true,
            message: '请输入相对应赛事的MID',
            trigger: 'blur',
          },
        ],
        dateTime: [
          {
            type: 'date',
            required: true,
            message: '请输入相对应赛事的日期, 请输入相对应赛事的时间',
            trigger: 'change',
          },
        ],
        startDateTime: [
          {
            type: 'date',
            required: true,
            message: '请输入相对应赛事的开赛时间',
            trigger: 'change',
          },
        ],
        'simplifiedTeamName.alliance': [
          {
            required: true,
            message: '请输入简体 联盟',
            trigger: 'blur',
          },
        ],
        'simplifiedTeamName.homeTeam': [
          {
            required: true,
            message: '请输入简体 主队名',
            trigger: 'blur',
          },
        ],
        'simplifiedTeamName.visitingTeam': [
          {
            required: true,
            message: '请输入简体 客队名',
            trigger: 'blur',
          },
        ],
        'traditionalTeamName.alliance': [
          {
            required: true,
            message: '请输入繁体 联盟',
            trigger: 'blur',
          },
        ],
        'traditionalTeamName.homeTeam': [
          {
            required: true,
            message: '请输入繁体 主队名',
            trigger: 'blur',
          },
        ],
        'traditionalTeamName.visitingTeam': [
          {
            required: true,
            message: '请输入繁体 客队名',
            trigger: 'blur',
          },
        ],
        'englishTeamName.alliance': [
          {
            required: true,
            message: '请输入英文 联盟',
            trigger: 'blur',
          },
        ],
        'englishTeamName.homeTeam': [
          {
            required: true,
            message: '请输入英文 主队名',
            trigger: 'blur',
          },
        ],
        'englishTeamName.visitingTeam': [
          {
            required: true,
            message: '请输入英文 客队名',
            trigger: 'blur',
          },
        ],
      },
      ruleFormRef,
      formSize,
    }
  },
  methods: {
    testfunc() {
      console.log(this.formData.simplifiedTeamName)
    },
    async addItem() {
      if (!this.$refs.ruleFormRef) return
      await this.$refs.ruleFormRef.validate(valid => {
        if (valid) {
          const dt = new Date(this.formData.dateTime)
          const datetime = dt.toISOString().split('T')
          const startDatetime = new Date(this.formData.startDateTime)
            .toISOString()
            .split('T')
          if (
            confirm(
              '赛事 MID：' +
                this.formData.mid +
                '\n\n赛事 日期：' +
                datetime[0] +
                '\n\n赛事 时间：' +
                datetime[1].slice(0, 5) +
                '\n\n赛事 开赛时间：' +
                startDatetime[0] +
                ' ' +
                startDatetime[1].slice(0, 8) +
                '\n\n简体 联盟：' +
                this.formData.simplifiedTeamName.alliance +
                '\n\n简体 主队名：' +
                this.formData.simplifiedTeamName.homeTeam +
                '\n\n简体 主队名：' +
                this.formData.simplifiedTeamName.visitingTeam +
                '\n\n请确定输入是否正确?'
            )
          ) {
            const hour = dt.getHours()
            const minutes = dt.getMinutes()
            let time = ''
            if (hour >= 12) time = hour - 12 + ':' + minutes + 'p'
            else time = hour + ':' + minutes + 'a'
            AddItem({
              gtype: this.gtype,
              mid: this.formData.mid,
              date: datetime[0],
              time,
              start: startDatetime[0] + ' ' + startDatetime[1].slice(0, 8),
              m_league: this.formData.simplifiedTeamName.alliance,
              mb_team: this.formData.simplifiedTeamName.homeTeam,
              tg_team: this.formData.simplifiedTeamName.visitingTeam,
              m_league_tw: this.formData.traditionalTeamName.alliance,
              mb_team_tw: this.formData.traditionalTeamName.homeTeam,
              tg_team_tw: this.formData.traditionalTeamName.visitingTeam,
              m_league_en: this.formData.englishTeamName.alliance,
              mb_team_en: this.formData.englishTeamName.homeTeam,
              tg_team_en: this.formData.englishTeamName.visitingTeam,
            })
              .then(res => {})
              .catch(err => {
                console.error('add item error', err)
              })
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.teamname {
  margin-bottom: 20px;
}
</style>
