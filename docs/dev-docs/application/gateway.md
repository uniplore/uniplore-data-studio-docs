---
title: 应用网关
sidebar_position: 1
---

## 简介

uniplore-app-gateway应用网关基于spring gateway开发，提供动态路由、负载均衡、熔断、限流、swagger文档聚合等功能。

## 动态路由

通过bootstrap-routes.yml配置文件配置路由规则来支持动态路由，为减轻维护配置文件难度及排查问题，本项目在项目根目录下的**buildSrc**提供了
generateFullYaml方法生成动态路由yml配置文件内容，仅需在根目录下执行`./gradlew :uniplore-app-gateway:generateRoutes`即可生成新的bootstrap-routes.yml
文件，不过需要注意生成文件策略为：**不存在bootstrap-routes.yml文件则新生成，若已存在则覆盖**。

动态路由实现包含了DynamicRoutesConfig和DynamicRouteServiceImpl。

## swagger文档聚合

为减轻文档分散于不同下游服务，访问相关swagger文档时，不仅需要知道下游服务应用名称，还需要知道应用的端口，对于接口文档调用的开发者不是很友好，于是
网关对swagger进行聚合处理，swagger文档聚合实现配置文件为SwaggerResourceConfig。

当启动uniplore-app-gateway完成后，直接访问`http://localhost:35000/doc.html#/home`，聚合后文档效果如图：

[![文档聚合](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/common/screenshot-20231127-144128.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/common/screenshot-20231127-144128.png)

## 网关配置免登访问路径

若开发者需要对某些路径进行免登录验证即可访问，则需在网关配置，配置文件为bootstrap-ignore.yml，示例如下：

```yaml
uniplore:
  uaa:
    ignoreUrl:
      - /oauth/**
      - /actuator/**
      - /v2/api-docs/**
      - /swagger/api-docs
      - /swagger-ui.html
      - /doc.html
      - /swagger-resources/**
      - /webjars/**
```

## 其他说明

为了保留网关服务的低耦合高性能，尽量不要在uniplore-app-gateway中编写业务代码或做耗时远程调用。更多关于网关的功能实现，如限流、熔断等，开发者可解读模块uniplore-app-gateway源码。
