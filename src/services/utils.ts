/*
 * @Description: 工具方法
 * @Author: 徐长剑
 * @Date: 2019-10-30 11:47:01
 * @LastEditTime: 2019-11-08 16:54:25
 * @LastEditors: 刘玉生
 */

import Cookies from '@/utils/cookie';

export default {
  params<T>(params: T): T {
    const Users = Cookies.get('TV_ZONE_USERS') || {};
    if (!Users.email) return params;
    if (typeof params === 'object') {
      (params as any).email = Users.email;
    }
    return params;
  },
};
