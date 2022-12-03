/// <reference types="react" />
interface Props {
    title: string;
    enteredKeywords: Array<string>;
    placeholder: string;
    tip: string;
    handleAdd: (arg0: string) => void;
    handleDelete: (arg0: string) => void;
}
declare const InputWithChips: (props: Props) => JSX.Element;
export default InputWithChips;
