export interface Props {
    id: string;
    title?: string;
    keywords: Array<string>;
    placeholder?: string;
    tip?: string;
    onAdd: (arg0: string) => void;
    onDelete: (arg0: string) => void;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    name?: string;
    readonly?: boolean;
    required?: boolean;
    background?: string;
    border?: string;
}
