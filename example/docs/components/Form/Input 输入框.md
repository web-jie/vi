<script>
export default {
  data() {
    return{
      input: ''
    }
  },
  methods: {
    
  },
}
</script>

# input输入框

### 基础用法

::: demo
``` html
<vi-input placeholder="请输入内容" v-model="input" :max="10" clearable></vi-input>
<script>
export default {
  data() {
    return{
      input: '',
    }
  }
}
</script>
```
:::

### 密码框
::: demo
``` html
<vi-input placeholder="请输入内容" type="password"></vi-input>
```
:::

### 输入框状态
::: demo
``` html
禁用： <vi-input placeholder="请输入内容" disabled></vi-input>
只读： <vi-input placeholder="请输入内容" readonly>
```
:::


## API
### Input Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|String / Number|绑定值|-|-|
|type|String|类型|text，textarea 和其他 原生 input 的 type 值|text|
|placeholder|String|输入框默认内容|-|-|
|name|String|原生属性, input的名称|-|-|
|disabled|Boolean|禁用|-|false|
|readonly|Boolean|只读|-|false|
|clearable|Boolean|是否可清空|-|false|
|maxlength|Number|原生属性，最大输入长度|-|-|
|max|Number / Date|原生属性，属性规定input的最大值|-|-|
|min|Number / Date|原生属性，属性规定input的最小值|-|-|

### Switch Events
|事件名称|说明|回调参数|
|-|-|-|
|change|switch 状态发生变化时的回调函数|新状态的值