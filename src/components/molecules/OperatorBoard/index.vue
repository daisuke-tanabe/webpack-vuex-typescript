<template>
  <ul class="operator-board">
    <li class="operator-board__item" v-for="operator in operators">
      <Button v-if="operator === '＝'" :label="operator" skin="pink" @click="handleClickAnswer" />
      <Button v-else :label="operator" @click="handleClickOperator" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '../../atoms/Button/index.vue';

@Component({
  components: {
    Button,
  },
})
export default class OperatorBoard extends Vue {
  private operators: string[] = ['÷', '×', '＋', '−', '＝'];

  private handleClickOperator(event: Event): void {
    const eventTarget = event.target;

    if (eventTarget instanceof HTMLElement) {
      this.$store.dispatch('clickOperator', eventTarget.innerText);
    }
  }

  private handleClickAnswer(event: Event): void {
    const eventTarget = event.target;

    if (eventTarget instanceof HTMLElement) {
      this.$store.dispatch('clickAnswer', eventTarget.innerText);
    }
  }
}
</script>

<style scoped lang="scss">
.operator-board {
  grid-area: operator-board;
  display: grid;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
</style>
