import {Component, forwardRef, Inject, ElementRef, ViewChild} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {Position} from '../../providers/Position';
import {Typeahead} from './typeahead';
import {debug} from "util";

@Component({
    selector: 'typeahead-result-container',

    template:
        `<ul #thContainer class="dropdown-menu"
                [ngStyle]="{top: top, left: left, display: display}"
                style="display: block">
            <li *ngFor="#match of parent.results"
                [class.active]="isActive(match)">
                <a>{{match}}</a>
            </li>
        </ul>`
})
export class TypeaheadResultContainer {
    private top:string;
    private left:string;
    private display:string;
    private active: any;

    constructor(@Inject(forwardRef(() => Typeahead)) private parent: Typeahead,
                private element:ElementRef,
                private position: Position,
                @ViewChild ('thContainer') private listEl: ElementRef) {
        this.setPosition();
    }

    onKeyup(e:KeyboardEvent) {
        let index;
        switch (e.keyCode) {
            case 27: // ESC
                return this.parent.hide();
            case 38: // UP
                index = this.parent.results.indexOf(this.active);
                this.active = this.parent.results[index - 1 < 0 ? this.parent.results.length - 1 : index - 1];
                break;
            case 40: // DOWN
                index = this.parent.results.indexOf(this.active);
                this.active = this.parent.results[index + 1 > this.parent.results.length - 1 ? 0 : index + 1];

            case 13: // ENTER
                return //this.selectActiveMatch();

        }
    }

    private isActive(value:any): boolean {
        return this.active === value;
    }


    private setPosition() {
        let p = this.position.positionElements(this.parent.element.nativeElement,
                this.listEl.nativeElement,
                'bottom-left', false);
        this.top = p.top + 'px';
        this.left = p.left + 'px';
        this.display = 'block';
    }
}