---
title: 规则配置
sidebar_position: 3
---
## 监控规则列表

本节主要说明**监控规则列表**信息。

### 一、列表内容

页面显示已配置的**监控规则**信息，用户可通过搜索查询查找规则，页面如下图所示：
[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/rule-index.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/rule-index.png)

- 列表列说明：

  - **表：** 点击表名，将会展开右侧规则管理面板，显示规则的详细情况，并可对规则内容进行调整，可调整内容包括**配置调度属性，添加、修改、删除监控规则**。在面板右上方点击**立即执行**将会立即该监控规则，**执行结果**可在**任务管理页面**进行查看。
  - **规则名称：** 该监控规则名称。
  - **规则类型：** 区分**单表校验规则**和**多表校验**规则（目前仅支持单表校验规则）。
  - **数据源：** 显示当前规则表所在的数据源。
  - **数据源类型：** 显示当前规则表所在的数据源的数据库类型。
  - **执行周期：** 这个等同于触发类型，表示当前监控规则的触发是根据调度周期触发，还是「立即执行」手动触发的。
  - **最近 30 天告警数：** 显示最近 30 天内的告警次数。
  - **最近修改人：** 显示最近一次修改该规则的用户的邮箱。
  - **最近修改时间：** 显示最近一次修改时间。

- 详情页面如下图所示：  
   [ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/edit-rule.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/edit-rule.png)

## 新建监控规则

本节主要说明**新建监控规则流程**。

### 一、新建单表校验规则

本节主要说明新建单表校验规则流程，整个新建流程如下图所示。
[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/single-rule-flow.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/single-rule-flow.png)

新建单表校验规则入口在**数据质量-规则配置-新建监控规则**，点击之后选择单表校验规则可进入新建规则的流程，入口位置如下图所示：
[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule.png)

#### 一、选择监控对象

输入规则名称，在下拉列表中选择需要校验的数据源、表，选择表后，点击数据预览可预览表数据及字段，如下图所示:
[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule-param1.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule-param1.png)

#### 二、配置监控规则

点击添加规则，在下拉列表中选择规则的类型（可添加多个规则），选择规则后在出现的表单中填写具体参数，如下图所示：
[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule-param2.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule-param2.png)

监控规则有五种类型：完整性校验、准确性校验、规范性校验、唯一性校验、自定义 SQL。

- 规则分类：

  - **完整性校验：** 空值数、空值率、空串数、空串率。
  - **准确性校验：** 求和、求平均、负值比、零值比、正值比。
  - **规范性校验：** 数值-取值范围、数值-枚举范围、数值-枚举个数、格式-身份证号、格式-手机号、格式-邮箱、字符串-最大长度、字符串-最小长度。
  - **唯一性校验：** 重复数、重复率、非重复个数、非重复占比。
  - **自定义 SQL：** 用户自行编写校验逻辑。

- 规则拼接逻辑：
  - **规则类型：** 选择表或字段。
  - **统计函数：** 选择需要使用的统计函数。
  - **过滤语句：** 只需要统计表内一部分数据时，可通过过滤语句过滤掉一部分数据，等同于 SQL 中的 where 过滤条件。（需注意的是，过滤语句必须以 and 开头，不区分大小写）
  - **校验方法：** 可选择固定值、1 天或 7 天波动检测、月度波动检测、7 天平均值波动检测、月度平均值波动检测。
  - **期望值：** 选择比对符之后输入一个数值，如">10"。规则输出的统计结果如果"< =10"，即为校验未通过。
  - **强弱规则：** 选择规则强弱。强规则-校验未通过或者运行失败时，会影响关联任务的运行状态；弱规则-校验未通过或者运行失败时，不会影响关联任务的运行状态。

#### 三、配置调度属性

配置调度属性页面如下图所示：
[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule-param3.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/add-rule-param3.png)

- 调度周期
  - 可选择**小时、天、周、月**的调度周期，也可以选择**手动触发**。
  - 生效日期：设置规则生效时间段。
  - 规则拼接包：如果子规则较多，建议设置多个拼接包。系统会根据拼接包数量和规则强弱，将若干个子规则划分至不同的并行任务中运行，每个并行任务的运行状态不会影响其他任务。
- 告警配置：支持邮件、短信、钉钉、自定义告警通道。

## 单表校验规则执行说明

本节主要说明校验规则的**触发时机、运行原理、运行过程**等内容。

### 一、校验规则的触发

校验规则的触发包括：系统周期性的触发执行、用户手动触发执行两种，触发规则运行后可在**数据质量-任务管理**中查看本次运行的结果。

### 二、校验规则的运行原理

数据质量进行数据校验的基本逻辑：是将用户的规则配置转换为一条或一组 SQL 代码，提交到各数据源运行并获取结果。因此数据质量不需要从外部数据库中同步原始数据，因此用户在配置调度周期时，需根据数据库的负载合理配置执行时间。

### 三、校验规则的状态转换

[ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/rule-status.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/rule-status.png)

如上图所示，校验规则的运行过程将会经过多个状态的转换。 当发生运行失败时，系统会打印失败日志。失败可能是由于数据源无法连接、表名不存在、字段不存在等情况导致的。 当发生校验未通过时，系统会告知未通过的原因。未通过的原因一般是规则统计结果和期望值不匹配。

## 单表校验规则原理说明

本节主要说明**统计函数**和**校验方法**的详细计算逻辑。

一条校验规则由五部分组成，前三部分（统计目标、统计函数、过滤语句）是为了得到一个**唯一的统计值**，后两部分（校验方法、期望值配置）是为了将这个唯一的统计值与质量要求进行比较。

