/*
 * @Description: 入口文件
 * @Author: 徐长剑
 * @Date: 2019-10-25 16:14:13
 * @LastEditTime: 2019-11-20 14:13:12
 * @LastEditors: 刘玉生
 */
import Store from 'store';
// import Cookies from 'js-cookie';

export const dva = {
  config: {
    onStateChange: (state: any) => {
      const { global, users } = state;
      Store.set('TV_ZONE_GLOBAL', global);
    },
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
