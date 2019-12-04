/*
 * @Description: 用户模块接口定义
 * @Author: 徐长剑
 * @Date: 2019-10-30 10:33:56
 * @LastEditTime: 2019-11-04 17:21:40
 * @LastEditors: 徐长剑
 */
import { IResponse } from '@/types';
import {
  ILogin,
  ISendCode,
  IResetPassword,
  IModifyPassword,
  ICheckUserInfo,
  IRegister,
} from './types';

import fetch from '../request';
const API_HOST = process.env.API_HOST;

/**
 * @description 登录
 * @interface ILogin
 */
export const Login = (params: ILogin): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/login/json`, {
    params,
  });
};
/**
 * @description 发送 修改密码 验证码
 * @interface ISendCode
 */
export const SendCode = (params: ISendCode): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/send-auth-code-pwd/json`, {
    params,
  });
};

/**
 * @description 重置密码
 * @interface IResetPassword
 */
export const ResetPassword = (params: IResetPassword): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/check-auth-code/json`, {
    params,
  });
};
/**
 * @description 初始密码
 * @interface IEditPassword
 */
export const EditPassword = (params: IModifyPassword): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/init-password/json`, {
    params,
  });
};
/**
 * @description 修改密码
 * @interface IEditPassword
 */
export const ModifyPassword = (params: IModifyPassword): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/update-password/json`, {
    params,
  });
};
/**
 * @description 查询用户是否注册
 * @interface IEditPassword
 */
export const CheckUserInfo = (params: ICheckUserInfo): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/check-user-info/json`, {
    params,
  });
};
/**
 * @description 注册
 * @interface IEditPassword
 */
export const Register = (params: IRegister): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/register/json`, {
    params,
  });
};
/**
 * @description 发送 注册 验证码
 * @interface ISendCode
 */
export const SendRegisterCode = (params: ISendCode): Promise<IResponse> => {
  return fetch.get(`${API_HOST}/user/send-auth-code-register//json`, {
    params,
  });
};
