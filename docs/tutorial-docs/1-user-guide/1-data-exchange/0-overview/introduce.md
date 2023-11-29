---
title: 功能简介
sidebar_position: 0
---
# 功能简介
数据同步为用户提供批量、实时多源异构数据的便捷同步或接入能力，系统提供完善的数据接入配置、任务运行监控等功能，
有效保障数据接入的稳定性和可控性，满足各类平台、数据源及应用系统间的数据汇聚需求。

通过数据同步的自定义同步任务配置能力，可实现快速创建周期数据同步任务和实时同步任务。用户可选择已经注册的数据源端数据，
并选定目标端创建同步任务。系统提供源端目标端字段自动映射进行同步任务配置等多种便捷同步任务创建能力，帮助用户更便捷的完成数据同步配置。

在完成数据同步配置后，数据同步模块可对数据同步任务的执行和运行情况进行全面的监控运维。可对任务总数、线上任务、正运行任务等核心指标进行统计，并可以实现异常任务执行状态的监控，当前实例状态监控。对任务的开始时间、结束时间、耗时、速率、状态和执行日志等信息进行跟踪和展示，并支持周期任务重跑。

## 数据源管理
支持对数据同步的数据源端和目标端进行统一的注册和管理，支持对关系型数据库、消息队列等多种类型数据源的配置，并可对所填写数据源的连通性进行有效性验证。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/datasource-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/datasource-page.png)

## 离线数据同步
- 支持单表离线任务的新建。

- 支持自定义选择已经注册的数据源端数据和目标端，支持多种常见离线同步链路。

- 提供同名字段自动映射、任务调度配置功能。

- 支持对离线任务实例的运行属性和运行日志进行监看。

- 支持对非增量离线同步实例进行实例重跑。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/batch-job-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/batch-job-page.png)

## 实时数据同步
- 支持Oracle CDC、MySQL binlog、SQL Server CDC、Kafka五种实时数据同步模式。

- 提供完善的实时数据接入配置等功能，有效保障实时任务接入的稳定性和可控性。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/stream-job-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/stream-job-page.png)

## 脚本配置同步
- 支持通过自定义脚本配置离线、实时同步任务，支持引用数据源端Reader读取规范和目标端Writer写入规范快速配置同步任务脚本。

- 支持配置脚本同步任务调度及运行资源配置。

- 通过测试上线运行的脚本任务，支持在运维监控中查看运行属性指标和运行日志。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/script-job-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/script-job-page.png)
