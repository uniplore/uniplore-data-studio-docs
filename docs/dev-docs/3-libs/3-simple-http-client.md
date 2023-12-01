---
title: SimpleHttpClient
sidebar_position: 3
---

## 简介

为解决常用的简单的 Http 请求，uniplore-data-studio 提供了一个简易的封装库，实现的封装很少，但足够大部分使用场景。

## 引入依赖

```kotlin
implementation("cn.uniplore:uniplore-core-okhttp:${latestVersion}")
```


## 内置构建方法说明

| 方法                                 | 说明                                                                                                                  |
| :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| connectionTimeOut(int value)         | 设置连接超时时间，默认值：30                                                                                          |
| readTimeOut(int value)               | 设置读超时时间，默认值：30                                                                                            |
| writeTimeOut(int value)              | 设置写超时时间，默认值：30                                                                                            |
| mediaType(MediaType value)           | 设置提交的数据媒体类型， 默认值：MediaType.JSON 如：application/json                                                  |
| url(String value)                    | 设置请求 URL                                                                                                          |
| enableUseSSL(boolean value)          | 设置是否支持 HTTPS 携带证书请求，默认值：false                                                                        |
| timeUnit(TimeUnit value)             | 设置上面各种超时时间单元，默认值：TimeUnit.SECONDS                                                                    |
| withHeader(String key, Object value) | 设置请求头，如：application/json，可根据需求设置多个，内置的方法会自己进行累积请求头，下同                            |
| withQuery(String key, Object value)  | 设置请求 query 参数，优先级为：withQuery 如果参数名称与 URL 已存在的参数名相同，那么会对 URL 中的原始参数进行覆盖处理 |

## 请求方法说明

| 方法                                                                                 | 说明                                         |
| :----------------------------------------------------------------------------------- | :------------------------------------------- |
| get()                                                                                | GET 请求                                     |
| post()                                                                               | POST 请求，不携带数据                        |
| post(Object data)                                                                    | POST 请求，携带数据                          |
| postForm(Map<String, Object> data)                                                   | POST 请求，表单数据                          |
| postWithKeyStore(Object data, String type, String password, String keystorePath)     | POST 请求，且使用了 SSL 本地证书             |
| postWithKeyStore(Object data, String type, String password, InputStream inputStream) | POST 请求，且使用了 SSL 证书，只是接受值为流 |
| put()                                                                                | PUT 请求，不携带数据                         |
| put(Object data)                                                                     | PUT 请求，携带数据                           |
| putForm(Map<String, Object> data)                                                    | PUT 请求，携带表单数据                       |
| patch()                                                                              | PATCH 请求，不携带数据                       |
| patch(Object data)                                                                   | PATCH 请求，携带数据                         |
| patchForm(Map<String, Object> data)                                                  | PATCH 请求，携带表单数据                     |
| delete()                                                                             | DELETE 请求                                  |
| upload(String key, File file)                                                        | POST 请求，文件上传，key 表示文件参数名称    |

## 返回值方法说明

| 方法                                      | 说明                                                     |
| :---------------------------------------- | :------------------------------------------------------- |
| `asString()`                              | 返回 string 类型数据，也就是未经过任何处理的 json 字符串 |
| `convertToBean(Class< cls)`               | 返回经过解析成指定类型对象                               |
| `convertToBean(String key, Class<T> cls)` | 解析最外层的 key 的值后，再返回经过解析成指定类型对象    |
| `convertToList(Class<T> cls)`             | 返回经过解析成指定类型对象                               |
| `convertToList(String key, Class<T> cls)` | 解析最外层的 key 的值后，再返回经过解析成指定类型对象    |

## GET 请求

示例 1：

