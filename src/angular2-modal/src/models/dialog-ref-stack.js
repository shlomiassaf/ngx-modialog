var BASKET_GROUP = {};
/**
 * A dumb stack implementation over an array.
 */
var DialogRefStack = (function () {
    function DialogRefStack() {
        this._stack = [];
        this._stackMap = new Map();
    }
    Object.defineProperty(DialogRefStack.prototype, "length", {
        get: function () {
            return this._stack.length;
        },
        enumerable: true,
        configurable: true
    });
    DialogRefStack.prototype.push = function (dialogRef, group) {
        if (this._stack.indexOf(dialogRef) === -1) {
            this._stack.push(dialogRef);
            this._stackMap.set(dialogRef, group || BASKET_GROUP);
        }
    };
    /**
     * Push a DialogRef into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param dialogRef
     */
    DialogRefStack.prototype.pushManaged = function (dialogRef, group) {
        var _this = this;
        this.push(dialogRef, group);
        dialogRef.onDestroy.subscribe(function () { return _this.remove(dialogRef); });
    };
    DialogRefStack.prototype.pop = function () {
        var dialogRef = this._stack.pop();
        this._stackMap.delete(dialogRef);
        return dialogRef;
    };
    /**
     * Remove a DialogRef from the stack.
     * @param dialogRef
     */
    DialogRefStack.prototype.remove = function (dialogRef) {
        var idx = this.indexOf(dialogRef);
        if (idx > -1) {
            this._stack.splice(idx, 1);
            this._stackMap.delete(dialogRef);
        }
    };
    DialogRefStack.prototype.index = function (index) {
        return this._stack[index];
    };
    DialogRefStack.prototype.indexOf = function (dialogRef) {
        return this._stack.indexOf(dialogRef);
    };
    DialogRefStack.prototype.groupOf = function (dialogRef) {
        return this._stackMap.get(dialogRef);
    };
    DialogRefStack.prototype.groupBy = function (group) {
        var arr = [];
        if (group) {
            this._stackMap.forEach(function (value, key) {
                if (value === group) {
                    arr.push(key);
                }
            });
        }
        return arr;
    };
    DialogRefStack.prototype.groupLength = function (group) {
        var count = 0;
        if (group) {
            this._stackMap.forEach(function (value, key) {
                if (value === group) {
                    count++;
                }
            });
        }
        return count;
    };
    return DialogRefStack;
}());
export { DialogRefStack };
//# sourceMappingURL=dialog-ref-stack.js.map