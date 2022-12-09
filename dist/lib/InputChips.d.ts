/// <reference types="react" />
interface Props {
    id: string;
    title?: string;
    keywords: Array<string>;
    placeholder?: string;
    tip?: string;
    onAdd: (arg0: string) => void;
    onDelete: (arg0: string) => void;
    disabled?: boolean;
}
export declare const InputChips: ({ id, title, keywords, placeholder, tip, onAdd, onDelete, disabled }: Props) => JSX.Element;
export declare const Context: import("react").Context<Props>;
export {};
