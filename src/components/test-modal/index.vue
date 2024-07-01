<template>
  <div class="modal-container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'modal',
  data() {
    return {
      value: 100,
    };
  },
  methods: {
    showAlert(v: string | number) {
      alert('弹窗' + v);
    },
  },
});
</script>

<style lang="less" scoped>
.modal-container {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  text-align: left;
  transform: translateZ(0);
  background-color: #111923;
  min-width: 200px;
  min-height: 100px;
}
</style>