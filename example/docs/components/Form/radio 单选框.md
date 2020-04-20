<script>
export default {
  data() {
    return{
     radio: '1',
     radio1: '1',
     radio2: '1'
    }
  },
  methods: {
    
  },
}
</script>

# radio 单选框
在一组备选项中进行单选

### 基本用法
::: demo
``` html
<vi-radio-group v-model="radio">
  <vi-radio label="选项1" value="1"></vi-radio>
  <vi-radio label="选项2" value="2"></vi-radio>
  <vi-radio label="选项3" value="3"></vi-radio>
</vi-radio-group>

<script>
export default {
  data() {
    return{
     radio: '1'
    }
  },
}
</script>
```
:::

### 禁用选项
::: demo
``` html
<vi-radio-group v-model="radio1">
  <vi-radio label="选项1" value="1" disabled></vi-radio>
  <vi-radio label="选项2" value="2" disabled></vi-radio>
  <vi-radio label="选项3" value="3"></vi-radio>
</vi-radio-group>

<script>
export default {
  data() {
    return{
     radio1: '1'
    }
  },
}
</script>
```
:::

### 全部禁用
::: demo
``` html
<vi-radio-group v-model="radio2" disabled>
  <vi-radio label="选项1" value="1"></vi-radio>
  <vi-radio label="选项2" value="2"></vi-radio>
  <vi-radio label="选项3" value="3"></vi-radio>
</vi-radio-group>

<script>
export default {
  data() {
    return{
     radio2: '1'
    }
  },
}
</script>
```
:::

## API
### RadioGroup Attributes

|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|Boolean / String / Number|绑定值|-|-|
|disabled|Boolean|是否禁用|-|fasle|


### Radio Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|radio标签文本, 若不设置则默认与 value 相同|-|-|
|value|Boolean / String / Number|选项的值|-|-|
|disabled|Boolean|是否禁用|-|fasle|
|block|Boolean|是否为块级radio|-|fasle|

### Radio Events
|事件名称|说明|回调参数|
|-|-|-|
|change|绑定值变化时触发的事件|选中的 Radio label 值|

### Radio slots
|name | 说明|
|-|-|
|-|标签内容|
