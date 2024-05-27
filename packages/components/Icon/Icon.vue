<script setup lang="ts">
import { omit } from "lodash-es";
import type { IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
defineOptions({
  name: "ErIcon",
  inheritAttrs: false,
});
const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ["type", "color"]));
</script>

<template>
  <i class="er-icon">
    <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
  </i>
</template>

<style></style>
