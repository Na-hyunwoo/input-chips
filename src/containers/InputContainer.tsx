import styled from "styled-components";
import { FormEvent, KeyboardEvent, useContext, useState } from "react";
import { XCircleContainer } from "../containers";
import { Context } from "../lib/InputChips";

interface InputProps {
  id: string,
  placeholder?: string,
  value: string,
  onChange(arg0: FormEvent<HTMLInputElement>): void,
  onKeyDownCapture(arg0: KeyboardEvent<HTMLInputElement>): void,
  disabled?: boolean,
  autoFocus?: boolean,
  maxLength?: number,
  minLength?: number, 
  name?: string,
  readOnly?: boolean, 
  required?: boolean,
  background?: string,
  border?: string,
}

const InputContainer = () => {

  const { id, placeholder, onAdd, disabled, autoFocus, maxLength, minLength, name, readonly, required, background, border } = useContext(Context);

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
        background={background}
        border={border}
      />
    </Wrapper>
  )
}

export default InputContainer;

const Wrapper = styled.div`
  position: relative;

  width: 100%;
`;
 
const Input = styled.input<InputProps>`
  background: ${({background}) => background};

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
    border: ${({border}) => `1px solid ${border}`};
  }
`;

