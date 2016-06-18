"use strict";
/**
 * A dumb stack implementation over an array.
 */
var DialogRefStack = (function () {
    function DialogRefStack() {
        this._stack = [];
    }
    DialogRefStack.prototype.push = function (dialogRef) {
        var idx = this._stack.indexOf(dialogRef);
        if (idx === -1)
            this._stack.push(dialogRef);
    };
    /**
     * Push a DialogRef into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param dialogRef
     */
    DialogRefStack.prototype.pushManaged = function (dialogRef) {
        this.push(dialogRef);
    };
    DialogRefStack.prototype.pop = function () {
        this._stack.pop();
    };
    /**
     * Remove a DialogRef from the stack.
     * @param dialogRef
     */
    DialogRefStack.prototype.remove = function (dialogRef) {
        var idx = this._stack.indexOf(dialogRef);
        if (idx > -1)
            this._stack.splice(idx, 1);
    };
    DialogRefStack.prototype.index = function (index) {
        return this._stack[index];
    };
    DialogRefStack.prototype.indexOf = function (dialogRef) {
        return this._stack.indexOf(dialogRef);
    };
    Object.defineProperty(DialogRefStack.prototype, "length", {
        get: function () {
            return this._stack.length;
        },
        enumerable: true,
        configurable: true
    });
    return DialogRefStack;
}());
exports.DialogRefStack = DialogRefStack;
//# sourceMappingURL=dialog-ref-stack.js.map