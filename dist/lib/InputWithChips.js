var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import TitleContainer from "../containers/TitleContainer";
import InputContainer from "../containers/InputContainer";
import ChipContainer from "../containers/ChipContainer";
var InputWithChips = function (props) {
    var title = props.title, keywords = props.keywords, placeholder = props.placeholder, tip = props.tip, onAdd = props.onAdd, onDelete = props.onDelete;
    return (_jsxs(Wrapper, { children: [_jsx(TitleContainer, { title: title, tip: tip }), _jsx(InputContainer, { placeholder: placeholder, onAdd: onAdd }), _jsx(ChipContainer, { keywords: keywords, onDelete: onDelete })] }));
};
export default InputWithChips;
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n\n  flex-direction: column;\n  align-items: flex-start;\n\n  position: relative;\n  gap: 16px;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n\n  flex-direction: column;\n  align-items: flex-start;\n\n  position: relative;\n  gap: 16px;\n  width: 100%;\n"])));
var templateObject_1;
