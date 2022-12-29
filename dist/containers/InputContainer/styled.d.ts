import { FormEvent, KeyboardEvent } from "react";
interface InputProps {
    id: string;
    placeholder?: string;
    value: string;
    onChange(arg0: FormEvent<HTMLInputElement>): void;
    onKeyDownCapture(arg0: KeyboardEvent<HTMLInputElement>): void;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    name?: string;
    readOnly?: boolean;
    required?: boolean;
    background?: string;
    border?: string;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export {};
