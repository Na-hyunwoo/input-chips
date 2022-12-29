import React from "react";
import { Close } from "../lib/assets/icons"
import { Wrapper, Keyword } from "../lib/components/Chip/styled";

export interface Props {
  keyword: string;
  onDelete: (arg0: string) => void;
  background?: string;
}

const Chip = ({ 
  keyword, 
  onDelete, 
  background= "#F2F7FF"
}: Props) => {

  return (
    <Wrapper background={background}>
      <Keyword>{keyword}</Keyword>
      <Close onClick={() => onDelete(keyword)} />
    </Wrapper>
  );
};

export default Chip;
