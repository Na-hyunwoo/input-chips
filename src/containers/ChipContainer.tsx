import styled from "styled-components";
import Chip from "../components/Chip";

interface Props {
  keywords: string[],
  onDelete: (arg0: string) => void,
}

const ChipContainer = (props: Props) => {

  const { keywords, onDelete } = props;

  return (
    <ChipWrapper>
      {keywords.map((keyword, index) => (
        <Chip 
          key={keyword + index} 
          keyword={keyword} 
          onDelete={onDelete}
        />
      ))}
    </ChipWrapper>
  )
}

export default ChipContainer;

const ChipWrapper = styled.div`
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


