import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NiftyModule } from '../../../components/angular2-modal/plugins/nifty';
import { SharedModule } from '../shared.module';

import { routing } from './nifty-demo.routes';
import { NiftyDemo } from './nifty-demo';

@NgModule({
  imports: [ FormsModule, CommonModule, NiftyModule, routing, SharedModule ],
  declarations: [ NiftyDemo ]
})
export class NiftyDemoModule { }
