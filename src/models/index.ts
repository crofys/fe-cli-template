/*
 * @Description: global models
 * @Author: 徐长剑
 * @Date: 2019-10-28 18:34:41
 * @LastEditTime: 2019-10-31 13:26:02
 * @LastEditors: 徐长剑
 */
import store from 'store';

import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface IGlobalState {
  login_visible: boolean;
}
export interface IGlobalModel {
  namespace: string;
  state: IGlobalState;
  reducers: {
    SHOW_HIDDEN_LOGIN: Reducer<IGlobalState>;
  };
  effects: {
    showHiddenLogin: Effect;
  };
}

const InitState: Readonly<IGlobalState> = store.get('TV_ZONE_GLOBAL') || {
  login_visible: false,
};
export default {
  namespace: 'global',
  state: InitState,
  reducers: {
    SHOW_HIDDEN_LOGIN(state: any, { payload }: any) {
      const _state = { ...state, login_visible: payload };
      return _state;
    },
  },
  effects: {
    *showHiddenLogin({ payload }: any, { put }: any) {
      yield put({ type: 'SHOW_HIDDEN_LOGIN', payload });
    },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {},
  },
};
