
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      onSuccess () {
        this.$message('这是一段成功内容')
      },
      onInfo () {
        this.$message({
          content: '这是一段提示内容',
          type: 'info',
        })
      },
      onWarning () {
        this.$message({
          content: '这是一段警告内容',
          type: 'warning',
        })
      },
      onDanger () {
        this.$message({
          content: '这是一段错误内容',
          type: 'danger'
        })
      },

      onSuccess1 () {
        this.$message({
          content: '这是一段成功内容',
          isClose: true
        })
      },
      onInfo1 () {
        this.$message({
          content: '这是一段提示内容',
          type: 'info',
          isClose: true
        })
      },

      onSuccess2 () {
        this.$message({
          content: '打印出我关闭了',
          isClose: true,
          beforeClose: (options) => {
            console.log(options, '我关闭了')
          }
        })
      },

      onDanger2 () {
        const m = this.$message({
          content: '手动关闭',
          duration: 0,
        })

        setTimeout(() => {
          m.close()
        }, 3000)
      },

      onTypem (type) {
        this.$message[type](`${type}框弹出`)
      },
    }
  }
</script>

# Messaage 消息提示

### 基本用法

::: demo
``` html
<vi-button type="success" @click="onSuccess">成功</vi-button>
<vi-button type="info" @click="onInfo">提示</vi-button>
<vi-button type="warning" @click="onWarning">警告</vi-button>
<vi-button type="danger" @click="onDanger">错误</vi-button>
<script>
  export default {
    data () {
      return { }
    },
    methods: {
      onSuccess () {
        this.$message('这是一段成功内容')
      },
      onInfo () {
        this.$message({
          content: '这是一段提示内容',
          type: 'info',
        })
      },
      onWarning () {
        this.$message({
          content: '这是一段警告内容',
          type: 'warning',
        })
      },
      onDanger () {
        this.$message({
          content: '这是一段错误内容',
          type: 'danger'
        })
      }
    }
  }
</script>
```
:::

### 可关闭
<p style="font-size: 14px">右侧显示关闭按钮</p>


::: demo
``` html
<vi-button type="success" @click="onSuccess1">成功</vi-button>
<vi-button type="info" @click="onInfo1">提示</vi-button>
<script>
  export default {
    data () {
      return { }
    },
    methods: {
      onSuccess1 () {
        this.$message({
          content: '这是一段成功内容',
          isClose: true
        })
      },
      onInfo1 () {
        this.$message({
          content: '这是一段提示内容',
          type: 'info',
          isClose: true
        })
      }
    }
  }
</script>
```
:::

### 关闭时触发回调
::: demo
``` html
<vi-button type="success" @click="onSuccess2">关闭时打印内容</vi-button>
<script>
  export default {
    data () {
      return { }
    },
    methods: {
     onSuccess2 () {
        this.$message({
          content: '打印出我关闭了',
          isClose: true,
          beforeClose: (options) => {
            console.log(options, '我关闭了')
          }
        })
      },
    }
  }
</script>
```
:::

### 手动关闭 
::: demo
``` html
<vi-button type="danger" @click="onDanger2">延时三秒手动关闭</vi-button>
<script>
  export default {
    data () {
      return { }
    },
    methods: {
     onDanger2 () {
        const m = this.$message({
          content: '手动关闭',
          duration: 0,
        })

        setTimeout(() => {
          m.close()
        }, 3000)
      },
    }
  }
</script>
```
:::

::: tip
调用 ```this.$message``` 会返回当前message实例， 可以手动去关闭它
:::

### 具体的type方法

::: demo
``` html
<vi-button type="success" @click="onTypem('success')">成功</vi-button>
<vi-button type="info" @click="onTypem('info')">提示</vi-button>
<vi-button type="warning" @click="onTypem('warning')">警告</vi-button>
<vi-button type="danger" @click="onTypem('danger')">错误</vi-button>

<script>
  export default {
    data () {
      return { }
    },
    methods: {
     onTypem (type) {
        this.$message[type](`${type}框弹出`) // this.$message.success() || info || warning || danger
      },
    }
  }
</script>
```
:::


## API
### Messaage Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|type|String|主题|success / warning / danger / info |success|
|content|String|消息文字|-|-|
|top|Number|Message 距离窗口顶部的偏移量|-|30|
|duration|Number|显示时长，设置为0不会自动关闭|-|false|
|is-close|Boolean|是否显示关闭按钮， 设置为true不会自动关闭|-|false|
|is-icon|Boolean|是否显示左侧图标|-|true|
|before-close|Function|关闭时的回调函数, 参数为被关闭的 message 实例|-|-|

### 方法
方法名|参数|说明|
|-|-|-|
|close| - |关闭当前的 Message|