import {
  ComponentRef,
  Directive,
  Input,
  Output,
  ReflectiveInjector,
  ResolvedReflectiveProvider,
  ViewContainerRef,
  ComponentFactoryResolver,
  EventEmitter,
  TemplateRef,
  Injector
} from '@angular/core';

// <template [dynCmp]="myCmp" [dynCmpBindings]="myBindings"></template>
// <template [dynCmp]="ctx.component" [dynCmpBindings]="ctx.bindings" [dynCmpProjectables]="ctx.projectableNodes"></template>

@Directive({
  selector: '[swapCmp]'
})
export class SwapComponentDirective {
  private component: any;

  constructor(private cfr: ComponentFactoryResolver,
              private vcRef: ViewContainerRef,
              private tRef: TemplateRef<Object>) {
  }

  @Input() swapCmpBindings: ResolvedReflectiveProvider[];
  @Input() swapCmpInjector: Injector;
  @Input() swapCmpProjectables: any[][];

  @Output() onCreate: EventEmitter<ComponentRef<any>> = new EventEmitter<ComponentRef<any>>(false);

  @Input() set swapCmp(component: any) {
    this.component = component;
    this.vcRef.clear();
    if (this.component) {
      let injector = this.swapCmpInjector || this.vcRef.parentInjector;

      if (Array.isArray(this.swapCmpBindings) && this.swapCmpBindings.length > 0) {
        injector = ReflectiveInjector.fromResolvedProviders(this.swapCmpBindings, injector);
      }

      const cmpRef = this.vcRef.createComponent(
        this.cfr.resolveComponentFactory(component),
        this.vcRef.length,
        injector,
        this.swapCmpProjectables
      );

      cmpRef.changeDetectorRef.detectChanges();

      this.onCreate.emit(cmpRef);
    }
  }
}

// <component-linker [linkedComponent]="ctx.component" [bindings]="ctx.bindings"></component-linker>
// @Component({
//   selector: 'component-linker',
//   template: ''
// })
// export class ComponentLinker {
//
//   @Input() linkedComponent: any;
//   @Input() bindings: ResolvedReflectiveProvider[];
//
//   @Output() onCreate: EventEmitter<ComponentRef<any>> = new EventEmitter<ComponentRef<any>>(false);
//   constructor(private vcRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {
//
//   }
//
//   ngAfterViewInit() {
//     let injector = this.vcRef.parentInjector;
//
//     if (Array.isArray(this.bindings) && this.bindings.length > 0) {
//       injector = ReflectiveInjector.fromResolvedProviders(this.bindings, injector);
//     }
//
//     const cmpRef = this.vcRef.createComponent(
//       this.cfr.resolveComponentFactory(this.linkedComponent),
//       this.vcRef.length,
//       injector
//     );
//
//     cmpRef.changeDetectorRef.detectChanges();
//
//     this.onCreate.emit(cmpRef);
//   }
// }