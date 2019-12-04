/*
 * @Description: 频道分析模块接口定义
 * @Author: 齐兵
 * @Date: 2019-11-05 15:33:56
 * @LastEditTime: 2019-11-15 15:18:12
 * @LastEditors: 齐兵
 */
import { IResponse } from '@/types'
import { IDefultParams, IChannelInfo, IPresentTrend} from './types';

import Utils from '../utils';
import Fetch from '../request';
import { IFlowAnalysisParams } from '@/pages/channelAnalysis/dayAnalysis/flowAnalysis/types';
const API_HOST = process.env.API_HOST;

//初始化接口
export const getDefultParams = (params: IDefultParams): Promise<IResponse> => {
  return Fetch.get(`${API_HOST}/channel/get-defult-parameter/json?`, {
    params: Utils.params(params)
  });
};

//频道概况
export const getChannelInfo = (params: IChannelInfo): Promise<IResponse> => {
  let { cityGroup, date, channels, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/performance-overview/${cityGroup}/${date}/${channels}/json?`, {
    params: Utils.params(_params),
  })
}

//当日走势
export const getPresentTrend = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, ..._params} = params
  return Fetch.get(`${API_HOST}/channel/performance-trend/${cityGroup}/json?`, {
    params: Utils.params(_params),
  })
}

// 节目一览
export const getProgramList = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, date, channels, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/program-summary/${cityGroup}/${date}/${channels}/json?`, {
    params: Utils.params(_params),
  })
}

//竞争分析-频道详情榜单
export const getCompetitionList = (params: IPresentTrend): Promise<IResponse> => {
  let { compareType, cityGroup, date, channelType, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/competition-list/${compareType}/${cityGroup}/${date}/${channelType}/json?`, {
    params: Utils.params(_params),
  })
}

// 收视盘点(表现分析) 频道总览

export const getBehavingSummary = (params: IPresentTrend): Promise<IResponse> => {
  let { cityGroup, channels, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/behaving-summary/${cityGroup}/${channels}/json?`, {
    params: Utils.params(_params),
  })
}

// 收视盘点(表现分析) 整体走势
export const getChannelStockTrend= (params: IPresentTrend): Promise<IResponse> => {
  let { cityGroup, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/trend/${cityGroup}/json?`, {
    params: Utils.params(_params),
  })
}

// Author: 刘玉生
// 频道分析-流动分析-流动概况
export const getInOutOverview = (params: IFlowAnalysisParams ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-overview/${date}/${cityGroup}/${channel}/json?`, {
    params: Utils.params(_params),
  })
}

// 频道分析-流动分析-流动详情
export const getInOutDetails = (params: IFlowAnalysisParams ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-details/${date}/${cityGroup}/${channel}/json?`, {
    params: Utils.params(_params),
  })
}

// 频道分析-流动分析-流动趋势
export const getInOutTrend = (params: IFlowAnalysisParams ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-trend/${cityGroup}/${date}/json?`, {
    params: Utils.params(_params),
  })
}


// 频道分析-当日分析-流动分析-流动趋势-单分钟详情
export const getInOutMinute = (params: IFlowAnalysisParams ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-minute/${cityGroup}/json?`, {
    params: Utils.params(_params),
  })
}
