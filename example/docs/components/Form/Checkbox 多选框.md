
<script>
export default {
  data() {
    return{
     checkbox1: ['1', '2'],
     checkbox2: ['1', '2'],
     checkbox3: ['1', '2'],
     checkbox4: ['1', '2']
    }
  },
}
</script>

# Checkbox 多选框

### 基础用法
::: demo
``` html
<vi-checkbox-group v-model="checkbox1">
  <vi-checkbox value="1" label="香蕉"></vi-checkbox>
  <vi-checkbox value="2" label="苹果"></vi-checkbox>
  <vi-checkbox value="3" label="牛奶"></vi-checkbox>
</vi-checkbox-group>

<script>
export default {
  data() {
    return{
     checkbox1: ['1', '2']
    }
  },
}
</script>
```
:::

### 全部禁用
::: demo
``` html
<vi-checkbox-group v-model="checkbox2" disabled>
  <vi-checkbox value="1" label="香蕉"></vi-checkbox>
  <vi-checkbox value="2" label="苹果"></vi-checkbox>
  <vi-checkbox value="3" label="牛奶"></vi-checkbox>
</vi-checkbox-group>

<script>
export default {
  data() {
    return{
     checkbox2: ['1', '2']
    }
  },
}
</script>
```
:::

### 禁用某些选项
::: demo
``` html
<vi-checkbox-group v-model="checkbox3">
  <vi-checkbox value="1" label="香蕉"></vi-checkbox>
  <vi-checkbox value="2" label="苹果" disabled></vi-checkbox>
  <vi-checkbox value="3" label="牛奶"></vi-checkbox>
</vi-checkbox-group>

<script>
export default {
  data() {
    return{
     checkbox3: ['1', '2']
    }
  },
}
</script>
```
:::

### 设置indeterminate状态
对```vi-checkbox-group```设置indeterminate状态， 以达到全选的目的
::: demo
``` html
<vi-checkbox-group v-model="checkbox4" indeterminate >
  <vi-checkbox value="1" label="香蕉"></vi-checkbox>
  <vi-checkbox value="2" label="苹果"></vi-checkbox>
  <vi-checkbox value="3" label="牛奶"></vi-checkbox>
  <vi-checkbox value="4" label="米饭"></vi-checkbox>
</vi-checkbox-group>

<script>
export default {
  data() {
    return{
     checkbox4: ['1', '2']
    }
  },
}
</script>
```
:::

## API

### CheckboxGroup Attributes

|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|Array|绑定值|-|-|
|disabled|Boolean|是否禁用|-|fasle|
|indeterminate|Boolean|设置 indeterminate 状态，只负责样式控制， 一般用于全选|-|fasle|

### CheckboxGroup Events
|事件名称|说明|回调参数|
|-|-|-|
|change|绑定值变化时触发的事件|选中的 checkBox 值|

### Checkbox Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|checkbox标签文本, 若不设置则默认与 value 相同|-|-|
|value|Boolean / String / Number|选项的值|-|-|
|disabled|Boolean|是否禁用|-|fasle|
|block|Boolean|是否为块级checkbox|-|fasle|

### Checkbox slots
|name | 说明|
|-|-|
|-|标签内容|