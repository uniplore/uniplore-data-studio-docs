---
title: API管理
sidebar_position: 4
---
## 概述

用户每提交一次API就会生成对应的一个API的版本，而API管理则是对用户提交的API版本进行管理，用户可以给每个API的版本进行授权、取消授权和恢复授权的操作。

## API授权

进入「数据服务」-「API管理」，点击「授权」，如下图所示：

[ ![API管理](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/api-manage-auth.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/api-manage-auth.png)

授权的页面内容如下图所示：

[ ![API授权](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/auth-drawer.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/auth-drawer.png)

- 授权方式：有**永久使用**和**自定义调用次数**两种方式可以选择。
    - 永久使用：被授权的对象始终有权对API进行调用，不受次数的限制。
    - 自定义调用次数：被授权的对象对API的调用次数是有限的，当调用的次数大于授权的调用次数，则该对象无权再次调用API。
- 授权对象：选择API授权的对象，可以对用户和项目进行授权，被授权的对象才有权调用API。
- 已授权对象：可以查看授权过程中选中的授权对象列表。

点击「确定」即可完成API的授权。

## 查看授权

可在API管理列表中，单击相应API名称，进入API详情，查看「授权信息」。

[ ![API授权详情](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/auth-detail.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/auth-detail.png)

在查看API的授权对象，还可以对授权对象进行以下操作：

1. 点击相应授权对象后的「修改授权」，进入修改授权的对话框，可修改授权方式和设定调用次数。

[ ![修改授权](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/change-auth.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/change-auth.png)

2. 点击相应授权对象后的「取消授权」，确认取消授权后，对应的授权对象将无权再调用API。

[ ![取消授权](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/cancle-auth.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/cancle-auth.png)

3. 点击相应授权对象后的「恢复授权」, 确认恢复授权后，对应的授权对象有权再次调用API。

[ ![恢复授权](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/recover-auth.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage/recover-auth.png)
