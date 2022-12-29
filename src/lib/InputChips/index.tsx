import { createContext } from "react";
import {
  TitleContainer,
  ChipContainer,
  InputContainer,
} from "../../containers";
import { Wrapper } from "./styled";

interface Props {
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

/**
 * @param {string} props.id string key for input-label coupling
 * @param {string} props.title enter your input label
 * @param {string} props.tip enter tip for using input. It's located next to title. 
 * @param {string} props.placeholder enter the placeholder showed by input
 * @param {string[]} props.keywords it will return pretty chips
 * @param {function props.onAdd(arg0: string) : void} props.onAdd this will send you a keyword, so you should manage it using hook like useState.
 * @param {function props.onDelete(arg0: string) : void} props.onDeletethis this will send you a keyword, so you should manage it using hook like useState.
 * @param {boolean} props.disabled true if you want to make disable input
 * @param {number} props.maxLength
 * @param {number} props.minLength
 * @param {string} props.name
 * @param {boolean} props.readonly 
 * @param {boolean} props.required
 * @param {string} props.background
 * @param {string} props.border
 * @example
 * ```jsx
  const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({ type: "ADD", keyword: keyword });
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({ type: "DELETE", keyword: keyword });
  }

  return (
    <InputChips 
      id={inputChips.title}
      title={inputChips.title} 
      tip={inputChips.tip}
      placeholder={inputChips.placeholder}
      keywords={keywords}
      onDelete={handleDelete}
      onAdd={handleAdd}
      border={`#987543`}
      background={`#957482`}
    />
  );
 * ```
 */
export const InputChips = ({
  id,
  title,
  keywords = [],
  placeholder,
  tip,
  onAdd,
  onDelete,
  disabled = false,
  maxLength,
  minLength,
  name,
  readonly,
  required,
  background = "#F2F7FF",
  border = "#3784F6",
}: Props) => {
  const contextValue = {
    id,
    title,
    keywords,
    placeholder,
    tip,
    onAdd,
    onDelete,
    disabled,
    maxLength,
    minLength,
    name,
    readonly,
    required,
    background,
    border,
  };

  return (
    <Context.Provider value={contextValue}>
      <Wrapper>
        <TitleContainer />
        <InputContainer />
        <ChipContainer />
      </Wrapper>
    </Context.Provider>
  );
};

export const ContextValue = createContext<Props>({
  id: "",
  title: "",
  keywords: [""],
  placeholder: "",
  tip: "",
  onAdd: () => {},
  onDelete: () => {},
  disabled: false,
  background: "",
  border: "",
});
