import { ComponentFactoryResolver } from '@angular/core';
export function createComponent(instructions) {
    var injector = instructions.injector || instructions.vcRef.parentInjector;
    var cmpFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(instructions.component);
    if (instructions.vcRef) {
        return instructions.vcRef.createComponent(cmpFactory, instructions.vcRef.length, injector, instructions.projectableNodes);
    }
    else {
        return cmpFactory.create(injector);
    }
}
//# sourceMappingURL=createComponent.js.map