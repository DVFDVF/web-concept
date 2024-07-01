<template>
  <div :style="containerStyle" style="display: flex">
    <img
      class="avatar-img"
      src="@/assets/referral/sprite-8.png"
      :style="imgStyle"
    />
  </div>
</template>

<script lang="ts">
import { computed, PropType } from 'vue';

export default {
  name: 'avatar',
  props: {
    user: {
      type: Object as PropType<{ avatar?: string }>,
      required: false,
    },
    size: {
      type: Number,
      default: 32,
      required: false,
    },
    fill: {
      type: String,
    },
  },
  setup(props: any) {
    const imgStyle = computed(() => {
      return `object-position: ${
        -(Number(props.user?.avatar || 1) - 1) * props.size
      }px 0; width:${props.size}px; height:${props.size}px`;
    });
    const containerStyle = computed(() => {
      return `width:${props.size}px; height:${props.size}px`;
    });
    return {
      imgStyle,
      containerStyle,
    };
  },
};
</script>

<style>
.avatar-img {
  object-fit: cover;
}
</style>
