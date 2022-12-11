import styled from "styled-components";
import { FormEvent, KeyboardEvent, useContext, useState } from "react";
import { XCircleContainer } from "../containers";
import { Context } from "../lib/InputChips";

const InputContainer = () => {

  const { id, placeholder, onAdd, disabled, autoFocus, maxLength, minLength, name, readonly, required } = useContext(Context);

  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeInputValue}
        onKeyDownCapture={handleEnterKeyDown}
        disabled={disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        readOnly={readonly}
        required={required}
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
  outline: 0;

  &::placeholder {
    color: #C4C9D7;
  }

  &:focus {
    padding: 7px 15px;
    border: 1px solid #3784F6;
  }
`;

