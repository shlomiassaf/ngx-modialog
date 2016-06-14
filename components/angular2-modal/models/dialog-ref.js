"use strict";
var promise_1 = require('@angular/core/src/facade/promise');
/**
 * API to an open modal window.
 */
var DialogRef = (function () {
    function DialogRef(context) {
        this.context = context;
        this._resultDeferred = promise_1.PromiseWrapper.completer();
    }
    Object.defineProperty(DialogRef.prototype, "result", {
        /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
        get: function () {
            return this._resultDeferred.promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Close the modal with a return value, i.e: result.
     */
    DialogRef.prototype.close = function (result) {
        if (result === void 0) { result = null; }
        if (this._fireHook('beforeClose') === true)
            return;
        this.destroy();
        this._resultDeferred.resolve(result);
    };
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    DialogRef.prototype.dismiss = function () {
        if (this._fireHook('beforeDismiss') === true)
            return;
        this.destroy();
        this._resultDeferred.reject();
    };
    DialogRef.prototype.destroy = function () { };
    DialogRef.prototype._fireHook = function (name) {
        var instance = this.contentRef && this.contentRef.instance, fn = instance && typeof instance[name] === 'function' && instance[name];
        if (fn) {
            return fn.call(instance);
        }
        else {
            return undefined;
        }
    };
    return DialogRef;
}());
exports.DialogRef = DialogRef;
//# sourceMappingURL=dialog-ref.js.map