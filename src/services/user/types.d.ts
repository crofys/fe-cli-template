/*
 * @Description: user.d.ts
 * @Author: 徐长剑
 * @Date: 2019-10-30 10:40:11
 * @LastEditTime: 2019-11-04 17:39:29
 * @LastEditors: 徐长剑
 */
export interface ILogin {
  email: string; //邮箱
  password: string; //密码（MD5加密后）
}
export interface ISendCode {
  phone: number; //手机号
}
export interface IResetPassword {
  phone: number; //手机号
  auth_code: number; //验证码
}
export interface IInitPassword {
  phone: number; //手机号
  password: string; //密码（MD5加密后
}
export interface IModifyPassword extends IInitPassword{
  new_password: string; //密码（MD5加密后
}
export interface ICheckUserInfo {
  phone: number; //手机号
  user_name: string; //用户名
  email: string; //邮箱
  company: string; //公司
  position: string; //职位
  auth_code: string; //验证码
}
export interface IRegister extends ICheckUserInfo {
  password: string; //密码（MD5加密后）
}
