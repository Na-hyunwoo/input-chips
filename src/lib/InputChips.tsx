import { createContext } from "react";
import styled from "styled-components";
import TitleContainer from "../containers/TitleContainer";
import InputContainer from "../containers/InputContainer";
import ChipContainer from "../containers/ChipContainer";

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

// 여기서 Context API를 쓰면 코드가 더 깔끔해보임. prop-drilling을 방지할 수 있으니까. 
// compound component pattern
// 함수만 리턴하게도 사용할 수 있구나. 거기서 발전한게 커스텀 훅 패턴이구나. 
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


