enum ThemeOptionsEnum {
  Light = 'light',
  Dark = 'dark',
}

enum PositionOptionsEnum {
  Relative = 'relative',
  Absolute = 'absolute',
}

enum LocationOptionsEnum {
  TopLeft = 'topleft',
  TopRight = 'topright',
  TopCenter = 'topcenter',
  BottomLeft = 'bottomleft',
  BottomRight = 'bottomright',
  BottomCenter = 'bottomcenter',
}

interface FooterOptions {
  theme: ThemeOptionsEnum;
  position: PositionOptionsEnum;
  location?: LocationOptionsEnum;
  expandable?: boolean;
  target?: string;
}

type SecondaryMessages = Array<string>;

function handleMouseEnter(event: Event) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer?.classList.add("universal-footer-block");
  upperContainer?.classList.remove("universal-footer-none");
}

function handleMouseLeave(event: Event) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer?.classList.add("universal-footer-none");
  upperContainer?.classList.remove("universal-footer-block");
}

const _handleMouseEnter = `function handleMouseEnter(el) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer.classList.add("universal-footer-block");
  upperContainer.classList.remove("universal-footer-none");
}`;

const _handleMouseLeave = `function handleMouseLeave(el) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer.classList.add("universal-footer-none");
  upperContainer.classList.remove("universal-footer-block");
}`;

const defaultPrimaryMessage = `A
    <a href="https://ae.studio/same-day-skunkworks" target="_blank">
      SDS
    </a>
    Project • Made with &#10084; by
    <a href="https://ae.studio/" target="_blank"> Agency Enterprise </a>`;

const defaultSecondaryMessages: SecondaryMessages = [
  `Follow us on Twitter <a href="https://twitter.com/DailySkunkwork">@DailySkunkwork</a>`,
  `We’re on a mission to build an agency increasing startup every day.`,
  `<a href="https://ae.studio/same-day-skunkworks">Learn more -></a>`,
];

const interFontSrc = 'https://rsms.me/inter/inter.css';

const universalFooterCss = '<style>' +
  '.universal-footer-wrapper > p > a,\n' +
  '.universal-footer-wrapper > p > a:-webkit-any-link,\n' +
  '.universal-footer-wrapper > div > p > a,\n' +
  '.universal-footer-wrapper > div > p > a:-webkit-any-link{\n' +
  '  font-family: "Inter", sans-serif;\n' +
  '  font-style: normal;\n' +
  '  font-weight: 500;\n' +
  '  font-size: 12px;\n' +
  '  line-height: 15px;\n' +
  '  color: #6f6f6f !important;\n' +
  '}\n' +
  '.universal-footer-wrapper.bottom-left {\n' +
  '  bottom: 0;\n' +
  '  left: 0;\n' +
  '  margin: 8px;\n' +
  '}\n' +
  '.universal-footer-wrapper.bottom-right {\n' +
  '  bottom: 0;\n' +
  '  right: 0;\n' +
  '  margin: 8px;\n' +
  '}\n' +
  '.universal-footer-wrapper.top-left {\n' +
  '  top: 0;\n' +
  '  left: 0;\n' +
  '  margin: 8px;\n' +
  '}\n' +
  '.universal-footer-wrapper.top-right {\n' +
  '  top: 0;\n' +
  '  right: 0;\n' +
  '  margin: 8px;\n' +
  '}\n' +
  '.universal-footer-wrapper.relative {\n' +
  '  position: relative;\n' +
  '}\n' +
  '.universal-footer-wrapper.absolute {\n' +
  '  position: absolute;\n' +
  '}\n' +
  '.universal-footer-text {\n' +
  '  font-family: "Inter", sans-serif;\n' +
  '  font-style: normal;\n' +
  '  font-weight: 500;\n' +
  '  font-size: 12px;\n' +
  '  line-height: 15px;\n' +
  '  color: #6f6f6f !important;\n' +
  '}\n' +
  '.universal-footer-center {\n' +
  '  text-align: center;\n' +
  '}\n' +
  '.universal-footer-start {\n' +
  '  text-align: left;\n' +
  '}\n' +
  '.universal-footer-wrapper {\n' +
  '  width: fit-content;\n' +
  '  height: fit-content;\n' +
  '  max-width: 272px;\n' +
  '  padding: 4px 8px;\n' +
  '  box-shadow: 0px 0px 6.48px -2.16px rgba(0, 0, 0, 0.2),\n' +
  '  0px 2.16px 2.5px rgba(0, 0, 0, 0.1);\n' +
  '  border-radius: 3px;\n' +
  '}\n' +
  '.universal-footer-opaque {\n' +
  '  opacity: 0.2;\n' +
  '}\n' +
  '.universal-footer-none {\n' +
  '  display: none;\n' +
  '}\n' +
  '.universal-footer-block {\n' +
  '  display: block;\n' +
  '}\n' +
  '</style>'

