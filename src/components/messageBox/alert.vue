<template>
  <div>
    <div class="vi-messageBox_main-alert-title vi-messageBox_main-title" v-if="parentValue.title">{{parentValue.title}}</div>
    <div class="vi-messageBox_main-alert-content vi-messageBox_main-content">{{parentValue.content}}</div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { getParent } from '../../utils/helper'
export default {
  name: 'vi-messageBox-alert',
  computed: {
    parentValue () {
      return getParent(this, 'vi-messageBox')
    }
  }
}
</script>
