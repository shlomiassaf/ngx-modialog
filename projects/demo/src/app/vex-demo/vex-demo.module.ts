import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VexModalModule } from 'ngx-modialog/plugins/vex';
import { SharedModule } from '../shared.module';

import { routing } from './vex-demo.routes';
import { VexDemo } from './vex-demo';
import { LoginDialog } from './login-dialog';

@NgModule({
  imports: [ FormsModule, CommonModule, VexModalModule, routing, SharedModule ],
  declarations: [ VexDemo, LoginDialog ],
  entryComponents: [ LoginDialog ]
})
export class VexDemoModule { }
