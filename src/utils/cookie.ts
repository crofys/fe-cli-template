/*
 * @Description: Local
 * @Author: 徐长剑
 * @Date: 2019-10-31 10:49:28
 * @LastEditTime: 2019-10-31 15:06:55
 * @LastEditors: 徐长剑
 */
import Cookies from 'js-cookie';

const Utils = {
  /**
   * @description 判断是不是字符串
   * @param {any} o  需要验证的参数
   * @return 返回ture flase
   */
  isObject(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  },
  /**
   * @description 判断是不是对象
   * @param {any} o  需要验证的参数
   * @return 返回ture flase
   */
  isString(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String';
  },
};

interface ICookie {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
}

export interface ILocal {
  set: (key: string, data: any, option?: ICookie) => void;
  get: (key: string) => any;
  clear: () => void;
  remove: (key: string, option?: ICookie) => void;
}

const Cookie: Readonly<ILocal> = {
  set: (
    key: string,
    data: any,
    option?: ICookie,
  ): void => {
    const { expires = 1, path = '/', domain = '', secure = false } = option || {}
    if (Utils.isObject(data)) {
      data = JSON.stringify(data);
    }
    Cookies.set(key, data, { expires, path, domain, secure });
  },
  get: (key: string): any => {
    let _val: any = Cookies.get(key) || null;
    if (Utils.isString(_val)) {
      try {
        _val = JSON.parse(_val);
      } catch (error) {
        console.error(error);
      }
    }
    return _val;
  },
  clear: (): void => {
    document.cookie = '';
  },
  remove: (key: string, option?: ICookie): void => {
    const { path = '/', domain = '' } = option || {}
    Cookies.remove(key, { path, domain });
  },
};

export default Cookie;
