import { jsx as _jsx } from "react/jsx-runtime";
import XCircle from "../../assets/icons/XCircle";
import { Wrapper } from "./styled";
var XCircleContainer = function (props) {
    var onXButton = props.onXButton;
    return (_jsx(Wrapper, { children: _jsx(XCircle, { onClick: onXButton }) }));
};
export default XCircleContainer;
