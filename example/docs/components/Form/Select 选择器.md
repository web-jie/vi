<script>
export default {
  data() {
    return{
      value1: '4',
      value2: '',
      value3: '',
      value4: '',
      list: [{
        value: '1',
        label: '鸡蛋'
      },{
        value: '2',
        label: '蔬菜'
      },{
        value: '3',
        label: '米饭'
      },{
        value: '4',
        label: '牛奶'
      },{
        value: '5',
        label: '面包'
      },{
        value: '6',
        label: '水果'
      },{
        value: '7',
        label: '甜点'
      },{
        value: '8',
        label: '大肉'
      }]
    }
  },
  watch: {
    value1(val) {
      console.log(val)
    }
  },
  created() {
    
  },
  mounted() {
  },
  methods: {
    change(val) {
      console.log(val)
    }
  }
}
</script>

# Select 选择器

### 基本用法
::: demo
``` html
<vi-select style="width: 220px" v-model="value1" ref="select" :isAppendParentNode="true">
  <vi-option v-for="(item, index) in list" :key="index" :label="item.label" :value="item.value"></vi-option>
</vi-select>

<script>
export default {
  data() {
    return{
      value1: '2',
      list: [{
        value: '1',
        label: '鸡蛋'
      },{
        value: '2',
        label: '蔬菜'
      },{
        value: '3',
        label: '米饭'
      },{
        value: '4',
        label: '牛奶'
      },{
        value: '5',
        label: '面包'
      },{
        value: '6',
        label: '水果'
      },{
        value: '7',
        label: '甜点'
      },{
        value: '8',
        label: '大肉'
      }]
    }
  }
}
</script>
```
:::

### 全部禁用

::: demo
``` html
<vi-select style="width: 220px" v-model="value2" disabled isAppendParentNode>
  <vi-option v-for="(item, index) in list" :key="index" :label="item.label" :value="item.value"></vi-option>
</vi-select>

<script>
export default {
  data() {
    return{
      value2: '',
      list: [{
        value: '1',
        label: '鸡蛋'
      },{
        value: '2',
        label: '蔬菜'
      },{
        value: '3',
        label: '米饭'
      },{
        value: '4',
        label: '牛奶'
      },{
        value: '5',
        label: '面包'
      },{
        value: '6',
        label: '水果'
      },{
        value: '7',
        label: '甜点'
      },{
        value: '8',
        label: '大肉'
      }]
    }
  }
}
</script>
```
:::

### 禁用某些选项

::: demo
``` html
<vi-select style="width: 220px" v-model="value3" isAppendParentNode>
  <vi-option v-for="(item, index) in list" :key="index" :label="item.label" :value="item.value" :disabled="index === 2"></vi-option>
</vi-select>

<script>
export default {
  data() {
    return{
      value3: '',
      list: [{
        value: '1',
        label: '鸡蛋'
      },{
        value: '2',
        label: '蔬菜'
      },{
        value: '3',
        label: '米饭'
      },{
        value: '4',
        label: '牛奶'
      },{
        value: '5',
        label: '面包'
      },{
        value: '6',
        label: '水果'
      },{
        value: '7',
        label: '甜点'
      },{
        value: '8',
        label: '大肉'
      }]
    }
  }
}
</script>
```
:::

### 清空选项

::: demo
``` html
<vi-select style="width: 220px" v-model="value4" clearable isAppendParentNode>
  <vi-option v-for="(item, index) in list" :key="index" :label="item.label" :value="item.value" ></vi-option>
</vi-select>

<script>
export default {
  data() {
    return{
      value4: '',
      list: [{
        value: '1',
        label: '鸡蛋'
      },{
        value: '2',
        label: '蔬菜'
      },{
        value: '3',
        label: '米饭'
      },{
        value: '4',
        label: '牛奶'
      }]
    }
  }
}
</script>
```
:::

## API
### Select Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|Boolean / String / Number|绑定值|-|-|
|placeholder|String|占位符|-|请选择|
|disabled|Boolean|是否禁用|-|false|
|size|String|输入框尺寸|large / small / mini|-|
|clearable|Boolean|是否可以清空选项|-|false|
|isAppendParentNode|Boolean|下拉框面板是否加在离Select组件最近的父级滚动元素上， 默认为加在body上|-|false|

### Select Events
|事件名称|说明|回调参数|
|-|-|-|
|change|选中值发生变化时触发|目前的选中值|

### Select Methods
|方法名|说明|参数|
|-|-|-|
|focus|使 select 获取焦点|-|
|blur|使 select 失去焦点|-|

### Select slots
|name | 说明|
|-|-|
|-|Option 组件列表|目前的选中值|


### options Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|选项的标签，若不设置则默认与 value 相同|-|-|
|value|Boolean / String / Number|选项的值|-|-|
|disabled|Boolean|禁用|-|false|

### options slots
|name | 说明|
|-|-|
|-|自定义模板内容|