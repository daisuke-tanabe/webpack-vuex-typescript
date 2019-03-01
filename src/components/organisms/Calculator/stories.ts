import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Calculator from './index.vue';

const propsDescription = {
  Calculator: {
    formula: 'storeのformulaを受け取る',
    answer: 'storeのanswerを受け取る',
    handleClickNumber: '内包するNumberBoardの数字ボタンが押された時に処理される関数',
    handleClickOperator: '内包するOperatorBoardの数字ボタンが押された時に処理される関数',
    handleClickAnswer: '内包するOperatorBoardのイコールボタンが押された時に処理される関数',
    handleClickClear: '内包するクリアボタンが押された時に処理される関数',
  },
};

storiesOf('Organisms/Calculator', module)
  .addDecorator(withInfo)
  .add(
    'basic',
    () => ({
      components: { Calculator },
      template: `<Calculator
  :formula="formula"
  :answer="answer"
  :handleClickNumber="clickNumber"
  :handleClickOperator="clickOperator"
  :handleClickAnswer="clickAnswer"
  :handleClickClear="clickClear"
/>`,
      propsDescription,
    }),
    { info: true },
  );
