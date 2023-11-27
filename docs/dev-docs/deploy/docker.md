---
title: docker-compose部署
sidebar_position: 1
---

## 简介

目前为快速让开发者对uniplore-data-studio进行简单的部署，我们提供了docker-compose部署方式，开发者可基于docker-compose部署方式进行快速部署，快速体验uniplore-data-studio。

## 部署前准备工作

本教程仅对安装docker-desktop进行说明，Linux环境下大同小异，可自行参考相关文档进行安装。

可根据自身操作系统及操作系统版本下载安装docker和docker-compose，下载地址如下：

- [docker-desktop](https://www.docker.com/products/docker-desktop/)
- [docker-compose](https://github.com/docker/compose/releases)

## 部署镜像清单

下面的清单中的latest不一定是最新版本，请以实际为准，部署时尽量不改动docker-compose.yaml文件中各个镜像的版本，避免版本造成系统运行不正常。

| 镜像名称                       | 版本          | 拉取镜像命令                                                   | 备注                                              |
|:---------------------------|:------------|:---------------------------------------------------------|:------------------------------------------------|
| mysql                      | 8.0.32      | `docker pull mysql:8.0.32`                               | 数据中台系统数据源                                       |
| redis                      | 7.0.8       | `docker pull redis:7.0.8`                                | 缓存需要高速读取的数据                                     |
| nacos                      | v2.0.4      | `docker pull nacos/nacos-server:v2.0.4`                  | 微服务注册中心                                         |
| apache-age                 | PG15_latest | `docker pull apache/age:PG15_latest`                     | 存储数据中台数据血缘(图数据库)                                |
| minio                      | 2023.11.15 | `docker pull bitnami/minio:2023.11.15`                   | Flink history server数据存储                        |
| Flink                      | 1.12.7-scala_2.12-java8 | `docker pull uniplore/flink:1.12.7-scala_2.12-java8`     | 这个Flink镜像非官方镜像，是经过改版后的镜像，需注意！！！                 |
| uniplore-app-gateway       | latest      | `docker pull uniplore/uniplore-app-gateway:latest`       | 网关服务                                            |
| uniplore-app-uaa           | latest      | `docker pull uniplore/uniplore-app-uaa:latest`           | 用户认证服务                                          |
| uniplore-app-system        | latest      | `docker pull uniplore/uniplore-app-system:latest`        | 系统及用户基础数据服务                                     |
| uniplore-data-studio-ui    | latest      | `docker pull uniplore/uniplore-data-studio-ui:latest`    | 数据中台前端页面                                        |
| uniplore-data-api          | latest      | `docker pull uniplore/uniplore-data-api:latest`          | 数据接口开发对外开放服务，也就是uniplore-data-service管理的接口对外接口， |
| uniplore-data-assets       | latest      | `docker pull uniplore/uniplore-data-assets:latest`       | 数据资产服务                                          |
| uniplore-data-datasource   | latest      | `docker pull uniplore/uniplore-data-datasource:latest`   | 数据源管理服务                                         |
| uniplore-data-exchange     | latest      | `docker pull uniplore/uniplore-data-exchange:latest`     | 数据同步服务                                          |
| uniplore-data-model        | latest      | `docker pull uniplore/uniplore-data-model:latest`        | 数据建模服务                                          |
| uniplore-data-quality      | latest      | `docker pull uniplore/uniplore-data-quality:latest`      | 数据质量服务                                          |
| uniplore-data-service      | latest      | `docker pull uniplore/uniplore-data-service:latest`      | 数据对外接口开发管理服务                                    |
| uniplore-data-standard     | latest      | `docker pull uniplore/uniplore-data-standard:latest`     | 数据标准服务                                          |
| uniplore-data-system       | latest      | `docker pull uniplore/uniplore-data-system:latest`       | 数据中台系统基础服务                                      |
| uniplore-data-tag          | latest      | `docker pull uniplore/uniplore-data-tag:latest`          | 数据标签服务                                          |
| uniplore-operation-monitor | latest      | `docker pull uniplore/uniplore-operation-monitor:latest` | 任务中心服务                                          |

## 部署应用到docker

docker-compose部署文件在uniplore-data-studio项目的**deploy/x86_64/docker-compose**文件夹下，开发者可根据自身情况调整脚本中的镜像版本，也可根据自身需求进行其他调整。

文件清单说明：

- **docker-compose.yml**：docker-compose部署文件
- **flink/flink-conf.yaml**：flink挂载到宿主机的配置文件
- **mysql/conf/my.cnf**：Mysql挂载到宿主机的配置文件
- **mysql/init/init_db.sql**：Mysql启动后执行的初始化脚本
- **nacos/bin/docker-startup.sh**：Nacos Docker启动脚本
- **nginx/nginx.conf**：uniplore-data-studio-ui Nginx配置文件

部署命令：
```bash
# 进入uniplore-data-studio项目部署目录
cd deploy/x86_64/docker-compose
# 启动
docker-compose up -d
# 停止
docker-compose stop
# 删除
docker-compose rm
# 
```

## 部署文件清单

部署文件清单在本文档中只是做一个提供参考示例方便在当前文档中可直观看到，具体文件内容可能因版本不同而有所不同！

### docker-compose.yaml

```yaml
version: '3.5'

networks:
  data-studio:
    driver: bridge


# The common password for mysql/redis/minio is 'admin@123456'

services:
  # mysql
  data-studio-mysql:
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=admin@123456
    container_name: data-studio_mysql
    image: mysql:8.0.32
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
      --max_allowed_packet=128M
    volumes:
      #      - ./mysql/data:/var/lib/mysql
      #      - ./mysql/conf.d:/etc/mysql/conf.d
      #      - ./mysql/log:/var/log/mysql
      - ./mysql/conf/my.cnf:/etc/my.cnf
      - ./mysql/init:/docker-entrypoint-initdb.d
    ports:
      - "3307:3306"
    networks:
      - data-studio
    healthcheck:
      test: [ "CMD", "mysql", "-u", "root", "-p", "admin@123456", "ping", "-h", "localhost", "-P", "3306" ]
      interval: 10s
      timeout: 10s
      retries: 3
  # redis
  data-studio-redis:
    restart: always
    container_name: data-studio_redis
    image: redis:7.0.8
#    ports:
#      - "6380:6379"
    command:
      --requirepass "admin@123456"
    privileged: true
    networks:
      - data-studio
    healthcheck:
      test: [ "CMD", "redis-cli", "ping", "-h", "localhost", "-p", "6379" ]
      interval: 10s
      timeout: 10s
      retries: 3
  # nacos
  data-studio-nacos:
    environment:
      - SPRING_DATASOURCE_PLATFORM=mysql
      - MODE=standalone
      - MYSQL_SERVICE_HOST=data-studio-mysql
      - MYSQL_SERVICE_DB_NAME=nacos_config
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=root
      - MYSQL_SERVICE_PASSWORD=admin@123456
    #    volumes:
    #      -  ./nacos/logs:/home/nacos/logs
    restart: always
    privileged: true
    container_name: data-studio_nacos
    image: nacos/nacos-server:v2.0.4
    ports:
      - "8849:8848"
    networks:
      - data-studio
    depends_on:
      - data-studio-mysql
    healthcheck:
      test: [ "CMD", "curl", "-s", "http://localhost:8848/nacos" ]
      interval: 30s
      timeout: 10s
      retries: 3
    volumes:
      - ./nacos/bin/docker-startup.sh:/home/nacos/bin/docker-startup.sh
  # apache-age
  data-studio-apache-age:
    restart: always
    container_name: data-studio_apache-age
    # image: apache/age:PG13_latest
    image: apache/age:PG15_latest
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=lineage
    ports:
      - "5432:5432"
    volumes:
      -  ./apache-age/data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready", "-d", "db_prod"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - data-studio
  # uniplore-app-gateway
  data-studio-uniplore-app-gateway:
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    restart: always
    container_name: data-studio_uniplore-app-gateway
    image: 192.168.2.104/library/uniplore-app-gateway:latest
    ports:
      - "35000:35000"
    networks:
      - data-studio
    depends_on:
      - data-studio-redis
      - data-studio-nacos
    healthcheck:
      test: [ "CMD", "curl", "-s", "http://localhost:35000" ]
      interval: 30s
      timeout: 10s
      retries: 3
  # uniplore-app-uaa
  data-studio-uniplore-app-uaa:
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    restart: always
    container_name: data-studio_uniplore-app-uaa
    image: 192.168.2.104/library/uniplore-app-uaa:latest
    # ports:
    #   - "35002:35002"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-app-system
  data-studio-uniplore-app-system:
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    restart: always
    container_name: data-studio_uniplore-app-system
    image: 192.168.2.104/library/uniplore-app-system:latest
    # ports:
    #   - "35001:35001"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-studio-ui
  data-studio-uniplore-data-studio-ui:
    restart: always
    container_name: data-studio_uniplore-data-studio-ui
    image: 192.168.2.104/library/uniplore-data-studio-ui:latest
    privileged: true
    ports:
      - "3000:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - data-studio-uniplore-app-gateway
      - data-studio-uniplore-app-system
      - data-studio-uniplore-app-uaa
    networks:
      - data-studio

  # uniplore-data-api
  data-studio-uniplore-data-api:
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    restart: always
    container_name: data-studio_uniplore-data-api
    image: 192.168.2.104/library/uniplore-data-api:latest
    # ports:
    #   - "36004:36004"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-assets
  data-studio-uniplore-data-assets:
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
      - docker.apache-age.host=data-studio-apache-age
      - docker.apache-age.port=5432
      - docker.apache-age.username=postgres
      - docker.apache-age.password=postgres
      - docker.apache-age.graphname=lineage
    restart: always
    container_name: data-studio_uniplore-data-assets
    image: 192.168.2.104/library/uniplore-data-assets:latest
    # ports:
    #   - "36000:36000"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-apache-age
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-datasource
  data-studio-uniplore-data-datasource:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-datasource
    image: 192.168.2.104/library/uniplore-data-datasource:latest
    # ports:
    #   - "36010:36010"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-exchange
  data-studio-uniplore-data-exchange:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-exchange
    image: 192.168.2.104/library/uniplore-data-exchange:latest
    # ports:
    #   - "36008:36008"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      # - data-studio-flink
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-model
  data-studio-uniplore-data-model:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-model
    image: 192.168.2.104/library/uniplore-data-model:latest
    # ports:
    #   - "36007:36007"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-quality
  data-studio-uniplore-data-quality:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-quality
    image: 192.168.2.104/library/uniplore-data-quality:latest
    # ports:
    #   - "36003:36003"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-service
  data-studio-uniplore-data-service:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-service
    image: 192.168.2.104/library/uniplore-data-service:latest
    # ports:
    #   - "36002:36002"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-service
  data-studio-uniplore-data-standard:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-standard
    image: 192.168.2.104/library/uniplore-data-standard:latest
    # ports:
    #   - "36005:36005"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-system
  data-studio-uniplore-data-system:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-data-system
    image: 192.168.2.104/library/uniplore-data-system:latest
    # ports:
    #   - "36001:36001"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
    networks:
      - data-studio
  # uniplore-data-tag
  data-studio-uniplore-data-tag:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
      - docker.flink.submit-job-url=http://data-studio-flink-jobmamager:8080
      - docker.data-assets.host=data-studio-data-assets
      - docker.data-assets.port=36000
    container_name: data-studio_uniplore-data-tag
    image: 192.168.2.104/library/uniplore-data-tag:latest
    # ports:
    #   - "36006:36006"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
      - data-studio-flink-jobmamager
      - data-studio-flink-taskmamager
      - data-studio-flink-history-server
    networks:
      - data-studio
  # uniplore-data-operation-monitor
  data-studio-uniplore-operation-monitor:
    restart: always
    environment:
      - spring.profiles.active=docker
      - docker.nacos.server-addr=data-studio-nacos:8848
      - docker.nacos.namespace=public
      - docker.ds.host=data-studio-mysql
      - docker.ds.port=3306
      - docker.ds.username=root
      - docker.ds.password=admin@123456
      - docker.ds.schema=uniplore_data_studio
      - docker.redis.host=data-studio-redis
      - docker.redis.port=6379
      - docker.redis.password=admin@123456
    container_name: data-studio_uniplore-operation-monitor
    image: 192.168.2.104/library/uniplore-operation-monitor:latest
    # ports:
    #   - "36009:36009"
    depends_on:
      - data-studio-mysql
      - data-studio-redis
      - data-studio-nacos
      - data-studio-flink-jobmamager
      - data-studio-flink-taskmamager
      - data-studio-flink-history-server
    networks:
      - data-studio

  # minio for flink history job & save point & check point
  data-studio-minio:
    restart: always
    container_name: data-studio_minio
    image: bitnami/minio:2023.11.15
    environment:
      - MINIO_ROOT_USER=admin
      - MINIO_ROOT_PASSWORD=admin@123456
      - MINIO_DEFAULT_BUCKETS=data-studio-flink-bucket
    ports:
#      - "9000:9000"
      - "9001:9001"
    volumes:
      - ./minio/data:/bitnami/minio/data
    networks:
      - data-studio
  # flink job manager
  data-studio-flink-jobmamager:
    restart: always
    container_name: data-studio_flink-jobmamager
    image: 192.168.2.104/library/flink:1.12.7-scala_2.12-java8
    environment:
      - JOB_MANAGER_RPC_ADDRESS=data-studio-flink-jobmamager
    volumes:
      - ./flink/flink-conf.yaml:/opt/flink/conf/flink-conf.yaml
    ports:
#      - "6123:6123"
#      - "6124:6124"
#      - "8080:8080"
      - "8081:8081"
    command: jobmanager
    networks:
      - data-studio
  # flink task manager
  data-studio-flink-taskmamager:
    restart: always
    container_name: data-studio_flink-taskmamager
    image: 192.168.2.104/library/flink:1.12.7-scala_2.12-java8
    environment:
      - JOB_MANAGER_RPC_ADDRESS=data-studio-flink-jobmamager
    command: taskmanager
#    ports:
#      - "6121:6121"
#      - "6122:6122"
    volumes:
      - ./flink/flink-conf.yaml:/opt/flink/conf/flink-conf.yaml
    networks:
      - data-studio
    depends_on:
      - data-studio-flink-jobmamager
  # flink history server
  data-studio-flink-history-server:
    restart: always
    container_name: data-studio_flink-history-server
    image: 192.168.2.104/library/flink:1.12.7-scala_2.12-java8
    environment:
      - JOB_MANAGER_RPC_ADDRESS=data-studio-flink-jobmamager
    command: history-server
    ports:
      - "8082:8082"
    volumes:
      - ./flink/flink-conf.yaml:/opt/flink/conf/flink-conf.yaml
    networks:
      - data-studio
    depends_on:
      - data-studio-minio
      - data-studio-flink-jobmamager
```

### flink/flink-conf.yaml
```yaml
execution.attached: true
classloader.resolve-order: parent-first
blob.server.port: 6124
jobmanager.rpc.address: data-studio-flink-jobmamager
jobmanager.memory.process.size: 1600m
jobmanager.rpc.port: 6123
taskmanager.rpc.port: 6122
taskmanager.data.port: 6121
taskmanager.numberOfTaskSlots: 2
taskmanager.memory.process.size: 2867m
parallelism.default: 2

# query state
queryable-state.enable: true
queryable-state.proxy.ports: 6125

# backend filesystem
fs.allowed-fallback-filesystems: s3
fs.default-scheme: s3
s3.endpoint: http://data-studio-minio:9000
s3.flink.bucket: data-studio-flink-bucket
s3.access-key: admin
s3.secret-key: admin@123456
s3.path.style.access: true

# state backend
state.backend: rocksdb
blob.storage.directory: /opt/flink/tmp/blob
web.upload.dir: /opt/flink/tmp/upload
io.tmp.dirs: /opt/flink/tmp

# state
# checkpoint storage
state.checkpoints.dir: s3://data-studio-flink-bucket/state/checkpoint
# savepoint storage
state.savepoints.dir: s3://data-studio-flink-bucket/state/savepoint
# checkpoint intervel
execution.checkpointing.interval: 5s
execution.checkpointing.mode: EXACTLY_ONCE
# checkpoint
state.checkpoints.num-retained: 3

# history-server
jobmanager.archive.fs.dir: s3://data-studio-flink-bucket/completed-jobs
historyserver.archive.fs.refresh-interval: 10000
historyserver.archive.fs.dir: s3://data-studio-flink-bucket/completed-jobs
historyserver.web.address: 0.0.0.0
historyserver.web.port: 8082
historyserver.web.tmpdir: /tmp/flink/historyserver/query.server.port: 6125
query.server.port: 6125
```

### mysql/conf/my.cnf

```yaml
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M

# Remove leading # to revert to previous value for default_authentication_plugin,
# this will increase compatibility with older clients. For background, see:
# https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin
# default-authentication-plugin=mysql_native_password
skip-host-cache
skip-name-resolve
datadir=/var/lib/mysql
socket=/var/run/mysqld/mysqld.sock
secure-file-priv=/var/lib/mysql-files
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
user=mysql

pid-file=/var/run/mysqld/mysqld.pid
[client]
socket=/var/run/mysqld/mysqld.sock

!includedir /etc/mysql/conf.d/

```

### mysql/init/init_db.sql
```sql
create schema nacos_config default character set utf8mb4 collate utf8mb4_general_ci;
create schema uniplore_data_studio default character set utf8mb4 collate utf8mb4_general_ci;

/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info   */
/******************************************/
CREATE TABLE nacos_config.`config_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(255) DEFAULT NULL,
  `content` longtext NOT NULL COMMENT 'content',
  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COMMENT 'source user',
  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',
  `app_name` varchar(128) DEFAULT NULL,
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  `c_desc` varchar(256) DEFAULT NULL,
  `c_use` varchar(64) DEFAULT NULL,
  `effect` varchar(64) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `c_schema` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info_aggr   */
/******************************************/
CREATE TABLE nacos_config.`config_info_aggr` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(255) NOT NULL COMMENT 'group_id',
  `datum_id` varchar(255) NOT NULL COMMENT 'datum_id',
  `content` longtext NOT NULL COMMENT '内容',
  `gmt_modified` datetime NOT NULL COMMENT '修改时间',
  `app_name` varchar(128) DEFAULT NULL,
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='增加租户字段';


/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info_beta   */
/******************************************/
CREATE TABLE nacos_config.`config_info_beta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) NOT NULL COMMENT 'group_id',
  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
  `content` longtext NOT NULL COMMENT 'content',
  `beta_ips` varchar(1024) DEFAULT NULL COMMENT 'betaIps',
  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COMMENT 'source user',
  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_beta';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info_tag   */
/******************************************/
CREATE TABLE nacos_config.`config_info_tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',
  `tag_id` varchar(128) NOT NULL COMMENT 'tag_id',
  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
  `content` longtext NOT NULL COMMENT 'content',
  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COMMENT 'source user',
  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_tag';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_tags_relation   */
/******************************************/
CREATE TABLE nacos_config.`config_tags_relation` (
  `id` bigint(20) NOT NULL COMMENT 'id',
  `tag_name` varchar(128) NOT NULL COMMENT 'tag_name',
  `tag_type` varchar(64) DEFAULT NULL COMMENT 'tag_type',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',
  `nid` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`nid`),
  UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`),
  KEY `idx_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_tag_relation';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = group_capacity   */
/******************************************/
CREATE TABLE nacos_config.`group_capacity` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `group_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Group ID，空字符表示整个集群',
  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数，，0表示使用默认值',
  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_group_id` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='集群、各Group容量信息表';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = his_config_info   */
/******************************************/
CREATE TABLE nacos_config.`his_config_info` (
  `id` bigint(64) unsigned NOT NULL,
  `nid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `data_id` varchar(255) NOT NULL,
  `group_id` varchar(128) NOT NULL,
  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
  `content` longtext NOT NULL,
  `md5` varchar(32) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `src_user` text,
  `src_ip` varchar(50) DEFAULT NULL,
  `op_type` char(10) DEFAULT NULL,
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`nid`),
  KEY `idx_gmt_create` (`gmt_create`),
  KEY `idx_gmt_modified` (`gmt_modified`),
  KEY `idx_did` (`data_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='多租户改造';


/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = tenant_capacity   */
/******************************************/
CREATE TABLE nacos_config.`tenant_capacity` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `tenant_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Tenant ID',
  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数',
  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='租户容量信息表';


CREATE TABLE nacos_config.`tenant_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `kp` varchar(128) NOT NULL COMMENT 'kp',
  `tenant_id` varchar(128) default '' COMMENT 'tenant_id',
  `tenant_name` varchar(128) default '' COMMENT 'tenant_name',
  `tenant_desc` varchar(256) DEFAULT NULL COMMENT 'tenant_desc',
  `create_source` varchar(32) DEFAULT NULL COMMENT 'create_source',
  `gmt_create` bigint(20) NOT NULL COMMENT '创建时间',
  `gmt_modified` bigint(20) NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`),
  KEY `idx_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='tenant_info';

CREATE TABLE nacos_config.`users` (
	`username` varchar(50) NOT NULL PRIMARY KEY,
	`password` varchar(500) NOT NULL,
	`enabled` boolean NOT NULL
);

CREATE TABLE nacos_config.`roles` (
	`username` varchar(50) NOT NULL,
	`role` varchar(50) NOT NULL,
	UNIQUE INDEX `idx_user_role` (`username` ASC, `role` ASC) USING BTREE
);

CREATE TABLE nacos_config.`permissions` (
    `role` varchar(50) NOT NULL,
    `resource` varchar(255) NOT NULL,
    `action` varchar(8) NOT NULL,
    UNIQUE INDEX `uk_role_permission` (`role`,`resource`,`action`) USING BTREE
);

INSERT INTO nacos_config.users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);

INSERT INTO nacos_config.roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');

```

### nacos/bin/docker-startup.sh
```sh
#!/bin/bash
# Copyright 1999-2018 Alibaba Group Holding Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Wait for MySQL container to start
echo "Waiting for MySQL container to start..."
timeout 20s sh -c "until nc -z data-studio-mysql 3306; do sleep 1 && echo -n '.'; done"
echo "MySQL container started."

# start up nacos server
set -x
export CUSTOM_SEARCH_NAMES="application,custom"
export CUSTOM_SEARCH_LOCATIONS=${BASE_DIR}/init.d/,file:${BASE_DIR}/conf/
export MEMBER_LIST=""
PLUGINS_DIR="/home/nacos/plugins/peer-finder"
function print_servers() {
  if [[ ! -d "${PLUGINS_DIR}" ]]; then
    echo "" >"$CLUSTER_CONF"
    for server in ${NACOS_SERVERS}; do
      echo "$server" >>"$CLUSTER_CONF"
    done
  else
    bash $PLUGINS_DIR/plugin.sh
    sleep 30
  fi
}
#===========================================================================================
# JVM Configuration
#===========================================================================================
if [[ "${MODE}" == "standalone" ]]; then

  JAVA_OPT="${JAVA_OPT} -Xms${JVM_XMS} -Xmx${JVM_XMX} -Xmn${JVM_XMN}"
  JAVA_OPT="${JAVA_OPT} -Dnacos.standalone=true"
else
  if [[ "${EMBEDDED_STORAGE}" == "embedded" ]]; then
    JAVA_OPT="${JAVA_OPT} -DembeddedStorage=true"
  fi
  JAVA_OPT="${JAVA_OPT} -server -Xms${JVM_XMS} -Xmx${JVM_XMX} -Xmn${JVM_XMN} -XX:MetaspaceSize=${JVM_MS} -XX:MaxMetaspaceSize=${JVM_MMS}"
  if [[ "${NACOS_DEBUG}" == "y" ]]; then
    JAVA_OPT="${JAVA_OPT} -Xdebug -Xrunjdwp:transport=dt_socket,address=9555,server=y,suspend=n"
  fi
  JAVA_OPT="${JAVA_OPT} -XX:-OmitStackTraceInFastThrow -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=${BASE_DIR}/logs/java_heapdump.hprof"
  JAVA_OPT="${JAVA_OPT} -XX:-UseLargePages"
  print_servers
fi

#===========================================================================================
# Setting system properties
#===========================================================================================
# set  mode that Nacos Server function of split
if [[ "${FUNCTION_MODE}" == "config" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.functionMode=config"
elif [[ "${FUNCTION_MODE}" == "naming" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.functionMode=naming"
fi
# set nacos server ip
if [[ ! -z "${NACOS_SERVER_IP}" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.server.ip=${NACOS_SERVER_IP}"
fi

if [[ ! -z "${USE_ONLY_SITE_INTERFACES}" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.inetutils.use-only-site-local-interfaces=${USE_ONLY_SITE_INTERFACES}"
fi

if [[ ! -z "${PREFERRED_NETWORKS}" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.inetutils.preferred-networks=${PREFERRED_NETWORKS}"
fi

if [[ ! -z "${IGNORED_INTERFACES}" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.inetutils.ignored-interfaces=${IGNORED_INTERFACES}"
fi

### If turn on auth system:
if [[ ! -z "${NACOS_AUTH_ENABLE}" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.core.auth.enabled=${NACOS_AUTH_ENABLE}"
fi

if [[ "${PREFER_HOST_MODE}" == "hostname" ]]; then
  JAVA_OPT="${JAVA_OPT} -Dnacos.preferHostnameOverIp=true"
fi
JAVA_OPT="${JAVA_OPT} -Dnacos.member.list=${MEMBER_LIST}"

JAVA_MAJOR_VERSION=$($JAVA -version 2>&1 | sed -E -n 's/.* version "([0-9]*).*$/\1/p')
if [[ "$JAVA_MAJOR_VERSION" -ge "9" ]]; then
  JAVA_OPT="${JAVA_OPT} -cp .:${BASE_DIR}/plugins/cmdb/*.jar:${BASE_DIR}/plugins/mysql/*.jar"
  JAVA_OPT="${JAVA_OPT} -Xlog:gc*:file=${BASE_DIR}/logs/nacos_gc.log:time,tags:filecount=10,filesize=102400"
else
  JAVA_OPT="${JAVA_OPT} -Djava.ext.dirs=${JAVA_HOME}/jre/lib/ext:${JAVA_HOME}/lib/ext:${BASE_DIR}/plugins/health:${BASE_DIR}/plugins/cmdb:${BASE_DIR}/plugins/mysql"
  JAVA_OPT="${JAVA_OPT} -Xloggc:${BASE_DIR}/logs/nacos_gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M"
fi

JAVA_OPT="${JAVA_OPT} -Dnacos.home=${BASE_DIR}"
JAVA_OPT="${JAVA_OPT} -jar ${BASE_DIR}/target/nacos-server.jar"
JAVA_OPT="${JAVA_OPT} ${JAVA_OPT_EXT}"
JAVA_OPT="${JAVA_OPT} --spring.config.additional-location=${CUSTOM_SEARCH_LOCATIONS}"
JAVA_OPT="${JAVA_OPT} --spring.config.name=${CUSTOM_SEARCH_NAMES}"
JAVA_OPT="${JAVA_OPT} --logging.config=${BASE_DIR}/conf/nacos-logback.xml"
JAVA_OPT="${JAVA_OPT} --server.max-http-header-size=524288"

echo "Nacos is starting, you can docker logs your container"
exec $JAVA ${JAVA_OPT}
```

### nginx/nginx.conf

```
#daemon off;
user  root;
worker_processes  4;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;

        location / {
          log_not_found off;
	        access_log off;
	        proxy_set_header X-Forwarded-Proto $scheme;
	        proxy_set_header Host $http_host;
	        proxy_set_header X-Real-IP $remote_addr;
	        proxy_set_header X-Forwarded-for $proxy_add_x_forwarded_for;
	        root /usr/share/nginx/html;
	        try_files $uri /index.html;
	      }

        location /api/{
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_set_header Host $http_host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-for $proxy_add_x_forwarded_for;
          proxy_pass http://data-studio-uniplore-app-gateway:35000/;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```


































