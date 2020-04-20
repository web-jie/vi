<script>
export default {
  data() {
    const checkUser = (rule, value, callback) => {
      if (!value) {
        callback(new Error())
      } else {
        callback()
      }
    }

    const checkPass = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('密码不得少于八位数'))
      } else {
        callback()
      }
    }
    return{
      ruleForm1: {
        name: '',
        type: '0',
        delivery: true,
        radio: 1,
        remark: ''
      },
       ruleForm2: {
        user: '',
        pass: ''
      },
      ruleForm3: {
        user: '',
        pass: ''
      },
      ruleForm4: {
        name: '',
        type: '',
        delivery: true,
        radio: 1,
        remark: ''
      },
      ruleForm5: {
        user: '',
        pass: ''
      },

      ruleForm6: {
        user: '',
        pass: ''
      },
      checkUserRules1: [
        {reg: /^[0-9]{8}$/, message: '账号必须为八位数', required: true}
      ],
      checkPassRules1: [
        {reg: /^[0-9]{8}$/, message: '密码必须为八位数', required: true}
      ],

      ruleForm7: {
        user: '',
        pass: ''
      },
      checkUserRules2: [
        {reg: /^[0-9]{8}$/, message: '账号必须为八位数', implement: (status, msg) => {!status && this.$message.danger(msg);}}
      ],
      checkPassRules2: [
        {reg: /^[0-9]{8}$/, message: '密码必须为八位数', implement: (status, msg) => {!status && this.$message.danger(msg);}}
      ],

      ruleForm8: {
        user: '',
        pass: ''
      },
       checkUserRules3: [
        {reg: /^[0-9]{8}$/, message: '账号必须为八位数'}
      ],
      checkPassRules3: [
        {reg: /^[0-9]{8}$/, message: '密码必须为八位数'}
      ],

      ruleForm9: {
        user: '',
        pass: '',
        type: ''
      },
      typeList1: [
        {label: '超级管理员', value: 'superAdmin'}, 
        {label: '管理员', value: 'admin'}
      ],
      condition: 'blur',
      
      labelPosition: 'left',
      rules1: {
        'name': [{message: '账号不能为空', required: true}],
        'type': [{message: '食物类型不能为空', required: true}],
        'delivery': [{ required: true}],
        'radio': [{ required: true}],
        'remark': [{message: '食物备注不能为空', required: true}],
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
      }],

      checkUserRules: [
        {message: '账号不能为空', validator: checkUser },
        {required: true}
      ],
      checkPassRules: [
        {validator: checkPass, required: true}
      ]
    }
  },
  watch: {
    condition() {
      this.$refs.ruleForm9.resetValidate()
      this.$refs.ruleForm9.resetFields()
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>

# Form 表单
用于校验提交数据, 可与第三方库整合， 也可自定义内容， 如样式， 组件。

### 基础用法
::: demo
``` html
<vi-form>
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
  <vi-form-item label="食物备注">
    <vi-input v-model="ruleForm1.remark" type="textarea" width="260px"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary">立即提交</vi-button>
  </vi-form-item>
</vi-form>
<script>
export default {
  data() {
    return {
      ruleForm1: {
        name: '',
        type: '0',
        delivery: true,
        radio: 1,
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
  }
}
</script>
```
:::

### 行内表单
::: demo
``` html
<vi-form inline>
  <vi-form-item label="账号" width="40">
    <vi-input width="200px" v-model="ruleForm2.user"></vi-input>
  </vi-form-item>
  <vi-form-item label="密码" width="40">
    <vi-input width="200px" v-model="ruleForm2.pass"></vi-input>
  </vi-form-item>
</vi-form>
<script>
export default {
  data() {
    return {
      ruleForm2: {
        user: '',
        pass: ''
      },
    }
  }
}
</script>
```
:::

### 标签对齐方式 
根据不同的业务场景设置不同的对齐方式
::: demo
``` html
<vi-radio-group v-model="labelPosition" style="margin-bottom: 50px;">
  <vi-radio label="左对齐" value="left"></vi-radio>
  <vi-radio label="右对齐" value="right"></vi-radio>
  <vi-radio label="顶部对齐" value="top"></vi-radio>
</vi-radio-group>

<vi-form :label-position="labelPosition">
  <vi-form-item label="请输入账号" width="100">
    <vi-input width="200px" v-model="ruleForm3.user"></vi-input>
  </vi-form-item>
  <vi-form-item label="密码" width="100">
    <vi-input width="200px" v-model="ruleForm3.pass"></vi-input>
  </vi-form-item>
</vi-form>
<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      ruleForm3: {
        user: '',
        pass: ''
      },
    }
  }
}
</script>
```
:::

### 表单验证
在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。通过传入ruleForm表单数据对象，对表单字段进行校验
::: demo
``` html
<vi-form :ruleForm="ruleForm4" :rules="rules1" ref="ruleForm4">
  <vi-form-item label="食物名称" prop="name">
    <vi-input width="260px" v-model="ruleForm4.name"></vi-input>
  </vi-form-item>
  <vi-form-item label="食物类型" prop="type" >
    <vi-select v-model="ruleForm4.type" clearable>
      <vi-option v-for="(item, index) in typeList" :key="index" :label="item.label" :value="item.value" />
    </vi-select>
  </vi-form-item>
  <vi-form-item label="立即食用" prop="delivery">
    <vi-switch v-model="ruleForm4.delivery"></vi-switch>
  </vi-form-item>
  <vi-form-item label="地点配送" prop="radio">
    <vi-radio-group v-model="ruleForm4.radio">
      <vi-radio label="地点1" :value="1"></vi-radio>
      <vi-radio label="地点2" :value="2"></vi-radio>
      <vi-radio label="地点3" :value="3"></vi-radio>
    </vi-radio-group>
  </vi-form-item>
  <vi-form-item label="食物备注" prop="remark">
    <vi-input v-model="ruleForm4.remark" type="textarea" width="260px"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary" @click="onSubmit('ruleForm4')">立即提交</vi-button>
  </vi-form-item>
</vi-form>
<script>
export default {
  data() {
    return {
      ruleForm4: {
        name: '',
        type: '',
        delivery: true,
        radio: 1,
        remark: ''
      },
      rules1: {
        'name': [{message: '账号不能为空', required: true}],
        'type': [{message: '食物类型不能为空', required: true}],
        'delivery': [{ required: true}],
        'radio': [{ required: true}],
        'remark': [{message: '食物备注不能为空', required: true}],
      },
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>
```
:::

::: tip
对要进行校验的表单项须要设置prop 属性。给rule规则对象设置required属性为true， 则该表单项为必填字段
:::

### 自定义验证规则
::: demo
``` html
<vi-form label-width="100" :ruleForm="ruleForm5" ref="ruleForm5">
  <vi-form-item label="请输入账号" prop="user" :rules="checkUserRules">
    <vi-input width="260px" v-model="ruleForm5.user"></vi-input>
  </vi-form-item>
  <vi-form-item label="请输入密码" prop="pass" :rules="checkPassRules">
    <vi-input width="260px" v-model="ruleForm5.pass"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary" @click="onSubmit('ruleForm5')">立即提交</vi-button>
  </vi-form-item>
</vi-form>

<script>
export default {
  data() {
    const checkUser = (rule, value, callback) => {
      if (!value) {
        callback(new Error())
      } else {
        callback()
      }
    }

    const checkPass = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('密码不得少于八位数'))
      } else {
        callback()
      }
    }
    return {
      ruleForm5: {
        user: '',
        pass: ''
      },
      checkUserRules: [
        {message: '账号不能为空', validator: checkUser },
        {required: true}
      ],
      checkPassRules: [
        {validator: checkPass, required: true}
      ]
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>
```
:::
可以对某一表单项单独设置rules， 来对其进行校验

::: warning

当传入自定义校验规则函数时， callback 函数必须被调用

:::

### 更加便捷的校验方式
如果不想定义多个校验函数， 来执行自定义校验规则， 而又想校验表单数据，来满足于我们的日常需求， 这似乎而言好像不太实际， 没关系，<span style="font-weight: bold;">Vi-element-vue</span>已经实现了这一点， 通过传入正则， 让组件内部自校验， 而你在外界， 不需要做任何操作。这将极大的减少了开发的生产力。这也是Vi-element-vue Form组件最大的特点之一。
::: demo
``` html
<vi-form label-width="100" :ruleForm="ruleForm6" ref="ruleForm6">
  <vi-form-item label="请输入账号" prop="user" :rules="checkUserRules1">
    <vi-input width="260px" v-model="ruleForm6.user"></vi-input>
  </vi-form-item>
  <vi-form-item label="请输入密码" prop="pass" :rules="checkPassRules1">
    <vi-input width="260px" v-model="ruleForm6.pass"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary" @click="onSubmit('ruleForm6')">立即提交</vi-button>
  </vi-form-item>
</vi-form>

<script>
export default {
  data() {
    return {
      ruleForm6: {
        user: '',
        pass: ''
      },
      checkUserRules1: [
        {reg: /^[0-9]{8}$/, message: '账号必须为八位数'}
      ],
      checkPassRules1: [
        {reg: /^[0-9]{8}$/, message: '密码必须为八位数'}
      ]
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>

```
:::

::: warning
组件的校验顺序为： 优先校验自定义校验规则，然后在校验传入的正则，即如果在一个规则对象里同时自定义校验规则和正则， 则只进行自定义校验
:::

### 处理状态
在某些情况下， 我们似乎需要对校验的字段返回来的结果进行一些处理和操作，诸如上面通过传入正则来进行校验， 组件返回来一个错误的文字提示信息， 在某些情况下， 你可不能并不需要直接显示文字， 而是以弹框的形式， 来将错误信息呈现出来，可以在规则对象里传入implement属性。 当你自定义校验规则时， 这个属性似乎就没必要了。 因为你可以在自定义校验规则方法里来处理你的一些操作和逻辑
::: demo
``` html

<vi-form label-width="100" :ruleForm="ruleForm7" ref="ruleForm7" is-custom-errtip>
  <vi-form-item label="请输入账号" prop="user" :rules="checkUserRules2">
    <vi-input width="260px" v-model="ruleForm7.user"></vi-input>
  </vi-form-item>
  <vi-form-item label="请输入密码" prop="pass" :rules="checkPassRules2">
    <vi-input width="260px" v-model="ruleForm7.pass"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary" @click="onSubmit('ruleForm7')">立即提交</vi-button>
  </vi-form-item>
</vi-form>

<script>
export default {
  data() {
    return {
      ruleForm7: {
        user: '',
        pass: ''
      },
       checkUserRules2: [
        {reg: /^[0-9]{8}$/, message: '账号必须为八位数', implement: (status, msg) => {!status && this.$message.danger(msg);}}
      ],
      checkPassRules2: [
        {reg: /^[0-9]{8}$/, message: '密码必须为八位数', implement: (status, msg) => {!status && this.$message.danger(msg);}}
      ],
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>

```
:::

### 自定义错误提示
通过设置is-custom-errtip为true进行自定义提示

::: demo
``` html
<vi-form label-width="100" :ruleForm="ruleForm8" ref="ruleForm8" is-custom-errtip>
  <vi-form-item label="请输入账号" prop="user" :rules="checkUserRules3" #default="scope">
    <vi-input width="260px" v-model="ruleForm8.user"></vi-input>
    <span style="margin-left: 10px;color: #f56c6c;">{{scope.info.errMsg}}</span>
  </vi-form-item>
  <vi-form-item label="请输入密码" prop="pass" :rules="checkPassRules3" #default="scope">
    <vi-input width="260px" v-model="ruleForm8.pass"></vi-input>
    <span style="margin-left: 10px;color: #f56c6c;">{{scope.info.errMsg}}</span>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary" @click="onSubmit('ruleForm8')">立即提交</vi-button>
  </vi-form-item>
</vi-form>

<script>
export default {
  data() {
    return {
      ruleForm8: {
        user: '',
        pass: ''
      },
       checkUserRules3: [
        {reg: /^[0-9]{8}$/, message: '账号必须为八位数'}
      ],
      checkPassRules3: [
        {reg: /^[0-9]{8}$/, message: '密码必须为八位数'}
      ],
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>

```
:::

### 触发校验条件
::: demo
``` html
<vi-radio-group v-model="condition" style="margin-bottom: 50px;">
  <vi-radio label="点击提交按钮触发" value="click"></vi-radio>
  <vi-radio label="失去焦点触发" value="blur"></vi-radio>
  <vi-radio label="值改变时触发" value="change"></vi-radio>
</vi-radio-group>


<vi-form label-width="100" :ruleForm="ruleForm9" ref="ruleForm9">
  <vi-form-item label="请输入账号" prop="user" :rules="[{reg: /^[0-9]{8}$/, message: '账号必须为八位数', required: true}]" :trigger="condition">
    <vi-input width="260px" v-model="ruleForm9.user"></vi-input>
  </vi-form-item>
  <vi-form-item label="请输入密码" prop="pass" :rules="[{reg: /^[0-9]{8}$/, message: '密码必须为八位数', required: true}]" :trigger="condition">
    <vi-input width="260px" v-model="ruleForm9.pass"></vi-input>
  </vi-form-item>
  <vi-form-item label="角色类型" prop="type" :rules="[{required: true, message: '请选择角色'}]" :trigger="condition">
    <vi-select v-model="ruleForm9.type" clearable>
      <vi-option v-for="(item, index) in typeList1" :key="index" :label="item.label" :value="item.value" />
    </vi-select>
  </vi-form-item>
  <vi-form-item>
    <vi-button>取消</vi-button>
    <vi-button type="primary" @click="onSubmit('ruleForm9')">立即提交</vi-button>
  </vi-form-item>
</vi-form>

<script>
export default {
  data() {
    return {
      condition: 'blur',
      ruleForm9: {
        user: '',
        pass: '',
        type: ''
      },
      typeList1: [
        {label: '超级管理员', value: 'superAdmin'}, 
        {label: '管理员', value: 'admin'}
      ]
    }
  },
  watch: {
    condition() {
      this.$refs.ruleForm9.resetValidate()
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(validate => {
        if(!validate) return 
        this.$message.success('校验通过')
      })
    }
  }
}
</script>

```
:::

## API
### Form Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|ruleForm|Object|表单数据对象|-|-|
|rules|Object|表单验证规则|-|-|
|inline|Boolean|是否为行内表单|-|false|
|label-position|String|对齐方式|right|left / right / top|
|label-width|String / Number|标签宽度|-|80|
|is-custom-errtip|Boolean|是否自定义错误提示|-|false|

### Form Methods
|方法名|说明|参数|
|-|-|-|
|validate|对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用 |Function(callback: Function(boolean))   |
|resetFields|对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | - |
|resetValidate|移除表单项的校验结果 | - |


### FormItem Attributes
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|label|String|标签文本|-|-|
|rules|Array|表单验证规则|-|-|
|width|String / Number|标签宽度|-|-|
|trigger|String|触发校验条件|click / change / blur|blur|

### Rules Attributes
|属性|类型|说明|可选值|默认值|
|-|-|-|-|-|
|message|String|错误提示文字，也可在校验函数里自定义|-|error|
|required|Boolean|是否为必填字段|-|-|
|validator|Function|自定义校验规则函数|-|-|
|reg|RegExp / String|校验正则|-|-|
|implement|Function|状态结果回调出来函数|-|-|


