declare enum ThemeOptionsEnum {
    Light = "light",
    Dark = "dark"
}
declare enum PositionOptionsEnum {
    Relative = "relative",
    Absolute = "absolute"
}
declare enum LocationOptionsEnum {
    TopLeft = "topleft",
    TopRight = "topright",
    TopCenter = "topcenter",
    BottomLeft = "bottomleft",
    BottomRight = "bottomright",
    BottomCenter = "bottomcenter"
}
interface FooterOptions {
    theme: ThemeOptionsEnum;
    position: PositionOptionsEnum;
    location?: LocationOptionsEnum;
    expandable?: boolean;
    target?: string;
}
declare type SecondaryMessages = Array<string>;
declare function handleMouseEnter(event: Event): void;
declare function handleMouseLeave(event: Event): void;
declare const _handleMouseEnter = "function handleMouseEnter(el) {\n  const upperContainer = document.getElementById('upper-container');\n  upperContainer.classList.add(\"universal-footer-block\");\n  upperContainer.classList.remove(\"universal-footer-none\");\n}";
declare const _handleMouseLeave = "function handleMouseLeave(el) {\n  const upperContainer = document.getElementById('upper-container');\n  upperContainer.classList.add(\"universal-footer-none\");\n  upperContainer.classList.remove(\"universal-footer-block\");\n}";
declare const primaryMessage = "A\n    <a href=\"https://ae.studio/same-day-skunkworks\" target=\"_blank\">\n      SDS\n    </a>\n    Project \u2022 Made with &#10084; by\n    <a href=\"https://ae.studio/\" target=\"_blank\"> Agency Enterprise </a>";
declare const secondaryMessages: SecondaryMessages;
declare const interFontSrc = "https://rsms.me/inter/inter.css";
declare const universalFooterCss: string;
declare function UniversalFooter({ location, position, theme, expandable, target, }: FooterOptions): Promise<void>;
