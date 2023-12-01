---
title: 数据建模
sidebar_position: 8
---

## 简介

数据建模是基于数据标准之后的一步，主要目的是将数据标准化，为后续的数据处理、数据质量、数据可视化等提供标准化的数据。

## 涉及相关表

| 表名称                   | 备注                    |
| :----------------------- | :---------------------- |
| dm_attr                  | 数据建模-属性表         |
| dm_attr_value            | 数据建模-属性值表 aaa   |
| dm_catalog               | 数据建模-目录表         |
| dm_catalog_resource      | 数据建模-目录关联资源表 |
| dm_ddl                   | 数据建模-建表语句表     |
| dm_logic_table           | 数据建模-逻辑表         |
| dm_logic_table_column    | 数据建模-逻辑表字段表   |
| dm_logic_table_version   | 数据建模-逻辑版本表     |
| dm_materialization_log   | 数据建模-物理化日志表   |
| dm_materialization_table | 数据建模-物理表         |
| dm_operation_log         | 数据建模-操作日志表     |
| dm_rule                  | 数据建模-规则表         |
| dm_rule_attr             | 数据建模-规则属性关联表 |

## 涉及相关模块

### 前端

- 请求接口定义：uniplore-data-studio-ui/src/api/dataModel
- 页面：uniplore-data-studio-ui/src/views/dataModel

### 后端

- uniplore-data-model

## 其他说明

数据建模在业务上与数据标准、数据资产、数据源管理有内部关联关系，业务实现上需要调用上述相关模块的接口。
