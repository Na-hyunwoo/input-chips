var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
var TitleContainer = function (props) {
    var title = props.title, tip = props.tip;
    return (_jsxs(Wrapper, { children: [_jsx(Title, { children: title }), _jsx(Tip, { children: tip.length > 0 && tip })] }));
};
export default TitleContainer;
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  justify-content: flex-start;\n  display: flex;\n  gap: 6px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  width: 100%;\n  justify-content: flex-start;\n  display: flex;\n  gap: 6px;\n"])));
var Title = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 26px;\n  color: #505467;\n\n  margin: 0;\n"], ["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 26px;\n  color: #505467;\n\n  margin: 0;\n"])));
var Tip = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #83879D;\n\n  margin: 0;\n"], ["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #83879D;\n\n  margin: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
