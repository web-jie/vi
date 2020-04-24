<template>
  <div>
    <div class="vi-messageBox_main-confirm-title vi-messageBox_main-title" v-if="parentValue.title">{{parentValue.title}}</div>
    <div class="vi-messageBox_main-confirm-content vi-messageBox_main-content">
      <vi-icon name="warning" color="#e6a23c" size="25"/><span class="vi-confirm_text">{{parentValue.content}}</span>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { getParent } from '../../utils/helper'
export default {
  name: 'vi-messageBox-confirm',
  computed: {
    parentValue () {
      return getParent(this, 'vi-messageBox')
    }
  }
}
</script>
