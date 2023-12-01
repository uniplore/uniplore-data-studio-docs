---
title: 常用脚本
sidebar_position: 1
---

## 简介

常用脚本主要是 shell 文件，用于一些常用操作，比如：全部编译、复制 jar 包、部署到 k8s 等。

## 脚本清单

常用脚本位于项目根目录下的`scripts`目录中，目前包含以下脚本：

| 脚本名称                   | 脚本作用                                                                                      |
| :------------------------- | :-------------------------------------------------------------------------------------------- |
| buildApplication.sh        | 编译所有应用                                                                                  |
| copyJar.sh                 | 将编译后的 jar 文件复制到根目录的 build 文件夹中                                              |
| deployToK8s.sh             | 实现一键全量编译并部署到 k8s 中，但此脚本需要太多的其他步骤和工作配合，开发者可不关注此脚本   |
| frontendPushDockerImage.sh | 编译前端 uniplore-data-studio-ui 项目                                                         |
| gradleDockerBuildPush.sh   | 实现全量编译整个项目，构建 docker 镜像，并推送到指定仓库中，可以是 Harbor，也可以是 dockerhub |
| gradleDockerImageBuild.sh  | 实现全量编译整个项目，构建 docker 镜像                                                        |
