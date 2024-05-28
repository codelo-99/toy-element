import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./types";
export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> = Symbol();

export interface ButtonGroupProps {
  size?: string;
  type?: string;
  disabled?: string;
}
