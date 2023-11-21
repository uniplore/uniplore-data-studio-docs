---
title: 服务调用
sidebar_position: 13
---
## 概述

经过了上面 **新增请求头模板、域名** -> **API开发** -> **API服务(API授权)**，终于进入最终的步骤，那就是服务调用了。

## 从服务列表点击查看接口调用信息

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-service-list.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-service-list.png)

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-info.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-info.png)


## 到Postman或ApiPost中发起调用

### 请求示例

假如部署为局域网或公网，且不使用所有服务部署不使用域名的情况下，那么请求URL前缀为：`http://[ip]:35000`，例如：`http://192.168.2.100:35000`;

如果部署使用了域名解析，那么请求URL前缀为：`http://[域名]`，例如：`http://idis.uniplore.cn`;

下面的请求示例为：非绑定域名解析部署方案；

- 请求域名：
```
http://localhost:35000
```

- 完整请求URL：
```
http://localhost:35000/uniplore-api-server/getData
```

- 请求方式：**GET**

- 请求头：
``` json
{
    "Content-Type": "application/json",
    "App-Key": "10e399a8de9885674d96e6a6ed9abb0c3cf40c9329d3182426ddcfc9970b26f868da38a0baae506edd4d5cb3a3bc6eec",
    "App-ID"： "1582708623941881859"
}

```

- 请求参数(query):
```json
{
    "name": "da"
}
```

### 请求成功
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-success.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-success.png)

### 请求频率受限
当请求频率太高时，会进入限流系统限流策略，需要等待一段时间，所以限流需要根据实际情况进行控制，限流时请求结果如下：
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-limit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-limit.png)

### 非法请求参数时
当接口调用者随意给查询参数是受限的，系统会严格按照参数进行校验以及appID、appKey合法性校验，非法请求参数时，结果如下：
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-illigel-param.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-illigel-param.png)

### API下线时
当API**下线**时，结果如下：
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-api-offline.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-api-offline.png)

### API禁用时
当API**禁用**时，结果如下：
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-api-disable.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-api-disable.png)


## 查看调用记录
### 调用列表
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/view-invoke-record-btn.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/view-invoke-record-btn.png)
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-record-list.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-record-list.png)

### 调用详情(调用日志)
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-detail.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-detail.png)


## 查看调用统计信息
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-stat.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/invoke/invoke-stat.png)
