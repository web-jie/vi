# Menu 菜单


## 组件概述


`<vi-menu></vi-menu>` : 菜单容器

`<vi-menu-item></vi-menu-item>` : 菜单组件

`<vi-sub-menu></vi-sub-menu>` : 子菜单组件

`<vi-menu-group></vi-menu-group>` : 菜单分组组件


## 代码示例

### 基本使用

设置 `v-model` 可以双向绑定激活的菜单

设置属性 `theme` 为 light、dark 可以选择主题


::: demo menu

``` html
<template>
  <div style="display: flex">
    <vi-menu value="2">
      <vi-menu-item name="1">
        <vi-icon name="display"></vi-icon>
        display
      </vi-menu-item>
      <vi-menu-item name="2">
        <vi-icon name="laptop"></vi-icon>
        laptop
      </vi-menu-item>
      <vi-menu-item name="3" disabled>
        <vi-icon name="mobile"></vi-icon>
        mobile
      </vi-menu-item>
      <vi-menu-item name="4">
        <vi-icon name="tablet"></vi-icon>
        tablet
      </vi-menu-item>
      <vi-menu-item name="5">
        <vi-icon name="tv"></vi-icon>
        tv
      </vi-menu-item>
    </vi-menu>
    <vi-menu value="2" theme="dark">
      <vi-menu-item name="1">
        <vi-icon name="display"></vi-icon>
        display
      </vi-menu-item>
      <vi-menu-item name="2">
        <vi-icon name="laptop"></vi-icon>
        laptop
      </vi-menu-item>
      <vi-menu-item name="3" disabled>
        <vi-icon name="mobile"></vi-icon>
        mobile
      </vi-menu-item>
      <vi-menu-item name="4">
        <vi-icon name="tablet"></vi-icon>
        tablet
      </vi-menu-item>
      <vi-menu-item name="5">
        <vi-icon name="tv"></vi-icon>
        tv
      </vi-menu-item>
    </vi-menu>
  </div>
</template>
```
:::

### 菜单分组

使用 `<vi-menu-group></vi-menu-group>` 组件进行分组


::: demo menu

``` html
<template>
  <vi-menu>
    <vi-menu-group title="device">
      <vi-menu-item name="1">
        <vi-icon name="laptop"></vi-icon>
        laptop
      </vi-menu-item>
      <vi-menu-item name="2" disabled>
        <vi-icon name="mobile"></vi-icon>
        mobile
      </vi-menu-item>
      <vi-menu-item name="3">
        <vi-icon name="tablet"></vi-icon>
        tablet
      </vi-menu-item>
    </vi-menu-group>
    <vi-menu-group title="system">
      <vi-menu-item name="4">
        <vi-icon name="android"></vi-icon>
        android
      </vi-menu-item>
      <vi-menu-item name="5">
        <vi-icon name="appleinc"></vi-icon>
        iOS
      </vi-menu-item>
      <vi-menu-item name="6">
        <vi-icon name="windows8"></vi-icon>
        windows
      </vi-menu-item>
    </vi-menu-group>
  </vi-menu>
</template>
```
:::

### 子菜单

使用 `<vi-sub-menu></vi-sub-menu>` 子菜单组件进行内嵌子菜单

设置属性 `openNames` 可以默认展开子菜单

设置属性 `accordion` 开启手风琴模式，每次至多展开一个子菜单

::: demo menu

