const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  /**
   * Fix TypeScript alias paths
   * @see https://github.com/storybookjs/storybook/issues/6316#issuecomment-659726964
   */
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};
