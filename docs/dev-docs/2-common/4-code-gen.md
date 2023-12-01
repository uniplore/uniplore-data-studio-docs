---
title: 后端代码生成使用说明
sidebar_position: 4
---

## 简介

uniplore-data-studio有一个后端代码生成器，可以生成后端代码，包括实体类、Mapper、Service、Controller，配置为位于项目根目录的build.gradle.kts文件中，配置如下：

```kotlin
// generate code, include mapper xml & mapper & service & controller
    configure<MybatisCodegenExtension> {
        dbType.set("mysql") // eg: mysql/postgresql
        url.set("192.168.2.72") // dataase host
        port.set(3306) // port
        database.set("uniplore-data-studio") // shema
        userName.set("root") // username
        password.set("Uniplore!@#123") // password
        frameworkType.set("mybatisplus") // only support mybatisplus
        tablePrefix.set("~") // ignore table prefix, eg: t_ / t
        tables.set(
            arrayListOf(
                "dq_query_resource",
            )
        )
        ignoreColumns.set(
            arrayListOf(
                "tenant_id",
                "sys_group_id",
            )
        ) // ignore columns
        projectPath.set("${rootDir.absolutePath}/uniplore-data-system") // eg: projectPath.set("${rootDir.absolutePath}/uniplore-data-assets")
        packageName.set("cn.uniplore.data.system") // package
        controller.set("controller") // springboot controller dir
        service.set("service") // springboot service dir
        mapper.set("mapper") // mybatis mapper interface dir
        entity.set("entity") // mybatisplus entity dir
        xml.set("mapper") // mybatis xml dir, default generate on `resources/mapper` and don't support change the default dir
        languageType.set("java") // eg: java & kotlin
        author.set("uniplore") // Set the author on java doc to declared who generate the file
        apiPrefix.set("") // Controller api prefix, default requestmapping prefix is the table name
        restfulStyle.set(true) // Support restful style, default: true
        swagger.set(true) // Enable generate swagger annotation on java class, default: true
    }
```

## 代码生成使用

1. 设置数据库连接信息；
2. 设置需要生成代码的表；
3. 设置需要生成到的指定的模块；
4. 点击构建按钮；
5. 点击生成代码，下面截图操作只是个示例，代码生成需到idea的gradle选项卡中，再到需要生成的模块下点击，路径为：**tasks -> gmcp
   -> generateCode**；

操作截图如下：
[![代码生成简单说明](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/common/code-generate.png)](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/common/code-generate.png)
