<template>
  <div style="padding: 1rem;">
    <AGRecord />
    <OGRecord />
    <BBRecord />
    <MGRecord />
    <PTRecord />
    <ChessRecord />
  </div>
</template>
<script>
import AGRecord from '@/views/system-setting/conversionRecords/AGconversionRecord/index.vue'
import OGRecord from '@/views/system-setting/conversionRecords/OGconversionRecord/index.vue'
import BBRecord from '@/views/system-setting/conversionRecords/BBconversionRecord/index.vue'
import MGRecord from '@/views/system-setting/conversionRecords/MGconversionRecord/index.vue'
import PTRecord from '@/views/system-setting/conversionRecords/PTconversionRecord/index.vue'
import ChessRecord from '@/views/system-setting/conversionRecords/ChessconversionRecord/index.vue'

export default {
  components: {
    AGRecord,
    OGRecord,
    BBRecord,
    MGRecord,
    PTRecord,
    ChessRecord,
  },
}
</script>
<style lang="scss" scoped></style>
