import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { XCircleContainer } from "..";
import { Context } from "../../InputChips/context";
import { Wrapper, Input } from "./styled";
var InputContainer = function () {
    var _a = useContext(Context), id = _a.id, placeholder = _a.placeholder, onAdd = _a.onAdd, disabled = _a.disabled, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, readonly = _a.readonly, required = _a.required, background = _a.background, border = _a.border;
    var _b = useState(""), inputValue = _b[0], setInputValue = _b[1];
    var handleChangeInputValue = function (e) {
        setInputValue(e.currentTarget.value);
    };
    var handleEnterKeyDown = function (e) {
        if (e.key === "Enter" &&
            inputValue.length > 0 &&
            e.nativeEvent.isComposing === false) {
            e.preventDefault();
            onAdd(inputValue);
            setInputValue("");
        }
    };
    var handleXButton = function () {
        setInputValue("");
    };
    return (_jsxs(Wrapper, { children: [inputValue.length > 0 && _jsx(XCircleContainer, { onXButton: handleXButton }), _jsx(Input, { id: id, placeholder: placeholder, value: inputValue, onChange: handleChangeInputValue, onKeyDownCapture: handleEnterKeyDown, disabled: disabled, maxLength: maxLength, minLength: minLength, name: name, readOnly: readonly, required: required, background: background, border: border })] }));
};
export default InputContainer;
