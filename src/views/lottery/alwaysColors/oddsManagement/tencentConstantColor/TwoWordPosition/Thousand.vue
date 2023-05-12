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
            <td>00</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>01</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>02</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>03</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>04</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>05</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>06</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>07</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>08</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>09</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>10</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>11</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>12</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>13</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>14</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>15</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>16</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>17</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>18</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>19</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>20</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>21</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>22</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>23</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>24</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>25</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>26</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>27</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>28</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>29</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>30</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>31</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>32</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>33</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>34</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>35</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>36</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>37</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>38</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>39</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>40</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>41</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h41" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>42</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h42" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>43</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h43" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>44</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h44" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>45</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h45" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>46</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h46" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>47</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h47" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>48</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h48" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>49</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h49" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>50</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>51</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>52</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>53</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>54</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>55</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>56</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>57</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>58</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>59</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>60</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>61</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>62</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>63</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>64</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>65</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>66</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>67</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>68</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>69</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>70</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>71</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>72</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>73</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>74</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>75</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>76</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>77</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>78</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>79</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>80</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>81</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>82</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>83</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>84</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>85</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>86</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>87</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>88</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>89</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>90</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>91</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h41" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>92</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h42" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>93</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h43" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>94</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h44" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>95</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h45" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>96</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h46" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>97</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h47" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>98</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h48" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>99</td>
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
const lottery_type = ref("腾讯时时彩");
const sub_type = ref("仟个定位");
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
