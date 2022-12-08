import React from "react";
import styled from "styled-components";
import TitleContainer from "../containers/TitleContainer";
import InputContainer from "../containers/InputContainer";
import ChipContainer from "../containers/ChipContainer";

interface Props {
  title: string,
  keywords: Array<string>,
  placeholder: string,
  tip: string,
  onAdd: (arg0: string) => void,
  onDelete: (arg0: string) => void,
}

const InputChips = (props: Props) => {

  const { title, keywords, placeholder, tip,  onAdd, onDelete } = props;

  return (
    <Wrapper>
      <TitleContainer title={title} tip={tip} />
      <InputContainer placeholder={placeholder} onAdd={onAdd} />
      <ChipContainer keywords={keywords} onDelete={onDelete}/>
    </Wrapper>
  );
}

export default InputChips;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  gap: 16px;
  width: 100%;
`;


