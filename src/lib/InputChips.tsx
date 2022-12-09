import styled from "styled-components";
import { createContext } from "react";
import { TitleContainer, ChipContainer, InputContainer } from "../containers";
interface Props {
  id: string,
  title?: string,
  keywords: Array<string>,
  placeholder?: string,
  tip?: string,
  onAdd: (arg0: string) => void,
  onDelete: (arg0: string) => void,
  disabled?: boolean
}

/**
 * Create an 'Audience component
 * @example
 * ```jsx
 * const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({type: "ADD", keyword: keyword});
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({type: "DELETE", keyword: keyword});
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
    />
  );
 * ```
 */
export const InputChips = ({ id, title, keywords = [], placeholder, tip, onAdd, onDelete, disabled = false }: Props) => {

  const contextValue = { id, title, keywords, placeholder, tip, onAdd, onDelete, disabled };

  return (
    <Context.Provider value={contextValue}>
      <Wrapper>
        <TitleContainer />
        <InputContainer />
        <ChipContainer />
      </Wrapper>
    </Context.Provider>
  );
}

export const Context = createContext<Props>({
  id: "",
  title: "",
  keywords: [""],
  placeholder: "",
  tip: "",
  onAdd: () => {},
  onDelete: () => {},
  disabled: false
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  gap: 16px;
  width: 100%;
`;


