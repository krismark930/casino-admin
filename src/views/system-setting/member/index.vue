<template>
  <div style="padding: 1rem;">
    <MemberDeposit />
    <MemberWithdrawal />
    <MemberInformation />
    <MemberContactInformation />
  </div>
</template>
<script>
import MemberDeposit from '@/views/system-setting/member/memberDeposit/index.vue'
import MemberWithdrawal from '@/views/system-setting/member/memberWithdrawal/index.vue'
import MemberInformation from '@/views/system-setting/member/memberInformation/index.vue'
import MemberContactInformation from '@/views/system-setting/member/memberContactInformation/index.vue'

export default {
  components: {
    MemberDeposit,
    MemberWithdrawal,
    MemberInformation,
    MemberContactInformation,
  },
}
</script>
<style lang="scss" scoped></style>
