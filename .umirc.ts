/*
 * @Description: 配置文件
 * @Author: 徐长剑
 * @Date: 2019-10-25 16:14:13
 * @LastEditTime: 2019-12-04 11:40:57
 * @LastEditors: 徐长剑
 */
import path from 'path'
import { IConfig } from 'umi-types'

const theme = require('./src/theme/tv-zone.theme.ts')

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  targets: {
    ie: 9,
    chrome: 40,
  },
  define: {
    'process.env.API_HOST': 'http://cloud.huan.tv/tv-zone-business-api-test',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          path: '/home',
          component: './home',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  theme,
  alias: {
    '@': path.join(__dirname, '/src'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: '电视社区',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
}

export default config
