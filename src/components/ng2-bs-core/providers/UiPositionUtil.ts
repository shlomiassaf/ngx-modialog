import {Injectable} from 'angular2/core';

export const PLACEMENT_REGEX = {
    auto: /\s?auto?\s?/i,
    primary: /^(top|bottom|left|right)$/,
    secondary: /^(top|bottom|left|right|center)$/,
    vertical: /^(top|bottom)$/
};

export interface ParsedPlacement {
    p1: string;
    p2: string;
    auto: boolean;
}

export class Location {
    top: number;
    left: number;

    constructor(top: number, left: number) {
        this.top = top;
        this.left = left;
    }
}

export class ResolvedLocation extends Location {
    placement: string;

    constructor(top: number, left: number, placement: string) {
        super(top, left);
        this.placement = placement;
    }
}

export class Rect extends Location {
    width: number;
    height: number;

    constructor(top: number, left: number, width: number, height: number) {
        super(top, left);
        this.width = width;
        this.height = height;
    }
}

@Injectable()
export abstract class UiPositionUtil {

    /**
     * Parses a placement string.
     * Along with the 'auto' indicator, supported placement strings are:
     * <ul>
     *   <li>top: element on top, horizontally centered on host element.</li>
     *   <li>top-left: element on top, left edge aligned with host element left edge.</li>
     *   <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
     *   <li>bottom: element on bottom, horizontally centered on host element.</li>
     *   <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
     *   <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
     *   <li>left: element on left, vertically centered on host element.</li>
     *   <li>left-top: element on left, top edge aligned with host element top edge.</li>
     *   <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
     *   <li>right: element on right, vertically centered on host element.</li>
     *   <li>right-top: element on right, top edge aligned with host element top edge.</li>
     *   <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
     * </ul>
     * A placement string with an 'auto' indicator is expected to be
     * space separated from the placement, i.e: 'auto bottom-left'  If
     * the primary and secondary placement values do not match 'top,
     * bottom, left, right' then 'top' will be the primary placement and
     * 'center' will be the secondary placement.
     * @param {string} placement - The placement string to parse.
     * @returns {ParsedPlacement} An array with the following values
     */
    parsePlacement(placement: string): ParsedPlacement {
        let autoPlace = PLACEMENT_REGEX.auto.test(placement);
        if (autoPlace) {
            placement = placement.replace(PLACEMENT_REGEX.auto, '');
        }

        let arr = placement.split('-');
        arr[0] = arr[0] || 'top';
        arr[1] = arr[1] || 'center';

        return {
            p1: PLACEMENT_REGEX.primary.test(arr[0]) ? arr[0] : 'top',
            p2: PLACEMENT_REGEX.secondary.test(arr[1]) ? arr[1] : 'center',
            auto: autoPlace
        };
    }

    /**
     * Get the current coordinates of the supplied element relative to the document.
     * Distance to viewport.
     *
     * @param {element} elem - The element to calculate the offset on.
     * @returns {Rect}
     */
    abstract offset(elem: any): Rect;

    /**
     * Get the current coordinates of the supplied element, relative to the offset parent.
     * Distance to closest positioned ancestor.
     *
     * @param {element} elem - The element to caclulate the position on.
     * @param {boolean=} [includeMargins=false] - Should margins be accounted
     * for, default is false.
     *
     * @returns {Rect}
     */
    abstract position(elem, includeMargins): Rect;

    /**
     * Provides coordinates for an element to be positioned relative to another element.
     * Passing 'auto' as part of the placement parameter will enable smart placement
     * where the element fits. i.e: auto left-top' will check to see if there is enough space
     * to the left of the hostElem to fit the targetElem, if not place right (same for secondary
     * top placement).  Available space is calculated using the viewportOffset function.
     *
     * @param {element} hostElem - The element to position against.
     * @param {element} targetElem - The element to position.
     * @param {string} placement - The placement for the targetElem,
     *   default is 'top'. 'center' is assumed as secondary placement for
     *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
     *   <ul>
     *     <li>top</li>
     *     <li>top-right</li>
     *     <li>top-left</li>
     *     <li>bottom</li>
     *     <li>bottom-left</li>
     *     <li>bottom-right</li>
     *     <li>left</li>
     *     <li>left-top</li>
     *     <li>left-bottom</li>
     *     <li>right</li>
     *     <li>right-top</li>
     *     <li>right-bottom</li>
     *   </ul>
     * @param {boolean} appendToBody - Should the top and left values returned
     *   be calculated from the body element, default is false.
     *
     * @returns {ResolvedLocation}
     */
    abstract positionElements(hostElem: any, targetElem: any,
                              placement: string,
                              appendToBody: boolean): ResolvedLocation;
}
