import {Injectable} from 'angular2/core';
import {Position, Rect, Location, ResolvedLocation, PLACEMENT_REGEX} from './Position';

function isDefined(value ) {
    return typeof value !== 'undefined';
}

@Injectable()
export class DomPosition extends Position {
    offset(elem: any): Rect {
        let boundingClientRect = elem.getBoundingClientRect();
        return new Rect(
            boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
            boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft),
            boundingClientRect.width || elem.offsetWidth,
            boundingClientRect.height || elem.offsetHeight
        );
    }

    private isStaticPositioned(el) {
        return (window.getComputedStyle(el).position || 'static') === 'static';
    }

    /**
     * Provides the closest positioned ancestor.
     * @param {element} element - The element to get the offest parent for.
     * @returns {element} The closest positioned ancestor.
     */
    private offsetParent(elem: HTMLElement): Element {
        let offsetParent = elem.offsetParent || document.documentElement;

        while (offsetParent && offsetParent !== document.documentElement
                && this.isStaticPositioned(offsetParent)) {
            offsetParent = (<HTMLElement>offsetParent).offsetParent;
        }

        return offsetParent || document.documentElement;
    }


    /**
     * Provides a parsed number for a style property.
     * Strips units and casts invalid numbers to 0.
     *
     * @param {string} value - The style value to parse.
     * @returns {number} A valid number.
     */
    private parseStyle(value: string): number {
        let val = parseFloat(value);
        return isFinite(val) ? val : 0;
    }

    position(elem: any, includeMargins: boolean = false): Rect {
        let elemOffset = this.offset(elem);
        if (includeMargins) {
            let elemStyle = getComputedStyle(elem);
            elemOffset.top -= this.parseStyle(elemStyle.marginTop);
            elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
        }
        let parent = this.offsetParent(elem);
        let parentOffset = new Location(0, 0);

        if (parent !== document.documentElement) {
            parentOffset = this.offset(parent);
            parentOffset.top += parent.clientTop - parent.scrollTop;
            parentOffset.left += parent.clientLeft - parent.scrollLeft;
        }
        return new Rect(
            Math.round(elemOffset.top - parentOffset.top),
            Math.round(elemOffset.left - parentOffset.left),
            elemOffset.width  || elem.offsetWidth,
            elemOffset.height  || elem.offsetHeight
        );
    }

    positionElements(hostElem:any, targetElem:any,
                     placement:string = "top",
                     appendToBody: boolean = false): ResolvedLocation {
        let targetWidth = isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth :
            targetElem.prop('offsetWidth');

        let targetHeight = isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight :
            targetElem.prop('offsetHeight');

        let parsedPlacement = this.parsePlacement(placement);
        let hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
        let targetElemPos = new ResolvedLocation(0, 0, '');

        //TODO: Import viewportOffset from https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js#L226
        //if (parsedPlacement.auto) {
        //    let viewportOffset = this.viewportOffset(hostElem);
        //
        //    let targetElemStyle = getComputedStyle(targetElem);
        //    let adjustedSize = {
        //        width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
        //        height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
        //    };
        //
        //    placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
        //        placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
        //            placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
        //                placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
        //                    placement[0];
        //
        //    placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
        //        placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
        //            placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
        //                placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
        //                    placement[1];
        //
        //    if (placement[1] === 'center') {
        //        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
        //            var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
        //            if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
        //                placement[1] = 'left';
        //            } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
        //                placement[1] = 'right';
        //            }
        //        } else {
        //            var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
        //            if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
        //                placement[1] = 'top';
        //            } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
        //                placement[1] = 'bottom';
        //            }
        //        }
        //    }
        //}

        switch (parsedPlacement.p1) {
            case 'top':
                targetElemPos.top = hostElemPos.top - targetHeight;
                break;
            case 'bottom':
                targetElemPos.top = hostElemPos.top + hostElemPos.height;
                break;
            case 'left':
                targetElemPos.left = hostElemPos.left - targetWidth;
                break;
            case 'right':
                targetElemPos.left = hostElemPos.left + hostElemPos.width;
                break;
        }

        switch (parsedPlacement.p2) {
            case 'top':
                targetElemPos.top = hostElemPos.top;
                break;
            case 'bottom':
                targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
                break;
            case 'left':
                targetElemPos.left = hostElemPos.left;
                break;
            case 'right':
                targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
                break;
            case 'center':
                if (PLACEMENT_REGEX.vertical.test(parsedPlacement.p1)) {
                    targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
                } else {
                    targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
                }
                break;
        }

        targetElemPos.top = Math.round(targetElemPos.top);
        targetElemPos.left = Math.round(targetElemPos.left);
        targetElemPos.placement = parsedPlacement.p2 === 'center' ?
            parsedPlacement.p1 : parsedPlacement.p1 + '-' + parsedPlacement.p2;

        return targetElemPos;
    }
}