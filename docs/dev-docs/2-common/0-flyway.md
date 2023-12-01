---
title: Flyway使用规约
sidebar_position: 0
---

注意：无论有什么需求需要调整SQL，**需要新增SQL文件**，不允许对历史已经执行了的SQL做任何改动，否则运行报错！！！

## SQL文件规范

- V[版本号]__[版本信息].sql
- [版本号]要求必须增长
- [版本信息]要求**必须大写**，且能说明文件大概做什么，如：`V10__CRETE_USER_TABLE.sql`
- 脚本的内容如果是数据库关键字的，要求尽量使用大写，便于区分，如：`varchar`尽量写成`VARCHAR`
- 文件内部需对文件加更加详细的说明，内容示例如下：
```sql
-- ----------------------------
-- 初始化数据库的基础表，目前是初始化版本
-- ----------------------------

-- ----------------------------
-- 用户表
-- ----------------------------
CREATE TABLE IF NOT EXISTS sys_user
(
    id          BIGINT      NOT NULL COMMENT 'ID',
    username    VARCHAR(32) NOT NULL COMMENT '用户名',
    password    VARCHAR(64) NOT NULL COMMENT '密码',
    deleted     TINYINT(1)  NOT NULL COMMENT '是否逻辑删除：0-否，1-是',
    create_by   BIGINT      NOT NULL DEFAULT 0 COMMENT '创建用户ID',
    update_by   BIGINT      NOT NULL DEFAULT 0 COMMENT '更新用户ID',
    create_time TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id) USING BTREE
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT '用户表';
```

## SQL编写说明

### 新建表SQL

规范示例如下:
```sql
CREATE TABLE IF NOT EXISTS sys_user
(
    id          BIGINT      NOT NULL COMMENT 'ID',
    username    VARCHAR(32) NOT NULL COMMENT '用户名',
    mobile      VARCHAR(32) NOT NULL COMMENT '电话',
    password    VARCHAR(64) NOT NULL COMMENT '密码',
    deleted     TINYINT(1)  NOT NULL COMMENT '是否逻辑删除：0-否，1-是',
    create_by   BIGINT      NOT NULL DEFAULT 0 COMMENT '创建用户ID',
    update_by   BIGINT      NOT NULL DEFAULT 0 COMMENT '更新用户ID',
    create_time TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id) USING BTREE,
    UNIQUE KEY idx_mobile(mobile)
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT '用户表';
```

### 新增字段名称

> 一定要注意新增字段所在位置，也就是结束语句必须注意加`AFTER [已存在字段名称]`，除非是在最后一列加可以忽略不写，但是建议还是写上，因为不在after作为字段位置依据，那么SQL在执行时字段位置会默认在最后一列。

```sql
ALTER TABLE sys_user ADD COLUMN remark VARCHAR(256) NOT NULL DEFAULT '' COMMENT '备注信息' AFTER password;
```

### 修改已存在字段非字段名称信息

```sql
ALTER TABLE sys_user MODIFY COLUMN remark VARCHAR(128) NOT NULL DEFAULT '' COMMENT '备注信息';
```


### 修改已存在字段名称

> 如将`remark`重命名为`remark_user`。

```sql

ALTER TABLE sys_user CHANGE COLUMN remark remark_user VARCHAR(128) NOT NULL DEFAULT '' COMMENT '备注信息';
```

### 新增(删除)唯一索引

新增
```sql
ALTER TABLE `table_name` ADD UNIQUE (`column`);
如：
ALTER TABLE `sys_user` ADD UNIQUE (`mobile`);
```

删除
```sql
ALTER TABLE `table_name` DROP INDEX index_name;
```


### 新增(删除)普通索引

新增

```sql
ALTER TABLE `table_name` ADD INDEX index_name (`column`);
如:
ALTER TABLE `sys_user` ADD INDEX idx_user_name (`user_name`);
```

删除
```sql
ALTER TABLE `table_name` DROP INDEX index_name;
```

### 添加FULLTEXT(全文索引)

```sql
ALTER TABLE `table_name` ADD FULLTEXT (`column`);
```

### 添加多列索引

```sql
ALTER TABLE `table_name` ADD INDEX index_name ( `column1`, `column2`, `column3` );
```

### 重命名表

> 在执行重命名表时，旧表`old_table_name`必须存在，而新表`new_table_name`一定不存在。如果新表`new_table_name`确实存在，该语句将失败，此操作也是危险操作，请谨慎操作。

```sql

RENAME TABLE sys_user TO new_sys_user;
```

### 删除表

> 删除表操作请务必谨慎操作。

```sql

DROP TABLE IF EXISTS sys_user;
```