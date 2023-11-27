---
title: swagger及参数校验
sidebar_position: 1
---

## 参数校验注解

使用的校验框架为hibernate-validator，小部分是基于hibernate-validator做的拓展。

| 注解 | 属于Bean Validation 规范 | 应用位置 | 作用 | 对HibernateCore中的元数据的影响 |
|:----|:----:|:----|:----|:----:|
| @DecimalMax |	yes | 字段或属性. 支持类型包括BigDecimal, BigInteger, String, byte, short, int, long和其各自对应的包装器类型.| 被标注的值必须不大于约束中指定的最大值. 这个约束的参数是一个通过BigDecimal定义的最大值的字符串表示. | 没有 |
| @DecimalMin | yes | 字段或属性. 支持类型包括BigDecimal, BigInteger, String, byte, short, int, long和其各自对应的包装器类型. | 被标注的值必须不小于约束中指定的最小值. 这个约束的参数是一个通过BigDecimal定义的最小值的字符串表示. | 没有 |
| @Digits(integer=, fraction=) | yes | 字段或属性. 支持类型包括BigDecimal, BigInteger, String, byte, short, int, long和其各自对应的包装器类型. | 检查此值是否是一个数字,并且这个数字的整数部分不超过integer定义的位数, 和小数部分不超过fraction 定义的位数. | 对应的数据库表字段会被设置精度(precision)和准度(scale). |
| @Email | no | 字段或属性, 需要是String类型的.	| 检查所给的字符串是否符合email地址的格式. | 没有 |
| @Future | yes | 字段或属性, 支持类型是java.util.Date 和 java.util.Calendar. | 检查给定的日期是否比现在晚. | 没有 |
| @Length(min=, max=) | no | 字段或属性, 需要是String类型的. | 检查该字符串的长度是否在min 和 max规定的范围内.| 对应的数据库表字段的长度会被设置成约束中定义的最大值. |
| @Max | yes | 字段或属性. 支持类型包括BigDecimal, BigInteger, String, byte, short, int, long和其各自对应的包装器类型. | 检查该值是否小于或等于约束条件中指定的最大值. | 会给对应的数据库表字段添加一个check的约束条件. |
| @Min | yes | 字段或属性. 支持类型包括BigDecimal, BigInteger, String, byte, short, int, long和其各自对应的包装器类型. | 检查该值是否大于或等于约束条件中规定的最小值. | 会给对应的数据库表字段添加一个check的约束条件. |
| @NotNull | yes | field/property | 检查该值不为null… | 对应的表字段不允许为null. |
| @NotBlank | no | field/property | 检查该字符串不为null,并且不是空字符串. 本约束和下面的@NotEmpty的不同之处在于,本约束只能被用在字符串类型上,并且会忽略字符串尾部的空白字符. | 没有 |
| @NotEmpty | no | 字段或属性. 支持的类型包括String, Collection, Map 和数组. | 检查该值不为null同时也不为空. | 没有 |
| @Null | yes | field/property | 检查该值应该为null. | 没有 |
| @Past | yes | 字段或属性, 支持类型是java.util.Date 和 java.util.Calendar.	| 检查标注对象中的值表示的日期比当前早. | 没有 | 
| @Pattern(regex=, flag=) | yes | 字段或属性, 需要是String类型的. | 检查该字符串是否能够在match指定的情况下被regex定义的正则表达式匹配. | 没有 |
| @Range(min=, max=) | no | 字段或属性. 支持类型包括BigDecimal, BigInteger, String, byte, short, int, long和其各自对应的包装器类型. | 检查该值是否在[min, max)之间 | 没有 |
| @Size(min=, max=) | yes | 字段或属性. 支持的类型包括String, Collection, Map 和数组. | 检查该值的size是否在[min, max)之间. | 对应的数据库表字段的长度会被设置成约束中定义的最大值. |
| @ScriptAssert(lang=, script=, alias=) | no | 类 | 要使用这个约束条件,必须先要保证Java Scripting API 即JSR 223 (“Scripting for the JavaTM Platform”)的实现在类路径当中. 如果使用的时Java 6的话,则不是问题, 如果是老版本的话, 那么需要把 JSR 223的实现添加进类路径. 这个约束条件中的表达式可以使用任何兼容JSR 223的脚本来编写. (更多信息请参考javadoc) | 没有 |
| @URL(protocol=, host=, port=) | no | 字段或属性, 要求其类型为String. | 判断该值是否是一个有效的URL, 如果给出了约束中的protocol, host 或 port 参数的话,那个被校验的值需要和其匹配. | 没有 |
| @Valid | yes | 字段或属性. 支持所有的非原始类型. | 递归的对关联对象进行校验, 如果关联对象是个集合或者数组, 那么对其中的元素进行递归校验,如果是一个map,则对其中的值部分进行校验. | 没有 |
| @CheckXss | no | field/property | 检查该值是否存在XSS脚本, 支持类型：java.lang,String | 没有 |
| @ChinaIDCardNo | no | field/property | 检查该值是否是中国身份证号码, 支持类型：java.lang,String | 没有 |
| @CustomEmail | no | field/property | 检查该值是否为邮箱, 支持类型：java.lang,String | 没有 |
| @LegalFileUrl | no | field/property | 检查该值是否为合法链接地址, 支持类型：java.lang,String | 没有 |
| @Mobile | no | field/property | 检查该值是否为手机号, 支持类型：java.lang,String | 没有 |
| @Password | no | field/property | 密码复杂度校验(对明文传输时有效), 支持类型：java.lang,String | 没有 |
| @SmsCode | no | field/property | 短信验证码合法性校验, 支持类型：java.lang,String | 没有 |
| @CreditCode | no | field/property | 统一社会信用代码合法性校验, 支持类型：java.lang,String | 没有 |
| @CronExpression | no | field/property | cron表达式合法性校验, 支持类型：java.lang,String | 没有 |
| @LegalURL | no | field/property | 链接合法性校验, 支持类型：java.lang,String | 没有 |
| @Chinese | no | field/property | 中文合法性校验, 支持类型：java.lang,String | 没有 |
| @ChinesePostCode | no | field/property | 中国邮编合法性校验, 支持类型：java.lang,String | 没有 |

