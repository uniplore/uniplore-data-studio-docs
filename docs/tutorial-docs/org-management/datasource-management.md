---
title: 数据源管理
sidebar_position: 2
---

## 概述

展示系统中所有可用的数据源，目前版本支持的数据源类型包括：MySQL、Oracle、Postgres，其他数据源类型将在后续版本逐步引入支持。不同的数据源在连接是会有不同的差异，不过大多数均可通过 JDBC 连接，这也是平台目前采用的方法。用户可新增、编辑、筛选数据源、把数据源授权给指定项目。

## 数据源操作

### 添加

点击“添加数据源”按钮，进入新增页面。需要注意连接地址为标准 IP 地址格式（比如：127.0.0.1），端口号是数据源的连接端口号，不同的数据源端口号不相同，用户名、密码也要对应上。测试连接成功，即可保存该数据源。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/add.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/add.png)

### 编辑

点击“编辑”打开编辑页面，更改目标信息，测试连接成功后，即可完成编辑。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/edit.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/edit.png)

### 搜索

可在最上方搜索框中根据数据源名称、类型、授权项目筛选对应的数据源。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/search.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/search.png)

### 授权项目

点击“授权”把数据源授权给项目，一个数据源可授权给多个项目。授权之后，可以在授权项目中对该数据源进行规则配置、任务管理。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/authorize.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/org-management/datasource-manage/authorize.png)
