<script>
  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        outerVisible: false,
        innerVisible: false,
        type: '',

        ruleForm1: {
          name: '',
          type: '0',
          delivery: true,
          radio: 1,
          checkbox: ['1', '2'],
          time: '',
          remark: ''
        },
        typeList: [{
          label: '蔬菜',
          value: '0'
        }, {
          label: '水果',
          value: '1'
        }, {
          label: '牛奶',
          value: '2'
        }, {
          label: '零食',
          value: '3'
        }]
      }
    },
    methods: {
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

      beforeClose(next) {
        this.$confirm({
          title: '提示',
          content: '确定关闭弹窗？',
          type: 'confirm',
          isCloseEsc: true
        }).then(_ => {
          next()
        })
      },

      beforeClose1(next) {
        this.$confirm({
          title: '提示',
          content: '确定放弃填写表单？',
          type: 'confirm',
          isCloseEsc: true,
        }).then(_ => {
          next()
        })
      }
    }
  }
</script>

# Dialog 弹框

### 基本用法
::: demo
``` html
<vi-button @click="show1 = true">打开</vi-button>

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
<vi-button @click="onShowAnimation('left-slide')">左边滑入</vi-button>
<vi-button @click="onShowAnimation('right-slide')">右边滑入</vi-button>
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
        show2: false,
        type: ''
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
<vi-button @click="show3 = true">打开</vi-button>
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
    <vi-button @click="show3 = false">取消</vi-button>
    <vi-button type="primary" @click="show3 = false">确定</vi-button>
  </template>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        show3: false
      }
    },
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
    append-to-body
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

### 关闭前回调
通过传入before-close属性， 来对弹框关闭之前做一些处理
::: demo
``` html
<vi-button @click="show4 = true">打开</vi-button>

<vi-dialog v-model="show4" :before-close="beforeClose">
  <p>对话框内容111</p>
  <p>对话框内容</p>
  <p>对话框内容</p>
  <template slot="button">
    <vi-button @click="show4 = false">取消</vi-button>
  </template>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        show4: false
      }
    },
    methods: {
      beforeClose(next) {
        this.$confirm({
          title: '提示',
          content: '确定关闭弹窗？',
          type: 'confirm',
          isCloseEsc: true
        }).then(_ => {
          next()
        })
      }
    }
  }
</script>
```
:::

### 嵌套表单
::: demo
``` html
<vi-button @click="show5 = true">打开</vi-button>

<vi-dialog v-model="show5" width="700" title="配送信息" :before-close="beforeClose1">
  <vi-form label-width="100" label-position="left">
    <vi-form-item label="食物名称">
      <vi-input width="260px" v-model="ruleForm1.name"></vi-input>
    </vi-form-item>
    <vi-form-item label="食物类型">
      <vi-select v-model="ruleForm1.type">
        <vi-option v-for="(item, index) in typeList" :key="index" :label="item.label" :value="item.value" />
      </vi-select>
    </vi-form-item>
    <vi-form-item label="立即食用">
      <vi-switch v-model="ruleForm1.delivery"></vi-switch>
    </vi-form-item>
    <vi-form-item label="地点配送">
      <vi-radio-group v-model="ruleForm1.radio">
        <vi-radio label="地点1" :value="1"></vi-radio>
        <vi-radio label="地点2" :value="2"></vi-radio>
        <vi-radio label="地点3" :value="3"></vi-radio>
      </vi-radio-group>
    </vi-form-item>
    <vi-form-item label="配送时间段">
      <vi-checkbox-group v-model="ruleForm1.checkbox">
        <vi-checkbox value="1">09:00 - 11:00</vi-checkbox>
        <vi-checkbox value="2">13:00 - 15:00</vi-checkbox>
        <vi-checkbox value="3">16:00 - 18:00</vi-checkbox>
      </vi-checkbox-group>
    </vi-form-item>
    <vi-form-item label="指定时间">
      <vi-date-picker 
      v-model="ruleForm1.time" 
      :isAppendParentNode="true">
    </vi-form-item>
    <vi-form-item label="食物备注">
      <vi-input v-model="ruleForm1.remark" type="textarea" width="260px"></vi-input>
    </vi-form-item>
  </vi-form>
  <template v-slot:footer>请填写上面的配送信息</template>
  <template slot="button">
    <vi-button @click="show5 = false">取消</vi-button>
    <vi-button @click="show5 = false" type="success">确定</vi-button>
  </template>
</vi-dialog>

<script>
  export default {
    data () {
      return {
        show5: false,
        ruleForm1: {
          name: '',
          type: '0',
          delivery: true,
          radio: 1,
          checkbox: ['1', '2'],
          time: '',
          remark: ''
        },
        typeList: [{
          label: '蔬菜',
          value: '0'
        }, {
          label: '水果',
          value: '1'
        }, {
          label: '牛奶',
          value: '2'
        }, {
          label: '零食',
          value: '3'
        }]
      }
    },
    methods: {
      beforeClose1(next) {
        this.$confirm({
          title: '提示',
          content: '确定放弃填写表单？',
          type: 'confirm',
          isCloseEsc: true
        }).then(_ => {
          next()
        })
      }
    },
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
|animation|String|弹框动画|fade / upper-slide / below-slide / left-slide / right-slide |fade|
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
|before-close|function(next)，next 用于关闭 Dialog|关闭前的回调，会暂停 Dialog 的关闭|-|-|

### Dialog Events
|事件名称|说明|回调参数|
|-|-|-|
|open|Dialog 打开的回调|-|
|opened|Dialog 打开动画结束时的回调|-|
|close|Dialog 关闭的回调|-|
|closed|Dialog 关闭动画结束时的回调|-|

### Dialog Slot
|name | 说明|
|-|-|
|-|Dialog 的内容|
|title|Dialog 的标题|
|footer|Dialog 的底部|
|button|Dialog 的操作按钮|
