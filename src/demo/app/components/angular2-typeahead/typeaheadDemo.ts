import { Component, provide, ElementRef, Injector,
    IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';

import {Typeahead} from 'angular2-typeahead';
@Component({
    selector: 'angular2-typeahead-demo',
    directives: [Typeahead],
    providers: [],
    template: require('./typeaheadDemo.tpl.html')
})

export class TypeaheadDemo {
    public states:Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'];

    constructor() {

    }
}
