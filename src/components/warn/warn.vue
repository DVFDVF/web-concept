<template>
  <div :class="[`content ${status}`, { opacity: layout.isMobile }]">
    <div class="title">{{ status }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Alert } from 'ant-design-vue';
import dataCenter from '@/dataCenter';
export default defineComponent({
  data() {
    return {
      layout: dataCenter.layout,
    };
  },
  components: {},
  props: ['status', 'text'],
});
</script>

<style scoped>
.content {
  color: #fff;
  padding: 15px 20px;
  margin: 5px;
  border-radius: 11px;
  font-family: Montserrat Variable, sans-serif;
  line-height: 1.5;
}

.success {
  background-color: #4caf50;
}
.info {
  background-color: #2196f3;
}
.warning {
  background-color: #ffc107;
}
.error {
  background-color: #ff5252;
}
.title {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.text {
  font-size: 14px;
  font-weight: 600;
}
.opacity {
  opacity: 0.9;
}
</style>
