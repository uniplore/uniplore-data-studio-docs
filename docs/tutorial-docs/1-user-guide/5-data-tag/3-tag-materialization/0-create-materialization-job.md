---
title: 新建物化任务
sidebar_position: 0
---

# 新建物化任务
通过标签物化任务，可以将已有标签同步到其他计算资源中复用，减少标签的基础性操作成本，提升标签使用效率。本文为您介绍如何新建物化任务。

## 前提条件
对象的标签已上线且必须包含主标签。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据标签**菜单，选择**对象管理**菜单。
3. 在**对象列表**页面，单击目标对象**操作**列的**详情**。
4. 在对象详情页面，单击**物化配置**页签。
5. 在**物化配置**页面的**物化任务**页签，单击列表右上方的**新建**。
6. 在**新建物化任务**面板，配置物化任务。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/create-materialization-job.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/data-tag/create-materialization-job.png)
<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td><strong>任务名称</strong></td>
        <td>任务的名称，必填参数。</td>
    </tr>
    <tr>
        <td><strong>目标计算资源</strong></td>
        <td>选择需要同步标签的目标计算资源，所选计算资源可与当前标签所属的计算资源不同。必选参数。</td>
    </tr>
    <tr>
        <td><strong>物化数据范围</strong></td>
        <td>
            选择需要同步的已上线标签范围。
            <ul>
                <li>全部标签：将所有标签同步到目标计算资源。</li>
                <li>自定义标签范围：将所选标签同步到目标计算资源，且必须包含主标签。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>运行模式</strong></td>
        <td>
            选择任务运行模式。
            <ul>
                <li>立即运行：任务配置好以后立即执行任务。</li>
                <li>周期运行：按照配置的周期运行任务，可配置任务的生效日期、调度周期、具体时间和高级设置。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>主键重复时</strong></td>
        <td>
            设置主键数据重复时的处理策略。
            <ul>
                <li>覆盖：保留排序靠后的数据。</li>
                <li>跳过：保留排序靠前的数据。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>清空历史数据</strong></td>
        <td>选中后任务执行前会清空历史数据，导致任务运行期间，标签查询不出数据，取消选中会合并历史数据。</td>
    </tr>
    <tr>
        <td><strong>完成新建立即上线该任务</strong></td>
        <td>
            选中是否在新建完任务后立即执行任务的上线操作。
            <br/>
            说明
            <ul>
                <li>-如果取消选中<strong>完成新建立即上线该任务</strong>，需要手动上线衍生标签任务。</li>
                <li>如果任务上线失败，单击<strong>上线日志</strong>， 进行自助分析。</li>
            </ul>
        </td>
    </tr>
</table>

7.  配置完成后，单击**确定**。

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>编辑任务</td>
        <td>在任务列表页面，单击待编辑物化任务<strong>操作</strong>列的<strong>编辑</strong>。已上线任务不支持编辑。</td>
    </tr>
    <tr>
        <td>删除任务</td>
        <td>在任务列表页面，单击待删除物化任务<strong>操作</strong>列的<strong>删除</strong>。已上线任务不支持删除。</td>
    </tr>
    <tr>
        <td>查看任务详情</td>
        <td>在任务列表页面，单击待查看物化任务<strong>操作</strong>列的<strong>查看</strong>。未上线任务不支持查看任务详情。</td>
    </tr>
</table>