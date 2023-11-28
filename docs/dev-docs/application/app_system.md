---
title: 系统管理
sidebar_position: 2
---

## 简介

uniplore-app-system 提供用户体系、角色、权限、菜单、操作日志、数据字典、租户、客户端、工作组信息管理接口。

## 用户管理

用户管理涉数据表有：

| 表名称                       | 表备注         | 说明信息                                                                         |
| :--------------------------- | :------------- | :------------------------------------------------------------------------------- |
| uniplore_sys_user            | 用户表         |                                                                                  |
| uniplore_sys_user_role       | 用户角色关联表 | 与用户为一对多的关系                                                             |
| uniplore_sys_role            | 角色表         |                                                                                  |
| uniplore_sys_role_permission | 角色权限关联表 | 与菜单为一对多的关系                                                             |
| uniplore_sys_menu            | 菜单表         | 表设计上包含了菜单和权限，菜单用于系统菜单分配，权限则作用在前端按钮或后端接口上 |

## 工作组管理

工作组管理和分配其实就是对用户进行分组，用户可以分配到多个工作组，而工作组可以包含多个用户。然后不同分组的数据仅对自身分组可见，不同分组之间不可见。
从数据库层面而言，就是对数据做行隔离机制。

工作组关联包含了如下管理：

- 用户分组
- 数据源分组

## 菜单和权限

菜单管理用于给角色分配菜单，不是给用户分配菜单？是的，本系统基于角色做菜单和权限分配，不基于用户。菜单不是本教程介绍的重点，而权限才是本教程介绍的重点。


权限目前的实现机制有，前端基于vue实现指令**v-auth**和方法**hasPermission**两种方式判断用户使用拥有权限，被v-auth指令修饰的组件且用户无权限，则组件不会显示，hasPermssion则是拿来弥补v-auth指令在typescript代码或JavaScript代码中无法使用的场景。

后端则使用注解**@PreAuth**实现用户权限的校验，作用于被注解`@controller`或`@RestController`修饰的类的方法上，示例如下：

```java
import cn.uniplore.app.system.dto.SysMenuAddDTO;
import cn.uniplore.app.system.dto.SysMenuUpdateDTO;
import cn.uniplore.app.system.service.SysMenuService;
import cn.uniplore.app.system.vo.SysMenuVO;
import cn.uniplore.app.system.vo.TreeMenuVO;
import cn.uniplore.core.auth.annotation.PreAuth;
import cn.uniplore.core.common.web.Result;
import cn.uniplore.core.log.annotation.Log;
import cn.uniplore.core.web.controller.BaseController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

/**
 * 菜单权限接口
 *
 * @author jy
 * @date 2022-05-06 11:04:38
 */
@Api(tags = "菜单权限接口")
@Validated
@RestController
@RequestMapping(value = "/sysMenu")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class SysMenuController extends BaseController {

    private final SysMenuService sysMenuService;

    /**
     * 获取用户菜单
     *
     * @param scopeType 菜单作用域：0-idis，1-数据中台
     * @return {@link Result<List<TreeMenuVO>>}
     */
    @PreAuth
    @GetMapping(value = "/tree")
    @ApiOperation(value = "获取用户菜单", notes = "根据用户ID查询菜单树")
    @Log(value = "获取用户菜单", exception = "获取用户菜单请求异常")
    public Result<List<TreeMenuVO>> tree(@Range(min = 0, max = 1) @RequestParam(value = "scopeType") Integer scopeType) {
        return Result.success(sysMenuService.getTreeByUserId(scopeType, this.getUserId()));
    }
}
```

关于权限校验，前端和后端都需要加上校验，否则即使给角色分配了权限，也不会使生效。前端全局禁用权限认证在uniplore-data-studio-ui/.env文件夹中，配置为：

```bash
# disale permission, include hasPermission Func & v-auth directive
VITE_DATA_STUDIO_DISABLE_PERMISSION = false
```