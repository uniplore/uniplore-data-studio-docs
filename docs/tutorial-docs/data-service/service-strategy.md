---
title: 服务策略
sidebar_position: 7
---
## 概述

配置API的流控策略，目前支持限流策略、超时策略、IP黑白名单。

## 限流策略

当前网关服务只支持API维度的QPS限流控制，默认QPS=10000，最大QPS=100000。

在「数据服务」-「API开发」中，新建API，在进行API信息配置时，点击「高级配置」，可以设置API的调用频次限制：

[ ![调用频次](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/limit-strategy.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/limit-strategy.png)

### 修改限流策略

- 已提交状态的API，修改限流策略，不会影响API已提交版本的限流策略。
- 步骤
    - 在「数据服务」-「API开发」中，点击「更多」-「编辑」
    - 高级配置中，修改「调用频次限制」
    - 点击「下一步」直到进入预览返回结果页面
    - 点击「完成」

## 超时策略

默认的超时是500ms，最大的超时时间是60000ms

在「数据服务」-「API开发」中，新建API，在进行API信息配置时，点击「高级配置」，可以设置API的超时时间：

[ ![后端超时](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/timeout-strategy.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/timeout-strategy.png)

### 修改超时策略

- 已提交状态的API，修改超时策略，不会影响API已提交版本的超时策略。
- 步骤
    - 在「数据服务」-「API开发」中，点击「更多」-「编辑」
    - 高级配置中，修改「后端超时」
    - 点击「下一步」直到进入预览返回结果页面
    - 点击「完成」

## IP黑白名单

绑定该策略的API会应⽤该策略进⾏IP过滤，如果IP不在⽩名单或者在⿊名单中，调⽤会失败。

### 新建

进入「数据服务」-「服务策略」，点击「新建策略」：

[ ![新建策略](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/service-strategy.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/service-strategy.png)

「选择策略类型」弹窗中选择**黑白名单策略**，点击「确定」：

[ ![选择策略类型](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/switch-strategy.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/switch-strategy.png)

新建黑白名单策略页面如下图所示：

[ ![新建黑白名单策略](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/black-white-list.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-strategy/black-white-list.png)

- 名称：服务策略的名称，只能以中英文、字母、数据字和下划线组成，长度为3-255个字符之内。
- 描述：对服务策略进行简要说明，长度在255个字符以内。
- 规则：支持**IP白名单**和**IP黑名单**。
- 规则配置：配置该服务策略过滤的IP，可以是IP地址或者是IP段。

点击「确定」即可完成黑白名单策略的新建。
