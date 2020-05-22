<script>
export default  {
  data() {
    return {
      arrow: 'hover'
    }
  },
}
</script>

# Carousel 走马灯

### 基本用法
::: demo
``` html
<div class="vi-demo-carousel">
  <div>
    <span>指示器hover触发</span>
    <vi-carousel height="220px">
      <vi-carousel-item v-for="item in 4" :key="item">
        <h1>{{item}}</h1>
      </vi-carousel-item>
    </vi-carousel>
  </div>

  <div>
    <span>指示器click触发</span>
    <vi-carousel :initial-index="2" height="220px" indicator-trigger="click">
      <vi-carousel-item v-for="item in 4" :key="item">
        <h1>{{item}}</h1>
      </vi-carousel-item>
    </vi-carousel>
  </div>
</div>

<style>
.vi-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
  text-align: center;
}
.vi-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
  text-align: center;
}
</style>
```
:::

### 指示器位置
::: demo
``` html
<vi-carousel indicator-position="outside">
  <vi-carousel-item v-for="item in 4" :key="item">
    <h1>{{item}}</h1>
  </vi-carousel-item>
</vi-carousel>

<style>
.vi-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
  text-align: center;
}
.vi-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
  text-align: center;
}
</style>
```
:::

### 箭头显示

::: demo
``` html
<vi-radio-group v-model="arrow">
  <vi-radio-button label="悬停时显示" value="hover"></vi-radio-button>
  <vi-radio-button label="一直显示" value="always"></vi-radio-button>
  <vi-radio-button label="不显示" value="never"></vi-radio-button>
</vi-radio-group>

<vi-carousel style="margin-top: 20px;" 
             :autoplay="false" 
             :is-show-indicator="false"
             :arrow="arrow">
  <vi-carousel-item v-for="item in 4" :key="item">
    <h1>{{item}}</h1>
  </vi-carousel-item>
</vi-carousel>

<style>
.vi-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
  text-align: center;
}
.vi-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
  text-align: center;
}
</style>
```
:::




## API
### Carousel Options
|参数|类型|说明|可选值|默认值|
|-|-|-|-|-|
|duration|Number|自定切换的时长|-|3000|
|width|Number / String|走马灯的宽度|-|100%|
|height|Number / String|走马灯的高度|-|-|
|initial-index|Number|初始状态激活的幻灯片的索引，从 0 开始|-|0|
|is-show-indicator|Boolean|是否显示指示器|-|true|
|indicator-color|String|指示器颜色|-|#fff|
|indicator-trigger|String|指示器触发事件条件|hover / click|hover|
|indicator-position|String|指示器的位置|inner / outside|inner|
|arrow|String|切换箭头的显示时机|always / hover / never|hover|
|autoplay|Boolean|是否自动切换|-|true|



<style lang="scss">
.vi-demo-carousel {
  display: flex;
  & > div {
    text-align: center;
    flex: 1
  }
  & > div + div {
    margin-left: 30px;
  }
  .vi-carousel {
    margin-top: 15px;
  }
}
.vi-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
  text-align: center;
}
.vi-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
  text-align: center;
}
</style>