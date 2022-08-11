enum ThemeOptionsEnum {
  Light = 'light',
  Dark = 'dark',
}

enum PositionOptionsEnum {
  Relative = 'relative',
  Absolute = 'absolute',
  Fixed = 'fixed',
}

enum LocationOptionsEnum {
  TopLeft = 'topleft',
  TopRight = 'topright',
  TopCenter = 'topcenter',
  BottomLeft = 'bottomleft',
  BottomRight = 'bottomright',
  BottomCenter = 'bottomcenter',
}

interface BadgeOptions {
  theme: ThemeOptionsEnum;
  position: PositionOptionsEnum;
  location?: LocationOptionsEnum;
  expandable?: boolean;
  target?: string;
}

type SecondaryMessages = Array<string>;

function handleMouseEnter(event: Event) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer?.classList.add('universal-badge-block');
  upperContainer?.classList.remove('universal-badge-none');
}

function handleMouseLeave(event: Event) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer?.classList.add('universal-badge-none');
  upperContainer?.classList.remove('universal-badge-block');
}

const _handleMouseEnter = `function handleMouseEnter(el) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer.classList.add("universal-badge-block");
  upperContainer.classList.remove("universal-badge-none");
}`;

const _handleMouseLeave = `function handleMouseLeave(el) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer.classList.add("universal-badge-none");
  upperContainer.classList.remove("universal-badge-block");
}`;

const primaryMessage = `A
    <a href="https://ae.studio/same-day-skunkworks" target="_blank">
      SDS
    </a>
    Project • Made with &#10084; by
    <a href="https://ae.studio/" target="_blank"> Agency Enterprise </a>`;

const secondaryMessages: SecondaryMessages = [
  `Follow us on Twitter <a href="https://twitter.com/DailySkunkwork">@DailySkunkwork</a>`,
  `We’re on a mission to build an agency increasing startup every day.`,
  `<a href="https://ae.studio/same-day-skunkworks">Learn more -></a>`,
];

const interFontSrc = 'https://rsms.me/inter/inter.css';

async function SDSUtilsBadge({
  location,
  position,
  theme = ThemeOptionsEnum.Light,
  expandable,
  target,
}: BadgeOptions): Promise<void> {
  // Add the universal badge stylesheet
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href =
    'https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils/dist/packages/badge/src/lib/badge.css';
  document.head.appendChild(cssLink);
  // Add the inter font
  const interFontScript = document.createElement('script');
  interFontScript.src = '';
  // Add the mouse event handlers
  const handleMouseEnterScript = document.createElement('script');
  handleMouseEnterScript.text = _handleMouseEnter;
  const handleMouseLeaveScript = document.createElement('script');
  handleMouseLeaveScript.text = _handleMouseLeave;
  document.head.appendChild(handleMouseEnterScript);
  document.head.appendChild(handleMouseLeaveScript);
  let targetElement: HTMLElement | null = document.body;
  if (target) {
    // If we do have a target, use it to append the badge.
    if (document.getElementById(target)) {
      targetElement = document.getElementById(<string>target);
    }
  }
  const wrapper = document.createElement('div');
  if (position === PositionOptionsEnum.Relative) {
    wrapper.classList.add('relative');
  }
  if (
    (position === PositionOptionsEnum.Absolute ||
      position === PositionOptionsEnum.Fixed) &&
    location &&
    Object.values(LocationOptionsEnum).includes(location as LocationOptionsEnum)
  ) {
    wrapper.classList.add('universal-badge-wrapper', position, location);
  } else {
    throw new Error(
      'Location is not one of: topleft, topright, topcenter,  bottomleft, bottomright, bottomcenter'
    );
  }
  if (theme === ThemeOptionsEnum.Light) wrapper.classList.add('light');
  if (theme === ThemeOptionsEnum.Dark) wrapper.classList.add('dark');
  // In the case we want to expand the badge, we will configure the plugin to append the secondary messages
  if (expandable) {
    const upperContainer = document.createElement('div');
    upperContainer.classList.add('universal-badge-none');
    upperContainer.id = 'upper-container';
    for (let i = 0; i < secondaryMessages.length; i++) {
      const upperContainerParagraph = document.createElement('p');
      upperContainerParagraph.classList.add('universal-badge-text');
      upperContainerParagraph.innerHTML = secondaryMessages[i];
      upperContainer.appendChild(upperContainerParagraph);
    }
    const upperContainerDivider = document.createElement('hr');
    upperContainerDivider.classList.add('universal-badge-opaque');
    upperContainer.appendChild(upperContainerDivider);
    wrapper.appendChild(upperContainer);
  }
  const wrapperParagraph = document.createElement('p');
  wrapperParagraph.classList.add('universal-badge-text');
  wrapperParagraph.innerHTML = primaryMessage;
  wrapper.appendChild(wrapperParagraph);
  wrapper.addEventListener('mouseenter', handleMouseEnter);
  wrapper.addEventListener('mouseleave', handleMouseLeave);
  if (targetElement) {
    targetElement.appendChild(wrapper);
  } else {
    throw new Error(
      'Could not find target element to attach universal badge to.'
    );
  }
}

window.SDSUtilsBadge = SDSUtilsBadge;
