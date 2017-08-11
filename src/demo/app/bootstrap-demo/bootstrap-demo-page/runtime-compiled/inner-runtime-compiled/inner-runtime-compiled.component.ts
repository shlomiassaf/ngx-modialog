import { Component } from '@angular/core';
import { DialogRef } from "ngx-modialog";


@Component({
  selector: 'runtime-compiled-component',
  template:
`<div class="modal-header">
    <h3>I'm another JIT compiled component!</h3>
</div>
<div class="modal-body">
  <h4>Choose a result:</h4>
  <button class="btn btn-primary" (click)="close('A')">A</button>
  <button class="btn btn-primary" (click)="close('B')">B</button>
  <button class="btn btn-primary" (click)="close('C')">C</button>
</div>`
})
export class InnerRuntimeCompiledComponent {
  constructor(private dialogRef: DialogRef<any>) {

  }

  close(value: string): void {
    this.dialogRef.close(value);
  }
}
