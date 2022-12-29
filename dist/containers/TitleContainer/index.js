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
import { Context } from "../../InputChips/context";
import { Wrapper, Title, Tip } from "./styled";
var TitleContainer = function () {
    var _a = useContext(Context), id = _a.id, title = _a.title, tip = _a.tip;
    return (_jsxs(Wrapper, { children: [_jsx(Title, __assign({ htmlFor: id }, { children: title !== null && title !== void 0 ? title : "" })), _jsx(Tip, { children: tip ? "\u203B ".concat(tip) : "" })] }));
};
export default TitleContainer;
