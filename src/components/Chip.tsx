import React from "react";
import styled from "styled-components";
import Close from "../assets/icons/Close";

interface Props {
  keyword: string,
  onDelete: (arg0: string) => void,
}

const Chip = (props: Props) => {

  const { keyword, onDelete } = props;

  return (
    <Wrapper>
      <Keyword>{keyword}</Keyword>
      <Close onClick={() => onDelete(keyword)}/>
    </Wrapper>
  )
}

export default Chip;

const Wrapper = styled.button`
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
    background-color: #F2F7FF;
  }
`;

const Keyword = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;