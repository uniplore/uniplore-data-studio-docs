---
title: 数据脱敏
sidebar_position: 1
---

## 添加依赖

在**uniplore-service-commons**中引入依赖：

```kotlin
implementation("cn.uniplore:uniplore-starter-datamask:${latestVersion}")
```

## 全局设置

全局脱敏开启或关闭设置如下：

```yaml
uniplore:
  datamask:
    enabled: true # 如果想全局关闭脱敏，设置为false即可
```

如果设置关闭，那么全局注解脱敏都无法生效，切记！

## 使用示例

只需要给实体对象想脱敏注解即可实现数据脱敏，示例代码如下：

```java
import cn.uniplore.core.datamask.annotation.FieldMask;
import cn.uniplore.core.datamaskbase.enums.MaskRuleType;
import lombok.Data;

@Data
public class DataMaskTestVO {
    @FieldMask
    private Long id;
    @FieldMask(rule = MaskRuleType.USERNAME_CHN)
    private String name;
    @FieldMask(rule = MaskRuleType.EMAIL)
    private String email;
    @FieldMask(rule = MaskRuleType.MOBILE_PHONE_NUMBER_CHN_SIMPLE)
    private String phone;
    @FieldMask(rule = MaskRuleType.ID_CHN_ALL, enableForceValid = false)
    private String idCard;
}
```

controller 示例代码：

```java

import cn.uniplore.app.oss.vo.DataMaskTestVO;
import cn.uniplore.core.common.web.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/datamask")
public class DataMaskTestController {

    @GetMapping(value = "/test")
    public Result<DataMaskTestVO> test() {
        DataMaskTestVO res = new DataMaskTestVO();
        res.setId(446546565465664650L);
        res.setName("admin");
        res.setEmail("972516154@qq.com");
        res.setPhone("18786086352");
        res.setIdCard("522631199010123762");

        return Result.success(res);
    }
}

```

脱敏结果如下：

```json
{
  "code": 200,
  "msg": "操作成功",
  "time": 1678430469839,
  "data": {
    "id": "4***************50",
    "name": "*",
    "email": "97*****54@qq.com",
    "phone": "187****6352",
    "idCard": "52263**********762"
  }
}
```

## 注解全部配置项

```java
public @interface FieldMask {
    /**
     * 是否启用
     */
    boolean enable() default true;

    /**
     * 替换字符
     */
    String symbol() default RegexConstant.DEFAULT_SENSITIVE_SYMBOL;

    /**
     * 脱敏规则
     */
    MaskRuleType rule() default MaskRuleType.DEFAULT;

    /**
     * 是否强制校验数据是否合法，如果不合法则不脱敏
     */
    boolean enableForceValid() default false;
}
```

## 脱敏规则 MaskRuleType 有哪些？

MaskRuleType 内置了正则表达式，如果需要进行数据强校验再脱敏否则不脱敏时有用，其他场景下正则无作用。

