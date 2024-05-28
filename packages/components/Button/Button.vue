<script setup lang="ts">
import { computed, inject, ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import ErIcon from "../Icon/Icon.vue";
import { BUTTON_GROUP_CTX_KEY } from "./constants.ts";
defineOptions({
  name: "ErButton",
});
const emits = defineEmits<ButtonEmits>();
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});
const ctx = inject(BUTTON_GROUP_CTX_KEY);
const size = computed(() => ctx?.size ?? props.size ?? "");
const type = computed(() => ctx?.type ?? props.type ?? "");
const disabled = computed(() => ctx?.disabled || props.disabled || false);

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0",
}));

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
        [`er-button--${type}`]: type,
        [`er-button--${size}`]: size,

        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': disabled,
        'is-loading': props.loading,
      },
    ]"
    :type="props.tag === 'button' ? props.nativeType : void 0"
    :disabled="disabled || props.loading ? true : void 0"
    @click="
      (e: MouseEvent) =>
        props.useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading"
        ><ErIcon
          :style="iconStyle"
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          spin
        ></ErIcon
      ></slot>
    </template>
    <slot v-if="icon && !loading" name="icon">
      <ErIcon :style="iconStyle" :icon="icon"></ErIcon>
    </slot>

    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
