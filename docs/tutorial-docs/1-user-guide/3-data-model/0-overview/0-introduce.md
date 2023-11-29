---
title: 功能简介
sidebar_position: 0
---

# 功能简介
数据建模支持ER（Entity-Relationship）模型建模方法，帮助用户完成数据模型、逻辑表的设计和管理。用户可对数据模型的层次结构进行管理，并对逻辑表字段进行设计。字段设计需要在数据标准的约束下，通过模型设计过程中引用标准数据元定义，设置逻辑表相关标准质量规则，保证不同的逻辑表设计人员按照统一口径进行操作。

在数据标准的约束下，保证逻辑表的可持续的维护性及可读性。在数据模型管理模块对逻辑表进行层次结构设计、逻辑表定义，引用标准元素定义，保证不同的逻辑表设计人员按照统一口径进行操作，除此以外还支持：DDL设置、逻辑表物理化等功能。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-details.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-details.png)
- 逻辑表层次管理：支持对逻辑表目录进行新建，并提供编辑、删除的功能。

- 新建逻辑表：支持通过可视化的形式创建逻辑表的基本信息、字段信息，提供DDL语句新建、引用标准库字段、手动添加字段等方式快速创建逻辑表字段及字段信息功能。

- DDL设置：支持根据逻辑表，自动生成并保存不同云计算资源类型的DDL语句。

- 物理化：支持将已存在的逻辑表物理化到数据库，并对物理化执行结果信息进行展示。