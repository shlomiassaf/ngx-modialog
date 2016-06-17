"use strict";
var promise_1 = require('@angular/core/src/facade/promise');
/**
 * API to an open modal window.
 */
var DialogRef = (function () {
    function DialogRef(context) {
        this.context = context;
        this._resultDeferred = new promise_1.PromiseCompleter();
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
        var _this = this;
        if (result === void 0) { result = null; }
        var _close = function () {
            _this.destroy();
            _this._resultDeferred.resolve(result);
        };
        this._fireHook('beforeClose')
            .then(function (value) { return value !== true && _close(); })
            .catch(_close);
    };
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    DialogRef.prototype.dismiss = function () {
        var _this = this;
        var _dismiss = function () {
            _this.destroy();
            _this._resultDeferred.reject();
        };
        this._fireHook('beforeDismiss')
            .then(function (value) { return value !== true && _dismiss(); })
            .catch(_dismiss);
    };
    DialogRef.prototype.destroy = function () { };
    DialogRef.prototype._fireHook = function (name) {
        var instance = this.contentRef && this.contentRef.instance, fn = instance && typeof instance[name] === 'function' && instance[name];
        return Promise.resolve(fn ? fn.call(instance) : false);
    };
    return DialogRef;
}());
exports.DialogRef = DialogRef;
//# sourceMappingURL=dialog-ref.js.map