import {
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef
} from '@angular/core';

export interface CreateComponentArgs {
  component: any;
  vcRef: ViewContainerRef;
  injector?: Injector;
  projectableNodes?: any[][];
}

export function createComponent(instructions: CreateComponentArgs): ComponentRef<any> {
  const injector: Injector =  instructions.injector || instructions.vcRef.parentInjector;
  const cmpFactory: ComponentFactory<any>
    = injector.get(ComponentFactoryResolver).resolveComponentFactory(instructions.component);

  if (instructions.vcRef) {
    return instructions.vcRef.createComponent(
      cmpFactory,
      instructions.vcRef.length,
      injector,
      instructions.projectableNodes
    );
  } else {
    return cmpFactory.create(injector);
  }
}

