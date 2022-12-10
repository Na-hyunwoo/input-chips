import React from "react";
import styled from "styled-components";
import Chip from "./Chip";

interface Props {
  keywords: string[]
  onDelete: (arg0: string) => void,
}

const ChipGroup = ({ keywords, onDelete }: Props) => {
  return (
    <Wrapper>
      {keywords.map((keyword) => (
        <Chip 
          key={keyword} 
          keyword={keyword} 
          onDelete={onDelete}
        />
      ))}
    </Wrapper>
  )
}

export default ChipGroup;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px 4px;
  margin-top: 4px;
`;


