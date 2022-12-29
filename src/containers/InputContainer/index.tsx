import { FormEvent, KeyboardEvent, useContext, useState } from "react";
import { XCircleContainer } from "..";
import { ContextValue } from "../../lib/InputChips";
import { Wrapper, Input } from "./styled";


const InputContainer = () => {

  const { id, placeholder, onAdd, disabled, maxLength, minLength, name, readonly, required, background, border } = useContext(ContextValue);

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



