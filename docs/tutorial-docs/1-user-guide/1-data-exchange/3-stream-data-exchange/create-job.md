---
title: 添加实时数据同步任务
sidebar_position: 1
---

# 新增实时数据同步任务
平台支持实时数据同步任务的新建。实时数据同步任务支持的数据源类型为MySQL、Oracle、SQL Server、PostgreSQL、Kafka。本文以同步MySQL数据源到Kafka目标端为例，介绍如何新增实时数据同步。

## 前提条件
- 已存在对应数据源。
- 已添加实时数据同步任务目录。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据同步**菜单，选择**实时数据同步**菜单。
3. 在**实时数据同步**页面，单击**新增任务**。
4. 配置任务基本信息：在**实时数据同步配置**页面上方，填写任务名称、所属目录、描述。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-basic-info.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-basic-info.png)
5. 配置数据源
    a. 在**数据源配置**区域，选择数据源类型、数据源、数据对象、数据操作、格式转化，任务类型、是否分表、采集起点等配置。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-source.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-source.png)
    >**说明**
    >- 任务类型、是否分表、采集起点已设默认值，后续将支持更多操作。
    >- 如果格式转化选择“嵌套JSON平铺”,多层嵌套格式的JSON分解为单层结构,例如：{"a":1, "b": {"c":3}}, 将会被分解为：{"a":1,"b_c":3}。
    b. 配置完成后，单击下一步。  
6. 配置目标端。
  a. 在**目标源配置**区域，选择数据源类型（Kafka）、数据源、topic、读取类型。
  [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-target.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-target.png)
  b. 配置完成后，单击**下一步**。
7. 配置任务调度。
    a.配置高级配置，配置任务的资源规格、速率。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-scheduler.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-stream-job-scheduler.png)
    <table>
        <tr>
            <th>参数</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>资源规格</td>
            <td>请设置任务实例运行需要的CPU内核（系统默认2个）与内存（系统默认1024 MB）。</td>
        </tr>
        <tr>
            <td>速率</td>
            <td>       
            设置任务的速率上限，任务运行会尽可能达到该速度但是不是超过它。
                <ul>
                    <li>
                    通道（个）：通道数量上限， 即并发线程数量上限。
                    </li>
                    <li>
                        字节（byte/s）/通道：每个通道每秒传输的字节流上限。
                    </li>
                    <li>
                        记录（条/s）/通道：每个通道每秒传输的记录数上限。
                    </li>
                </ul>
            说明 
            字节流和记录数2个上限，谁先达到，谁先起作用。 
            </td>
        </tr>
    </table>

    c. 操作完成后，单击提交，在提示对话框中单击确定。

## 相关操作
<table>
    <tr>
        <th>操作</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>查看实时任务</td>
        <td>在目标实时任务的操作列，单击查看，可查看实时任务详细内容。</td>
    </tr>
    <tr>
        <td>编辑实时任务</td>
        <td>在目标实时任务的操作列，单击编辑，可对实时任务进行编辑。</td>
    </tr>
    <tr>
        <td>删除实时任务</td>
        <td>对于未运行的同步任务，在目标同步任务的操作列的更多，选择删除，对同步任务进行删除。</td>
    </tr>
</table>
