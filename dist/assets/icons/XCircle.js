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
var Close = function (props) {
    var onClick = props.onClick;
    return (_jsxs("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", onClick: onClick }, { children: [_jsx("g", __assign({ clipPath: "url(#clip0_14511_7907)" }, { children: _jsx("path", { d: "M10 5.99998L6.00004 9.99998M6.00004 5.99998L10 9.99998M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z", stroke: "#72777A", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })), _jsx("defs", { children: _jsx("clipPath", __assign({ id: "clip0_14511_7907" }, { children: _jsx("rect", { width: "16", height: "16", fill: "white" }) })) })] })));
};
export default Close;
