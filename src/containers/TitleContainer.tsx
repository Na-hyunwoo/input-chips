import React from "react";
import styled from "styled-components";

interface Props {
  title: string,
  tip: string
}

const TitleContainer = (props: Props) => {

  const { title, tip } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Tip>{tip.length > 0 && tip}</Tip>
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

const Title = styled.p`
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