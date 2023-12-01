---
title: 数据服务
sidebar_position: 4
---

## 简介

数据服务目前支持模板向导和 SQL 两种模式开发 API，两种开发 API 的本质都是执行 SQL，但作为开发者需要拓展数据源来开发新的 API，本章节将介绍如何拓展数据源，

## 拓展数据源

实现操作步骤如下：

1. 拓展数据源支持：此步骤需到数据同步模块创建数据源，创建数据源也需要做适配工作，可参考[拓展数据源支持](/docs/dev-docs/application/extend_datasource)章节；
2. 新增数据源：此步骤需到：数据同步 -> 同步数据源 -> 创建数据源；

## 数据服务开发

若开发者不需要提供更多当前版本更多的 API 开发需求，那么数据服务开发可不需要做任何拓展，直接使用开发 API 即可。

与数据服务开发相关的模块有：

- uniplore-data-api：对外开放数据服务
- uniplore-data-service：数据服务 API 开发管理

当前版本暂未提供服务策略、限流等功能，若开发者需要使用这些功能，则需要重点关注表`ds_api_strategy`, 当前版本与数据服务相关的表如下：

| 表名称                 | 备注                                             |
| :--------------------- | :----------------------------------------------- |
| ds_api                 | 数据服务-API 表                                  |
| ds_api_app_secret      | 数据服务 API 密钥表                              |
| ds_api_app_strategy    | 数据服务 API 应用关联策略表                      |
| ds_api_category        | 数据共享-api 类别表                              |
| ds_api_domain          | 数据服务域名表                                   |
| ds_api_error_code      | 数据服务错误码表                                 |
| ds_api_example_code    | 数据服务调用示例代码表                           |
| ds_api_header_template | 数据服务基础请求头表                             |
| ds_api_invoke_record   | 数据服务 API 调用记录表                          |
| ds_api_lang_type       | 数据服务调用实例代码类型表                       |
| ds_api_operation_log   | API 操作日志表                                   |
| ds_api_strategy        | 数据服务策略表                                   |
| ds_api_version         | 数据服务-API 版本表                              |
| ds_app                 | 数据服务应用表                                   |
| ds_app_apply           | API 应用上下架申请表                             |
| ds_app_auth            | API 应用授权表                                   |
| ds_app_auth_apply      | 数据服务-API 授权申请表                          |
| ds_server_api          | 数据服务-服务 API 表（ds_api:ds_server_api 1:1） |
