import styled from "styled-components";
import XCircle from "../assets/icons/XCircle";

interface Props {
  onXButton: () => void,
}

const XCircleContainer = (props: Props) => {

  const { onXButton } = props;

  return (
    <Wrapper>
      <XCircle onClick={onXButton}/>
    </Wrapper>
  )
}

export default XCircleContainer;

const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 13px;

  cursor: pointer;
`;