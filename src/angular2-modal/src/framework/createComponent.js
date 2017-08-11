import { ComponentFactoryResolver, ReflectiveInjector } from '@angular/core';
export function createComponent(instructions) {
    var injector = getInjector(instructions);
    var cmpFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(instructions.component);
    if (instructions.vcRef) {
        return instructions.vcRef.createComponent(cmpFactory, instructions.vcRef.length, injector, instructions.projectableNodes);
    }
    else {
        return cmpFactory.create(injector);
    }
}
function getInjector(instructions) {
    var ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
    return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ?
        ReflectiveInjector.fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;
}
//# sourceMappingURL=createComponent.js.map