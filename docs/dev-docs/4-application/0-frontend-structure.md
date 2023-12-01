---
title: 前端项目结构说明
sidebar_position: 0
---

```bash
uniplore-data-studio-ui
├── build                                                   与编译相关的文件                                            
├── config                                                  配置文件
├── mock                                                    mack数据
├── nginx.conf                                              nginx配置文件
├── public                                                  public文件夹
├── src                                                     
│   ├── api                                                 网络请求接口定义文件夹
│   │   ├── content                                         OSS接口
│   │   ├── dataAssets                                      数据资产运营接口
│   │   ├── dataAssetsCenter                                数据资产中心接口
│   │   ├── dataExchange                                    数据同步接口
│   │   ├── dataModel                                       数据建模接口
│   │   ├── dataQuality                                     数据质量接口
│   │   ├── dataQuery                                       数据查询接口
│   │   ├── dataService                                     数据服务接口
│   │   ├── dataStandard                                    数据标准接口
│   │   ├── dataStudioSystem                                数据中台基础系统接口
│   │   ├── dataTag                                         数据标签接口
│   │   ├── datasource                                      数据源管理接口
│   │   ├── model                                           基础实体定义(非接口)
│   │   ├── operationMonitor                                任务中心接口
│   │   ├── sys                                             登录相关接口
│   │   └── system                                          系统管理接口，包含用户管理、角色管理、菜单管理等
│   ├── assets                                              资源文件夹，主要存放图片文件
│   │   ├── icons                                           图标存放文件夹
│   │   ├── images                                          图片存放文件夹
│   │   └── svg                                             SVG存放文件夹
│   ├── components                                          同用组件文件夹
│   ├── design                                              覆写antd样式和全局css样式及css变量定义存放文件夹
│   ├── directives                                          自定义vue指令文件夹
│   ├── enums                                               枚举定义存放文件夹
│   ├── hooks                                               vue hook定义存放文件夹
│   ├── layouts                                             基本布局文件夹
│   │   ├── default                                         默认布局文件
│   │   │   ├── content                                     内容区域
│   │   │   ├── feature                                     特性
│   │   │   ├── footer                                      页脚
│   │   │   ├── header                                      头部
│   │   │   ├── menu                                        菜单样式设计
│   │   │   ├── setting                                     设置栏
│   │   │   ├── sider                                       侧边栏
│   │   │   ├── tabs                                        tab栏
│   │   │   └── trigger                                     触发器
│   │   ├── iframe                                          iframe容器
│   │   └── page                                            页面容器(content区域路由导航)
│   ├── locales                                             国际化文件夹
│   │   ├── lang                                            语言
│   │   │   ├── en                                          国际化-英文
│   │   │   ├── zh-CN                                       国际化-中文
│   ├── router                                              路由定义
│   ├── settings                                            页面样式配置设置
│   ├── store                                               存储
│   ├── utils                                               常用工具类
│   └── views                                               页面文件夹
│       ├── content                                         附件管理(暂时废弃)
│       ├── dashboard                                       仪表盘文件夹
│       │   ├── analysis                                    数据分析
│       │   ├── console                                     页面导航(暂时使用方案)
│       │   └── workbench                                   工作台
│       ├── dataAssets                                      数据资产
│       │   ├── assetAnalysis                               数据资产分析
│       │   ├── assetsManage                                数据资产管理
│       │   ├── catalogManage                               数据目录管理
│       │   ├── customAttribute                             自定义属性
│       │   ├── metadataSync                                元数据同步
│       │   ├── metamodelCatalogManage                      元数据目录管理
│       │   └── metamodelManage                             数据元模型管理
│       ├── dataAssetsCenter                                数据资产中心
│       │   ├── assetsCatalog                               数据资产目录
│       │   ├── assetsOverview                              数据资产概览
│       │   ├── assetsReport                                数据资产报告
│       │   ├── myApply                                     我申请的资产
│       │   ├── myApprove                                   我审批的资产
│       │   └── myAsset                                     我的资产
│       ├── dataExchange                                    数据同步
│       │   ├── datasource                                  数据源管理
│       │   ├── offlineData                                 离线同步
│       │   ├── realTimeData                                实时同步
│       │   └── scriptConfig                                脚本同步同步
│       ├── dataGroup                                       工作组
│       │   ├── dataSource                                  工作组数据源管理
│       │   └── userManage                                  工作组用户管理
│       ├── dataModel                                       数据建模
│       │   ├── modelDesign                                 模型设计
│       │   └── specification                               模型规范
│       ├── dataQuality                                     数据质量
│       │   ├── jobInstanceManage                           任务实例管理
│       │   ├── jobManage                                   任务管理
│       │   ├── monitorReport                               监控报告
│       │   ├── physicalTableMonitor                        物化表监控
│       │   ├── report                                      质量报告
│       │   └── ruleManage                                  质量规则
│       ├── dataQuery                                       数据查询
│       │   ├── dataView                                    数据预览
│       │   ├── freeExplore                                 自助查询
│       │   ├── queryLog                                    SQL执行日志
│       ├── dataService                                     数据服务
│       │   ├── apiApprove                                  API审批
│       │   ├── apiDevelopment                              API开发
│       │   ├── apiMarket                                   API市场
│       │   ├── apiShelvesApprove                           API上架审批
│       │   ├── categoryManage                              API目录管理
│       │   ├── domain                                      域名管理
│       │   ├── errorCode                                   错误编码
│       │   ├── exampleCode                                 示例编码
│       │   ├── externalAuthedApi                           外部授权API
│       │   ├── langType                                    语言类型
│       │   ├── myApi                                       我的API
│       │   ├── requestHeader                               请求头模板
│       │   ├── secret                                      密钥管理
│       │   ├── serviceScheduler                            服务报表
│       │   └── serviceStatement                            服务策略
│       ├── dataStandard                                    数据标准
│       │   ├── dataElement                                 数据源
│       │   ├── dictTableManage                             表字段数据字典
│       │   ├── industryTemplate                            行业模板
│       │   ├── standardMapping                             标准映射
│       │   └── standardStatistic                           数据标准统计
│       ├── dataTag                                         数据标签
│       │   ├── createDerivationTag                         创建衍生标签
│       │   ├── objectManage                                标签对象管理
│       │   ├── relationManage                              标签关系管理
│       │   ├── tagAPI                                      标签API
│       │   ├── tagManage                                   标签管理
│       │   ├── tagProcess                                  标签加速
│       │   └── tagStatistics                               标签统计
│       ├── gateway                                         网关管理(暂时无用)
│       │   ├── api                                         API设置(暂时无用)
│       │   ├── blacklist                                   黑名单(暂时无用)
│       │   └── route                                       网关路由(暂时无用)
│       ├── operationMonitor                                任务中心
│       │   ├── batchJobInstance                            批任务实例
│       │   ├── batchJobManage                              批任务管理
│       │   ├── globalOverviews                             全局概览
│       │   └── streamJobManage                             流任务管理
│       ├── portraitAnalysis                                画像分析
│       │   ├── analysisList                                分析列表
│       │   ├── groupAnalysis                               群体分析
│       │   ├── groupAnalysisContrast                       群体分析对比
│       │   ├── groupManage                                 群体管理
│       │   ├── maskRule                                    脱敏规则
│       │   ├── maskTagRecord                               脱敏记录
│       │   └── userPortrait                                用户画像
│       ├── sys                                             前端系统管理
│       │   ├── about                                       关于
│       │   ├── error-log                                   错误日志
│       │   ├── exception                                   异常信息
│       │   ├── login                                       登录页
│       │   └── redirect                                    前端重定向
│       └── system                                          系统管理
│           ├── application                                 应用管理
│           ├── bpmn                                        bpmn管理
│           ├── client                                      客户端管理
│           ├── depart                                      部门管理
│           ├── dict                                        数据字典管理
│           ├── log                                         操作日志管理
│           ├── menu                                        菜单管理
│           ├── ncClient                                    消息客户端管理
│           ├── ncMsg                                       消息管理
│           ├── ncType                                      消息类型管理
│           ├── process                                     部署流程
│           ├── role                                        角色管理
│           └── user                                        用户管理
├── tests                                                   前端单元测试
```