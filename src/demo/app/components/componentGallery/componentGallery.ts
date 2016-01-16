import { Component, provide, ElementRef, Injector,
    IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';

import {GalleryItem} from '../angular2-modal/demoComponent';

@Component({
    selector: 'component-gallery',
    directives: [GalleryItem],
    styles: [ require('./componentGallery.css') ],
    template: require('./componentGallery.tpl.html')
})
export class ComponentGallery {

}