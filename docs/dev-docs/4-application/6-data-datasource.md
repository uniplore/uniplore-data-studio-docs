---
title: 数据源管理
sidebar_position: 6
---

## 简介

数据源管理是数据源管理模块的核心，负责管理数据源的创建、修改、删除等操作，为数据开发、数据资产、数据查询、数据质量、数据标签等所有中台业务提供数据来源。

## 涉及相关表

| 表名称          | 备注       |
| :-------------- | :--------- |
| ds_dataplatform | 数据平台表 |
| ds_datasource   | 数据源表   |

## 前端相关模块

- 前端请求接口定义：uniplore-data-studio-ui/src/api/datasource
- 前端页面：uniplore-data-studio-ui/src/views/system/dataplatform

## 后端相关模块

- uniplore-data-datasource: 提供数据源管理和数据源信息 

