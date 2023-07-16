<template>
    <el-card shadow="never">
        <el-row style="margin-bottom: 1.5rem; font-size: 20px;">
            <el-col>
                <h4>代理商管理</h4>
            </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up" style="margin-bottom: 1rem;">
            <el-col>
                <el-descriptions border :column="1">
                    <el-descriptions-item label="新增日期:">
                        <el-tag size="small" type="success">
                            新增帐号未满一个月
                        </el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="帐号状况:">
                        <el-tag size="small" type="danger">停用</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
        <el-row justify="space-between">
            <el-col :lg="16" :xs="24" style="display: flex">
                <el-form>
                    <el-form-item label="选择管理:">
                        <el-select placeholder="全部" v-model="formData.parents_id" @change="getCompnayByFilter">
                            <el-option v-for="(item, index) in parentsList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <el-select placeholder="升冥(由小到大)" v-model="formData.orderby" @change="getCompnayByFilter">
                            <el-option label="升冥(由小到大)" value="ASC" />
                            <el-option label="降冥(由大到小)" value="DESC" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="方式:">
                        <el-select placeholder="新增日期" v-model="formData.sort" @change="getCompnayByFilter">
                            <el-option label="代理商帐号" value="UserName" />
                            <el-option label="代理商名称" value="Alias" />
                            <el-option label="新增日期" value="AddDate" />
                        </el-select>
                        <el-select placeholder="全部" v-model="formData.enable" @change="getCompnayByFilter">
                            <el-option label="全部" value="ALL" />
                            <el-option label="启用" value="Y" />
                            <el-option label="冻结" value="S" />
                            <el-option label="停用" value="N" />
                            <el-option label="有投注" value="T" />
                            <el-option label="今日充值" value="C" />
                        </el-select>
                    </el-form-item>
                </el-form>
                    <el-form-item style="margin-left: 20px">
                        <el-button type="danger" @click="searchDialogShow">快速查找</el-button>
                        <el-button type="primary" @click="addCompanyDialogShow">新增</el-button>
                    </el-form-item>
            </el-col>
            <el-col :lg="8" class="hidden-md-and-down">
                <el-descriptions border :column="1">
                    <el-descriptions-item label="新增日期:">
                        <el-tag size="small" type="success">
                            新增帐号未满一个月
                        </el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="帐号状况:">
                        <el-tag size="small" type="danger">停用</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
        <el-table :data="companyList" v-loading="loading" border header-align="center" stripe>
            <el-table-column prop="World" label="管理 帐号" width="180" />
            <el-table-column prop="LoginName" label="登陆帐号" width="125">
                <template #default="scope">
                    {{scope.row.LoginName}}<br>
                    {{scope.row.Alias}}
                </template>
            </el-table-column>
            <el-table-column prop="UserName" label="代理商 帐号" width="140">
                <template #default="scope">
                    <div>{{scope.row.UserName}}</div>
                    <div style="background-color: yellow;" v-if="web == 'web_system_data'">{{scope.row.password}}</div>
                </template>
            </el-table-column>
            <el-table-column prop="Money" label="可用額度" width="150" />
            <el-table-column prop="Credit" label="信用额度" width="120" />
            <el-table-column prop="Count" label="下级总计" width="150" />
            <el-table-column prop="AddDate" label="新增日期" width="200" />
            <el-table-column prop="Status" label="帐号状况" width="130">
                <template #default="scope">
                    <span v-if="scope.row.Status == 0">启用</span>
                    <span style="background-color: yellow" v-else-if="scope.row.Status == 1">冻结</span>
                    <span style="background-color: red" v-else-if="scope.row.Status==2">停用</span>
                </template>
            </el-table-column>
            <el-table-column prop="EditType" label="改单" width="120">
                <template #default="scope">
                    <el-button type="primary" v-if="scope.row.EditType == 0" @click="handleEditType(scope.row.ID, scope.row.UserName, 'Y')">否</el-button>
                    <el-button type="danger" v-else @click="handleEditType(scope.row.ID, scope.row.UserName, 'N')">是</el-button>
                </template>
            </el-table-column>
            <el-table-column label="功能">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="editCompany(scope.row)">
                        修改
                    </el-button>
                    <br />
                    <el-button link type="info" size="small" @click="detailCompany(scope.row)">
                        详细设定
                    </el-button>
                    <br />
                    <el-button link type="warning" size="small" v-if="scope.row.Status == 0" @click="handleEditType(scope.row.ID, scope.row.UserName, 'disable')">
                        停用
                    </el-button>
                    <el-button link type="warning" size="small" v-else @click="handleEditType(scope.row.ID, scope.row.UserName, 'enable')">
                        启用
                    </el-button>
                    <br />
                    <el-button link type="success" size="small" :disabled="scope.row.Status == 1 || scope.row.Status == 2" @click="handleEditType(scope.row.ID, scope.row.UserName, 'suspend')">
                        冻结
                    </el-button>
                    <br />
                    <el-button link type="danger" size="small" @click="handleMoneyAgency(scope.row)">额度管理</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange"
                :page-size="pageSize" v-model:current-page="formData.page_no" />
        </div>
        <el-dialog v-model="editMoneyDialogVisible">
          <h2>代理商额度修改</h2>
          <el-form-item label="代理 帳號 :">
            {{ editMoneyAgencyData.agent }}
          </el-form-item>
          <el-form-item label="會員 名稱 :">
            {{ editMoneyAgencyData.Alias }}
          </el-form-item>
          <el-form-item label="現金額度 :">
            <el-input v-model="editMoneyAgencyData.Money"/>
          </el-form-item>
          <el-footer style="text-align: center;">
              <el-button type="primary" @click="updateMoneyAgency">確定</el-button>
              <el-button type="danger" @click="editMoneyDialogVisible == false">取消</el-button>
          </el-footer>
        </el-dialog>
        <el-dialog v-model="newCompanyDialogVisible">
            <el-form-item label="總代理管理 --新增 ,修改">
                <el-select v-model="newCompanyData.parents_id">
                    <el-option v-for="(item, index) in addParentsList" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <h2>基本資料設定</h2>
            <el-form label-width="150">
                <el-form-item :label="`代理商 帳號 : ${newCompanyData.UserName}`">
                    <el-select v-model="newCompanyData.num_1" style="width: 100px" @change="handleChangeNumber">
                        <el-option v-for="(item, index) in numberOptions" :key="index" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                    <el-select style="width: 100px" v-model="newCompanyData.num_2"  @change="handleChangeNumber">
                        <el-option v-for="(item, index) in numberOptions" :key="index" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                    <el-select style="width: 100px" v-model="newCompanyData.num_3"  @change="handleChangeNumber">
                        <el-option v-for="(item, index) in numberOptions" :key="index" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                    ◎帳號規則：請輸入四位數字０～９
                    <el-button type="primary">檢查帳號</el-button>
                </el-form-item>
                <el-form-item label="密碼 : ">
                    <el-input type="password" style="width: 200px" v-model="newCompanyData.PassWord" maxlength="12"></el-input>
                    ◎密碼規則：須為6~12碼英數字夾雜且符合0~9及a~z字。
                </el-form-item>
                <el-form-item label="確認密碼 :">
                    <el-input type="password" v-model="newCompanyData.confirmPassword" style="width: 200px;" maxlength="12"></el-input>
                </el-form-item>
                <el-form-item label="代理商 名稱 :">
                    <el-input v-model="newCompanyData.Alias"></el-input>
                </el-form-item>
            </el-form>
            <h2>下注資料設定</h2>
            <el-form label-width="150">
                <el-form-item label="總信任額度 :">
                    <el-input style="width: 200px" v-model="newCompanyData.maxcredit"></el-input>
                    使用狀況 / 啟用 : {{credit2}} 停用 : {{credit3}} 可用 : {{credit1 - credit2 - credit3}}
                </el-form-item>
                <el-form-item label="即時注單 :">
                    <el-select  v-model="newCompanyData.wager">
                        <el-option v-for="(item, index) in wagerOptions" :key="index" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="總代理 佔成數 :">
                    <el-input style="width: 200px;" v-model="newCompanyData.winloss_c"></el-input>
                </el-form-item>
                <el-form-item label="代理商 佔成數 :">
                    <el-input style="width: 200px;" v-model="newCompanyData.winloss_d"></el-input>
                </el-form-item>
            </el-form>
            <el-footer style="text-align: center">
                <el-button type="primary" @click="addCompany">確定</el-button>
                <el-button type="danger" @click="cancelNewCompany">取消</el-button>
            </el-footer>
        </el-dialog>
        <el-dialog v-model="editCompanyDialogVisible">
            <h2>基本資料設定</h2>
            <el-form label-width="150">
                <el-form-item label="代理商 帳號 :">
                    {{editCompanyData.name}}
                </el-form-item>
                <el-form-item label="密碼: ">
                    <el-input type="password" style="width: 200px" v-model="editCompanyData.password" maxlength="12"></el-input>
                    ◎密碼規則：須為6~12碼英數字夾雜且符合0~9及a~z字。
                </el-form-item>
                <el-form-item label="確認密碼 :">
                    <el-input type="password" v-model="editCompanyData.passwd" style="width: 200px;" maxlength="12"></el-input>
                </el-form-item>
                <el-form-item label="代理商 名稱 :">
                    <el-input v-model="editCompanyData.alias"></el-input>
                </el-form-item>
                <el-form-item label="代理商 联系电话:">
                {{editCompanyData.Phone}}
                </el-form-item>
                <el-form-item label="代理商 开户行 :">
                {{editCompanyData.Bank_Address}}
                </el-form-item>
                <el-form-item label="代理商 银行账号 :">
                {{editCompanyData.Bank_Account}}
                </el-form-item>
            </el-form>
            <el-footer style="text-align: center">
                <el-button type="primary" @click="updateCompany">確定</el-button>
                <el-button type="danger" @click="editCompanyDialogVisible = false">取消</el-button>
            </el-footer>
        </el-dialog>
        <el-dialog v-model="detailCompanyDialogVisible" width="90%">
            <div style="display: flex;">
                代理商 -- 詳細設定&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帳號:{{detailCompanyData.name}} -- 名稱:{{detailCompanyData.Alias}} 
            </div>
            <table border="0" cellpadding="0" cellspacing="1" class="m_tab_ed">
                <tr class="m_title_edit" >
                    <td width="100">足球</td>
                    <td width="100">A</td>
                    <td width="100">B</td>
                    <td width="100">C</td>
                    <td width="100">D</td>
                    <td width="100">大賠率</td>
                    <td width="100">單場限額</td>
                    <td width="100">單注限額</td>
                </tr>
                <tr class="m_cen">
                    <td align="center">快速<br>選單</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_LINE_1">
                            <el-option v-for="(item, index) in ft_line_1_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_LINE_2">
                            <el-option v-for="(item, index) in ft_line_2_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_LINE_3">
                            <el-option v-for="(item, index) in ft_line_3_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_LINE_4">
                            <el-option v-for="(item, index) in ft_line_4_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_LINE_BIG">
                            <el-option v-for="(item, index) in ft_line_big_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-input type="text" v-model="detailCompanyData.FT_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input type="text" v-model="detailCompanyData.FT_SO" maxlength="8"/>
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="1" class="m_tab_ed">
                <tr class="m_title_edit" >
                  <td width="100">足球</td>
                  <td width="100">讓球</td>
                  <td width="100">大小</td>
                  <td width="100">滾球讓球</td>
                  <td width="100">滾球大小</td>
                  <td width="100">單雙</td>
                  <td width="100">独赢</td>
                  <td width="100">滾球独赢</td>
                  <td width="100">波膽</td>
                  <td width="100">總入球</td>
                  <td width="100">半全場</td>
                  <td width="100">标准過關</td>
                  <td width="100">让球過關</td>
                  <td width="100">混合過關</td>
                </tr>
                <tr class="m_cen">
                  <td align="right" class="m_ag_ed">A</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_R_A">
                            <el-option v-for="(item, index) in FT_Turn_R_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_OU_A">
                            <el-option v-for="(item, index) in FT_Turn_OU_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_RE_A">
                            <el-option v-for="(item, index) in FT_Turn_RE_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_ROU_A">
                            <el-option v-for="(item, index) in FT_Turn_ROU_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_EO_A">
                            <el-option v-for="(item, index) in FT_Turn_EO_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_M">
                            <el-option v-for="(item, index) in FT_Turn_M_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_RM">
                            <el-option v-for="(item, index) in FT_Turn_RM_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_PD">
                            <el-option v-for="(item, index) in FT_Turn_PD_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_T">
                            <el-option v-for="(item, index) in FT_Turn_T_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_F">
                            <el-option v-for="(item, index) in FT_Turn_F_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_P">
                            <el-option v-for="(item, index) in FT_Turn_P_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_PR">
                            <el-option v-for="(item, index) in FT_Turn_PR_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FT_Turn_P3">
                            <el-option v-for="(item, index) in FT_Turn_P3_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr class="m_cen" >
                   <td align="right" class="m_ag_ed">B</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_R_B">
                            <el-option v-for="(item, index) in FT_Turn_R_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_OU_B">
                            <el-option v-for="(item, index) in FT_Turn_OU_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_RE_B">
                            <el-option v-for="(item, index) in FT_Turn_RE_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_ROU_B">
                            <el-option v-for="(item, index) in FT_Turn_ROU_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_EO_B">
                            <el-option v-for="(item, index) in FT_Turn_EO_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">C</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_R_C">
                            <el-option v-for="(item, index) in FT_Turn_R_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_OU_C">
                            <el-option v-for="(item, index) in FT_Turn_OU_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_RE_C">
                            <el-option v-for="(item, index) in FT_Turn_RE_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_ROU_C">
                            <el-option v-for="(item, index) in FT_Turn_ROU_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_EO_C">
                            <el-option v-for="(item, index) in FT_Turn_EO_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">D</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_R_D">
                            <el-option v-for="(item, index) in FT_Turn_R_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_OU_D">
                            <el-option v-for="(item, index) in FT_Turn_OU_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_RE_D">
                            <el-option v-for="(item, index) in FT_Turn_RE_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td> 
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_ROU_D">
                            <el-option v-for="(item, index) in FT_Turn_ROU_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td> 
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_EO_D">
                            <el-option v-for="(item, index) in FT_Turn_EO_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td> 
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">單場限額</td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_R_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_OU_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_RE_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_ROU_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_EO_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_M_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_RM_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_PD_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_T_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_F_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_P_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_PR_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_P3_SC" maxlength="8"/>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">單注限額</td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_R_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_OU_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_RE_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_ROU_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_EO_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_M_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_RM_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_PD_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_T_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_F_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_P_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_PR_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FT_P3_SO" maxlength="8"/>
                    </td>   
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">&nbsp;</td>
                    <td colspan="13">
                        <el-button type="primary" @click="updateDetailCompany('FT')">確定</el-button>
                    </td> 
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="1" class="m_tab_ed">
                <tr class="m_title_edit" >
                    <td width="100">篮球</td>
                    <td width="100">A</td>
                    <td width="100">B</td>
                    <td width="100">C</td>
                    <td width="100">D</td>
                    <td width="100">大賠率</td>
                    <td width="100">單場限額</td>
                    <td width="100">單注限額</td>
                </tr>
                <tr class="m_cen">
                    <td align="center">快速<br>選單</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_LINE_1">
                            <el-option v-for="(item, index) in bk_line_1_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_LINE_2">
                            <el-option v-for="(item, index) in bk_line_2_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_LINE_3">
                            <el-option v-for="(item, index) in bk_line_3_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_LINE_4">
                            <el-option v-for="(item, index) in bk_line_4_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_LINE_BIG">
                            <el-option v-for="(item, index) in bk_line_big_options" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-input type="text" v-model="detailCompanyData.BK_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input type="text" v-model="detailCompanyData.BK_SO" maxlength="8"/>
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="1" class="m_tab_ed"> 
                <tr class="m_title_edit" >
                  <td width="100">篮球</td>
                  <td width="100">讓球</td>
                  <td width="100">大小</td>
                  <td width="100">滾球讓球</td>
                  <td width="100">滾球大小</td>
                  <td width="100">單雙</td>
                  <td width="100">讓球過關</td>
                  <td width="100">混合過關</td>
                  <td width="100">冠军</td>
                </tr>
                <tr class="m_cen">
                  <td align="right" class="m_ag_ed">A</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_R_A">
                            <el-option v-for="(item, index) in BK_Turn_R_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_OU_A">
                            <el-option v-for="(item, index) in BK_Turn_OU_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_RE_A">
                            <el-option v-for="(item, index) in BK_Turn_RE_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_ROU_A">
                            <el-option v-for="(item, index) in BK_Turn_ROU_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_EO_A">
                            <el-option v-for="(item, index) in BK_Turn_EO_A_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.BK_Turn_PR">
                            <el-option v-for="(item, index) in BK_Turn_PR_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.BK_Turn_P3">
                            <el-option v-for="(item, index) in BK_Turn_P3_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td rowspan="4">
                        <el-select v-model="detailCompanyData.FS_Turn_FS">
                            <el-option v-for="(item, index) in FS_Turn_FS_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr class="m_cen" >
                   <td align="right" class="m_ag_ed">B</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_R_B">
                            <el-option v-for="(item, index) in BK_Turn_R_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_OU_B">
                            <el-option v-for="(item, index) in BK_Turn_OU_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_RE_B">
                            <el-option v-for="(item, index) in BK_Turn_RE_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_ROU_B">
                            <el-option v-for="(item, index) in BK_Turn_ROU_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_EO_B">
                            <el-option v-for="(item, index) in BK_Turn_EO_B_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">C</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_R_C">
                            <el-option v-for="(item, index) in BK_Turn_R_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_OU_C">
                            <el-option v-for="(item, index) in BK_Turn_OU_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_RE_C">
                            <el-option v-for="(item, index) in BK_Turn_RE_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_ROU_C">
                            <el-option v-for="(item, index) in BK_Turn_ROU_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_EO_C">
                            <el-option v-for="(item, index) in BK_Turn_EO_C_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">D</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_R_D">
                            <el-option v-for="(item, index) in BK_Turn_R_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_OU_D">
                            <el-option v-for="(item, index) in BK_Turn_OU_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_RE_D">
                            <el-option v-for="(item, index) in BK_Turn_RE_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td> 
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_ROU_D">
                            <el-option v-for="(item, index) in BK_Turn_ROU_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td> 
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_EO_D">
                            <el-option v-for="(item, index) in BK_Turn_EO_D_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td> 
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">單場限額</td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_R_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_OU_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_RE_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_ROU_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_EO_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_PR_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_P3_SC" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FS_FS_SC" maxlength="8"/>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">單注限額</td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_R_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_OU_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_RE_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_ROU_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_EO_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_PR_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.BK_P3_SO" maxlength="8"/>
                    </td>
                    <td>
                        <el-input v-model="detailCompanyData.FS_FS_SO" maxlength="8"/>
                    </td>
                </tr>
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">&nbsp;</td>
                    <td colspan="13">
                        <el-button type="primary" @click="updateDetailCompany('BK')">確定</el-button>
                    </td> 
                </tr>
            </table>
        </el-dialog>
        <el-dialog v-model="searchDialogVisible" width="30%" title="快速查找">
            <el-form label-width="150">
                <el-form-item label="查询条件">
                    <el-select v-model="formData.search_type">
                        <el-option v-for="(item, index) in searchOptions" :key="index" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="关键字">
                    <el-input v-model="formData.search"/>
                </el-form-item>
            </el-form>
            <el-footer>
                <el-button type="primary" @click="getDataByFilter">查询</el-button>
            </el-footer>
        </el-dialog>
    </el-card>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElNotification, ElLoading,ElMessageBox } from "element-plus";
