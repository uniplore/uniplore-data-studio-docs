---
title: 操作步骤
sidebar_position: 1
---
# 操作流程
通过操作流程图及说明，您可以直观且全面的了解数据标准设计的操作流程。本文介绍数据标准设计的操作流程。

## 采用数据元的数据标准管理
根据业务需要，创建数据标准以约束建模规范，根据字段标准设置可以快速创建字段级质量规则，保证字段命名、字段值域遵循统一的标准规范，提升数据质量。

### 流程图
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/flow.jpg)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-standard/flow.jpg)

### 流程说明
<table>
    <tr>
        <th>流程</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>新建数据字典目录</td>
        <td>通过新建数据字典目录，管控各目录下的数据字典，实现层级分离。</td>
    </tr>
    <tr>
        <td>新建数据字典</td>
        <td>通过新建并维护数据元中使用的数据字典，制定并管理平台遵循的统一数据标准，为数据元引用数据字典提供数据基础，帮助平台管理者和数据管理者管控治理后数据的一致性和数据质量。</td>
    </tr>
     <tr>
        <td>新建数据元目录</td>
        <td>通过新建数据元目录，管控各目录下的数据元，实现层级分离。</td>
    </tr>
     <tr>
        <td>新建数据元</td>
        <td>通过新建数据元，配置数据元的类型、长度、质量校验函数和引用数据字典，为模型标准化设计及数据治理过程中的质量监控提供规则依据。</td>
    </tr>
</table>
