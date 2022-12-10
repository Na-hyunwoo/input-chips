import React from "react";
import styled from "styled-components";

interface Props {
  id?: string,
  title?: string,
  tip?: string,
}

const Title = ({ id, title, tip }: Props) => {

  return (
    <Wrapper>
      <TitleLabel htmlFor={id}>{title ?? ""}</TitleLabel>
      <Tip>{tip ? `※ ${tip}` : ""}</Tip>
    </Wrapper>
  );
}

export default Title;

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

const TitleLabel = styled.label`
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