declare enum ThemeOptionsEnum {
    Light = "light",
    Dark = "dark"
}
declare enum PositionOptionsEnum {
    Relative = "relative",
    Absolute = "absolute",
    Fixed = "fixed"
}
declare enum LocationOptionsEnum {
    TopLeft = "topleft",
    TopRight = "topright",
    TopCenter = "topcenter",
    BottomLeft = "bottomleft",
    BottomRight = "bottomright",
    BottomCenter = "bottomcenter"
}
interface BadgeOptions {
    theme: ThemeOptionsEnum;
    position: PositionOptionsEnum;
    location?: LocationOptionsEnum;
    expandable?: boolean;
    target?: string;
}
declare type SecondaryMessages = Array<string>;
declare function handleMouseEnter(event: Event): void;
declare function handleMouseLeave(event: Event): void;
declare const _handleMouseEnter = "function handleMouseEnter(el) {\n  const upperContainer = document.getElementById('upper-container');\n  upperContainer.classList.add(\"sds-utils-badge-block\");\n  upperContainer.classList.remove(\"sds-utils-badge-none\");\n}";
declare const _handleMouseLeave = "function handleMouseLeave(el) {\n  const upperContainer = document.getElementById('upper-container');\n  upperContainer.classList.add(\"sds-utils-badge-none\");\n  upperContainer.classList.remove(\"sds-utils-badge-block\");\n}";
declare const primaryMessage = "\n    <div style=\"display: flex; justify-content: space-between\"><a class=\"show-on-hover badge-lighter\" target=\"_blank\" rel=\"noreferrer\" onclick=\"trackClickSdsBadge('https://twitter.com/DailySkunkwork', 'Twitter')\" href=\"https://twitter.com/DailySkunkwork#sds-badge\">Twitter</a><div>Created with \u2665 by <a href=\"https://ae.studio/#sds-badge\" onclick=\"trackClickSdsBadge('https://ae.studio/#sds-badge', 'AE Studio')\" target=\"_blank\" class=\"utils-underline\">AE Studio</a></div></div>";
declare const secondaryMessages: SecondaryMessages;
declare const trackClickSdsBadge: (url: string, btnText: string) => void;
declare function SDSUtilsBadge({ location, position, theme, expandable, target, }: BadgeOptions): Promise<void>;
