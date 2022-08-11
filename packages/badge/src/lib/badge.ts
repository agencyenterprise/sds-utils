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
  upperContainer?.classList.add('sds-utils-badge-block');
  upperContainer?.classList.remove('sds-utils-badge-none');
}

function handleMouseLeave(event: Event) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer?.classList.add('sds-utils-badge-none');
  upperContainer?.classList.remove('sds-utils-badge-block');
}

const _handleMouseEnter = `function handleMouseEnter(el) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer.classList.add("sds-utils-badge-block");
  upperContainer.classList.remove("sds-utils-badge-none");
}`;

const _handleMouseLeave = `function handleMouseLeave(el) {
  const upperContainer = document.getElementById('upper-container');
  upperContainer.classList.add("sds-utils-badge-none");
  upperContainer.classList.remove("sds-utils-badge-block");
}`;

const primaryMessage = `A
    <a href="https://ae.studio/same-day-skunkworks" target="_blank">SDS</a>
    Project • Made with <img src="heart.gif" alt="heart" width="10" height="10"> by
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
  // Add the sds-utils badge stylesheet
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href =
    'https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/badge.css';
  // document.head.appendChild(cssLink);
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
    wrapper.classList.add('sds-utils-badge-wrapper', position, location);
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
    upperContainer.classList.add('sds-utils-badge-none');
    upperContainer.id = 'upper-container';
    for (let i = 0; i < secondaryMessages.length; i++) {
      const upperContainerParagraph = document.createElement('p');
      upperContainerParagraph.classList.add('sds-utils-badge-text');
      upperContainerParagraph.innerHTML = secondaryMessages[i];
      upperContainer.appendChild(upperContainerParagraph);
    }
    const upperContainerDivider = document.createElement('hr');
    upperContainerDivider.classList.add('sds-utils-badge-opaque');
    upperContainer.appendChild(upperContainerDivider);
    wrapper.appendChild(upperContainer);
  }
  const wrapperParagraph = document.createElement('p');
  wrapperParagraph.classList.add('sds-utils-badge-text');
  wrapperParagraph.innerHTML = primaryMessage;
  wrapper.appendChild(wrapperParagraph);
  wrapper.addEventListener('mouseenter', handleMouseEnter);
  wrapper.addEventListener('mouseleave', handleMouseLeave);
  if (targetElement) {
    targetElement.appendChild(wrapper);
  } else {
    throw new Error(
      'Could not find target element to attach sds-utils badge to.'
    );
  }
}

window.SDSUtilsBadge = SDSUtilsBadge;
