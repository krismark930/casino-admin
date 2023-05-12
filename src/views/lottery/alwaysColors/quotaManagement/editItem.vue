<template>
  <h2>彩票金额设置</h2>
  <div class="BJKN" v-if="userConfigItem != null">
    <div id="orders">
      <div class="ms">
        投注最小金额:用户投注金额不能小于最小金额，如果小于则不能投注。如果不想限制用户最小金额，请设置为1。
      </div>
      <div class="ms">
        投注最大金额:用户投注金额不能大于最大金额，如果大于则不能投注。如果不想限制用户最大金额，请设置为99999999。
      </div>
      <div class="ms">
        用户投注金额大于反水最小金额，将获得反水。例如：用户投注六合彩600，最小反水金额为500，反水比例0.01，用户会得到反水6=600*0.01。
      </div>
      <div class="ms">特别提醒：修改默认配置后,所有会员都将生效。</div>
      <br />
      <div class="game-box quick-order">
        <table class="order-table">
          <tbody>
            <tr>
              <th width="100">重庆时时彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.cq_lower_bet"
                  id="cq_lower_bet"
                  name="cq_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.cq_max_bet"
                  id="cq_max_bet"
                  name="cq_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.cq_bet"
                  id="cq_bet"
                  name="cq_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.cq_bet_reb"
                  id="cq_bet_reb"
                  name="cq_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">新疆时时彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.jx_lower_bet"
                  id="jx_lower_bet"
                  name="jx_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.jx_max_bet"
                  id="jx_max_bet"
                  name="jx_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.jx_bet"
                  id="jx_bet"
                  name="jx_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.jx_bet_reb"
                  id="jx_bet_reb"
                  name="jx_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">五分彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.ffc5_lower_bet"
                  id="ffc5_lower_bet"
                  name="ffc5_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.ffc5_max_bet"
                  id="ffc5_max_bet"
                  name="ffc5_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.ffc5_bet"
                  id="ffc5_bet"
                  name="ffc5_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.ffc5_bet_reb"
                  id="ffc5_bet_reb"
                  name="ffc5_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">腾讯时时彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.txssc_lower_bet"
                  id="txssc_lower_bet"
                  name="txssc_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.txssc_max_bet"
                  id="txssc_max_bet"
                  name="txssc_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.txssc_bet"
                  id="txssc_bet"
                  name="txssc_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.txssc_bet_reb"
                  id="txssc_bet_reb"
                  name="txssc_bet_reb"
                  size="20"
                />
              </td>
            </tr>

            <tr>
              <th width="100">台湾时时彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.twssc_lower_bet"
                  id="twssc_lower_bet"
                  name="twssc_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.twssc_max_bet"
                  id="twssc_max_bet"
                  name="twssc_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.twssc_bet"
                  id="twssc_bet"
                  name="twssc_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.twssc_bet_reb"
                  id="twssc_bet_reb"
                  name="twssc_bet_reb"
                  size="20"
                />
              </td>
            </tr>

            <tr>
              <th width="100">天津时时彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.tj_lower_bet"
                  id="tj_lower_bet"
                  name="tj_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.tj_max_bet"
                  id="tj_max_bet"
                  name="tj_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.tj_bet"
                  id="tj_bet"
                  name="tj_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.tj_bet_reb"
                  id="tj_bet_reb"
                  name="tj_bet_reb"
                  size="20"
                />
              </td>
            </tr>

            <tr>
              <th width="100">广东十分彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gdsf_lower_bet"
                  id="gdsf_lower_bet"
                  name="gdsf_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.gdsf_max_bet"
                  id="gdsf_max_bet"
                  name="gdsf_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gdsf_bet"
                  id="gdsf_bet"
                  name="gdsf_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gdsf_bet_reb"
                  id="gdsf_bet_reb"
                  name="gdsf_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">广西十分彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gxsf_lower_bet"
                  id="gxsf_lower_bet"
                  name="gxsf_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.gxsf_max_bet"
                  id="gxsf_max_bet"
                  name="gxsf_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gxsf_bet"
                  id="gxsf_bet"
                  name="gxsf_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gxsf_bet_reb"
                  id="gxsf_bet_reb"
                  name="gxsf_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">天津十分彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.tjsf_lower_bet"
                  id="tjsf_lower_bet"
                  name="tjsf_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.tjsf_max_bet"
                  id="tjsf_max_bet"
                  name="tjsf_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.tjsf_bet"
                  id="tjsf_bet"
                  name="tjsf_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.tjsf_bet_reb"
                  id="tjsf_bet_reb"
                  name="tjsf_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">重庆十分彩</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.cqsf_lower_bet"
                  id="cqsf_lower_bet"
                  name="cqsf_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.cqsf_max_bet"
                  id="cqsf_max_bet"
                  name="cqsf_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.cqsf_bet"
                  id="cqsf_bet"
                  name="cqsf_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.cqsf_bet_reb"
                  id="cqsf_bet_reb"
                  name="cqsf_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">北京PK拾</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.bjpk_lower_bet"
                  id="bjpk_lower_bet"
                  name="bjpk_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.bjpk_max_bet"
                  id="bjpk_max_bet"
                  name="bjpk_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.bjpk_bet"
                  id="bjpk_bet"
                  name="bjpk_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.bjpk_bet_reb"
                  id="bjpk_bet_reb"
                  name="bjpk_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">幸运飞艇</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.xyft_lower_bet"
                  id="xyft_lower_bet"
                  name="xyft_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.xyft_max_bet"
                  id="xyft_max_bet"
                  name="xyft_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.xyft_bet"
                  id="xyft_bet"
                  name="xyft_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.xyft_bet_reb"
                  id="xyft_bet_reb"
                  name="xyft_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr style="display: none">
              <th width="100">北京快乐8</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.bjkn_lower_bet"
                  id="bjkn_lower_bet"
                  name="bjkn_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.bjkn_max_bet"
                  id="bjkn_max_bet"
                  name="bjkn_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.bjkn_bet"
                  id="bjkn_bet"
                  name="bjkn_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.bjkn_bet_reb"
                  id="bjkn_bet_reb"
                  name="bjkn_bet_reb"
                  size="20"
                />
              </td>
            </tr>

            <tr>
              <th width="100">广东11选5</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gd11_lower_bet"
                  id="gd11_lower_bet"
                  name="gd11_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.gd11_max_bet"
                  id="gd11_max_bet"
                  name="gd11_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gd11_max_bet"
                  id="gd11_bet"
                  name="gd11_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.gd11_bet_reb"
                  id="gd11_bet_reb"
                  name="gd11_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">上海时时乐</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.t3_lower_bet"
                  id="t3_lower_bet"
                  name="t3_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.t3_max_bet"
                  id="t3_max_bet"
                  name="t3_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.t3_bet"
                  id="t3_bet"
                  name="t3_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.t3_bet_reb"
                  id="t3_bet_reb"
                  name="t3_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">福彩3D</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.d3_lower_bet"
                  id="d3_lower_bet"
                  name="d3_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.d3_max_bet"
                  id="d3_max_bet"
                  name="d3_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.d3_bet"
                  id="d3_bet"
                  name="d3_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.d3_bet_reb"
                  id="d3_bet_reb"
                  name="d3_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">排列三</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.p3_lower_bet"
                  id="p3_lower_bet"
                  name="p3_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.p3_max_bet"
                  id="p3_max_bet"
                  name="p3_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.p3_bet"
                  id="p3_bet"
                  name="p3_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.p3_bet_reb"
                  id="p3_bet_reb"
                  name="p3_bet_reb"
                  size="20"
                />
              </td>
            </tr>
            <tr>
              <th width="100">澳洲幸运5</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.azxy5_lower_bet"
                  id="azxy5_lower_bet"
                  name="azxy5_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.azxy5_max_bet"
                  id="azxy5_max_bet"
                  name="azxy5_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.azxy5_bet"
                  id="azxy5_bet"
                  name="azxy5_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.azxy5_bet_reb"
                  id="azxy5_bet_reb"
                  name="azxy5_bet_reb"
                  size="20"
                />
              </td>
            </tr>

            <tr>
              <th width="100">澳洲幸运10</th>
              <td>
                <span class="choose-name">投注最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.azxy10_lower_bet"
                  id="azxy10_lower_bet"
                  name="azxy10_lower_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">投注最大金额</span>
                <input
                  type="text"
                  class="textbox2"
                  v-model="userConfigItem.azxy10_max_bet"
                  id="azxy10_max_bet"
                  name="azxy10_max_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水最小金额</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.azxy10_bet"
                  id="azxy10_bet"
                  name="azxy10_bet"
                  size="20"
                />
              </td>
              <td>
                <span class="choose-name">反水比例</span>
                <input
                  type="text"
                  class="textbox"
                  v-model="userConfigItem.azxy10_bet_reb"
                  id="azxy10_bet_reb"
                  name="azxy10_bet_reb"
                  size="20"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="order-info" class="quick-order-info">
      <div class="inner" style="">
        <el-button type="primary" @click="updateConfigItem">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { userConfigStore } from "@/pinia/modules/always_color/user_config.js";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
