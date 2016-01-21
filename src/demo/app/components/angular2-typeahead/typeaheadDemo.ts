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
import {debug} from "util";
@Component({
    selector: 'angular2-typeahead-demo',
    directives: [Typeahead],
    providers: [],
    template: require('./typeaheadDemo.tpl.html')
})

export class TypeaheadDemo {
    public states: Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'];

    private searchInput: string;
    private searchInputAsync: string;

    public searchValueToHttpMapper =  (value: string) => {
        let params = new URLSearchParams();
        params.set('address', value);
        params.set('sensor', "false");

        return this.http.get('//maps.googleapis.com/maps/api/geocode/json', {search: params})
            .map(res => res.json().results);
    };

    constructor(public http: Http) {
    }

    /**
     * Async data example.
     * Typeahead will send a value, the async handler should return an Observable.
     * In this example its quite clear, the function is a map operator mapping from a string to an http call.
     * @param value
     * @returns {Observable<R>}
     */
    get getAsyncData(): (value: string) => Observable<any> {
        console.log('asdflkjsadlkgfjsdal;kfjlsdakjsda');
        return this.searchValueToHttpMapper;
    }
}
