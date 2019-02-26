module.exports = (base, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post',
  });

  return defaultConfig;
};
