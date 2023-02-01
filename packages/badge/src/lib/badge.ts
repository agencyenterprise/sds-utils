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
    <div style="display: flex; justify-content: space-between"><a class="show-on-hover badge-lighter" target="_blank" rel="noreferrer" onclick="trackClickSdsBadge('https://twitter.com/DailySkunkwork', 'Twitter')" href="https://twitter.com/DailySkunkwork#sds-badge">Twitter</a><div>Created with ♥ by <a href="https://ae.studio/#sds-badge" onclick="trackClickSdsBadge('https://ae.studio/#sds-badge', 'AE Studio')" target="_blank" class="utils-underline">AE Studio</a></div></div>`;

const secondaryMessages: SecondaryMessages = [
  `We build tools that increase human agency. <br />
  Outrageously fast. <br /> <br />`,
  `<div class="badge-links"><a href="https://ae.studio/same-day-skunkworks" onclick="trackClickSdsBadge('https://ae.studio/same-day-skunkworks', 'Learn more →')" target="_blank" rel="noreferrer" class="utils-underline">Learn more →</a> <a class="badge-lighter" onclick="trackClickSdsBadge('https://ae.studio/same-day-skunkworks#calendar', 'Work with AE Studio')" href="https://ae.studio/same-day-skunkworks#calendar" target="_blank" rel="noreferrer" class="utils-underline">Work with AE Studio →</a></div> <br /> `,
];

const trackClickSdsBadge = (url: string, btnText: string) => {
  fetch('https://www.samedayskunkworks.com/api/analytics/addEvent', {
    method: 'post',
    body: JSON.stringify({
      origin: window.location.href,
      destination: url,
      event: `SDS Badge Click - ${btnText}`,
    }),
  });
};

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
    'https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.css';
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

    // const terciaryMessageContainer = document.createElement('p');

    // terciaryMessageContainer.innerHTML = terciaryMessage;

    // upperContainer.appendChild(terciaryMessageContainer);

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
