---
title: 数据标准
sidebar_position: 10
---

## 简介

数据标准是数据建模过程中，对数据进行标准化处理，保证数据规范的一种手段。

## 涉及相关表

| 表名称                          | 备注                               |
| :------------------------------ | :--------------------------------- |
| dst_catalog                     | 数据标准-目录表                    |
| dst_catalog_resource            | 数据标准-目录关联资源表            |
| dst_data_element                | 数据标准-标准定义表                |
| dst_data_element_binding_column | 数据标准-数据元绑定字段关联表      |
| dst_data_element_mapping_column | 数据标准-数据元映射关联字段表      |
| dst_data_element_version        | 数据标准-数据元版本表              |
| dst_dict                        | 数据标准-代码表                    |
| dst_dict_content                | 数据标准-数据字典内容表            |
| dst_dict_version                | 数据标准-数据字典版本表            |
| dst_mapping_job                 | 数据标准-标准映射 job 表           |
| dst_mapping_job_data_element    | 数据标准-标准映射 job 关联数据元表 |

## 涉及相关模块

### 前端

- 请求接口定义：uniplore-data-studio-ui/src/api/dataStandard
- 页面：uniplore-data-studio-ui/src/views/dataStandard

### 后端

- uniplore-data-standard
