# Layout 布局


## 组件概述


`<vi-container></vi-container>` : 布局容器组件

`<vi-main></vi-main>` : 内容容器组件

`<vi-header></vi-header>` : 顶部组件

`<vi-footer></vi-footer>` : 底部组件

`<vi-aside></vi-aside>` : 侧边栏组件

`<vi-article></vi-article>` : 内容组件

`<vi-nav></vi-nav>` : 导航组件

两个容器组件 `<vi-container></vi-container><vi-main></vi-main>` , 其余都是嵌套的子组件。

容器组件采用flex布局，默认主轴为 `flex-direction：column` 垂直方向。

当容器内部有侧边栏组件`<vi-aside></vi-aside>`, 那容器组件主轴会变成 `flex-direction：row` 水平方向。

可为容器指定direction属性，强制设置容器组件的主轴方向


## 代码示例


### 经典布局


典型的页面布局


::: demo layout1

``` html
<template>
  <div>
    <vi-container>
      <vi-header>vi-header</vi-header>
      <vi-container>vi-container</vi-container>
      <vi-footer>vi-footer</vi-footer>
    </vi-container>

    <vi-container>
      <vi-header>vi-header</vi-header>
      <vi-container>
        <vi-aside>vi-aside</vi-aside>
        <vi-main>vi-main</vi-main>
      </vi-container>
      <vi-footer>vi-footer</vi-footer>
    </vi-container>

    <vi-container>
      <vi-aside>vi-aside</vi-aside>
      <vi-container>
        <vi-header>vi-header</vi-header>
        <vi-main>vi-main</vi-main>
        <vi-footer>vi-footer</vi-footer>
      </vi-container>
    </vi-container>
  </div>
</template>
```
:::

## API

#### aside props

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|Number\|String|-|
|height|高度|Number\|String|-|

#### container/main props

|属性|说明|类型|默认值|
|-|-|-|-|
|width|宽度|Number\|String|-|
|height|高度|Number\|String|-|
|direction|主轴方向,可选垂直vertical,水平horizontal,默认自动|String|-|
