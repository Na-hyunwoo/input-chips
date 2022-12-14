import React, { useContext } from "react";
import styled from "styled-components";
import Close from "../assets/icons/Close";
import { Context } from "../lib/InputChips";

interface Props {
  keyword: string,
}

const Chip = (props: Props) => {

  const { keyword } = props;
  const { onDelete, background } = useContext(Context);

  return (
    <Wrapper background={background}>
      <Keyword>{keyword}</Keyword>
      <Close onClick={() => onDelete(keyword)}/>
    </Wrapper>
  )
}

export default Chip;

const Wrapper = styled.button<{ background?: string }>`
  display: flex;
  align-items: center;

  background-color: #FFFFFF;

  padding: 4px 12px;
  border: 1px solid #D1D7ED;
  border-radius: 30px;
  gap: 4px;

  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: ${({background}) => background};
  }
`;

const Keyword = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;