var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import Chip from "../components/Chip";
var ChipContainer = function (props) {
    var keywords = props.keywords, onDelete = props.onDelete;
    return (_jsx(ChipWrapper, { children: keywords.map(function (keyword, index) { return (_jsx(Chip, { keyword: keyword, onDelete: onDelete }, keyword + index)); }) }));
};
export default ChipContainer;
var ChipWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 12px 4px;\n  margin-top: 4px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 12px 4px;\n  margin-top: 4px;\n"])));
var templateObject_1;
