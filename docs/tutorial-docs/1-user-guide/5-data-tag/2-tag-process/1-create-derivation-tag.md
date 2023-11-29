---
title: 新建衍生标签
sidebar_position: 1
---

# 新建衍生标签
衍生标签是通过已有的原生标签或衍生标签经过逻辑加工生成的，您可以通过新建计划来新建衍生标签。本文主要介绍如何新建衍生标签。

## 前提条件
- 已设置计算资源。
- 已上线标签。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据标签**菜单，选择**标签加工**菜单。
3. 在**标签加工**页面右上角，单击**新建**。
4. 在**新建标签**面板，进行衍生标签的基础配置。
5. 配置字段逻辑。
    a. 在查询编辑器里面输入TQL语句。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/create-derive-tag-tql.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/create-derive-tag-tql.png)
    b. 单击解析，等待TQL语句运行解析。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/create-derive-tag-tql-parse.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/create-derive-tag-tql-parse.png)
6. 进行衍生标签的标签配置。

<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><strong>标签名称</strong></td>
        <td>衍生标签名称。</td>
    </tr>
    <tr>
        <td><strong>标签CODE</strong></td>
        <td>衍生标签CODE。</td>
    </tr>
    <tr>
        <td><strong>标签值类型</strong></td>
        <td>衍生标签值类型。可选项为：字符串，枚举，布尔，日期，数值。请根据标签具体用途选择合适的标签值类型。</td>
    </tr>
    <tr>
        <td><strong>数据类型</strong></td>
        <td>衍生标签的数据类型，请根据标签值类型选择对应的数据类型。</td>
    </tr>
    <tr>
        <td><strong>长度</strong></td>
        <td>衍生标签值的最大长度。</td>
    </tr>
    <tr>
        <td><strong>精度</strong></td>
        <td>衍生标签值的精度。</td>
    </tr>
    <tr>
        <td><strong>描述</strong></td>
        <td>衍生标签的描述信息。</td>
    </tr>
</table>

7. 配置完成后，点击下一步，进行衍生标签计划的基础配置
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-derive-tag-plan-basic.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/config-derive-tag-plan-basic.png)
<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><strong>计划名称</strong></td>
        <td>创建衍生标签的计划名称。</td>
    </tr>
    <tr>
        <td><strong>所属对象</strong></td>
        <td>衍生标签的所属对象。固定值，不可修改。</td>
    </tr>
    <tr>
        <td><strong>运行模式</strong></td>
        <td>
            <ul>
                <li><strong>立即运行：</strong>计划上线后，立即运行衍生标签的新建计划。</li>
                <li><strong>周期运行：</strong>计划上线后，根据设置的时间周期执行衍生标签的新建计划。需设置生效日期、调度周期、具体时间和高级设置等。</li>
            </ul>
        </td>
    </tr>
</table>

8. 配置完成后，单击**确定**。

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>编辑计划</td>
        <td>在计划列表页面，单击待编辑计划<strong>操作</strong>列的<strong>编辑</strong>。已上线计划不支持编辑。</td>
    </tr>
    <tr>
        <td>删除计划</td>
        <td>在计划列表页面，单击待删除计划<strong>操作</strong>列的<strong>删除</strong>。已上线计划不支持删除。</td>
    </tr>
    <tr>
        <td>查看计划详情</td>
        <td>在计划列表页面，单击待查看计划<strong>操作</strong>列的<strong>查看</strong>，可查看计划的字段逻辑和基础配置信息。</td>
    </tr>
</table>

## 后续步骤
衍生标签创建成功后，需要上线衍生标签。