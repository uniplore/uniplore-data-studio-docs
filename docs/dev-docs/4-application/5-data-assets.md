---
title: 数据资产
sidebar_position: 5
---

## 简介

数据资产目前分为**数据资产中心**和**数据资产运营**两部分。

## 涉及相关模块

### 数据资产运营

- 请求接口定义：uniplore-data-studio-ui/src/api/dataAssets
- 页面：uniplore-data-studio-ui/src/views/dataAssets

### 数据资产中心

- 请求接口定义：uniplore-data-studio-ui/src/api/dataAssetsCenter
- 页面：uniplore-data-studio-ui/src/views/dataAssetsCenter

### 数据服务接口模块

- uniplore-data-assets

## 涉及相关表

| 表名称                                 | 备注                              |
| :------------------------------------- | :-------------------------------- |
| da_apply                               | 数据资产-申请审批表               |
| da_asset                               | 数据资产-资产表                   |
| da_asset_attribute_value               | 数据资产-资产关联属性值表         |
| da_asset_auth                          | 数据资产-资产授权表               |
| da_asset_auth_apply                    | 数据资产-资产使用申请表           |
| da_asset_operation_log                 | 数据资产-资产操作日志表           |
| da_asset_publish_apply                 | 数据资产-资产公开/隐藏申请表      |
| da_assets_attribute_value              | 数据资产-资产关联属性值表         |
| da_attribute                           | 数据资产-属性表                   |
| da_catalog                             | 数据资产-目录表                   |
| da_catalog_resource                    | 数据资产-目录关联资源表           |
| da_datasource                          | 引入数据源表                      |
| da_field_type                          | 字段类型表                        |
| da_matadata_catalog_resource           | 数据目录关联资源表                |
| da_metadata                            | 数据资产-元数据表                 |
| da_metadata_attribute_value            | 元数据关联属性值表                |
| da_metadata_catalog                    | 元数据数据目录                    |
| da_metadata_database                   | 元数据数据库表                    |
| da_metadata_field                      | 元数据字段表                      |
| da_metadata_ingestion_job              | 数据资产-元数据摄取任务表         |
| da_metadata_ingestion_job_instance     | 数据资产-元数据摄取任务实例表     |
| da_metadata_ingestion_job_instance_log | 数据资产-元数据摄取任务实例日志表 |
| da_metadata_relation                   | 数据资产-元数据表                 |
| da_metadata_sync_job_instance          | 元数据同步任务实例表              |
| da_metadata_sync_job_log               | 元数据同步任务实例日志表          |
| da_metadata_sync_task                  | 元数据同步任务表                  |
| da_metadata_sync_task_database         | 元数据同步任务关联数据库表        |
| da_metadata_sync_task_table            | 元数据同步任务关联数据表表        |
| da_metadata_table                      | 元数据数据表                      |
| da_metadata_table_attribute_value      | 数据表属性映射表                  |
| da_metadata_table_directory            | 元数据表目录表                    |
| da_metadata_table_version              | 元数据数据表版本控制表            |
| da_metadata_tag                        | 元数据标签映射表                  |
| da_metadata_version                    | 数据资产-元数据版本表             |
| da_metamodel                           | 数据资产-元模型表                 |
| da_metamodel_attribute                 | 数据资产-元模型关联属性表         |
| da_metamodel_catalog                   | 数据资产-元模型目录表             |
| da_metamodel_catalog_resource          | 数据资产-元模型目录资源表         |
| da_metamodel_relation                  | 数据资产-元模型关系表             |
| da_metamodel_submodel                  | 元模型子模型表                    |
| da_metamodel_submodel_database         | 元模型子模型关联已应用的数据库表  |
| da_metamodel_version                   | 数据资产-元模型关系表             |
| da_tag                                 | 标签表                            |
