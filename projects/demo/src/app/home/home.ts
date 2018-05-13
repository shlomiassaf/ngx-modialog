import { Component, ViewEncapsulation, ViewChild, TemplateRef, VERSION as NG_VERSION } from '@angular/core';

import { InAppModalModule, Modal } from './in-app-plugin/index';

@Component({
  selector: 'home',
  providers: InAppModalModule.getProviders(),
  templateUrl: './home.tpl.html',
  encapsulation: ViewEncapsulation.None
})
export class Home {
  @ViewChild('myTemplate', {read: TemplateRef}) public myTemplate: TemplateRef<any>;

  readonly version = require('../../../../ngx-modialog/package.json').version;
  readonly ngVersion = NG_VERSION.full;

  constructor(private modal: Modal) {
  }

  ngAfterViewInit() {
    this.modal.alert()
      .title('Angular 2 Modal')
      .templateRef(this.myTemplate)
      .inElement(true)
      .open('home-overlay-container')
      .result
        .then(d => d.result)
        .catch((e) => {
            console.log('This message should appear if you navigate away from the home page.');
            console.log('If a modal is opened in a view container within a component that is the page or' +
              'part of the page, navigation will destroy the page thus destroy the modal. To prevent ' +
              'memory leaks and unexpected behavior a "DialogBailOutError" error is thrown.');
            console.log(e);
        });
  }
}
