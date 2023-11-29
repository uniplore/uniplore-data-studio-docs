---
title: 新建数据字典
sidebar_position: 0
---

# 新建数据字典
数据字典管理支持创建并维护数据模型中使用的数据字典，制定并管理平台遵循的统一数据标准，为数据元的值域设置中引用数据字典提供数据基础，帮助平台管理者和数据管理者管控治理后数据的一致性和数据质量。本文为您介绍如何新建数据字典。

## 背景信息
数据字典（data dictionary）：即设计的数据模型中数据对象的描述信息的集合。创建好数据字典后，可以用来规范数据元的值域范围。
例如：我们把“研究生”、“本科”、“高中”、“初中”等这类词统一用“教育水平”这个描述词作为集合包含进去。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据标准菜单，选择数据字典管理菜单。
3. 新建数据字典目录。
    1. 在数据字典管理页面，单击页面左侧目录+按钮。
    2. 选择添加顶级目录。
    3. 在目录设置弹窗，输入目录名称和目录描述，单击确定。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/create-catalog.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/create-catalog.png)
>**说明** 
>支持创建多层目录，即可在一级目录上创建二级目录。
>- 编辑目录：将鼠标悬停至目标目录，单击右键，选择编辑目录，修改目录的名称、标识或描述后，单击确认。
>- 删除目录：将鼠标悬停至目标目录，单击右键，选择删除目录，在弹出页面，单击确认完成删除。

4. 在数据字典管理页面，单击新建数据字典。
5. 在配置数据字典弹窗的基础信息配置页面，输入编码、名称等信息。
6. 在配置数据字典弹窗的编码值，配置值编码，值名称和值描述信息后，单击确定。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/create-dict.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/create-dict.png)
>**说明**
>- 单击新增数据字典值可以添加多条数据字典值。

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>编辑数据字典</td>
        <td>在数据字典管理页面，选择目标数据字典，单击操作列的编辑，在配置数据字典面板，根据需求修改名称、别名或所属类目等信息。</td>
    </tr>
    <tr>
        <td>删除数据字典</td>
        <td>       
        设置任务的速率上限，任务运行会尽可能达到该速度但是不是超过它。
            <ul>
                <li>单个删除：在数据字典管理页面，选中需要删除的数据字典，单击操作列的删除。
                </li>
                <li>批量删除：在数据字典管理页面，选择删除一个或多个不需要的数据字典，单击列表下方的删除。
                </li>
            </ul>
        说明 
        如果数据字典已经被引用，则需要先解除引用才可以删除。
        </td>
    </tr>
</table>