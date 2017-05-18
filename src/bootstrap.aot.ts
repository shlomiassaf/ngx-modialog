import { platformBrowser } from '@angular/platform-browser';
// The app module
import { AppModuleNgFactory } from '../compiled/src/demo/app/app.module.ngfactory';


let _bootstrapped = false;

export function main(): Promise<any> {
  if (_bootstrapped) {
    return <any>Promise.reject(null);
  } else {
    _bootstrapped = true;
    return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
      .catch(err => console.error(err));
  }
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
