<script>
export default {
  data() {
    return {
      isAdd: false,
      content: '',
      list: [{
        text: '标签1'
      }, {
        text: '标签2'
      }]
    }
  },
  methods: {
    insideAddBefore(value, done) {
      if (!value) {
        this.$message.info('输入不能为空')
      } else {
        done()
      }
    },
    show() {
      this.isAdd = true
      this.content = ""
      this.$nextTick(_ => {
        this.$refs.input.focus()
      })
    },
    blur() {
      this.list.push({
        text: this.content
      })
      this.isAdd = false
    }
  }
}
</script>

# Tag 标签

### 基本用法

::: demo
``` html
<vi-tag>标签</vi-tag>
<vi-tag type="success">成功</vi-tag>
<vi-tag type="info">提示</vi-tag>
<vi-tag type="warning">警告</vi-tag>
<vi-tag type="danger">错误</vi-tag>

```
:::

### 自定义背景色

::: demo
``` html
<vi-tag color="red">标签</vi-tag>
<vi-tag type="success" color="blue">成功</vi-tag>
<vi-tag type="info" color="green">提示</vi-tag>
```
:::

### 可移除
::: demo
``` html
<vi-tag clearable>标签</vi-tag>
<vi-tag type="success" clearable>成功</vi-tag>
<vi-tag type="info" clearable>提示</vi-tag>
<vi-tag type="warning" clearable>警告</vi-tag>
<vi-tag type="danger" clearable>错误</vi-tag>
```
:::

### 动态添加
提供两种动态添加方式， 一种在外界自定义添加， 一种在组件内部自添加

::: demo
``` html
<p>像 Tag 传入insideAdd 属性， 则可实现组件内部动态添加标签</p>
<div style="margin-top: 10px;">
  <vi-tag clearable insideAdd size="mini">增加</vi-tag>

  <vi-tag 
  clearable 
  insideAdd 
  :insideAddBefore="insideAddBefore" 
  style="margin-top: 15px;">增加之前先走钩子函数</vi-tag>
</div>

<p style="margin-top: 35px;">可以自己手动添加标签</p>
<div style="margin-top: 10px;">
  <vi-tag clearable v-for="(item, index) in list" :key="index">{{item.text}}</vi-tag>
  <vi-input v-model="content" v-if="isAdd" @blur="blur" ref="input"></vi-input>
  <vi-button v-else @click="show">添加</vi-button>
</div>

<script>
export default {
  data() {
    return {
      isAdd: false,
      content: '',
      list: [{
        text: '标签1'
      }, {
        text: '标签2'
      }]
    }
  },
  methods: {
    insideAddBefore(value, done) {
      if (!value) {
        this.$message.info('输入不能为空')
      } else {
        done()
      }
    },
    show() {
      this.isAdd = true
      this.content = ""
      this.$nextTick(_ => {
        this.$refs.input.focus()
      })
    },
    blur() {
      this.list.push({
        text: this.content
      })
      this.isAdd = false
    }
  }
}
</script>
```
:::

### 尺寸
::: demo
``` html
<vi-tag>默认标签</vi-tag>
<vi-tag size="large">大标签</vi-tag>
<vi-tag size="small">中等标签</vi-tag>
<vi-tag size="mini">小标签</vi-tag>
```
:::

## API

### Tag Attributes

|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|type|String|类型|success / info / warning / danger |-|
|color|String|背景色|-|-|
|clearable|Boolean|是否可移除|-|fasle|
|insideAdd|Boolean|Tag内部是否可自己动态添加标签|-|fasle|
|insideAddBefore|Function|内部动态添加标签的时候， 输入框失去焦点之前的钩子函数|-|-|
|size|String|尺寸|large / small / mini|-|


### Tag Events
|事件名称|说明|回调参数|
|-|-|-|
|click|点击 Tag 时触发的事件|-|
|close|关闭 Tag 时触发的事件|-|
