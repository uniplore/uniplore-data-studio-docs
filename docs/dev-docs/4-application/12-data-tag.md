---
title: 数据标签
sidebar_position: 12
---

## 简介

数据标签，用于对数据进行标签化，方便数据检索，为下游数据分析提供基础依据，如画像分析。

## 涉及相关表

dt_api 开头的表与标签 API 开发有关，但目前精力不足，之前开发的满足不了实际需求，悉知！

| 表名称                              | 备注                                |
| :---------------------------------- | :---------------------------------- |
| ~~dt_api~~                          | 数据标签-API 表                     |
| ~~dt_api_app~~                      | 数据标签-API 应用表                 |
| ~~dt_api_app_secret~~               | 数据标签-API 应用秘钥表             |
| ~~dt_api_app_strategy~~             | 数据标签-API 应用关联策略表         |
| ~~dt_api_domain~~                   | 数据标签-API 服务域名表             |
| ~~dt_api_error_code~~               | 数据标签-API 服务错误码表           |
| ~~dt_api_example_code~~             | 数据标签-API 服务调用示例代码表     |
| ~~dt_api_header_template~~          | 数据标签-API 服务基础请求头表       |
| ~~dt_api_invoke_record~~            | 数据标签-API 服务调用记录表         |
| ~~dt_api_lang_type~~                | 数据标签-API 服务调用实例代码类型表 |
| ~~dt_api_object~~                   | 数据标签-API 关联对象表             |
| ~~dt_api_object_version~~           | 数据标签-API 关联对象版本表         |
| ~~dt_api_req_params~~               | 数据标签-API 请求参数表             |
| ~~dt_api_req_params_version~~       | 数据标签-API 请求参数版本表         |
| ~~dt_api_res_params~~               | 数据标签-API 响应参数表             |
| ~~dt_api_res_params_version~~       | 数据标签-API 响应参数版本表         |
| ~~dt_api_strategy~~                 | 数据标签-API 服务策略表             |
| ~~dt_api_version~~                  | 数据标签-API 服务版本表             |
| dt_catalog                          | 数据标签-目录表                     |
| dt_catalog_resource                 | 数据标签-目录关联资源表             |
| dt_computing_resource               | 数据标签-计算资源表                 |
| dt_derivation_plan                  | 数据标签-衍生标签计划表             |
| dt_derivation_plan_instance         | 数据标签-衍生标签计划实例表         |
| dt_derivation_plan_instance_log     | 数据标签-衍生标签计划实例日志表     |
| dt_derivation_plan_table            | 数据标签-衍生标签计划关联物理表表   |
| dt_derivation_plan_tag              | 数据标签-衍生标签计划关联表         |
| dt_dict                             | 数据标签-字典表                     |
| dt_dict_item                        | 数据标签-字典项表                   |
| dt_group                            | 用户画像-群体表                     |
| dt_group_formula                    | 用户画像-群体关联群体计算公式表     |
| dt_group_report                     | 用户画像-群体分析报告表             |
| dt_group_report_chart               | 用户画像-群体分析报告 chart 表      |
| dt_group_rule                       | 用户画像-群体关联规则表             |
| dt_group_tag                        | 用户画像-群体关联标签表             |
| dt_group_version                    | 用户画像-群体版本表                 |
| dt_individual_temporary_tag         | 用户画像-个体临时标签表             |
| dt_mask_rule                        | 脱敏设置-脱敏规则表                 |
| dt_mask_tag                         | 脱敏设置-脱敏标签记录表             |
| dt_materialization_job              | 数据标签-标签物化任务表             |
| dt_materialization_job_instance     | 数据标签-标签物化任务实例表         |
| dt_materialization_job_instance_log | 数据标签-标签物化任务实例日志表     |
| dt_materialization_job_table        | 数据标签-标签物化任务关联物理表表   |
| dt_materialization_job_tag          | 数据标签-标签物化任务关联标签表     |
| dt_object                           | 数据标签-对象表                     |
| dt_object_column                    | 数据标签-实体字段表                 |
| dt_object_datatable                 | 数据标签-对象数据表表               |
| dt_object_datatable_relationship    | 数据标签-对象数据表关系表           |
| dt_object_relationship              | 数据标签-对象关系表                 |
| dt_relation                         | 数据标签-关系表                     |
| dt_relation_object                  | 数据标签-关系对象表                 |
| dt_static_group_cache_data          | 用户画像-静态群体缓存数据表         |
| dt_tag                              | 数据标签-实体字段表                 |

## 涉及相关模块

### 前端

- 请求接口定义：uniplore-data-studio-ui/src/api/dataTag
- 页面：uniplore-data-studio-ui/src/views/dataTag

### 后端

- uniplore-data-standard

## 提交 Flink Job

数据标签模块集成了 uniplore-data-core/uniplore-data-core-flink 模块，提供了提交 Flink Job 能力，本身还是借助集成 golang 编写服务。

### 依赖模块说明

```bash

implementation(project(":uniplore-data-core:uniplore-data-core-flink"))
implementation(project(":uniplore-data-core:uniplore-data-core-chunjun"))

```

### springboot 配置

```yaml
uniplore:
  service:
    flink:
      submitMode: standalone
      # 下面地址为Flink jobmanager 部署节点的submitjob服务，docker
      # 镜像部署或k8s部署时，会自行启动该服务，若直接部署，则需要单独启动
      submitJobUrl: http://192.168.2.155:8080
```