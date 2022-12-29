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
import Close from "../../assets/icons/Close";
import { Context } from "../../InputChips";
import { Wrapper, Keyword } from "./styled";
var Chip = function (_a) {
    var keyword = _a.keyword;
    var _b = useContext(Context), onDelete = _b.onDelete, background = _b.background;
    return (_jsxs(Wrapper, __assign({ background: background }, { children: [_jsx(Keyword, { children: keyword }), _jsx(Close, { onClick: function () { return onDelete(keyword); } })] })));
};
export default Chip;
