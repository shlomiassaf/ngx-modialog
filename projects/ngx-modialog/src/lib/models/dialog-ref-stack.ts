import { DialogRef } from './dialog-ref';

const BASKET_GROUP = {};

/**
 * A dumb stack implementation over an array.
 */
export class DialogRefStack<T> {
  private _stack: DialogRef<T>[];
  private _stackMap: Map<DialogRef<T>, any>;

  get length(): number {
    return this._stack.length;
  }

  constructor() {
    this._stack = [];
    this._stackMap = new Map<DialogRef<T>, any>();
  }

  closeAll(result: any = null): void {
    for (let i=0, len=this._stack.length; i<len; i++) {
      this._stack.pop().close(result);
    }
  }

  push(dialogRef: DialogRef<T>, group?: any): void {
    if (this._stack.indexOf(dialogRef) === -1) {
      this._stack.push(dialogRef);
      this._stackMap.set(dialogRef, group || BASKET_GROUP);
    }
  }

  /**
   * Push a DialogRef into the stack and manage it so when it's done
   * it will automatically kick itself out of the stack.
   * @param dialogRef
   */
  pushManaged(dialogRef: DialogRef<T>, group?: any): void {
    this.push(dialogRef, group);
    dialogRef.onDestroy.subscribe(() => this.remove(dialogRef));
  }

  pop(): DialogRef<T> {
    const dialogRef = this._stack.pop();
    this._stackMap.delete(dialogRef);
    return dialogRef;
  }

  /**
   * Remove a DialogRef from the stack.
   * @param dialogRef
   */
  remove(dialogRef: DialogRef<T>): void {
    let idx = this.indexOf(dialogRef);
    if (idx > -1) {
      this._stack.splice(idx, 1);
      this._stackMap.delete(dialogRef);
    }
  }

  index(index: number): DialogRef<T> {
    return this._stack[index];
  }

  indexOf(dialogRef: DialogRef<T>): number {
     return this._stack.indexOf(dialogRef);
  }

  groupOf(dialogRef: DialogRef<T>): any {
    return this._stackMap.get(dialogRef);
  }

  groupBy(group: any): DialogRef<T>[] {
    let arr = [];
    if (group) {
      this._stackMap.forEach( (value, key) => {
        if (value === group) {
          arr.push(key);
        }
      });
    }
    return arr;
  }

  groupLength(group: any): number {
    let count = 0;
    if (group) {
      this._stackMap.forEach( (value) => {
        if (value === group) {
          count++;
        }
      });
    }
    return count;
  }
}
