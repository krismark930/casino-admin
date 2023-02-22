<template>
  <div style="padding: 1rem;">
    <SystemSMS />
    <Statistics />
  </div>
</template>
<script>
import SystemSMS from './systemSMS.vue'
import Statistics from './statistics.vue'
import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop({
  diameter: 40,
  backgroundColor: 'white',
  textColor: '#409eff',
})
export default {
  components: {
    SystemSMS,
    Statistics,
  },
}
</script>
<style lang="scss" scoped></style>
