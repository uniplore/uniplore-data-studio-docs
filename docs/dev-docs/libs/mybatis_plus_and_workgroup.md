---
title: MybatisPlus和工作组
sidebar_position: 2
---

## 简介

uniplore-starter-mybatisplus支持日志输出打印Mybatis执行的SQL语句、多租户、工作组、字段自动填充等功能。其中工作中相当于二级租户的概念。

多租户和工作组都是冗余在表设计中，其中多租户字段为**tenant_id**，工作组的字段为**sys_group_id**。

## 添加依赖

```kotlin
implementation("cn.uniplore:uniplore-starter-mybatisplus:latestVersion")
```

## 配置文件说明
```yaml
uniplore:
  mybatis-plus:
    # =============== 字段自动填充策略 ===============
    auto-fill:
      # 是否开启自动填充
      enabled: true
      # 是否开启插入填充
      enableInsertFill: true
      # 是否开启更新填充
      enableUpdateFill: true
      # 创建时间字段名，默认值：create_time
      createTimeField: create_time
      # 更新时间字段名，默认值：update_time
      updateTimeField: update_time
      # 创建用户ID字段名，默认值：createBy
      createByField: createBy
      # 更新用户ID字段名，默认值：updateBy
      updateByField: updateBy
      # 逻辑删除字段名，默认值：deleted
      deleteField: deleted
    # =============== SQL日志打印策略 ===============
    log:
      # 是否开启日志输出执行SQL语句，默认值：false
      enable: true
      # 设置成为输出的日志级别(不是日志显示的级别，是将sql语句输出时定义成为想要输出的级别)，默认值：info
      level: info
    # =============== 行级租户策略 ===============  
    tenant:
      # 是否开启租户, 默认值：false
      enabled: true
      # 租户字段名，默认值：tenant_id
      column: tenant_id
      # 配置不进行多租户隔离的sql, 需要配置mapper的全路径如：cn.uniplore.user.mapper.SysUserMapper.findList，默认值为空数组，下面为示例，不是真实值
      ignoreSqls:
        - cn.uniplore.user.mapper.SysUserMapper.findList
        - xxx.xxx.xxx
      # 配置不进行多租户隔离的表名
      ignoreTables:
        - uniplore_sys_user
        - xxx_xxx
    # =============== 用户组功能(行级权限，相对于行级租户来说级别低一些) ===============    
    user-group:
      # 是否开启用户组
      enabled: true
      # 用户组字段名，默认值：sys_group_id
      column: sys_group_id
      # 配置不进行多租户隔离的sql, 需要配置mapper的全路径如：cn.uniplore.user.mapper.SysUserMapper.findList，默认值为空数组，下面为示例，不是真实值
      ignoreSqls:
        - cn.uniplore.user.mapper.SysUserMapper.findList
        - xxx.xxx.xxx
      # 配置不进行多租户隔离的表名，默认值如下：
      ignoreTables:
        - uniplore_sys_user
        - uniplore_sys_menu
        - uniplore_sys_client
        - uniplore_sys_api
        - uniplore_sys_attachment
        - uniplore_sys_blacklist
        - uniplore_sys_config
        - uniplore_sys_log
        - uniplore_sys_role
        - uniplore_sys_role_depart
        - uniplore_sys_role_permission
        - uniplore_sys_route
        - uniplore_sys_user_role
        - uniplore_sys_group_user
        - uniplore_sys_group
        - uniplore_sys_depart
        - uniplore_sys_tenant
```