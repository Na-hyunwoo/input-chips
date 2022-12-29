import React, { useContext } from "react";
import Close from "../../assets/icons/Close";
import { ContextValue } from "../../lib/InputChips";
import { Wrapper, Keyword } from "./styled";

export interface Props {
  keyword: string;
}

const Chip = ({ keyword }: Props) => {
  const { onDelete, background } = useContext(ContextValue);

  return (
    <Wrapper background={background}>
      <Keyword>{keyword}</Keyword>
      <Close onClick={() => onDelete(keyword)} />
    </Wrapper>
  );
};

export default Chip;
