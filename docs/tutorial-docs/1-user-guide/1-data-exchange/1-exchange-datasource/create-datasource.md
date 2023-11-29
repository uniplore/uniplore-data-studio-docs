---
title: 新建数据源
sidebar_position: 0
---
# 新建数据源
数据同步前，需要准备好数据源作为数据源端或目标端。您可以通过新建数据源，供数据同步时使用。本文介绍如何新建数据源。

## 背景信息
数据同步支持关系型数据库、消息队列等类型数据源的配置。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据同步**菜单，选择**同步数据源**菜单。
3. 在**同步数据源管理**页面，单击**新建数据源**。
4. 在**新增数据源**弹窗面板中，选择数据源类型，配置数据源参数。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/create-datasource.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/create-datasource.png)
5. 配置完成后，单击**测试连接**，连接成功后，单击**确定**。

## 相关操作
在数据源添加成功后，在同步数据源管理页面，可对数据源进行以下操作：
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
     <tr>
        <td>查看数据源详情</td>
        <td>在数据源列表，单击目标数据源操作列的更多，选择查看详情，查看数据源的基本信息和数据对象的表结构信息。</td>
    </tr>
     <tr>
        <td>编辑数据源</td>
        <td>在数据源列表，单击目标数据源操作列的更多，选择编辑，对除数据源类型外的数据源信息进行编辑。</td>
    </tr>
     <tr>
        <td>移除数据源</td>
        <td>在数据源列表，单击目标数据源操作列的更多，选择移除，将数据源从列表中移除。</td>
    </tr>
     <tr>
        <td>测试连通数据源</td>
        <td>在数据源列表，单击目标数据源操作列的测试连通，可更新数据源连通性状态。如果连通失败，在可连通列查看失败原因。</td>
    </tr>
</table>