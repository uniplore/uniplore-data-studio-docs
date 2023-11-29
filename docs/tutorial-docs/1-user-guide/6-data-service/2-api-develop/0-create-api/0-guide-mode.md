---
title: 使用向导模式创建数据服务API
sidebar_position: 0
---

# 使用向导模式创建数据服务API
数据服务API是一种API类型，由计算资源中的数据通过参数配置生成，生成的API便于后续调用，可减少资源操作成本。本文介绍如何使用向导模式创建数据API。

## 前提条件
- 已创建工作组。
- 已创建计算资源。

## 背景信息
本文以MySQL数据库创建API为例。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据服务菜单，选择API开发菜单。
3. 在API开发页面右上角，单击创建API。
4. 在数据服务API-创建页面，根据创建API向导信息，开始新建API。
    a. 设置API基础信息，单击下一步。
    [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/create-api-guide-mode.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/create-api-guide-mode.png)
    <table>
      <tr>
          <th>名称</th>
          <th>说明</th>
      </tr>
      <tr>
          <td>API名称</td>
          <td>API的名称，自定义即可。</td>
      </tr>
      <tr>
          <td>创建模式</td>
          <td>选择向导模式</td>
      </tr>
      <tr>
          <td>API 域名</td>
          <td>选择已创建好的API域名。</td>
      </tr>
      <tr>
          <td>API Path</td>
          <td>API调用时展示的固定路径。</td>
      </tr>
      <tr>
          <td>HTTP 请求方式</td>
          <td>支持选择GET、POST请求方式。</td>
      </tr>
      <tr>
          <td>描述</td>
          <td>自定义API的描述信息，必填。</td>
      </tr>
    </table>
    b. 配置API参数。
      
      - i. 选择计算资源类型、计算资源和源数据表。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-param-config.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-param-config.png)
      - ii. 在返回参数区域，选中需要返回的字段。
      - iii. 在请求参数区域，单击请求参数，填写请求参数字段名称、条件和默认值等。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-request-param.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-request-param.png)
      
      - iv. 单击排序字段，添加排序字段，设置返回结果按照排序字段、排序方式排列。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-order-param.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-order-param.png)
      - v. 单击分组字段，添加分组字段，设置返回结果按照分组字段进行分组展示。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-group-param.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-group-param.png)
      - vi. 单击下一步。
    
    c. 测试API。
      - i. 在请求参数区域，设置参数。
      [![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-test.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-service/api-test.png)
      - ii. 单击开始测试，核对返回内容无误后，单击保存，在API资源列表，可查看新建的API。

## 相关操作
<table>
    <tr>
        <th>操作项</th>
        <th>说明</th>
    </tr>
     <tr>
        <td>编辑API</td>
        <td>
        <p>在API资源列表中，单击目标API操作列的编辑，在API编辑向导页面，可对API进行编辑修改。</p>
        <strong>说明 </strong>
        编辑API参数配置中的计算资源时，需要查看当前使用表中字段是否与编辑前使用表中的字段存在部分一致，如果一致可能导致编辑完成后，编辑内容不生效。
        </td>
    </tr>
     <tr>
        <td>复制API</td>
        <td>在API资源列表操作列，选择更多 > 复制，在API资源列表中生成一个新的草稿API。单击复制API操作列的编辑，对复制的API进行编辑修改。</td>
    </tr>
     <tr>
        <td>删除API</td>
        <td>
          <ul>
            <li>单个删除：在API资源列表操作列，选择更多 > 删除，在删除对话框中，单击确定。</li>
            <li>批量删除：在API资源列表中选选中删除API，单击列表下方的批量删除，在批量删除对话框，单击确定。</li>
          </ul>
          <strong>说明</strong>
          已上线的API不支持删除。
        </td>
    </tr>    
</table>

## 后续步骤
API创建完成后，需要对API进行上线操作。