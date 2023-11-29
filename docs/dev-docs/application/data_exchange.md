---
title: 数据同步
sidebar_position: 7
---

## 简介

数据同步是指将一个数据源的数据同步到另一个数据源的过程。目前基于[Flink](https://flink.apache.org/)和[Chunjun](https://dtstack.github.io/chunjun/)实现数据同步。

## 涉及相关表

| 表名称              | 备注                                |
| :------------------ | :---------------------------------- |
| de_catalog          | 数据同步-目录表                     |
| de_catalog_resource | 数据同步-目录关联资源表             |
| de_datasource       | 数据同步-数据源表（关联数据源中心） |
| de_job              | 数据同步-数据同步任务表             |
| de_job_datasource   | 数据同步-数据同步任务关联数据源表   |
| de_job_record       | 数据同步-数据同步任务记录表         |
| de_job_version      | 数据同步-数据同步任务版本表         |

## 前端

- 数据同步接口调用定义：uniplore-data-studio/src/api/dataExchange
- 数据同步页面：uniplore-data-studio/src/views/dataExchange

数据同步还涉及了任务调度，故与**任务中心**有关联，提交任务后可在任务中心查看任务状态及相关日志信息等。

## 后端

- 数据同步后端实现模块：uniplore-data-exchaneg
- 提交 Flink Job 模块：uniplore-flink-chunjun-go

数据同步后端部分除了实现基本数据管理外还涉及了与 Flink 的交互，故需要**uniplore-flink-chunjun-go**提供提交 Job 支持。

模块**uniplore-flink-chunjun-go**下面的`submitjob.go`需要编译后集成到 Flink 服务中，直接部署方式直接将编译后的文件
放到服务器中运行即可，如果是合并成为一个 docker 镜像，则需要将编译后的文件打包到镜像中，具体 docker 镜像步骤参考下面步骤即可。

## Flink 集成纯钧镜像打包说明

镜像涉及到相关文件及说明位于项目`uniplore-images/uniplore-image-flink`中，该文件夹还包含了打包镜像后部署到 k8s 方案。

构建镜像说明：

- Flink 版本：1.12.7；
- Chunjun 版本：1.12-release，建议不要自己打包源码，坑比较多，直接下载现成的即可，如果是需要升级到 Flink1.16+，那么下面文档估计有部分将无法满足需求；
- 已安装 docker 环境，或者已安装 docker-desktop；
- 如果需要测试打包好的镜像，那么还需安装 k8s 环境；
- 镜像部署 k8s 测试样例在**deployExample**文件夹下；

下面的所有操作是基于在已经有 docker 环境的情况下，如果不安装 docker 及配置 docker 环境，下面的操作中的构建 docker 镜像及推送都会无效！

## 打包提交 job 服务

1. 源码在**uniplore-flink-chunjun-go**模块中，打包直接在**uniplore-flink-chunjun-go**下执行`./gradlew buildLinuxExec`，
   ，输出产物为：submitjob 的二进制可执行文件，前提是需要按照 golang 运行环境；
2. 复制到**uniplore-images/uniplore-image-flink/server**目录下；

## 下载纯钧正式版本的包

> 纯钧版本要求：1.12.8，其他版本未经过测试，如果需要升级版本，需经过测试稳定性后再使用！

1. 下载纯钧，下载地址：[https://github.com/DTStack/chunjun/releases/download/v1.12.8/chunjun-dist-1.12-SNAPSHOT.tar.gz](https://github.com/DTStack/chunjun/releases/download/v1.12.8/chunjun-dist-1.12-SNAPSHOT.tar.gz)；
2. 将下载后的包解压或解压后复制到**uniplore-images/uniplore-image-flink/chunjun-1.12.8**目录下；

## Flink 基础环境支持包

下面的 jar 包，到[maven 仓库](https://mvnrepository.com/)自行下载即可，下载完成后复制到**uniplore-images/uniplore-image-flink/lib**目录下。

| 文件名                                    |    版本    |                                     作用                                      | 是否必须 |
| :---------------------------------------- | :--------: | :---------------------------------------------------------------------------: | :------: |
| commons-lang-2.6.jar                      |    2.6     |                                   日志输出                                    |    是    |
| commons-logging-1.2.jar                   |    1.2     |                                   日志输出                                    |    是    |
| flink-shaded-hadoop-2-uber-2.8.3-10.0.jar | 2.8.3-10.0 |              hadoop 环境支持，只有在需要 hadoop 时才需要这个依赖              |    否    |
| flink-s3-fs-presto-1.12.7.jar             |   1.12.7   | Flink history S3 存储支持，如果需要 s3 做 savepoint 和 checkpoint，那么必须要 |    否    |
| flink-s3-fs-hadoop-1.12.7.jar             |   1.12.7   | Flink history S3 存储支持，如果需要 s3 做 savepoint 和 checkpoint，那么必须要 |    否    |

### 打包镜像

由于依赖了纯钧插件，会导致镜像很大，输出的镜像大概会在 2.3G 左右。

**如果需要经镜像支持 standalone 模式，注意事项如下：**

在 Dockerfile 中找到这两行代码

```dockerfile
# 如果需要经镜像支持standalone模式，那么下面一行的注释需解除！！！！
#COPY chunjun-1.12.8/chunjun-dist/ /opt/flink/lib
```

改为：

```dockerfile
# 如果需要经镜像支持standalone模式，那么下面一行的注释需解除！！！！
COPY chunjun-1.12.8/chunjun-dist/ /opt/flink/lib
```

镜像说明：支持 standalone 模式，镜像大概会有 3.4G 左右！！！

```bash

docker build -t 192.168.2.104/library/flink:1.12.7-scala_2.12-java8 .

```

### 测试镜像在 K8s 中运行

打开 docker-desktop 并启用 k8s，然后执行如下命令：

只需执行 shell 脚本 restart.sh 即可，操作如下：

```bash
chmod +x restart.sh

./restart.sh
```

### 其他说明

为了保证打包后的镜像可运行，内部默认启动 Flink 模式为 cluster，也就是启动脚本为 start-cluster.sh,
如果是部署 k8s，那么对应启动命令(CMD)需要调整启动脚本为：kubernetes-session.sh;

如何部署 k8s, 可参考 Flink 官方文档：[https://flink.apache.org/](https://flink.apache.org/)
