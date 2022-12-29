import React, { FormEvent, KeyboardEvent, useState } from "react";
import { XCircleContainer } from "../containers";
import { Wrapper, Input } from "../containers/InputContainer/styled";

export interface Props {
  id: string,
  placeholder?: string,
  onAdd: (arg0: string) => void,
  disabled?: boolean,
}

const InputContainer = ({ id, placeholder, onAdd, disabled }: Props) => {

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
      />
    </Wrapper>
  )
}

export default InputContainer;

