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
/**
 * @param {string} props.id string key for input-label coupling
 * @param {string} props.title enter your input label
 * @param {string} props.tip enter tip for using input. It's located next to title.
 * @param {string} props.placeholder enter the placeholder showed by input
 * @param {string[]} props.keywords it will return pretty chips
 * @param {function props.onAdd(arg0: string) : void} props.onAdd this will send you a keyword, so you should manage it using hook like useState.
 * @param {function props.onDelete(arg0: string) : void} props.onDeletethis this will send you a keyword, so you should manage it using hook like useState.
 * @param {boolean} props.disabled true if you want to make disable input
 * @param {boolean} props.autoFocus
 * @param {number} props.maxLength
 * @param {number} props.minLength
 * @param {string} props.name
 * @param {boolean} props.readonly
 * @param {boolean} props.required
 * @example
 * ```jsx
  const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({ type: "ADD", keyword: keyword });
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({ type: "DELETE", keyword: keyword });
  }

  return (
    <InputChips
      id={inputChips.title}
      title={inputChips.title}
      tip={inputChips.tip}
      placeholder={inputChips.placeholder}
      keywords={keywords}
      onDelete={handleDelete}
      onAdd={handleAdd}
    />
  );
 * ```
 */
export var InputChips = function (_a) {
    var id = _a.id, title = _a.title, _b = _a.keywords, keywords = _b === void 0 ? [] : _b, placeholder = _a.placeholder, tip = _a.tip, onAdd = _a.onAdd, onDelete = _a.onDelete, _c = _a.disabled, disabled = _c === void 0 ? false : _c, autoFocus = _a.autoFocus, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, readonly = _a.readonly, required = _a.required;
    var contextValue = { id: id, title: title, keywords: keywords, placeholder: placeholder, tip: tip, onAdd: onAdd, onDelete: onDelete, disabled: disabled, autoFocus: autoFocus, maxLength: maxLength, minLength: minLength, name: name, readonly: readonly, required: required };
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
