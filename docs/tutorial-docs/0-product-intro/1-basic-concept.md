---
title: 基本概念
sidebar_position: 1
---

# 基本概念
本文介绍 Uniplore Data Studio 平台的基本概念。

## 系统设置
**租户**：在平台中，租户为最高级权限隔离的命名空间，一个租户下可以有若干账号，不同账号可以分配不用的角色，数据可以在租户内共享，不同租户之间数据完全隔离。

**工作组**：平台中用于数据隔离的命名空间，通常为一个用户组、一个项目或一个应用。工作组下包含计算资源、工作组成员。工作组内的数据通常为工作组内全部成员可见。

## 数据同步
**数据源**：是指数据库应用程序所使用的数据库或者数据库服务器，在平台的数据同步中可以将配置好的数据源端数据同步到目标端。

**多源异构数据**：指的是多种不同结构的数据源。

**Oracle CDC**：实时数据同步模式，对源表进行INSERT、UPDATE或DELETE等操作的同时可以提取数据，变化的数据被保存在数据库的变化表中，通过订阅变化数据的方式实现数据的秒级同步。

**MySQL Binlog**：实时数据同步模式，通过同步并解析记录所有数据库表结构变更（例如CREATE、ALTER TABLE…）以及表数据修改（INSERT、UPDATE、DELETE…）的二进制日志，实现数据的秒级同步。

**SQLServer CDC**：实时数据同步模式，开启CDC的源表在插入、更新和删除活动时会插入数据到日志表中。CDC通过捕获进程将变更数据捕获到变更表中，通过CDC提供的查询函数，实现数据的秒级同步。

## 数据标准
**数据标准**：是对含义相同但字段名称不同的数据进行统一规范管理的数据准则，数据标准可定义字段的取值范围、度量单位等内容。

**数据元**：表示一个数据的最小信息项，包含基本的描述、值域范围和约束规则。

**生命周期**：指的是表的生命周期，指表（分区）数据从最后一次更新的时间算起，在经过指定的时间后没有变动，则此表（分区）将被数据库自动回收。这个指定的时间就是生命周期，生命周期的单位一般是天。

## 数据建模
**数据模型**：是数据特征的抽象，它从抽象层次上描述了系统的静态特征、动态行为和约束条件，为数据库系统的信息表示与操作提供一个抽象的框架，平台支持逻辑模型和物理模型。

- **逻辑模型**：反映的是系统分析设计人员对数据存储的观点，是对概念数据模型进一步的分解和细化；平台中可通过手动的方式来实现逻辑模型创建。

- **物理模型**：是对真实数据库的描述；平台中通过将已创建好的逻辑表物理化到数据库来实现物理模型的创建。

## 数据标签
**标签模型**：是围绕实体（Object）、关系（Link）、标签（Tag）三大元素对分布在不同数据库中的数据进行网络化的建模方式。

- 实体用于描述某个客观的对象，如设备人员地址等，对应到物理数据表上一般就是属性表，有一个主键来代表每一个对象，剩下的每一列就是标签即描述对象的属性。

- 关系是表示对象和对象之间的联系、事件、行为，一般对应到物理数据表上一般就是事实流水表。

**标签**：是指对用户这一对象的一个最小描述单元，代表着所描述对象某一个具体的客观事实的抽象表达，如属性（教育水平：职业高中、本科、专科、研究生），行为（成交金额、收藏次数、位置定位），或者是兴趣（对于多个关键词的偏好度），是一种以业务视角出发的数据建模方法，标签既可能是数值、也可能是枚举值，也可以是多个Key-Value组织的列，还可能是多字段组成的事实表（如对象、时间、谓语、宾语）。

## 用户画像
**群体**：分析对象上满足一定条件的单体的集合。

**群体计算**：同一个实体的群体和群体之间的交集、差集和并集计算，生成新群体。

## 数据服务
**API**：应用程序编程接口，是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力。

## 数据资产
**资产目录**：是对数据资源平台元数据的有序组织，是记录数据体系的保障。数据类目是目录信息与服务、保障与支撑所组成的一个整体。针对资产的合理组织，需要对资产进行对应分类，如部门类目、主题类目、行业类目，可进行该类目下资产数据进行搜索、展现以及权限申请。

**数据资产**：数据资源平台中存在大量的数据表、标签、API等各类数据资产，数据管理者通过数据汇聚、数据治理、数据分析后，需要对整个平台数据进行统一管控，了解平台的核心数据资产，提供对应的数据资产管理规范。