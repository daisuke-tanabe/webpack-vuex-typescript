import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import OperatorBoard from './index.vue';

const propsDescription = {
  OperatorBoard: {
    handleClickOperator: '内包する演算子ボタンが押された時に処理される関数',
    handleClickAnswer: '内包するイコールボタンが押された時に処理される関数',
  },
};

storiesOf('Molecules/OperatorBoard', module)
  .addDecorator(withInfo)
  .add(
    'basic',
    () => ({
      components: { OperatorBoard },
      template: '<OperatorBoard :handleClickOperator="handleClickOperator" :handleClickAnswer="handleClickAnswer" />',
      propsDescription,
    }),
    { info: true },
  );
