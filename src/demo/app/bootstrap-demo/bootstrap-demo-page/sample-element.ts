import {Component} from 'angular2/core';

@Component({
    selector: 'sample-element',
    template:
    `<div>
        <h1>I Am an Element!</h1>
        <p>I can be modaled!</p>
     </div>
     <div #myModal></div>
     `
})
export class SampleElement {
    constructor() {}
}
