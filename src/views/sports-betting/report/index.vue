<template>
	<div v-if="reportAllShow">
		<el-row style="margin: 20px; justify-content: center;">
			<el-form-item label="管理">
				<el-select v-model="formData.gtype">
					<el-option v-for="(item, index) in gtypeOptions" :key="index" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-button type="primary" style="margin-left: 8px;" @click="handleDateRange('yesterday')">昨日</el-button>
				<el-button type="primary" @click="handleDateRange('today')">今日</el-button>
				<el-button type="primary" @click="handleDateRange('tomorrow')">明日</el-button>
				<el-button type="primary" @click="handleDateRange('this week')">本星期</el-button>
				<el-button type="primary" @click="handleDateRange('last week')">上星期</el-button>
				<el-button type="primary" @click="handleDateRange('this month')">本月份</el-button>
				<el-button type="primary" @click="handleDateRange('last month')">上月份</el-button>
				<el-button type="danger" @click="sportRebateDialogShow">一键返水</el-button>
				<el-button type="danger" @click="goAlwaysColorPage">彩票返水</el-button>
				<el-button type="danger" @click="goRebatePage('first')">真人返水</el-button>
				<el-button type="danger" @click="goRebatePage('second')">电子返水</el-button>
				<el-button type="danger" @click="goRebatePage('fourth')">捕鱼返水</el-button>
			</el-form-item>
		</el-row>
		<el-row style="margin: 20px;">
			<el-col :span="12">
				<el-form label-width="150px" style="margin: 40px">
					<el-form-item label="日期区间:">
						<el-date-picker type="daterange" style="width: 200px" v-model="dateRange" value-format="YYYY-MM-DD"></el-date-picker>
					</el-form-item>
					<el-form-item label="报表分类:">
						<el-select v-model="formData.report_kind">
							<el-option v-for="(item, index) in kindOptions" :key="index" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="投注方式:">
						<el-select v-model="formData.pay_type">
							<el-option v-for="(item, index) in payOptions" :key="index" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="投注种类:">
						<el-select v-model="formData.type">
							<el-option v-for="(item, index) in typeOptions" :key="index" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="投注状态:">
						<el-select v-model="formData.result_type">
							<el-option v-for="(item, index) in resultOptions" :key="index" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item style="text-align: center;">
						<el-button type="primary" @click="showCompanyReport">确定</el-button>
					</el-form-item>
				</el-form>
				<el-row style="margin: 20px">
					<el-col :span="12" style="text-align: center;">
						<Font color="red">{{moment().format("YYYY-MM-DD")}}足球{{sportReportItem.ft_caption}}</Font>
					</el-col>
					<el-col :span="12" style="text-align: center;">
						<Font>{{moment().subtract(1, 'day').format("YYYY-MM-DD")}}足球{{sportReportItem.ft_caption1}}</Font>
					</el-col>
				</el-row>
				<el-row style="margin: 20px">
					<el-col :span="12" style="text-align: center;">
						<Font color="red">{{moment().format("YYYY-MM-DD")}}篮球{{sportReportItem.bk_caption}}</Font>
					</el-col>
					<el-col :span="12" style="text-align: center;">					
						<Font>{{moment().subtract(1, 'day').format("YYYY-MM-DD")}}篮球{{sportReportItem.bk_caption1}}</Font>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="12" style="text-align: center">
				<h2>2010年月帐期数</h2>
				<el-table :data="helpList" style="width: 100%;" border header-align="center">
					<el-table-column prop="period" label="" style="background: #7DD5D2"/>
					<el-table-column prop="date" label=""/>
				</el-table>
			</el-col>
		</el-row>		
	</div>
	<div v-else style="margin-left: 30px; margin-top: 10px;">
		<div>
			{{ formData.title }} : {{ formData.next_name }} -- 日期 : {{ formData.date_start }} ~ {{ formData.date_end }} -- 报表分类 : {{ formData.report_kind }} --  投注方式 : {{ payType }} -- 投注种类 : {{ type }} -- 下注管道 : 网络下注 -- <el-button type="primary" @click="goBackReportAll">回上一页</el-button>
		</div>
		<div>
			<table border="1" cellpadding="0" cellspacing="1" class="m_tab_top" v-if="formData.level == 'A'" style="margin-top: 10px">
			  <tr class="m_title_report_top" > 
			    <td colspan="12">现金</td>
			  </tr>
			  <tr class="m_title_report" >
			    <td width="100">公司</td>
			    <td width="100">笔数</td>
			    <td width="100">下注金额</td>
			    <td width="100">实际投注</td>
			    <td width="100">会员</td>
			    <td width="100">代理商结果</td>
			    <td width="100">代理商交收</td>
			    <td width="100">总代理交收</td>
			    <td width="100">股东交收</td>
			    <td width="100">公司结果</td>
			    <td width="100">备注</td>
			  </tr>
			  <tr v-for="(item, index) in reportTopList" :key="index">
			  	<td>{{item.name}}</td>
			  	<td>{{item.coun}}</td>
			  	<td>
			  		<el-button type="primary" link @click="showShareReport(item)">{{item.BetScore}}</el-button>
			  	</td>
			  	<td>{{Number(item.VGOLD).toFixed(1)}}</td>
			  	<td>{{Number(item.M_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.T_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.D_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.C_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.B_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.A_Result).toFixed(1)}}</td>
			  	<td>{{ (Number(sportReportItem.sgold)/Number(sportReportItem.all_vgold)).toFixed(3) }}/1.000</td>
			  </tr>
			  <tr class="m_rig_to"> 
			    <td>总计	</td>
			    <td>{{sportReportItem.c_num}}</td>
			    <td>{{sportReportItem.c_betscore}}</td>
			    <td >{{Number(sportReportItem.c_vgold).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_m_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_t_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_d_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_c_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_b_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_a_result).toFixed(1)}}</td>
			    <td>0/1.000</td>
			  </tr>
			</table>
			<table border="1" cellpadding="0" cellspacing="1" class="m_tab_top" v-if="formData.level == 'B'" style="margin-top: 10px">
			  <tr class="m_title_report_top" > 
			    <td colspan="12">现金</td>
			  </tr>
			  <tr class="m_title_report" >
			    <td width="100">股东</td>
			    <td width="100">笔数</td>
			    <td width="100">下注金额</td>
			    <td width="100">实际投注</td>
			    <td width="100">会员</td>
			    <td width="100">代理商结果</td>
			    <td width="100">代理商交收</td>
			    <td width="100">总代理交收</td>
			    <td width="100">股东交收</td>
			    <td width="100">公司交收</td>
			    <td width="100">备注</td>
			  </tr>
			  <tr v-for="(item, index) in reportTopList" :key="index">
			  	<td>{{item.name}}</td>
			  	<td>{{item.coun}}</td>
			  	<td>
			  		<el-button type="primary" link @click="showGeneralAgentReport(item)">{{item.BetScore}}</el-button>
			  	</td>
			  	<td>{{Number(item.VGOLD).toFixed(1)}}</td>
			  	<td>{{Number(item.M_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.T_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.D_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.C_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.B_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.A_Result).toFixed(1)}}</td>
			  	<td>{{ (Number(sportReportItem.sgold)/Number(sportReportItem.all_vgold)).toFixed(3) }}/1.000</td>
			  </tr>
			  <tr class="m_rig_to"> 
			    <td>总计	</td>
			    <td>{{sportReportItem.c_num}}</td>
			    <td>{{sportReportItem.c_betscore}}</td>
			    <td >{{Number(sportReportItem.c_vgold).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_m_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_t_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_d_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_c_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_b_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_a_result).toFixed(1)}}</td>
			    <td>0/1.000</td>
			  </tr>
			</table>
			<table border="1" cellpadding="0" cellspacing="1"  class="m_tab_top" v-if="formData.level == 'C'" style="margin-top: 10px">
			  <tr class="m_title_report_top" > 
			    <td colspan="12">现金</td>
			  </tr>
			  <tr class="m_title_report" >
			    <td width="100">总代理</td>
			    <td width="100">笔数</td>
			    <td width="100">下注金额</td>
			    <td width="100">实际投注</td>
			    <td width="100">会员</td>
			    <td width="100">代理商结果</td>
			    <td width="100">代理商交收</td>
			    <td width="100">总代理交收</td>
			    <td width="100">股东交收</td>
			    <td width="100">备注</td>
			    <td width="100">备注2</td>
			  </tr>
			  <tr v-for="(item, index) in reportTopList" :key="index">
			  	<td>{{item.name}}</td>
			  	<td>{{item.coun}}</td>
			  	<td>
			  		<el-button type="primary" link @click="showAgentReport(item)">{{item.BetScore}}</el-button>
			  	</td>
			  	<td>{{Number(item.VGOLD).toFixed(1)}}</td>
			  	<td>{{Number(item.M_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.T_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.D_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.C_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.B_Result).toFixed(1)}}</td>
			  	<td></td>
			  	<td>{{ (Number(sportReportItem.sgold)/Number(sportReportItem.all_vgold)).toFixed(3) }}/1.000</td>
			  </tr>
			  <tr class="m_rig_to"> 
			    <td>总计	</td>
			    <td>{{sportReportItem.c_num}}</td>
			    <td>{{sportReportItem.c_betscore}}</td>
			    <td >{{Number(sportReportItem.c_vgold).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_m_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_t_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_d_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_c_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_b_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_a_result).toFixed(1)}}</td>
			    <td>0/1.000</td>
			  </tr>
			</table>
			<table border="1" cellpadding="0" cellspacing="1"  class="m_tab_top" v-if="formData.level == 'D'" style="margin-top: 10px">
			  <tr class="m_title_report_top" > 
			    <td colspan="12">现金</td>
			  </tr>
			  <tr class="m_title_report" >
			    <td width="100">代理商</td>
			    <td width="100">笔数</td>
			    <td width="100">下注金额</td>
			    <td width="100">实际投注</td>
			    <td width="100">会员</td>
			    <td width="100">代理商结果</td>
			    <td width="100">代理商成数</td>
			    <td width="100">代理商交收</td>
			    <td width="100">总代理成数</td>
			    <td width="100">总代理交收</td>
			    <td width="100">备注</td>
			    <td width="100">备注2</td>
			  </tr>
			  <tr v-for="(item, index) in reportTopList" :key="index">
			  	<td>{{item.name}}</td>
			  	<td>{{item.coun}}</td>
			  	<td>
			  		<el-button type="primary" link @click="showMemReport(item)">{{item.BetScore}}</el-button>
			  	</td>
			  	<td>{{Number(item.VGOLD).toFixed(1)}}</td>
			  	<td>{{Number(item.M_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.T_Result).toFixed(1)}}</td>
			  	<td>{{item.D_Point}}%</td>
			  	<td>{{Number(item.D_Result).toFixed(1)}}</td>
			  	<td>{{item.C_Point}}%</td>
			  	<td>{{Number(item.C_Result).toFixed(1)}}</td>
			  	<td>{{ (Number(sportReportItem.sgold)/Number(sportReportItem.all_vgold)).toFixed(3) }}/1.000</td>
			  	<td>{{ (Number(sportReportItem.sgold)/Number(sportReportItem.all_vgold)).toFixed(3) }}/1.000</td>
			  </tr>
			  <tr class="m_rig_to"> 
			    <td>总计	</td>
			    <td>{{sportReportItem.c_num}}</td>
			    <td>{{sportReportItem.c_betscore}}</td>
			    <td >{{Number(sportReportItem.c_vgold).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_m_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_t_result).toFixed(1)}}</td>
			    <td></td>
			    <td>{{Number(sportReportItem.c_d_result).toFixed(1)}}</td>
			    <td></td>
			    <td>{{Number(sportReportItem.c_c_result).toFixed(1)}}</td>
			    <td>0/1.000</td>
			    <td>0/1.000</td>
			  </tr>
			</table>
			<table border="1" cellpadding="0" cellspacing="1" class="m_tab_top" v-if="formData.level == 'MEM'" style="margin-top: 10px">
			  <tr class="m_title_report_top" > 
			    <td colspan="12">现金</td>
			  </tr>
			  <tr class="m_title_report" >
			    <td width="100">会员</td>
			    <td width="100">笔数</td>
			    <td width="100">金额</td>
			    <td width="100">实际投注</td>
			    <td width="100">会员</td>
			    <td width="100">代理商金额</td>
			    <td width="100">代理商成数</td>
			    <td width="100">代理商</td>
			    <td width="100">备注</td>
			  </tr>
			  <tr v-for="(item, index) in reportTopList" :key="index">
			  	<td>{{item.name}}</td>
			  	<td>{{item.coun}}</td>
			  	<td>
			  		<el-button type="primary" link @click="showMemberReport(item)">{{item.BetScore}}</el-button>
			  	</td>
			  	<td>{{Number(item.VGOLD).toFixed(1)}}</td>
			  	<td>{{Number(item.M_Result).toFixed(1)}}</td>
			  	<td>{{Number(item.T_Result).toFixed(1)}}</td>
			  	<td>{{item.D_Point}}%</td>
			  	<td>{{Number(item.D_Result).toFixed(1)}}</td>
			  	<td></td>
			  </tr>
			  <tr class="m_rig_to"> 
			    <td>总计	</td>
			    <td>{{sportReportItem.c_num}}</td>
			    <td>{{sportReportItem.c_betscore}}</td>
			    <td >{{Number(sportReportItem.c_vgold).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_m_result).toFixed(1)}}</td>
			    <td>{{Number(sportReportItem.c_t_result).toFixed(1)}}</td>
			    <td></td>
			    <td>{{Number(sportReportItem.c_d_result).toFixed(1)}}</td>
			    <td></td>
			  </tr>
			</table>
			<table border="1" cellpadding="0" cellspacing="1"  class="m_tab_top" v-if="formData.level == 'member'" style="margin-top: 10px">
			  <tr class="m_title_report" >
			    <td width="100">时间	</td>
			    <td width="100">退水</td>
			    <td width="100">球赛种类</td>
			    <td width="300">内容</td>
			    <td width="100">金额</td>
			    <td width="100">结果</td>
			    <template v-if="sportReportItem.Level == 'M' || sportReportItem.Level == 'A'">
				    <td width="100">有效投注额</td>
				    <td width="100">代理商(成数)</td>
				    <td width="100">总代理(成数)</td>
				    <td width="100">股东(成数)</td>
				    <td width="100">IP</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'B'">
				    <td width="100">代理商(成数)</td>
				    <td width="100">总代理(成数)</td>
				    <td width="100">股东(成数)</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'C'">
				    <td width="100">代理商(成数)</td>
				    <td width="100">总代理(成数)</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'D'">
				    <td width="100">代理商(成数)</td>
			    </template>
			  </tr>
			  <tr v-for="(item, index) in reportTopList" :key="index">
			  	<td>
			  		<div v-html="item.BetTime"></div>
			  	</td>
			  	<td>
			  		{{item.M_Name}}<br><font color="#0000CC">{{item.OpenType}}</font>&nbsp;&nbsp;&nbsp;<font color="#CC0000">{{item.TurnRate}}</font>
			  	</td>
			  	<td>
			  		{{item.Title}}{{item.BetType}}<br />
            <font color="#cc0000">
              {{item.OpenType }}&nbsp;&nbsp;{{item.TurnRate }}
            </font>
			  	</td>
			  	<td>
			  		<div v-html="item.Middle"></div>
			  	</td>
			  	<td>{{Number(item.BetScore).toFixed(1)}}</td>
			  	<td>{{item.M_Result}}</td>
			    <template v-if="sportReportItem.Level == 'M' || sportReportItem.Level == 'A'">
				  	<td align="center">{{item.VGOLD}}</td>
			      <td align="center">{{item.D_Point}}</td>
			      <td align="center">{{item.C_Point}}</td>
			      <td align="center">{{item.B_Point}}</td>
			      <td align="center"><font color=#cc0000>{{item.BetIP}}</font></td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'B'">
			      <td align="center">{{item.D_Point}}</td>
			      <td align="center">{{item.C_Point}}</td>
			      <td align="center">{{item.B_Point}}</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'C'">
			      <td align="center">{{item.D_Point}}</td>
			      <td align="center">{{item.C_Point}}</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'D'">
			      <td align="center">{{item.D_Point}}</td>
			    </template>
			  </tr>
			  <tr class="m_rig_re"> 
		      <td>&nbsp;</td>
		      <td>&nbsp;</td>
		      <td>&nbsp;</td>
			    <td>{{sportReportItem.ncount}}</td>
			    <td>{{sportReportItem.score}}</td>
			    <td >{{Number(sportReportItem.win).toFixed(1)}}</td>
			    <template v-if="sportReportItem.Level == 'M' || sportReportItem.Level == 'A'">
			      <td bgcolor="#FFFFFF">{{Number(sportReportItem.vgolds).toFixed(1)}}</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'B'">
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'C'">
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			    </template>
			    <template v-else-if="sportReportItem.Level == 'D'">
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			      <td bgcolor="#FFFFFF">&nbsp;</td>
			    </template>
			  </tr>
			</table>
			<table border="1" cellpadding="0" cellspacing="1"  class="m_tab_top" v-if="formData.level == 'member'" style="margin-top: 10px">
			  <tr class="m_title_top" >
			    <td width="100"></td>
			    <td width="100">退水</td>
			    <td width="100">代理商</td>
			    <td width="100">笔数</td>
			    <td width="100">金额</td>
			    <td width="100">结果</td>
			  </tr>
			  <tr class="m_rig_re"> 
		      <td>&nbsp;</td>
			    <td>{{sportReportItem.twin - sportReportItem.win}}</td>
			    <td>{{sportReportItem.agents}}</td>
			    <td>{{sportReportItem.ncount}}</td>
			    <td>{{sportReportItem.score}}</td>
			    <td>{{sportReportItem.twin}}</td>
			  </tr>
			</table>
		</div>
	</div>
	<el-dialog v-model="sportRebateDialogVisible" title=" 一键反水（体育）">
		<el-form :inline="true">
			<el-form-item label="开始日期:">
				<el-date-picker type="date" value-format="YYYY-MM-DD" v-model="sportRebateFormData.start_date"/>
			</el-form-item>
			<el-form-item label="结束日期:">
				<el-date-picker type="date" value-format="YYYY-MM-DD" v-model="sportRebateFormData.end_date"/>
			</el-form-item>
		</el-form>
		<el-form-item label="有效会员:">
			<el-input v-model="sportRebateFormData.valid_name"/><Font color="red">不填代表所有会员</Font>
		</el-form-item>
		<el-form-item label="排除会员:">
			<el-input v-model="sportRebateFormData.bad_name"/>
		</el-form-item>
		<div style="text-align: center;">
			<el-button type="primary" @click="startSportRebate">开始反水</el-button>
		</div>
		<div>注：不自动反水的会员请填到排除会员，用半角逗号,隔开</div>
		<div>需要提前返水的会员，可以填到有效会员，不填代表所有会员</div>
		<div>一键返水只适用于关闭体育场场反水的注单</div>
	</el-dialog>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import moment from 'moment-timezone';
