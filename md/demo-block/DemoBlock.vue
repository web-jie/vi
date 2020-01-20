<template>
  <vi-container class="vi-demo-block">
    <vi-header>
      <div class="demo-header">
        <slot name="source"></slot>
      </div>
    </vi-header>
    <vi-main>
      <vi-slide-down class="demo-main" :value="visible">
        <slot name="highlight"></slot>
      </vi-slide-down>
    </vi-main>
    <vi-footer>
      <div class="demo-footer" @click="handleClick">
        <!--todo 替换 button / icon 组件-->
        <span class="demo-footer-btn">{{text}}</span>
      </div>
    </vi-footer>
  </vi-container>
</template>

<script>
export default {
  name: 'vi-demo-block',
  data () {
    return {
      visible: false
    }
  },
  computed: {
    text () {
      return this.visible ? '隐藏代码' : '显示代码'
    }
  },
  methods: {
    handleClick () {
      this.visible = !this.visible
    }
  }
}
</script>

<style  lang="scss">
.vi-demo-block {
  border-radius: 5px;
  border: 1px solid #eee;
  transition: all 0.5s ease;
  margin: 20px 0;
  &:hover {
    border-color: transparent;
    box-shadow: 0 2px 7px rgba(0,0,0,.15);
  }
}
.demo{
  &-header{
    padding: 24px 20px;
    position: relative;
    border-bottom: 1px solid #eee;
    .doc- {
      & > div + div {
        margin-top: 20px;
      }
    }
  }
  &-main{
    color: #333333;
    font-size: 13px;
    border-bottom: 1px solid #eee;
  }
  &-footer{
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    &:hover{
        color: #6190e8;
      }
  }
}
</style>