import moment from "moment-timezone";
export default {
  props: {
    id: Number,
  },
  setup() {
    const { dispatchUserConfigItem } = userConfigStore();
    const { dispatchUpdateConfigItem } = userConfigStore();
    return {
      dispatchUserConfigItem,
      dispatchUpdateConfigItem,
    };
  },
  data() {
    return {};
  },
  methods: {
    updateConfigItem: async function () {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      await this.dispatchUpdateConfigItem({ data: JSON.stringify(this.userConfigItem) });
      this.successResult();
      loading.close();
    },
    successResult: function () {
      if (this.success) {
        ElNotification({
          title: "成功",
          message: "操作成功。",
          type: "success",
        });
      } else {
        ElNotification({
          title: "错误",
          message: "操作失败。",
          type: "error",
        });
      }
    },
  },
  computed: {
    success: function () {
      const { getSuccess } = userConfigStore();
      return getSuccess;
    },
    userConfigItem: function () {
      const { getUserConfigItem } = userConfigStore();
      return getUserConfigItem;
    },
  },
  async mounted() {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await this.dispatchUserConfigItem({ id: this.id });
    loading.close();
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-family: Verdana, "Microsoft YaHei", SimSun, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: 32px;
  font-size: 16px;
  vertical-align: baseline;
  display: inline-block;
  height: 32px;
  color: rgb(51, 51, 51);
  letter-spacing: normal;
  orphans: auto;
  text-align: left;
  text-indent: 0px;
  text-transform: none;
  white-space: normal;
  widows: auto;
  word-spacing: 0px;
  -webkit-text-stroke-width: 0px;
  border: 0px none;
  margin-left: 0.5em;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 24px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.BJKN {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: Verdana, "Microsoft YaHei", SimSun, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-stretch: inherit;
  line-height: 16px;
  font-size: 16px;
  vertical-align: baseline;
  color: rgb(0, 0, 0);
  letter-spacing: normal;
  orphans: auto;
  text-align: left;
  text-indent: 0px;
  text-transform: none;
  white-space: normal;
  widows: auto;
  word-spacing: 0px;
  -webkit-text-stroke-width: 0px;
  background-color: rgb(255, 255, 255);
}
#orders {
  margin: 0px;
  padding: 1px;
  border: 0px;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 16px;
  vertical-align: baseline;
}
.ms {
  margin: 5px 0px 0px 10px;
  padding: 3px;
  border: 2px solid red;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: baseline;
  width: 730px;
}
.game-box quick-order {
  margin: 0px;
  padding: 5px 0px 0px 5px;
  border: 0px;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 11px;
  vertical-align: baseline;
  display: block;
}
.order-table {
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: baseline;
  border-collapse: collapse;
  border-spacing: 0px;
  width: 751px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-left: 1px solid rgb(51, 51, 51);
  border-right: 1px solid rgb(51, 51, 51);
  border-top-style: none;
  border-bottom: 1px solid rgb(51, 51, 51);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 6px;
  padding: 0px;
  background: rgb(153, 153, 153);
}
.order-table tbody {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: baseline;
}
.order-table tr {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: baseline;
}
.order-table th {
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: normal;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: middle;
  text-align: center;
  color: white;
  border: 1px solid rgb(51, 51, 51);
  margin: 0px;
  padding: 0.5em;
  background: rgb(89, 88, 87);
}
.order-table td {
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: normal;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid rgb(51, 51, 51);
  margin: 0px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  background: white;
}
.order-table .choose-name {
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 10px;
  vertical-align: baseline;
  display: block;
  color: white;
  border: 1px solid rgb(51, 51, 51);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 2px;
  padding: 5px;
  background: rgb(51, 51, 51);
}
.order-table .textbox {
  width: 45px;
  text-align: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid rgb(0, 0, 0);
}
.order-table .textbox2 {
  width: 70px;
  text-align: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid rgb(0, 0, 0);
}
.quick-order-info {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 11px;
  vertical-align: baseline;
  text-align: right;
  width: 759.359375px;
}
.inner {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-size: 12px;
  vertical-align: baseline;
}
input.btn-submit,
button.btn-submit,
input.msg-btn-hide {
  overflow: hidden;
  width: auto;
  height: 30px;
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  line-height: 30px;
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  background: none;
  bottom: 6px;
  right: 10px;
  margin: 0;
  padding: 0 10px;
  color: white;
  text-shadow: #3e5779 0 -1px 0;
  box-shadow: rgba(255, 255, 255, 0.2) 0 1px 0, rgba(0, 0, 0, 0.2) 0 1px 2px inset;
  border: 1px solid #2d3f57;
  border-radius: 5px;
  background-image: none;
  cursor: pointer;
  background-color: #50709a;
  background-image: linear-gradient(
    to bottom,
    #7c97bb 0%,
    #5a7caa 50%,
    #50709a 51%,
    #476489 100%
  );
}
</style>
