---
title: 功能简介
sidebar_position: 0
---

# 功能简介
在数据中台建设过程中，搭建核心处理平台，并根据相关标准要求，将源数据或治理后的数据，按照“全面、高效、统筹”的共享原则，“低延时”、“精准化”的传递给用户，方便更多应用消费数据，实现数据价值。协同管控各种组织机构，为智慧化运行提供支撑，实现跨层级、跨部门、跨行业、跨区域信息即时共享，做到高可靠、低延时。同时，数据被应用的使用情况评估也作为数据中台日常运营的重要指标项。提供更多数据生产需求，完成数据从生产、使用、到评估的闭环。
数据服务提供了如下数据服务能力。
- 数据服务API的源头为数据表，可以是单表也可以是多表，请求后最终以SQL的形式到数据库查询，并返回符合条件的数据，将数据组装成报文格式返回。目前数据服务API提供单数据服务API，SQL转API。数据源可以是 MySQL、Oracle、PostgresSQL、SQL Server等数据存储中的数据表。

数据服务为用户提供了数据中台建设过程中的数据服务化能力，面向数据开发者提供覆盖各个加工阶段统一体验的、便捷的数据查询转服务、服务管理、服务运维能力；面向数据资产管理者提供服务的统计分析、服务用量统计分析、热门数据统计分析能力，实现数据中台建设后半场“数据应用”的有效落地，支撑数据智能应用的高效开发。

## API开发
支持数据服务API。支持创建、编辑和测试API。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-develop-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-develop-page.png)
- 数据服务API：将数据库中的表通过向导模式和SQL模式配置生成API，方便开发者申请使用或调用。目前支持的云计算资源有MySQL、PostgreSQL、Oracle、SQL Server等。
- API管理：支持对API上线、下线、测试等操作。API上线后会在API市场上架，其他工作组及用户可以申请API使用；API下线后自动收回已对外授权的API的使用权限。

## API管理
对API做共享管理，支持对已上线的数据API授权、查看日志。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-manage-page.png)

## API类目管理
API类目管理指通过创建统一的API类目，进行上架的API分类管理。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-catalog-manage-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-catalog-manage-page.png)

## API市场
API市场是所有用户申请API、浏览已开放的API的入口。进入API市场后，可通过搜索、过滤等各类条件查看API信息。在API市场中点击「申请」按钮，在弹窗中补充信息后，完成申请。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-market-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-market-page.png)

## API上下架审批
展示API上下架申请列表。可以查看申请的详情。支持操作员对申请单的审批动作，支持通过、拒绝等功能。支持查看已审批和未审批的申请单。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-publish-apply-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-publish-apply-page.png)

## API授权审批
支持审批人查看需要自己审批的API使用申请单，并提供对审批单的查看、通过、拒绝功能。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-auth-approve-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-auth-approve-page.png)

## 我的API
- 已获授权API：对已获授权API通过API维护和应用维度进行查看，支持测试API、停用以归还权限、查看调用信息，也支持查看单个API的授权详情，包括：授权状态、授权人、授权时间等。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/myapi-authorized-api-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/myapi-authorized-api-page.png)
- API使用申请：支持查看已经提交的API使用申请，包括待审核和审批完成的。用户可以查看自己申请的详细信息和审批结果，用户也可以取消申请。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/myapi-applied-api-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/myapi-applied-api-page.png)

## 已对外授权API
支持已对外授权API列表的查看，支持查看明细。
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/myapi-authorized-api-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/myapi-authorized-api-page.png)

## 服务报表
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-report-page.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/service-report-page.png)
- 调用趋势：支持用户在最近1天、最近30天、最近1年等时间范围下，统计调用汇总信息，包括总调用次数、调用耗时、QPS。
- 查看明细：支持单次调用的明细信息查看，包括调用时间、服务名称、服务类型、响应状态、响应时间等。
