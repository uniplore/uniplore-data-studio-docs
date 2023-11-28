---
title: 用户信息辅助获取
sidebar_position: 4
---

## 简介

为解决获取用户信息的问题，特别是分页查询时，需要循环原有数据提取用户ID后，再通过远程调用获取用户信息，导致查询效率低下，为解决此问题，我们封装了用户信息辅助获取功能，通过此功能，可实现用户信息辅助获取，提高查询效率，也减小代码维护难度。

## 引入依赖

```kotlin
implementation("cn.uniplore:uniplore-core-user:${latestVersion}"))
```

## JAVA Array数据用户信息填充策略

示例代码如下：

```java
import cn.uniplore.core.cmp.user.service.SystemUserInfoService;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.uniplore.data.tag.entity.DtGroupEntity;
import cn.uniplore.data.tag.mapper.DtGroupMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class DtGroupService extends ServiceImpl<DtGroupMapper, DtGroupEntity> {
    private final DtGroupMapper dtGroupMapper;
    private final SystemUserInfoService systemUserInfoService; // 主要是这个service

    /**
     * 分页查询
     *
     * @param pageInfo 分页插件
     * @param param    查询参数
     * @return {@link IPage<DtGroupVO>}
     */
    public IPage<DtGroupVO> getPage(IPage<DtGroupVO> pageInfo, DtGroupVO param) {
        pageInfo = dtGroupMapper.findPage(pageInfo, param);
        if (pageInfo.getRecords() != null && pageInfo.getRecords().size() > 0) {
            List<DtGroupVO> tempGroups = pageInfo.getRecords();
            // 下面的createUsername不是固定值，与DtGroupVO中字段(Field)的命名有关，updateUsername也是，需要根据实际命名情况进行调整
            tempGroups = systemUserInfoService.extractUserInfo(tempGroups, "createUsername", null);
            // 如果同时需要填充创建用户名和更新用户名，那么使用下面注释的写法
            // tempGroups = systemUserInfoService.extractUserInfo(tempGroups, "createUsername", "updateUsername");
            pageInfo.setRecords(tempGroups);
        }

        return pageInfo;
    }
}
```

## 单个对象填充用户信息策略

```java
import cn.uniplore.core.cmp.user.service.SystemUserInfoService;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.uniplore.data.tag.entity.DtGroupEntity;
import cn.uniplore.data.tag.mapper.DtGroupMapper;
import cn.uniplore.data.tag.vo.DtGroupVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class DtGroupService extends ServiceImpl<DtGroupMapper, DtGroupEntity> {
    private final DtGroupMapper dtGroupMapper;
    private final SystemUserInfoService systemUserInfoService; // 主要是这个service

    /**
     * 查询一条数据
     *
     * @param id id主键
     * @return {@link DtGroupVO}
     **/
    public DtGroupVO getOne(Long id) {
        DtGroupVO result = dtGroupMapper.findByPrimaryKey(id);
        if (result == null) {
            return null;
        }

        // 下面的createUsername不是固定值，与DtGroupVO中字段(Field)的命名有关，updateUsername也是，需要根据实际命名情况进行调整
        result = systemUserInfoService.extractUserInfo(result, "createUsername", null);
        // 如果同时需要填充创建用户名和更新用户名，那么使用下面注释的写法
        // result = systemUserInfoService.extractUserInfo(result, "createUsername", "updateUsername");
        
        return result;
    }
}
```

## 自定义填充策略

假如现在有这样的场景，有个字段名叫applyUserId，属于用户ID，但是不叫createBy，想获取用户名填充给叫applyUsername的字段怎么办？上面的填充策略已经无法满足需求，如何解决？

```java
import cn.uniplore.core.cmp.user.service.SystemUserInfoService;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.uniplore.data.tag.entity.DtGroupEntity;
import cn.uniplore.data.tag.mapper.DtGroupMapper;
import cn.uniplore.data.tag.vo.DtGroupVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class DtGroupService extends ServiceImpl<DtGroupMapper, DtGroupEntity> {
    private final DtGroupMapper dtGroupMapper;
    private final SystemUserInfoService systemUserInfoService; // 主要是这个service

    /**
     * 查询一条数据
     *
     * @param id id主键
     * @return {@link DtGroupVO}
     **/
    public DtGroupVO getOne(Long id) {
        DtGroupVO result = dtGroupMapper.findByPrimaryKey(id);
        if (result == null) {
            return null;
        }
        
        // 下面applyUserId属于idField，比如createBy
        // applyUsername属于nameField，比如createUsername
        result = systemUserInfoService.extractCustomFieldUserInfo(result, "applyUserId", "applyUsername");
        
        return result;
    }
}
```

### 更多填充策略方式

填充工具类为`cn.uniplore.core.cmp.user.utils.DataExtractUtils`，提供填充方法如下：
```java
    /**
     * 数据抽取填充方法
     *
     * @param source        数据来源
     * @param target        数据填充对象
     * @param matchPatterns 填充规则
     * @return {@link T} 填充后的数据
     */
    public static <T> List<T> extract(
            List<?> source, 
            List<T> target, 
            List<DataMatchPattern> matchPatterns) throws NoSuchFieldException, IllegalAccessException

/**
 * 数据抽取填充方法
 *
 * @param source        数据来源
 * @param target        数据填充对象
 * @param matchPatterns 填充规则
 * @return {@link T} 填充后的数据
 */
public static <T> T extract(
        List<?> source, 
        T target,
        List<DataMatchPattern> matchPatterns) throws NoSuchFieldException, IllegalAccessException


```