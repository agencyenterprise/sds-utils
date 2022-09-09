"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ThemeOptionsEnum;
(function (ThemeOptionsEnum) {
    ThemeOptionsEnum["Light"] = "light";
    ThemeOptionsEnum["Dark"] = "dark";
})(ThemeOptionsEnum || (ThemeOptionsEnum = {}));
var PositionOptionsEnum;
(function (PositionOptionsEnum) {
    PositionOptionsEnum["Relative"] = "relative";
    PositionOptionsEnum["Absolute"] = "absolute";
    PositionOptionsEnum["Fixed"] = "fixed";
})(PositionOptionsEnum || (PositionOptionsEnum = {}));
var LocationOptionsEnum;
(function (LocationOptionsEnum) {
    LocationOptionsEnum["TopLeft"] = "topleft";
    LocationOptionsEnum["TopRight"] = "topright";
    LocationOptionsEnum["TopCenter"] = "topcenter";
    LocationOptionsEnum["BottomLeft"] = "bottomleft";
    LocationOptionsEnum["BottomRight"] = "bottomright";
    LocationOptionsEnum["BottomCenter"] = "bottomcenter";
})(LocationOptionsEnum || (LocationOptionsEnum = {}));
function handleMouseEnter(event) {
    var upperContainer = document.getElementById('upper-container');
    upperContainer === null || upperContainer === void 0 ? void 0 : upperContainer.classList.add('sds-utils-badge-block');
    upperContainer === null || upperContainer === void 0 ? void 0 : upperContainer.classList.remove('sds-utils-badge-none');
}
function handleMouseLeave(event) {
    var upperContainer = document.getElementById('upper-container');
    upperContainer === null || upperContainer === void 0 ? void 0 : upperContainer.classList.add('sds-utils-badge-none');
    upperContainer === null || upperContainer === void 0 ? void 0 : upperContainer.classList.remove('sds-utils-badge-block');
}
var _handleMouseEnter = "function handleMouseEnter(el) {\n  const upperContainer = document.getElementById('upper-container');\n  upperContainer.classList.add(\"sds-utils-badge-block\");\n  upperContainer.classList.remove(\"sds-utils-badge-none\");\n}";
var _handleMouseLeave = "function handleMouseLeave(el) {\n  const upperContainer = document.getElementById('upper-container');\n  upperContainer.classList.add(\"sds-utils-badge-none\");\n  upperContainer.classList.remove(\"sds-utils-badge-block\");\n}";
var primaryMessage = "A\n    <a href=\"https://ae.studio/same-day-skunkworks/#sds-badge\" class=\"utils-underline\" target=\"_blank\" rel=\"noreferrer\">SDS</a>\n    Project \u2022 Made with\n    <img\n      src=\"https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/heart.gif\"\n      alt=\"heart\"\n      width=\"10\"\n      height=\"10\"\n      class=\"sds-utils-badge-inline\"> by <a href=\"https://ae.studio/#sds-badge\" target=\"_blank\" class=\"utils-underline\">Agency Enterprise</a>";
var secondaryMessages = [
    "We\u2019re on a mission to build something agency increasing (almost) every day.",
    "<a href=\"https://ae.studio/same-day-skunkworks#sds-badge\" target=\"_blank\" rel=\"noreferrer\" class=\"utils-underline\">Learn more \u2192</a>",
];
var terciaryMessage = "<a href=\"https://twitter.com/DailySkunkwork#sds-badge\" target=\"_blank\" rel=\"noreferrer\" class=\"sds-twitter-link\"><svg fill=\"#000000\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 30 30\" width=\"15px\" height=\"15px\">    <path d=\"M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z\"/></svg> @DailySkunkwork</a>";
function SDSUtilsBadge(_a) {
    var location = _a.location, position = _a.position, _b = _a.theme, theme = _b === void 0 ? ThemeOptionsEnum.Light : _b, expandable = _a.expandable, target = _a.target;
    return __awaiter(this, void 0, void 0, function () {
        var cssLink, handleMouseEnterScript, handleMouseLeaveScript, targetElement, wrapper, upperContainer, i, upperContainerParagraph, terciaryMessageContainer, upperContainerDivider, wrapperParagraph;
        return __generator(this, function (_c) {
            cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href =
                'https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@1.2.10/dist/packages/badge/src/lib/badge.css';
            document.head.appendChild(cssLink);
            handleMouseEnterScript = document.createElement('script');
            handleMouseEnterScript.text = _handleMouseEnter;
            handleMouseLeaveScript = document.createElement('script');
            handleMouseLeaveScript.text = _handleMouseLeave;
            document.head.appendChild(handleMouseEnterScript);
            document.head.appendChild(handleMouseLeaveScript);
            targetElement = document.body;
            if (target) {
                // If we do have a target, use it to append the badge.
                if (document.getElementById(target)) {
                    targetElement = document.getElementById(target);
                }
            }
            wrapper = document.createElement('div');
            if (position === PositionOptionsEnum.Relative) {
                wrapper.classList.add('relative');
            }
            if ((position === PositionOptionsEnum.Absolute ||
                position === PositionOptionsEnum.Fixed) &&
                location &&
                Object.values(LocationOptionsEnum).includes(location)) {
                wrapper.classList.add('sds-utils-badge-wrapper', position, location);
            }
            else {
                throw new Error('Location is not one of: topleft, topright, topcenter,  bottomleft, bottomright, bottomcenter');
            }
            if (theme === ThemeOptionsEnum.Light)
                wrapper.classList.add('light');
            if (theme === ThemeOptionsEnum.Dark)
                wrapper.classList.add('dark');
            // In the case we want to expand the badge, we will configure the plugin to append the secondary messages
            if (expandable) {
                upperContainer = document.createElement('div');
                upperContainer.classList.add('sds-utils-badge-none');
                upperContainer.id = 'upper-container';
                for (i = 0; i < secondaryMessages.length; i++) {
                    upperContainerParagraph = document.createElement('p');
                    upperContainerParagraph.classList.add('sds-utils-badge-text');
                    upperContainerParagraph.innerHTML = secondaryMessages[i];
                    upperContainer.appendChild(upperContainerParagraph);
                }
                terciaryMessageContainer = document.createElement('p');
                terciaryMessageContainer.innerHTML = terciaryMessage;
                upperContainer.appendChild(terciaryMessageContainer);
                upperContainerDivider = document.createElement('hr');
                upperContainerDivider.classList.add('sds-utils-badge-opaque');
                upperContainer.appendChild(upperContainerDivider);
                wrapper.appendChild(upperContainer);
            }
            wrapperParagraph = document.createElement('p');
            wrapperParagraph.classList.add('sds-utils-badge-text');
            wrapperParagraph.innerHTML = primaryMessage;
            wrapper.appendChild(wrapperParagraph);
            wrapper.addEventListener('mouseenter', handleMouseEnter);
            wrapper.addEventListener('mouseleave', handleMouseLeave);
            if (targetElement) {
                targetElement.appendChild(wrapper);
            }
            else {
                throw new Error('Could not find target element to attach sds-utils badge to.');
            }
            return [2 /*return*/];
        });
    });
}
window.SDSUtilsBadge = SDSUtilsBadge;
//# sourceMappingURL=badge.js.map