import React from "react";
import Close from "../assets/icons/Close";
import { Wrapper, Keyword } from "../components/Chip/styled";

export interface Props {
  keyword: string;
  onDelete: (arg0: string) => void;
}

const Chip = (props: Props) => {
  const { keyword, onDelete } = props;

  return (
    <Wrapper>
      <Keyword>{keyword}</Keyword>
      <Close onClick={() => onDelete(keyword)} />
    </Wrapper>
  );
};

export default Chip;