## 统一返回结果说明

统一返回结果是支持了泛型对象的，写入如：Result<对象类型>。假如我们现在想获取一个用户列表`List<User>`，那么正确的指定返回结果写法为：`Result<List<User>>`。

不指定返回类型会怎么样呢？不指定类型时，swagger无法判断返回结果类型，也就导致了文档渲染时无法正确显示swagger中的文档示例。

## Result指定返回结果类型

错误写法(没有指定返回类型)：

```java
/**
 * 获取用户列表
 *
 * @param userId   用户ID
 * @param username 用户名
 * @return {@link Result}  // TODO 此处写法不规范，必须指定返回类型
 */
 @ApiOperation(value = "获取用户列表", notes = "获取用户列表")
     @ApiImplicitParams({
             @ApiImplicitParam(name = "userId", value = "用户ID", dataType = "java.lang.Long", example = "1954195456465456", required = true),
             @ApiImplicitParam(name = "username", value = "用户名", dataType = "java.lang.String", example = "王五", required = false),
     })
 }
 @GetMapping(value = "/getUserList")
 public Result getUserList(@RequestParam(value = "userId") Long userId, @RequestParam(value = "username", required = false) String username) {
     List<User> result = userService.getUserList(userId, username);
     return Result.success(result);
 }

 public Result<Map<Object>> test() {}  // 这个写法也是错误的，因为Result的对象检测里对map进行类型判断，一旦返回map(只要继承或对map进行实现)类型，直接抛异常
```

正确写法(指定返回类型)：

```java
 /**
  * 获取用户列表
  *
  * @param userId   用户ID
  * @param username 用户名
  * @return {@link Result<List<User>}
  */
  @ApiOperation(value = "获取用户列表", notes = "获取用户列表")
       @ApiImplicitParams({
               @ApiImplicitParam(name = "userId", value = "用户ID", dataType = "java.lang.Long", example = "1954195456465456", required = true),
               @ApiImplicitParam(name = "username", value = "用户名", dataType = "java.lang.String", example = "王五", required = false),
       })
 }
 @GetMapping(value = "/getUserList")
 public Result<List<User>> getUserList(@RequestParam(value = "userId") Long userId, @RequestParam(value = "username", required = false) String username) {
     List<User> result = userService.getUserList(userId, username);
     return Result.success(result);
 }
```

## DTO或者VO中swagger写法

错误写法：
```java
/**
 * banner
 *
 * @author: uniplore
 * @date: 2022-02-28 19:37:37
 */
@ApiModel(value = "banner信息")
@Data
@Accessors(chain = true)
public class BannerVO implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * ID
     */
    @ObjectToStringSerializer
    private Long id;
    /**
     * 标题
     */
    private String title;
    /**
     * banner图地址
     */
    private String thumbUrl;
}
```

正确写法：
```java
/**
 * banner
 *
 * @author: uniplore
 * @date: 2022-02-28 19:37:37
 */
@ApiModel(value = "banner信息")
@Data
@Accessors(chain = true)
public class BannerVO implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * ID
     */
    @ApiModelProperty(value = "ID", dataType = "java.lang.Long", example = "1000000000")
    private Long id;
    /**
     * 标题
     */
    @ApiModelProperty(value = "标题", dataType = "java.lang.String", example = "测试标题")
    private String title;
    /**
     * banner图地址
     */
    @ApiModelProperty(value = "banner图地址", dataType = "java.lang.String", example = "https://www.baidu.com/16565465.png")
    private String thumbUrl;
}
```

## swagger中对应@PathVariable和@RequestParam注解文档写法区别

- @PathVariable swagger写法重点在@ApiImplicitParam中加上属性`paramType = "path"`即可
```java
@ApiImplicitParam(name = "type", value = "来源类型(1-系统登录，2-三方登录)", dataType = "java.lang.Integer", paramType = "path", example = "1", required = false)
```

- @RequestParam swagger写法重点在@ApiImplicitParam中加上属性`paramType = "query"`即可，也可以不写，因为默认值就是query
```java
@ApiImplicitParam(name = "type", value = "来源类型(1-系统登录，2-三方登录)", dataType = "java.lang.Integer", paramType = "query", example = "1", required = false)

或
@ApiImplicitParam(name = "type", value = "来源类型(1-系统登录，2-三方登录)", dataType = "java.lang.Integer", example = "1", required = false)
```