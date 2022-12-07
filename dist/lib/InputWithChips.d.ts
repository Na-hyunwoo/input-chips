/// <reference types="react" />
interface Props {
    title: string;
    keywords: Array<string>;
    placeholder: string;
    tip: string;
    onAdd: (arg0: string) => void;
    onDelete: (arg0: string) => void;
}
declare const InputWithChips: (props: Props) => JSX.Element;
export default InputWithChips;
