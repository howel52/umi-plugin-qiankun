import { name } from './package';

export default {
  base: '/app1',
  history: 'browser',
  publicPath: '/app1/',
  outputPath: './dist/app1',
  mountElementId: 'app1',
  plugins: [
    ['../../slave.js'],
    [
      'umi-plugin-react',
      {
        title: 'app1',
        antd: true,
        dva: {
          immer: true,
          hmr: true,
        },
        dynamicImport: true,
        routes: {
          exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/],
        },
      },
    ],
  ],
};
