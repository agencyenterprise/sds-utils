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

const primaryMessage = `
    Made with
    <img
      src="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/heart.gif"
      alt="heart"
      width="10"
      height="10"
      class="sds-utils-badge-inline"> by <a href="https://ae.studio/#sds-badge" target="_blank" class="utils-underline">ae.studio</a> and <a href="https://ae.studio/same-day-skunkworks/#sds-badge" class="utils-underline" target="_blank" rel="noreferrer">SDS</a>`;

const secondaryMessages: SecondaryMessages = [
  `We’re on a mission to build something agency increasing (almost) every day.`,
  `<a href="https://ae.studio/same-day-skunkworks#sds-badge" target="_blank" rel="noreferrer" class="utils-underline">Learn more →</a>`,
];

const terciaryMessage = `<a href="https://twitter.com/DailySkunkwork#sds-badge" target="_blank" rel="noreferrer" class="sds-twitter-link"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="15px" height="15px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg> @DailySkunkwork</a>`;

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
    'https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@1.2.10/dist/packages/badge/src/lib/badge.css';
  document.head.appendChild(cssLink);
  // Add the mouse event handlers
  const analyticsScript = document.createElement('script');
  analyticsScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
  analyticsScript.async = true;
  analyticsScript.defer = true;
  const handleMouseEnterScript = document.createElement('script');
  handleMouseEnterScript.text = _handleMouseEnter;
  const handleMouseLeaveScript = document.createElement('script');
  handleMouseLeaveScript.text = _handleMouseLeave;
  document.head.appendChild(handleMouseEnterScript);
  document.head.appendChild(handleMouseLeaveScript);
  document.head.appendChild(analyticsScript);
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

    const terciaryMessageContainer = document.createElement('p');

    terciaryMessageContainer.innerHTML = terciaryMessage;

    upperContainer.appendChild(terciaryMessageContainer);

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
