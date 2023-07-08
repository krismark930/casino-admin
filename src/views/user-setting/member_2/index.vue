<template>
    <el-card shadow="never">
        <el-row style="margin-bottom: 1.5rem; font-size: 20px;">
            <el-col>
                <h4>会员管理</h4>
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
                <el-form label-width="150px">
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
            <el-table-column prop="Agents" label="管理 帐号" width="180" />
            <el-table-column prop="LoginName" label="登陆帐号" width="125">
                <template #default="scope">
                    {{scope.row.LoginName}}<br>
                    {{scope.row.Alias}}
                </template>
            </el-table-column>
            <el-table-column prop="UserName" label="代理商 帐号" width="140">
                <template #default="scope">
                    <div>{{scope.row.UserName}}</div>
                    <!-- <div style="background-color: yellow;" v-if="web == 'web_system_data'">{{scope.row.password}}</div> -->
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
            <el-table-column prop="EditType" label="在线" width="120">
                <template #default="scope">
                    <span v-if="scope.row.Online == 1" >在线</span>
                    <span v-else>离线</span>
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
                    <el-button link type="warning" size="small" v-if="scope.row.Status == 0" @click="handleEditType(scope.row.id, scope.row.UserName, 'disable')">
                        停用
                    </el-button>
                    <el-button link type="warning" size="small" v-else @click="handleEditType(scope.row.id, scope.row.UserName, 'enable')">
                        启用
                    </el-button>
                    <br />
                    <el-button link type="success" size="small" :disabled="scope.row.Status == 1 || scope.row.Status == 2" @click="handleEditType(scope.row.id, scope.row.UserName, 'suspend')">
                        冻结
                    </el-button>
                    <br />
                    <el-button link type="danger" size="small" @click="handleEditType(scope.row.id, scope.row.UserName, 'logout')">踢线</el-button>
                    <br />
                    <el-button link type="primary" size="small" @click="handleTransferAgency(scope.row.UserName)">转移</el-button>
                    <br /> 
                    <el-button link type="danger" size="small" @click="goCountUserPage(scope.row.UserName)">统计</el-button>
                    <br />
                    <el-button link type="danger" size="small" @click="goRecordIPPage(scope.row.UserName)">日志</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange"
                :page-size="pageSize" v-model:current-page="formData.page_no" />
        </div>
        <el-dialog v-model="editTransferAgency" title="--会员转移设置--">
            <el-form-item label="会员帐号：">
                {{ transferAgencyItem.UserName }}
            </el-form-item>
            <el-form-item label="代理帐号：">
                <el-input v-model="transferAgencyItem.agent"/>
            </el-form-item>
            <el-form-item>                
                <el-button type="primary" @click="updateAgency">确定</el-button>
            </el-form-item>
        </el-dialog>
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
            <h2>基本資料設定</h2>
            <el-form label-width="150">
                <el-form-item label="會員帳號:">
                    <el-input style="width: 200px" v-model="newCompanyData.UserName"></el-input>
                </el-form-item>
                <el-form-item label="會員名稱:">
                    <el-input style="width: 200px" v-model="newCompanyData.Alias"></el-input>
                </el-form-item>
                <el-form-item label="密碼: ">
                    <el-input type="password" style="width: 200px" v-model="newCompanyData.password" maxlength="12"></el-input>
                    ◎密碼規則：須為6~12碼英數字夾雜且符合0~9及a~z字。
                </el-form-item>
                <el-form-item label="確認密碼:">
                    <el-input type="password" v-model="newCompanyData.confirmPassword" style="width: 200px;" maxlength="12"></el-input>
                </el-form-item>
                <el-form-item label="提款密碼: ">
                    <el-input type="password" style="width: 200px" v-model="newCompanyData.address" maxlength="12"></el-input>
                    ◎密碼規則：須為6~12碼英數字夾雜且符合0~9及a~z字。
                </el-form-item>
                <el-form-item label="確認密碼:">
                    <el-input type="password" v-model="newCompanyData.confirmAddress" style="width: 200px;" maxlength="12"></el-input>
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
                <el-form-item label="會員帳號:">
                    {{editCompanyData.UserName}}
                </el-form-item>
                <el-form-item label="會員名稱:">
                    {{editCompanyData.Alias}}
                </el-form-item>
                <el-form-item label="开放盘口 :">
                  <el-select v-model="editCompanyData.Type">
                    <el-option v-for="(item, index) in typeOptions" :key="index" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="VIP:">
                  <el-select v-model="editCompanyData.VIP">
                    <el-option v-for="(item, index) in vipOptions" :key="index" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="体育反水:">
                    <el-input style="width: 200px" v-model="editCompanyData.fanshui"></el-input>
                </el-form-item>
                <el-form-item label="彩票反水:">
                    <el-input style="width: 200px" v-model="editCompanyData.fanshui_cp"></el-input>
                </el-form-item>
                <el-form-item label="真人反水:">
                    <el-input style="width: 200px" v-model="editCompanyData.fanshui_zr"></el-input>
                </el-form-item>
                <el-form-item label="电子反水:">
                    <el-input style="width: 200px" v-model="editCompanyData.fanshui_dz"></el-input>
                </el-form-item>
                <el-form-item label="开元返水:">
                    <el-input style="width: 200px" v-model="editCompanyData.fanshui_ky"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input type="password" style="width: 200px" v-model="editCompanyData.password"></el-input>
                </el-form-item>
                <el-form-item label="取款密码:">
                    <el-input type="password" style="width: 200px" v-model="editCompanyData.Address"></el-input>
                </el-form-item>
                <el-form-item label="开户地址:">
                    <el-input style="width: 200px" v-model="editCompanyData.Bank_Address"></el-input>
                </el-form-item>
                <el-form-item label="银行账号:">
                    <el-input style="width: 200px" v-model="editCompanyData.Bank_Account"></el-input>
                </el-form-item>
                <el-form-item label="手机号码:">
                    <el-input style="width: 200px" v-model="editCompanyData.Phone"></el-input>
                </el-form-item>
                <el-form-item label="QQ:">
                    <el-input style="width: 200px" v-model="editCompanyData.QQ"></el-input>
                </el-form-item>
                <el-form-item label="提示问题:">
                    <el-input style="width: 200px" v-model="editCompanyData.question"></el-input>
                </el-form-item>
                <el-form-item label="答案:">
                    <el-input style="width: 200px" v-model="editCompanyData.answer"></el-input>
                </el-form-item>
                <el-form-item label="备注:">
                    <el-input style="width: 200px" v-model="editCompanyData.Notes"></el-input>
                </el-form-item>
            </el-form>
            <el-footer style="text-align: center">
                <el-button type="primary" @click="updateCompany">確定</el-button>
                <el-button type="danger" @click="editCompanyDialogVisible = false">取消</el-button>
                <el-button type="warning" @click="realPersonSetting">真人盘口设定</el-button>
            </el-footer>
        </el-dialog>
        <el-dialog v-model="detailCompanyDialogVisible" width="90%">
            <div style="display: flex;">
                会员 -- 詳細設定&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帳號:{{detailCompanyData.name}} -- 名稱:{{detailCompanyData.Alias}} 
            </div>
            <table border="0" cellpadding="0" cellspacing="1" class="m_tab_ed">
                <tr class="m_title_edit" >
                    <td width="100">足球</td>
                    <td width="100">C</td>
                    <td width="100">大賠率</td>
                    <td width="100">單場限額</td>
                    <td width="100">單注限額</td>
                </tr>
                <tr class="m_cen">
                    <td align="center">快速<br>選單</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_LINE_3">
                            <el-option v-for="(item, index) in ft_line_3_options" :key="index" :label="item.label" :value="item.value"></el-option>
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
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">C</td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_R">
                            <el-option v-for="(item, index) in FT_Turn_R_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_OU">
                            <el-option v-for="(item, index) in FT_Turn_OU_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_RE">
                            <el-option v-for="(item, index) in FT_Turn_RE_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_ROU">
                            <el-option v-for="(item, index) in FT_Turn_ROU_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.FT_Turn_EO">
                            <el-option v-for="(item, index) in FT_Turn_EO_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_M">
                            <el-option v-for="(item, index) in FT_Turn_M_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_RM">
                            <el-option v-for="(item, index) in FT_Turn_RM_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_PD">
                            <el-option v-for="(item, index) in FT_Turn_PD_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_T">
                            <el-option v-for="(item, index) in FT_Turn_T_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_F">
                            <el-option v-for="(item, index) in FT_Turn_F_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_P">
                            <el-option v-for="(item, index) in FT_Turn_P_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_PR">
                            <el-option v-for="(item, index) in FT_Turn_PR_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FT_Turn_P3">
                            <el-option v-for="(item, index) in FT_Turn_P3_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
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
                    <td width="100">C</td>
                    <td width="100">大賠率</td>
                    <td width="100">單場限額</td>
                    <td width="100">單注限額</td>
                </tr>
                <tr class="m_cen">
                    <td align="center">快速<br>選單</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_LINE_3">
                            <el-option v-for="(item, index) in bk_line_3_options" :key="index" :label="item.label" :value="item.value"></el-option>
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
                <tr class="m_cen" >
                    <td align="right" class="m_ag_ed">C</td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_R">
                            <el-option v-for="(item, index) in BK_Turn_R_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_OU">
                            <el-option v-for="(item, index) in BK_Turn_OU_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_RE">
                            <el-option v-for="(item, index) in BK_Turn_RE_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_ROU">
                            <el-option v-for="(item, index) in BK_Turn_ROU_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-select v-model="detailCompanyData.BK_Turn_EO">
                            <el-option v-for="(item, index) in BK_Turn_EO_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.BK_Turn_PR">
                            <el-option v-for="(item, index) in BK_Turn_PR_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.BK_Turn_P3">
                            <el-option v-for="(item, index) in BK_Turn_P3_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </td>
                    <td >
                        <el-select v-model="detailCompanyData.FS_Turn_FS">
                            <el-option v-for="(item, index) in FS_Turn_FS_OPTIONS" :key="index" :label="item.label" :value="item.value"></el-option>
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
        <el-dialog v-model="realPersonDialogVisible" title="會員真人盘口管理">
          <el-form label-width="150">
            <el-form-item label="會員帳號 :">
              <p>{{ selectedUser.UserName }}</p>
            </el-form-item>
            <el-form-item label="會員 名稱 :">
              <p>{{ selectedUser.Alias }}</p>
            </el-form-item>
            <el-form-item label="會員 额度 :">
              体育余额: {{ selectedUser.Money }}元 &nbsp;&nbsp;&nbsp;&nbsp; AG余额:{{ selectedUser.AG_Money }}元 &nbsp;&nbsp;&nbsp;
              OG余额:{{ selectedUser.OG_Money }}元 &nbsp;&nbsp;&nbsp; BBIN余额:{{ selectedUser.BBIN_Money }}元 &nbsp;&nbsp;&nbsp;
              MG余额:{{ selectedUser.MG_Money }}元 &nbsp;&nbsp;&nbsp; PT余额:{{ selectedUser.PT_Money }}元 &nbsp;&nbsp;&nbsp;
              开元余额:{{ selectedUser.KY_Money }}元
            </el-form-item>
            <el-form-item label="真人 控制 :">
              <el-checkbox v-model="sysConfigItem.AG" label="AG" size="large" />
              <el-checkbox v-model="sysConfigItem.OG" label="OG" size="large" />
              <el-checkbox v-model="sysConfigItem.BBIN" label="BBIN" size="large" />
              <el-checkbox v-model="sysConfigItem.MG" label="MG" size="large" />
              <el-checkbox v-model="sysConfigItem.PT" label="PT" size="large" />
              <el-checkbox v-model="sysConfigItem.KY" label=" 开元棋牌" size="large" />
            </el-form-item>
            <el-form-item label="额度 转换 :">
              <el-checkbox v-model="selectedUser.AG_TR" label="AG" size="large" />
              <el-checkbox v-model="selectedUser.OG_TR" label="OG" size="large" />
              <el-checkbox v-model="selectedUser.BBIN_TR" label="BBIN" size="large" />
              <el-checkbox v-model="selectedUser.MG_TR" label="MG" size="large" />
              <el-checkbox v-model="selectedUser.PT_TR" label="PT" size="large" />
              <el-checkbox v-model="selectedUser.KY_TR" label=" 开元棋牌" size="large" />
            </el-form-item>
            <el-form-item label="AG真人账号 :">
              <el-input v-model="selectedUser.AG_User" />
            </el-form-item>
            <el-form-item label="AG真人密码 :">
              <el-input v-model="selectedUser.AG_Pass" />
            </el-form-item>
            <el-form-item label="AG真人盘口 :">
              <el-select v-model="selectedUser.AG_Type">
                <el-option v-for="(item, index) in AG_TypeOptions" :key="index" :label="item.label"
                  :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="BBIN真人账号 :">
              <el-input v-model="selectedUser.BBIN_User" />
            </el-form-item>
            <el-form-item label="BBIN真人密码 :">
              <el-input v-model="selectedUser.BBIN_Pass" />
            </el-form-item>
            <el-form-item label="MG真人账号 :">
              <el-input v-model="selectedUser.MG_User" />
            </el-form-item>
            <el-form-item label="MG真人密码 :">
              <el-input v-model="selectedUser.MG_Pass" />
            </el-form-item>
            <el-form-item label="PT真人账号 :">
              <el-input v-model="selectedUser.PT_User" />
            </el-form-item>
            <el-form-item label="PT真人密码 :">
              <el-input v-model="selectedUser.PT_Pass" />
            </el-form-item>
            <el-form-item label="OG真人账号 :">
              <el-input v-model="selectedUser.OG_User" />
            </el-form-item>
            <el-form-item label="OG视讯限红 :">
              <div style="display: flex">
                <el-input v-model="selectedUser.OG_Limit1" /> - <el-input v-model="selectedUser.OG_Limit2" />
              </div>
            </el-form-item>
            <el-form-item label="开元棋牌账号 :">
              <el-input v-model="selectedUser.KY_User" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updateRealPersonData">確定</el-button>
              <el-button type="danger" @click="realPersonDialogVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
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
import {useRouter} from "vue-router";
import { ElNotification, ElLoading } from "element-plus";
import {storeToRefs} from "pinia";
import 'element-plus/theme-chalk/display.css'
import { companyStore } from "@/pinia/modules/company";
import { statisticsStore } from "@/pinia/modules/statistics";
import { systemStore } from "@/pinia/modules/system";
import socket from "@/utils/socket";
const { dispatchCompanyData } = companyStore();
const { dispatchAddCompanyData } = companyStore();
const { dispatchUpdateMember } = companyStore();
const { dispatchUpdateDetailCompany } = companyStore();
const { dispatchUpdateMoneyAgency } = companyStore();
const { dispatchUpdateAgency } = companyStore();
const { dispatchUpdateRealPersonData } = statisticsStore();
const { dispatchUpdateSysconfigData } = statisticsStore();
const { dispatchSystemData } = systemStore();
const router = useRouter();
const pageSize = ref(20)
const loading = ref(false);
const formData = ref({
    lv: "MEM",
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
const transferAgencyItem = ref({
    lv: "MEM",
    UserName: "",
    agent: "",
})
const newCompanyDialogVisible = ref(false);
const editCompanyDialogVisible = ref(false);
const detailCompanyDialogVisible = ref(false);
const editMoneyDialogVisible = ref(false);
const editTransferAgency = ref(false);
const realPersonDialogVisible = ref(false);
const searchDialogVisible = ref(false);
const selectedUser = ref({});
const AG_TypeOptions = ref([
  {
    label: "A盘 限红20－50000元",
    value: "A"
  },
  {
    label: "B盘 限红50－5000元",
    value: "B"
  },
  {
    label: "C盘 限红20－10000元",
    value: "C"
  },
  {
    label: "D盘 限红200－20000元",
    value: "D"
  },
  {
    label: "E盘 限红300－30000元",
    value: "E"
  },
  {
    label: "F盘 限红400－40000元",
    value: "F"
  },
  {
    label: "G盘 限红500－50000元",
    value: "G"
  },
  {
    label: "H盘 限红1000－100000元",
    value: "H"
  },
  {
    label: "I盘 限红2000－200000元",
    value: "I"
  },
])
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
    await dispatchSystemData({ lv: "M" });
    loading.value = false;
}
const realPersonSetting = () => {
  selectedUser.value = editCompanyData.value;
    editCompanyDialogVisible.value = false;
  realPersonDialogVisible.value = true;
  selectedUser.value.AG_TR = selectedUser.value.AG_TR == 0 ? true : false;
  selectedUser.value.OG_TR = selectedUser.value.OG_TR == 0 ? true : false;
  selectedUser.value.BBIN_TR = selectedUser.value.BBIN_TR == 0 ? true : false;
  selectedUser.value.MG_TR = selectedUser.value.MG_TR == 0 ? true : false;
  selectedUser.value.PT_TR = selectedUser.value.PT_TR == 0 ? true : false;
  selectedUser.value.KY_TR = selectedUser.value.KY_TR == 0 ? true : false;
}
const updateRealPersonData = async () => {
  selectedUser.value.AG_TR = selectedUser.value.AG_TR ? 0 : 1;
  selectedUser.value.OG_TR = selectedUser.value.OG_TR ? 0 : 1;
  selectedUser.value.BBIN_TR = selectedUser.value.BBIN_TR ? 0 : 1;
  selectedUser.value.MG_TR = selectedUser.value.MG_TR ? 0 : 1;
  selectedUser.value.PT_TR = selectedUser.value.PT_TR ? 0 : 1;
  selectedUser.value.KY_TR = selectedUser.value.KY_TR ? 0 : 1;
  
  sysConfigItem.value.AG = sysConfigItem.value.AG  ? 1 : 0;
  sysConfigItem.value.OG = sysConfigItem.value.OG  ? 1 : 0;
  sysConfigItem.value.BBIN = sysConfigItem.value.BBIN  ? 1 : 0;
  sysConfigItem.value.MG = sysConfigItem.value.MG  ? 1 : 0;
  sysConfigItem.value.PT = sysConfigItem.value.PT  ? 1 : 0;
  sysConfigItem.value.KY = sysConfigItem.value.KY  ? 1 : 0;

  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  }); 

  await dispatchUpdateRealPersonData(selectedUser.value);
  await dispatchUpdateSysconfigData(sysConfigItem.value);
  successResult();
  await dispatchCompanyData(formData.value);
  realPersonDialogVisible.value = false;
  loading.close();
}

