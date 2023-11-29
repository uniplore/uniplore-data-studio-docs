---
title: 新建对象及标签
sidebar_position: 0
---

# 新建对象及标签
对象是描述一个客观存在实体或事件，从数据角度看，是一个或多个标签描述同一实体或事件的集合。本文介绍如何新建对象及标签。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据标签**菜单，选择**对象管理**菜单。
3. 在**对象列表**页面右上角，单击**新建对象**。
4. 在**新建对象**面板，配置计算逻辑。
    a. 从左侧选择计算资源，将目标表拖动到右侧画布中。
        [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object.png)
    > 说明 
    > - 单击刷新，可刷新已选择云计算资源中的缓存表。
    > - 您可以根据需要拖入一张表或多张表。

    b. 在拖入的节点上单击字段，选择所需字段。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/select-column.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/select-column.png)

    c. 如果拖入多张表，需设置表的关联关系。
    
        i.单击两表之间的关联。
        ii.选择两表的关联类型。
        iii.单击添加一项，选择表与表之间关联的字段。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/set-table-relation.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/set-table-relation.png)
    
    d. 配置完成后，单击**下一步**。

5. 配置对象的基础信息。
    a. 设置对象名称、对象code、所属目录和对象描述。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-basic.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-object-basic.png)
    > 说明  
    > 在**所属目录**下拉列表，单击**新建目录**，可根据业务需要新建目录。
    b. 在字段列表中，根据业务需要选中主键，配置**分类**、**标签值类型**。
    > 说明  
    > 标签分类按照字段类型分为指标、日期和维度，新建对象时自动分类，支持手动变更。自动分类规则如下：
    > - 数值类：指标。
    > - 日期类：日期。
    > - 除去数值、日期类：维度。
    c. 单击**确定**。

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>新建对象目录</td>
        <td>在左侧导航栏，鼠标悬停在<strong>对象列表</strong>或其子目录所在行，单击右键，选择<strong>新建目录</strong>，可新建当前目录的子文件夹。</td>
    </tr>
    <tr>
        <td>编辑对象目录</td>
        <td>在左侧导航栏，鼠标悬停在<strong>对象列表</strong>的子目录所在行，单击右键，选择<strong>编辑</strong>，可对对象目录编辑。</td>
    </tr>
    <tr>
        <td>删除对象目录</td>
        <td>在左侧导航栏，鼠标悬停在<strong>对象列表</strong>的子目录所在行，单击右键，选择<strong>删除</strong>，可对删除对象目录。</td>
    </tr>
    <tr>
        <td>查看对象详情</td>
        <td>在<strong>对象列表</strong>页面，单击待查看对象<strong>操作</strong>列的<strong>详情</strong>，查看对象详情，包括基础信息、当前对象所包含的标签列表、计算逻辑、字段信息、物化配置和关系列表。</td>
    </tr>
    <tr>
        <td>编辑对象</td>
        <td>
            <p>在<strong>对象列表</strong>页面，单击待编辑对象<strong>操作</strong>列的<strong>编辑</strong>，在<strong>编辑对象</strong>配置向导面板中，可编辑当前对象的计算逻辑和基础信息。</p>
            <blockquote>
                <p>说明</p>
                <p>对象code不支持编辑。</p>
            </blockquote>
        </td>
    </tr>
    <tr>
        <td>删除对象</td>
        <td>
            <p>单个删除：在<strong>对象列表</strong>页面，单击待删除对象<strong>操作</strong>列的<strong>删除</strong>，可删除当前对象。</p>
            <blockquote>
                <p>重要</p>
                <ul>
                    <li>对象中的标签已上线或存在标签物化计划，则对象无法被删除。</li>
                    <li>对象被删除后无法恢复，请谨慎操作。</li>
                </ul>
            </blockquote>
        </td>
    </tr>
    <tr>
        <td>编辑标签</td>
        <td>
            <p>在<strong>对象列表</strong>页面，单击目标对象<strong>操作</strong>列的<strong>详情</strong>，在<strong>对象详情</strong>页签下的标签列表中，单击<strong>操作</strong>列的<strong>编辑</strong>，可编辑目标对象下的标签。关于编辑标签值类型和目录。</p>
            <blockquote>
                <p>说明</p>
                <ul>
                    <li>标签code和所属对象不支持编辑。</li>
                    <li>标签上线后，只能编辑所属目录。</li>
                </ul>
            </blockquote>
        </td>
    </tr>
    <tr>
        <td>删除标签</td>
        <td>
            <ul>
                <li>单个删除：在<strong>对象列表</strong>页面，单击目标对象<strong>操作</strong>列的<strong>详情</strong>，在<strong>对象详情</strong>页签下的标签列表中，单击<strong>操作</strong>列的<strong>删除</strong>，可删除目标对象下的标签。</li>
                <li>批量删除：在<strong>对象列表</strong>页面，单击目标对象<strong>操作</strong>列的<strong>详情</strong>，在<strong>对象详情</strong>页签下的标签列表中，选中待删除的标签，在左下角选择<strong>批量操作</strong> > <strong>删除</strong>。</li>
            </ul>
            <blockquote>
                <p>说明</p>
                <p>主标签不能被直接删除，如需删除，请直接删除对象来删除主标签。</p>
            </blockquote>
        </td>
    </tr>
    
</table>

## 后续步骤
对象创建成功后，需要对对象中的标签进行上线操作。