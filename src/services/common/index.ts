/*
 * @Description: 用户模块接口定义
 * @Author: 徐长剑
 * @Date: 2019-10-30 10:33:56
 * @LastEditTime: 2019-11-04 15:24:54
 * @LastEditors: 齐兵
 */
import { IResponse } from '@/types'

import Fetch from '../request';
const API_HOST = process.env.API_HOST;



export const getChannelList = (): Promise<IResponse> => {
  return Fetch.get(`${API_HOST}/common/get-channel-list/json`, {})
}
