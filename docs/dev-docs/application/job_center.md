---
title: 任务中心
sidebar_position: 13
---

## 简介

任务中心提供 Flink 任务调取管理及调度查询。

## 涉及相关表

| 表名称          | 备注                           |
| :-------------- | :----------------------------- |
| om_flink_job    | 运维监控-job 关联 Flink job 表 |
| om_job          | 运维监控-job 表                |
| om_job_instance | 运维监控-job 实例表            |
| om_job_log      | 运维监控-job 日志表            |
| om_job_version  | 运维监控-job 版本表            |

## 涉及相关模块

### 前端

- 请求接口定义：uniplore-data-studio-ui/src/api/operationMonitor
- 页面：uniplore-data-studio-ui/src/views/operationMonitor

### 后端

- uniplore-operation-monitor


