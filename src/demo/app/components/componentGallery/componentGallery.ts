import { Component, provide, ElementRef, Injector,
    IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';

import {GalleryItem} from '../angular2-modal/demoComponent';
import {TypeaheadDemo} from '../angular2-typeahead/typeaheadDemo';

@Component({
    selector: 'component-gallery',
    directives: [GalleryItem, TypeaheadDemo],
    styles: [ require('./componentGallery.css') ],
    template: require('./componentGallery.tpl.html')
})
export class ComponentGallery {

}