async function UniversalFooter({
  location,
  position,
  theme,
  expandable,
  target,
}: FooterOptions): Promise<void> {
  let primaryMessage;
  let secondaryMessages;
  try {
    const primaryMessageFetch = await fetch(
      'http://localhost:3000/api/message/primary'
    );
    const secondaryMessagesFetch = await fetch(
      'http://localhost:3000/api/message/secondary'
    );
    primaryMessage = await primaryMessageFetch.text();
    secondaryMessages = await secondaryMessagesFetch.json();
  } catch (e) {
    console.log(
      'UniversalFooterException: could not fetch messages, setting messages to default.',
      e
    );
    primaryMessage = defaultPrimaryMessage;
    secondaryMessages = defaultSecondaryMessages;
  }
  // Add the universal footer stylesheet
  let cssStylesheet = document.createElement('style');
  cssStylesheet.textContent = universalFooterCss;
  document.head.appendChild(cssStylesheet);
  // Add the inter font
  let interFontScript = document.createElement('script');
  interFontScript.src = '';
  // Add the mouse event handlers
  let handleMouseEnterScript = document.createElement('script');
  handleMouseEnterScript.text = _handleMouseEnter;
  let handleMouseLeaveScript = document.createElement('script');
  handleMouseLeaveScript.text = _handleMouseLeave;
  document.head.appendChild(handleMouseEnterScript);
  document.head.appendChild(handleMouseLeaveScript);
  let targetElement;
  if (target) {
    // If we do have a target, use it to append the footer.
    targetElement = document.getElementById(<string>target);
  } else {
    // In the case the target is blank, we will always append it to the bottom of the body tag.
    targetElement = document.body;
  }
  const wrapper = document.createElement('div');
  if (position === PositionOptionsEnum.Relative) {
    wrapper.classList.add('relative');
  }
  if (
    position === PositionOptionsEnum.Absolute &&
    location &&
    Object.values(LocationOptionsEnum).includes(location as LocationOptionsEnum)
  ) {
    wrapper.classList.add('universal-footer-wrapper', position, location);
  } else {
    throw new Error(
      'Location is not one of: topleft, topright, topcenter,  bottomleft, bottomright, bottomcenter'
    );
  }
  // In the case we want to expand the footer, we will configure the plugin to append the secondary messages
  if (expandable) {
    const upperContainer = document.createElement('div');
    upperContainer.classList.add('universal-footer-none');
    upperContainer.id = 'upper-container';
    for (let i = 0; i < secondaryMessages.length; i++) {
      const upperContainerParagraph = document.createElement('p');
      upperContainerParagraph.classList.add('universal-footer-text');
      upperContainerParagraph.innerHTML = secondaryMessages[i];
      upperContainer.appendChild(upperContainerParagraph);
    }
    const upperContainerDivider = document.createElement('hr');
    upperContainerDivider.classList.add('universal-footer-opaque');
    upperContainer.appendChild(upperContainerDivider);
    wrapper.appendChild(upperContainer);
  }
  const wrapperParagraph = document.createElement('p');
  wrapperParagraph.classList.add('universal-footer-text');
  wrapperParagraph.innerHTML = primaryMessage;
  wrapper.appendChild(wrapperParagraph);
  wrapper.addEventListener("mouseenter", handleMouseEnter);
  wrapper.addEventListener("mouseleave", handleMouseLeave);
  document.body.appendChild(wrapper);
}

window.UniversalFooter = UniversalFooter;
