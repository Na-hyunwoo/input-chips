import { useContext } from "react";
import styled from "styled-components";
import Chip from "../components/Chip";
import { Context } from "../lib/InputChips";


const ChipContainer = () => {

  const { keywords } = useContext(Context);

  return (
    <Wrapper>
      {keywords.map((keyword, index) => (
        <Chip 
          key={keyword + index} 
          keyword={keyword} 
        />
      ))}
    </Wrapper>
  )
}

export default ChipContainer;

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


