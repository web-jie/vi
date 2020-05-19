# Drawer 抽屉

demo

::: demo

```HTML
<template>
  <vi-drawer ref="drawer" :direction="position"><div>点击了</div></vi-drawer>
  <vi-button @click="drawerChange('left')">点击左边</vi-button>
  <vi-button @click="drawerChange('top')">点击上边</vi-button>
  <vi-button @click="drawerChange('right')">点击右边</vi-button>
  <vi-button @click="drawerChange('bottom')">点击下边</vi-button>
</template>


<script>
export default {
  data(){
    return{
     position:null
    }
  },
  computed: {
    
  },
  mounted(){
   
  },
  methods: {
    drawerChange(txt){
      this.$refs.drawer.show()
      this.position = txt
    }
  },

}
</script>



```
:::
## API

|参数|类型|说明|可选值|默认值|
| ------- | -------- | -------- |-------- | ------ |
| direction   |  String  |   出现的位置|    left /  top / right / bottom    | - |






