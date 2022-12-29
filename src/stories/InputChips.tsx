import React from "react";
import Title from "./Title";
import ChipGroup from "./ChipGroup";
import Input from "./Input";
import { Wrapper } from "../lib/InputChips/styled";

export interface Props {
  id: string,
  title?: string,
  keywords: Array<string>,
  placeholder?: string,
  tip?: string,
  onAdd: (arg0: string) => void,
  onDelete: (arg0: string) => void,
  disabled?: boolean
}

export const InputChips = ({ id, title, keywords = [], placeholder, tip, onAdd, onDelete, disabled = false }: Props) => {

  return (
    <Wrapper>
      <Title 
        id={id}
        title={title}
        tip={tip}
      />
      <Input 
        id={id}
        placeholder={placeholder}
        onAdd={onAdd}
        disabled={disabled}
      />
      <ChipGroup 
        keywords={keywords}
        onDelete={onDelete}
      />
    </Wrapper>
  );
}


