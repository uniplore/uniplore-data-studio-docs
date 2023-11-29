---
title: 添加脚本配置同步任务
sidebar_position: 1
---

# 新增脚本配置同步任务
数据同步支持通过配置脚本来新建数据同步任务。本文主要介绍如何新增脚本同步任务。

## 前提条件
- 已存在对应数据源。
- 已添加脚本配置同步任务目录。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据同步**菜单，选择**脚本配置同步**菜单。
3. 在**脚本配置同步**页面，单击**新增任务**。
4. 在配置脚本同步任务的画布页面右侧的**脚本配置**页签，配置脚本信息。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-script-job.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-script-job.png)
<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>任务名称</td>
        <td>自定义任务名称。</td>
    </tr>
    <tr>
        <td>所属类目</td>
        <td>选择任务目录。</td>
    </tr>
    <tr>
        <td>描述</td>
        <td>自定义任务描述信息。</td>
    </tr>
        <tr>
        <td>链路模式</td>
        <td>选择任务链路模式，支持离线和实时两种模式。</td>
    </tr>
        <tr>
        <td>任务调度类型</td>
        <td>选择任务调度类型，配置同步任务的调度信息。</td>
    </tr>
        <tr>
        <td>高级配置</td>
        <td>单击展开高级配置，配置任务的资源规格、超时自动终止、速率。</td>
    </tr>
</table>

5. 在画布页面，输入任务脚本，单击保存图标。
6. 在画布上方工具栏，单击运行图标，查看脚本运行日志和运行结果。
等待任务运行成功，则脚本任务创建成功。

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>查看同步任务</td>
        <td>在任务列表中，单击目标同步任务操作列的更多，选择查看，可查看同步任务详细内容。</td>
    </tr>
    <tr>
        <td>编辑脚本任务</td>
        <td>在任务列表中，对于未运行的同步任务，单击操作列的更多，选择修改，可对同步任务进行编辑。</td>
    </tr>
    <tr>
        <td>删除同步任务</td>
        <td>对于未上线的同步任务，在目标同步任务的操作列的更多，选择删除，对同步任务进行删除。</td>
    </tr>
</table>
