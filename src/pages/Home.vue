<template>
  <div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'Home',
  components: {
    ElButton,
  },
})
</script>

<style lang="scss" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
