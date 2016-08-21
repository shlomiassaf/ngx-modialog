import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay } from '../../components/angular2-modal';

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
  constructor(baseModal: Overlay, vcRef: ViewContainerRef) {
    /**
     * A Default view container ref, usually the app root container ref.
     * Has to be set manually until we can find a way to get it automatically.
     */
    baseModal.defaultViewContainer = vcRef;
  }
}