import {storeToRefs} from "pinia";
import 'element-plus/theme-chalk/display.css'
import { companyStore } from "@/pinia/modules/company";
const { dispatchCompanyData } = companyStore();
const { dispatchCompanyInfoData } = companyStore();
const { dispatchAddCompanyData } = companyStore();
const { dispatchUpdateCompanyData } = companyStore();
const { dispatchUpdateDetailCompany } = companyStore();
const { dispatchUpdateMoneyAgency } = companyStore();
const pageSize = ref(20)
const loading = ref(false);
const formData = ref({
    lv: "D",
    parents_id: "",
    page_no: 1,
    orderby: "DESC",
    sort: "",
    enable: "",
    active: "",
    active_id: "",
    name: "",
    search: "",
    search_type: "USERNAME",
})
const newCompanyDialogVisible = ref(false);
const editCompanyDialogVisible = ref(false);
const detailCompanyDialogVisible = ref(false);
const editMoneyDialogVisible = ref(false);
const searchDialogVisible = ref(false);
const searchOptions = ref([
    {
        label: "会员账号",
        value: "USERNAME"
    },
    {
        label: "会员姓名",
        value: "ALIAS"
    },
    {
        label: "机器码",
        value: "MachineCode"
    },
    {
        label: "新增日期",
        value: "NEW_DATE"
    },
])
const searchDialogShow = () => {
    searchDialogVisible.value = true;
}
const getDataByFilter = async () => {    
    searchDialogVisible.value = false;
    loading.value = true;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);
    loading.value = false;
}
const numberOptions = [
    {
        label: "0",
        value: "0"
    },
    {
        label: "1",
        value: "1"
    },
    {
        label: "2",
        value: "2",
    },
    {
        label: "3",
        value: "3",
    },
    {
        label: "4",
        value: "4",
    },
    {
        label: "5",
        value: "5",
    },
    {
        label: "6",
        value: "6",
    },
    {
        label: "7",
        value: "7",
    },
    {
        label: "8",
        value: "8",
    },
    {
        label: "9",
        value: "9",
    }
]
const wagerOptions = [
    {
        label: "啟用",
        value: 1
    },
    {
        label: "停用",
        value: 0
    }
]
const newCompanyData = ref({
    lv: "D",
    num_1: 0,
    num_2: 0,
    num_3: 0,
    UserName: "ddm",
    PassWord: "",
    confirmPassword: "",
    Alias: "",
    wager: 0,
    maxcredit: "0",
    winloss_c: 0,
    winloss_d: 0,
    parents_id: ""
})
const editCompanyData = ref({
    lv: "D",    
    parents_id: "",
    admin: "",
    id: "",
    name: "",
    password: "",
    passwd: "",
    alias: "",
    Phone: "",
    Bank_Address: "",
    Bank_Account: "",
    super: "",
    corprator: "",
    world: ""
});
const detailCompanyData = ref({
    lv: "D",
    admin: "",
    parents_id: "",
    name: "",
    gtype: "",
    id: "",
    FT_LINE_1: "",
    FT_LINE_2: "",
    FT_LINE_3: "",
    FT_LINE_4: "",
    FT_LINE_BIG: "",
    FT_SC: "",
    FT_SO: "",
    FT_Turn_R_A: "",
    FT_Turn_OU_A: "",
    FT_Turn_RE_A: "",
    FT_Turn_ROU_A: "",
    FT_Turn_EO_A: "",
    FT_Turn_M: "",
    FT_Turn_RM: "",
    FT_Turn_PD: "",
    FT_Turn_T: "",
    FT_Turn_F: "",
    FT_Turn_P: "",
    FT_Turn_PR: "",
    FT_Turn_P3: "",
    FT_Turn_R_B: "",
    FT_Turn_OU_B: "",
    FT_Turn_RE_B: "",
    FT_Turn_ROU_B: "",
    FT_Turn_EO_B: "",
    FT_Turn_R_C: "",
    FT_Turn_OU_C: "",
    FT_Turn_RE_C: "",
    FT_Turn_ROU_C: "",
    FT_Turn_EO_C: "",
    FT_Turn_R_D: "",
    FT_Turn_OU_D: "",
    FT_Turn_RE_D: "",
    FT_Turn_ROU_D: "",
    FT_Turn_EO_D: "",
    FT_R_SC: "",
    FT_OU_SC: "",
    FT_RE_SC: "",
    FT_ROU_SC: "",
    FT_EO_SC: "",
    FT_M_SC: "",
    FT_RM_SC: "",
    FT_PD_SC: "",
    FT_T_SC: "",
    FT_F_SC: "",
    FT_P_SC: "",
    FT_PR_SC: "",
    FT_P3_SC: "",
    FT_R_SO: "",
    FT_OU_SO: "",
    FT_RE_SO: "",
    FT_ROU_SO: "",
    FT_EO_SO: "",
    FT_M_SO: "",
    FT_RM_SO: "",
    FT_PD_SO: "",
    FT_T_SO: "",
    FT_F_SO: "",
    FT_P_SO: "",
    FT_PR_SO: "",
    FT_P3_SO: "",
    FT_R_TC: 0,
    FT_OU_TC: 0,
    FT_RE_TC: 0,
    FT_ROU_TC: 0,
    FT_EO_TC: 0,
    FT_M_TC: 0,
    FT_RM_TC: 0,
    FT_PD_TC: 0,
    FT_T_TC: 0,
    FT_F_TC: 0,
    FT_P_TC: 0,
    FT_PR_TC: 0,
    FT_P3_TC: 0,


    BK_LINE_1: "",
    BK_LINE_2: "",
    BK_LINE_3: "",
    BK_LINE_4: "",
    BK_LINE_BIG: "",
    BK_SC: "",
    BK_SO: "",
    BK_Turn_R_A: "",
    BK_Turn_OU_A: "",
    BK_Turn_RE_A: "",
    BK_Turn_ROU_A: "",
    BK_Turn_EO_A: "",
    BK_Turn_PR: "",
    BK_Turn_P3: "",
    FS_Turn_FS: "",
    BK_Turn_R_B: "",
    BK_Turn_OU_B: "",
    BK_Turn_RE_B: "",
    BK_Turn_ROU_B: "",
    BK_Turn_EO_B: "",
    BK_Turn_R_C: "",
    BK_Turn_OU_C: "",
    BK_Turn_RE_C: "",
    BK_Turn_ROU_C: "",
    BK_Turn_EO_C: "",
    BK_Turn_R_D: "",
    BK_Turn_OU_D: "",
    BK_Turn_RE_D: "",
    BK_Turn_ROU_D: "",
    BK_Turn_EO_D: "",
    BK_R_SC: "",
    BK_OU_SC: "",
    BK_RE_SC: "",
    BK_ROU_SC: "",
    BK_EO_SC: "",
    BK_PR_SC: "",
    BK_P3_SC: "",
    FS_FS_SC: "",
    BK_R_SO: "",
    BK_OU_SO: "",
    BK_RE_SO: "",
    BK_ROU_SO: "",
    BK_EO_SO: "",
    BK_PR_SO: "",
    BK_P3_SO: "",
    FS_FS_SO: "",
    BK_R_TC: 0,
    BK_OU_TC: 0,
    BK_RE_TC: 0,
    BK_ROU_TC: 0,
    BK_EO_TC: 0,
    BK_PR_TC: 0,
    BK_P3_TC: 0,
    FS_FS_TC: 0,
})
const ft_line_1_options = ref([]);
const ft_line_2_options = ref([]);
const ft_line_3_options = ref([]);
const ft_line_4_options = ref([]);
const ft_line_big_options = ref([]);

