import { NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './demo/app/app.module';


let _bootstrapped = false;

export function main(): Promise<NgModuleRef<AppModule>> {
  if (_bootstrapped) {
    return <any>Promise.reject(null);
  } else {
    _bootstrapped = true;
    return platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
}

export function isBootstrapped(): boolean {
  return _bootstrapped;
}

document.addEventListener('DOMContentLoaded', main);
