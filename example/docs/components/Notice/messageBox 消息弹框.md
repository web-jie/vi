<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onShow1() {
        this.$confirm({
          title:'提示',
          content: '一段内容',
        }).then(_ => {
          console.log('点击了确定')
        }).catch(_ => {
          console.log('点击了取消')
        })
      },
      onShow2() {
        this.$confirm({
          title:'提示',
          content: '确定要执行此操作？',
          type: 'confirm',
          isCloseEsc: true
        }).then(_ => {
          console.log('点击了确定')
        }).catch(_ => {
          console.log('点击了取消')
        })
      }
    }
  }
</script>

# MessaageBox 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。



### 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

::: demo
``` html
<vi-button @click="onShow1">弹出message box</vi-button>

<script>
  export default {
    methods: {
      onShow1() {
        this.$confirm({
          title:'提示',
          content: '一段内容',
        }).then(_ => {
          console.log('点击了确定')
        }).catch(_ => {
          console.log('点击了取消')
        })
      },
    }
  }
</script>
```
:::

### 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

::: demo
``` html
<vi-button @click="onShow2" type="warning">弹出message box</vi-button>

<script>
  export default {
    methods: {
      onShow2() {
        this.$confirm({
          title:'提示',
          content: '确定要执行此操作？',
          type: 'confirm',
          
        }).then(_ => {
          console.log('点击了确定')
        }).catch(_ => {
          console.log('点击了取消')
        })
      }
    }
  }
</script>
```
:::


## API
### MessaageBox Options
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|title|String|标题|- |-|
|content|String|提示内容|-|-|
|type|String|提示框类型|alert / confirm|alert|
|isConfirm|Boolean|是否显示确定按钮|-|true|
|isCancel|Boolean|是否显示取消按钮|-|true|
|confirmText|String|确定按钮文字|-|确定|
|cancelText|String|取消按钮文字|-|取消|
|closeOnClickOverlay|Boolean|是否在点击遮罩层后关闭弹框|-|false|
|isCloseEsc|Boolean|是否可以通过按下 ESC 关闭|-|false|
|cancelBtnType|String|取消按钮类型|见Button类型|-|
|confirmType|String|确定按钮类型|见Button类型|-|
|btnSize|String|按钮尺寸|见Button尺寸|-|

