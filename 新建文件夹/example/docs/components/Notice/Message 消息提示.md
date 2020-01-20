
<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      onSuccess () {
        this.$message({
          content: '这是一段内容'
        })
      }
    }
  }
</script>

# Messaage 消息提示

### 基本用法

::: demo
``` html
<vi-button type="success" @click="onSuccess">成功</vi-button>
<script>
  export default {
    data () {
      return { }
    },
    methods: {
      onSuccess () {

      }
    }
  }
</script>
```
:::