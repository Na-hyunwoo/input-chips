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
import { TitleContainer, ChipContainer, InputContainer, } from "../containers";
import { Wrapper } from "./styled";
import { Context } from "./context";
/**
 * @param {string} props.id string key for input-label coupling
 * @param {string} props.title enter your input label
 * @param {string} props.tip enter tip for using input. It's located next to title.
 * @param {string} props.placeholder enter the placeholder showed by input
 * @param {string[]} props.keywords it will return pretty chips
 * @param {function props.onAdd(arg0: string) : void} props.onAdd this will send you a keyword, so you should manage it using hook like useState.
 * @param {function props.onDelete(arg0: string) : void} props.onDeletethis this will send you a keyword, so you should manage it using hook like useState.
 * @param {boolean} props.disabled true if you want to make disable input
 * @param {number} props.maxLength
 * @param {number} props.minLength
 * @param {string} props.name
 * @param {boolean} props.readonly
 * @param {boolean} props.required
 * @param {string} props.background
 * @param {string} props.border
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
      border={`#987543`}
      background={`#957482`}
    />
  );
 * ```
 */
export var InputChips = function (_a) {
    var id = _a.id, title = _a.title, _b = _a.keywords, keywords = _b === void 0 ? [] : _b, placeholder = _a.placeholder, tip = _a.tip, onAdd = _a.onAdd, onDelete = _a.onDelete, _c = _a.disabled, disabled = _c === void 0 ? false : _c, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, readonly = _a.readonly, required = _a.required, _d = _a.background, background = _d === void 0 ? "#F2F7FF" : _d, _e = _a.border, border = _e === void 0 ? "#3784F6" : _e;
    var contextValue = {
        id: id,
        title: title,
        keywords: keywords,
        placeholder: placeholder,
        tip: tip,
        onAdd: onAdd,
        onDelete: onDelete,
        disabled: disabled,
        maxLength: maxLength,
        minLength: minLength,
        name: name,
        readonly: readonly,
        required: required,
        background: background,
        border: border,
    };
    return (_jsx(Context.Provider, __assign({ value: contextValue }, { children: _jsxs(Wrapper, { children: [_jsx(TitleContainer, {}), _jsx(InputContainer, {}), _jsx(ChipContainer, {})] }) })));
};
export default InputChips;
