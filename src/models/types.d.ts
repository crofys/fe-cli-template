/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-10-30 13:54:12
 * @LastEditTime: 2019-12-04 11:26:02
 * @LastEditors: 徐长剑
 */
import { AnyAction } from 'redux';
import { IGlobalState } from './index';
import { IUsersState } from './users';


export { IUsersState };

export interface IConnectProps {
  dispatch: (action: AnyAction) => any;
  users: IUsersState;
  global: IGlobalState;
}
