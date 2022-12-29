import React, { useContext } from "react";
import { ContextValue } from "../../lib/InputChips";
import { Wrapper, Title, Tip } from "./styled";

const TitleContainer = () => {

  const { id, title, tip } = useContext(ContextValue);

  return (
    <Wrapper>
      <Title htmlFor={id}>{title ?? ""}</Title>
      <Tip>{tip ? `※ ${tip}` : ""}</Tip>
    </Wrapper>
  );
}

export default TitleContainer;