import { sportReportStore } from "@/pinia/modules/sport_report";
import { storeToRefs } from "pinia";
import { ElNotification } from "element-plus";
import { ElLoading } from "element-plus";
import {useRouter} from 'vue-router';

const { dispatchSportReport } = sportReportStore();
const { dispatchTopReport } = sportReportStore();
const { dispatchSportRebate } = sportReportStore();
const router = useRouter();

const reportAllShow = ref(true);
const payType = ref("全部");
const type = ref("全部");
const gType = ref("全部");
const resultType = ref("全部");
const superName = ref("");
const memberName = ref("");
const agentName = ref("");
const worldName = ref("");
const corpratorName = ref("");
const sportRebateDialogVisible = ref(false);

const sportRebateFormData = ref({
	start_date: moment().format("YYYY-MM-DD"),
	end_date: moment().format("YYYY-MM-DD"),
	valid_name: "",
	bad_name: ""
})

const helpList = [
	{
		period: "第1期",
		date: "2009/12/28 ~ 2010/01/24",
	},
	{
		period: "第2期",
		date: "2010/01/25 ~ 2010/02/21",
	},
	{
		period: "第3期",
		date: "2010/02/22 ~ 2010/03/21",
	},
	{
		period: "第4期",
		date: "2010/03/22 ~ 2010/04/18",
	},
	{
		period: "第5期",
		date: "2010/04/19 ~ 2010/05/16",
	},
	{
		period: "第6期",
		date: "2010/05/17 ~ 2010/06/13",
	},
	{
		period: "第7期",
		date: "2010/06/14 ~ 2010/07/11",
	},
	{
		period: "第8期",
		date: "2010/07/12 ~ 2010/08/08",
	},
	{
		period: "第9期",
		date: "2010/08/09 ~ 2010/09/05",
	},
	{
		period: "第10期",
		date: "2010/09/06 ~ 2010/10/03",
	},
	{
		period: "第11期",
		date: "2010/10/04 ~ 2010/10/31",
	},
	{
		period: "第12期",
		date: "2010/11/01 ~ 2010/11/28",
	},
	{
		period: "第13期",
		date: "2010/11/29 ~ 2010/12/26",
	},
];