const bk_line_1_options = ref([]);
const bk_line_2_options = ref([]);
const bk_line_3_options = ref([]);
const bk_line_4_options = ref([]);
const bk_line_big_options = ref([]);

const FT_Turn_R_A_OPTIONS = ref([]);
const FT_Turn_OU_A_OPTIONS = ref([]);
const FT_Turn_RE_A_OPTIONS = ref([]);
const FT_Turn_ROU_A_OPTIONS = ref([]);
const FT_Turn_EO_A_OPTIONS = ref([]);

const FT_Turn_M_OPTIONS = ref([]);
const FT_Turn_RM_OPTIONS = ref([]);
const FT_Turn_PD_OPTIONS = ref([]);
const FT_Turn_T_OPTIONS = ref([]);
const FT_Turn_F_OPTIONS = ref([]);
const FT_Turn_P_OPTIONS = ref([]);
const FT_Turn_PR_OPTIONS = ref([]);
const FT_Turn_P3_OPTIONS = ref([]);
const FT_Turn_R_B_OPTIONS = ref([]);
const FT_Turn_OU_B_OPTIONS = ref([]);
const FT_Turn_RE_B_OPTIONS = ref([]);
const FT_Turn_ROU_B_OPTIONS = ref([]);
const FT_Turn_EO_B_OPTIONS = ref([]);
const FT_Turn_R_C_OPTIONS = ref([]);
const FT_Turn_OU_C_OPTIONS = ref([]);
const FT_Turn_RE_C_OPTIONS = ref([]);
const FT_Turn_ROU_C_OPTIONS = ref([]);
const FT_Turn_EO_C_OPTIONS = ref([]);
const FT_Turn_R_D_OPTIONS = ref([]);
const FT_Turn_OU_D_OPTIONS = ref([]);
const FT_Turn_RE_D_OPTIONS = ref([]);
const FT_Turn_ROU_D_OPTIONS = ref([]);
const FT_Turn_EO_D_OPTIONS = ref([]);



