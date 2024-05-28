import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
  loadingIcon?: string;
}

export interface ButtonEmits {
  (e: "click", value: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}

export interface ButtonGroupProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}
