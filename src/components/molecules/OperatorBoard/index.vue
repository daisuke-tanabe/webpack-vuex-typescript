<template>
  <ul class="operator-board">
    <li class="operator-board__item" v-for="operator in operators">
      <Button v-if="operator === '＝'" :text="operator" skin="pink" @click="handleClickAnswer" />
      <Button v-else :text="operator" @click="handleClickOperator" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '../../atoms/Button/index.vue';

@Component({
  components: {
    Button,
  },
})
export default class OperatorBoard extends Vue {
  @Prop({
    type: Array,
    default: [],
  })
  public operators!: string[];

  public handleClickOperator(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$store.dispatch('clickOperator', event.target.innerText);
    }
  }

  public handleClickAnswer(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$store.dispatch('clickAnswer', event.target.innerText);
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
