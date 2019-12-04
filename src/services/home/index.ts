/*
 * @Description: 用户模块接口定义
 * @Author: 徐长剑
 * @Date: 2019-10-30 10:33:56
 * @LastEditTime: 2019-11-06 13:32:14
 * @LastEditors: 齐兵
 */
import { IResponse } from '@/types';
import { IChannelRank } from './types';

import Fetch from '../request';
import Utils from '../utils';
const API_HOST = process.env.API_HOST;

export const getChannelRank = (
  params: IChannelRank,
): Promise<IResponse> => {
  let { city, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/home/channel-rank/${city}/${channel}/json?sample_name=defult`, {
    params: Utils.params(_params),
  });
};

export const getProgramlRank = (
  params: IChannelRank,
): Promise<IResponse> => {
  let { city, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/home/program-rank/${city}/${channel}/json?sample_name=defult`, {
    params: Utils.params(_params),
  });
};
