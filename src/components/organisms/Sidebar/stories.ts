import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Sidebar from './index.vue';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(withInfo)
  .add(
    'basic',
    () => ({
      components: { Sidebar },
      template: '<Sidebar />',
    }),
    { info: true },
  );
