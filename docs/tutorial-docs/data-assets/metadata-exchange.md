---
title: 元数据同步
sidebar_position: 3
---
## 概述
元数据同步，他的主要任务是为不同的数据源创建同步任务，同步任务主要是采集数据源下的数据库、数据表、数据字段、等相关数据。在同步的时候，任务会选择元模型，元模型又对应着**数据源类型**，做一对一绑定，绑定以后元模型的，技术属性、通用数据、个性属性会同步到每张表下面。
目前元数据同步任务只接入了**MySQL**、**Oracle**两种，后续会接入更多数据源。
## 采集规则
* **全量采集**（采集数据源下的所有数据库，所有数据表，所有数据字段，所有技术属性）。
* **采集周期**（天、周、月），创建同步任务的时候，根据任务规则生成Cron表达式，周期采集数据。

## 同步任务列表
进入数据资产--元数据同步任务，列表展示了元数据同步信息，可根据数据源名称检索。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-list.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-list.png)
### 新增同步任务
进入数据资产--元数据同步
右上角点击新增按钮，填写表单信息、数据源类型、数据源、元模型、采集周期、采集时间等信息，点击确认添加同步任务，
第一次添加任务会默认执行一次。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_add.png)

### 手动同步
进入数据资产--元数据同步，在任务列表，选择自己要执行的任务，点击**立即同步**可手动触发采集任务，除了手动触发，还有JOB定时器后端触发，根据cron表达式来决定什么时候触发。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_manual.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_manual.png)

### 同步任务编辑 
进入数据资产--元数据同步--任务列表选择要编辑的任务，点击编辑即可弹出编辑框，只有cron表达式规则可以编辑，采集周期、采集时间都属于采集规则。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-edit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-edit.png)

### 删除同步任务
进入数据资产--元数据同步--任务列表，选择要删除同步任务，删除同步任务后，连带同步记录实例也会被删除掉。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-delete.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-delete.png)

### 同步任务实例 
进入数据资产--元数据同步--任务列表，点击查看实例，进入实例列表界面，实例列表主要是记录，任务每次同步的记录
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_view_instance.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_view_instance.png)
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_recored.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync_task_recored.png)

### 查看错误日志 
进入数据资产--元数据同步--任务实例，点击查看日志，弹出错误日志信息。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-errlog.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-asserts/metadataSync/sync-task-errlog.png)
