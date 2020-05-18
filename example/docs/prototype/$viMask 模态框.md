<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onShow() {
        this.$viMask()
      }
    }
  }
</script>

# $ViMask 模态框

### 基本用法

::: demo
``` html
<vi-button @click="onShow">弹出</vi-button>

<script>
  export default {
    data () {
      return { }
    },
    methods: {
      onShow() {
        this.$viMask()
      }
    }
  }
</script>
```
:::