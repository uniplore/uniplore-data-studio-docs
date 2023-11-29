---
title: 设置对象关系
sidebar_position: 5
---

# 设置对象关系
关系是体现对象之间表对应关系的逻辑展示，关系设置后可应用于画像分析中的圈群分析。本文为您介绍如何设置对象关系。

## 前提条件
已创建对象及标签。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据标签**菜单，选择**关系管理**菜单。
3. 在**关系列表**页面，单击**新建关系**。
4. 在关系图画布页面，从左侧对象列表中拖动需要建立关系的对象到右侧视图中。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-relation-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-relation-page.png)
    > 说明  
    > - 此处可根据实际情况拖动多个表，最多可拖动10个表。
5. 设置表与表之间的关联关系。
    a. 将鼠标悬停在对象的待关联字段，按住鼠标拖动到另一个对象待关联字段上，再松开鼠标，将对象关联起来。
    b. 单击连线中间的**左连接**，展开如下图所示的**关联设置**界面。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-relation.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-relation.png)
6. 设置关系的关联类型、映射类型和关联条件。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-relation-model.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-relation-model.png)

<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><strong>关联类型选择</strong></td>
        <td>关联类型有：左连接、内连接、右连接、全连接。代表数据库内部的处理机制，默认选择左连接。</td>
    </tr>
    <tr>
        <td><strong>映射类型选择</strong></td>
        <td>映射类型有：1:n、1:1、n:1、n:n。含义分别为：1表对多表、1表对1表、多表对1表、多表对多表。</td>
    </tr>
    <tr>
        <td><strong>关联条件选择</strong></td>
        <td>选择表字段的对应关系，可添加多个。</td>
    </tr>
</table>