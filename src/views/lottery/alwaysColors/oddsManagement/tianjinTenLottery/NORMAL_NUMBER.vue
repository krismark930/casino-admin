<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第1球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds1.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds1.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds2 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第2球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds2.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds2.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds3 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第3球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds3.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds3.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds4 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第4球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds4.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds4.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds5 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第5球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds5.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds5.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds6 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第6球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds6.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds6.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds6.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds6.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds6.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds6.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds6.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds6.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds6.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds7 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">第7球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds7.h20"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds7.h21"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds7.h23"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds7.h25"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds7.h27"></el-input>
              </td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds7.h22"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds7.h24"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds7.h26"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds7.h28"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
    </el-row>
    <div style="padding-top:20px; float:right;">
      <el-button type="info" @click="saveOdds">保存</el-button>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import { gdsfOddsStore } from "@/pinia/modules/always_color/gdsf_odds.js";
const colNum = 6;
const lottery_type = ref("天津十分彩");
const sub_type = ref("正码和特别号");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const odds4 = ref(null);
const odds5 = ref(null);
const odds6 = ref(null);
const odds7 = ref(null);
const { dispatchGetOdds } = gdsfOddsStore();
const { dispatchSaveOdds } = gdsfOddsStore();
const saveOdds = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveOdds(odds1.value);
  await dispatchSaveOdds(odds2.value);
  await dispatchSaveOdds(odds3.value);
  await dispatchSaveOdds(odds4.value);
  await dispatchSaveOdds(odds5.value);
  await dispatchSaveOdds(odds6.value);
  await dispatchSaveOdds(odds7.value);
  loading.close();
};
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  let formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_1"
  };
  await dispatchGetOdds(formData);
  odds1.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_2"
  };
  await dispatchGetOdds(formData);
  odds2.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_3"
  };
  await dispatchGetOdds(formData);
  odds3.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_4"
  };
  await dispatchGetOdds(formData);
  odds4.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_5"
  };
  await dispatchGetOdds(formData);
  odds5.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_6"
  };
  await dispatchGetOdds(formData);
  odds6.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_7"
  };
  await dispatchGetOdds(formData);
  odds7.value = gdsfOddsStore().getOddsItem;
  loading.close();
});
</script>
<style lang="scss" scoped>
$table-border: 1px solid #5a584b;
$table-th-bgcolor: #484742;
table.TwoSide-table {
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    text-align: center;
    th {
      text-align: center;
      word-break: keep-all;
      padding: 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
      color: white
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}
</style>