| 规则                                | 说明                                                                                 |
| :---------------------------------- | :----------------------------------------------------------------------------------- |
| DEFAULT                             | 默认                                                                                 |
| TRAIN_CHN                           | 中国火车车次                                                                         |
| MOBILE_IMEI                         | 手机机身码(IMEI)                                                                     |
| HOST_URL                            | 必须带端口号的网址(或 ip)                                                            |
| WEB_URL                             | 网址(URL)                                                                            |
| CREDIT_CODE                         | 统一社会信用代码                                                                     |
| CREDIT_CODE_SIMPLE                  | 统一社会信用代码(宽松匹配)(15 位/18 位/20 位数字/字母)                               |
| STOCK_CODE_A                        | 股票代码(A 股)                                                                       |
| EXAM_SCORE                          | 大于等于 0, 小于等于 150, 支持小数位出现 5, 如 145.5, 用于判断考卷分数               |
| GUID_UUID                           | GUID/UUID                                                                            |
| VIDEO_URL                           | 视频(video)链接地址（视频格式可按需增删）                                            |
| IMAGE_URL                           | 图片(image)链接地址（图片格式可按需增删）                                            |
| TIME_24_TYPE                        | 24 小时制时间（HH:mm:ss）                                                            |
| BASE_64                             | base64 格式                                                                          |
| CURRENCY                            | 数字/货币金额（支持负数、千分位分隔符）                                              |
| BANK_CARD_ID                        | 银行卡号                                                                             |
| USERNAME_CHN                        | 中文姓名                                                                             |
| USERNAME_EN                         | 英文姓名                                                                             |
| LICENSE_PLATE_NUMBER_CHN_NEW_ENERGY | 中国车牌号(新能源)                                                                   |
| LICENSE_PLATE_NUMBER_CHN            | 中国车牌号(非新能源)                                                                 |
| LICENSE_PLATE_NUMBER_CHN_ALL        | 车牌号(新能源+非新能源)                                                              |
| MOBILE_PHONE_NUMBER_CHN_STRICT      | 手机号(mobile phone)中国(严谨), 根据工信部 2019 年最新公布的手机号段                 |
| MOBILE_PHONE_NUMBER_CHN_SIMPLE      | 机号(mobile phone)中国(宽松), 只要是 13,14,15,16,17,18,19 开头即可                   |
| PROVINCE_CHN                        | 中国省                                                                               |
| EMAIL                               | 邮箱                                                                                 |
| LANDLINE_NUMBER_CHN                 | 座机(tel phone)电话(国内),如: 0341-86091234                                          |
| ID_CHN_15                           | 身份证号(1 代,15 位数字)                                                             |
| ID_CHN_18                           | 身份证号(2 代,18 位数字)                                                             |
| ID_CHN_ALL                          | 身份证号, 支持 1/2 代(15 位/18 位数字)                                               |
| PASSPORT_CHN                        | 护照（包含香港、澳门）                                                               |
| ACCOUNT_CODE                        | 帐号是否合法(字母开头，允许 5-16 字节，允许字母数字下划线组合                        |
| CHINESE                             | 中文/汉字                                                                            |
| DECIMALS                            | 小数(支持科学计数)                                                                   |
| NUMBER_TYPE                         | 只包含数字                                                                           |
| TENCENT_QQ                          | qq 号格式正确                                                                        |
| NUMBER_STRING                       | 数字和字母组成                                                                       |
| EN_LETTERS_ALL                      | 英文字母                                                                             |
| EN_LETTERS_LOWCASE                  | 小写英文字母组成                                                                     |
| EN_LETTERS_UPCASE                   | 大写英文字母组成                                                                     |
| PASSWORD                            | 密码强度校验，最少 6 位，包括至少 1 个大写字母，1 个小写字母，1 个数字，1 个特殊字符 |
| IP_V4                               | ip-v4[:端口]                                                                         |
| IP_V6                               | ip-v6[:端口]                                                                         |
| HEX_16_COLOR_CODE                   | 16 进制颜色                                                                          |
| TENCENT_WECHAT_CODE                 | 微信号(wx)，6 至 20 位，以字母开头，字母，数字，减号，下划线                         |
| POST_CODE_CHN                       | 邮政编码(中国)                                                                       |
| CHINISE_AND_NUMBER                  | 中文和数字                                                                           |
| NOT_CONTAINER_EN_LETTER             | 不能包含字母                                                                         |
| JAVA_PACKAGE                        | java 包名                                                                            |
| MAC_ADDRESS                         | mac 地址                                                                             |
| ID_CHN_HONGKONG                     | 香港身份证                                                                           |
| ID_CHN_MACAO                        | 澳门身份证                                                                           |
| ID_CHN_TAIWAN                       | 台湾身份证                                                                           |
| EMAIL_SUPPORT_CHINESE               | email(支持中文邮箱)                                                                  |
| DOMAIN                              | 域名(非网址, 不包含协议)                                                             |
| SOLDIER_NO                          | 军官/士兵证                                                                          |
| RESIDENCE_BOOKLET                   | 户口薄                                                                               |
| ADDRESS                             | 地址                                                                                 |
