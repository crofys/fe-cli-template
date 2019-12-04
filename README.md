# 电视社区

<a name="35c356b5"></a>
# 电视社区

![](https://badgen.net/badge/node/12.10.0/green#align=left&display=inline&height=20&originHeight=20&originWidth=90&search=&status=done&width=90#align=left&display=inline&height=20&originHeight=20&originWidth=90&search=&status=done&width=90) ![](https://badgen.net/badge/react/16.8.6/cyan#align=left&display=inline&height=20&originHeight=20&originWidth=84&search=&status=done&width=84#align=left&display=inline&height=20&originHeight=20&originWidth=84&search=&status=done&width=84) ![](https://badgen.net/badge/typescript/3.7.2/blue#align=left&display=inline&height=20&originHeight=20&originWidth=104&search=&status=done&width=104#align=left&display=inline&height=20&originHeight=20&originWidth=104&search=&status=done&width=104)

<a name="61a3ec66"></a>
## 介绍

> csm-huan 产品  支持H5，PC,微信小程序；


- Tapd:[ https://www.tapd.cn/21795971](https://www.tapd.cn/21795971)
- gitlab: [http://gitlab-bigdata.huan.tv/FE/tv-community-web](http://gitlab-bigdata.huan.tv/FE/tv-community-web)


<a name="01a02133"></a>
## 技术栈

- [React](https://doc.react-china.org)
- [Umi](https://umijs.org/)
- [Typescript](https://www.tslang.cn/)


<a name="fe167cea"></a>
## 项目构建


<a name="224e2ccd"></a>
### 配置


<a name="22d7a27a"></a>
#### 欢网

> - 后端接口域名：
>   - 正式环境：[http://cloud.huan.tv/tv-zone-business-api](http://cloud.huan.tv/tv-zone-business-api-test)
>   - 测试环境：[http://cloud.huan.tv/tv-zone-business-api-test](http://cloud.huan.tv/tv-zone-business-api-test)
> - 前端访问域名:
>   - 正式环境：[http://tv-zone.huan.tv](http://tv-zone.huan.tv/)
>   - 测试环境:  [http://test.tv-zone.huan.tv](http://tv-zone.huan.tv)



<a name="cc9f26fe"></a>
#### 勾正忆视

> - 后端接口域名：
>   - 正式环境：[http://cloud.huan.tv/tv-zone-business-api](http://cloud.huan.tv/tv-zone-business-api-test)
>   - 测试环境：[http://cloud.huan.tv/tv-zone-business-api-test](http://cloud.huan.tv/tv-zone-business-api-test)
> - 前端访问域名:
>   - 正式环境：[http://tv-zone.huan.tv](http://tv-zone.huan.tv/)
>   - 测试环境:  [http://test.tv-zone.huan.tv](http://tv-zone.huan.tv)



<a name="424a2ad8"></a>
### 准备

```bash
$ git clone git@gitlab-bigdata.huan.tv:FE/tv-community-web

$ cd tv-community-web

$ yarn install
```


<a name="408dfd91"></a>
### 启动-本地开发

```bash
$ yarn start  //选择对应环境
```


<a name="7a290350"></a>
### 构建-正式环境

> 上传微信小程序代码时候 应到取消勾选代码压缩，es6转化等所有选项
> - $env:环境变量 (development | testing | preproduction | production)
> - $target:构建客户端 (h5 | weapp | react-native | alipay | tt)


```bash
$ yarn deploy $env $target
```


<a name="dea9cdbc"></a>
## 项目目录

```
├─ bin       // 脚本目录
├─ config    // 项目配置文件
├─ dist       // 打包后的代码
├─ src
│  ├─ api           // 接口配置相关
│  ├─ components    // 公共组件
│  ├─ config        // 项目配置
│  ├─ constants     // 常量配置
│  ├─ images        // 图片资源
│  ├─ font        	// 字体资源
│  ├─ mock          // mock数据
│  ├─ utils         // 工具方法
│  ├─ pages         // 页面
│  ├─ scss          // 样式
│  ├─ store         // redux状态管理
│  ├─ app.js        // 入口文件
│  ├─ index.html    // 模版html
├─ project.config.json //微信小程序配置文件
```


<a name="c5a5cf76"></a>
## 开发人员
| 开发者 | 邮箱 | 联系方式 |
| --- | --- | --- |
| 徐长剑 | [xuchangjian@gzads.com](mailto:xuchangjian@gzads.com) | 18001278867 |
| 刘玉生 | [liuyusheng@gzads.com](mailto:liuyusheng@gzads.com) | 18301552969 |
| 齐兵 | [qibing@huan.tv](mailto:qibing@huan.tv) | 18210942504 |



<a name="fe2df04a"></a>
## 版本

---

