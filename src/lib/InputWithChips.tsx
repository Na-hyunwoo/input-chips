import React from "react";
import styled from "styled-components";
import { Close } from "../assets";

interface Props {
  title: string,
  enteredKeywords: Array<string>,
  placeholder: string,
  tip: string,
  handleAdd: (arg0: string) => void,
  handleDelete: (arg0: string) => void,
}

const InputWithChips = (props: Props) => {

  const { title, enteredKeywords, placeholder, tip,  handleAdd, handleDelete } = props;

  const [inputValue, setInputValue] = React.useState("");

  const handleChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0 && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      handleAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <InputWrapper>
      <LabelWrapper>
        <InputLabel>{title}</InputLabel>
        <TipText>{tip.length > 0 && tip}</TipText>
      </LabelWrapper>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeInputValue}
        onKeyDownCapture={handleEnterKeyDown}
      />
      <ChipWrapper>
        {enteredKeywords.map((keyword, index) => (
          <Chip key={keyword + index} >
            <span>{keyword}</span>
            <CloseButton onClick={() => handleDelete(keyword)}/>
          </Chip>
        ))}
      </ChipWrapper>
    </InputWrapper>
  );
}

export default InputWithChips;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  justify-content: flex-start;
  display: flex;
  gap: 6px;
`;

const TipText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #83879D;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: flex-start;

  position: relative;
  gap: 16px;
  width: 100%;
`;

const InputLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #505467;
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

  &::placeholder {
    color: #C4C9D7;
  }

  &:focus {
    padding: 7px 15px;
    border: 1px solid #3784F6;
  }
`;

const ChipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px 4px;
  margin-top: 4px;
`;

const Chip = styled.button`
  display: flex;
  align-items: center;

  background-color: #FFFFFF;

  padding: 4px 12px;
  border: 1px solid #D1D7ED;
  border-radius: 30px;
  gap: 4px;

  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  svg {
    width: 18px;
    height: 18px;
    flex: 0 0 18px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }

  &:hover {
    background-color: #F2F7FF;
  }
`;

const CloseButton = styled(Close)`
  cursor: pointer;
`;