``` html
<template>
  <div style="display: flex">
    <vi-menu>
      <vi-sub-menu name="device" title="device">
        <vi-menu-item name="1">
          <vi-icon name="laptop"></vi-icon>
          laptop
        </vi-menu-item>
        <vi-menu-item name="2" disabled>
          <vi-icon name="mobile"></vi-icon>
          mobile
        </vi-menu-item>
        <vi-menu-item name="3">
          <vi-icon name="tablet"></vi-icon>
          tablet
        </vi-menu-item>
      </vi-sub-menu>
      <vi-sub-menu name="system" title="system">
        <vi-menu-item name="4">
          <vi-icon name="android"></vi-icon>
          android
        </vi-menu-item>
        <vi-menu-item name="5">
          <vi-icon name="appleinc"></vi-icon>
          iOS
        </vi-menu-item>
        <vi-menu-item name="6">
          <vi-icon name="windows8"></vi-icon>
          windows
        </vi-menu-item>
      </vi-sub-menu>
    </vi-menu>
    <vi-menu :open-names="['device']">
      <vi-sub-menu name="device" title="device">
        <vi-menu-item name="1">
          <vi-icon name="laptop"></vi-icon>
          laptop
        </vi-menu-item>
        <vi-menu-item name="2" disabled>
          <vi-icon name="mobile"></vi-icon>
          mobile
        </vi-menu-item>
        <vi-menu-item name="3">
          <vi-icon name="tablet"></vi-icon>
          tablet
        </vi-menu-item>
      </vi-sub-menu>
      <vi-sub-menu name="system" title="system">
        <vi-menu-item name="4">
          <vi-icon name="android"></vi-icon>
          android
        </vi-menu-item>
        <vi-menu-item name="5">
          <vi-icon name="appleinc"></vi-icon>
          iOS
        </vi-menu-item>
        <vi-menu-item name="6">
          <vi-icon name="windows8"></vi-icon>
          windows
        </vi-menu-item>
      </vi-sub-menu>
    </vi-menu>
    <vi-menu :open-names="['device']" accordion>
      <vi-sub-menu name="device" title="device">
        <vi-menu-item name="1">
          <vi-icon name="laptop"></vi-icon>
          laptop
        </vi-menu-item>
        <vi-menu-item name="2" disabled>
          <vi-icon name="mobile"></vi-icon>
          mobile
        </vi-menu-item>
        <vi-menu-item name="3">
          <vi-icon name="tablet"></vi-icon>
          tablet
        </vi-menu-item>
      </vi-sub-menu>
      <vi-sub-menu name="system" title="system">
        <vi-menu-item name="4">
          <vi-icon name="android"></vi-icon>
          android
        </vi-menu-item>
        <vi-menu-item name="5">
          <vi-icon name="appleinc"></vi-icon>
          iOS
        </vi-menu-item>
        <vi-menu-item name="6">
          <vi-icon name="windows8"></vi-icon>
          windows
        </vi-menu-item>
      </vi-sub-menu>
    </vi-menu>
  </div>
</template>
```
:::

## API

#### menu props

|属性|说明|类型|默认值|
|-|-|-|-|
|value|激活的菜单，可使用 v-model 双向绑定|Number\|String|-|
|theme|主题，可选值为 `light`、`dark`|String|light|
|open-names|展开的子菜单 name 集合|Array|\[\]|

#### menu events

|事件名|说明|参数|
|-|-|-|
|change|切换菜单时触发|name|

#### menu-item props

|属性|说明|类型|默认值|
|-|-|-|-|
|name|菜单项的唯一标识，必填|String\|Number|-|
|to|跳转的链接，支持 `vue-router` 对象|String\|Object|-|
|replace|路由跳转时，开启 replace 将不会向 history 添加新记录|Boolean|false|
|target|a 链接的 target 属性|String|_self|
|disabled|是否禁用|Boolean|false|

#### sub-menu props

|属性|说明|类型|默认值|
|-|-|-|-|
|name|子菜单项的唯一标识，必填|String\|Number|-|
|title|子菜单标题|String|-|
|disabled|是否禁用|Boolean|false|

#### sub-menu slot

|名称|说明|
|-|-|
|无|子菜单项|
|title|子菜单标题|

#### menu-item-group props

|属性|说明|类型|默认值|
|-|-|-|-|
|title|分组标题|String|-|

#### menu-item-group slot

|名称|说明|
|-|-|
|无|菜单项|
|title|分组标题|
