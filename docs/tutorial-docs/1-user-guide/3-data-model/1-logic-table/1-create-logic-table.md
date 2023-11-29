---
title: 新建逻辑表
sidebar_position: 1
---

# 新建逻辑表

## 手动新建逻辑表
通过手动新建逻辑表，建立您期望的数据表样式和字段，并支持将逻辑表物理化至数据源中，为后续的表加工和使用做基础。本文介绍如何手动新建逻辑表。

## 前提条件
- 已新建目录。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据建模菜单，选择数据模型设计菜单。
3. 在逻辑表列表页面，单击新建逻辑表。
4. 配置逻辑表信息。
    a. 在新建逻辑表面板，按提示配置逻辑表所属目录、名称、储存生命周期和逻辑表描述。
      - 所属目录：逻辑表的归属目录。如果在数据标准 > 逻辑表命名规则中为该目录设计了逻辑表命名规则，则归属到这个目录下的所有逻辑表按照规则命名；例如，所属目录选择明细层模型-DWD时，表名称自动切换到dwd_xx_xx。
      - 表名称：
        - 如果在数据标准 > 逻辑表命名规则中，对”所属目录“设置了表名称规则，这里需要按照设置的规则填写表名称。
        - 如果需要自定义表名称，单击逻辑表名称后的自定义模型，切换回自定义命名方式设置表名称。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-basic.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-basic.png)
    
    b. 在字段信息页签，可通过以下方式的任意一种，录入字段信息。
      - +数据字段：单击+数据字段，可以手动添加数据字段。
        [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-column.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-column.png)
      - +分区字段：当有分区字段需求时，单击+分区字段，可以手动添加分区字段。
        [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-partition-column.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-partition-column.png)
      - 引用标准库字段：单击更多 > 引用标准库字段，可使用数据标准中已创建的标准库字段，包括数据元。
        [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-refer-standard-column.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-refer-standard-column.png)

    c. （可选）配置关联字段标准的值，当数据标准中设置了标准字段，可使用数据标准中已创建的标准字段，包括数据元，来约束管控逻辑表中字段的质量。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-column-relate-standard.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-logic-table-column-relate-standard.png)

>**说明** 
>- 如果默认属性不满足需要，可以为逻辑表添加自定义属性。自定义属性需要在数据标准 > 通用设置 > 数据建模基础信息中设置。

5. 操作完成后，单击确定。

    a. 完成以后，您可以在对应目录下的右侧逻辑表列表页面查看你已经创建的逻辑表。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-relate-catalog.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-relate-catalog.png)

    b. 在逻辑表列表页面，单击操作列的详情，在详情页面查看当前表的详细信息，如字段信息、DDL信息等。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-details.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/logic-table-details.png)

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>编辑逻辑表</td>
        <td>在逻辑表列表页面，单击目标逻辑表操作列的编辑，编辑逻辑表的所属目录，存储周期以及描述、字段等信息。
            <ul>
              <li>当需要修改已经物理化后的逻辑表时，在编辑逻辑表面板，单击右上角的解锁，解锁后进行操作。
              </li>
              <li>当逻辑表字段变更后，需要同步更新DDL语句。
              </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>复制逻辑表</td>
        <td>在逻辑表列表页面，单击目标逻辑表操作列的更多 > 复制，自动生成模型名称，您可自定义修改名称，并选择所属目录，填写逻辑表描述，单击确定。</td>
    </tr>
    <tr>
        <td>删除逻辑表</td>
        <td>
            <ul>
              <li>单个删除：在逻辑表列表页面，单击目标逻辑表操作列的更多 > 删除，出现删除提醒，单击确定。
              </li>
              <li>批量删除： 
                <ul list-style-type="circle">
                  <li>在逻辑表列表页面，选中一个或者多个需要删除的逻辑表，单击页面左下角的批量操作 > 删除。</li>
                  <li>在对话框中，单击删除，批量删除逻辑表。</li>
                </ul>
              </li>
            </ul>
            <strong>说明 </strong>
            删除逻辑表不会同时删除数据库中已生成的物理表。
        </td>
    </tr>
</table>