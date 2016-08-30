import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ReflectiveInjector,
  ResolvedReflectiveProvider
} from '@angular/core';

export function createComponent(cfr: ComponentFactoryResolver,
                                        type: any,
                                        vcr: ViewContainerRef,
                                        bindings: ResolvedReflectiveProvider[],
                                        projectableNodes?: any[][]): ComponentRef<any> {
  return vcr.createComponent(
    cfr.resolveComponentFactory(type),
    vcr.length,
    getInjector(vcr, bindings),
    projectableNodes
  );
}

function getInjector(viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[]) {
  const ctxInjector = viewContainer.parentInjector;
  return Array.isArray(bindings) && bindings.length > 0 ?
    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;

}

export default createComponent;
