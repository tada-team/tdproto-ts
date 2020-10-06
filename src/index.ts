/**
 * Link to an icon with size parameters.
 */
export interface Icon {
    /**
     * Icon height in pixels.
     */
    height: number;

    /**
     * Icon width in pixels.
     */
    width: number;

    /**
     * Full URL string to icon image.
     */
    url: string;
}

/**
 * A set of different sized Icon objects with a fallback.
 */
export interface Icons {
    /**
     * Small sized Icon.
     */
    sm: Icon;

    /**
     * Large sized Icon.
     */
    lg: Icon;

    /**
     * Fallback stub.
     */
    stub: string;
}
