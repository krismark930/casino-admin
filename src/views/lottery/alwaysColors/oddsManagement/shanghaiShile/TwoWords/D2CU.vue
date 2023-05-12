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
            <td>00X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>01X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>02X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>03X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>04X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>05X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>06X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>07X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>08X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>09X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>10X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>11X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>12X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>13X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>14X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>15X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>16X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>17X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>18X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>19X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>20X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>21X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>22X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>23X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>24X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>25X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>26X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>27X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>28X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>29X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>30X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>31X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>32X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>33X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>34X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>35X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>36X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>37X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>38X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>39X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>40X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>41X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h41" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>42X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h42" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>43X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h43" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>44X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h44" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>45X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h45" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>46X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h46" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>47X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h47" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>48X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h48" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>49X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h49" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>50X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>51X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>52X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>53X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>54X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>55X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>56X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>57X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>58X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>59X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>60X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>61X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>62X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>63X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>64X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>65X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>66X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>67X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>68X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>69X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>70X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>71X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>72X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>73X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>74X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>75X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>76X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>77X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>78X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>79X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>80X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>81X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>82X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>83X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>84X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>85X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>86X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>87X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>88X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>89X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>90X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>91X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h41" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>92X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h42" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>93X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h43" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>94X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h44" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>95X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h45" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>96X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h46" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>97X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h47" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>98X</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h48" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>99X</td>
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
const lottery_type = ref("上海时时乐");
const sub_type = ref("拾个定位");
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
  };
  await dispatchGetOdds1(formData);
  const { getB5OddsItem1 } = storeToRefs(b5OddsStore());
  odds1.value = getB5OddsItem1.value;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: part2.value,
  };
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
