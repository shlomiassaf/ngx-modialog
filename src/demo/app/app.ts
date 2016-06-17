import { Component, ViewEncapsulation } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS],
  directives: [],
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'demo/app/app.css'
  ],
  templateUrl: 'demo/app/app.html'
})
export class App {
  constructor() {
  }
}
