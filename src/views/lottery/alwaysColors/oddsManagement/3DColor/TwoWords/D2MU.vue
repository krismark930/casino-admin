<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <thead>
          <tr>
            <template v-for="l in colNum" :key="l">
              <th>号码</th>
              <th>赔率</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-if="odds1 != null">
            <td>0X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>0X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>0X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>1X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>1X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>2X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>2X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>3X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>3X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>4X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h41" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h42" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h43" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h44" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>4X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h45" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h46" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h47" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h48" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h49" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>5X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>5X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>5X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>6X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>6X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>7X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>7X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>8X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>8X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>9X0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h41" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h42" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h43" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h44" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>9X5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h45" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h46" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h47" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h48" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9X9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h49" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <div style="padding-top: 20px; float: right">
    <el-button type="info" @click="saveB5Odds">保存</el-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import { b5OddsStore } from "@/pinia/modules/always_color/b5_odds.js";
const loading = ref(false);
const lottery_type = ref("3D彩");
const sub_type = ref("佰个定位");
const part1 = ref("part1");
const part2 = ref("part2");
const colNum = 5;
const odds1 = ref(null);
const odds2 = ref(null);
const { dispatchGetOdds1 } = b5OddsStore();
const { dispatchGetOdds2 } = b5OddsStore();
const { dispatchSaveOdds } = b5OddsStore();
const saveB5Odds = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveOdds(odds1.value);
  await dispatchSaveOdds(odds2.value);
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
    ball_type: part1.value,
  }
  await dispatchGetOdds1(formData);
  const { getB5OddsItem1 } = storeToRefs(b5OddsStore());
  odds1.value = getB5OddsItem1.value;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: part2.value,
  }
  await dispatchGetOdds2(formData);
  const { getB5OddsItem2 } = storeToRefs(b5OddsStore());
  odds2.value = getB5OddsItem2.value;
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
</style>
