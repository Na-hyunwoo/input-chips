var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import XCircle from "../assets/icons/XCircle";
var XCircleContainer = function (props) {
    var onXButton = props.onXButton;
    return (_jsx(Wrapper, { children: _jsx(XCircle, { onClick: onXButton }) }));
};
export default XCircleContainer;
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 13px;\n\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 13px;\n\n  cursor: pointer;\n"])));
var templateObject_1;
