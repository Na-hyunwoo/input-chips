import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Chip } from "../../components";
import { Context } from "../../InputChips";
import { Wrapper } from "./styled";
var ChipContainer = function () {
    var keywords = useContext(Context).keywords;
    return (_jsx(Wrapper, { children: keywords.map(function (keyword, index) { return (_jsx(Chip, { keyword: keyword }, "".concat(keyword, " + ").concat(index))); }) }));
};
export default ChipContainer;
