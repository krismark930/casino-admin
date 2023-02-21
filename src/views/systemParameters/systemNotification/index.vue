<template>
  <div style="padding: 1rem;">
    <Content />
    <OnlineData />
  </div>
</template>
<script>
import Content from './content.vue'
import OnlineData from './onlineData.vue'
export default {
  components: {
    Content,
    OnlineData,
  },
}
</script>
<style lang="scss" scoped></style>
