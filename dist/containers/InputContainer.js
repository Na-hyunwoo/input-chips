var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { useContext, useState } from "react";
import { XCircleContainer } from "../containers";
import { Context } from "../lib/InputChips";
var InputContainer = function () {
    var _a = useContext(Context), id = _a.id, placeholder = _a.placeholder, onAdd = _a.onAdd, disabled = _a.disabled;
    var _b = useState(""), inputValue = _b[0], setInputValue = _b[1];
    var handleChangeInputValue = function (e) {
        setInputValue(e.currentTarget.value);
    };
    var handleEnterKeyDown = function (e) {
        if (e.key === "Enter" && inputValue.length > 0 && e.nativeEvent.isComposing === false) {
            e.preventDefault();
            onAdd(inputValue);
            setInputValue("");
        }
    };
    var handleXButton = function () {
        setInputValue("");
    };
    return (_jsxs(Wrapper, { children: [inputValue.length > 0 &&
                _jsx(XCircleContainer, { onXButton: handleXButton }), _jsx(Input, { id: id, placeholder: placeholder, value: inputValue, onChange: handleChangeInputValue, onKeyDownCapture: handleEnterKeyDown, disabled: disabled })] }));
};
export default InputContainer;
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  width: 100%;\n"], ["\n  position: relative;\n\n  width: 100%;\n"])));
var Input = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #F2F7FF;\n\n  border-radius: 8px;\n  width: 100%;\n  resize: none;\n  padding: 8px 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  color: #3B3F4E;\n\n  border: 0;\n  outline: 0;\n\n  &::placeholder {\n    color: #C4C9D7;\n  }\n\n  &:focus {\n    padding: 7px 15px;\n    border: 1px solid #3784F6;\n  }\n"], ["\n  background: #F2F7FF;\n\n  border-radius: 8px;\n  width: 100%;\n  resize: none;\n  padding: 8px 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  color: #3B3F4E;\n\n  border: 0;\n  outline: 0;\n\n  &::placeholder {\n    color: #C4C9D7;\n  }\n\n  &:focus {\n    padding: 7px 15px;\n    border: 1px solid #3784F6;\n  }\n"])));
var templateObject_1, templateObject_2;