const dateRange = ref([
	moment.tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
	moment.tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
]);

const formData = ref({
	level: "A",
	title: "",
	next_name: "admin",
	gtype: "",
	date_start: dateRange.value[0],
	date_end: dateRange.value[1],
	report_kind: "A",
	pay_type: "",
	type: "",
	result_type: "",
	m_name: ""
})

const gtypeOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "足球",
		value: "FT"
	},
	{
		label: "篮球",
		value: "BK"
	},
])

const kindOptions = ref([
	{
		label: "总帐",
		value: "A"
	},
	{
		label: "分类帐",
		value: "C"
	},
	{
		label: "已注销注单",
		value: "D"
	},
	{
		label: "未接受注单",
		value: "E"
	},
])

const payOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "信用额度",
		value: 0
	},
	{
		label: "现金",
		value: 1
	},
])

const typeOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "全场独赢",
		value: "M"
	},
	{
		label: "全场让球",
		value: "R"
	},
	{
		label: "全场大小",
		value: "OU"
	},
	{
		label: "上半独赢",
		value: "VM"
	},
	{
		label: "上半让球",
		value: "VR"
	},
	{
		label: "上半大小",
		value: "VOU"
	},
	{
		label: "上半单双",
		value: "VEO"
	},
	{
		label: "下半让球",
		value: "UR"
	},
	{
		label: "下半大小",
		value: "UOU"
	},
	{
		label: "下半单双",
		value: "UEO"
	},
	{
		label: "单节让球",
		value: "QR"
	},
	{
		label: "单节大小",
		value: "QOU"
	},
	{
		label: "单节单双",
		value: "QEO"
	},
	{
		label: "滚球全场独赢",
		value: "RM"
	},
	{
		label: "滚球全场让球",
		value: "RB"
	},
	{
		label: "滚球全场大小",
		value: "ROU"
	},
	{
		label: "滚球上半独赢",
		value: "VRM"
	},
	{
		label: "滚球上半让球",
		value: "VRB"
	},
	{
		label: "滚球上半大小",
		value: "VROU"
	},
	{
		label: "滚球下半让球",
		value: "URB"
	},
	{
		label: "滚球下半大小",
		value: "UROU"
	},
	{
		label: "波胆",
		value: "PD"
	},
	{
		label: "上半波胆",
		value: "VPD"
	},
	{
		label: "总入球",
		value: "T"
	},
	{
		label: "半全场",
		value: "F"
	},
	{
		label: "混合过关",
		value: "PC"
	},
	{
		label: "冠军",
		value: "CS"
	},
])

const resultOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "有结果",
		value: "Y"
	},
	{
		label: "未有结果",
		value: "N"
	},
])

const startSportRebate = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchSportRebate(sportRebateFormData.value);
	successResult();
	sportRebateDialogVisible.value = false;
	loading.close();		
}

const sportRebateDialogShow = () => {
	sportRebateDialogVisible.value = true;
}

const goRebatePage = (value) => {
	router.push({name: "rebate", query: {activeName: value}})
}

const goAlwaysColorPage = () => {
	router.push({name: "alwaysColors", query: {activeName: "seventh"}})
}

const showMemberReport = async (item) => {
	reportAllShow.value = false;
	formData.value.level = "member";
	formData.value.m_name = item.name; 
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchTopReport(formData.value);
	loading.close();	
}

const showShareReport = async (item) => {
	reportAllShow.value = false;
	formData.value.level = "B";
	formData.value.next_name = item.name; 
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchTopReport(formData.value);
	loading.close();	
}

const showGeneralAgentReport = async (item) => {
	reportAllShow.value = false;
	formData.value.level = "C";
	formData.value.next_name = item.name; 
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchTopReport(formData.value);
	loading.close();	
}

const showAgentReport = async (item) => {
	reportAllShow.value = false;
	formData.value.level = "D";
	formData.value.next_name = item.name; 
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchTopReport(formData.value);
	loading.close();	
}

