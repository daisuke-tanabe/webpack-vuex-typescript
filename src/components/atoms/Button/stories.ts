import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import Button from './index.vue';

const propsDescription = {
  Button: {
    label: 'ラベルの表示',
    type: 'buttonタグのtype属性',
    skin: 'スキンの変更',
  },
};

storiesOf('Button', module)
  // TODO typeライブラリがないため一旦ignore
  // @ts-ignore
  .addDecorator(withInfo)
  .add(
    'button type',
    () => ({
      components: { Button },
      template: '<Button label="Button" @click="action">',
      methods: { action: action('click') },
      propsDescription,
    }),
    { info: true },
  )
  .add(
    'submit type',
    () => ({
      components: { Button },
      template: '<Button label="Button" type="submit" @click="action">',
      methods: { action: action('click') },
      propsDescription,
    }),
    { info: true },
  )
  .add(
    'skin',
    () => ({
      components: { Button },
      template: '<Button label="Button" skin="pink" @click="action" />',
      methods: { action: action('click') },
      propsDescription,
    }),
    { info: true },
  );
