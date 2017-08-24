import {
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ReflectiveInjector,
  ResolvedReflectiveProvider
} from '@angular/core';

export interface CreateComponentArgs {
  component: any;
  vcRef: ViewContainerRef;
  injector?: Injector;
  bindings?: ResolvedReflectiveProvider[];
  projectableNodes?: any[][];
}

export function createComponent(instructions: CreateComponentArgs): ComponentRef<any> {
  const injector: Injector = getInjector(instructions);
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

function getInjector(instructions: CreateComponentArgs) {
  const ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
  return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ?
    ReflectiveInjector.fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;

}

