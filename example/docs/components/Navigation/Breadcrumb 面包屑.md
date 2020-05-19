# Breadcrumb 面包屑

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

### 基本用法

::: demo
``` html
<vi-breadcrumb>
  <vi-breadcrumb-item to="/">首页</vi-breadcrumb-item>
  <vi-breadcrumb-item>下单管理</vi-breadcrumb-item>
  <vi-breadcrumb-item>下单详情</vi-breadcrumb-item>
</vi-breadcrumb>
```
:::

### 图标分隔符

::: demo
``` html
<vi-breadcrumb separator-class="arrow-right">
  <vi-breadcrumb-item to="/">首页</vi-breadcrumb-item>
  <vi-breadcrumb-item>下单管理</vi-breadcrumb-item>
  <vi-breadcrumb-item>下单详情</vi-breadcrumb-item>
</vi-breadcrumb>
```
:::

### 自定义图标分隔符

::: demo
``` html
<vi-breadcrumb custom-separator-class="<b class='vi-demo-breadcrumb-separator'>=></b>">
  <vi-breadcrumb-item to="/">首页</vi-breadcrumb-item>
  <vi-breadcrumb-item>下单管理</vi-breadcrumb-item>
  <vi-breadcrumb-item>下单详情</vi-breadcrumb-item>
</vi-breadcrumb>
```
:::


## API

### Breadcrumb Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
| separator | String | 分隔符 | - | / |
| separator-class | String | 图标分隔符 class | Vi-element-vue 中可用的图标 | - |
| custom-separator-class | ElementString | 自定义图标分隔符| - | - |

### BreadcrumbItem Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
| to | String/Object | 路由跳转对象，同 vue-router 的 to | - | - |
| replace | Boolean | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | - | false |

