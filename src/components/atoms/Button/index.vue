<template>
  <button class="button" :type="type" :style="styles" @click="handleClick">{{ label }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  // @Propsの中身はvueの世界線
  // @Propsの下はdataを表していて、typescriptの世界線
  @Prop({
    type: String,
    default: '',
  })
  public label!: string;

  @Prop({
    type: String,
    default: 'button',
  })
  public type?: string;

  @Prop({
    type: String,
    default: '',
  })
  public skin?: string;

  // computed
  // TODO styled-componentsようにしたかったけど、vueはclassとstyleに寄せたほうが可読性良いかも
  get styles(): { [key: string]: string } | void {
    const color = (): string => {
      if (this.skin === 'pink') {
        return '#fff';
      }

      return '#333';
    };

    const backgroundColor = (): string => {
      if (this.skin === 'pink') {
        return '#dd0d4d';
      }

      return '#fff';
    };

    if (this.skin === 'pink') {
      return {
        '--color': color(),
        '--background-color': backgroundColor(),
      };
    }
  }

  // methods
  public handleClick(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  align-items: center;
  background-color: var(--background-color);
  border: 1px solid #dedede;
  color: var(--color);
  display: flex;
  font-size: 18px;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
}
</style>
