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
var trackClickSdsBadge = function (url, btnText) {
    fetch('https://www.samedayskunkworks.com/api/analytics/addEvent', {
        method: 'post',
        body: JSON.stringify({
            origin: window.location.href,
            destination: url,
            event: "SDS Utils Click - ".concat(btnText),
        }),
    });
};
function SDSUtilsBadge(_a) {
    var location = _a.location, position = _a.position, _b = _a.theme, theme = _b === void 0 ? ThemeOptionsEnum.Light : _b, expandable = _a.expandable, target = _a.target;
    return __awaiter(this, void 0, void 0, function () {
        var cssLink, analyticsScript, targetElement, header, headerDiv, footer;
        return __generator(this, function (_c) {
            cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href =
                'https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.css';
            // cssLink.href = './badge.css';
            document.head.appendChild(cssLink);
            analyticsScript = document.createElement('script');
            analyticsScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
            analyticsScript.async = true;
            analyticsScript.defer = true;
            document.head.appendChild(analyticsScript);
            targetElement = document.body;
            if (target) {
                // If we do have a target, use it to append the badge.
                if (document.getElementById(target)) {
                    targetElement = document.getElementById(target);
                }
            }
            header = document.createElement('header');
            headerDiv = document.createElement('div');
            headerDiv.classList.add('sds-utils-header-content');
            headerDiv.innerHTML = "<a href=\"https://ae.studio/same-day-skunkworks\" onClick=\"trackClickSdsBadge('https://ae.studio/same-day-skunkworks', 'Header Logo')\" target=\"_blank\" rel=\"noreferrer\"><svg class=\"sds-utils-logo\" viewBox=\"0 0 579 139\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M197.44 92L216.76 46.52H217.18L236.5 92H228.46L214.84 57.5L219.88 54.08L204.34 92H197.44ZM209.56 75.8H224.5L226.9 81.74H207.46L209.56 75.8ZM245.153 48.32H274.133V55.04H252.173V66.68H271.733V73.46H252.173V85.28H274.973V92H245.153V48.32ZM281.405 88.34C281.405 87.3 281.785 86.44 282.545 85.76C283.305 85.04 284.145 84.68 285.065 84.68C285.905 84.68 286.705 85.04 287.465 85.76C288.225 86.44 288.605 87.3 288.605 88.34C288.605 89.46 288.225 90.36 287.465 91.04C286.705 91.68 285.905 92 285.065 92C284.145 92 283.305 91.68 282.545 91.04C281.785 90.36 281.405 89.46 281.405 88.34ZM320.161 57.2C318.601 56.4 316.941 55.72 315.181 55.16C313.421 54.56 311.741 54.26 310.141 54.26C307.981 54.26 306.261 54.74 304.981 55.7C303.741 56.66 303.121 57.98 303.121 59.66C303.121 60.86 303.561 61.92 304.441 62.84C305.321 63.72 306.441 64.5 307.801 65.18C309.161 65.82 310.601 66.44 312.121 67.04C313.441 67.52 314.741 68.1 316.021 68.78C317.341 69.42 318.521 70.22 319.561 71.18C320.601 72.14 321.421 73.34 322.021 74.78C322.661 76.18 322.981 77.92 322.981 80C322.981 82.28 322.401 84.38 321.241 86.3C320.081 88.18 318.421 89.68 316.261 90.8C314.101 91.92 311.461 92.48 308.341 92.48C306.541 92.48 304.761 92.28 303.001 91.88C301.281 91.48 299.641 90.94 298.081 90.26C296.521 89.54 295.081 88.74 293.761 87.86L296.881 82.4C297.841 83.12 298.941 83.78 300.181 84.38C301.421 84.98 302.701 85.46 304.021 85.82C305.341 86.14 306.581 86.3 307.741 86.3C308.981 86.3 310.201 86.1 311.401 85.7C312.641 85.3 313.661 84.64 314.461 83.72C315.301 82.8 315.721 81.58 315.721 80.06C315.721 78.82 315.361 77.76 314.641 76.88C313.921 76 312.981 75.24 311.821 74.6C310.701 73.92 309.461 73.32 308.101 72.8C306.741 72.28 305.341 71.7 303.901 71.06C302.501 70.42 301.201 69.64 300.001 68.72C298.801 67.76 297.821 66.6 297.061 65.24C296.301 63.88 295.921 62.2 295.921 60.2C295.921 57.8 296.481 55.72 297.601 53.96C298.721 52.2 300.261 50.8 302.221 49.76C304.221 48.72 306.521 48.16 309.121 48.08C312.201 48.08 314.821 48.46 316.981 49.22C319.181 49.94 321.121 50.82 322.801 51.86L320.161 57.2ZM330.067 48.32H359.287V55.04H348.007V92H341.047V55.04H330.067V48.32ZM375.667 76.28C375.667 78 376.107 79.58 376.987 81.02C377.907 82.42 379.107 83.56 380.587 84.44C382.067 85.28 383.727 85.7 385.567 85.7C387.487 85.7 389.207 85.28 390.727 84.44C392.247 83.56 393.447 82.42 394.327 81.02C395.207 79.58 395.647 78 395.647 76.28V48.32H402.547V76.46C402.547 79.62 401.787 82.42 400.267 84.86C398.747 87.26 396.707 89.14 394.147 90.5C391.587 91.82 388.727 92.48 385.567 92.48C382.447 92.48 379.607 91.82 377.047 90.5C374.487 89.14 372.447 87.26 370.927 84.86C369.447 82.42 368.707 79.62 368.707 76.46V48.32H375.667V76.28ZM415.04 92V48.32H427.46C431.82 48.32 435.52 48.98 438.56 50.3C441.6 51.58 444.06 53.32 445.94 55.52C447.82 57.68 449.18 60.1 450.02 62.78C450.9 65.42 451.34 68.08 451.34 70.76C451.34 74.04 450.76 76.98 449.6 79.58C448.44 82.18 446.86 84.42 444.86 86.3C442.86 88.14 440.54 89.56 437.9 90.56C435.3 91.52 432.52 92 429.56 92H415.04ZM422.06 85.28H428.3C430.62 85.28 432.74 84.96 434.66 84.32C436.58 83.64 438.24 82.68 439.64 81.44C441.08 80.16 442.18 78.58 442.94 76.7C443.74 74.82 444.14 72.68 444.14 70.28C444.14 67.56 443.68 65.24 442.76 63.32C441.88 61.36 440.7 59.78 439.22 58.58C437.78 57.34 436.2 56.44 434.48 55.88C432.76 55.32 431.06 55.04 429.38 55.04H422.06V85.28ZM461.884 48.32H468.904V92H461.884V48.32ZM479.427 70.22C479.427 67.18 480.007 64.32 481.167 61.64C482.327 58.96 483.927 56.58 485.967 54.5C488.007 52.42 490.367 50.8 493.047 49.64C495.767 48.44 498.667 47.84 501.747 47.84C504.787 47.84 507.647 48.44 510.327 49.64C513.047 50.8 515.427 52.42 517.467 54.5C519.547 56.58 521.167 58.96 522.327 61.64C523.527 64.32 524.127 67.18 524.127 70.22C524.127 73.3 523.527 76.18 522.327 78.86C521.167 81.54 519.547 83.92 517.467 86C515.427 88.04 513.047 89.64 510.327 90.8C507.647 91.92 504.787 92.48 501.747 92.48C498.627 92.48 495.727 91.92 493.047 90.8C490.367 89.64 488.007 88.06 485.967 86.06C483.927 84.02 482.327 81.66 481.167 78.98C480.007 76.26 479.427 73.34 479.427 70.22ZM486.627 70.22C486.627 72.38 487.007 74.4 487.767 76.28C488.567 78.16 489.667 79.82 491.067 81.26C492.467 82.66 494.087 83.76 495.927 84.56C497.767 85.36 499.767 85.76 501.927 85.76C504.007 85.76 505.947 85.36 507.747 84.56C509.587 83.76 511.187 82.66 512.547 81.26C513.907 79.82 514.967 78.16 515.727 76.28C516.527 74.4 516.927 72.38 516.927 70.22C516.927 68.02 516.527 65.98 515.727 64.1C514.927 62.22 513.847 60.56 512.487 59.12C511.127 57.68 509.527 56.56 507.687 55.76C505.847 54.96 503.867 54.56 501.747 54.56C499.627 54.56 497.647 54.96 495.807 55.76C493.967 56.56 492.347 57.68 490.947 59.12C489.587 60.56 488.527 62.24 487.767 64.16C487.007 66.04 486.627 68.06 486.627 70.22Z\" fill=\"black\"/>\n  <mask id=\"mask0_3975_1376\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"139\" height=\"139\">\n  <rect width=\"139\" height=\"139\" fill=\"#D9D9D9\"/>\n  </mask>\n  <g mask=\"url(#mask0_3975_1376)\">\n  <path d=\"M0 8.01539V136C0 137.657 1.34315 139 3 139H47C48.6569 139 50 137.657 50 136V109.673C50 106.899 53.4419 105.611 55.263 107.704L81.6031 137.969C82.1729 138.624 82.9983 139 83.8661 139H114.411C116.985 139 118.364 135.972 116.674 134.03L5.26276 6.04566C3.44149 3.95345 0 5.24152 0 8.01539Z\" fill=\"#F99556\"/>\n  <path d=\"M22.3262 4.96975L133.737 132.954C135.559 135.047 139 133.758 139 130.985V99V73C139 71.3431 137.657 70 136 70H111.852C110.992 70 110.174 69.6314 109.605 68.9877L103.412 61.9877C101.699 60.0514 103.074 57 105.659 57H136C137.657 57 139 55.6569 139 54V36.5C139 34.8431 137.657 33.5 136 33.5H79.8798C79.004 33.5 78.172 33.1173 77.602 32.4524L70.7449 24.4524C69.0769 22.5064 70.4596 19.5 73.0227 19.5H136C137.657 19.5 139 18.1569 139 16.5V3C139 1.34315 137.657 0 136 0H24.5889C22.0151 0 20.6362 3.0284 22.3262 4.96975Z\" fill=\"#FA6E62\"/>\n  </g>\n  </svg></a>\n  ";
            header.classList.add('sds-utils-header');
            header.appendChild(headerDiv);
            if (targetElement) {
                targetElement.insertBefore(header, targetElement.firstChild);
            }
            footer = document.createElement('footer');
            footer.classList.add('sds-utils-footer');
            footer.innerHTML = "\n    <div class=\"sds-utils-footer-content\">\n    <img src=\"./waves.gif\" class=\"sds-utils-waves\" />\n      <div class=\"sds-utils-footer-inner-content\">\n        <a href=\"https://ae.studio/same-day-skunkworks\" onClick=\"trackClickSdsBadge('https://ae.studio/same-day-skunkworks', 'Footer Logo')\" target=\"_blank\" rel=\"noreferrer\">\n        <svg viewBox=\"0 0 579 139\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M197.44 92L216.76 46.52H217.18L236.5 92H228.46L214.84 57.5L219.88 54.08L204.34 92H197.44ZM209.56 75.8H224.5L226.9 81.74H207.46L209.56 75.8ZM245.153 48.32H274.133V55.04H252.173V66.68H271.733V73.46H252.173V85.28H274.973V92H245.153V48.32ZM281.405 88.34C281.405 87.3 281.785 86.44 282.545 85.76C283.305 85.04 284.145 84.68 285.065 84.68C285.905 84.68 286.705 85.04 287.465 85.76C288.225 86.44 288.605 87.3 288.605 88.34C288.605 89.46 288.225 90.36 287.465 91.04C286.705 91.68 285.905 92 285.065 92C284.145 92 283.305 91.68 282.545 91.04C281.785 90.36 281.405 89.46 281.405 88.34ZM320.161 57.2C318.601 56.4 316.941 55.72 315.181 55.16C313.421 54.56 311.741 54.26 310.141 54.26C307.981 54.26 306.261 54.74 304.981 55.7C303.741 56.66 303.121 57.98 303.121 59.66C303.121 60.86 303.561 61.92 304.441 62.84C305.321 63.72 306.441 64.5 307.801 65.18C309.161 65.82 310.601 66.44 312.121 67.04C313.441 67.52 314.741 68.1 316.021 68.78C317.341 69.42 318.521 70.22 319.561 71.18C320.601 72.14 321.421 73.34 322.021 74.78C322.661 76.18 322.981 77.92 322.981 80C322.981 82.28 322.401 84.38 321.241 86.3C320.081 88.18 318.421 89.68 316.261 90.8C314.101 91.92 311.461 92.48 308.341 92.48C306.541 92.48 304.761 92.28 303.001 91.88C301.281 91.48 299.641 90.94 298.081 90.26C296.521 89.54 295.081 88.74 293.761 87.86L296.881 82.4C297.841 83.12 298.941 83.78 300.181 84.38C301.421 84.98 302.701 85.46 304.021 85.82C305.341 86.14 306.581 86.3 307.741 86.3C308.981 86.3 310.201 86.1 311.401 85.7C312.641 85.3 313.661 84.64 314.461 83.72C315.301 82.8 315.721 81.58 315.721 80.06C315.721 78.82 315.361 77.76 314.641 76.88C313.921 76 312.981 75.24 311.821 74.6C310.701 73.92 309.461 73.32 308.101 72.8C306.741 72.28 305.341 71.7 303.901 71.06C302.501 70.42 301.201 69.64 300.001 68.72C298.801 67.76 297.821 66.6 297.061 65.24C296.301 63.88 295.921 62.2 295.921 60.2C295.921 57.8 296.481 55.72 297.601 53.96C298.721 52.2 300.261 50.8 302.221 49.76C304.221 48.72 306.521 48.16 309.121 48.08C312.201 48.08 314.821 48.46 316.981 49.22C319.181 49.94 321.121 50.82 322.801 51.86L320.161 57.2ZM330.067 48.32H359.287V55.04H348.007V92H341.047V55.04H330.067V48.32ZM375.667 76.28C375.667 78 376.107 79.58 376.987 81.02C377.907 82.42 379.107 83.56 380.587 84.44C382.067 85.28 383.727 85.7 385.567 85.7C387.487 85.7 389.207 85.28 390.727 84.44C392.247 83.56 393.447 82.42 394.327 81.02C395.207 79.58 395.647 78 395.647 76.28V48.32H402.547V76.46C402.547 79.62 401.787 82.42 400.267 84.86C398.747 87.26 396.707 89.14 394.147 90.5C391.587 91.82 388.727 92.48 385.567 92.48C382.447 92.48 379.607 91.82 377.047 90.5C374.487 89.14 372.447 87.26 370.927 84.86C369.447 82.42 368.707 79.62 368.707 76.46V48.32H375.667V76.28ZM415.04 92V48.32H427.46C431.82 48.32 435.52 48.98 438.56 50.3C441.6 51.58 444.06 53.32 445.94 55.52C447.82 57.68 449.18 60.1 450.02 62.78C450.9 65.42 451.34 68.08 451.34 70.76C451.34 74.04 450.76 76.98 449.6 79.58C448.44 82.18 446.86 84.42 444.86 86.3C442.86 88.14 440.54 89.56 437.9 90.56C435.3 91.52 432.52 92 429.56 92H415.04ZM422.06 85.28H428.3C430.62 85.28 432.74 84.96 434.66 84.32C436.58 83.64 438.24 82.68 439.64 81.44C441.08 80.16 442.18 78.58 442.94 76.7C443.74 74.82 444.14 72.68 444.14 70.28C444.14 67.56 443.68 65.24 442.76 63.32C441.88 61.36 440.7 59.78 439.22 58.58C437.78 57.34 436.2 56.44 434.48 55.88C432.76 55.32 431.06 55.04 429.38 55.04H422.06V85.28ZM461.884 48.32H468.904V92H461.884V48.32ZM479.427 70.22C479.427 67.18 480.007 64.32 481.167 61.64C482.327 58.96 483.927 56.58 485.967 54.5C488.007 52.42 490.367 50.8 493.047 49.64C495.767 48.44 498.667 47.84 501.747 47.84C504.787 47.84 507.647 48.44 510.327 49.64C513.047 50.8 515.427 52.42 517.467 54.5C519.547 56.58 521.167 58.96 522.327 61.64C523.527 64.32 524.127 67.18 524.127 70.22C524.127 73.3 523.527 76.18 522.327 78.86C521.167 81.54 519.547 83.92 517.467 86C515.427 88.04 513.047 89.64 510.327 90.8C507.647 91.92 504.787 92.48 501.747 92.48C498.627 92.48 495.727 91.92 493.047 90.8C490.367 89.64 488.007 88.06 485.967 86.06C483.927 84.02 482.327 81.66 481.167 78.98C480.007 76.26 479.427 73.34 479.427 70.22ZM486.627 70.22C486.627 72.38 487.007 74.4 487.767 76.28C488.567 78.16 489.667 79.82 491.067 81.26C492.467 82.66 494.087 83.76 495.927 84.56C497.767 85.36 499.767 85.76 501.927 85.76C504.007 85.76 505.947 85.36 507.747 84.56C509.587 83.76 511.187 82.66 512.547 81.26C513.907 79.82 514.967 78.16 515.727 76.28C516.527 74.4 516.927 72.38 516.927 70.22C516.927 68.02 516.527 65.98 515.727 64.1C514.927 62.22 513.847 60.56 512.487 59.12C511.127 57.68 509.527 56.56 507.687 55.76C505.847 54.96 503.867 54.56 501.747 54.56C499.627 54.56 497.647 54.96 495.807 55.76C493.967 56.56 492.347 57.68 490.947 59.12C489.587 60.56 488.527 62.24 487.767 64.16C487.007 66.04 486.627 68.06 486.627 70.22Z\" fill=\"black\"/>\n<mask id=\"mask0_3975_1376\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"139\" height=\"139\">\n<rect width=\"139\" height=\"139\" fill=\"#D9D9D9\"/>\n</mask>\n<g mask=\"url(#mask0_3975_1376)\">\n<path d=\"M0 8.01539V136C0 137.657 1.34315 139 3 139H47C48.6569 139 50 137.657 50 136V109.673C50 106.899 53.4419 105.611 55.263 107.704L81.6031 137.969C82.1729 138.624 82.9983 139 83.8661 139H114.411C116.985 139 118.364 135.972 116.674 134.03L5.26276 6.04566C3.44149 3.95345 0 5.24152 0 8.01539Z\" fill=\"#F99556\"/>\n<path d=\"M22.3262 4.96975L133.737 132.954C135.559 135.047 139 133.758 139 130.985V99V73C139 71.3431 137.657 70 136 70H111.852C110.992 70 110.174 69.6314 109.605 68.9877L103.412 61.9877C101.699 60.0514 103.074 57 105.659 57H136C137.657 57 139 55.6569 139 54V36.5C139 34.8431 137.657 33.5 136 33.5H79.8798C79.004 33.5 78.172 33.1173 77.602 32.4524L70.7449 24.4524C69.0769 22.5064 70.4596 19.5 73.0227 19.5H136C137.657 19.5 139 18.1569 139 16.5V3C139 1.34315 137.657 0 136 0H24.5889C22.0151 0 20.6362 3.0284 22.3262 4.96975Z\" fill=\"#FA6E62\"/>\n</g>\n</svg>\n    </a>\n    <div class=\"sds-utils-content-text\">WE BUILD SOFTWARE, MACHINE LEARNING, AND BCI SOLUTIONS</div>\n    <div class=\"sds-utils-content-text\">HIRE THE WORLD\u2019S MOST EFFECTIVE TEAM.</div>\n    <a class=\"sds-utils-schedule-call-a\" href=\"https://ae.studio/same-day-skunkworks#calendar\" onClick=\"trackClickSdsBadge('https://ae.studio/same-day-skunkworks#calendar', 'schedule a call')\" target=\"_blank\" rel=\"noreferrer\"><div class=\"sds-utils-schedule-call\">schedule a call</div></a>\n    </div>\n    <div class=\"sds-utils-floating\"><a href=\"https://ae.studio/same-day-skunkworks\" onClick=\"trackClickSdsBadge('https://ae.studio/same-day-skunkworks', 'Discover more projects like this')\" target=\"_blank\" rel=\"noreferrer\">Discover more projects like this <svg fill=\"#000000\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n    viewBox=\"0 0 31.143 31.143\" xml:space=\"preserve\">\n <g>\n   <g id=\"c100_arrow\">\n     <path d=\"M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507\n       c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08\n       c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476\n       l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z\"/>\n   </g>\n   <g id=\"Capa_1_46_\">\n   </g>\n </g>\n </svg></a></div>\n  <div>\n    </div>\n  ";
            if (targetElement) {
                targetElement.appendChild(footer);
            }
            return [2 /*return*/];
        });
    });
}
window.SDSUtilsBadge = SDSUtilsBadge;
//# sourceMappingURL=badge.js.map