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
    showPricing?: boolean;
    features?: [];
    showHeader?: boolean;
    expandable?: boolean;
    target?: string;
}
declare const trackClickSdsBadge: (url: string, btnText: string) => void;
declare function SDSUtilsBadge({ location, position, theme, expandable, showPricing, features, showHeader, target, }: BadgeOptions): Promise<void>;
