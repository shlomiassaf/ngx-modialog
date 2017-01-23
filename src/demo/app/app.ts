import { Component, ViewEncapsulation } from '@angular/core';
require('!!style-loader!css-loader!bootstrap/dist/css/bootstrap.css');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.css'
  ],
  templateUrl: './app.html'
})
export class App {
  constructor() { }
}
