---
title: 快速开始
sidebar_position: 0
---

## 简介

Uniplore Data Studio 是基于 gradle、springboot、springcloud、springcloud Alibaba、spring
gateway、Nacos、Flink、Chunjun、Vue3 等构建的项目。

## 环境准备

|    名称     |    版本     | 说明                                                                                 |                                                                                              地址                                                                                              |
| :---------: | :---------: | :----------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   Gradle    |     7+      | 其他版本不支持，要求环境为 JDK11+，本项目不需要再次安装，项目本身已经提供 gradle     |                                                               [点击查看](https://gradle.org/next-steps/?version=7.6&format=all)                                                                |
|     JDK     |    11/13    | JDK13 未经过生产环境的测试，仅仅只是在开发和测试环境中测试，谨慎使用                 |                                                   [点击查看](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)                                                   |
|    Nacos    | 2.0.3~2.0.4 | 最低要求是 2.0.3，如果使用最新版本，谨慎测试后使用                                   |                                                                    [点击查看](https://nacos.io/zh-cn/docs/quick-start.html)                                                                    |
| SpringBoot  |    2.6.2    | 后期会慢慢的升到到最新稳定版本或 3.+                                                 |                                                                       [点击查看](https://spring.io/projects/spring-boot)                                                                       |
| SpringCloud | 2021.0.1.0  | 不建议随意升级，因为存在组件兼容性问题                                               |                                                                      [点击查看](https://spring.io/projects/spring-cloud)                                                                       |
|    Mysql    |   8.0.30    | Mysql 目前支持的版本在 8.0.x，不支持 Mysql5.x                                        |                                                                          [点击查看](https://www.mysql.com/downloads/)                                                                          |
|    Redis    |    6.2.7    | 其实 Redis 的版本限制不是很大，建议是使用 Redis 的版本为：6+ 即可                    |                                                                     [点击查看](https://redis.io/download/#redis-downloads)                                                                     |
| Apache-age  |    1.4.0    | 基于 PostgreSQL 的轻量级图数据库，用于存储数据血缘，其他版本未进行详细测试，谨慎使用 | [官方网站](https://age.apache.org/#:~:text=Apache%20AGE%C2%AE%20is%20a%20PostgreSQL%20extension%20that%20provides,graph%20query%20modeling%20within%20the%20existing%20relational%20database.) |
|   NodeJS    |   16.15+    | 其他版本不支持，要求环境为 JDK11+，本项目不需要再次安装，项目本身已经提供 gradle     |                                                                               [点击查看](https://nodejs.org/en)                                                                                |

## 启动项目说明

### 运行基础环境要求

- 下面的操作的前提是已经安装好 java(要求 JDK11+)环境
- 安装蒲公英客户端并登录(依赖包来源于私服仓库)
- 安装 Mysql
- 安装 Redis
- 安装 Nacos
- 安装 NodeJS
- 安装 yarn (可选安装项，安装命令为：`npm install -g yarn`)

### 运行前项目配置及步骤

1. 克隆项目代码;

```bash
git clone https://github.com/uniplore/uniplore-data-studio.git
```

2. 使用 gradle 执行依赖下载和构建，在**uniplore-data-studio**项目下根目录执行

```bash
# 如果使用 idea 打开项目，可以不需要执行此命令，idea会自行加载依赖和构建工作;
./gradlew dependencies
```

3. 在数据库 Mysql 中新建 schema 名称为：`uniplore_data_studio`，字符集：`utf8mb4`，排序规则：`utf8mb4_general_ci`，或者直接连接 Mysql 执行：

```bash
create schema uniplore_data_studio default character set utf8mb4 collate utf8mb4_general_ci;
```

4. 更改`uniplore-config-dev/src/main/resources/bootstrap.properties`，修改文件中的 nacos 地址及命名空间(
   namespace)，原始配置文件内容如下：

```yaml
# nacos config
nacos.server-addr=192.168.2.72:8848
nacos.namespace=uniplore-dev

# datasource config
ds.host=192.168.2.72
ds.port=3306
ds.username=root
ds.password=Uniplore!@#123
ds.database=uniplore_data_studio

# redis config
redis.host=localhost
redis.port=6379
redis.password=

# spring cloud config
spring.main.allow-bean-definition-overriding=true
spring.cloud.nacos.discovery.server-addr=${nacos.server-addr}
spring.cloud.nacos.discovery.namespace=${nacos.namespace}
spring.cloud.nacos.config.server-addr=${nacos.server-addr}
spring.cloud.nacos.config.namespace=${nacos.namespace}

```

### 启动后端

如想仅快速启动查询是否能运行，则只需要启动`uniplore-app-gateway`、`uniplore-app-uaa`、`uniplore-app-system`、`uniplore-data-system`四个模块即可。

启动命令拿`uniplore-app-gateway`举例，在项目根目录下执行启动命令：`./gradlew :uniplore-app-gateway:bootRun`，其他后端模块同样如此运行。如果是使用 idea 加载的项目，则直接点击 idea 中的点击运行，此处不做过多描述。

### 启动前端

1. 进入**uniplore-data-studio**下的**uniplore-data-studio-ui**模块，执行`yarn install`或`npm install`安装依赖包；
2. 执行`yarn install && yarn serve`或`npm install && npm run serve`启动前端项目；
3. 访问`http://localhost:3000`, 默认登录账号：admin / admin@123456;

## 答疑

为什么只需要创建 schema 即可？库表是如何生成的？本项目使用的是 Flyway 作为数据库版本管理工具，在启动项目时会自动执行模块**uniplore-flyway-data-studio**下的SQL脚本，并生成库表及一些需要初始化的数据。

## 模块说明

| 模块名称                    |                中文说明                 | 当前版本 |     标识     | 备注信息                                                                                                                                        |
| :-------------------------- | :-------------------------------------: | :------- | :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| uniplore-app-gateway        |               微服务网关                | 0.1.0    |   应用模块   | 应用网关不负责解决业务                                                                                                                          |
| uniplore-app-system         |                用户体系                 | 0.1.0    |   应用模块   | 用户信息相关模块，提供用户、角色、菜单、权限等业务                                                                                              |
| uniplore-app-uaa            |                用户认证                 | 0.1.0    |   应用模块   | 用户登录授权认证业务实现                                                                                                                        |
| uniplore-common-i18n        |           后端国际化语言支持            | 0.1.0    |   应用模块   | 仅提供国际化语言支持，不负责其他业务实现                                                                                                        |
| uniplore-config-dev         |            开发环境配置模块             | 0.1.0    |   配置模块   | 开发环境全局切换注册中心配置模块，在测试环境和生成环境红此模块无效                                                                              |
| uniplore-data-api           |              数据服务调用               | 0.1.0    |   应用模块   | 只负责 API 的调用                                                                                                                               |
| uniplore-data-core          |           常用核心库封装模块            | 0.1.0    |  核心库模块  | 提供一些核心的工具类及调用封装                                                                                                                  |
| uniplore-data-datasource    |               数据源管理                | 0.1.0    |  应用库模块  | 提供数据源信息操作业务，包含数据源管理、连接                                                                                                    |
| uniplore-data-assets        |                数据资产                 | 0.1.0    |   应用模块   | 数据资产管理                                                                                                                                    |
| uniplore-data-exchange      |                数据同步                 | 0.1.0    | 数据同步模块 | 提供数据同步和数据交换                                                                                                                          |
| uniplore-data-model         |                数据建模                 | 0.1.0    |   应用模块   | 数据建模管理                                                                                                                                    |
| uniplore-data-service       |                数据服务                 | 0.1.0    |   应用模块   | 数据服务管理                                                                                                                                    |
| uniplore-data-standard      |                数据标准                 | 0.1.0    |   应用模块   | 数据标准管理                                                                                                                                    |
| uniplore-data-system        |                项目管理                 | 0.1.0    |   应用模块   | 数据中台项目管理、数据查询、工作流、消息管理                                                                                                    |
| uniplore-data-studio-ui     |              数据中台前端               | 0.1.0    |   应用模块   | 前端 UI 项目                                                                                                                                    |
| uniplore-data-tag           |                数据标签                 | 0.1.0    |   应用模块   | 数据质量标签管理                                                                                                                                |
| uniplore-flink-chunjun-go   | 基于 golang 调用 flink(chunjun)提交任务 | 0.1.0    |   应用模块   | 解决 java 服务调用 Flink 提交任务能力。不直接调用 Flink RestAPI? 因为本项目集成了[Chunjun](https://dtstack.github.io/chunjun/) 提供数据同步支持 |
| uniplore-data-quality       |                数据质量                 | 0.1.0    |   应用模块   | 数据质量校验                                                                                                                                    |
| uniplore-flyway-data-studio |             数据库版本迭代              | 0.1.0    |   应用模块   | 数据库版本开发迭代管理                                                                                                                          |
| uniplore-operation-monitor  |                任务中心                 | 0.1.0    |   应用模块   | 主要负责定时器，Flink 任务调度                                                                                                                  |
| uniplore-images             |           docker 镜像构建说明           | 0.1.0    | docker 镜像  | 目前含有 apache-age 和 apache-flink，其中 flink 属于集成 Chunjun 的镜像构建                                                                     |
| uniplore-service            |            远程调用接口定义             | 0.1.0    |   接口定义   | 提供远程调用接口定义，不负责具体业务实现                                                                                                        |
