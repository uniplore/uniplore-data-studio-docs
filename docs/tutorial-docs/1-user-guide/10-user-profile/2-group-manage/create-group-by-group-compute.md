---
title: 通过群体计算新建群体
sidebar_position: 1
---
# 通过群体计算新建群体
您可以通过群体计算，对已有群体进行并集、交集或差集计算的方式进行圈定群体。本文主要介绍如何通过群体计算新建群体。

## 前提条件
已新建群体。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**画像分析**菜单，选择**群体管理**菜单。
3. 在**群体列表**页面右上角，单击**新建群体**。
4. 在**请选择创建新群体的方式下拉列表**中，选择**群体计算**。
5. 在**群体计算**页面，配置群体计算。
    1. 从左侧的**群体列表**，拖曳2个要进行运算的群体至画布。
    2. 单击并拖曳其中任意一个群体下方的圆点，将生成的线条连接到另外一个群体上方的圆点上。
    3. 单击**请选择**，并选择交集、并集或差集。在左上角的**计算结果**中可查看当前包含数据量。
6. 单击**查看详细群体**，可以查看群体详细列表。
7. 单击**发布群体**，配置群体参数信息。

<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><strong>群体类型</strong></td>
        <td>
            选择群体类型。
            <br/>
            <ul>
                <li><strong>实时群体</strong>：可根据标签数据的变化，手动更新的群体。</li>
                <li><strong>静态群体</strong>：只保持发布时的数据，不能进行更新。</li>
                <li><strong>动态群体</strong>：可根据标签数据的变化，配置群体更新频率，按照周期自动更新的群体。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>群体名称</strong></td>
        <td>自定义群体名称。</td>
    </tr>
    <tr>
        <td><strong>群体特征</strong></td>
        <td>自定义群体特征。</td>
    </tr>
</table>

8. 配置完成，单击**确定**。  
在**群体列表**页面，可查看已发布的群体。