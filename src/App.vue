<!--
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-26 12:14:10
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->
<template>
  <el-config-provider :locale="locales[lang]">
    <router-view />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import useLang from '@/i18n/useLang'
import socket from "@/utils/socket";
import zhudanFile from '@/assets/audio/zhudan.wav';
import depositFile from '@/assets/audio/deposit.mp3';
import withdrawFile from '@/assets/audio/withdraw.mp3';

export default defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const { lang } = useLang()
    return {
      lang,
      locales: {
        'zh-cn': localeZH,
        en: localeEN,
      },
    }
  },
  data() {
    return {
      interval: null,
      depositInterval: null,
      withdrawInterval: null      
    }
  },
  sockets: {
    monitorUser() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        const audio = new Audio(zhudanFile);
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(()=> {

          })
          .catch(error => {
          });
        }
      }, 5000)
    },
    submitWithdrawAlert() {
      clearInterval(this.withdrawInterval);
      this.withdrawInterval = setInterval(() => {
        const audio = new Audio(withdrawFile);
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(()=> {

          })
          .catch(error => {
            console.log(error);
          });
        }
      }, 5000)
    },
    submitDepositAlert() {
      clearInterval(this.depositInterval);
      this.depositInterval = setInterval(() => {
        const audio = new Audio(depositFile);
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(()=> {

          })
          .catch(error => {
            console.log(error);
          });
        }
      }, 5000)
    },
  },
  mounted() {
  }
})
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  * {
    outline: none;
  }
}
</style>
