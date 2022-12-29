import { useContext } from "react";
import { Chip } from "../../components";
import { ContextValue } from "../../lib/InputChips";
import { Wrapper } from "./styled";

const ChipContainer = () => {

  const { keywords } = useContext(ContextValue);

  return (
    <Wrapper>
      {keywords.map((keyword, index) => (
        <Chip 
          key={`${keyword} + ${index}`} 
          keyword={keyword} 
        />
      ))}
    </Wrapper>
  )
}

export default ChipContainer;


