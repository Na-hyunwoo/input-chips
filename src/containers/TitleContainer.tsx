import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../lib/InputChips";

const TitleContainer = () => {

  const { id, title, tip } = useContext(Context);

  return (
    <Wrapper>
      <Title htmlFor={id}>{title ?? ""}</Title>
      <Tip>{tip ?? ""}</Tip>
    </Wrapper>
  );
}

export default TitleContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  justify-content: flex-start;
  display: flex;
  gap: 6px;
`;

const Title = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #505467;

  margin: 0;
`;

const Tip = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #83879D;

  margin: 0;
`;