var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import { Close } from "../assets";
var InputWithChips = function (props) {
    var title = props.title, enteredKeywords = props.enteredKeywords, placeholder = props.placeholder, tip = props.tip, handleAdd = props.handleAdd, handleDelete = props.handleDelete;
    var _a = React.useState(""), inputValue = _a[0], setInputValue = _a[1];
    var handleChangeInputValue = function (e) {
        setInputValue(e.currentTarget.value);
    };
    var handleEnterKeyDown = function (e) {
        if (e.key === "Enter" && inputValue.length > 0 && e.nativeEvent.isComposing === false) {
            e.preventDefault();
            handleAdd(inputValue);
            setInputValue("");
        }
    };
    return (_jsxs(InputWrapper, { children: [_jsxs(LabelWrapper, { children: [_jsx(InputLabel, { children: title }), _jsx(TipText, { children: tip.length > 0 && tip })] }), _jsx(Input, { placeholder: placeholder, value: inputValue, onChange: handleChangeInputValue, onKeyDownCapture: handleEnterKeyDown }), _jsx(ChipWrapper, { children: enteredKeywords.map(function (keyword, index) { return (_jsxs(Chip, { children: [_jsx("span", { children: keyword }), _jsx(CloseButton, { onClick: function () { return handleDelete(keyword); } })] }, keyword + index)); }) })] }));
};
export default InputWithChips;
var LabelWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  justify-content: flex-start;\n  display: flex;\n  gap: 6px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  justify-content: flex-start;\n  display: flex;\n  gap: 6px;\n"])));
var TipText = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #83879D;\n"], ["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #83879D;\n"])));
var InputWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n\n  flex-direction: column;\n  align-items: flex-start;\n\n  position: relative;\n  gap: 16px;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n\n  flex-direction: column;\n  align-items: flex-start;\n\n  position: relative;\n  gap: 16px;\n  width: 100%;\n"])));
var InputLabel = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 26px;\n  color: #505467;\n"], ["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 26px;\n  color: #505467;\n"])));
var Input = styled.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: #F2F7FF;\n\n  border-radius: 8px;\n  width: 100%;\n  resize: none;\n  padding: 8px 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  color: #3B3F4E;\n\n  &::placeholder {\n    color: #C4C9D7;\n  }\n\n  &:focus {\n    padding: 7px 15px;\n    border: 1px solid #3784F6;\n  }\n"], ["\n  background: #F2F7FF;\n\n  border-radius: 8px;\n  width: 100%;\n  resize: none;\n  padding: 8px 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  color: #3B3F4E;\n\n  &::placeholder {\n    color: #C4C9D7;\n  }\n\n  &:focus {\n    padding: 7px 15px;\n    border: 1px solid #3784F6;\n  }\n"])));
var ChipWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 12px 4px;\n  margin-top: 4px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 12px 4px;\n  margin-top: 4px;\n"])));
var Chip = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  background-color: #FFFFFF;\n\n  padding: 4px 12px;\n  border: 1px solid #D1D7ED;\n  border-radius: 30px;\n  gap: 4px;\n\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  svg {\n    width: 18px;\n    height: 18px;\n    flex: 0 0 18px;\n  }\n\n  span {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 26px;\n  }\n\n  &:hover {\n    background-color: #F2F7FF;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  background-color: #FFFFFF;\n\n  padding: 4px 12px;\n  border: 1px solid #D1D7ED;\n  border-radius: 30px;\n  gap: 4px;\n\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  svg {\n    width: 18px;\n    height: 18px;\n    flex: 0 0 18px;\n  }\n\n  span {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 26px;\n  }\n\n  &:hover {\n    background-color: #F2F7FF;\n  }\n"])));
var CloseButton = styled(Close)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
