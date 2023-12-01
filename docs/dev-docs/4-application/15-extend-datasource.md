---
title: 拓展数据源支持
sidebar_position: 15
---

## 简介

随着系统可能存在的客户群体变大及客户群体数据源的不同，数据中台需要适配的数据源也会越来越多。
为了适配更多的数据源，数据中台需要提供拓展数据源的能力，让用户可以自行拓展数据源。

下面将使用新增达梦数据库作为例子适配新数据源。

## 添加数据源驱动依赖

在**uniplore-data-core/uniplore-data-core-jdbc**模块下的build.gradle.kts新增驱动依赖，

build.gradle.kts

```kotlin

dependencies {
    implementation("com.fasterxml.jackson.core:jackson-databind")
    implementation("com.alibaba:druid-spring-boot-starter")
    implementation("com.alibaba:fastjson")
    runtimeOnly("mysql:mysql-connector-java")
    runtimeOnly("com.oracle.database.jdbc:ojdbc8")
    implementation("com.oracle.database.nls:orai18n")
    runtimeOnly("org.postgresql:postgresql")
    runtimeOnly("com.microsoft.sqlserver:mssql-jdbc")
}

description = "uniplore-data-jdbc"
```

追加

```kotlin
runtimeOnly("com.dameng:DmJdbcDriver18:8.1.3.62")
```

不过为了项目依赖库版本控制，建议将版本号申明到buidSrc/src/main/kotlin/DependencyVersions.kt文件中，然后到buidSrc/src/main/kotlin/Libs.kt文件中申明库。


## 获取Connection实现

在包`cn.uniplore.data.core.jdbc.connection`中新增`dm`包，在`dm`包中新增DmConnection.java文件，文件内容如下：

DmConnection.java

```java
package cn.uniplore.data.core.jdbc.connection.dm;

import cn.uniplore.data.core.jdbc.connection.BaseConnection;
import cn.uniplore.data.core.jdbc.connection.IConnection;
import cn.uniplore.data.core.jdbc.exception.CustomJdbcException;
import org.apache.commons.lang3.StringUtils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DmConnection implements IConnection {

    /**
     * 数据库连接信息
     */
    private final BaseConnection info;

    /**
     * 构造函数初始化
     *
     * @param info 连接信息
     */
    public MysqlConnection(BaseConnection info) {
        this.info = info;
    }

    /**
     * 获取连接
     *
     * @return {@link Connection}
     * @throws CustomJdbcException 抛出异常
     */
    @Override
    public Connection getConn() throws CustomJdbcException, SQLException {
        String url;
        if (StringUtils.isBlank(info.getDatabase())) {
            url = "jdbc:dm://" + info.getHost() + ":" + info.getPort() + "?serverTimezone=UTC&useUnicode=true&useSSL=false&characterEncoding=utf8";
        } else {
            url = "jdbc:dm://" + info.getHost() + ":" + info.getPort() + "/" + info.getDatabase() + "?serverTimezone=UTC&useUnicode=true&useSSL=false&characterEncoding=utf8";
        }
        return DriverManager.getConnection(url, info.getUsername(), info.getPassword());
    }
}

```

## 实现JdbcService

在factory包新建dm包，在dm包新建JdbcService类，实现JdbcService接口。

```java
package cn.uniplore.data.core.jdbc.factory.dm;

import cn.uniplore.data.core.jdbc.connection.BaseConnection;
import cn.uniplore.data.core.jdbc.connection.ConnectionFactory;
import cn.uniplore.data.core.jdbc.exception.CustomJdbcException;
import cn.uniplore.data.core.jdbc.factory.JdbcService;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class MssqlFactory implements JdbcService {

    /**
     * 连接信息实例
     */
    private final Connection connection;

    private final BaseConnection info;

    /**
     * 构造函数
     *
     * @param info 数据库连接信息
     * @throws CustomJdbcException 抛出异常
     */
    public MssqlFactory(BaseConnection info) throws Exception {
        if (Objects.isNull(info)) {
            throw new CustomJdbcException("connection cannot be empty");
        }
        // 获取数据库连接信息
        Connection connection = ConnectionFactory.getConnection(info);
        if (Objects.isNull(connection)) {
            throw new CustomJdbcException("Failed to obtain data volume connection information！");
        }
        this.connection = connection;
        this.info = info;
    }

    @Override
    public Boolean testConnection() throws Exception {
        // 获取数据库连接信息
        Connection connection = ConnectionFactory.getConnection(info);
        if (Objects.isNull(connection)) {
            throw new CustomJdbcException("Failed to obtain data volume connection information！");
        }
        connection.close();
        return true;
    }
}
```

至此，简单的数据源适配就已经完毕。

## 新增数据源类型

到系统管理 -> 数据源类型 中新增dm作为新的数据源类型。