import {Component, forwardRef, Inject} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {Typeahead} from './typeahead';

@Component({
    selector: 'typeahead-result-container',
    directives: [NgFor ],
    template:
        `<ul class="dropdown-menu" [ngStyle]="{top: top, left: left, display: display}"
                style="display: block">
            <li *ngFor="#match of parent.results">
                <h2>#match</h2>
            </li>
        </ul>`
})
export class TypeaheadResultContainer {
    constructor(@Inject(forwardRef(() => Typeahead)) private parent: Typeahead) {

    }
}