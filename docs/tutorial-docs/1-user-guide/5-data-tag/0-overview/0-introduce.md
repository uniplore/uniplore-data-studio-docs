---
title: 功能简介
sidebar_position: 0
---

# 功能简介
数据标签产品从大数据应用落地点出发，提供了将治理后的数据以业务化视角进行建模、查看、管理及使用，并提供业务衍生标签的自定义功能，为上层应用提供统一的标签数据目录和标签调用接口，沉淀上层应用制作的模型标签，实现高价值标签共享复用，形成标签运营生态。

## 总述
数据标签在相应行业应用解决方案的结合下，能够让不是很熟悉大数据应用系统开发的程序员也能够快速搭建大数据应用，从而实现大数据价值的快速落地，数据标签帮助数据开发人员进行数据表的实体化，加速应用开发，沉淀业务模型的输入。比如在订单中，卖家能够理解的内容是成交笔数、成交金额、成交日期等实际现实对象，而非一张张表，如订单表。需要数据标签能面向零售行业，提供实体化的对象，如买家这个实体，这个实体上，需要赋予性别、年龄等标签信息，同时和商品建立关系，这个被赋予实际标签的实体，才是卖家能够理解的对象，基于这个对象才能去做分析。

数据标签帮助构建这样的对象，提供给分析型应用实际的内容，同时让应用开发者也直观了解需要去获取的数据对象，直接使用实体化后的对象及标签进行加工、衍生、调用。

## 优势
数据标签是以标签为基础，建立跨多个计算资源之上的统一逻辑模型，开发者可以在“标签”这种逻辑模型，通过接口的方式进行快速的应用搭建。这种方式的好处：
- 屏蔽掉应用开发人员对于下层多个计算存储资源的深入理解与复杂的系统对接工作。
- 通过数据服务的形式透出也有助于IT部门对数据使用的管理，避免资源的重复和冗余。

## 标签模型设计
- 标签模型基于OLT（对象、关系、标签）模型来抽象物理数据，构建语义层，为业务人员“看懂数据”从而“使用数据”提供基础，支持对象关系的多级类目管理。
    - 对象定义：包括实体类（无时间维）和事件类（有时间维），描述一个客观存在实体或事件；从数据角度看，是一个多种数据描述同一实体或事件的集合。
    - 关系定义：关系是建立在两个对象上的关系。如用户和购买商品事件的关系，用户和学习课程事件的关系等。
    - 标签定义：标签是挂接在对象，对对象进行描述的属性的集合。
- 对象管理
    - 新建对象及标签：支持跨存储类型的数据源整合，低门槛构建“宽表”，形成业务可以理解的对象及其原生标签信息。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/object-manage-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/object-manage-page.png)
- 标签管理
    支持对标签进行编辑、上线、下线；实现标签的生命周期管理。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/tag-manage-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/tag-manage-page.png)

## 标签加工
- 计划列表管理
    - 支持已有标签加工生成衍生标签功能。
    - 支持文本TQL编写标签方案，将衍生标签配置关联到实体或关系上，生成的标签方案任务分为一次性调度和周期调度。
    - 支持标签方案生成任务的运维管理功能，并提供对计划任务的上线、下线、查看、运维、删除等功能。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/plan-manage-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/plan-manage-page.png)

- 物理表查看
    - 支持查看计算资源下的物理表信息，并提供刷新、字段详情查看、数据预览等功能。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/materialization-table-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/materialization-table-page.png)

## 标签物化
支持将构建的标签模型统一加速至分析型数据库形成大宽表，以提供后续分析场景使用。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/materialization-config-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/materialization-config-page.png)

## 标签统计
支持标签生产和使用情况统计，包含标签目录统计、标签使用、对象使用统计等。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/tag-count-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-tag/tag-count-page.png)
