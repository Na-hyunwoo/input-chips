import React, { FormEvent, KeyboardEvent, useState } from "react";
import { XCircleContainer } from "../lib/containers";
import { Wrapper, Input } from "../lib/containers/InputContainer/styled";

export interface Props {
  id: string;
  placeholder?: string;
  onAdd: (arg0: string) => void;
  disabled?: boolean;
  background?: string;
  border?: string;
}

const InputContainer = ({ 
  id, 
  placeholder, 
  onAdd, 
  disabled, 
  background="#F2F7FF", 
  border="#3784F6"
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      inputValue.length > 0 &&
      e.nativeEvent.isComposing === false
    ) {
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
      {inputValue.length > 0 && <XCircleContainer onXButton={handleXButton} />}
      <Input
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeInputValue}
        onKeyDownCapture={handleEnterKeyDown}
        disabled={disabled}
        background={background}
        border={border}
      />
    </Wrapper>
  );
};

export default InputContainer;
