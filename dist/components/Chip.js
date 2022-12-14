var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import Close from "../assets/icons/Close";
import { Context } from "../lib/InputChips";
var Chip = function (props) {
    var keyword = props.keyword;
    var _a = useContext(Context), onDelete = _a.onDelete, background = _a.background;
    return (_jsxs(Wrapper, __assign({ background: background }, { children: [_jsx(Keyword, { children: keyword }), _jsx(Close, { onClick: function () { return onDelete(keyword); } })] })));
};
export default Chip;
var Wrapper = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  background-color: #FFFFFF;\n\n  padding: 4px 12px;\n  border: 1px solid #D1D7ED;\n  border-radius: 30px;\n  gap: 4px;\n\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  background-color: #FFFFFF;\n\n  padding: 4px 12px;\n  border: 1px solid #D1D7ED;\n  border-radius: 30px;\n  gap: 4px;\n\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var background = _a.background;
    return background;
});
var Keyword = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n"], ["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n"])));
var templateObject_1, templateObject_2;
