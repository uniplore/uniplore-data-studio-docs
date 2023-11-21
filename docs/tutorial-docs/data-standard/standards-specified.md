---
title: 标准制定
sidebar_position: 3
---

## 标准维护

- 维护方式：支持单个添加和批量导入。
- 维护信息：包含业务属性和技术属性。
- 业务属性：
  - 中文名称：数据标准的中文名称，代表业务定义的唯一命名。体现在字段上可表示字段中文名/注释。
  - 英文名称：数据标准的英文名称，作为开发人员建表时定义字段名的参考。
  - 英文缩写：数据标准的英文名称缩写，同样可作为开发人员建表时定义字段名的参考。
  - 标准编号：代表维护数据标准体系时，每项标准的唯一标识编号。
  - 标准目录：代表数据标准所在的标准体系目录，方便用户定位查找标准。
  - 业务定义：对数据标准在实际业务场景中的详细描述或者口径说明，方便用户理解数据标准或者对- 应字段所代表的业务含义。
  - 标准来源：代表数据标准的定义依据来源，如各种国家标准、行业标准、监管文件、企业内部文件等。
  - 自定义属性：根据实际需要，可自定义数据标准的其他业务属性项及其属性值。
- 技术属性：
  - 数据类型：根据数据的业务定义、业务规则或者常见的表现形式，定义其采用的数据类型。
  - 数据长度：根据字节数量，约束数据最大或者固定的字符长度。
  - 数据精度：仅适用于数值类数据，约束小数点前后的位数。
  - 是否允许为空：表示在实际的字段数据中，是否允许出现空值。一般主键数据不允许为空。
  - 是否允许重复：表示在实际的字段数据中，是否允许出现重复值。一般主键数据不允许重复。
  - 默认值：表示在实际的字段数据中，出现空值时系统默认填充的内容。
  - 取值范围：仅适用于数值类数据，约束数据的取值范围。
  - 枚举范围：表示在实际的字段数据中，内容为枚举形式时。可直接引用码表内容对枚举值进行约束。

## 标准管理

### 目录

目录用于对数据标准进行分类管理。常见的分类标准可以按照企业内部的业务进行划分，也可以按照各种标准文件进行划分。
鼠标右击目录名称可以唤出目录管理菜单栏；点击右上角“+”即可新增顶级目录。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/catalog.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/catalog.png)

### 新增

在首页右上角点击“新建”按钮跳转到标准添加页面，根据页面提示填写业务属性和技术属性两栏必填信息。填写完成后可以选择暂时保存，或者保存发布。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/add.png)

### 发布、编辑

在首页操作栏可以直接执行发布、编辑、删除操作。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/editor.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/editor.png)

### 导入、导出

- 点击导入按钮可以以表格（Excel）的格式批量导入标准。需要注意标准的导入规则，每一个字段数据需严格按规则填写，否则会导致导入失败。点击“下载模板”字样即可得到导入模板。
- 点击导出按钮，选择相应的标准目录，即可批量导出标准数据。
  [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/import.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/import.png)

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/export.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/export.png)

### 详情

在首页点击蓝色的“中文名称”字段，即可查看标准详细信息和版本变更情况。

[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/detail.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/standard/detail.png)
