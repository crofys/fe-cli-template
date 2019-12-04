/*
 * @Description: global models
 * @Author: 徐长剑
 * @Date: 2019-10-28 18:34:41
 * @LastEditTime: 2019-12-04 11:26:34
 * @LastEditors: 徐长剑
 */
import Cookies from '@/utils/cookie';

import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface IUsersState {
  email: string;
  phone: number | string;
  role: string;
  user_name: string;
}
export interface IUsersModel {
  namespace: string;
  state: IUsersState;
  reducers: {
    UPDATE: Reducer<IUsersState>;
  };
  effects: {
    login: Effect;
    loginOut: Effect;
  };
}

const InitState: Readonly<IUsersState> = {
  email: '',
  phone: '',
  role: '',
  user_name: '',
};
const UserModel: IUsersModel = {
  namespace: 'users',
  state: Cookies.get('_USERS') || InitState,
  reducers: {
    UPDATE(state, { payload }): IUsersState {
      const { data = {}, expires } = payload;
      const _state = { ...state, ...data };
      Cookies.set('_USERS', _state, { expires });
      return _state;
    },
  },
  effects: {
    *login({ data }, { put }) {
      yield put({
        type: 'UPDATE',
        payload: {
          data,
          expires: 0.03,
        },
      });
    },
    *loginOut({}, { put }) {
      yield put({
        type: 'UPDATE',
        payload: {
          data: InitState,
          expires: 0,
        },
      });
    },
  },
};
export default UserModel;
