var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  width: 100%;\n"], ["\n  position: relative;\n\n  width: 100%;\n"])));
export var Input = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n\n  border-radius: 8px;\n  width: 100%;\n  resize: none;\n  padding: 8px 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  color: #3b3f4e;\n\n  border: 0;\n  outline: 0;\n\n  &::placeholder {\n    color: #c4c9d7;\n  }\n\n  &:focus {\n    padding: 7px 15px;\n    border: ", ";\n  }\n"], ["\n  background: ", ";\n\n  border-radius: 8px;\n  width: 100%;\n  resize: none;\n  padding: 8px 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  color: #3b3f4e;\n\n  border: 0;\n  outline: 0;\n\n  &::placeholder {\n    color: #c4c9d7;\n  }\n\n  &:focus {\n    padding: 7px 15px;\n    border: ", ";\n  }\n"])), function (_a) {
    var background = _a.background;
    return background;
}, function (_a) {
    var border = _a.border;
    return border && "1px solid ".concat(border);
});
var templateObject_1, templateObject_2;
