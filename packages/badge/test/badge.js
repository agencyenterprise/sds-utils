'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var ThemeOptionsEnum;
(function (ThemeOptionsEnum) {
  ThemeOptionsEnum['Light'] = 'light';
  ThemeOptionsEnum['Dark'] = 'dark';
})(ThemeOptionsEnum || (ThemeOptionsEnum = {}));
var PositionOptionsEnum;
(function (PositionOptionsEnum) {
  PositionOptionsEnum['Relative'] = 'relative';
  PositionOptionsEnum['Absolute'] = 'absolute';
  PositionOptionsEnum['Fixed'] = 'fixed';
})(PositionOptionsEnum || (PositionOptionsEnum = {}));
var LocationOptionsEnum;
(function (LocationOptionsEnum) {
  LocationOptionsEnum['TopLeft'] = 'topleft';
  LocationOptionsEnum['TopRight'] = 'topright';
  LocationOptionsEnum['TopCenter'] = 'topcenter';
  LocationOptionsEnum['BottomLeft'] = 'bottomleft';
  LocationOptionsEnum['BottomRight'] = 'bottomright';
  LocationOptionsEnum['BottomCenter'] = 'bottomcenter';
})(LocationOptionsEnum || (LocationOptionsEnum = {}));
function handleMouseEnter(event) {
  var upperContainer = document.getElementById('upper-container');
  upperContainer === null || upperContainer === void 0
    ? void 0
    : upperContainer.classList.add('universal-footer-block');
  upperContainer === null || upperContainer === void 0
    ? void 0
    : upperContainer.classList.remove('universal-footer-none');
}
function handleMouseLeave(event) {
  var upperContainer = document.getElementById('upper-container');
  upperContainer === null || upperContainer === void 0
    ? void 0
    : upperContainer.classList.add('universal-footer-none');
  upperContainer === null || upperContainer === void 0
    ? void 0
    : upperContainer.classList.remove('universal-footer-block');
}
var _handleMouseEnter =
  'function handleMouseEnter(el) {\n  const upperContainer = document.getElementById(\'upper-container\');\n  upperContainer.classList.add("universal-footer-block");\n  upperContainer.classList.remove("universal-footer-none");\n}';
var _handleMouseLeave =
  'function handleMouseLeave(el) {\n  const upperContainer = document.getElementById(\'upper-container\');\n  upperContainer.classList.add("universal-footer-none");\n  upperContainer.classList.remove("universal-footer-block");\n}';
var primaryMessage =
  'A\n    <a href="https://ae.studio/same-day-skunkworks" target="_blank">\n      SDS\n    </a>\n    Project \u2022 Made with &#10084; by\n    <a href="https://ae.studio/" target="_blank"> Agency Enterprise </a>';
var secondaryMessages = [
  'Follow us on Twitter <a href="https://twitter.com/DailySkunkwork">@DailySkunkwork</a>',
  'We\u2019re on a mission to build an agency increasing startup every day.',
  '<a href="https://ae.studio/same-day-skunkworks">Learn more -></a>',
];
var interFontSrc = 'https://rsms.me/inter/inter.css';
function UniversalFooter(_a) {
  var location = _a.location,
    position = _a.position,
    _b = _a.theme,
    theme = _b === void 0 ? ThemeOptionsEnum.Light : _b,
    expandable = _a.expandable,
    target = _a.target;
  return __awaiter(this, void 0, void 0, function () {
    var cssLink,
      interFontScript,
      handleMouseEnterScript,
      handleMouseLeaveScript,
      targetElement,
      wrapper,
      upperContainer,
      i,
      upperContainerParagraph,
      upperContainerDivider,
      wrapperParagraph;
    return __generator(this, function (_c) {
      cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href =
        'https://cdn.jsdelivr.net/gh/agencyenterprise/universal/dist/packages/footer/src/lib/footer.css';
      interFontScript = document.createElement('script');
      interFontScript.src = '';
      handleMouseEnterScript = document.createElement('script');
      handleMouseEnterScript.text = _handleMouseEnter;
      handleMouseLeaveScript = document.createElement('script');
      handleMouseLeaveScript.text = _handleMouseLeave;
      document.head.appendChild(handleMouseEnterScript);
      document.head.appendChild(handleMouseLeaveScript);
      targetElement = document.body;
      if (target) {
        // If we do have a target, use it to append the footer.
        if (document.getElementById(target)) {
          targetElement = document.getElementById(target);
        }
      }
      wrapper = document.createElement('div');
      if (position === PositionOptionsEnum.Relative) {
        wrapper.classList.add('relative');
      }
      if (
        (position === PositionOptionsEnum.Absolute ||
          position === PositionOptionsEnum.Fixed) &&
        location &&
        Object.values(LocationOptionsEnum).includes(location)
      ) {
        wrapper.classList.add('universal-footer-wrapper', position, location);
      } else {
        throw new Error(
          'Location is not one of: topleft, topright, topcenter,  bottomleft, bottomright, bottomcenter'
        );
      }
      if (theme === ThemeOptionsEnum.Light) wrapper.classList.add('light');
      if (theme === ThemeOptionsEnum.Dark) wrapper.classList.add('dark');
      // In the case we want to expand the footer, we will configure the plugin to append the secondary messages
      if (expandable) {
        upperContainer = document.createElement('div');
        upperContainer.classList.add('universal-footer-none');
        upperContainer.id = 'upper-container';
        for (i = 0; i < secondaryMessages.length; i++) {
          upperContainerParagraph = document.createElement('p');
          upperContainerParagraph.classList.add('universal-footer-text');
          upperContainerParagraph.innerHTML = secondaryMessages[i];
          upperContainer.appendChild(upperContainerParagraph);
        }
        upperContainerDivider = document.createElement('hr');
        upperContainerDivider.classList.add('universal-footer-opaque');
        upperContainer.appendChild(upperContainerDivider);
        wrapper.appendChild(upperContainer);
      }
      wrapperParagraph = document.createElement('p');
      wrapperParagraph.classList.add('universal-footer-text');
      wrapperParagraph.innerHTML = primaryMessage;
      wrapper.appendChild(wrapperParagraph);
      wrapper.addEventListener('mouseenter', handleMouseEnter);
      wrapper.addEventListener('mouseleave', handleMouseLeave);
      if (targetElement) {
        targetElement.appendChild(wrapper);
      } else {
        throw new Error(
          'Could not find target element to attach universal footer to.'
        );
      }
      return [2 /*return*/];
    });
  });
}
window.UniversalFooter = UniversalFooter;
//# sourceMappingURL=footer.js.map
