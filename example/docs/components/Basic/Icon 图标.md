# Icon图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置名字为 ```iconName``` 来使用即可。例如：
``` html
<vi-icon name="icon-test"></vi-icon> 
<vi-icon name="jiazai"></vi-icon> 
<vi-icon name="loading"></vi-icon>
```
## 图标集合

<div class="vi-icon_box">
  <div class="vi-icon_item" v-for="(item, index) in iconList" :key="index" @click="onCopy(item)">
    <div class="vi-icon_item-content">
      <vi-icon :name="item.className" size="30"></vi-icon>
      <p class="vi-icon_text">{{item.className}}</p>
    </div>
  </div>
</div>

## API
...

<script>
export default {
  data() {
    return {
      iconList: [
        {
          className: 'checked'
        },
        {
          className: 'warning'
        },
        {
          className: 'error'
        },
        {
          className: 'info'
        },
        {
          className: 'close'
        },
      ]
    }
  },
  methods: {
    onCopy(item) {
      let textarea = document.createElement('textarea')
      textarea.innerHTML = `<vi-icon name="${item.className}"></vi-icon>`
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      this.$message({
        content: '复制成功',
      })
      document.body.removeChild(textarea)
    }
  }
}
</script>
