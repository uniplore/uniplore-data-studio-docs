---
title: 设置逻辑表DDL语句
sidebar_position: 3
---

# 设置逻辑表DDL语句
可以通过DDL设置功能，一键设置逻辑表在各个数据源类型下的DDL语句，方便逻辑表物理化至各个数据源时使用。本文以MySQL类型为例，介绍如何设置逻辑表的DDL语句。

## 前提条件
- 已新建逻辑表。

## 背景信息
DDL（Data Definition Language），数据库模式定义语言，是SQL语言的组成部分。DDL主要定义了数据表的表结构以及字段的数据类型，使应用程序操作数据库时，能正确的产生和提取数据类型和结构。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据建模菜单，选择数据模型设计菜单。
3. 在逻辑表列表页面，单击目标逻辑表操作列的详情。
4. 在配置信息区域的DDL设置页签，单击需要的计算资源类型，这里以MySQL为例，单击生成DDL，单击保存DDL。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-details-ddl.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-details-ddl.png)

>**说明**
>- 如果已经生成了DDL语句后，再新增逻辑表的字段，需要重新生成DDL语句。
>- 当生成其他数据源类型的DDL语句时，请根据实际需要修改对应的字段映射以及必须的参数值。