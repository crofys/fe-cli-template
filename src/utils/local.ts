/*
 * @Description: Local
 * @Author: 徐长剑
 * @Date: 2019-10-31 10:49:28
 * @LastEditTime: 2019-10-31 11:21:34
 * @LastEditors: 徐长剑
 */

const Utils = {
  /**
   * @description 判断是不是字符串
   * @param {any} o  需要验证的参数
   * @return 返回ture flase
   */
  isObject(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String';
  },
  /**
   * @description 判断是不是对象
   * @param {any} o  需要验证的参数
   * @return 返回ture flase
   */
  isString(o: any): boolean {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  },
};

const set = (key: string, data: any): void => {
  if (Utils.isObject(data)) {
    data = JSON.stringify(data);
  }
  localStorage.setItem(key, data);
};
const get = (key: string): void => {
  let _val: any = localStorage.getItem(key) || null;
  if (Utils.isString(_val)) {
    try {
      _val = JSON.parse(_val);
    } catch (error) {
      console.error(error);
    }
  }
  return _val;
};
const clear = (): void => {
  localStorage.clear();
};
const remove = (key: string): void => {
  localStorage.removeItem(key);
};

export interface ILocal {
  set: (key: string, data: any) => void;
  get: (key: string) => void;
  clear: () => void;
  remove: (key: string) => void;
}

const Local: Readonly<ILocal> = {
  set,
  get,
  clear,
  remove,
};

export default Local;
