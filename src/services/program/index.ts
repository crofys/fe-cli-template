/*
 * @Description: 
 * @Author: 刘玉生
 * @Date: 2019-11-19 15:55:27
 * @LastEditTime: 2019-11-19 17:14:56
 * @LastEditors: 刘玉生
 */
import { IResponse } from '@/types'
import { IProgramList, IDefultParamete } from './types';

import Utils from '../utils';
import Fetch from '../request';

const API_HOST = process.env.API_HOST;

/**
 * 节目分析-初始化数据
 */
export const getDefultParameter = (params: IDefultParamete): Promise<IResponse> => {
  return Fetch.get(`${API_HOST}/program/get-defult-parameter/json?`, {
    params: Utils.params(params),
  })
}

/**
 * 节目分析分析-获取所有节目
 */
export const filterfeldProgram = (params: IProgramList): Promise<IResponse> => {
  const { range } = params
  return Fetch.get(`${API_HOST}/program/filterfeld-program-list/${range}/json?`, {
    params: Utils.params(params),
  })
}
