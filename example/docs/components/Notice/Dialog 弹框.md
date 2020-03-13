<script>
  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        outerVisible: false,
        innerVisible: false,
        type: ''
      }
    },
    watch: {
      show1(val) {
        // console.log(val, '787878jfkdsfkdsfdsf')
      }
    },
    methods: {
      onOpen1 () {
        this.show1 = true
      },
      confirm() {
        this.$message.success(' 单机了确定')
      },
      cancel() {
        this.$message.info('单击了取消')
      },
      onShowAnimation(type) {
        this.type = type
        this.show2 = true
      },

      onOpen2() {
        this.show3 = true
      },

      onCancel() {
        this.show3 = false
      },
      onConfirm() {
        this.show3 = false
      },
    }
  }
</script>

# Dialog 弹框

### 基本用法
::: demo
``` html
<vi-button @click="onOpen1">打开</vi-button>

<vi-dialog v-model="show1" :confirm="confirm" :cancel="cancel">
  <p>对话框内容</p>
  <p>对话框内容</p>
  <p>对话框内容</p>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        show1: false
      }
    },
    methods: {
      onOpen1 () {
        this.show1 = true
      },
      confirm() {
        this.$message.success('单击了确定')
      },
      cancel() {
        this.$message.info('单击了取消')
      },
    }
  }
</script>
```
:::

### 设置动画
支持五种动画，淡入淡出， 上方滑入， 下方滑入，左边滑入， 右边滑入

::: demo
``` html
<vi-button @click="onShowAnimation('fade')">淡入淡出</vi-button>
<vi-button @click="onShowAnimation('upper-slide')">上方滑入</vi-button>
<vi-button @click="onShowAnimation('below-slide')">下方滑入</vi-button>
<vi-dialog 
  v-model="show2"
  :confirm="confirm" 
  :cancel="cancel"
  :animation="type">
  <p>对话框内容</p>
  <p>对话框内容</p>
  <p>对话框内容</p>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        show2: false
      }
    },
    methods: {
      onShowAnimation(type) {
        this.type = type
      },
      confirm() {
        this.$message.success('单击了确定')
      },
      cancel() {
        this.$message.info('单击了取消')
      },
    }
  }
</script>
```
:::

### 自定义内容
通过传入slot， 让dialog更具多样化
::: demo
``` html
<vi-button @click="onOpen2">打开</vi-button>
<vi-dialog 
  title="自定义内容"
  v-model="show3">
  <p>对话框内容</p>
  <p>对话框内容</p>
  <p>对话框内容</p>
  <template slot="footer">
    <p>一段底部文字</p>
  </template>
  <template slot="button">
    <vi-button @click="onCancel">取消</vi-button>
    <vi-button type="primary" @click="onConfirm">确定</vi-button>
  </template>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        show3: false
      }
    },
    methods: {
      onOpen2() {
        this.show3 = true
      },
      onCancel() {
        this.show3 = false
      },
      onConfirm() {
        this.show3 = false
      },
    }
  }
</script>
```
:::

### 多级弹框
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。
::: demo
``` html
<vi-button @click="outerVisible = true">打开</vi-button>
<vi-dialog 
  title="标题"
  width="900px"
  v-model="outerVisible">
  <p>第一层dialog</p>
  <vi-dialog 
    width="650px"
    :append-to-body="true"
    title="标题"
    v-model="innerVisible">
    <p>第二层dialog</p>
    <template slot="button">
      <vi-button @click="innerVisible = false">返回</vi-button>
    </template>
  </vi-dialog>
  <template slot="button">
    <vi-button @click="outerVisible = false">取消</vi-button>
    <vi-button type="primary" @click="innerVisible = true">打开第一层dialog</vi-button>
  </template>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        outerVisible: false,
        innerVisible: false
      }
    },
    methods: {}
  }
</script>
```
:::


## API
### Dialog Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|v-model|Boolean|是否显示 Dialog|- |false|
|title|String|标题|-|标题|
|top| Number / String|弹框的 margin-top 值|-|120|
|animation|String|弹框动画|fade / upper-slide / below-slide |fade|
|width|Number / String|弹框宽度|-|30%|
|close-on-click-overlay|Boolean|是否在点击遮罩层后关闭弹窗|-|true|
|is-close-icon|Boolean|是否显示右上角关闭图标|-|true|
|is-header-bd|Boolean|是否显示标题下边框|-|true|
|is-footer-bd|Boolean|是否显示底部上边框|-|true|
|is-header|Boolean|是否显示标题|-|true|
|is-footer|Boolean|是否显示底部|-|true|
|confirm|Function|点击默认确定按钮的回调， 传入此属性， 会显示确定按钮|-|-|
|cancel|Function|点击默认取消按钮的回调，传入此属性， 会显示取消按钮|-|-|
|confirm-text|String|确认按钮文字|-|确定|
|cancel-text|String|取消按钮文字|-|取消|
|is-close-esc|Boolean|是否可以通过按下 ESC 关闭|-|true|
|append-to-body|Boolean|Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true|-|false|

### Slot
|name | 说明|
|-|-|
|-|Dialog 的内容|
|title|Dialog 的标题|
|footer|Dialog 的底部|
|button|Dialog 的操作按钮|
