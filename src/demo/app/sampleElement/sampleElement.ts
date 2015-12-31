import {Component, ElementRef, Inject, forwardRef} from 'angular2/core';
import {DemoPage} from '../demoPage/demoPage';

@Component({
    selector: 'sample-element',
    template:
    `<div>
        <h1>I Am an Element!</h1>
        <p>I can be modaled!</p>
     </div>`
})
export class SampleElement {
    constructor( @Inject(forwardRef(() => DemoPage)) demoPage: DemoPage, elementRef: ElementRef) {
        demoPage.mySampleElement = elementRef;
    }
}