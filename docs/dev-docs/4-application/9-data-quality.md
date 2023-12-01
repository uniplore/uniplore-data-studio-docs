---
title: 数据质量
sidebar_position: 9
---

## 简介

数据质量是数据质量平台的核心功能，数据质量平台通过数据质量规则，对数据进行质量校验，并给出质量结果。

## 涉及相关表

| 表名称                       | 备注                        |
| :--------------------------- | :-------------------------- |
| dqa_catalog                  | 数据质量-目录表             |
| dqa_catalog_resource         | 数据质量-目录关联资源表     |
| dqa_job                      | 数据质量-质量检测任务表     |
| dqa_job_instance             | 数据质量-质量检测任务实例表 |
| dqa_job_instance_execute_log | 数据质量-质量检测任务表     |
| dqa_job_instance_rule_log    | 数据质量-质量检测任务表     |
| dqa_rule                     | 数据质量-规则表             |
| dqa_statistic_function       | 数据质量-统计函数表         |

## 涉及相关模块

### 前端

- 请求接口定义：uniplore-data-studio-ui/src/api/dataQuality
- 页面：uniplore-data-studio-ui/src/views/dataQuality

### 后端

- uniplore-data-quality

## 如何新增数据质量规则？

...........


## 数据质量对数据源性能影响说明

...........
