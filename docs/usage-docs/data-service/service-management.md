---
title: 服务管理
sidebar_position: 5
---
## 概述

在「数据服务」-「API管理」对API进行授权后，每个授权对象针对API会注册一个服务，服务的状态决定调用API对象最终是否可以成功调用服务。**服务管理**就是对所有注册的服务进行管理。

## 服务的上线与下线

### 服务上线

成功注册一个服务之后，服务的默认是已上线，已上线的服务授权对象可以成功调用该服务。

进入「数据服务」-「服务管理」，选择已下线的服务，点击「上线」确认上线后即可上线该服务。

[ ![API授权详情](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-online.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-online.png)

### 服务下线

进入「数据服务」-「服务管理」，选择已上线的服务，点击「下线」，确认下线后即可下线该服务，下线的服务不可以被授权对象调用。

[ ![API授权详情](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-offline.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-offline.png)

## 服务的启用与禁用

### 服务启用

进入「数据服务」-「服务管理」，点击「禁用」，确认禁用后，该服务即为禁用状态。禁用的服务不可以被授权对象调用。

[ ![API授权详情](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-enable.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-enable.png)

### 服务禁用

进入「数据服务」-「服务管理」，选择已禁用的服务，点击「启用」，确认启用后，该服务更新为已上线，可以重新被授权对象调用。

[ ![API授权详情](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-disable.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-manage/service-disable.png)
