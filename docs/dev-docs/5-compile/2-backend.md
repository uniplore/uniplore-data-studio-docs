---
title: 后端编译
sidebar_position: 2
---

## 直接编译方式

### 编译

此处拿数据中台uniplore-app-gateway举例。

```bash
./gradlew :uniplore-app-gateway:assemble
// 如果是需要清除之前的编译文件，可以加上clean
./gradlew :uniplore-app-gateway:clean:assemble
```

也可以直接点击idea中gradle选下卡指定模块下`Tasks`的`assemble`。

### 编译后文件目录

直接编译后，会在当前模块下生成一个`build`目录，里面是编译后的文件，最终输出文件在`build/libs`文件夹下。


## 构建docker镜像方式

使用gradle命令编译前端并构建镜像方式，前提是需要启动docker或桌面端的docker-desktop。

后端编译命令格式为：`./gradlew :[模块名称]:dockerBuildImage`

```bash
# 在项目根目录执行如下命令
./gradlew :uniplore-app-gateway:dockerBuildImage
```

## 一键构建镜像并推送到仓库

构建镜像并推送到仓库分两种情况，一种是推送到dockerhub，另一种是推送到Harbor。推送到dockerhub不需要额外配置仓库地址，只
要镜像前缀为自己申请的dockerhub用户名(dockerhub的用户指纹)即可。如果是推送到Harbor，需要配置镜像完整前缀，例
如：`192.168.2.1/uniplore/uniplore-app-gateway:v0.1.0`。

下面将使用Harbor镜像仓库作为例子，配置文件位于项目`buildSrc/src/main/kotlin/DockerEnvProperties.kt`中，原始配置如下：

```kotlin
/**
 * docker常量申明
 */
object DockerEnvProperties {
    // 镜像常规参数
    const val repo_url = "http://192.168.2.104/library"
    const val base_image = "openjdk:11"
    const val ali_source_repo = "\nRUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list\n" +
            "RUN  apt-get clean\n"
    const val base_dependency = "\nRUN apt-get update -y\n" +
            "RUN apt-get install -y dmidecode"
    const val email = "service@uniplore.io"
    const val author = "uniplore"
    const val volumes = "/root/tmp"
    const val image_prefix = "192.168.2.104/library"
    const val java_security_egd = "-Djava.security.egd=file:/dev/./urandom"
    const val encoding = "-Dfile.encoding=UTF-8"
    const val default_active = "-Dspring.profiles.active=test"
    const val repo_username = "admin"
    const val repo_password = "Harbor12345"

    // Whether to allow building images with time as suffix of version，eg: 0.1.0-2023_11_23_10_30, default: true
    const val allow_build_version_with_time = true

    // 下面......表示省略了其他代码
    ......
}
```

重点是需要配置仓库地址、镜像前缀、仓库用户名和密码，也是需要更改上述Docker构建配置文件中的`repo_url`、`image_prefix`、`repo_username`和`repo_password`。
其中`repo_url`和`image_prefix`的区别就在于`repo_url`是仓库地址，`image_prefix`是镜像前缀。

调整完上述配置后，执行如下命令即可一键完成编译、构建镜像和推送镜像到仓库的操作。

```bash
# 在项目根目录执行
./gradlew :uniplore-app-gateway:dockerPushImage
```

## 镜像版本在哪定义？

版本定义配置文件位于项目`buildSrc/src/main/kotlin/ModuleVersions.kt`中，完整代码如下：

```kotlin
/**
 * module version declare
 */
object ModuleVersions {

    /**
     * init module version info
     */
    fun initVersionInfo(): MutableList<ModuleVersionObject> {
        val versionInfo = mutableListOf<ModuleVersionObject>()
        // base application modules
        versionInfo.add(ModuleVersionObject("uniplore-app-gateway", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-app-uaa", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-app-system", "0.1.0"))

        // application modules
        versionInfo.add(ModuleVersionObject("uniplore-data-api", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-assets", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-datasource", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-exchange", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-model", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-quality", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-service", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-standard", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-system", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-tag", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-operation-monitor", "0.1.0"))

        // core modules
        versionInfo.add(ModuleVersionObject("uniplore-data-core-chunjun", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-core-common", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-core-flink", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-core-jdbc", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-core-kafka", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-core-sqlparser", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-data-core-type-convert", "0.1.0"))

        // frontent modules
        versionInfo.add(ModuleVersionObject("uniplore-data-studio-ui", "0.1.0"))
        // open feign interface modules

        versionInfo.add(ModuleVersionObject("uniplore-service-standard", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-service-datasource", "0.1.0"))
        versionInfo.add(ModuleVersionObject("uniplore-service-system", "0.1.0"))
        // flink submit job server
        versionInfo.add(ModuleVersionObject("uniplore-flink-chunjun-go", "0.1.0"))

        return versionInfo
    }

    /**
     * get module version
     *
     * @param projectName module
     */
    fun getModuleVersion(projectName: String): String {
        val versionInfo = initVersionInfo()
        val version = versionInfo.find { it.moduleName == projectName }?.version
        return if (version == null) {
            "0.1.0"
        } else {
            version
        }
    }
}

```

## 其他说明

当前数据中台构建镜像策略为生成签名一致的两个镜像，例如：`test/test:0.1.0-2023_10_30_15_35`和`test/test:latest`，其中`2023_10_30_15_35`是构建时间。无论是构建镜像还是
一键构建并推送镜像到仓库，都可以在自己本机的docker中查看到镜像。