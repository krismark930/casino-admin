<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.checkScores2') }}</h3>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { GetItemById, UpdateItem } from '@/api/sports/check-scores2'
import ChangeLang from '@/layout/components/Topbar/ChangeLang.vue'
import { checkScores, common } from '@/i18n'

export default defineComponent({
  components: { ChangeLang },
  name: 'checkScores2Operate',
  setup() {
    const router = useRouter()
    const state = reactive({
      checkForm: {},
      id: router.currentRoute._rawValue.params.id,
      step: 0,
      item: {},
      scores: [],
      loading: false,
      checkScores,
      form: ref(null),
      submit: () => {
        if (state.loading) {
          return
        }

        state.loading = true
        GetItemById({ id: state.id })
          .then(data => {
            state.item = data[0]
            state.item.MB_Inball = Number(state.item.MB_Inball)
            state.item.TG_Inball = Number(state.item.TG_Inball)
            state.item.MB_Inball_HR = Number(state.item.MB_Inball_HR)
            state.item.TG_Inball_HR = Number(state.item.TG_Inball_HR)
            state.loading = false
          })
          .catch(err => {
            console.log(err)
            state.loading = false
          })
      },
      checkScore: () => {
        state.loading = true
        CheckScore({ id: state.id, item: state.item })
          .then(res => {
            if (res.code == 'settled') {
              console.log(res.message)
            } else {
              state.scores = res
            }
            state.loading = false
          })
          .catch(err => {
            console.log(err)
            state.loading = false
          })
      },
      saveScore: () => {
        state.loading = true
        UpdateItem({ id: state.id, item: state.item })
          .then(res => {
            if (res.code == 0) console.log(res.message)
            state.loading = false
          })
          .catch(err => {
            console.log(err)
            state.loading = false
          })
      },
      back: () => {
        router.go(-1)
      },
    })

    onBeforeMount(() => {
      state.submit()
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</script>