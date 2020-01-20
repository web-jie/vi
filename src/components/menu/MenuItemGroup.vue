<template>
  <li class="vi-menu-group">
    <div class="vi-menu-group-title"><slot name="title">{{title}}</slot></div>
    <ul class="vi-menu-group-content"><slot></slot></ul>
  </li>
</template>

<script>
export default {
  name: 'vi-menu-group',
  props: {
    title: {
      type: String
    }
  }
}
</script>
