import { configure, addDecorator } from '@storybook/vue';
import Decorator from './Decorator';

addDecorator(() => ({
  components: { Decorator },
  template: `<decorator>
      <story slot="story"></story>
    </decorator>`,
}));

const readFiles = [
  require.context('../src/components/atoms', true, /stories.ts$/),
  require.context('../src/components/molecules', true, /stories.ts$/),
  require.context('../src/components/organisms', true, /stories.ts$/),
];

function loadStories() {
  readFiles.forEach((file) => {
    file.keys().forEach((filename) => file(filename));
  });
}

configure(loadStories, module);
