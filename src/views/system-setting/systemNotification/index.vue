<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; text-align: center; margin: 1rem;"
  >
    <Content />
    <OnlineData />
  </div>
</template>
<script>
import Content from './content.vue'
import OnlineData from './onlineData.vue'
import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop({
  diameter: 40,
  backgroundColor: 'white',
  textColor: '#409eff',
})
export default {
  components: {
    Content,
    OnlineData,
  },
}
</script>
<style lang="scss" scoped></style>
