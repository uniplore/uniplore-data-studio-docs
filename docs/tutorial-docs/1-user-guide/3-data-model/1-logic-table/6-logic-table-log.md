---
title: 查看逻辑表日志
sidebar_position: 6
---

# 查看逻辑表日志
通过查看逻辑表的日志，方便您了解逻辑表的修改时间和物理化日志。本文介绍如何查看逻辑表日志。

## 前提条件
- 已新建逻辑表。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据建模菜单，选择数据模型设计菜单。
3. 在逻辑表列表页面，单击目标逻辑表操作列的详情。
4. 在逻辑表详情页面，单击日志页签。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/operation-log-tab.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/operation-log-tab.png)
    - 在操作日志页签，查看操作日志。
      - 选中需要日志对比的两个日志，单击日志对比按钮，查看详细变更信息。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/operation-log-change.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/operation-log-change.png)

    - 单击物理化日志页签，查看逻辑表物理化的相关信息，如数据源类型、数据源、物理化时间、DDL信息。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/materialization-log.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/materialization-log.png)