const showMemReport = async (item) => {
	reportAllShow.value = false;
	formData.value.level = "MEM";
	formData.value.next_name = item.name; 
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchTopReport(formData.value);
	loading.close();	
}

const showCompanyReport = async () => {
	reportAllShow.value = false;
	formData.value.title = "管理";
	formData.value.level = "A";
	formData.value.next_name = "admin";
	formData.value.date_start = dateRange.value[0];
	formData.value.date_end = dateRange.value[1];
	gtypeOptions.value.map(item => {
		if (item.value == formData.value.gtype) {
			gType.value = item.label;
		}
	})
	payOptions.value.map(item => {
		if (item.value == formData.value.pay_type) {
			payType.value = item.label;
		}
	})
	typeOptions.value.map(item => {
		if (item.value == formData.value.type) {
			type.value = item.label;
		}
	})
	resultOptions.value.map(item => {
		if (item.value == formData.value.result_type) {
			resultType.value = item.label;
		}
	})
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
	await dispatchTopReport(formData.value);
	loading.close();
}

const goBackReportAll = async () => {
	reportAllShow.value = true;
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSportReport();
  successResult();
  loading.close();	
}

const handleDateRange = (date) => {
	switch (date) {
		case "yesterday":
			dateRange.value[0] = moment().subtract(1, 'day').format('YYYY-MM-DD');
			dateRange.value[1] = moment().subtract(1, 'day').format('YYYY-MM-DD');
			break;
		case "today":
			dateRange.value[0] = moment().format('YYYY-MM-DD');
			dateRange.value[1] = moment().format('YYYY-MM-DD');
			break;
		case "tomorrow":
			dateRange.value[0] = moment().add(1, 'day').format('YYYY-MM-DD');
			dateRange.value[1] = moment().add(1, 'day').format('YYYY-MM-DD');
			break;
		case "this week":
			dateRange.value[0] = moment().clone().startOf('week').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().endOf('week').format('YYYY-MM-DD');
			break;
		case "last week":
			dateRange.value[0] = moment().clone().subtract(1, 'week').startOf('week').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().subtract(1, 'week').endOf('week').format('YYYY-MM-DD');
			break;
		case "this month":
			dateRange.value[0] = moment().clone().startOf('month').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().endOf('month').format('YYYY-MM-DD');
			break;
		case "last month":
			dateRange.value[0] = moment().clone().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
			break;
	}
}

const success = computed(() => {
	const { getSuccess } = storeToRefs(sportReportStore());
	return getSuccess.value;
})

const errMessage = computed(() => {
	const {getErrMessage} = storeToRefs(sportReportStore());
	return getErrMessage.value;
})

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

const reportTopList = computed(() => {
	const {getTopReportList} = storeToRefs(sportReportStore());
	return getTopReportList.value;
})

const sportReportItem = computed(() => {
	const { getSportReportItem } = storeToRefs(sportReportStore());
	return getSportReportItem.value
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSportReport();
  successResult();
  loading.close();	
})
</script>
<style>
.m_title_report_top {
    background-color: #687780;
    height: 25px;
    text-align: center;
    color: #FFFFFF;
}
.m_title_report {
    background-color: #687780;
    height: 31px;
    text-align: center;
    color: #FFFFFF;
}
.m_rig {
    text-align: right;
    background-color: #FFFFFF;
}
.m_rig_to {
    background-color: #990000;
    text-align: right;
    color: #FFFFFF;
}
.m_rig_re {
    background-color: #DAE9F2;
    text-align: right;
}
.m_title_top {
    background-color: #CC0000;
    text-align: center;
    color: #FFFFFF;
}
</style>