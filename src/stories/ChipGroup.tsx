import React from "react";
import Chip from "./Chip";
import { Wrapper } from "../containers/ChipContainer/styled";

export interface Props {
  keywords: string[];
  onDelete: (arg0: string) => void;
}

const ChipGroup = ({ keywords, onDelete }: Props) => {
  return (
    <Wrapper>
      {keywords.map((keyword) => (
        <Chip key={keyword} keyword={keyword} onDelete={onDelete} />
      ))}
    </Wrapper>
  );
};

export default ChipGroup;
