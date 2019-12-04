/*
 * @Description: 常量配置文件
 * @Author: 徐长剑
 * @Date: 2019-12-04 11:30:10
 * @LastEditTime: 2019-12-04 11:33:02
 * @LastEditors: 徐长剑
 */
export const MENU_LIST: any[] = [
  {
    name: '首页',
    icon: 'home',
    key: 'home',
    link: '/home/channelRank',
  },
  {
    name: '频道分析',
    icon: 'play-square',
    key: 'channelAnalysis',
    childern: [
      {
        name: '当日分析',
        key: 'channelAnalysis-dayAnalysis',
        link: '/channelAnalysis/dayAnalysis/performanceAnalysis',
      },
      {
        name: '收视盘点',
        key: 'channelAnalysis-viewingInventory',
        link: '/channelAnalysis/viewingInventory',
      },
    ],
  },
  {
    name: '节目分析',
    icon: 'eye',
    key: 'programAnalysis',
    childern: [
      {
        name: '当日分析',
        key: 'programAnalysis-dayAnalysis',
        link: '/programAnalysis/dayAnalysis/performanceAnalysis',
      },
      {
        name: '收视盘点',
        key: 'programAnalysis-  viewingInventory',
        link: '/programAnalysis/viewingInventory',
      },
    ],
  },
];
