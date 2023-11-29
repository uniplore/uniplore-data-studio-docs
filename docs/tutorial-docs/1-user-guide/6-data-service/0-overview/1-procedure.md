---
title: 操作步骤
sidebar_position: 1
---

# 操作流程
数据服务主要内容包括服务封装、服务调用两方面，通过流程图，可以清晰直观的了解各功能之间的关系。本文介绍数据服务的操作流程。

## 服务封装流程及说明

### 流程图
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/flow.jpg)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/flow.jpg)

### 流程说明
<table>
    <tr>
        <th>流程</th>
        <th>说明</th>
    </tr>
     <tr>
        <td>创建应用</td>
        <td>对API的应用管理，按应用获取密钥和访问域名信息供外部调用已获得授权API。</td>
    </tr>
     <tr>
        <td>创建工作组</td>
        <td>创建工作组，达到各工作组之间空间隔离的效果。</td>
    </tr>
     <tr>
        <td>创建API</td>
        <td>
        支持创建数据服务API、三方API、服务编排API。
          <ul>
            <li>数据服务API：数据API是一种由计算资源中的数据通过参数配置生成API的API类型，生成API后可以方便后续调用，减少资源操作成本。</li>
            <li>三方API：数据资源平台支持创建第三方平台提供的API，通过生成API可以方便后续调用，减少资源操作成本。</li>
            <li>服务编排：提供拖拽式、可视化的API编排能力。可按照业务逻辑，以串行、并行和分支等结构编排多个API为工作流。</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>上线API</td>
        <td>通过上线API操作才能使API被调用。</td>
    </tr>
    <tr>
        <td>上架API</td>
        <td>对API做共享管理，支持对已上线API做上架操作。同时触发审批流程，审批通过后API会在数据资产中心API栏目上架，其他工作组及用户可以申请使用API。</td>
    </tr>
</table>

## 服务调用流程（工作组内）及说明

### 流程图
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-authorize-flow.jpg)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-authorize-flow.jpg)

### 流程说明
<table>
    <tr>
        <th>流程</th>
        <th>说明</th>
    </tr>
     <tr>
        <td>API调试</td>
        <td>通过调试API，了解API运行结果详情。</td>
    </tr>
     <tr>
        <td>代码调用</td>
        <td>根据需求，对API进行调用。</td>
    </tr>
    <tr>
        <td>服务报表</td>
        <td>API被调用后，支持进行服务调用汇总展示，以及查看服务调用明细和调用趋势。</td>
    </tr>
</table>


## 服务调用流程（API共享）及说明

### 流程图
[![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-apply-flow.jpg)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-apply-flow.jpg)

### 流程说明
<table>
    <tr>
        <th>流程</th>
        <th>说明</th>
    </tr>
     <tr>
        <td>API共享中心</td>
        <td>在API市场中查看所有共享的API。</td>
    </tr>
     <tr>
        <td>申请使用API</td>
        <td>可申请使用其他工作组及用户创建的可共享的API。</td>
    </tr>
    <tr>
        <td>审批API</td>
        <td>提交使用API的申请后，待具有租户管理员角色的工作组审批通过后可使用当前API。</td>
    </tr>
</table>