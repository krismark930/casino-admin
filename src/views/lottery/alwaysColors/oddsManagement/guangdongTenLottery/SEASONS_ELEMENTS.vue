<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr>
              <th :colspan="2">第1球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds1.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds1.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds1.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds1.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds1.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds1.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds1.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds1.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds1.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds2 != null">
          <thead>
            <tr>
              <th :colspan="2">第2球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds2.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds2.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds2.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds2.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds2.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds2.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds2.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds2.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds2.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds3 != null">
          <thead>
            <tr>
              <th :colspan="2">第3球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds3.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds3.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds3.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds3.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds3.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds3.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds3.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds3.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds3.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds4 != null">
          <thead>
            <tr>
              <th :colspan="2">第4球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds4.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds4.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds4.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds4.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds4.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds4.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds4.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds4.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds4.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds5 != null">
          <thead>
            <tr>
              <th :colspan="2">第5球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds5.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds5.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds5.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds5.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds5.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds5.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds5.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds5.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds5.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds6 != null">
          <thead>
            <tr>
              <th :colspan="2">第6球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds6.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds6.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds6.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds6.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds6.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds6.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds6.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds6.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds6.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds7 != null">
          <thead>
            <tr>
              <th :colspan="2">第7球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds7.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds7.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds7.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds7.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds7.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds7.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds7.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds7.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds7.h9" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds8 != null">
          <thead>
            <tr>
              <th :colspan="2">第8球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">春</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">2</span>
                    <span class="num">3</span>
                    <span class="num">4</span>
                    <span class="num">5</span>
                    <el-input v-model="odds8.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">金</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">5</span>
                    <span class="num">10</span>
                    <span class="num">15</span>
                    <span class="num">20</span>
                  <el-input v-model="odds8.h5" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">夏</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">6</span>
                    <span class="num">7</span>
                    <span class="num">8</span>
                    <span class="num">9</span>
                    <span class="num">10</span>
                    <el-input v-model="odds8.h2" />
                  </div>
              </td>
              <td>
                <span class="num-group">木</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">1</span>
                    <span class="num">6</span>
                    <span class="num">11</span>
                    <span class="num">16</span>
                  <el-input v-model="odds8.h6" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">秋</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">11</span>
                    <span class="num">12</span>
                    <span class="num">13</span>
                    <span class="num">14</span>
                    <span class="num">15</span>
                    <el-input v-model="odds8.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">2</span>
                    <span class="num">7</span>
                    <span class="num">12</span>
                    <span class="num">17</span>
                  <el-input v-model="odds8.h7" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">冬</span>
                  <div style="display:flex;justify-content:center;">
                    <span class="num">16</span>
                    <span class="num">17</span>
                    <span class="num">18</span>
                    <span class="num">19</span>
                    <span class="num">20</span>
                    <el-input v-model="odds8.h4" />
                  </div>
              </td>
              <td>
                <span class="num-group">水</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">3</span>
                    <span class="num">8</span>
                    <span class="num">13</span>
                    <span class="num">18</span>
                  <el-input v-model="odds8.h8" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <span class="num-group">土</span>
                <div style="display:flex; justify-content:center;">
                    <span class="num">4</span>
                    <span class="num">9</span>
                    <span class="num">14</span>
                    <span class="num">19</span>
                  <el-input v-model="odds8.h9" />
                </div>
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
const lottery_type = ref("广东十分彩");
const sub_type = ref("四季五行");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const odds4 = ref(null);
const odds5 = ref(null);
const odds6 = ref(null);
const odds7 = ref(null);
const odds8 = ref(null);
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
  await dispatchSaveOdds(odds8.value);
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
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_8"
  };
  await dispatchGetOdds(formData);
  odds8.value = gdsfOddsStore().getOddsItem;
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
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}
.num-group {
  border: 1px solid #333333;
  padding: 5px;
  color: white;
  background: #333333;
  display: block;
  font-size: 10px;
  margin-bottom: 2px;
}
.num {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  background-repeat: no-repeat;
}
</style>
