<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "ErButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :class="[
      {
        [`er-button--${props.type}`]: props.type,
        [`er-button--${props.size}`]: props.size,

        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.disabled,
        'is-loading': props.loading,
      },
    ]"
    :type="props.tag === 'button' ? props.nativeType : void 0"
    :disabled="props.disabled || props.loading ? true : void 0"
  >
    123
  </component>
</template>
