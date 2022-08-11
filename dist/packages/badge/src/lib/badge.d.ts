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
declare const primaryMessage = "A\n    <a href=\"https://ae.studio/same-day-skunkworks\" target=\"_blank\">SDS</a>\n    Project \u2022 Made with <img src=\"heart.gif\" alt=\"heart\" width=\"10\" height=\"10\"> by\n    <a href=\"https://ae.studio/\" target=\"_blank\"> Agency Enterprise </a>";
declare const secondaryMessages: SecondaryMessages;
declare const interFontSrc = "https://rsms.me/inter/inter.css";
declare function SDSUtilsBadge({ location, position, theme, expandable, target, }: BadgeOptions): Promise<void>;
