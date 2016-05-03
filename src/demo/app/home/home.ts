import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.tpl.html'),
    encapsulation: ViewEncapsulation.None
})
export class Home {
  
    constructor() {}
}
