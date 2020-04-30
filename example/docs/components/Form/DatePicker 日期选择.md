
<script>
  export default {
    data() {
      return {
        time1: '',
        time2: '',
        time3: '',

        options1: {
          shortList: [{
            label: '今天',
            onClick: () => new Date()
          }, {
            label: '明天',
            onClick: () => new Date().getTime() + 24 * 60 * 60 * 1000
          }, {
            label: '七天前',
            onClick: () => new Date().getTime() - 3600 * 1000 * 24 * 7
          }]
        }
      }
    },
  }
</script>

# DatePicker 日期选择

### 基本用法
::: demo
``` html

<div class="vi-docs-date">
  <div class="text-center">
    <p class="p">默认</p>
    <vi-date-picker v-model="time1"></vi-date-picker>
  </div>
  <div class="text-center">
    <p class="p">带快捷选项</p>
    <vi-date-picker v-model="time2" :short-options="options1"></vi-date-picker>
  </div>
</div>
<script>
  export default {
    data() {
      return {
        time1: '',
        time2: '',

        options1: {
          shortList: [{
            label: '今天',
            onClick: () => new Date()
          }, {
            label: '明天',
            onClick: (item) => new Date().getTime() + 24 * 60 * 60 * 1000
          }, {
            label: '最近一周'
          }]
        }
      }
    },
  }
</script>

```
:::

### 设置type显示其他日期
::: demo
``` html
<vi-date-picker v-model="time3"></vi-date-picker>

<script>
  export default {
    data() {
      return {
        time3: ''
      }
    },
  }
</script>

```
:::

## API
### DatePicker Attributes

|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|String / Date|绑定值|-|-|
|type| String |显示类型|year / month / date  |-|
|disabled|Boolean|是否禁用|-|fasle|
|size|String|尺寸|large / small / mini|-|
|format|String|可选，绑定值的格式。不指定则绑定值为 Date 对象|-|-|
|value-format|String|显示在输入框中的格式|-|yyyy-MM-dd|
|clearable|Boolean|	是否可清空|-|true|
|short-options|Object|	当前时间日期选择器特有的选项参考下表|-|{}|

### shortOptions Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|shortList|Array|快捷选项列表|-|-|

### shortList Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|标题文本|-|-|
|onClick|Function|选中后的回调函数, 参数为当前选中的值|-|-|