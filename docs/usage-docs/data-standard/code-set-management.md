---
title: 代码集管理
sidebar_position: 4
---

## 概述

### 概念

在数据标准中，存在一种数据标准，需要维护数据的枚举范围。如【还款方式】这个数据标准，我们需要维护相应的编码值内容：

- 01——等额本息
- 02——等额本金
- 03——先息后本
  而这些编码内容，可能会复用至多个数据标准(字段)中，需要达到一处修改，多处变更的效果。因此需要抽象出来独立管理，就形成了码表概念。

### 组成

- 码表属性：包含代码名称、说明等业务属性。
- 码表内容：包含编码取值、编码名称、编码说明。

### 维护

- 单个添加：当企业已经在平台维护了历史存量的码表，对于新增的码表，可通过单个添加的方式维护至平台。适用于补充码表。
- 线下导入：在没有平台工具之前，企业已在线下维护了大量的码表信息，那么就可以根据平台的模版文件，将线下的码表信息批量导入至平台。

### 使用

- 用户在「标准定义」页面添加数据标准，在维护【枚举范围】时，可以选择引用已存在的码表，系统会自动填充相应的编码内容至枚举范围中。
- 当用户在「码表管理」页面修改编码内容时，引用过该码表的数据标准，会自动调整枚举范围内容。

## 代码集管理

### 目录

鼠标右击目录名称可以唤出目录管理菜单栏；点击右上角“+”即可新增顶级目录。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/catalog.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/catalog.png)

### 新增

在首页右上角点击“新增”按钮，添加页面会从右侧弹出。名称、编号、目录为必填项，其余内容选填。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/add.png)

### 编辑、发布

在首页操作栏可以直接执行发布、编辑、删除操作。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/operation.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/operation.png)

### 导入、导出

- 点击导入按钮可以以表格（Excel）的格式批量导入代码。需要注意代码的导入规则，每一个字段数据需严格按规则填写，否则会导致导入失败。点击“下载模板”字样即可得到导入模板。
- 点击导出按钮，选择相应的标准目录，即可批量导出标准数据。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/import.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/import.png)

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/export.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/export.png)

### 详情

在首页点击蓝色的“代码名称”字段，即可查看代码详细信息和版本变更情况。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/detail.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/code/detail.png)
