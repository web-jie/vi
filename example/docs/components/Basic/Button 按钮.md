<script>
export default {
  data() {
    return{
      
    }
  },
  methods: {
   clickEvent () {
     console.log(111111)
   }
  }
}
</script>

# Button 按钮

### 基础用法
::: demo
``` html
<div>
  <vi-button @click="clickEvent">默认按钮</vi-button>
  <vi-button type="primary">主要按钮</vi-button>
  <vi-button type="success">成功按钮</vi-button>
  <vi-button type="info">信息按钮</vi-button>
  <vi-button type="warning">警告按钮</vi-button>
  <vi-button type="danger">危险按钮</vi-button>
</div>

<div>
  <vi-button plain>朴素按钮</vi-button>
  <vi-button type="primary" plain>主要按钮</vi-button>
  <vi-button type="success" plain>成功按钮</vi-button>
  <vi-button type="info" plain>信息按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="danger" plain>危险按钮</vi-button>
</div>

<div>
  <vi-button>尺寸</vi-button>
  <vi-button size="large" type="success" >成功按钮</vi-button>
  <vi-button size="small" type="info">信息按钮</vi-button>
  <vi-button size="mini" type="warning">警告按钮</vi-button>
</div>

<div>
  <vi-button radius>圆角按钮</vi-button>
  <vi-button type="primary" radius>主要按钮</vi-button>
  <vi-button type="success" radius>成功按钮</vi-button>
  <vi-button type="info" radius>信息按钮</vi-button>
  <vi-button type="warning" radius>警告按钮</vi-button>
  <vi-button type="danger" radius>危险按钮</vi-button>
</div>

<div>
  <vi-button circle>圆</vi-button>
  <vi-button circle size="large" type="primary">圆</vi-button>
  <vi-button circle size="small" type="success">圆</vi-button>
  <vi-button circle size="mini" type="danger">圆</vi-button>
</div>
```
:::

### 禁用状态
::: demo
``` html
<div>
  <vi-button disabled @click="clickEvent">默认按钮</vi-button>
  <vi-button type="primary" disabled>主要按钮</vi-button>
  <vi-button type="success" disabled>成功按钮</vi-button>
  <vi-button type="info" disabled>信息按钮</vi-button>
  <vi-button type="warning" disabled>警告按钮</vi-button>
  <vi-button type="danger" disabled>危险按钮</vi-button>
  <vi-button type="danger" disabled plain>危险按钮</vi-button>
</div>
```
:::

### 文字按钮
::: demo
``` html
<div>
  <vi-button type="text">文字按钮</vi-button>
  <vi-button type="text" disabled >禁用状态</vi-button>
</div>
```
:::

### 加载状态
::: demo
``` html
<div>
  <vi-button type="primary" loading @click="clickEvent">加载中</vi-button>
  <vi-button type="primary" loading loading-text="正在加载"></vi-button>
  <vi-button type="success" loading loading-text="正在加载" loading-position="right"></vi-button>
  <vi-button type="primary" loading circle>加载中</vi-button>
  <vi-button type="text" loading circle>加载中</vi-button>
</div>
```
:::

### 其他用法
::: demo
``` html
<div>
  <vi-button content-color="#00CED1">按钮</vi-button>
</div>
```
:::


## API
### Button Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|type|String|类型|default / primary / success / warning / danger / info / text|default|
|size|String|尺寸|large / small / mini|-|
|radius|Boolean|是否为圆角按钮|-|false|
|plain|Boolean|是否镂空|-|false|
|circle|Boolean|是否为圆形按钮|-|false|
|disabled|Boolean|是否禁用状态|-|false|
|loading|Boolean|是否加载状态|-|false|
|loading-text|String|加载文字，在 circle 和 type = text 下无效|-|-|
|loading-position|String|加载图标位置|left / right|left|
|content-color|String|按钮文字颜色|-|-|