const BK_Turn_R_A_OPTIONS = ref([]);
const BK_Turn_OU_A_OPTIONS = ref([]);
const BK_Turn_RE_A_OPTIONS = ref([]);
const BK_Turn_ROU_A_OPTIONS = ref([]);
const BK_Turn_EO_A_OPTIONS = ref([]);

const FS_Turn_FS_OPTIONS = ref([]);
const BK_Turn_PR_OPTIONS = ref([]);
const BK_Turn_P3_OPTIONS = ref([]);
const BK_Turn_R_B_OPTIONS = ref([]);
const BK_Turn_OU_B_OPTIONS = ref([]);
const BK_Turn_RE_B_OPTIONS = ref([]);
const BK_Turn_ROU_B_OPTIONS = ref([]);
const BK_Turn_EO_B_OPTIONS = ref([]);
const BK_Turn_R_C_OPTIONS = ref([]);
const BK_Turn_OU_C_OPTIONS = ref([]);
const BK_Turn_RE_C_OPTIONS = ref([]);
const BK_Turn_ROU_C_OPTIONS = ref([]);
const BK_Turn_EO_C_OPTIONS = ref([]);
const BK_Turn_R_D_OPTIONS = ref([]);
const BK_Turn_OU_D_OPTIONS = ref([]);
const BK_Turn_RE_D_OPTIONS = ref([]);
const BK_Turn_ROU_D_OPTIONS = ref([]);
const BK_Turn_EO_D_OPTIONS = ref([]);

