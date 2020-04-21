<script>
export default {
  data() {
    return{
     radio: '1',
     radio1: '1',
     radio2: '1',
     radio3: '1',
     radio4: '1',
     radio5: '2',
     radio6: '3',
     radio7: '4',
     radio8: '2',
     radio9: '3'
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

### 单选框组
::: demo
``` html
<vi-radio-group v-model="radio3">
  <vi-radio-button label="按钮1" value="1"></vi-radio-button>
  <vi-radio-button label="按钮2" value="2"></vi-radio-button>
  <vi-radio-button value="3">按钮3</vi-radio-button>
  <vi-radio-button value="4">按钮4</vi-radio-button>
</vi-radio-group>

<script>
export default {
  data() {
    return{
     radio3: '1'
    }
  },
}
</script>
```
:::

### 尺寸
::: demo
``` html
<div>
  <vi-radio-group v-model="radio4">
    <vi-radio-button label="按钮1" value="1"></vi-radio-button>
    <vi-radio-button label="按钮2" value="2"></vi-radio-button>
    <vi-radio-button value="3">按钮3</vi-radio-button>
    <vi-radio-button value="4">按钮4</vi-radio-button>
  </vi-radio-group>
</div>

<div style="margin-top: 20px;">
  <vi-radio-group v-model="radio5" size="large">
    <vi-radio-button label="按钮1" value="1"></vi-radio-button>
    <vi-radio-button label="按钮2" value="2"></vi-radio-button>
    <vi-radio-button value="3">按钮3</vi-radio-button>
    <vi-radio-button value="4">按钮4</vi-radio-button>
  </vi-radio-group>
</div>

<div style="margin-top: 20px;">
  <vi-radio-group v-model="radio6" size="small">
    <vi-radio-button label="按钮1" value="1"></vi-radio-button>
    <vi-radio-button label="按钮2" value="2"></vi-radio-button>
    <vi-radio-button value="3">按钮3</vi-radio-button>
    <vi-radio-button value="4">按钮4</vi-radio-button>
  </vi-radio-group>
</div>

<div style="margin-top: 20px;">
  <vi-radio-group v-model="radio7" size="mini">
    <vi-radio-button label="按钮1" value="1"></vi-radio-button>
    <vi-radio-button label="按钮2" value="2"></vi-radio-button>
    <vi-radio-button value="3">按钮3</vi-radio-button>
    <vi-radio-button value="4">按钮4</vi-radio-button>
  </vi-radio-group>
</div>


<script>
export default {
  data() {
    return{
     radio4: '1',
     radio5: '2',
     radio6: '3',
     radio7: '4'
    }
  },
}
</script>
```
:::

### 禁用状态
::: demo
``` html
<vi-radio-group v-model="radio8" disabled>
  <vi-radio-button label="按钮1" value="1"></vi-radio-button>
  <vi-radio-button label="按钮2" value="2"></vi-radio-button>
  <vi-radio-button value="3">按钮3</vi-radio-button>
  <vi-radio-button value="4">按钮4</vi-radio-button>
</vi-radio-group>

<div>
  <vi-radio-group v-model="radio9">
    <vi-radio-button label="按钮1" value="1"></vi-radio-button>
    <vi-radio-button label="按钮2" value="2" disabled></vi-radio-button>
    <vi-radio-button value="3">按钮3</vi-radio-button>
    <vi-radio-button value="4" disabled>按钮4</vi-radio-button>
  </vi-radio-group>
</div>

<script>
export default {
  data() {
    return{
     radio8: '2',
     radio9: '3'
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
|size|String|单选框组尺寸，仅对按钮形式的 Radio 有效|large / small / mini|-|

### RadioGroup Events
|事件名称|说明|回调参数|
|-|-|-|
|change|绑定值变化时触发的事件|选中的 Radio value 值|


### Radio Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|radio标签文本, 若不设置则默认与 value 相同|-|-|
|value|Boolean / String / Number|选项的值|-|-|
|disabled|Boolean|是否禁用|-|fasle|
|block|Boolean|是否为块级radio|-|fasle|


### Radio slots
|name | 说明|
|-|-|
|-|标签内容|

### RadioButton Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|radio标签文本, 若不设置则默认与 value 相同|-|-|
|value|Boolean / String / Number|选项的值|-|-|
|disabled|Boolean|是否禁用|-|fasle|

### RadioButton slots
|name | 说明|
|-|-|
|-|标签内容|