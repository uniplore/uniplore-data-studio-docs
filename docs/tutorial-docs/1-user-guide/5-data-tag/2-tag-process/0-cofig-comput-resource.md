---
title: 设置计算资源
sidebar_position: 0
---

# 设置计算资源
在标签建模时，您需要设置计算资源作为存储数据库和分析数据库。本文介绍了如何设置计算资源。

## 前提条件
已新建业务所需的计算资源。

## 背景信息
设置计算资源后：
- 在标签建模过程中产生的临时表、新的衍生标签，会统一存储到存储数据库中。
- 将标签物化到分析数据库中，以提供效率更高的面向分析场景的服务。例如：画像分析应用中会优先选择设置的分析引擎作为基础计算资源。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据标签**菜单，选择**标签加工**菜单。
3. 在**标签加工**页面，单击**设置**。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/set-compute-resource.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/set-compute-resource.png)
4. 在**计算资源**设置对话框，选择存储数据库和分析数据库。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/set-compute-resource-model.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/set-compute-resource-model.png)
> 说明
> - 存储型数据库支持以下类型资源：MYSQL、PostgreSQL、PostgreSQL、ORACLE。
> - 分析型数据库支持以下类型资源：MYSQL、PostgreSQL、PostgreSQL、ORACLE。
5. 单击**确定**。