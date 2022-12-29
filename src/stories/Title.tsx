import React from "react";
import {
  Wrapper,
  Title as TitleLabel,
  Tip,
} from "../lib/containers/TitleContainer/styled";

export interface Props {
  id?: string;
  title?: string;
  tip?: string;
}

const Title = ({ id, title, tip }: Props) => {
  return (
    <Wrapper>
      <TitleLabel htmlFor={id}>{title ?? ""}</TitleLabel>
      <Tip>{tip ? `※ ${tip}` : ""}</Tip>
    </Wrapper>
  );
};

export default Title;
