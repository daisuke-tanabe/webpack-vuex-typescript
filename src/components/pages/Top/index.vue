<template>
  <div class="page">
    <Calculator
      :formula="formula"
      :answer="answer"
      :handleClickNumber="clickNumber"
      :handleClickOperator="clickOperator"
      :handleClickAnswer="clickAnswer"
      :handleClickClear="clickClear"
    />
  </div>
</template>

<script lang="ts">
/**
 * Container Component
 *
 * pagesディレクトリのコンポーネントは以下のような設計にしています
 *
 * - ロジック担当コンポーネント
 * - stateやactionの流し込みだけ担当する（vuexを知っている）
 * - マークアップやスタイルは原則書かない（書いてもラップ用のみ）
 */
import { Component, Vue } from 'vue-property-decorator';
import Calculator from '../../organisms/Calculator/index.vue';
import { mapActions } from 'vuex';

@Component({
  components: {
    Calculator,
  },
  methods: {
    ...mapActions(['clickNumber', 'clickOperator', 'clickAnswer', 'clickClear']),
  },
})
export default class Top extends Vue {
  get formula(): string {
    return this.$store.getters.formula.length !== 0 ? this.$store.getters.formula.join('').replace(/_/g, ' ') : null;
  }

  get answer(): number {
    return this.$store.getters.answer;
  }
}
</script>

<style scoped lang="scss">
.page {
  padding: 20px;
}
</style>
