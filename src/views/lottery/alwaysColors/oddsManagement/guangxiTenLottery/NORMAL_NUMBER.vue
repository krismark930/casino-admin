<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码一特</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h15"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name red">红波</span>
                    <el-input v-model="odds1.h22"></el-input>
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
                      type="success"
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
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h16"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name blue">蓝波</span>
                    <el-input v-model="odds1.h23"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
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
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h17"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name green">绿波</span>
                  <el-input v-model="odds1.h24"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h18"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name">大单</span>
                  <el-input v-model="odds1.h25"></el-input>
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
                      type="success"
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
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h19"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds1.h20"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="succss"
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
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h20"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">小单</span>
                    <el-input v-model="odds1.h27"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="21"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h21"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds1.h28"></el-input>
                </td>
            </tr>
            <tr>
              <th>特大</th>
              <th>特单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds1.h29"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h31"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h33"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h35"></el-input>
              </td>
            </tr>
            <tr>
              <th>特小</th>
              <th>特双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds1.h30"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h32"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h34"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h36"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds2 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码二特</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h15"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name red">红波</span>
                    <el-input v-model="odds2.h22"></el-input>
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
                      type="success"
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
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h16"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name blue">蓝波</span>
                    <el-input v-model="odds2.h23"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
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
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h17"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name green">绿波</span>
                  <el-input v-model="odds2.h24"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h18"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name">大单</span>
                  <el-input v-model="odds2.h25"></el-input>
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
                      type="success"
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
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h19"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds2.h20"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="succss"
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
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h20"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">小单</span>
                    <el-input v-model="odds2.h27"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="21"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h21"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds2.h28"></el-input>
                </td>
            </tr>
            <tr>
              <th>特大</th>
              <th>特单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds2.h29"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h31"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h33"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h35"></el-input>
              </td>
            </tr>
            <tr>
              <th>特小</th>
              <th>特双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds2.h30"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h32"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h34"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h36"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds3 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码三特</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h15"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name red">红波</span>
                    <el-input v-model="odds3.h22"></el-input>
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
                      type="success"
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
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h16"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name blue">蓝波</span>
                    <el-input v-model="odds3.h23"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
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
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h17"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name green">绿波</span>
                  <el-input v-model="odds3.h24"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h18"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name">大单</span>
                  <el-input v-model="odds3.h25"></el-input>
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
                      type="success"
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
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h19"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds3.h20"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="succss"
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
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h20"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">小单</span>
                    <el-input v-model="odds3.h27"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="21"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h21"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds3.h28"></el-input>
                </td>
            </tr>
            <tr>
              <th>特大</th>
              <th>特单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds3.h29"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h31"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h33"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h35"></el-input>
              </td>
            </tr>
            <tr>
              <th>特小</th>
              <th>特双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds3.h30"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h32"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h34"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h36"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds4 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码四特</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h15"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name red">红波</span>
                    <el-input v-model="odds4.h22"></el-input>
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
                      type="success"
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
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h16"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name blue">蓝波</span>
                    <el-input v-model="odds4.h23"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
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
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h17"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name green">绿波</span>
                  <el-input v-model="odds4.h24"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h18"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name">大单</span>
                  <el-input v-model="odds4.h25"></el-input>
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
                      type="success"
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
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h19"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds4.h20"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="succss"
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
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h20"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">小单</span>
                    <el-input v-model="odds4.h27"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      type="success"
                      value="21"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h21"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds4.h28"></el-input>
                </td>
            </tr>
            <tr>
              <th>特大</th>
              <th>特单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds4.h29"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h31"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h33"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h35"></el-input>
              </td>
            </tr>
            <tr>
              <th>特小</th>
              <th>特双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds4.h30"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h32"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h34"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h36"></el-input>
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
const lottery_type = ref("广西十分彩");
const sub_type = ref("正码和特别号");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const odds4 = ref(null);
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
  }
  await dispatchGetOdds(formData);
  odds1.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_2"
  }
  await dispatchGetOdds(formData);
  odds2.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_3"
  }
  await dispatchGetOdds(formData);
  odds3.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_4"
  }
  await dispatchGetOdds(formData);
  odds4.value = gdsfOddsStore().getOddsItem;
  loading.close();
});
</script>
<style lang="scss" scoped>
$table-border: 1px solid #5a584b;
$table-th-bgcolor: #484742;
.red {
  background: #f56c6c !important;
}
.blue {
  background: #409eff !important;
}
.green {
  background: green !important;
}
.choose-name {
    border: 1px solid #333333;
    padding: 5px;
    color: white;
    background: #333333;
    display: block;
    font-size: 10px;
    margin-bottom: 2px;
}
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
