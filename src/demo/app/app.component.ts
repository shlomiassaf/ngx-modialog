import { Component, ViewEncapsulation } from '@angular/core';
require('!!style-loader!css-loader!bootstrap/dist/css/bootstrap.css');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class App {
  constructor() { }
}
