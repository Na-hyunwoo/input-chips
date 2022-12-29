import XCircle from "../../assets/icons/XCircle";
import { Wrapper } from "./styled";

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

