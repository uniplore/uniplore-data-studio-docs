---
title: 添加离线数据同步任务
sidebar_position: 1
---
# 新增离线数据同步任务
平台支持离线数据同步任务的新建。离线数据同步任务支持的数据源类型为MySQL、Oracle、SQL Server、PostgreSQL。本文以同步MySQL数据源到Oracle目标端为例，介绍如何新增离线数据同步。

## 前提条件
- 已存在对应数据源。
- 已添加离线数据同步任务目录。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击**数据同步**菜单，选择**离线数据同步**菜单。
3. 在**离线数据同步**页面，单击**新增任务**。
4. 配置任务基本信息：在**离线数据同步配置**页面上方，填写任务名称、所属目录、描述。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-basic-info.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-basic-info.png)
5. 配置数据源
    a. 在**数据源配置**区域，选择数据源、数据对象、全量/增量、配置自定义条件。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-source.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-source.png)
    >**说明**
    >- 如果选择全量，全量同步可自定义输入sql条件根据输入的条件进行全量数据同步（仅限MySQL>和PostgreSQL数据资源类型）
    >- 如果选择增量，可选择：
    >   - 增量字段key或value。
    >   - 字段数据类型时间字符串、整体字符串、浮点字符串、字符串。
    >       - 数据字段选项仅适用于关系型数据库例如：MySQL、Oracle、SQL Server、PostgreSQL等类型的数据源。
    >       - 适用的字段类型包括字符串类型字段，类如：
    >           - Oracle字符串类型varchar,varchar2,char。
    >           - MySQL字符串类型varchar,char。

    b. 配置完成后，单击下一步。  
6. 配置目标端。
  a. 在**目标源配置**区域，选择目标端、数据对象、清理规则。
  [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-target.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-target.png)
  b. 配置完成后，单击**下一步**。
7. 配置字段映射。
    a. 在字段映射区域，单击同名映射自动链接同名字段，若字段不同名也可手动链接。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-column-mapping.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-column-mapping.png)
    b. 配置完成后，单击下一步。
8. 配置任务调度。
    a. 在配置任务调度区域，选择任务调度类型，配置同步任务的调度信息。
    - 周期调度
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-scheduler.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-scheduler.png)
        <table>
            <tr>
                <th>参数</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>任务调度类型</td>
                <td>选择周期调度。</td>
            </tr>
            <tr>
                <td>生效日期</td>
                <td>调度将在有效日期内生效并自动调度，反之，在有效期外的任务将不会自动调度，也不能手动调度。</td>
            </tr>
            <tr>
                <td>调度周期</td>
                <td>
                全量和增量的调度周期均分为日，周，月。
                    <ul>
                        <li>日：设置运行的具体时间。</li>
                        <li>
                            周：选择每周星期几运行，并设置运行的具体时间，可多选。
                        </li>
                        <li>
                            月：选择每月几号运行，并设置运行的具体时间，可多选。
                        </li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>指定运行时间</td>
                <td>设置任务在指定的时间点运行。</td>
            </tr>
        </table>

    - 一次性调度
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-once-scheduler.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-once-scheduler.png)
        <table>
            <tr>
                <th>参数</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>任务调度类型</td>
                <td>选择一次性调度。</td>
            </tr>
            <tr>
                <td>运行时间</td>
                <td>请设置任务运行时间。
                    <ul>
                        <li>任务上线立即运行：即单击上线按钮立即运行。</li>
                        <li>指定时间：在指定时间运行，支持力度到秒。</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>指定运行时间</td>
                <td>设置任务在指定的时间点运行。</td>
            </tr>
        </table>

    b. 单击展开高级配置，配置任务的速率。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-advanced.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-exchange/config-batch-job-advanced.png)
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
                <li>单个删除：对于未运行的同步任务，在目标同步任务的操作列的更多，选择删除，对同步任务进行删除。
                </li>
                <li>批量删除：在离线数据同步页面，选择需要删除的同步任务，单击页面左下角批量删除，可批量删除同步任务。
                </li>
            </ul>
        说明 
        字节流和记录数2个上限，谁先达到，谁先起作用。 
        </td>
    </tr>
</table>
