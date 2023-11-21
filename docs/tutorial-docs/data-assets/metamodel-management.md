---
title: 元模型管理
sidebar_position: 4
---
## 概述
元模型管理，是跟**数据源类型**做绑定的，例如、MySQL、Oracle、Postgres、SQLServer、HBase、MongoDB等，每种元模型分别管理自己的，技术属性，通用属性，个性属性，在元数据同步的时候，会跟数据源类型做绑定，模型属性则会跟数据表做绑定。
## 元模型管理列表
进入数据资产--元模型管理
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata_model.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata_model.png)
## 元模型详情
进入数据资产--元模型管理--元模型详情(**在点击编辑元模型进入**)
### 技术属性
技术属性，元数据同步的时候使用，主要有数据库、表名称、存储引擎、表行数、表数据大小、表名称、等信息。每种模型，技术属性有所差异，但也大致也相同，系统自带的，不支持添加或者修改。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-attr.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-attr.png)
### 通用业务属性
* 通用业务属性，也是在同步任务的时候跟数据表做关联的。
* 属性类型：枚举、文本、目录。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr.png)
#### 通用业务属性--新增
在通用业务属性列表界面，点击左上角，新增按钮弹出新增表单，填写表单信息，点击确认保存。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-add.png)
#### 通用业务属性--编辑 
在通用业务属性列表界面，列表中点击编辑图标，弹出编辑框，输入要编辑的内容，点击确认保存编辑数据。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-edit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-edit.png)
#### 通用业务属性--删除
在通用业务属性列表界面，列表中点击删除图标，点击确认删除，删除成功。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-delete.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-public-attr-delete.png)
### 个性业务属性
个性业务属性也是在元数据同步的时候跟数据表做关联。
个性业务属性分为两级，第一级是子模型，第二级是子模型属性，当元数据同步的时候，关联的是子模型下的属性。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr.png)
### 新增子模型
在个性业务属性列表界面，有上角点击，新增子模型按钮，弹出子模型表单，填写信息，点击确认保存，子模型。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-add.png)
### 编辑子模型
在个性业务属性列表界面，左侧点击操作按钮，展示下拉功能列表，点击编辑，弹出编辑框，填写编辑信息，确认提交。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-edit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-edit.png)
### 应用数据库
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply1.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply1.png)
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply2.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-apply2.png)
### 删除子模型
在个性业务属性列表界面，左侧点击操作按钮，展示下拉功能列表，点击删除，弹出删除提示，确认删除，删除成功。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-delete.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/medata-model-custom-attr-delete.png)
### 新增个性业务属性
在个性业务属性列表界面，左侧点击操作按钮，展示下拉功能列表，点击新增个性业务属性，弹出个性业务属性表单，
填写属性名，属性中文名，属性类型，选项，是否必填，点击确认，即可添加。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-add.png)
### 编辑个性业务属性
在个性业务属性列表界面，展开子模型，在子模型下面就可以看到个性业务属性，在个性业务属性列表右侧，点击编辑的图标，弹出个性业务属性编辑表单，填写要编辑的数据，点击确认即可。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-edit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-edit.png)
### 删除个性业务属性
在个性业务属性列表界面，展开子模型，在子模型下面就可以看到个性业务属性，在个性业务属性列表右侧，点击删除的图标，确认是否删除，点击确认删除成功。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-delete.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataModel/sub-personality-attr-delete.png)
