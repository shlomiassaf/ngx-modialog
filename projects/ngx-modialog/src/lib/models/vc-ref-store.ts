import { ViewContainerRef } from '@angular/core';

const vcRefCollection: { [key: string]: ViewContainerRef[] } = {};


function getVCRef(key: string): ViewContainerRef[] {
  return vcRefCollection[key] ? vcRefCollection[key].slice() : [];
}

function setVCRef(key: string, vcRef: ViewContainerRef): void {
  if (!vcRefCollection.hasOwnProperty(key)) {
    vcRefCollection[key] = [];
  }
  vcRefCollection[key].push(vcRef);
}

function delVCRef(key: string, vcRef?: ViewContainerRef): void {
    if (!vcRef) {
      vcRefCollection[key] = [];
    } else {
      const coll = vcRefCollection[key] || [],
            idx = coll.indexOf(vcRef);
      if (idx > -1) {
        coll.splice(idx, 1);
      }
    }
}

/**
 * A Simple store that holds a reference to ViewContainerRef instances by a user defined key.
 * This, with the OverlayTarget directive makes it easy to block the overlay inside an element
 * without having to use the angular query boilerplate.
 */
export const vcRefStore = { getVCRef, setVCRef, delVCRef };
