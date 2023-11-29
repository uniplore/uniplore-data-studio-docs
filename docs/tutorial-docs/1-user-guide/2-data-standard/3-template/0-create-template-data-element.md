---
title: 新建模版数据元
sidebar_position: 0
---

## 新建模版数据元

在数据标准领域，国家层面、行业层面都会出台相应的数据标准文件，用来约束规范数据定义。

## 背景信息

行业模版为系统内置，仅支持租户管理员编辑维护。如企业内部已维护相关行业标准，可直接在「数据标准」页面导入。

## 操作步骤

1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据标准菜单，选择行业菜单。
3. 新建模版数据元目录。 - 在行业模版页面，单击页面左侧目录+按钮。 - 选择添加顶级目录。 - 在目录设置弹窗，输入目录名称和目录描述，单击确定。
   [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/create-catalog.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/create-catalog.png) > **说明** > - 支持创建多层目录，即可在一级目录上创建二级目录。 > - 编辑目录：将鼠标悬停至目标目录，单击右键，选择编辑目录，修改目录的名称、标识或描述后，单击确认。 > - 删除目录：将鼠标悬停至目标目录，单击右键，选择删除目录，在弹出页面，单击确认完成删除。

4. 在行业模版页面，单击新建按钮，根据提示输入数据元名称、code、数据元别名、选择所属类目、数据类型等信息。
   [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/create-data-element.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/create-data-element.png)

<table>
    <tr>
        <th colspan="2"  width="10%">参数</th>
        <th  width="30%">说明</th>
    </tr>
    <tr>
        <td rowspan="6">业务属性</td>
        <td>数据元名称</td>
        <td>数据元的名称。</td>
    </tr>
    <tr>
        <td>所属类目</td>
        <td>数据元所属的数据元层级。</td>
    </tr>
    <tr>
        <td>code</td>
        <td>数据元的编码。</td>
    </tr>
    <tr>
        <td>数据元别名</td>
        <td>数据元的别名。</td>
    </tr>
    <tr>
        <td>业务规则</td>
        <td>数据元业务定义。</td>
    </tr>
    <tr>
        <td>技术口径</td>
        <td>技术层面的描述信息。</td>
    </tr>
    <tr>
        <td rowspan="6">技术属性</td>
        <td>数值类型</td>
        <td>支持的数值类型，包括字符串、日期、数值等多种类型。</td>
    </tr>
    <tr>
        <td>存储类型</td>
        <td>字段存储的类型，和数值类型一一对应。</td>
    </tr>
    <tr>
        <td>引用数据字典</td>
        <td>选择已新建的数据字典，或新建新的数据字典后进行选择，新建数据字典的具体操作。</td>
    </tr>
    <tr>
        <td>长度</td>
        <td>长度是数据元类型值的长度。</td>
    </tr>
</table>

5. 操作完成后，单击确定。
6. 在行业模版页面，可查看已新建的模版数据元。

## 相关操作

<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>编辑模版数据元</td>
        <td>在行业模版页面，选择需要编辑的模版数据元，单击操作列的编辑，可对模版数据元名称、所属类目以及描述信息等进行修改。</td>
    </tr>
    <tr>
        <td>删除模版数据元</td>
        <td>在数据元管理页面，选择需要删除的数据元，单击操作列的删除。</td>
    </tr>
    <tr>
        <td>查看模版数据元详情</td>
        <td>在行业模版页面，单击操作列的查看 ，可查看数据元详细信息。</td>
    </tr>
</table>
