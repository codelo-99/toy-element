<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import ErIcon from "../Icon/Icon.vue";
import { throttle } from "lodash-es";

defineOptions({
  name: "ErButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});
const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="er-button"
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
    @click="
      (e: MouseEvent) =>
        props.useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <slot></slot>
    <slot v-if="icon" name="icon">
      <ErIcon :icon="icon"></ErIcon>
    </slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
