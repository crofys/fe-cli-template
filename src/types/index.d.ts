/*
 * @Description: ts 全局配置
 * @Author: 徐长剑
 * @Date: 2019-10-25 16:14:13
 * @LastEditTime: 2019-10-30 11:30:03
 * @LastEditors: 徐长剑
 */
import { RouteComponentProps, Route } from 'react-router-dom';

export interface IRouteProps extends RouteComponentProps<any> {
  route?: Route[];
}

export interface IResponse {
  code: number;
  data?: any;
  message: any;
}