const editMoneyAgencyData = ref({
  agent: "",
  Money: "",
  Alias: "",
  admin : ""
})

const detailCompany = (item) => {
    detailCompanyData.value.name = item.UserName;
    detailCompanyData.value.Alias = item.Alias;
    detailCompanyData.value.id = item.ID;
    detailCompanyData.value.admin = item.Admin;
    detailCompanyData.value.parents_id = item.ID;
    detailCompanyData.value.FT_LINE_1 = item.FT_Turn_R_A || item.FT_Turn_OU_A || item.FT_Turn_RE_A || item.FT_Turn_ROU_A || item.FT_Turn_EO_A;
    ft_line_1_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_1; i >= 0; i -= 0.25 ) {
        ft_line_1_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_2 = item.FT_Turn_R_B || item.FT_Turn_OU_B|| item.FT_Turn_RE_B || item.FT_Turn_ROU_B || item.FT_Turn_EO_B;
    ft_line_2_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_2; i >= 0; i -= 0.25 ) {
        ft_line_2_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_3 = item.FT_Turn_R_C || item.FT_Turn_OU_C || item.FT_Turn_RE_C || item.FT_Turn_ROU_C || item.FT_Turn_EO_C;
    if (isNaN(Number(detailCompanyData.value.FT_LINE_3))) {
        detailCompanyData.value.FT_LINE_3 = 1.25;
    }
    ft_line_3_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_3; i >= 0; i -= 0.25 ) {
        ft_line_3_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_4 = item.FT_Turn_R_D || item.FT_Turn_OU_D || item.FT_Turn_RE_D || item.FT_Turn_ROU_D || item.FT_Turn_EO_D;
    ft_line_4_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_4; i >= 0; i -= 0.25 ) {
        ft_line_4_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_BIG = item.FT_Turn_P || item.FT_Turn_M || item.FT_Turn_PD || item.FT_Turn_T || item.FT_Turn_F || item.FT_Turn_PR || item.FT_Turn_P3;
    if (isNaN(Number(detailCompanyData.value.FT_LINE_BIG))) {
        detailCompanyData.value.FT_LINE_BIG = 1.25;
    }
    ft_line_big_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_BIG; i >= 0; i -= 1 ) {
        ft_line_big_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_R_A = item.FT_Turn_R_A;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_A))) {
        detailCompanyData.value.FT_Turn_R_A = 1.25;
    }
    FT_Turn_R_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_R_A; i >= 0; i -= 0.25 ) {
        FT_Turn_R_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_OU_A = item.FT_Turn_OU_A;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_A))) {
        detailCompanyData.value.FT_Turn_OU_A = 1.25;
    }
    FT_Turn_OU_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_OU_A; i >= 0; i -= 0.25 ) {
        FT_Turn_OU_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_RE_A = item.FT_Turn_RE_A;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_A))) {
        detailCompanyData.value.FT_Turn_RE_A = 1.25;
    }
    FT_Turn_RE_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_RE_A; i >= 0; i -= 0.25 ) {
        FT_Turn_RE_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_ROU_A = item.FT_Turn_ROU_A;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_A))) {
        detailCompanyData.value.FT_Turn_ROU_A = 1.25;
    }
    FT_Turn_ROU_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_ROU_A; i >= 0; i -= 0.25 ) {
        FT_Turn_ROU_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_EO_A = item.FT_Turn_EO_A;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_A))) {
        detailCompanyData.value.FT_Turn_EO_A = 1.25;
    }
    FT_Turn_EO_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_EO_A; i >= 0; i -= 0.25 ) {
        FT_Turn_EO_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_M = item.FT_Turn_M;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_M))) {
        detailCompanyData.value.FT_Turn_M = 1.25;
    }
    FT_Turn_M_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_M; i >= 0; i -= 1 ) {
        FT_Turn_M_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_RM = item.FT_Turn_RM;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RM))) {
        detailCompanyData.value.FT_Turn_RM = 1.25;
    }
    FT_Turn_RM_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_RM; i >= 0; i -= 1 ) {
        FT_Turn_RM_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_PD = item.FT_Turn_PD;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_PD))) {
        detailCompanyData.value.FT_Turn_PD = 1.25;
    }
    FT_Turn_PD_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_PD; i >= 0; i -= 1 ) {
        FT_Turn_PD_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_T = item.FT_Turn_T;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_T))) {
        detailCompanyData.value.FT_Turn_T = 1.25;
    }
    FT_Turn_T_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_T; i >= 0; i -= 1 ) {
        FT_Turn_T_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_F = item.FT_Turn_F;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_F))) {
        detailCompanyData.value.FT_Turn_F = 1.25;
    }
    FT_Turn_F_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_F; i >= 0; i -= 1 ) {
        FT_Turn_F_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_P = item.FT_Turn_P;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_P))) {
        detailCompanyData.value.FT_Turn_P = 1.25;
    }
    FT_Turn_P_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_P; i >= 0; i -= 1 ) {
        FT_Turn_P_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_PR = item.FT_Turn_PR;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_PR))) {
        detailCompanyData.value.FT_Turn_PR = 1.25;
    }
    FT_Turn_PR_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_PR; i >= 0; i -= 1 ) {
        FT_Turn_PR_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_P3 = item.FT_Turn_P3;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_P3))) {
        detailCompanyData.value.FT_Turn_P3 = 1.25;
    }
    FT_Turn_P3_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_P3; i >= 0; i -= 1 ) {
        FT_Turn_P3_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_R_B = item.FT_Turn_R_B;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_B))) {
        detailCompanyData.value.FT_Turn_R_B = 1.25;
    }
    FT_Turn_R_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_R_B; i >= 0; i -= 0.25 ) {
        FT_Turn_R_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_OU_B = item.FT_Turn_OU_B;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_B))) {
        detailCompanyData.value.FT_Turn_OU_B = 1.25;
    }
    FT_Turn_OU_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_OU_B; i >= 0; i -= 0.25 ) {
        FT_Turn_OU_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_RE_B = item.FT_Turn_RE_B;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_B))) {
        detailCompanyData.value.FT_Turn_RE_B = 1.25;
    }
    FT_Turn_RE_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_RE_B; i >= 0; i -= 0.25 ) {
        FT_Turn_RE_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_ROU_B = item.FT_Turn_ROU_B;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_B))) {
        detailCompanyData.value.FT_Turn_ROU_B = 1.25;
    }
    FT_Turn_ROU_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_ROU_B; i >= 0; i -= 0.25 ) {
        FT_Turn_ROU_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_EO_B = item.FT_Turn_EO_B;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_B))) {
        detailCompanyData.value.FT_Turn_EO_B = 1.25;
    }
    FT_Turn_EO_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_EO_B; i >= 0; i -= 0.25 ) {
        FT_Turn_EO_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_R_C = item.FT_Turn_R_C;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_C))) {
        detailCompanyData.value.FT_Turn_R_C = 1.25;
    }
    FT_Turn_R_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_R_C; i >= 0; i -= 0.25 ) {
        FT_Turn_R_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_OU_C = item.FT_Turn_OU_C;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_C))) {
        detailCompanyData.value.FT_Turn_OU_C = 1.25;
    }
    FT_Turn_OU_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_OU_C; i >= 0; i -= 0.25 ) {
        FT_Turn_OU_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_RE_C = item.FT_Turn_RE_C;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_C))) {
        detailCompanyData.value.FT_Turn_RE_C = 1.25;
    }
    FT_Turn_RE_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_RE_C; i >= 0; i -= 0.25 ) {
        FT_Turn_RE_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_ROU_C = item.FT_Turn_ROU_C;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_C))) {
        detailCompanyData.value.FT_Turn_ROU_C = 1.25;
    }
    FT_Turn_ROU_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_ROU_C; i >= 0; i -= 0.25 ) {
        FT_Turn_ROU_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_EO_C = item.FT_Turn_EO_C;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_C))) {
        detailCompanyData.value.FT_Turn_EO_C = 1.25;
    }
    FT_Turn_EO_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_EO_C; i >= 0; i -= 0.25 ) {
        FT_Turn_EO_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_R_D = item.FT_Turn_R_D;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_D))) {
        detailCompanyData.value.FT_Turn_R_D = 1.25;
    }
    FT_Turn_R_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_R_D; i >= 0; i -= 0.25 ) {
        FT_Turn_R_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_OU_D = item.FT_Turn_OU_D;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_D))) {
        detailCompanyData.value.FT_Turn_OU_D = 1.25;
    }
    FT_Turn_OU_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_OU_D; i >= 0; i -= 0.25 ) {
        FT_Turn_OU_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_RE_D = item.FT_Turn_RE_D;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_D))) {
        detailCompanyData.value.FT_Turn_RE_D = 1.25;
    }
    FT_Turn_RE_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_RE_D; i >= 0; i -= 0.25 ) {
        FT_Turn_RE_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_ROU_D = item.FT_Turn_ROU_D;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_D))) {
        detailCompanyData.value.FT_Turn_ROU_D = 1.25;
    }
    FT_Turn_ROU_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_ROU_D; i >= 0; i -= 0.25 ) {
        FT_Turn_ROU_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_EO_D = item.FT_Turn_EO_D;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_D))) {
        detailCompanyData.value.FT_Turn_EO_D = 1.25;
    }
    FT_Turn_EO_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_EO_D; i >= 0; i -= 0.25 ) {
        FT_Turn_EO_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_R_SC = item.FT_R_Scene;
    detailCompanyData.value.FT_OU_SC = item.FT_OU_Scene;
    detailCompanyData.value.FT_RE_SC = item.FT_RE_Scene;
    detailCompanyData.value.FT_ROU_SC = item.FT_ROU_Scene;
    detailCompanyData.value.FT_EO_SC = item.FT_EO_Scene;
    detailCompanyData.value.FT_M_SC = item.FT_M_Scene;
    detailCompanyData.value.FT_RM_SC = item.FT_RM_Scene;
    detailCompanyData.value.FT_PD_SC = item.FT_PD_Scene;
    detailCompanyData.value.FT_T_SC = item.FT_T_Scene;
    detailCompanyData.value.FT_F_SC = item.FT_F_Scene;
    detailCompanyData.value.FT_P_SC = item.FT_P_Scene;
    detailCompanyData.value.FT_PR_SC = item.FT_PR_Scene;
    detailCompanyData.value.FT_P3_SC = item.FT_P3_Scene;
    detailCompanyData.value.FT_R_SO = item.FT_R_Bet;
    detailCompanyData.value.FT_OU_SO = item.FT_OU_Bet;
    detailCompanyData.value.FT_RE_SO = item.FT_RE_Bet;
    detailCompanyData.value.FT_ROU_SO = item.FT_ROU_Bet;
    detailCompanyData.value.FT_EO_SO = item.FT_EO_Bet;
    detailCompanyData.value.FT_M_SO = item.FT_M_Bet;
    detailCompanyData.value.FT_RM_SO = item.FT_RM_Bet;
    detailCompanyData.value.FT_PD_SO = item.FT_PD_Bet;
    detailCompanyData.value.FT_T_SO = item.FT_T_Bet;
    detailCompanyData.value.FT_F_SO = item.FT_F_Bet;
    detailCompanyData.value.FT_P_SO = item.FT_P_Bet;
    detailCompanyData.value.FT_PR_SO = item.FT_PR_Bet;
    detailCompanyData.value.FT_P3_SO = item.FT_P3_Bet;


    detailCompanyData.value.BK_LINE_1 = item.BK_Turn_R_A || item.BK_Turn_OU_A || item.BK_Turn_RE_A || item.BK_Turn_ROU_A || item.BK_Turn_EO_A;
    if (isNaN(Number(detailCompanyData.value.BK_LINE_1))) {
        detailCompanyData.value.BK_LINE_1 = 1.25;
    }
    bk_line_1_options.value = [];
    for (let i = detailCompanyData.value.BK_LINE_1; i >= 0; i -= 0.25 ) {
        bk_line_1_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_LINE_2 = item.BK_Turn_R_B || item.BK_Turn_OU_B|| item.BK_Turn_RE_B || item.BK_Turn_ROU_B || item.BK_Turn_EO_B;
    if (isNaN(Number(detailCompanyData.value.BK_LINE_2))) {
        detailCompanyData.value.BK_LINE_2 = 1.25;
    }
    bk_line_2_options.value = [];
    for (let i = detailCompanyData.value.BK_LINE_2; i >= 0; i -= 0.25 ) {
        bk_line_2_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_LINE_3 = item.BK_Turn_R_C || item.BK_Turn_OU_C || item.BK_Turn_RE_C || item.BK_Turn_ROU_C || item.BK_Turn_EO_C;
    if (isNaN(Number(detailCompanyData.value.BK_LINE_3))) {
        detailCompanyData.value.BK_LINE_3 = 1.25;
    }
    bk_line_3_options.value = [];
    for (let i = detailCompanyData.value.BK_LINE_3; i >= 0; i -= 0.25 ) {
        bk_line_3_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_LINE_4 = item.BK_Turn_R_D || item.BK_Turn_OU_D || item.BK_Turn_RE_D || item.BK_Turn_ROU_D || item.BK_Turn_EO_D;
    if (isNaN(Number(detailCompanyData.value.BK_LINE_4))) {
        detailCompanyData.value.BK_LINE_4 = 1.25;
    }
    bk_line_4_options.value = [];
    for (let i = detailCompanyData.value.BK_LINE_4; i >= 0; i -= 0.25 ) {
        bk_line_4_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_LINE_BIG = item.BK_Turn_P || item.BK_Turn_M || item.BK_Turn_PD || item.BK_Turn_T || item.BK_Turn_F || item.BK_Turn_PR || item.BK_Turn_P3;
    if (isNaN(Number(detailCompanyData.value.BK_LINE_BIG))) {
        detailCompanyData.value.BK_LINE_BIG = 1.25;
    }
    bk_line_big_options.value = [];
    for (let i = detailCompanyData.value.BK_LINE_BIG; i >= 0; i -= 1 ) {
        bk_line_big_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_R_A = item.BK_Turn_R_A;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_A))) {
        detailCompanyData.value.BK_Turn_R_A = 1.25;
    }
    BK_Turn_R_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_R_A; i >= 0; i -= 0.25 ) {
        BK_Turn_R_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_OU_A = item.BK_Turn_OU_A;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_A))) {
        detailCompanyData.value.BK_Turn_OU_A = 1.25;
    }
    BK_Turn_OU_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_OU_A; i >= 0; i -= 0.25 ) {
        BK_Turn_OU_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_RE_A = item.BK_Turn_RE_A;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_A))) {
        detailCompanyData.value.BK_Turn_RE_A = 1.25;
    }
    BK_Turn_RE_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_RE_A; i >= 0; i -= 0.25 ) {
        BK_Turn_RE_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_ROU_A = item.BK_Turn_ROU_A;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_A))) {
        detailCompanyData.value.BK_Turn_ROU_A = 1.25;
    }
    BK_Turn_ROU_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_ROU_A; i >= 0; i -= 0.25 ) {
        BK_Turn_ROU_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_EO_A = item.BK_Turn_EO_A;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_A))) {
        detailCompanyData.value.BK_Turn_EO_A = 1.25;
    }
    BK_Turn_EO_A_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_EO_A; i >= 0; i -= 0.25 ) {
        BK_Turn_EO_A_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FS_Turn_FS = item.FS_Turn_FS;
    if (isNaN(Number(detailCompanyData.value.FS_Turn_FS))) {
        detailCompanyData.value.FS_Turn_FS = 1.25;
    }
    FS_Turn_FS_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FS_Turn_FS; i >= 0; i -= 1 ) {
        FS_Turn_FS_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_PR = item.BK_Turn_PR;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_PR))) {
        detailCompanyData.value.BK_Turn_PR = 1.25;
    }
    BK_Turn_PR_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_PR; i >= 0; i -= 1 ) {
        BK_Turn_PR_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_P3 = item.BK_Turn_P3;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_P3))) {
        detailCompanyData.value.BK_Turn_P3 = 1.25;
    }
    BK_Turn_P3_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_P3; i >= 0; i -= 1 ) {
        BK_Turn_P3_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_R_B = item.BK_Turn_R_B;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_B))) {
        detailCompanyData.value.BK_Turn_R_B = 1.25;
    }
    BK_Turn_R_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_R_B; i >= 0; i -= 0.25 ) {
        BK_Turn_R_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_OU_B = item.BK_Turn_OU_B;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_B))) {
        detailCompanyData.value.BK_Turn_OU_B = 1.25;
    }
    BK_Turn_OU_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_OU_B; i >= 0; i -= 0.25 ) {
        BK_Turn_OU_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_RE_B = item.BK_Turn_RE_B;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_B))) {
        detailCompanyData.value.BK_Turn_RE_B = 1.25;
    }
    BK_Turn_RE_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_RE_B; i >= 0; i -= 0.25 ) {
        BK_Turn_RE_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_ROU_B = item.BK_Turn_ROU_B;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_B))) {
        detailCompanyData.value.BK_Turn_ROU_B = 1.25;
    }
    BK_Turn_ROU_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_ROU_B; i >= 0; i -= 0.25 ) {
        BK_Turn_ROU_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_EO_B = item.BK_Turn_EO_B;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_B))) {
        detailCompanyData.value.BK_Turn_EO_B = 1.25;
    }
    BK_Turn_EO_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_EO_B; i >= 0; i -= 0.25 ) {
        BK_Turn_EO_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_R_C = item.BK_Turn_R_C;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_C))) {
        detailCompanyData.value.BK_Turn_R_C = 1.25;
    }
    BK_Turn_R_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_R_C; i >= 0; i -= 0.25 ) {
        BK_Turn_R_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_OU_C = item.BK_Turn_OU_C;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_C))) {
        detailCompanyData.value.BK_Turn_OU_C = 1.25;
    }
    BK_Turn_OU_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_OU_C; i >= 0; i -= 0.25 ) {
        BK_Turn_OU_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_RE_C = item.BK_Turn_RE_C;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_C))) {
        detailCompanyData.value.BK_Turn_RE_C = 1.25;
    }
    BK_Turn_RE_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_RE_C; i >= 0; i -= 0.25 ) {
        BK_Turn_RE_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_ROU_C = item.BK_Turn_ROU_C;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_C))) {
        detailCompanyData.value.BK_Turn_ROU_C = 1.25;
    }
    BK_Turn_ROU_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_ROU_C; i >= 0; i -= 0.25 ) {
        BK_Turn_ROU_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_EO_C = item.BK_Turn_EO_C;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_C))) {
        detailCompanyData.value.BK_Turn_EO_C = 1.25;
    }
    BK_Turn_EO_C_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_EO_C; i >= 0; i -= 0.25 ) {
        BK_Turn_EO_C_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_R_D = item.BK_Turn_R_D;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_D))) {
        detailCompanyData.value.BK_Turn_R_D = 1.25;
    }
    BK_Turn_R_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_R_D; i >= 0; i -= 0.25 ) {
        BK_Turn_R_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_OU_D = item.BK_Turn_OU_D;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_D))) {
        detailCompanyData.value.BK_Turn_OU_D = 1.25;
    }
    BK_Turn_OU_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_OU_D; i >= 0; i -= 0.25 ) {
        BK_Turn_OU_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_RE_D = item.BK_Turn_RE_D;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_D))) {
        detailCompanyData.value.BK_Turn_RE_D = 1.25;
    }
    BK_Turn_RE_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_RE_D; i >= 0; i -= 0.25 ) {
        BK_Turn_RE_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_ROU_D = item.BK_Turn_ROU_D;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_D))) {
        detailCompanyData.value.BK_Turn_ROU_D = 1.25;
    }
    BK_Turn_ROU_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_ROU_D; i >= 0; i -= 0.25 ) {
        BK_Turn_ROU_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_EO_D = item.BK_Turn_EO_D;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_D))) {
        detailCompanyData.value.BK_Turn_EO_D = 1.25;
    }
    BK_Turn_EO_D_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_EO_D; i >= 0; i -= 0.25 ) {
        BK_Turn_EO_D_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_R_SC = item.BK_R_Scene;
    detailCompanyData.value.BK_OU_SC = item.BK_OU_Scene;
    detailCompanyData.value.BK_RE_SC = item.BK_RE_Scene;
    detailCompanyData.value.BK_ROU_SC = item.BK_ROU_Scene;
    detailCompanyData.value.BK_EO_SC = item.BK_EO_Scene;
    detailCompanyData.value.FS_FS_SC = item.FS_FS_Scene;
    detailCompanyData.value.BK_PR_SC = item.BK_PR_Scene;
    detailCompanyData.value.BK_P3_SC = item.BK_P3_Scene;
    detailCompanyData.value.BK_R_SO = item.BK_R_Bet;
    detailCompanyData.value.BK_OU_SO = item.BK_OU_Bet;
    detailCompanyData.value.BK_RE_SO = item.BK_RE_Bet;
    detailCompanyData.value.BK_ROU_SO = item.BK_ROU_Bet;
    detailCompanyData.value.BK_EO_SO = item.BK_EO_Bet;
    detailCompanyData.value.FS_FS_SO = item.FS_FS_Bet;
    detailCompanyData.value.BK_PR_SO = item.BK_PR_Bet;
    detailCompanyData.value.BK_P3_SO = item.BK_P3_Bet;
    detailCompanyDialogVisible.value = true;
}
const editCompany = (item) => {
    editCompanyData.value.id = item.ID;
    editCompanyData.value.admin = item.Admin
    editCompanyData.value.name = item.UserName;
    editCompanyData.value.alias = item.Alias;
    editCompanyData.value.Phone = item.Phone;
    editCompanyData.value.Bank_Address = item.Bank_Address;
    editCompanyData.value.Bank_Account = item.Bank_Account;
    editCompanyData.value.super = item.Super;
    editCompanyData.value.corprator = item.Corprator;
    editCompanyData.value.world = item.World;
    editCompanyDialogVisible.value = true;
}
const handleMoneyAgency = (item) => {
  editMoneyAgencyData.value.agent = item.UserName;
  editMoneyAgencyData.value.Money = item.Money;
  editMoneyAgencyData.value.Alias = item.Alias;
  editMoneyAgencyData.value.admin = item.Admin;
  editMoneyDialogVisible.value = true;
}
const updateMoneyAgency = async () => {
  loading.value = true;
  await dispatchUpdateMoneyAgency(editMoneyAgencyData.value);
    successResult();
    editMoneyDialogVisible.value = false;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);
    loading.value = false;
}
const updateDetailCompany = async (gtype) => {
    detailCompanyData.value.gtype = gtype;
    loading.value = true;
    await dispatchUpdateDetailCompany(detailCompanyData.value);
    successResult();
    detailCompanyDialogVisible.value = false;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);
    loading.value = false;
}
const updateCompany = async () => {
    if (editCompanyData.password == "") {
        alert("您的密碼需使用字母加上數字!!")
        return;        
    }
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
    if (!regex.test(editCompanyData.value.password)) {
        alert("您的密碼需使用字母加上數字!!")
        return;
        if (editCompanyData.value.password != editCompanyData.value.passwd) {
            alert("您的密碼需使用字母加上數字!!");
            console.log("no equal")
            return;
        }
        if (editCompanyData.value.password.length < 6) {
            alert("您的密碼需使用字母加上數字!!");
            console.log(nolenght)
            return;
        }
    }
    if (editCompanyData.value.alias == "") {
        alert("請輸入 :名稱 !!");
        return;
    }
    loading.value = true;
    await dispatchUpdateCompanyData(editCompanyData.value);
    successResult();
    editCompanyDialogVisible.value = false;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);
    loading.value = false;
}
const handleEditType = async (ID, UserName, activeType) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    formData.value.active = activeType;
    formData.value.active_id = ID;
    formData.value.name = UserName;
    loading.value = true;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);    
    loading.value = false;
  })
}
const addCompany = async () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
    if (newCompanyData.value.parents_id == "") {
        alert("請輸入:管理帳號!!");
        return;
    }
    if (newCompanyData.value.UserName == "ddm" || newCompanyData.value.UserName.length < 6) {
        alert("請輸入:代理商帳號 !!");
        return;
    }
    if (!regex.test(newCompanyData.value.PassWord)) {
        alert("您的密碼需使用字母加上數字!!")
        return;
        if (newCompanyData.value.PassWord != newCompanyData.value.confirmPassword) {
            alert("您的密碼需使用字母加上數字!!");
            console.log("no equal")
            return;
        }
        if (newCompanyData.value.PassWord.length < 6) {
            alert("您的密碼需使用字母加上數字!!");
            console.log(nolenght)
            return;
        }
    }
    if (newCompanyData.value.Alias == "") {
        alert("請輸入 :名稱 !!");
        return;
    }
    loading.value = true;
    await dispatchAddCompanyData(newCompanyData.value);
    successResult();
    newCompanyDialogVisible.value = false;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);
    loading.value = false;
}
const cancelNewCompany = () => {
    newCompanyData.value = {
        num_1: 0,
        num_2: 0,
        num_3: 0,
        UserName: "ddm",
        PassWord: "",
        confirmPassword: "",
        Alias: "",
        wager: 0,
        maxcredit: "0",
        usedate: 0,
        parents_id: "",
    }
    newCompanyDialogVisible.value = false;
}
const handleChangeNumber = () => {
    newCompanyData.value.UserName = "ddm";
    newCompanyData.value.UserName = newCompanyData.value.UserName + newCompanyData.value.num_1 + newCompanyData.value.num_2 + newCompanyData.value.num_3;
}