const sysConfigItem = computed(() => {
  const { getSysConfigItem } = storeToRefs(systemStore());
  getSysConfigItem.value.AG = getSysConfigItem.value.AG == 1 ? true : false;
  getSysConfigItem.value.OG = getSysConfigItem.value.OG == 1 ? true : false;
  getSysConfigItem.value.BBIN = getSysConfigItem.value.BBIN == 1 ? true : false;
  getSysConfigItem.value.MG = getSysConfigItem.value.MG == 1 ? true : false;
  getSysConfigItem.value.PT = getSysConfigItem.value.PT == 1 ? true : false;
  getSysConfigItem.value.KY = getSysConfigItem.value.KY == 1 ? true : false;
  return getSysConfigItem.value
})
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
    lv: "MEM",
    num_1: 0,
    num_2: 0,
    num_3: 0,
    UserName: "",
    password: "",
    confirmPassword: "",
    Alias: "",
    wager: 0,
    maxcredit: "0",
    winloss_c: 0,
    winloss_d: 0,
    parents_id: "",
    address: "",
    confirmAdress: "",
})
const editCompanyData = ref({});
const detailCompanyData = ref({
    lv: "MEM",
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
    FT_Turn_R: "",
    FT_Turn_OU: "",
    FT_Turn_RE: "",
    FT_Turn_ROU: "",
    FT_Turn_EO: "",
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
    BK_Turn_R: "",
    BK_Turn_OU: "",
    BK_Turn_RE: "",
    BK_Turn_ROU: "",
    BK_Turn_EO: "",
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
const FT_Turn_R_OPTIONS = ref([]);
const FT_Turn_OU_OPTIONS = ref([]);
const FT_Turn_RE_OPTIONS = ref([]);
const FT_Turn_ROU_OPTIONS = ref([]);
const FT_Turn_EO_OPTIONS = ref([]);
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
const BK_Turn_R_OPTIONS = ref([]);
const BK_Turn_OU_OPTIONS = ref([]);
const BK_Turn_RE_OPTIONS = ref([]);
const BK_Turn_ROU_OPTIONS = ref([]);
const BK_Turn_EO_OPTIONS = ref([]);
const BK_Turn_R_D_OPTIONS = ref([]);
const BK_Turn_OU_D_OPTIONS = ref([]);
const BK_Turn_RE_D_OPTIONS = ref([]);
const BK_Turn_ROU_D_OPTIONS = ref([]);
const BK_Turn_EO_D_OPTIONS = ref([]);

const typeOptions = ref([
  {
    label: "A盘",
    value: "A"
  },
  {
    label: "B盘",
    value: "B"
  },
  {
    label: "C盘",
    value: "C"
  },
  {
    label: "D盘",
    value: "D"
  },
])

const vipOptions = ref([
  {
    label: "是",
    value: 1
  },
  {
    label: "否",
    value: 0
  }
])


const editMoneyAgencyData = ref({
  agent: "",
  Money: "",
  Alias: "",
  admin : ""
})
const goCountUserPage = (userName) => {
    window.open(import.meta.env.VITE_BASE_URL + "/#/agents/count-user?userName=" + userName, '_blank');
  // router.push({ name: "agents.count_user", query: { userName: userName } });
}
const goRecordIPPage = (userName) => {
    window.open(import.meta.env.VITE_BASE_URL + "/#/agents/record-ip?username=" + userName, '_blank');
  // router.push({ name: "agents.record_ip", query: { username: userName } });
}

const handleTransferAgency = (userName) => {
    editTransferAgency.value = true;
    transferAgencyItem.value.UserName =  userName;
}

const updateAgency = async () => {
    loading.value = true;
    await dispatchUpdateAgency(transferAgencyItem.value);
    successResult();
    editTransferAgency.value = false;
    await dispatchCompanyData(formData.value);
    loading.value = false;
}

const detailCompany = (item) => {
    console.log(item.FT_Turn_R);
    detailCompanyData.value.name = item.UserName;
    detailCompanyData.value.Alias = item.Alias;
    detailCompanyData.value.id = item.id;
    detailCompanyData.value.admin = item.Admin;
    detailCompanyData.value.parents_id = item.id;
    detailCompanyData.value.FT_LINE_1 = item.FT_Turn_R_A || item.FT_Turn_OU_A || item.FT_Turn_RE_A || item.FT_Turn_ROU_A || item.FT_Turn_EO_A;
    if (isNaN(Number(detailCompanyData.value.FT_LINE_1)) || Number(detailCompanyData.value.FT_LINE_1) == 0) {
        detailCompanyData.value.FT_LINE_1 = 1.25;
    }
    ft_line_1_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_1; i >= 0; i -= 0.25 ) {
        ft_line_1_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_2 = item.FT_Turn_R_B || item.FT_Turn_OU_B|| item.FT_Turn_RE_B || item.FT_Turn_ROU_B || item.FT_Turn_EO_B;
    if (isNaN(Number(detailCompanyData.value.FT_LINE_2)) || Number(detailCompanyData.value.FT_LINE_2) == 0) {
        detailCompanyData.value.FT_LINE_2 = 1.25;
    }
    ft_line_2_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_2; i >= 0; i -= 0.25 ) {
        ft_line_2_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_3 = item.FT_Turn_R || item.FT_Turn_OU || item.FT_Turn_RE || item.FT_Turn_ROU || item.FT_Turn_EO;
    if (isNaN(Number(detailCompanyData.value.FT_LINE_3)) || Number(detailCompanyData.value.FT_LINE_3) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_LINE_4)) || Number(detailCompanyData.value.FT_LINE_4) == 0) {
        detailCompanyData.value.FT_LINE_4 = 1.25;
    }
    ft_line_4_options.value = [];
    for (let i = detailCompanyData.value.FT_LINE_4; i >= 0; i -= 0.25 ) {
        ft_line_4_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_LINE_BIG = item.FT_Turn_P || item.FT_Turn_M || item.FT_Turn_PD || item.FT_Turn_T || item.FT_Turn_F || item.FT_Turn_PR || item.FT_Turn_P3;
    if (isNaN(Number(detailCompanyData.value.FT_LINE_BIG)) || Number(detailCompanyData.value.FT_LINE_BIG) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_A)) || Number(detailCompanyData.value.FT_Turn_R_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_A)) || Number(detailCompanyData.value.FT_Turn_OU_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_A)) || Number(detailCompanyData.value.FT_Turn_RE_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_A)) || Number(detailCompanyData.value.FT_Turn_ROU_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_A)) || Number(detailCompanyData.value.FT_Turn_EO_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_M)) || Number(detailCompanyData.value.FT_Turn_M) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RM)) || Number(detailCompanyData.value.FT_Turn_RM) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_PD)) || Number(detailCompanyData.value.FT_Turn_PD) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_T)) || Number(detailCompanyData.value.FT_Turn_T) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_F)) || Number(detailCompanyData.value.FT_Turn_F) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_P)) || Number(detailCompanyData.value.FT_Turn_P) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_PR)) || Number(detailCompanyData.value.FT_Turn_PR) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_P3)) || Number(detailCompanyData.value.FT_Turn_P3) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_B)) || Number(detailCompanyData.value.FT_Turn_R_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_B)) || Number(detailCompanyData.value.FT_Turn_OU_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_B)) || Number(detailCompanyData.value.FT_Turn_RE_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_B)) || Number(detailCompanyData.value.FT_Turn_ROU_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_B)) || Number(detailCompanyData.value.FT_Turn_EO_B) == 0) {
        detailCompanyData.value.FT_Turn_EO_B = 1.25;
    }
    FT_Turn_EO_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_EO_B; i >= 0; i -= 0.25 ) {
        FT_Turn_EO_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_R = item.FT_Turn_R;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R)) || Number(detailCompanyData.value.FT_Turn_R) == 0) {
        detailCompanyData.value.FT_Turn_R = 1.25;
    }
    FT_Turn_R_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_R; i >= 0; i -= 0.25 ) {
        FT_Turn_R_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_OU = item.FT_Turn_OU;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU)) || Number(detailCompanyData.value.FT_Turn_OU) == 0) {
        detailCompanyData.value.FT_Turn_OU = 1.25;
    }
    FT_Turn_OU_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_OU; i >= 0; i -= 0.25 ) {
        FT_Turn_OU_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_RE = item.FT_Turn_RE;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE)) || Number(detailCompanyData.value.BK_Turn_EO_D) == 0) {
        detailCompanyData.value.FT_Turn_RE = 1.25;
    }
    FT_Turn_RE_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_RE; i >= 0; i -= 0.25 ) {
        FT_Turn_RE_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_ROU = item.FT_Turn_ROU;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU)) || Number(detailCompanyData.value.FT_Turn_ROU) == 0) {
        detailCompanyData.value.FT_Turn_ROU = 1.25;
    }
    FT_Turn_ROU_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_ROU; i >= 0; i -= 0.25 ) {
        FT_Turn_ROU_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_EO = item.FT_Turn_EO;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO)) || Number(detailCompanyData.value.FT_Turn_EO) == 0) {
        detailCompanyData.value.FT_Turn_EO = 1.25;
    }
    FT_Turn_EO_OPTIONS.value = [];
    for (let i = detailCompanyData.value.FT_Turn_EO; i >= 0; i -= 0.25 ) {
        FT_Turn_EO_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.FT_Turn_R_D = item.FT_Turn_R_D;
    if (isNaN(Number(detailCompanyData.value.FT_Turn_R_D)) || Number(detailCompanyData.value.FT_Turn_R_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_OU_D)) || Number(detailCompanyData.value.FT_Turn_OU_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_RE_D)) || Number(detailCompanyData.value.FT_Turn_RE_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_ROU_D)) || Number(detailCompanyData.value.FT_Turn_ROU_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FT_Turn_EO_D)) || Number(detailCompanyData.value.FT_Turn_EO_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_LINE_1)) || Number(detailCompanyData.value.BK_LINE_1) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_LINE_2)) || Number(detailCompanyData.value.BK_LINE_2) == 0) {
        detailCompanyData.value.BK_LINE_2 = 1.25;
    }
    bk_line_2_options.value = [];
    for (let i = detailCompanyData.value.BK_LINE_2; i >= 0; i -= 0.25 ) {
        bk_line_2_options.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_LINE_3 = item.BK_Turn_R || item.BK_Turn_OU || item.BK_Turn_RE || item.BK_Turn_ROU || item.BK_Turn_EO;
    if (isNaN(Number(detailCompanyData.value.BK_LINE_3)) || Number(detailCompanyData.value.BK_LINE_3) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_LINE_4)) || Number(detailCompanyData.value.BK_LINE_4) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_LINE_BIG)) || Number(detailCompanyData.value.BK_LINE_BIG) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_A)) || Number(detailCompanyData.value.BK_Turn_R_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_A)) || Number(detailCompanyData.value.BK_Turn_OU_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_A)) || Number(detailCompanyData.value.BK_Turn_RE_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_A)) || Number(detailCompanyData.value.BK_Turn_ROU_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_A)) || Number(detailCompanyData.value.BK_Turn_EO_A) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.FS_Turn_FS)) || Number(detailCompanyData.value.FS_Turn_FS) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_PR)) || Number(detailCompanyData.value.BK_Turn_PR) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_P3)) || Number(detailCompanyData.value.BK_Turn_P3) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_B)) || Number(detailCompanyData.value.BK_Turn_R_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_B)) || Number(detailCompanyData.value.BK_Turn_OU_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_B)) || Number(detailCompanyData.value.BK_Turn_RE_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_B)) || Number(detailCompanyData.value.BK_Turn_ROU_B) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_B)) || Number(detailCompanyData.value.BK_Turn_EO_B) == 0) {
        detailCompanyData.value.BK_Turn_EO_B = 1.25;
    }
    BK_Turn_EO_B_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_EO_B; i >= 0; i -= 0.25 ) {
        BK_Turn_EO_B_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_R = item.BK_Turn_R;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R)) || Number(detailCompanyData.value.BK_Turn_R) == 0) {
        detailCompanyData.value.BK_Turn_R = 1.25;
    }
    BK_Turn_R_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_R; i >= 0; i -= 0.25 ) {
        BK_Turn_R_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_OU = item.BK_Turn_OU;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU)) || Number(detailCompanyData.value.BK_Turn_OU) == 0) {
        detailCompanyData.value.BK_Turn_OU = 1.25;
    }
    BK_Turn_OU_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_OU; i >= 0; i -= 0.25 ) {
        BK_Turn_OU_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_RE = item.BK_Turn_RE;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE)) || Number(detailCompanyData.value.BK_Turn_RE) == 0) {
        detailCompanyData.value.BK_Turn_RE = 1.25;
    }
    BK_Turn_RE_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_RE; i >= 0; i -= 0.25 ) {
        BK_Turn_RE_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_ROU = item.BK_Turn_ROU;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU)) || Number(detailCompanyData.value.BK_Turn_ROU) == 0) {
        detailCompanyData.value.BK_Turn_ROU = 1.25;
    }
    BK_Turn_ROU_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_ROU; i >= 0; i -= 0.25 ) {
        BK_Turn_ROU_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_EO = item.BK_Turn_EO;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO)) || Number(detailCompanyData.value.BK_Turn_EO) == 0) {
        detailCompanyData.value.BK_Turn_EO = 1.25;
    }
    BK_Turn_EO_OPTIONS.value = [];
    for (let i = detailCompanyData.value.BK_Turn_EO; i >= 0; i -= 0.25 ) {
        BK_Turn_EO_OPTIONS.value.push({
            label: i,
            value: i
        })
    }
    detailCompanyData.value.BK_Turn_R_D = item.BK_Turn_R_D;
    if (isNaN(Number(detailCompanyData.value.BK_Turn_R_D)) || Number(detailCompanyData.value.BK_Turn_R_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_OU_D)) || Number(detailCompanyData.value.BK_Turn_OU_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_RE_D)) || Number(detailCompanyData.value.BK_Turn_RE_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_ROU_D)) || Number(detailCompanyData.value.BK_Turn_ROU_D) == 0) {
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
    if (isNaN(Number(detailCompanyData.value.BK_Turn_EO_D)) || Number(detailCompanyData.value.BK_Turn_EO_D) == 0) {
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
    item.Type = item.Type == "" || item.Type == null ? "C" : item.Type;
    editCompanyData.value = item;
    console.log(editCompanyData.value.password);
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
    loading.value = false;
}
const updateDetailCompany = async (gtype) => {
    detailCompanyData.value.gtype = gtype;
    loading.value = true;
    await dispatchUpdateDetailCompany(detailCompanyData.value);
    successResult();
    detailCompanyDialogVisible.value = false;
    await dispatchCompanyData(formData.value);
    loading.value = false;
}
const updateCompany = async () => {
    //if (editCompanyData.password == "") {
    //    alert("您的密碼需使用字母加上數字!!")
    //    return;        
    //}
    //const regex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
    //if (!regex.test(editCompanyData.value.password)) {
    //    alert("您的密碼需使用字母加上數字!!")
    //    return;
    //    if (editCompanyData.value.password.length < 6) {
    //        alert("您的密碼需使用字母加上數字!!");
    //        console.log(nolenght)
    //        return;
    //    }
    //}
    loading.value = true;
    await dispatchUpdateMember(editCompanyData.value);
    successResult();
    editCompanyDialogVisible.value = false;
    await dispatchCompanyData(formData.value);
    loading.value = false;
}
const handleEditType = async (ID, UserName, activeType) => {
    console.log(ID);
    formData.value.active = activeType;
    formData.value.active_id = ID;
    formData.value.name = UserName;
    loading.value = true;
    await dispatchCompanyData(formData.value);
    if (activeType == "disable" || activeType == "logout") {
        socket.io.emit("logout", UserName);
    }
    loading.value = false;
}
const addCompany = async () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
    if (newCompanyData.value.UserName == "") {
        alert("請輸入:会员帳號 !!");
        return;
    }
    if (!regex.test(newCompanyData.value.password)) {
        alert("您的密碼需使用字母加上數字!!")
        return;
        if (newCompanyData.value.password != newCompanyData.value.confirmPassword) {
            alert("您的密碼需使用字母加上數字!!");
            console.log("no equal")
            return;
        }
        if (newCompanyData.value.password.length < 6) {
            alert("您的密碼需使用字母加上數字!!");
            console.log(nolenght)
            return;
        }
    }
    if (newCompanyData.value.address == "") {
        alert("請輸入 :提款密碼 !!");
        return;
    }
    if (newCompanyData.value.address != newCompanyData.value.confirmAddress) {
        alert("您的密碼需使用字母加上數字!!");
        console.log("no equal")
        return;
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
    newCompanyData.value = {
      lv: "MEM",
      num_1: 0,
      num_2: 0,
      num_3: 0,
      UserName: "",
      passWord: "",
      confirmPassword: "",
      Alias: "",
      wager: 0,
      maxcredit: "0",
      winloss_c: 0,
      winloss_d: 0,
      parents_id: ""
  }
    loading.value = false;
}
const cancelNewCompany = () => {
    newCompanyData.value = {
        num_1: 0,
        num_2: 0,
        num_3: 0,
        UserName: "ddm",
        passWord: "",
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
    await dispatchSystemData({ lv: "M" });
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
  