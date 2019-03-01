<template>
  <button class="button" :type="type" :style="styles" @click="handleClick">{{ label }}</button>
</template>

<script lang="ts">
/**
 * Presentational Component
 *
 * pagesディレクトリ以外のコンポーネントは以下のような設計にしています
 *
 * - 受け取った値を元に描写するだけ
 * - マークアップやスタイルをゴリゴリ書く
 */

// import: node_modules
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

interface Map {
  [key: string]: string;
}

interface SkinProp<M> {
  [key: string]: M;
}

const skinProp: SkinProp<Map> = {
  '': {
    color: '#333',
    'background-color': '#fff',
  },
  pink: {
    color: '#fff',
    'background-color': '#dd0d4d',
  },
};

@Component
export default class Button extends Vue {
  /**
   * @で始まる記述について
   * https://github.com/kaorun343/vue-property-decorator
   * ---
   * @Prop({ ... })
   * public hoge!: string;
   * ---
   *
   * vueのpropsと同じオブジェクトを中に書く
   * ---
   * @Prop({ ... })
   * ---
   *
   * vueのdataと同様
   * 「hoge」後ろのエクスクラメーションマーク（びっくりマーク）は必ず値が入ることを保証し、constructorでの初期化を省く
   * 基本的に@Propsの中でdefaultが定義されているプロパティには書く
   * 他には意図しないプロパティがライブラリから提供される場合に利用する
   * ---
   * public hoge!: string;
   * ---
   */

  @Prop({
    type: String,
    default: '',
  })
  private label?: string;

  @Prop({
    type: String,
    default: 'button',
  })
  private type!: string;

  @Prop({
    type: String,
    default: '',
  })
  private skin!: string;

  // computed
  get styles() {
    return {
      '--color': skinProp[this.skin].color,
      '--background-color': skinProp[this.skin]['background-color'],
    };
  }

  @Emit('click')
  private handleClick(event: Event): Event {
    return event;
  }
}
</script>

<style scoped lang="scss">
// スタイルが必要とする変数はscriptに書いた
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
