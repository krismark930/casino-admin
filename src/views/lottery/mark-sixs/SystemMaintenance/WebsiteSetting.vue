<template>
  <el-row>
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>网站信息</th>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="网站名称:">
                <el-input value="皇冠现金网" />
              </el-form-item>
              <el-form-item label="网址:http://">
                <el-input value="www.hg.com" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>过关设置</th>
          <td>
            <el-form-item label="最高派彩">
              <el-input value="25000" />
            </el-form-item>
          </td>
        </tr>
        <tr>
          <th>农历生肖设置</th>
          <td>
            <el-form-item label="请选择与当前年份相应的生肖">
              <el-select
                v-model="select"
                placeholder="Select"
                style="width: 115px"
              >
                <el-option label="猴" value="0" />
                <el-option label="羊" value="1" />
                <el-option label="马" value="2" />
                <el-option label="蛇" value="3" />
                <el-option label="龙" value="4" />
                <el-option label="兔" value="5" />
                <el-option label="虎" value="6" />
                <el-option label="牛" value="7" />
                <el-option label="鼠" value="8" />
                <el-option label="猪" value="9" />
                <el-option label="狗" value="10" />
                <el-option label="鸡" value="11" />
              </el-select>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <th>B盘默认设置</th>
          <td>
            <div style="display: flex; flex-wrap: wrap; column-gap: 10px;">
              <el-form-item label="特码B升">
                <el-input value="-7"></el-input>
              </el-form-item>
              <el-form-item label="特码两面B盘升">
                <el-input value="0"></el-input>
              </el-form-item>
              <el-form-item label="特码波色B盘升">
                <el-input value="0"></el-input>
              </el-form-item>
              <el-form-item label="正码B升">
                <el-input value="0"></el-input>
              </el-form-item>
              <el-form-item label="正码两面B盘升">
                <el-input value="0"></el-input>
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>五行</th>
          <td>
            <el-form-item label="金">
              <el-input value="12,13,20,21,28,29,42,43"></el-input>
            </el-form-item>
            <el-form-item label="木">
              <el-input value="02,03,10,11,24,25,32,33,40,41"></el-input>
            </el-form-item>
            <el-form-item label="水">
              <el-input value="01,08,09,16,17,30,31,38,39,46,47"></el-input>
            </el-form-item>
            <el-form-item label="火">
              <el-input value="04,05,18,19,26,27,34,35,48,49"></el-input>
            </el-form-item>
            <el-form-item label="土">
              <el-input value="06,07,14,15,22,23,36,37,44,45"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <th>六合彩公告</th>
          <td>
            <el-input
              :rows="2"
              v-model="textarea"
              type="textarea"
              placeholder="欢迎光临[金沙]香港六合彩第92期:开奖时间为8月04日21:30开奖,本公司淤下午16:30开盘.如有改变.一切时间由香港马会提供为准! 请下注后认真检查确认下注成功。开奖后的注单一律为无效注单。"
            />
          </td>
        </tr>
        <tr>
          <th>系统维护</th>
          <td>
            <el-select
              v-model="sysmain"
              placeholder="开启网站"
              style="width: 115px"
            >
              <el-option label="开启网站" value="0" />
              <el-option label="关闭网站" value="1" />
            </el-select>
          </td>
        </tr>
        <tr>
          <th>系统维护公告</th>
          <td>
            <el-input
              :rows="2"
              v-model="systext"
              type="textarea"
              placeholder=" 无法显示网页 
                    您正在查找的页当前不可用。 
                    网站可能遇到支持问题，或者您需要 调整您的浏览器设置。 
                    请尝试以下操作:
                    单击  刷新按钮，或稍后重试。
                    如果您已经在地址栏中输入该网页的地址， 请确认其拼写正确。
                    要检查您的网络连接，请单击工具菜单，然后单击 Internet 选项。在连接选项卡上，单击设置。 设置必须与您的局域网 (LAN) 管理员或 Internet 服务供应商 (ISP) 提供的一致。 
                    查看您的 Internet 连接设置是否正确被检测。您可能设置让 Microsoft Windows 检查您的网站并自动发现网络连接设置(如果您的网络管理员已经启用此设置)。 
                    单击工具菜单，然后单击Internet 选项。 
                    在连接选项卡上，单击LAN 设置。 
                    选择自动检测设置，然后单击确定。 
                    某些站点要求 128-位的连接安全性。单击帮助菜单，然后单击关于 Internet Explorer 可以查看您所安装的安全强度。 
                    如果您要访问某安全站点，请确保您的安全设置能够支持。请单击工具菜单，然后单击 Internet 选项。在“高级”选项卡上，滚动到“安全”部分，复选 SSL 2.0、SSL 3.0、TLS 1.0、PCT 1.0 设置。 
                    单击上一步按钮，尝试其他链接。 
                    找不到服务器或 DNS 错误
                    Internet Explorer"
            />
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <el-button type="primary">重填</el-button>
            <el-button type="success">确认修改</el-button>
            <el-button type="warning">刷新</el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const select = ref('猴')
const textarea = ref('')
const systext = ref('')
const sysmain = ref('开启网站')
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-bg-color: #fdf4ca;
table {
  border: $table-border;
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 30px;
    th:first-child {
      width: 30%;
    }
  }
  th {
    background-color: $table-bg-color;
  }
  th,
  td {
    border: $table-border;
  }
}

.el-form-item {
  margin-bottom: 0;
}
</style>
