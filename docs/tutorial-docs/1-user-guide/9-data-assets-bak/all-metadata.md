---
title: 全部元数据
sidebar_position: 5
---
## 概述
全部元数据是数据中心，数据来源于各个模块，目前版本，数据接入了“数据服务”和“数据资产”的数据。在这里可以查找你想要的数据，浏览各个模块的数据信息。

## 搜索逻辑
搜索范围，支持API和数据表查询，目前这两种方式均已实现，其他检索有，离线任务，在线任务，智能标签，这三种方式暂未实现，目前版本可根据API和数据表切换查询条件，关键词包括：
* 数据表：查询结果类型（字段/表）、数据源类型（MySQL/Oracle）、数据源、数据库
* API： API名称、创建用户
* 支持模糊匹配（目前支持，名称进行匹配）匹配的结果，名称会红色标注
进入数据资产--全部元数据。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/medataQuery.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/medataQuery.png)

## API详情
进入数据资产--全部元数据（搜索API数据）--API详情。
在API详情中，主要展示了，API一些详情信息，例如、当前版本、请求方式、超时时间、域名、API路径等信息。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/API-Details.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/API-Details.png)


### 元数据详情
进入数据资产--全部元数据（搜索数据表）--元数据详情。
在元数据详情界面，可以看到，左上角，表名和数据库类型图标，可以点击复制数据表名字。
右侧则展示表的描述信息，技术属性，业务属性，个性属性。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-details.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-details.png)


### 基本信息
基本详情，主要展示表的数据字段信息，可根据字段名和注释检索，列表展示，“字段名”，“注释”，“字段类型”。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-fields.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-fields.png)

### 数据预览
数据预览主要是，预览表中的数据，这里目前，可以预览MySQL和Oracle的表数据。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-preview.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-preview.png)

### 数据血缘 
通过图谱化的方式，直观地展示表、字段之间的数据流转关系，还可以选择查看数据表关联的任务血缘关系（暂未接入真实数据）。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-blood-kinship.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-blood-kinship.png)
### 版本变更
记录每张表元数据变更的版本快照，支持任意版本之间的差异比对。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-version.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-version.png)

### 描述编辑
在详情，右侧描述信息，点击修改编辑按钮，进行元数据表编辑。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-edit-description.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-edit-description.png)

### 编辑表元数据
右侧表元数据，点击编辑，打开编辑抽屉，编辑技术属性和个性化业务属性。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-medata-edit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataQuery/table-medata-edit.png)
