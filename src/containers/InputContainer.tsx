import React from "react";
import styled from "styled-components";
import XCircleContainer from "../containers/XCircleContainer";

interface Props {
  placeholder: string,
  onAdd: (arg0: string) => void,
}

const InputContainer = (props: Props) => {

  const { placeholder, onAdd } = props;

  const [inputValue, setInputValue] = React.useState("");

  const handleChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0 && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      onAdd(inputValue);
      setInputValue("");
    }
  };

  const handleXButton = () => {
    setInputValue("");
  };

  return (
    <Wrapper>
      {inputValue.length > 0 &&
        <XCircleContainer onXButton={handleXButton}/>}
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeInputValue}
        onKeyDownCapture={handleEnterKeyDown}
      />
    </Wrapper>
  )
}

export default InputContainer;

const Wrapper = styled.div`
  position: relative;

  width: 100%;
`;

const Input = styled.input`
  background: #F2F7FF;

  border-radius: 8px;
  width: 100%;
  resize: none;
  padding: 8px 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #3B3F4E;

  border: 0;

  &::placeholder {
    color: #C4C9D7;
  }

  &:focus {
    padding: 7px 15px;
    border: 1px solid #3784F6;
  }
`;

