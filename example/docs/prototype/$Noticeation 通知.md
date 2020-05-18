# Noticeation 通知

<script>
  export default {
    methods: {
      onShow1() {
        this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容'
        })
      },
      onShow2() {
        this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
          duration: 0,
          isClose: true
        })
      },
      onShow3() {
        this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
          isNewOn: true,
        })
      },
      onShow4(type) {
        this.$notice[type]({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
        })
      },
      onShow5(type) {
        const m = this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
          duration: 0
        })

        setTimeout(() => {
          m.close()
        }, 3000)
      }
    }
  }
</script>

### 基本用法
::: demo
``` html
<vi-button type="primary" @click="onShow1">会自动关闭</vi-button>
<vi-button type="primary" @click="onShow2">不会自动关闭</vi-button>

<script>
  export default {
    methods: {
      onShow1() {
        this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容'
        })
      },
      onShow2() {
        this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
          duration: 0,
          isClose: true
        })
      },
    }
  }
</script>
```
:::

### 设置isNewOn状态
通过设置isNewOn来使最新Noticeation永远在最上面
::: demo
``` html
<vi-button type="primary" @click="onShow3">弹出</vi-button>

<script>
  export default {
    methods: {
      onShow3() {
        this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
          isNewOn: true
        })
      }
    }
  }
</script>
```
:::

### 状态Noticeation
::: demo
``` html
<vi-button type="primary" @click="onShow4('alert')">alert</vi-button>
<vi-button type="success" @click="onShow4('success')">success</vi-button>
<vi-button type="info" @click="onShow4('info')">info</vi-button>
<vi-button type="warning" @click="onShow4('warning')">warning</vi-button>
<vi-button type="danger" @click="onShow4('danger')">danger</vi-button>

<script>
  export default {
    methods: {
      onShow4(type) {
        this.$notice[type]({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
        })
      }
    }
  }
</script>

```
:::

### 手动关闭

::: demo
``` html
<vi-button type="primary" @click="onShow5">延迟三秒将手动关闭</vi-button>

<script>
  export default {
    methods: {
      onShow5(type) {
        const m = this.$notice.alert({
          title: '这是一段标题',
          content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
          duration: 0
        })

        setTimeout(() => {
          m.close()
        }, 3000)
      }
    }
  }
</script>

```
:::


通过直接调用以下方法来使用组件：
<ul class="vi-noticeation-docs-ul">
  <li><div>this.$notice.alert()</div></li>
  <li><div>this.$notice.success()</div></li>
  <li><div>this.$notice.info()</div></li>
  <li><div>this.$notice.warning()</div></li>
  <li><div>this.$notice.danger()</div></li>
</ul>

## API
### Noticeation Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|title|String|标题|-|-|
|content|String|消息文字|-|-|
|top|Number|弹窗 距离窗口顶部的偏移量|-|20|
|isNewOn|Boolean|最新的弹窗是否永远最上面|-|false|
|duration|Number|显示时长，设置为0不会自动关闭|-|false|
|isClose|Boolean|是否显示关闭按钮|-|false|
|beforeClose|Function|关闭时的回调函数, 参数为被关闭的 message 实例|-|-|

### 方法
方法名|参数|说明|
|-|-|-|
|close| - |关闭当前的 Message|