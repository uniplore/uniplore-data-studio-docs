---
title: WEB前端UI规范
sidebar_position: 1
---

## 边距
边距分为内边距和外边距，要求是4的倍数，目前比较推荐为16px，如果面板比较小，那么可以考虑为12px。

## 边框
边框要求限制为1px，除非有例外情况需要调整。

## 圆角
圆角要求是2的倍数，目前定是4px。

## 颜色

| 中文名称 | 英文名称 | 颜色值 |
|:---|:---|:---|
| 主题色 | primary-color  | #409EFF  |
| 成功色 | success-color | #67C23A |
| 警告色 | warning-color | #E6A23C |
| 危险色 | danger-color | #F56C6C |
| 基本色 | info-color | #909399 |


## 文字颜色

| 中文名称 | 英文名称 | 颜色值 |
|:---|:---|:---|
| 主要文字色  | main-font-color | #303133  |
| 常规文字色 | normal-font-color | #606266  |
| 次要文字色 | sub-font-color | #909399  |
| 占位文字色 | placeholder-font-color | #C0C4CC  |

## 边框色

| 中文名称 | 英文名称 | 颜色值 |
|:--- |:---|:---|
| 一级边框  | first-border-color | #DCDFE6  |
| 二级边框 | second-border-color | #E4E7ED  |
| 三级边框 | third-border-color | #EBEEF5  |
| 四级边框 | forth-border-color | #F2F6FC  |


## 字体大小

要求是2的倍数，具体情况如下：

| 名称 | 大小(px) | 说明 |
|:---|:---:|---|
| H1标题字 | 2em | 标题标签字体大小直接默认即可，不需要指定 |
| H2副标题字 | 1.5em | 标题标签字体大小直接默认即可，不需要指定 |
| 常规标题 | 18px |  |
| 副标题 | 16px |  |
| 正文 | 14px | 浏览器默认字体大小 |
| 修饰性文字 | 14px | 提示类型的文字大小 |

## 表单要求使用容器限制说明

1. 小表单使用弹窗，也就是5个以内，且不含textArea；
2. 中型表单使用抽屉；
3. 大表单新建页面；

## 页面内容填充说明
除了极端情况可以出现页面空白区域较大，正常情况下要尽量少在页面中留空白空间。例如表单页面不留多余空白空间，详情页亦是如此。

## 抽屉
抽屉宽度分为3个尺寸，根据实际显示需求选用，若最大尺寸抽屉显示效果仍然不佳，可考虑选用新页面显示
- Small 600px
- Middle 750px
- Max 900px

## 弹窗
弹窗宽度分为3个尺寸，根据实际显示需求选用，若最大尺寸弹窗显示效果仍然不佳，可考虑选用新页面或抽屉显示
- Small 600px
- Middle 750px
- Max 900px

## 表单内部要求
1. 除了极少数情况下不需要有placeholder提示文字，如整个表单只有一个textarea，剩下的都需要有；
2. 输入框提示一定是剩下还可输入多少，不是已经输入多少；
3. textarea如果是128字以内，需要保证能全部显示，至于是显示多少行，这个无法确定，跟页面布局宽度有关。如果是大于128个字，保证前128个字显示完整；