const successResult = () => {
  if (success.value) {
    ElNotification({
      title: "成功",
      message: "操作成功。",
      type: "success",
    });
  } else {
    ElNotification({
      title: "错误",
      message: errMessage.value,
      type: "error",
    });
  }
}
const errMessage = computed(() => {
  const {getErrMessage} = storeToRefs(companyStore());
  return getErrMessage.value;
})
const totalCount = computed(() => {
    const { getTotalCount } =storeToRefs(companyStore());
    return getTotalCount.value;
})
const success = computed(() => {
  const { getSuccess } = storeToRefs(companyStore());
  return getSuccess.value;
})
const parentsList = computed(() => {
    const {getParentsList} = storeToRefs(companyStore());
    return getParentsList.value;
})
const addParentsList = computed(() => {
    const {getAddParentsList} = storeToRefs(companyStore());
    return getAddParentsList.value
})
const credit1 = computed(() => {
    const {getCredit1} = storeToRefs(companyStore());
    return getCredit1.value
})
const credit2 = computed(() => {
    const {getCredit2} = storeToRefs(companyStore());
    return getCredit2.value
})
const credit3 = computed(() => {
    const {getCredit3} = storeToRefs(companyStore());
    return getCredit3.value
})
const companyList = computed(() => {
    const {getCompanyList} = storeToRefs(companyStore());
    return getCompanyList.value
})
const web = computed(() => {
    const {getWeb} = storeToRefs(companyStore());
    return getWeb.value
})
const addCompanyDialogShow = () => {
    newCompanyDialogVisible.value = true;
}
const getCompnayByFilter = async () => {
    loading.value = true;
    await dispatchCompanyData(formData.value);
    loading.value = false;    
}
const onPageChange = async () => {
    loading.value = true;
    await dispatchCompanyData(formData.value);
    loading.value = false;    
}
onMounted(async () => {
    loading.value = true;
    await dispatchCompanyData(formData.value);
    await dispatchCompanyInfoData(formData.value);
    loading.value = false;
})
</script>
<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.m_tab_ed {
    padding-right: 2px;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: #dcdcdc;
    border: 1px #000000 solid;
    padding-left: 2px;
}
.m_title_edit {
    background-color: #84968b;
    text-align: center;
}
.m_cen {
    background-color: #FFFFFF;
    text-align: center;
}
.m_ag_ed {
    background-color: #bdd1de;
    text-align: right;
}
</style>
  