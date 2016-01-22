import {
    Component,
    provide,
    ElementRef,
    Injector,
    IterableDiffers,
    KeyValueDiffers,
    Renderer
} from 'angular2/core';

import {Http, RequestOptionsArgs, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {Typeahead} from 'ng2-bs-typeahead';
import * as dataSource from './dataSource';

@Component({
    selector: 'angular2-typeahead-demo',
    directives: [Typeahead],
    template: require('./typeaheadDemo.tpl.html')
})
export class TypeaheadDemo {
    public states: Array<string> = dataSource.states;

    // make sure you send an observable that omits Array's, not objects.
    // For example,  dataSource.statesComplex is an array of possible matches but we
    // need the observer to omit it as whole.
    // Observable.fromArray(dataSource.statesComplex) will omit single values, not good.
    public statesComplex = Observable.of(dataSource.statesComplex);


    private statesInput: string;
    private statesComplexInput: string;
    private httpInput: string;

    private customItemTemplate =  `<ul #thContainer class="dropdown-menu">
        <li *ngFor="#match of matches"
            [class.active]="isActive(match)">
             <a href="#"
                tabindex="-1"
                (click)="onMatchSelect($event, match)"
                [innerHtml]="match.value.formatted_address"></a>
        </li>
    </ul>`;

    public searchValueToHttpMapper =  (value: string) => {
        let params = new URLSearchParams();
        params.set('address', value);
        params.set('sensor', "false");

        // As an observable:
        //return this.http.get('//maps.googleapis.com/maps/api/geocode/json', {search: params})
        //    .map(res => res.json().results);

        // As a promise:
        return this.http.get('//maps.googleapis.com/maps/api/geocode/json', {search: params})
            .toPromise().then((res => res.json().results));
    };

    public onMatchSelected($event) {
        console.log("SELECTED: ",$event.match);
    }

    constructor(public http: Http) {
    }

}
