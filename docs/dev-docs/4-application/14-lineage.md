---
title: 数据血缘
sidebar_position: 14
---

## 简介

数据血缘是数据资产管理的范畴，数据血缘是描述数据从产生到当前数据资产的完整过程，是数据的全生命周期管理。

## 使用存储

目前使用PostgreSQL+Apache Age作为数据血缘存储引擎，执行语句遵循Cypher语法。

uniplore-data-assets提供统一的数据血缘推送入口为cn.uniplore.data.assets.controller.DaMetadataReceiveController下的，receiveMetadata方法。

如何存储数据到PostgreSQL，请参考[PostgreSQL存储数据血缘](/docs/dev-docs/libs/apache_age_starter)。

## 推送数据血缘

添加依赖：

```kotlin
implementation(project(":uniplore-data-core:uniplore-data-core-metadata"))
```



推送调用示例：

```java

public class PushLineage {

    public static final String URL = "http://127.0.0.1:35000/uniplore-data-assets/metadataReceive/receive";

    public static void main(String[] args) throws Exception {
        MetadataWriterModel model = new MetadataWriterModel();
        model.setMetamodels(metadata);
        model.setRelations(relations);
        model.setLineageRelations(lineageRelations);
        model.setType(DbMetadataStructTypeEnum.TAG);
        // 创建摄取的客户端
        EmitterClient client = EmitterClient.builder()
                .token(token)
                .server(URL)
                .build();
        // 推送API元数据
        MetadataWriteResponse response = client.pushMetadata(model);
        System.out.println(response);

}

```

接收数据血缘模块为uniplore-data-assets, 调用地址可参考上面java代码中调用的URL。