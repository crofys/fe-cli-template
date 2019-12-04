/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-10-29 11:37:32
 * @LastEditTime: 2019-11-04 13:21:32
 * @LastEditors: 徐长剑
 */
import { extend } from 'umi-request';

import { message } from 'antd';

const request = extend({
  // prefix: '/api/v1',
  timeout: 5000,
  getResponse: false,
  // credentials: 'include', // 默认请求是否带上cookie
  errorHandler: error => {
    const { response } = error;

    if (response && response.status) {
      const errorText = response.statusText || '服务器错误';
      message.error(errorText);
    }

    return response;
  },
});

request.interceptors.request.use((url: string, options: any) => {
  return {
    url: url,
    options: { ...options },
  };
});

// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
  return response;
});

export default request;
