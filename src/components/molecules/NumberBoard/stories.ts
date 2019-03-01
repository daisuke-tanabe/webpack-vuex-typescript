import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import NumberBoard from './index.vue';

const propsDescription = {
  NumberBoard: {
    handleClickNumber: '内包する数字ボタンが押された時に処理される関数',
  },
};

storiesOf('Molecules/NumberBoard', module)
  .addDecorator(withInfo)
  .add(
    'basic',
    () => ({
      components: { NumberBoard },
      template: '<NumberBoard :handleClickNumber="handleClickNumber" />',
      propsDescription,
    }),
    { info: true },
  );
