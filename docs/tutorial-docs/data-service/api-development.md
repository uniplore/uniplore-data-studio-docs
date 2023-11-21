---
title: API开发
sidebar_position: 3
---
## 概述

API开发可以提供快速将数据表生成数据API的能力，API开发允许自行编写API的查询语句，并支持多表关联、复杂查询条件和聚合函数等能力。

本文介绍在查询关系型数据库的数据源时（以MySQL为例），如何开发API，如何撰写自定义SQL的查询语句。

## 准备工作

### 数据源

开发API，需要在**组织管理-数据源管理**处提前准备数据源。

[ ![数据源管理](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/datasource-manage.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/datasource-manage.png)

API开发目前支持的数据源类型有：
<table>
    <tr>
        <th>数据源类别</th>
        <th width="300">数据源类型</th>
    </tr>
    <tr>
        <td>关系型数据库</td>
        <td>Oracle、MySQL</td>
    </tr>
</table>

### 域名

开发API，需要在**数据服务-服务域名**处提前准备可供选择的域名。

[ ![服务域名](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-domain.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-domain.png)

### 默认请求头参数

开发API，需要在**数据服务-请求模板**处提前准备默认的请求头参数。

[ ![请求模板](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/head-params.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/head-params.png)

基础的请求头参数有：
- App-ID：APP唯一标识。
- App-Key：app的key。
- Content-Type：指定响应的HTTP内容类型。

用户可以根据实际需求自行添加额外的请求头参数。

## 新建API

进入「数据服务」-「API开发」，点击「新增」，如下图所示：

[ ![API开发](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-list.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-list.png)

新建API的页面内容如下图所示：

[ ![新建API](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api.png)

### API信息配置

第一步，完成API的基本信息配置：

[ ![新建API](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-info.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-info.png)

- API名称：只能以中英文、字母、数据字和下划线组成，长度为3-32个字符之内，API的名称不允许重复。
- API域名：企业、机构或个人在互联网上注册的名称，也可以是一个IP地址。
- API路径：API的调用路径, API路径会有一个默认的前缀：/uniplore-data-api-server。
- HTTP请求方式：表示请求什么类型的操作，自定义SQL支持GET、POST、PUT、DELETE，遵循resultful风格。
- 描述：对API进行简要说明，长度在255个字符以内。
- 调用频次限制：设置每秒调用总次数的上限，默认不超过10000次，最大不超过100000次。
- 后端超时：设置后端请求时间的最大时间，超过时间则默认请求失败，最大不超过60000ms。

配置好API基本信息后，点击「下一步」，即可进入API取数逻辑的配置页面。

### 编写查询SQL

第二步，完成数据查询逻辑的编写：

1. 在「配置数据源」中，选择数据源类型、数据源、数据库、数据表（或集合等），可以预览所选数据表的表结构。
2. 编写查询语句，目前支持SQL查询。
3. 查询语句编写完成后，进行语法解析。点击「解析」，语法正确的语句通过解析后，可以获得API的请求参数和返回参数。在请求参数和返回参数列表中，可以编辑解析的请求参数和返回参数的名称，可以定义请求参数的数据类型、参数位置、是否必填、示例值、默认值、描述信息，定义返回参数的数据类型、示例值、描述信息；另外用户可以自行添加请求参数和返回参数，也可以通过请求参数列表和返回参数列表的操作栏的删除图标删除对应的参数。

[ ![编写查询SQL](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql.png)

- 请求参数：用户在调用和调试API时需要提供的参数，类似于函数中的变量。
    [ ![请求参数](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-req.jpg) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-req.jpg)
- 返回参数：用户在调用和调试API时返回的结果信息。SQL解析时会自动解析出API的返回参数列表，用户也可以自行添加和删除请求参数。
    [ ![返回参数](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-res.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-res.png)

SQL解析完成后，点击「下一步」进入预览返回结果页面

### 预览返回结果

第三步，预览返回结果：

自定义SQL支持KV格式的返回结果。成功返回结果示例和失败返回结果示例，内容由系统自动生成，可查看，不可编辑。在API调试、测试、调用的时候，API网关服务将按此格式返回结果。

[ ![预览返回结果](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-result.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-result.png)

点击「完成」后即可新建一个API。

### SQL查询语法

1. 支持语句：目前仅支持SELECT语句(不区分大小写)。
2. 参数格式：在SQL查询中使用 **#{}** 标识API的请求参数，SQL解析时会解析出相应的请求参数并加入到请求参数列表中；例如**select id, username from sys_user where id = #{ID}**，SQL解析会解析出请求参数**ID**。

[ ![请求参数](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-req.jpg) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-req.jpg)

3. SELECT *语句：如果是 **SELECT \***语句，SQL解析时不自动解析返回参数列表，需要用户点击「添加请求参数」自行添加相应的返回参数。

[ ![请求参数](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-res-all.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/create-api-sql-res-all.png)

4. 关键字：sql语句中如果表字段与关键字重名，请用\`\`标识字段；如：\`usage\`。

## 编辑API

API开发页面点击API列表中的「更多」-「编辑」，页面跳转到编辑API页面，这里可以编辑API的各项信息，并在编辑完成后点击「完成」保存即可；详细流程与**新增API**一致。

[ ![编辑API](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/edit-api.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/edit-api.png)

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/edit-api-info.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/edit-api-info.png)

## 复制API

API开发页面点击API列表中的「更多」-「复制」，页面跳转到新增API页面，系统会在API名称和API路径后面加上**_copy**的后缀，用来区分复制的API和被复制的API，各项信息填写完成后点击「完成」即可新增一条API；详细流程与**新增API**一致。

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/copy-api.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/copy-api.png)

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/copy-api-info.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/copy-api-info.png)

## 更改API的状态

API开发页面点击API列表中的「更改状态」，出现更改API状态的弹窗，这里可以进行API的上线、下线、禁用、启用操作。

[ ![更改状态](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/change-status.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/change-status.png)

[ ![更改状态弹窗](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/change-status-model.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/change-status-model.png)

- 新建的API默认是未上线的状态，在更改API状态弹窗中选择「上线」，点击「确定」，即可将API的状态更改为已上线。
- 已上线的API，在更改API状态弹窗中选择「下线」，点击「确定」，即可将API的状态更改为已下线，已下线的API不可调试，不可提交。
- 在更改API状态弹窗中选择「禁用」，点击「确定」，即可禁用API，禁用的API不可调试，不可提交。
- 在更改API状态弹窗中选择「启用」，点击「确定」，即可启用API，此时API可以重新调试、提交。

## API调试

API创建完成并保存后，自定义SQL的API支持调试。

[ ![API调试](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-debug.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-debug.png)

点击「调试」，调试页面中，在请求参数列表中输入参数的值，点击「开始调试」，调试成功的情况下可以查看调试结果。

[ ![API调试抽屉](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-debug-drawer.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-debug-drawer.png)

## API提交

点击「提交」，提交一个API的版本，同一个API可以提交多次，已上线的API才支持提交。

[ ![API提交](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-submit.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-submit.png)

点击「更多」-「API版本详情」，可跳转到API管理页面查看对应API提交的所有版本。

[ ![API版本详情](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-version.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-version.png)

[ ![API版本详情页](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-version-detail.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/api-version-detail.png)

## 查看API的调用日志

API开发页面点击API列表中的「更多」-「查看日志」，可以查看API所有版本的调用日志。

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/log-button.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/log-button.png)

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/log-list.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/log-list.png)

点击日志列表中的「查看详情」，可以查看调用的详细信息。

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/log-detail.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/log-detail.png)

## 删除API

API开发页面点击API列表中的「更多」-「删除」，在确认删除的弹窗中点击「确定」即可删除API。

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/delete.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-development/delete.png)