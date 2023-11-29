---
title: 请求模板
sidebar_position: 9
---

# 请求模板
API调用时须携带一些参数，这里用于定义API调用的请求参数。本文介绍如何新增请求参数。

## 前提条件
租户用户已登录系统。

## 操作步骤
1. 登录 Uniplore Data Studio 平台。
2. 在左侧菜单，单击数据服务菜单，选择请求模板。
3. 单击右上角新增，选择数据类型、填写字段名、参数默认值、参数示例值、选择是否必填属性。

  <table>
      <tr>
          <th>字段名</th>
          <th width="80%">说明</th>
      </tr>
      <tr>
          <td>App-Auth-ID</td>
          <td>APP授权唯一标识</td>
      </tr>
      <tr>
          <td>App-Key</td>
          <td>app的key</td>
      </tr>
      <tr>
          <td>Content-Type</td>
          <td>请求头类型，默认：application/json</td>
      </tr>
  </table>

## 预期结果
在请求模板列表界面可查看新增参数。