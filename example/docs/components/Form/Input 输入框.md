<script>
export default {
  data() {
    return{
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: ''
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
<vi-input placeholder="请输入内容" v-model="input"></vi-input>
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

### 可清空

::: demo
``` html
<vi-input placeholder="请输入内容" v-model="input1"  clearable></vi-input>
<script>
export default {
  data() {
    return{
      input1: '',
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

### 文本域
::: demo
``` html
<vi-input placeholder="请输入内容" v-model="input2"  type="textarea" ></vi-input>
<script>
export default {
  data() {
    return{
      input2: '',
    }
  }
}
</script>
```
:::


### 输入框状态
::: demo
``` html
禁用： <vi-input placeholder="请输入内容" disabled></vi-input>
只读： <vi-input placeholder="请输入内容" readonly>
```
:::

### 尺寸
::: demo
``` html
<div class="demo-input-size">
  <vi-input placeholder="请输入内容"></vi-input>
  <vi-input placeholder="请输入内容" size="large"></vi-input>
  <vi-input placeholder="请输入内容" size="small"></vi-input>
  <vi-input placeholder="请输入内容" size="mini"></vi-input>
</div>
```
:::

### 显示字数
::: demo
``` html
<div>
  <vi-input placeholder="请输入内容" v-model="input3" show-word :maxlength="10" ></vi-input>
</div>
<div>
  <vi-input placeholder="请输入内容" v-model="input4" show-word :maxlength="30" type="textarea"></vi-input>
</div>
<script>
export default {
  data() {
    return{
      input3: '',
      input4: ''
    }
  }
}
</script>
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
|cols|Number|文本区域内可见的宽度, 在```type = textarea```有效|-|50|
|rows|Number|文本区域内可见的行数, 在```type = textarea```有效|-|3|
|area-resize|String|文本域是否可拖动改变宽高, 在```type = textarea```有效|allow / horizontal / vertical / none|vertical|
|autofocus|Boolean|原生属性，自动获取焦点|-|false|
|size|String|尺寸, 在 ```type !== textarea```时有效|large / small / mini|-|
|show-word|Boolean|显示字数|-|false|

### Input Events
|事件名称|说明|回调参数|
|-|-|-|
|input|在 Input 值改变时触发|(value: string / number)|
|focus|在 Input 获得焦点时触发|(event: Event)|
|blur|在 Input 值改变时触发|(event: Event)|
