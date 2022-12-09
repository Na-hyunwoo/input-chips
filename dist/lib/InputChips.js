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
import styled from "styled-components";
import { createContext } from "react";
import { TitleContainer, ChipContainer, InputContainer } from "../containers";
// compound component pattern을 적용해볼까 ?
// 함수만 리턴하게도 사용할 수 있구나. 거기서 발전한게 커스텀 훅 패턴이구나. 
export var InputChips = function (_a) {
    var id = _a.id, title = _a.title, _b = _a.keywords, keywords = _b === void 0 ? [] : _b, placeholder = _a.placeholder, tip = _a.tip, onAdd = _a.onAdd, onDelete = _a.onDelete, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    var contextValue = { id: id, title: title, keywords: keywords, placeholder: placeholder, tip: tip, onAdd: onAdd, onDelete: onDelete, disabled: disabled };
    return (_jsx(Context.Provider, __assign({ value: contextValue }, { children: _jsxs(Wrapper, { children: [_jsx(TitleContainer, {}), _jsx(InputContainer, {}), _jsx(ChipContainer, {})] }) })));
};
export var Context = createContext({
    id: "",
    title: "",
    keywords: [""],
    placeholder: "",
    tip: "",
    onAdd: function () { },
    onDelete: function () { },
    disabled: false
});
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  position: relative;\n  gap: 16px;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  position: relative;\n  gap: 16px;\n  width: 100%;\n"])));
var templateObject_1;
