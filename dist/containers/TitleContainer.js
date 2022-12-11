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
import { Context } from "../lib/InputChips";
var TitleContainer = function () {
    var _a = useContext(Context), id = _a.id, title = _a.title, tip = _a.tip;
    return (_jsxs(Wrapper, { children: [_jsx(Title, __assign({ htmlFor: id }, { children: title !== null && title !== void 0 ? title : "" })), _jsx(Tip, { children: tip ? "\u203B ".concat(tip) : "" })] }));
};
export default TitleContainer;
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  justify-content: flex-start;\n  display: flex;\n  gap: 6px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  justify-content: flex-start;\n  display: flex;\n  gap: 6px;\n"])));
var Title = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 26px;\n  color: #505467;\n\n  margin: 0;\n"], ["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 26px;\n  color: #505467;\n\n  margin: 0;\n"])));
var Tip = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #83879D;\n\n  margin: 0;\n"], ["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #83879D;\n\n  margin: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
