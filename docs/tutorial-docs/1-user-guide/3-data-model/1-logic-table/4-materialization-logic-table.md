---
title: 物理化逻辑表
sidebar_position: 4
---

# 物理化逻辑表
通过物理化逻辑表，可以将您在平台中创建的逻辑表存储到对应的数据源中，成为数据源中实际存在的表，方便实施后面的管理。本文介绍如何物理化逻辑表。

## 前提条件
- 已生成待物理化逻辑表的DDL语句。
- 已添加对应的数据源。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据建模菜单，选择数据模型设计菜单。
3. 在逻辑表列表页面，单击目标逻辑表操作列的详情。
4. 单击物理表页签，并单击物理化。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/materialization-logic-table-tab.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/materialization-logic-table-tab.png)

5. 在物理化面板，选择数据源类型及数据源，单击执行物理化。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-materialization.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/create-materialization.png)

6. 物理化完成后，在物理表页签查看物理化后的表信息。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/materialization-logic-table-tab-with-data.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-model/materialization-logic-table-tab-with-data.png)

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>物理化逻辑表（另外一种入口的操作）</td>
        <td>在逻辑表列表中，单击目标逻辑表操作列的更多 > 物理化。</td>
    </tr>
    <tr>
        <td>查看物理表</td>
        <td>
        物理化完成后，在物理表页签查看物理化后的表信息：
            <ul>
              <li>单击字段详情，查看数据字段与分区字段信息。
              </li>
              <li>单击数据预览，查看字段详情及字段中的数据信息，完成后单击关闭。</li>
            </ul>
        </td>
    </tr>
</table>