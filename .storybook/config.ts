import { configure } from '@storybook/vue';

// TODO 全部のstoriesを取得するように変更する必要あり
const req = require.context('../src/components/atoms/Button', true, /stories.ts$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