### 一、统计函数

<table>
    <tr>
        <th width="160">统计函数</th>
        <th width="140">函数类型</th>
        <th width="100">函数层级</th>
        <th width="100">适合用字段类型</th>
        <th width="80">是否百分比</th>
        <th width="100">是否支持多字段</th>
        <th width="400">函数说明</th>
    </tr>
    <tr>
        <td>空值数</td>
        <td>完整性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>选中字段为NULL的个数相加</td>
    </tr>
    <tr>
        <td>表行数</td>
        <td>完整性校验</td>
        <td>表级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>表总行数</td>
    </tr>
    <tr>
        <td>求和</td>
        <td>准确性校验</td>
        <td>字段级</td>
        <td>数值类型</td>
        <td>否</td>
        <td>否</td>
        <td>选中字段数值相加</td>
    </tr>
    <tr>
        <td>空值率</td>
        <td>完整性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>是</td>
        <td>否</td>
        <td>选中字段为NULL的个数相加/整表或分区的总记录数</td>
    </tr>
    <tr>
        <td>求平均</td>
        <td>准确性校验</td>
        <td>字段级</td>
        <td>数值类型</td>
        <td>否</td>
        <td>否</td>
        <td>选中字段数值相加/总行数</td>
    </tr>
    <tr>
        <td>重复数</td>
        <td>唯一性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>字段的值有2条记录以上是一样的，则记为1次，最后对总次数相加</td>
    </tr>
    <tr>
        <td>重复率</td>
        <td>唯一性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>是</td>
        <td>否</td>
        <td>重复值个数/总行数</td>
    </tr>
    <tr>
        <td>唯一数</td>
        <td>唯一性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>字段的值未重复，则记为1次，最后对总次数相加</td>
    </tr>
    <tr>
        <td>唯一率</td>
        <td>唯一性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>是</td>
        <td>否</td>
        <td>唯一数值个数/总行数</td>
    </tr>
    <tr>
        <td>取值范围</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>数值类型</td>
        <td>否</td>
        <td>否</td>
        <td>字段的值在给定的数值范围区间</td>
    </tr>
    <tr>
        <td>格式-邮箱(固定值)</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>给定邮箱，值相等的个数相加</td>
    </tr>
    <tr>
        <td>格式-身份证号(固定值)</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>符合格式身份证号个数相加</td>
    </tr>
    <tr>
        <td>格式-手机号(固定值)</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>否</td>
        <td>否</td>
        <td>符合格式手机号个数相加</td>
    </tr>
    <tr>
        <td>格式-邮箱(占比)</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>是</td>
        <td>否</td>
        <td>符合格式邮箱个数/总行数</td>
    </tr>
    <tr>
        <td>格式-身份证号(占比)</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>是</td>
        <td>否</td>
        <td>符合格式身份证号个数/总行数</td>
    </tr>
    <tr>
        <td>格式-手机号(占比)</td>
        <td>规范性校验</td>
        <td>字段级</td>
        <td>ALL</td>
        <td>是</td>
        <td>否</td>
        <td>符合格式手机号个数/总行数</td>
    </tr>
</table>

### 二、校验方法

- **固定值**

  - 根据校验规则中的阈值配置，计算 **s opt except**，返回布尔值。如果为 **True**，表示校验通过，如果为 **False** 表示校验未通过。
    - **s** 表示经过统计函数计算的数据统计结果。
    - **opt** 表示用户在期望值配置中选择的比较符，支持>,>=,<,>=,=,!=。
    - **except** 表示用户输入的期望值。
  - 举例： 配置项为：id 字段，空值数。 校验方法：固定值。 期望值配置：>=12 系统会先统计 id 字段的空值数有多少，假设为 s=10，再判断 s、opt、except 的关系，10<12，返回 false，得出校验未通过的结论。

- **一天波动**

  - 图例：  
    [ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function1.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function1.png)
  - 说明： 取出 1 天前的该规则下的历史数据 pre，没有则算 0；如果 pre=0，那么结果等于 0，否则未 (s-pre) / abs(pre) ，s 为表内数据统计结果。

- **七天波动**

  - 图例：  
    [ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function2.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function2.png)
  - 说明：取出 7 天前的该规则下的历史数据 pre，没有算 0；如果 pre=0，那么结果等于 0，否则 (s-pre) / abs(pre) ，s 为表内数据统计结果。

- **月度波动**

  - 图例：  
    [ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function3.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function3.png)
  - 说明：取出 ${bizdate}-1 月 的该规则下的历史数据 pre，没有算 0，如果这个月没有这么一天，也算 0；如果 pre=0，那么结果等于 0，否则 (s-pre) / abs(pre) ，s 为表内数据统计结果。

- **7 天平均值波动**
  - 图例：  
    [ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function4.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function4.png)
  - 说明：取出前 7 天的该规则下的历史数据，如果没有 7 天，有多少天算多少天，没有算 0 天。 计算出这些历史数据的平均值 avg，0 天算 0；如果 avg=0，那么结果等于 0，否则 (s-avg) / abs(avg) ，s 为表内数据统计结果。
- **月度平均值波动**
  - 图例：  
    [ ![](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function5.png) ](https://uniplore-docs.oss-cn-chengdu.aliyuncs.com/datastudio/data-vaild/monitor-rule/check-function5.png)
  - 说明：取出（${bizdate}-1 月）的该规则下的历史数据，有多少天算多少天，没有算 0 天。 计算出这些历史数据的平均值 avg，0 天算 0；如果 avg=0，那么结果等于 0，否则 (s-avg) / abs(avg) ，s 为表内数据统计结果。