```java
String data=SimpleHttpClient.newBuilder()
        .connectionTimeOut(1000) // 连接超时
        .readTimeOut(1000) // 读超时
        .writeTimeOut(1000) // 写超时
        .url("http://192.168.2.228:35001/wh/testGet") // 请求地址
        .withHeader("token","45646456665456655") // 携带请求头
        .withQuery("name","admin") // 携带请求参数
        .withQuery("email","test@163.com") // 携带请求参数
        .enableUseSSL(false) // 是否启用https证书请求
        .get() // 请求方法
        .asString(); // 返回结果
```

示例 2：

```java
SysUserVO sysUserVO=SimpleHttpClient.newBuilder()
        .url("http://192.168.2.228:35001/wh/testGet")
        .withQuery("name","admin")
        .withQuery("email","test@163.com")
        .get()
        .convertToBean("data",SysUserVO.class); // 提取指定key的数据后再转换
```

示例 3：

```java
List<SysUserVO> sysUserVOs=SimpleHttpClient.newBuilder()
        .url("http://192.168.2.228:35001/wh/list")
        .withQuery("name","admin")
        .withQuery("email","test@163.com")
        .get()
        .convertToList("data"); // 提取指定key的数据后再转换
```

## POST 请求

```java
SysUserVO sysUserVO=new SysUserVO();
        sysUserVO.setAccount("amdin");
        sysUserVO.setPassword("416asd416sad4s6ad465a");
        sysUserVO.setName("amdin");
        sysUserVO.setRealName("管理员");
        sysUserVO.setAvatar("http://www.baidu.com");
        sysUserVO.setEmail("test@qq.com");
        sysUserVO.setTelephone("18788888888");

        String data=SimpleHttpClient.newBuilder()
        .url("http://192.168.2.228:35001/wh/post")
        .withQuery("name","admin")
        .withQuery("email","test@163.com")
        .post(sysUserVO)
        .asString();
```

## PUT 请求

```java
SysUserVO sysUserVO=new SysUserVO();
        sysUserVO.setId(4154596465465450L);
        sysUserVO.setAccount("amdin");
        sysUserVO.setPassword("416asd416sad4s6ad465a");
        sysUserVO.setName("amdin");
        sysUserVO.setRealName("管理员");
        sysUserVO.setAvatar("http://www.baidu.com");
        sysUserVO.setEmail("test@qq.com");
        sysUserVO.setTelephone("18788888888");

        String data=SimpleHttpClient.newBuilder()
        .url("http://192.168.2.228:35001/wh/put")
        .withQuery("name","admin")
        .withQuery("email","test@163.com")
        .put(sysUserVO)
        .asString();
```

## PATCH 请求

```java
SysUserVO sysUserVO=new SysUserVO();
        sysUserVO.setId(4154596465465450L);
        sysUserVO.setAccount("amdin");
        sysUserVO.setPassword("416asd416sad4s6ad465a");
        sysUserVO.setName("amdin");
        sysUserVO.setRealName("管理员");
        sysUserVO.setAvatar("http://www.baidu.com");
        sysUserVO.setEmail("test@qq.com");
        sysUserVO.setTelephone("18788888888");

        String data=SimpleHttpClient.newBuilder()
        .url("http://192.168.2.228:35001/wh/patch")
        .withQuery("name","admin")
        .withQuery("email","test@163.com")
        .patch(sysUserVO)
        .asString();
```

## DELETE 请求

```java
String data=SimpleHttpClient.newBuilder()
        .url("http://192.168.2.228:35001/wh/delete/156161454126564565")
        .withQuery("name","admin")
        .withQuery("email","test@163.com")
        .delete()
        .asString();
```

## 文件上传

```java
File file=new File("C:\\Users\\jy\\Downloads\\mysql_to_mysql_test_1.json");
        if(file.exists()){
        System.err.println(file.getAbsolutePath());
        }
        String data=SimpleHttpClient
        .newBuilder()
        .url("http://192.168.2.155:8080/flink-runner?mode=standalone")
        .upload("file",file)
        .asString();
        System.err.println(data);
```
