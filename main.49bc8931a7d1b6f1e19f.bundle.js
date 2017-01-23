webpackJsonp([ 1 ], [ /* 0 */
, /* 1 */
, /* 2 */
, /* 3 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__ = __webpack_require__(383);
    /* harmony namespace reexport (by used) */
    __webpack_require__.d(__webpack_exports__, "m", function() {
        return __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__.b;
    }), /* harmony namespace reexport (by used) */
    __webpack_require__.d(__webpack_exports__, "o", function() {
        return __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__.c;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(87);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "l", function() {
        return __WEBPACK_IMPORTED_MODULE_1__framework_utils__.e;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "h", function() {
        return __WEBPACK_IMPORTED_MODULE_1__framework_utils__.d;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "k", function() {
        return __WEBPACK_IMPORTED_MODULE_1__framework_utils__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__framework_createComponent__ = __webpack_require__(258), __WEBPACK_IMPORTED_MODULE_3__models_errors__ = __webpack_require__(384), __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__ = __webpack_require__(88);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5__models_tokens__ = __webpack_require__(259);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "f", function() {
        return __WEBPACK_IMPORTED_MODULE_5__models_tokens__.b;
    });
    /* unused harmony reexport OverlayRenderer */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_6__providers_index__ = __webpack_require__(261);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_6__providers_index__.c;
    });
    /* unused harmony reexport DOMOverlayRenderer */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_7__models_overlay_context__ = __webpack_require__(386);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "p", function() {
        return __WEBPACK_IMPORTED_MODULE_7__models_overlay_context__.c;
    });
    /* unused harmony reexport OverlayContext */
    /* unused harmony reexport OverlayContextBuilder */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_8__overlay_index__ = __webpack_require__(260);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "g", function() {
        return __WEBPACK_IMPORTED_MODULE_8__overlay_index__.a;
    });
    /* unused harmony reexport ModalOverlay */
    /* unused harmony reexport OverlayDialogBoundary */
    /* unused harmony reexport OverlayTarget */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_9__models_modal_context__ = __webpack_require__(385), __WEBPACK_IMPORTED_MODULE_10__models_modal_open_context__ = __webpack_require__(720);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_10__models_modal_open_context__.a;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "e", function() {
        return __WEBPACK_IMPORTED_MODULE_10__models_modal_open_context__.b;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_11__components_index__ = __webpack_require__(257);
    /* harmony namespace reexport (by used) */
    __webpack_require__.d(__webpack_exports__, "i", function() {
        return __WEBPACK_IMPORTED_MODULE_11__components_index__.b;
    }), /* harmony namespace reexport (by used) */
    __webpack_require__.d(__webpack_exports__, "j", function() {
        return __WEBPACK_IMPORTED_MODULE_11__components_index__.c;
    }), /* harmony namespace reexport (by used) */
    __webpack_require__.d(__webpack_exports__, "n", function() {
        return __WEBPACK_IMPORTED_MODULE_11__components_index__.d;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_12__angular2_modal_module__ = __webpack_require__(715);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_12__angular2_modal_module__.a;
    });
}, /* 4 */
, /* 5 */
, /* 6 */
, /* 7 */
, /* 8 */
, /* 9 */
, /* 10 */
, /* 11 */
, /* 12 */
, /* 13 */
, /* 14 */
, /* 15 */
, /* 16 */
, /* 17 */
, /* 18 */
, /* 19 */
, /* 20 */
, /* 21 */
, /* 22 */
, /* 23 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(66), __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(219), __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(520);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogRef;
    });
    /**
 * API to an open modal window.
 */
    var DialogRef = function() {
        function DialogRef(overlay, context) {
            this.overlay = overlay, this.context = context, this._resultDeferred = new __WEBPACK_IMPORTED_MODULE_1__framework_utils__.a(), 
            this._onDestroy = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__.Subject(), this.onDestroy = this._onDestroy.asObservable();
        }
        /**
     * Set a close/dismiss guard
     * @param g
     */
        /**
     *  Close the modal with a return value, i.e: result.
     */
        /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
        /**
     * Gracefully close the overlay/dialog with a rejected result.
     * Does not trigger canDestroy on the overlay.
     */
        return Object.defineProperty(DialogRef.prototype, "result", {
            /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
            get: function() {
                return this._resultDeferred.promise;
            },
            enumerable: !0,
            configurable: !0
        }), DialogRef.prototype.setCloseGuard = function(guard) {
            this.closeGuard = guard;
        }, DialogRef.prototype.close = function(result) {
            var _this = this;
            void 0 === result && (result = null);
            var _close = function() {
                _this.destroy(), _this._resultDeferred.resolve(result);
            };
            this._fireHook("beforeClose").then(function(value) {
                return value !== !0 && _close();
            }).catch(_close);
        }, DialogRef.prototype.dismiss = function() {
            var _this = this, _dismiss = function() {
                _this.destroy(), _this._resultDeferred.promise.catch(function() {}), _this._resultDeferred.reject();
            };
            this._fireHook("beforeDismiss").then(function(value) {
                return value !== !0 && _dismiss();
            }).catch(_dismiss);
        }, DialogRef.prototype.bailOut = function() {
            this.destroyed !== !0 && (this.destroyed = !0, this._onDestroy.next(null), this._onDestroy.complete(), 
            this._resultDeferred.reject(new __WEBPACK_IMPORTED_MODULE_2__models_errors__.a()));
        }, DialogRef.prototype.destroy = function() {
            var _this = this;
            this.destroyed !== !0 && (this.destroyed = !0, "function" == typeof this.overlayRef.instance.canDestroy ? this.overlayRef.instance.canDestroy().catch(function() {}).then(function() {
                return _this._destroy();
            }) : this._destroy());
        }, DialogRef.prototype._destroy = function() {
            this._onDestroy.next(null), this._onDestroy.complete(), this.overlayRef.destroy();
        }, DialogRef.prototype._fireHook = function(name) {
            var gurad = this.closeGuard, fn = gurad && "function" == typeof gurad[name] && gurad[name];
            return Promise.resolve(!!fn && fn.call(gurad));
        }, DialogRef;
    }();
}, /* 24 */
, /* 25 */
, /* 26 */
, /* 27 */
, /* 28 */
, /* 29 */
, /* 30 */
, /* 31 */
, /* 32 */
, /* 33 */
, /* 34 */
, /* 35 */
, /* 36 */
, /* 37 */
, /* 38 */
, /* 39 */
, /* 40 */
, /* 41 */
, /* 42 */
, /* 43 */
, /* 44 */
, /* 45 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(364)(), // imports
    // module
    exports.push([ module.i, "", "" ]);
}, /* 46 */
, /* 47 */
, /* 48 */
, /* 49 */
, /* 50 */
, /* 51 */
, /* 52 */
, /* 53 */
, /* 54 */
, /* 55 */
, /* 56 */
, /* 57 */
, /* 58 */
, /* 59 */
, /* 60 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__models_tokens__ = __webpack_require__(220), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref_stack__ = __webpack_require__(519), __WEBPACK_IMPORTED_MODULE_3__models_vc_ref_store__ = __webpack_require__(323), __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__ = __webpack_require__(23);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Overlay;
    });
    var _stack = new __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref_stack__.a(), Overlay = function() {
        function Overlay(_modalRenderer) {
            this._modalRenderer = _modalRenderer;
        }
        /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
        /**
     * Creates an overlay and returns a dialog ref.
     * @param config instructions how to create the overlay
     * @param group A token to associate the new overlay with, used for reference (stacks usually)
     * @returns {DialogRef<T>[]}
     */
        return Object.defineProperty(Overlay.prototype, "stackLength", {
            get: function() {
                return _stack.length;
            },
            enumerable: !0,
            configurable: !0
        }), Overlay.prototype.isTopMost = function(dialogRef) {
            return _stack.indexOf(dialogRef) === _stack.length - 1;
        }, Overlay.prototype.stackPosition = function(dialogRef) {
            return _stack.indexOf(dialogRef);
        }, Overlay.prototype.groupStackLength = function(dialogRef) {
            return _stack.groupLength(_stack.groupOf(dialogRef));
        }, Overlay.prototype.open = function(config, group) {
            var _this = this, viewContainer = config.viewContainer, containers = [];
            if ("string" == typeof viewContainer ? containers = __WEBPACK_IMPORTED_MODULE_3__models_vc_ref_store__.a.getVCRef(viewContainer) : Array.isArray(viewContainer) ? containers = viewContainer : viewContainer && (containers = [ viewContainer ]), 
            !containers || !containers[0]) {
                if (!this.defaultViewContainer) throw new Error('Default view container not set. Add the "defaultOverlayTarget" directive to the application root component template (e.g: <span defaultOverlayTarget></span>. You can also set it manually using the "Overlay" service "defaultViewContainer" property.');
                containers = [ this.defaultViewContainer ];
            }
            return containers.map(function(vc) {
                return _this.createOverlay(config.renderer || _this._modalRenderer, vc, config, group);
            });
        }, Overlay.prototype.createOverlay = function(renderer, vcRef, config, group) {
            config.context && config.context.normalize();
            var dialog = new __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__.a(this, config.context || {});
            dialog.inElement = config.context && !!config.context.inElement;
            var cmpRef = renderer.render(dialog, vcRef, config.injector);
            return Object.defineProperty(dialog, "overlayRef", {
                value: cmpRef
            }), _stack.pushManaged(dialog, group), dialog;
        }, Overlay;
    }();
    Overlay = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1__models_tokens__.a ]) ], Overlay);
}, /* 61 */
, /* 62 */
, /* 63 */
, /* 64 */
, /* 65 */
, /* 66 */
, /* 67 */
, /* 68 */
, /* 69 */
, /* 70 */
, /* 71 */
, /* 72 */
, /* 73 */
, /* 74 */
, /* 75 */
, /* 76 */
, /* 77 */
, /* 78 */
, /* 79 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__ = __webpack_require__(23);
    /* unused harmony export UnsupportedDropInError */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var UnsupportedDropInError = function(_super) {
        function UnsupportedDropInError(dropInName) {
            var _this = _super.call(this) || this;
            return _this.message = "Unsupported Drop-In " + dropInName, _this;
        }
        return __extends(UnsupportedDropInError, _super), UnsupportedDropInError;
    }(Error), Modal = function() {
        function Modal(overlay) {
            this.overlay = overlay;
        }
        /**
     * Opens a modal window inside an existing component.
     * @param content The content to display, either string, template ref or a component.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
        /**
     * A helper function for derived classes to create backdrop & container
     * @param dialogRef
     * @param backdrop
     * @param container
     * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
     *
     * @deprecated use createBackdrop and createContainer instead
     */
        return Modal.prototype.alert = function() {
            throw new UnsupportedDropInError("alert");
        }, Modal.prototype.prompt = function() {
            throw new UnsupportedDropInError("prompt");
        }, Modal.prototype.confirm = function() {
            throw new UnsupportedDropInError("confirm");
        }, Modal.prototype.open = function(content, config) {
            config = config || {};
            try {
                var dialogs = this.overlay.open(config, this.constructor);
                // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
                //        upgrade to multiple containers.
                return dialogs.length > 1 && console.warn("Attempt to open more then 1 overlay detected.\n        Multiple modal copies are not supported at the moment, \n        only the first viewContainer will display."), 
                Promise.resolve(this.create(dialogs[0], content, config.bindings));
            } catch (e) {
                return Promise.reject(e);
            }
        }, Modal.prototype.createBackdrop = function(dialogRef, BackdropComponent) {
            var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a,
                useValue: dialogRef
            } ]);
            return dialogRef.overlayRef.instance.addComponent(BackdropComponent, b);
        }, Modal.prototype.createContainer = function(dialogRef, ContainerComponent, content, bindings) {
            var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a,
                useValue: dialogRef
            } ]).concat(bindings || []), nodes = dialogRef.overlayRef.instance.getProjectables(content, b);
            return dialogRef.overlayRef.instance.addComponent(ContainerComponent, b, nodes);
        }, Modal.prototype.createModal = function(dialogRef, backdrop, container) {
            var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a,
                useValue: dialogRef
            } ]);
            return {
                backdropRef: dialogRef.overlayRef.instance.addComponent(backdrop, b),
                containerRef: dialogRef.overlayRef.instance.addComponent(container, b)
            };
        }, Modal;
    }();
}, /* 80 */
, /* 81 */
, /* 82 */
, /* 83 */
, /* 84 */
, /* 85 */
, /* 86 */
, /* 87 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */
    /**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */
    function extend(m1, m2) {
        var m = {};
        for (var attr in m1) m1.hasOwnProperty(attr) && (m[attr] = m1[attr]);
        for (var attr in m2) m2.hasOwnProperty(attr) && (m[attr] = m2[attr]);
        return m;
    }
    /**
 * Simple, not optimized, array union of unique values.
 * @param arr1
 * @param arr2
 * @returns {T[]|any[]|any[][]|any[]}
 */
    function arrayUnion(arr1, arr2) {
        return arr1.concat(arr2.filter(function(v) {
            return arr1.indexOf(v) === -1;
        }));
    }
    /**
 * Returns true if the config supports a given key.
 * @param key
 * @returns {boolean}
 */
    function supportsKey(keyCode, config) {
        return Array.isArray(config) ? config.indexOf(keyCode) > -1 : null !== config;
    }
    /**
 * Given an object representing a key/value map of css properties, returns a valid css string
 * representing the object.
 * Example:
 * console.log(toStyleString({
 *     position: 'absolute',
 *     width: '100%',
 *     height: '100%',
 *     top: '0',
 *     left: '0',
 *     right: '0',
 *     bottom: '0'
 * }));
 * // position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0
 * @param obj
 * @returns {string}
 */
    function toStyleString(obj) {
        return Object.getOwnPropertyNames(obj).map(function(k) {
            return k + ":" + obj[k];
        }).join(";");
    }
    function noop() {}
    /* harmony export (immutable) */
    __webpack_exports__.e = extend, /* harmony export (immutable) */
    __webpack_exports__.d = arrayUnion, /* harmony export (immutable) */
    __webpack_exports__.b = supportsKey, /* unused harmony export toStyleString */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return PromiseCompleter;
    }), /* harmony export (immutable) */
    __webpack_exports__.c = noop;
    var PromiseCompleter = function() {
        function PromiseCompleter() {
            var _this = this;
            this.promise = new Promise(function(res, rej) {
                _this.resolve = res, _this.reject = rej;
            });
        }
        return PromiseCompleter;
    }();
}, /* 88 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(66), __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(87), __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(384);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogRef;
    });
    /**
 * API to an open modal window.
 */
    var DialogRef = function() {
        function DialogRef(overlay, context) {
            this.overlay = overlay, this.context = context, this._resultDeferred = new __WEBPACK_IMPORTED_MODULE_1__framework_utils__.a(), 
            this._onDestroy = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__.Subject(), this.onDestroy = this._onDestroy.asObservable();
        }
        /**
     * Set a close/dismiss guard
     * @param g
     */
        /**
     *  Close the modal with a return value, i.e: result.
     */
        /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
        /**
     * Gracefully close the overlay/dialog with a rejected result.
     * Does not trigger canDestroy on the overlay.
     */
        return Object.defineProperty(DialogRef.prototype, "result", {
            /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
            get: function() {
                return this._resultDeferred.promise;
            },
            enumerable: !0,
            configurable: !0
        }), DialogRef.prototype.setCloseGuard = function(guard) {
            this.closeGuard = guard;
        }, DialogRef.prototype.close = function(result) {
            var _this = this;
            void 0 === result && (result = null);
            var _close = function() {
                _this.destroy(), _this._resultDeferred.resolve(result);
            };
            this._fireHook("beforeClose").then(function(value) {
                return value !== !0 && _close();
            }).catch(_close);
        }, DialogRef.prototype.dismiss = function() {
            var _this = this, _dismiss = function() {
                _this.destroy(), _this._resultDeferred.promise.catch(function() {}), _this._resultDeferred.reject();
            };
            this._fireHook("beforeDismiss").then(function(value) {
                return value !== !0 && _dismiss();
            }).catch(_dismiss);
        }, DialogRef.prototype.bailOut = function() {
            this.destroyed !== !0 && (this.destroyed = !0, this._onDestroy.next(null), this._onDestroy.complete(), 
            this._resultDeferred.reject(new __WEBPACK_IMPORTED_MODULE_2__models_errors__.a()));
        }, DialogRef.prototype.destroy = function() {
            var _this = this;
            this.destroyed !== !0 && (this.destroyed = !0, "function" == typeof this.overlayRef.instance.canDestroy ? this.overlayRef.instance.canDestroy().catch(function() {}).then(function() {
                return _this._destroy();
            }) : this._destroy());
        }, DialogRef.prototype._destroy = function() {
            this._onDestroy.next(null), this._onDestroy.complete(), this.overlayRef.destroy();
        }, DialogRef.prototype._fireHook = function(name) {
            var gurad = this.closeGuard, fn = gurad && "function" == typeof gurad[name] && gurad[name];
            return Promise.resolve(!!fn && fn.call(gurad));
        }, DialogRef;
    }();
}, /* 89 */
, /* 90 */
, /* 91 */
, /* 92 */
, /* 93 */
, /* 94 */
, /* 95 */
, /* 96 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__ = __webpack_require__(323), __WEBPACK_IMPORTED_MODULE_3__overlay_service__ = __webpack_require__(60);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return OverlayDialogBoundary;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OverlayTarget;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return DefaultOverlayTarget;
    });
    /**
 * A directive use to signal the overlay that the host of this directive
 * is a dialog boundary, i.e: over click outside of the element should close the modal
 * (if non blocking)
 */
    var OverlayDialogBoundary = function() {
        function OverlayDialogBoundary(el, dialogRef) {
            dialogRef && el.nativeElement && dialogRef.overlayRef.instance.setClickBoundary(el.nativeElement);
        }
        return OverlayDialogBoundary;
    }();
    OverlayDialogBoundary = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[overlayDialogBoundary]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a ]) ], OverlayDialogBoundary);
    var OverlayTarget = function() {
        function OverlayTarget(vcRef) {
            this.vcRef = vcRef;
        }
        return Object.defineProperty(OverlayTarget.prototype, "targetKey", {
            set: function(value) {
                this._targetKey = value, value && __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__.a.setVCRef(value, this.vcRef);
            },
            enumerable: !0,
            configurable: !0
        }), OverlayTarget.prototype.ngOnDestroy = function() {
            this._targetKey && __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__.a.delVCRef(this._targetKey, this.vcRef);
        }, OverlayTarget;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)("overlayTarget"), __metadata("design:type", String), __metadata("design:paramtypes", [ String ]) ], OverlayTarget.prototype, "targetKey", null), 
    OverlayTarget = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[overlayTarget]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.H ]) ], OverlayTarget);
    var noop = function() {}, DefaultOverlayTarget = function() {
        function DefaultOverlayTarget(overlay, vcRef) {
            this.overlay = overlay, overlay.defaultViewContainer = vcRef;
        }
        return DefaultOverlayTarget.prototype.ngOnDestroy = function() {
            this.overlay.defaultViewContainer = void 0;
        }, DefaultOverlayTarget;
    }();
    DefaultOverlayTarget = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[defaultOverlayTarget]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_3__overlay_service__.a, __WEBPACK_IMPORTED_MODULE_0__angular_core__.H ]) ], DefaultOverlayTarget);
}, /* 97 */
, /* 98 */
, /* 99 */
, /* 100 */
, /* 101 */
, /* 102 */
, /* 103 */
, /* 104 */
, /* 105 */
, /* 106 */
, /* 107 */
, /* 108 */
, /* 109 */
, /* 110 */
, /* 111 */
, /* 112 */
, /* 113 */
, /* 114 */
, /* 115 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DemoHead;
    });
    var DemoHead = function() {
        function DemoHead() {
            this.dropInClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y();
        }
        return DemoHead.prototype.onClick = function(event, btn) {
            this.dropInClick.emit({
                event: event,
                source: btn
            }), this.processDialog(btn.factory());
        }, DemoHead.prototype.processDialog = function(dialog) {
            var _this = this;
            dialog.then(function(resultPromise) {
                return resultPromise.result.then(function(result) {
                    _this.result = result;
                }, function() {
                    return _this.result = "Rejected!";
                });
            });
        }, DemoHead;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", String) ], DemoHead.prototype, "title", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", String) ], DemoHead.prototype, "description", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], DemoHead.prototype, "modalCommands", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Z)(), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y) ], DemoHead.prototype, "dropInClick", void 0), 
    DemoHead = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "demo-head",
        styles: [ "\n      .btn-dropin {\n          text-transform: uppercase;\n          margin: 15px;\n          background-color: #219161;\n          border: none;\n          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n          border-radius: 0;\n      }\n      " ],
        template: __webpack_require__(680),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.Emulated
    }) ], DemoHead);
}, /* 116 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__demo_head_index__ = __webpack_require__(315);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return SharedModule;
    });
    var SharedModule = SharedModule_1 = function() {
        function SharedModule() {}
        return SharedModule.forRoot = function() {
            return {
                ngModule: SharedModule_1,
                providers: []
            };
        }, SharedModule;
    }();
    SharedModule = SharedModule_1 = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_1__angular_common__.g, __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.a ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_3__demo_head_index__.a ],
        exports: [ __WEBPACK_IMPORTED_MODULE_3__demo_head_index__.a, __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.a ]
    }) ], SharedModule);
    var SharedModule_1;
}, /* 117 */
, /* 118 */
, /* 119 */
, /* 120 */
, /* 121 */
, /* 122 */
, /* 123 */
, /* 124 */
, /* 125 */
, /* 126 */
, /* 127 */
, /* 128 */
, /* 129 */
, /* 130 */
, /* 131 */
, /* 132 */
, /* 133 */
, /* 134 */
, /* 135 */
, /* 136 */
, /* 137 */
, /* 138 */
, /* 139 */
, /* 140 */
, /* 141 */
, /* 142 */
, /* 143 */
, /* 144 */
, /* 145 */
, /* 146 */
, /* 147 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_directives__ = __webpack_require__(96), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return Wrapper_OverlayDialogBoundary;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return Wrapper_OverlayTarget;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Wrapper_DefaultOverlayTarget;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_OverlayDialogBoundary = function() {
        function Wrapper_OverlayDialogBoundary(p0, p1) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_directives__.b(p0, p1);
        }
        return Wrapper_OverlayDialogBoundary.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_OverlayDialogBoundary.prototype.ngOnDestroy = function() {}, Wrapper_OverlayDialogBoundary.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_OverlayDialogBoundary.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_OverlayDialogBoundary.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_OverlayDialogBoundary.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_OverlayDialogBoundary;
    }(), Wrapper_OverlayTarget = function() {
        function Wrapper_OverlayTarget(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_directives__.a(p0), 
            this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b;
        }
        return Wrapper_OverlayTarget.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_OverlayTarget.prototype.ngOnDestroy = function() {
            this.context.ngOnDestroy();
        }, Wrapper_OverlayTarget.prototype.check_targetKey = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_0, currValue)) && (this._changed = !0, 
            this.context.targetKey = currValue, this._expr_0 = currValue);
        }, Wrapper_OverlayTarget.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_OverlayTarget.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_OverlayTarget.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_OverlayTarget.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_OverlayTarget;
    }(), Wrapper_DefaultOverlayTarget = function() {
        function Wrapper_DefaultOverlayTarget(p0, p1) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_directives__.c(p0, p1);
        }
        return Wrapper_DefaultOverlayTarget.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_DefaultOverlayTarget.prototype.ngOnDestroy = function() {
            this.context.ngOnDestroy();
        }, Wrapper_DefaultOverlayTarget.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_DefaultOverlayTarget.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_DefaultOverlayTarget.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_DefaultOverlayTarget.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_DefaultOverlayTarget;
    }();
}, /* 148 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(175), __WEBPACK_IMPORTED_MODULE_3__custom_modal_sample__ = __webpack_require__(214), __WEBPACK_IMPORTED_MODULE_4__presets__ = __webpack_require__(513);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapDemoPage;
    });
    var runtimeModuleRefPromise, BootstrapDemoPage = function() {
        function BootstrapDemoPage(modal, compiler, injector) {
            var _this = this;
            this.modal = modal, this.compiler = compiler, this.injector = injector, this.modalCommands = [ {
                text: "alert drop in",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.a(_this.modal).open();
                }
            }, {
                text: "prompt drop in",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.b(_this.modal).open();
                }
            }, {
                text: "confirm drop in",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.c(_this.modal).open();
                }
            }, {
                text: "Cascading example",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.d(_this.modal).open();
                }
            }, {
                text: "In Element example",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.e(_this.modal).open("demo-head");
                }
            }, {
                text: "String content",
                factory: function() {
                    return _this.modal.open("Hello modal!", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.p)({
                        isBlocking: !1
                    }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__.b));
                }
            }, {
                text: "TemplateRef content",
                factory: function() {
                    return _this.modal.open(_this.templateRef, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.p)({
                        isBlocking: !1
                    }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__.b));
                }
            }, {
                text: "Custom Modal content",
                factory: function() {
                    return _this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal_sample__.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.p)({
                        num1: 2,
                        num2: 3
                    }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__.b));
                }
            } ];
        }
        return BootstrapDemoPage;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("templateRef"), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.G) ], BootstrapDemoPage.prototype, "templateRef", void 0), 
    BootstrapDemoPage = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "bootstrap-demo-page",
        styles: [ __webpack_require__(702) ],
        template: __webpack_require__(678)
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__.c, __WEBPACK_IMPORTED_MODULE_0__angular_core__.e, __WEBPACK_IMPORTED_MODULE_0__angular_core__.c ]) ], BootstrapDemoPage);
}, /* 149 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_bootstrap__ = __webpack_require__(175);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapDemo;
    });
    var BootstrapDemo = function() {
        function BootstrapDemo() {}
        return BootstrapDemo;
    }();
    BootstrapDemo = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "bootstrap-demo",
        template: "<router-outlet></router-outlet>",
        // We override providers set by the Module since this app is using multiple module plugins
        // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
        // usually an app will use one plugin and this line is not needed.
        providers: __WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_bootstrap__.d,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None
    }), __metadata("design:paramtypes", []) ], BootstrapDemo);
}, /* 150 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalCustomisationWizard;
    });
    var ModalCustomisationWizard = function() {
        function ModalCustomisationWizard(modal) {
            this.modal = modal, this.type = "alert", this.preset = {
                size: "lg",
                isBlocking: !0,
                showClose: !0,
                keyboard: 27,
                dialogClass: "",
                headerClass: "",
                title: "Hello World",
                titleHtml: "",
                body: "A Customized Modal",
                bodyClass: "",
                footerClass: "",
                okBtn: "",
                okBtnClass: ""
            };
        }
        return ModalCustomisationWizard.prototype.createModal = function() {
            var p = this.preset, fluent = this.modal[this.type]();
            for (var key in p) {
                var value = p[key];
                null !== value && "" !== value && fluent[key](value);
            }
            fluent.open();
        }, ModalCustomisationWizard.prototype.logForm = function(value) {}, Object.defineProperty(ModalCustomisationWizard.prototype, "code", {
            get: function() {
                var p = this.preset, code = "modal." + this.type + "()\n";
                for (var key in p) {
                    var value = p[key];
                    null !== value && "" !== value && (code += "    ." + key + "(" + ("string" == typeof value ? "'" + value + "'" : value) + ")\n");
                }
                return code += "    .open();";
            },
            enumerable: !0,
            configurable: !0
        }), ModalCustomisationWizard;
    }();
    ModalCustomisationWizard = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "customize-wizard",
        template: __webpack_require__(679)
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.b ]) ], ModalCustomisationWizard);
}, /* 151 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__in_app_plugin_index__ = __webpack_require__(215);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Home;
    });
    var Home = function() {
        function Home(modal) {
            this.modal = modal;
        }
        return Home.prototype.ngAfterViewInit = function() {
            this.modal.alert().title("Angular 2 Modal").templateRef(this.myTemplate).inElement(!0).open("home-overlay-container").then(function(d) {
                return d.result;
            }).catch(function(e) {
                console.log("This message should appear if you navigate away from the home page."), 
                console.log('If a modal is opened in a view container within a component that is the page orpart of the page, navigation will destroy the page thus destroy the modal. To prevent memory leaks and unexpected behavior a "DialogBailOutError" error is thrown.'), 
                console.log(e);
            });
        }, Home;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("myTemplate", {
        read: __WEBPACK_IMPORTED_MODULE_0__angular_core__.G
    }), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.G) ], Home.prototype, "myTemplate", void 0), 
    Home = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "home",
        providers: __WEBPACK_IMPORTED_MODULE_1__in_app_plugin_index__.a.getProviders(),
        template: __webpack_require__(681),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1__in_app_plugin_index__.b ]) ], Home);
}, /* 152 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2__modal_backdrop__ = __webpack_require__(216), __WEBPACK_IMPORTED_MODULE_3__modal_context__ = __webpack_require__(316);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_3__modal_context__.a(this);
        }, Modal.prototype.create = function(dialogRef, content, bindings) {
            return dialogRef.inElement ? dialogRef.overlayRef.instance.insideElement() : dialogRef.overlayRef.instance.fullscreen(), 
            dialogRef.overlayRef.instance.addComponent(__WEBPACK_IMPORTED_MODULE_2__modal_backdrop__.a, bindings), 
            dialogRef.overlayRef.instance.setStyle("position", "relative"), dialogRef.overlayRef.instance.setStyle("display", "block"), 
            dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.g ]) ], Modal);
}, /* 153 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_js_native__ = __webpack_require__(265), __WEBPACK_IMPORTED_MODULE_2__presets__ = __webpack_require__(515);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeDemo;
    });
    var JSNativeDemo = function() {
        function JSNativeDemo(modal) {
            var _this = this;
            this.modal = modal, this.modalCommands = [ "alert", "prompt", "confirm" ].map(function(dropin) {
                return {
                    text: dropin + " drop in",
                    factory: function() {
                        return __WEBPACK_IMPORTED_MODULE_2__presets__[dropin](_this.modal).open();
                    }
                };
            });
        }
        return JSNativeDemo;
    }();
    JSNativeDemo = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "js-native-demo",
        template: __webpack_require__(682),
        // We override providers set by the Module since this app is using multiple module plugins
        // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
        // usually an app will use one plugin and this line is not needed.
        providers: __WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_js_native__.b,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal_plugins_js_native__.c ]) ], JSNativeDemo);
}, /* 154 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_vex__ = __webpack_require__(396), __WEBPACK_IMPORTED_MODULE_3__demo_head_index__ = __webpack_require__(315), __WEBPACK_IMPORTED_MODULE_4__presets__ = __webpack_require__(516), __WEBPACK_IMPORTED_MODULE_5__login_dialog__ = __webpack_require__(217);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VexDemo;
    });
    var VexDemo = function() {
        function VexDemo(modal) {
            var _this = this;
            this.modal = modal, this.theme = "default", this.modalCommands = [ {
                text: "alert drop in",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.a.call(_this, _this.modal).open();
                }
            }, {
                text: "prompt drop in",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.b.call(_this, _this.modal).open();
                }
            }, {
                text: "confirm drop in",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.c.call(_this, _this.modal).open();
                }
            }, {
                text: "Cascading example",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.d.call(_this, _this.modal).open();
                }
            }, {
                text: "In Element example",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.a.call(_this, _this.modal).inElement(!0).open("demo-head");
                }
            }, {
                text: "String content",
                factory: function() {
                    return _this.modal.open("Hello modal!", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.p)({
                        isBlocking: !1
                    }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_vex__.b));
                }
            }, {
                text: "TemplateRef content",
                factory: function() {
                    return _this.modal.open(_this.templateRef, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.p)({
                        isBlocking: !1
                    }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_vex__.b));
                }
            }, {
                text: "Custom Modal example",
                factory: function() {
                    return new __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_vex__.c(_this.modal).className(_this.theme).content(__WEBPACK_IMPORTED_MODULE_5__login_dialog__.a).message("Ary you coming to the event?").addOkButton("Yep!").addButton("vex-dialog-button-primary vex-dialog-button", "Maybe?", function(cmp, $event) {
                        return cmp.dialog.close("Maybe");
                    }).addCancelButton("Nope!").open();
                }
            }, {
                text: "no buttons",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.e.call(_this, _this.modal).open();
                }
            }, {
                text: "custom buttons",
                factory: function() {
                    return __WEBPACK_IMPORTED_MODULE_4__presets__.f.call(_this, _this.modal).open();
                }
            } ];
        }
        return VexDemo;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)(__WEBPACK_IMPORTED_MODULE_3__demo_head_index__.a), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__demo_head_index__.a) ], VexDemo.prototype, "demoHead", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("templateRef"), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.G) ], VexDemo.prototype, "templateRef", void 0), 
    VexDemo = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "vex-demo",
        styles: [ __webpack_require__(710), __webpack_require__(704), __webpack_require__(706), __webpack_require__(707), __webpack_require__(709), __webpack_require__(705), __webpack_require__(708), __webpack_require__(703) ],
        template: __webpack_require__(683),
        // We override providers set by the Module since this app is using multiple module plugins
        // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
        // usually an app will use one plugin and this line is not needed.
        providers: __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_vex__.d,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_vex__.e ]) ], VexDemo);
}, /* 155 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return SwapComponentDirective;
    });
    // <template [dynCmp]="myCmp" [dynCmpBindings]="myBindings"></template>
    // <template [dynCmp]="ctx.component" [dynCmpBindings]="ctx.bindings" [dynCmpProjectables]="ctx.projectableNodes"></template>
    var SwapComponentDirective = function() {
        function SwapComponentDirective(cfr, vcRef, tRef) {
            this.cfr = cfr, this.vcRef = vcRef, this.tRef = tRef, this.onCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y(!1);
        }
        return Object.defineProperty(SwapComponentDirective.prototype, "swapCmp", {
            set: function(component) {
                if (this.component = component, this.vcRef.clear(), this.component) {
                    var injector = this.swapCmpInjector || this.vcRef.parentInjector;
                    Array.isArray(this.swapCmpBindings) && this.swapCmpBindings.length > 0 && (injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.fromResolvedProviders(this.swapCmpBindings, injector));
                    var cmpRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(component), this.vcRef.length, injector, this.swapCmpProjectables);
                    cmpRef.changeDetectorRef.detectChanges(), this.onCreate.emit(cmpRef);
                }
            },
            enumerable: !0,
            configurable: !0
        }), SwapComponentDirective;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], SwapComponentDirective.prototype, "swapCmpBindings", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.c) ], SwapComponentDirective.prototype, "swapCmpInjector", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], SwapComponentDirective.prototype, "swapCmpProjectables", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Z)(), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y) ], SwapComponentDirective.prototype, "onCreate", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Object), __metadata("design:paramtypes", [ Object ]) ], SwapComponentDirective.prototype, "swapCmp", null), 
    SwapComponentDirective = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[swapCmp]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.U, __WEBPACK_IMPORTED_MODULE_0__angular_core__.H, __WEBPACK_IMPORTED_MODULE_0__angular_core__.G ]) ], SwapComponentDirective);
}, /* 156 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest__ = __webpack_require__(170), __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest__), __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__(222), __WEBPACK_IMPORTED_MODULE_4__bootstrap_presets_one_button_preset__ = __webpack_require__(523), __WEBPACK_IMPORTED_MODULE_5__bootstrap_presets_two_button_preset__ = __webpack_require__(524);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__bootstrap_presets_one_button_preset__.a(this, {
                isBlocking: !1
            });
        }, Modal.prototype.prompt = function() {
            return new __WEBPACK_IMPORTED_MODULE_5__bootstrap_presets_two_button_preset__.a(this, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.confirm = function() {
            return new __WEBPACK_IMPORTED_MODULE_5__bootstrap_presets_two_button_preset__.b(this, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.create = function(dialogRef, content, bindings) {
            var _this = this, backdropRef = this.createBackdrop(dialogRef, __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.i), containerRef = this.createContainer(dialogRef, __WEBPACK_IMPORTED_MODULE_3__modal_container_component__.a, content, bindings), overlay = dialogRef.overlayRef.instance, backdrop = backdropRef.instance, container = containerRef.instance;
            // add body class if this is the only dialog in the stack
            return dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen(), document.body.classList.contains("modal-open") || document.body.classList.add("modal-open"), 
            dialogRef.inElement && backdrop.setStyle("position", "absolute"), backdrop.addClass("modal-backdrop fade", !0), 
            backdrop.addClass("in"), container.addClass("in"), containerRef.location.nativeElement && containerRef.location.nativeElement.focus(), 
            overlay.beforeDestroy(function() {
                var completer = new __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.k();
                return backdrop.removeClass("in"), container.removeClass("in"), backdrop.myAnimationEnd$().combineLatest(container.myAnimationEnd$(), function(s1, s2) {
                    return [ s1, s2 ];
                }).subscribe(function(sources) {
                    1 === _this.overlay.groupStackLength(dialogRef) && document.body.classList.remove("modal-open"), 
                    completer.resolve();
                }), completer.promise;
            }), dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.g ]) ], Modal);
}, /* 157 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__ = __webpack_require__(528);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__.a(this, __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.alert);
        }, Modal.prototype.prompt = function() {
            return new __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__.a(this, __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.prompt);
        }, Modal.prototype.confirm = function() {
            return new __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__.a(this, __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.confirm);
        }, Modal.prototype.create = function(dialogRef, type, bindings) {
            return dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.g ]) ], Modal);
}, /* 158 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VEXDialogButtons;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return DialogFormModal;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return FormDropIn;
    });
    /**
 * A Dialog is a
 */
    var VEXDialogButtons = function() {
        function VEXDialogButtons() {
            /**
         * Emitted when a button was clicked
         * @type {EventEmitter<VEXButtonClickEvent>}
         */
            this.onButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y();
        }
        return VEXDialogButtons.prototype.onClick = function(btn, $event) {
            $event.stopPropagation(), this.onButtonClick.emit({
                btn: btn,
                $event: $event
            });
        }, VEXDialogButtons;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], VEXDialogButtons.prototype, "buttons", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Z)(), __metadata("design:type", Object) ], VEXDialogButtons.prototype, "onButtonClick", void 0), 
    VEXDialogButtons = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "vex-dialog-buttons",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div class="vex-dialog-buttons">\n    <button type="button" \n         *ngFor="let btn of buttons;"\n         [class]="btn.cssClass"\n         (click)="onClick(btn, $event)">{{btn.caption}}</button>\n</div>'
    }) ], VEXDialogButtons);
    /**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
    var DialogFormModal = function() {
        function DialogFormModal(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return DialogFormModal.prototype.onButtonClick = function($event) {
            $event.btn.onClick(this, $event.$event);
        }, DialogFormModal;
    }();
    DialogFormModal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-dialog",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<form class="vex-dialog-form">\n    <template [swapCmp]="context.content"></template>\n    <vex-dialog-buttons [buttons]="context.buttons"\n                        (onButtonClick)="onButtonClick($event)"></vex-dialog-buttons>\n</form>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], DialogFormModal);
    var FormDropIn = function() {
        function FormDropIn(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return FormDropIn;
    }();
    FormDropIn = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "drop-in-dialog",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div class="vex-dialog-message">{{context.message}}</div>\n <div *ngIf="context.showInput" class="vex-dialog-input">\n   <input #input\n          autofocus\n          name="vex" \n          type="text" \n          class="vex-dialog-prompt-input"\n           (change)="context.defaultResult = input.value" \n          placeholder="{{context.placeholder}}">\n </div>\n <div *ngIf="context.showCloseButton" \n      [class]="context.closeClassName"\n      (click)="dialog.dismiss()"></div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], FormDropIn);
}, /* 159 */
, /* 160 */
, /* 161 */
, /* 162 */
, /* 163 */
, /* 164 */
, /* 165 */
, /* 166 */
, /* 167 */
, /* 168 */
, /* 169 */
, /* 170 */
, /* 171 */
, /* 172 */
, /* 173 */
, /* 174 */
, /* 175 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modal_context__ = __webpack_require__(389);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_0__modal_context__.a;
    });
    /* unused harmony reexport BSModalContextBuilder */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__modal_container_component__ = __webpack_require__(263), __WEBPACK_IMPORTED_MODULE_2__message_modal_component__ = __webpack_require__(262), __WEBPACK_IMPORTED_MODULE_3__presets_message_modal_preset__ = __webpack_require__(264), __WEBPACK_IMPORTED_MODULE_4_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_5__presets_one_button_preset__ = __webpack_require__(391), __WEBPACK_IMPORTED_MODULE_6__presets_two_button_preset__ = __webpack_require__(392), __WEBPACK_IMPORTED_MODULE_7__modal__ = __webpack_require__(390);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_7__modal__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_8__bootstrap_module__ = __webpack_require__(726);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_8__bootstrap_module__.a;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_8__bootstrap_module__.b;
    });
}, /* 176 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VEXDialogButtons;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return DialogFormModal;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return FormDropIn;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, VEXDialogButtons = function() {
        function VEXDialogButtons() {
            /**
         * Emitted when a button was clicked
         * @type {EventEmitter<VEXButtonClickEvent>}
         */
            this.onButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y();
        }
        return VEXDialogButtons.prototype.onClick = function(btn, $event) {
            $event.stopPropagation(), this.onButtonClick.emit({
                btn: btn,
                $event: $event
            });
        }, VEXDialogButtons;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], VEXDialogButtons.prototype, "buttons", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Z)(), __metadata("design:type", Object) ], VEXDialogButtons.prototype, "onButtonClick", void 0), 
    VEXDialogButtons = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "vex-dialog-buttons",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div class="vex-dialog-buttons">\n    <button type="button" \n         *ngFor="let btn of buttons;"\n         [class]="btn.cssClass"\n         (click)="onClick(btn, $event)">{{btn.caption}}</button>\n</div>'
    }) ], VEXDialogButtons);
    /**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
    var DialogFormModal = function() {
        function DialogFormModal(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return DialogFormModal.prototype.onButtonClick = function($event) {
            $event.btn.onClick(this, $event.$event);
        }, DialogFormModal;
    }();
    DialogFormModal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-dialog",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<form class="vex-dialog-form">\n    <template [swapCmp]="context.content"></template>\n    <vex-dialog-buttons [buttons]="context.buttons"\n                        (onButtonClick)="onButtonClick($event)"></vex-dialog-buttons>\n</form>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], DialogFormModal);
    var FormDropIn = function() {
        function FormDropIn(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return FormDropIn;
    }();
    FormDropIn = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "drop-in-dialog",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div class="vex-dialog-message">{{context.message}}</div>\n <div *ngIf="context.showInput" class="vex-dialog-input">\n   <input #input\n          autofocus\n          name="vex" \n          type="text" \n          class="vex-dialog-prompt-input"\n           (change)="context.defaultResult = input.value" \n          placeholder="{{context.placeholder}}">\n </div>\n <div *ngIf="context.showCloseButton" \n      [class]="context.closeClassName"\n      (click)="dialog.dismiss()"></div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], FormDropIn);
}, /* 177 */
, /* 178 */
, /* 179 */
, /* 180 */
, /* 181 */
, /* 182 */
, /* 183 */
, /* 184 */
, /* 185 */
, /* 186 */
, /* 187 */
, /* 188 */
, /* 189 */
, /* 190 */
, /* 191 */
, /* 192 */
, /* 193 */
, /* 194 */
, /* 195 */
, /* 196 */
, /* 197 */
, /* 198 */
, /* 199 */
, /* 200 */
, /* 201 */
, /* 202 */
, /* 203 */
, /* 204 */
, /* 205 */
, /* 206 */
, /* 207 */
, /* 208 */
, /* 209 */
, /* 210 */
, /* 211 */
, /* 212 */
, /* 213 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_demo_head_deam_head__ = __webpack_require__(115), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_9__lib_overlay_overlay_directives_ngfactory__ = __webpack_require__(147), __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(210), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_13__angular_common_src_directives_ng_for__ = __webpack_require__(102), __WEBPACK_IMPORTED_MODULE_14__src_lib_overlay_overlay_directives__ = __webpack_require__(96), __WEBPACK_IMPORTED_MODULE_15__angular_core_src_security__ = __webpack_require__(70);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return Wrapper_DemoHead;
    }), /* unused harmony export DemoHeadNgFactory */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return View_DemoHead0;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_DemoHead = function() {
        function Wrapper_DemoHead() {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_demo_head_deam_head__.a(), 
            this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b;
        }
        return Wrapper_DemoHead.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_DemoHead.prototype.ngOnDestroy = function() {
            this.subscription0 && this.subscription0.unsubscribe();
        }, Wrapper_DemoHead.prototype.check_title = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_0, currValue)) && (this._changed = !0, 
            this.context.title = currValue, this._expr_0 = currValue);
        }, Wrapper_DemoHead.prototype.check_description = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_1, currValue)) && (this._changed = !0, 
            this.context.description = currValue, this._expr_1 = currValue);
        }, Wrapper_DemoHead.prototype.check_modalCommands = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_2, currValue)) && (this._changed = !0, 
            this.context.modalCommands = currValue, this._expr_2 = currValue);
        }, Wrapper_DemoHead.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_DemoHead.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_DemoHead.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_DemoHead.prototype.subscribe = function(view, _eventHandler, emit0) {
            this._eventHandler = _eventHandler, emit0 && (this.subscription0 = this.context.dropInClick.subscribe(_eventHandler.bind(view, "dropInClick")));
        }, Wrapper_DemoHead;
    }(), renderType_DemoHead_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, [], {}), View_DemoHead_Host0 = function(_super) {
        function View_DemoHead_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_DemoHead_Host0, renderType_DemoHead_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_DemoHead_Host0, _super), View_DemoHead_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "demo-head", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_DemoHead0(this.viewUtils, this, 0, this._el_0), this._DemoHead_0_3 = new Wrapper_DemoHead(), 
            this.compView_0.create(this._DemoHead_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._DemoHead_0_3.context);
        }, View_DemoHead_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_demo_head_deam_head__.a && 0 === requestNodeIndex ? this._DemoHead_0_3.context : notFoundResult;
        }, View_DemoHead_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._DemoHead_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_DemoHead_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this._DemoHead_0_3.ngOnDestroy();
        }, View_DemoHead_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_DemoHead_Host0.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, ctx) {}, 
        View_DemoHead_Host0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), DemoHeadNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.b("demo-head", View_DemoHead_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_demo_head_deam_head__.a), styles_DemoHead = [ ".btn-dropin[_ngcontent-%COMP%] {\n          text-transform: uppercase;\n          margin: 15px;\n          background-color: #219161;\n          border: none;\n          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n          border-radius: 0;\n      }" ], renderType_DemoHead = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 2, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.Emulated, styles_DemoHead, {}), View_DemoHead0 = function(_super) {
        function View_DemoHead0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_DemoHead0, renderType_DemoHead, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_DemoHead0, _super), View_DemoHead0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "section", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "section  padding--small"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container"), null), 
            this._text_3 = this.renderer.createText(this._el_2, "\n        ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "h2", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_5 = this.renderer.createText(this._el_4, "", null), this._text_6 = this.renderer.createText(this._el_2, "\n        ", null), 
            this._el_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "p", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "lead"), null), 
            this._text_8 = this.renderer.createText(this._el_2, "\n        ", null), this._el_9 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "br", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_10 = this.renderer.createText(this._el_2, "\n        ", null), this.projectNodes(this._el_2, 0), 
            this._text_11 = this.renderer.createText(this._el_2, "\n    ", null), this._text_12 = this.renderer.createText(this._el_0, "\n    ", null), 
            this._el_13 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "section", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "section background-gray-lighter padding--small", "overlayTarget", "demo-head", "style", "text-align: center"), null), 
            this._vc_13 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(13, 0, this, this._el_13), 
            this._OverlayTarget_13_5 = new __WEBPACK_IMPORTED_MODULE_9__lib_overlay_overlay_directives_ngfactory__.b(this._vc_13.vcRef), 
            this._text_14 = this.renderer.createText(this._el_13, "\n        ", null), this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13, null), 
            this._vc_15 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(15, 13, this, this._anchor_15), 
            this._TemplateRef_15_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.a(this, 15, this._anchor_15), 
            this._NgFor_15_6 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_common_src_directives_ng_for_ngfactory__.a(this._vc_15.vcRef, this._TemplateRef_15_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.ref), 
            this._text_16 = this.renderer.createText(this._el_13, "\n        ", null), this._el_17 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_13, "h5", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_18 = this.renderer.createText(this._el_17, "", null), this._text_19 = this.renderer.createText(this._el_13, "\n    ", null), 
            this._text_20 = this.renderer.createText(this._el_0, "\n\n\n    ", null), this.projectNodes(this._el_0, 1), 
            this._text_21 = this.renderer.createText(this._el_0, "\n", null), this._text_22 = this.renderer.createText(parentRenderNode, "\n", null), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._el_4, this._text_5, this._text_6, this._el_7, this._text_8, this._el_9, this._text_10, this._text_11, this._text_12, this._el_13, this._text_14, this._anchor_15, this._text_16, this._el_17, this._text_18, this._text_19, this._text_20, this._text_21, this._text_22 ], null), 
            null;
        }, View_DemoHead0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.b && 15 === requestNodeIndex ? this._TemplateRef_15_5 : token === __WEBPACK_IMPORTED_MODULE_13__angular_common_src_directives_ng_for__.a && 15 === requestNodeIndex ? this._NgFor_15_6.context : token === __WEBPACK_IMPORTED_MODULE_14__src_lib_overlay_overlay_directives__.a && 13 <= requestNodeIndex && requestNodeIndex <= 19 ? this._OverlayTarget_13_5.context : notFoundResult;
        }, View_DemoHead0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_13_0_0 = "demo-head";
            this._OverlayTarget_13_5.check_targetKey(currVal_13_0_0, throwOnChange, !1), this._OverlayTarget_13_5.ngDoCheck(this, this._el_13, throwOnChange);
            var currVal_15_0_0 = this.context.modalCommands;
            this._NgFor_15_6.check_ngForOf(currVal_15_0_0, throwOnChange, !1), this._NgFor_15_6.ngDoCheck(this, this._anchor_15, throwOnChange), 
            this._vc_13.detectChangesInNestedViews(throwOnChange), this._vc_15.detectChangesInNestedViews(throwOnChange);
            var currVal_28 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.title, "");
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_28, currVal_28) && (this.renderer.setText(this._text_5, currVal_28), 
            this._expr_28 = currVal_28);
            var currVal_29 = this.context.description;
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_29, currVal_29) && (this.renderer.setElementProperty(this._el_7, "innerHTML", this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_15__angular_core_src_security__.b.HTML, currVal_29)), 
            this._expr_29 = currVal_29);
            var currVal_30 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.inlineInterpolate(1, "Last modal result: ", this.context.result, "");
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_30, currVal_30) && (this.renderer.setText(this._text_18, currVal_30), 
            this._expr_30 = currVal_30);
        }, View_DemoHead0.prototype.destroyInternal = function() {
            this._vc_13.destroyNestedViews(), this._vc_15.destroyNestedViews(), this._OverlayTarget_13_5.ngOnDestroy();
        }, View_DemoHead0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 15 == nodeIndex ? new View_DemoHead1(this.viewUtils, this, 15, this._anchor_15, this._vc_15) : null;
        }, View_DemoHead0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), View_DemoHead1 = function(_super) {
        function View_DemoHead1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_DemoHead1, renderType_DemoHead, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_DemoHead1, _super), View_DemoHead1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "button", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "btn btn-white btn-dropin"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_0));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1 ], [ disposable_0 ]), 
            null;
        }, View_DemoHead1.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.$implicit.text, "");
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_2, currVal_2) && (this.renderer.setText(this._text_1, currVal_2), 
            this._expr_2 = currVal_2);
        }, View_DemoHead1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_DemoHead1.prototype.handleEvent_0 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.parentView.context.onClick($event, this.context.$implicit) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_DemoHead1;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a);
}, /* 214 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap_index__ = __webpack_require__(175);
    /* unused harmony export CustomModalContext */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CustomModal;
    });
    var CustomModalContext = function(_super) {
        function CustomModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(CustomModalContext, _super), CustomModalContext;
    }(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap_index__.b), CustomModal = function() {
        function CustomModal(dialog) {
            this.dialog = dialog, this.context = dialog.context, this.wrongAnswer = !0, dialog.setCloseGuard(this);
        }
        return CustomModal.prototype.onKeyUp = function(value) {
            this.wrongAnswer = 5 != value, this.dialog.close();
        }, CustomModal.prototype.beforeDismiss = function() {
            return !0;
        }, CustomModal.prototype.beforeClose = function() {
            return this.wrongAnswer;
        }, CustomModal;
    }();
    CustomModal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-content",
        styles: [ "\n        .custom-modal-container {\n            padding: 15px;\n        }\n\n        .custom-modal-header {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    " ],
        //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
        // Remove when solved.
        /* tslint:disable */
        template: '\n        <div class="container-fluid custom-modal-container">\n            <div class="row custom-modal-header">\n                <div class="col-sm-12">\n                    <h1>A Custom modal design</h1>\n                </div>\n            </div>\n            <div class="row" [ngClass]="{\'myclass\' : shouldUseMyClass}">\n                <div class="col-xs-12">\n                    <div class="jumbotron">\n                        <h1>Do the math to quit:</h1>\n                        <p class="lead">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong></p>\n                        <span>What is the sum?</span>\n                         <input class="form-control" type="text" #answer (keyup)="onKeyUp(answer.value)" autofocus>\n                    </div>\n                </div>\n            </div>\n        </div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], CustomModal);
}, /* 215 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function getProviders() {
        return [ {
            provide: __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b,
            useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
        }, __WEBPACK_IMPORTED_MODULE_3__modal__.a ];
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(152), __WEBPACK_IMPORTED_MODULE_4__modal_backdrop__ = __webpack_require__(216);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_3__modal__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5__modal_context__ = __webpack_require__(316);
    /* unused harmony reexport InAppModalContext */
    /* unused harmony reexport InAppModalContextBuilder */
    /* unused harmony export getProviders */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return InAppModalModule;
    });
    var InAppModalModule = function() {
        function InAppModalModule() {}
        return InAppModalModule.getProviders = function() {
            return getProviders();
        }, InAppModalModule;
    }();
    InAppModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_1__angular_common__.g ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_4__modal_backdrop__.a ],
        providers: getProviders(),
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_4__modal_backdrop__.a ]
    }) ], InAppModalModule);
}, /* 216 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return InAppModalBackdrop;
    });
    var InAppModalBackdrop = function() {
        function InAppModalBackdrop(dialog) {
            this.dialog = dialog, this.zoomState = "in";
        }
        return InAppModalBackdrop;
    }();
    InAppModalBackdrop = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-backdrop",
        animations: [ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._3)("zoomin", [ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._4)("void => in", [ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._5)("500ms ease-in", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._6)([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._7)({
            transform: "scale(0.1, 0.1)",
            offset: 0
        }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._7)({
            transform: "scale(1.2, 1.2)",
            offset: .5
        }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._7)({
            transform: "scale(1, 1)",
            offset: 1
        }) ])) ]) ]) ],
        styles: [ "\n:host {        \n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n\n}\n.in-app-modal-backdrop {\n  margin: 25px 0;\n}\n", "\narticle {\n  margin: auto;\n  width: 600px;\n  background: inherit;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\narticle:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: inherit;\n  -webkit-filter: blur(10px) saturate(2);\n  filter: blur(10px) saturate(2);\n}\narticle .title {\n  padding: 8px;    \n  background: rgba(235, 235, 235, 0.85);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size:24px;\n  text-align: center;\n}\narticle .content {\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.66);\n}" ],
        template: '<div class="in-app-modal-backdrop">\n    <article [@zoomin]="zoomState">\n        <div class="title">\n            <span>{{dialog.context.title}}</span>\n        </div>\n        <div class="content">\n            <template [ngTemplateOutlet]="dialog.context.templateRef"></template>\n        </div>\n    </article>    \n</div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], InAppModalBackdrop);
}, /* 217 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return LoginDialog;
    });
    var LoginDialog = function() {
        function LoginDialog(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return LoginDialog;
    }();
    LoginDialog = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "login-dialog",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div class="vex-dialog-message">{{context.message}}</div>\n    <div *ngIf="context.showInput" class="vex-dialog-input">\n        <input name="vex" \n               type="text" \n               class="vex-dialog-prompt-input"\n               [(ngModel)]="context.defaultResult" \n               placeholder="{{context.placeholder}}">\n    </div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], LoginDialog);
}, /* 218 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function register(eventName, element, cb) {
        BROWSER_PREFIX.forEach(function(p) {
            element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, !1);
        });
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(66), __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(367), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__), __WEBPACK_IMPORTED_MODULE_2__framework_createComponent__ = __webpack_require__(322);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BaseDynamicComponent;
    });
    var BROWSER_PREFIX = [ "webkit", "moz", "MS", "o", "" ], BaseDynamicComponent = function() {
        function BaseDynamicComponent(el, renderer) {
            this.el = el, this.renderer = renderer;
        }
        /**
     * Set a specific inline style on the overlay host element.
     * @param prop The style key
     * @param value The value, undefined to remove
     * @returns {ModalOverlay}
     */
        /**
     * Add a component, supply a view container ref.
     * Note: The components vcRef will result in a sibling.
     * @param component The component to add
     * @param vcRef The container to add to
     * @param bindings Bindings to use (added on top of the ViewContainerRef)
     * @returns {Promise<ComponentRef<any>>}
     */
        return BaseDynamicComponent.prototype.activateAnimationListener = function() {
            var _this = this;
            this.animationEnd || (this.animationEnd = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__.Subject(), 
            this.animationEnd$ = this.animationEnd.asObservable(), register("TransitionEnd", this.el.nativeElement, function(e) {
                return _this.onEnd(e);
            }), register("AnimationEnd", this.el.nativeElement, function(e) {
                return _this.onEnd(e);
            }));
        }, BaseDynamicComponent.prototype.setStyle = function(prop, value) {
            return this.renderer.setElementStyle(this.el.nativeElement, prop, value), this;
        }, BaseDynamicComponent.prototype.forceReflow = function() {
            this.el.nativeElement.offsetWidth;
        }, BaseDynamicComponent.prototype.addClass = function(css, forceReflow) {
            var _this = this;
            void 0 === forceReflow && (forceReflow = !1), css.split(" ").forEach(function(c) {
                return _this.renderer.setElementClass(_this.el.nativeElement, c, !0);
            }), forceReflow && this.forceReflow();
        }, BaseDynamicComponent.prototype.removeClass = function(css, forceReflow) {
            var _this = this;
            void 0 === forceReflow && (forceReflow = !1), css.split(" ").forEach(function(c) {
                return _this.renderer.setElementClass(_this.el.nativeElement, c, !1);
            }), forceReflow && this.forceReflow();
        }, BaseDynamicComponent.prototype.ngOnDestroy = function() {
            this.animationEnd && !this.animationEnd.closed && this.animationEnd.complete();
        }, BaseDynamicComponent.prototype.myAnimationEnd$ = function() {
            var _this = this;
            return this.animationEnd$.filter(function(e) {
                return e.target === _this.el.nativeElement;
            });
        }, BaseDynamicComponent.prototype._addComponent = function(instructions) {
            var cmpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__framework_createComponent__.a)(instructions);
            return cmpRef.changeDetectorRef.detectChanges(), cmpRef;
        }, BaseDynamicComponent.prototype.onEnd = function(event) {
            this.animationEnd.closed || this.animationEnd.next(event);
        }, BaseDynamicComponent;
    }();
}, /* 219 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */
    /**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */
    function extend(m1, m2) {
        var m = {};
        for (var attr in m1) m1.hasOwnProperty(attr) && (m[attr] = m1[attr]);
        for (var attr in m2) m2.hasOwnProperty(attr) && (m[attr] = m2[attr]);
        return m;
    }
    /**
 * Simple, not optimized, array union of unique values.
 * @param arr1
 * @param arr2
 * @returns {T[]|any[]|any[][]|any[]}
 */
    function arrayUnion(arr1, arr2) {
        return arr1.concat(arr2.filter(function(v) {
            return arr1.indexOf(v) === -1;
        }));
    }
    /**
 * Returns true if the config supports a given key.
 * @param key
 * @returns {boolean}
 */
    function supportsKey(keyCode, config) {
        return Array.isArray(config) ? config.indexOf(keyCode) > -1 : null !== config;
    }
    /**
 * Given an object representing a key/value map of css properties, returns a valid css string
 * representing the object.
 * Example:
 * console.log(toStyleString({
 *     position: 'absolute',
 *     width: '100%',
 *     height: '100%',
 *     top: '0',
 *     left: '0',
 *     right: '0',
 *     bottom: '0'
 * }));
 * // position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0
 * @param obj
 * @returns {string}
 */
    function toStyleString(obj) {
        return Object.getOwnPropertyNames(obj).map(function(k) {
            return k + ":" + obj[k];
        }).join(";");
    }
    function noop() {}
    /* unused harmony export extend */
    /* unused harmony export arrayUnion */
    /* harmony export (immutable) */
    __webpack_exports__.b = supportsKey, /* unused harmony export toStyleString */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return PromiseCompleter;
    }), /* harmony export (immutable) */
    __webpack_exports__.c = noop;
    var PromiseCompleter = function() {
        function PromiseCompleter() {
            var _this = this;
            this.promise = new Promise(function(res, rej) {
                _this.resolve = res, _this.reject = rej;
            });
        }
        return PromiseCompleter;
    }();
}, /* 220 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* unused harmony export DROP_IN_TYPE */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OverlayRenderer;
    });
    var DROP_IN_TYPE;
    !function(DROP_IN_TYPE) {
        DROP_IN_TYPE[DROP_IN_TYPE.alert = 0] = "alert", DROP_IN_TYPE[DROP_IN_TYPE.prompt = 1] = "prompt", 
        DROP_IN_TYPE[DROP_IN_TYPE.confirm = 2] = "confirm";
    }(DROP_IN_TYPE || (DROP_IN_TYPE = {}));
    var OverlayRenderer = function() {
        function OverlayRenderer() {}
        return OverlayRenderer;
    }();
}, /* 221 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return BSMessageModalTitle;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return BSMessageModalBody;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalFooter;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return BSMessageModal;
    });
    var BSMessageModalTitle = function() {
        function BSMessageModalTitle(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return Object.defineProperty(BSMessageModalTitle.prototype, "titleHtml", {
            get: function() {
                return this.context.titleHtml ? 1 : 0;
            },
            enumerable: !0,
            configurable: !0
        }), BSMessageModalTitle;
    }();
    BSMessageModalTitle = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-title",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div [ngClass]="context.headerClass" [ngSwitch]="titleHtml">\n      <button *ngIf="context.showClose" type="button" class="close" \n              aria-label="Close" (click)="dialog.dismiss()">\n          <span aria-hidden="true">×</span>\n      </button>\n      <div *ngSwitchCase="1" [innerHtml]="context.titleHtml"></div>\n      <h3 *ngSwitchDefault class="modal-title">{{context.title}}</h3>\n </div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSMessageModalTitle);
    var BSMessageModalBody = function() {
        function BSMessageModalBody(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return BSMessageModalBody;
    }();
    BSMessageModalBody = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-body",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        styles: [ ".form-group {\n    margin-top: 10px;\n  }" ],
        template: '<div [ngClass]="context.bodyClass"> \n    <div [innerHtml]="context.message"></div>\n      <div *ngIf="context.showInput" class="form-group">\n        <input autofocus #input\n            name="bootstrap" \n            type="text" \n            class="form-control"\n            [value]="context.defaultValue"\n            (change)="context.defaultValue = input.value"  \n            placeholder="{{context.placeholder}}">\n      </div>\n    </div>\n'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSMessageModalBody);
    /**
 * Represents the modal footer for storing buttons.
 */
    var BSModalFooter = function() {
        function BSModalFooter(dialog) {
            this.dialog = dialog;
        }
        return BSModalFooter.prototype.onClick = function(btn, $event) {
            $event.stopPropagation(), btn.onClick(this, $event);
        }, BSModalFooter;
    }();
    BSModalFooter = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-footer",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div [ngClass]="dialog.context.footerClass">\n    <button *ngFor="let btn of dialog.context.buttons;"\n            [ngClass]="btn.cssClass"\n            (click)="onClick(btn, $event)">{{btn.caption}}</button>\n</div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSModalFooter);
    /**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
    var BSMessageModal = function() {
        function BSMessageModal(dialog) {
            this.dialog = dialog;
        }
        return BSMessageModal;
    }();
    BSMessageModal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-content",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: "<modal-title></modal-title><modal-body></modal-body><modal-footer></modal-footer>"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSMessageModal);
}, /* 222 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalContainer;
    });
    var BSModalContainer = function(_super) {
        function BSModalContainer(dialog, el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            return _this.dialog = dialog, _this.activateAnimationListener(), _this;
        }
        return __extends(BSModalContainer, _super), BSModalContainer;
    }(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.n);
    BSModalContainer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "bs-modal-container",
        host: {
            tabindex: "-1",
            role: "dialog",
            class: "modal fade",
            style: "position: absolute; display: block"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div [ngClass]="dialog.context.dialogClass" \n      [class.modal-lg]="dialog.context.size == \'lg\'"\n      [class.modal-sm]="dialog.context.size == \'sm\'">\n  <div class="modal-content" style="display:block" role="document" overlayDialogBoundary>\n    <ng-content></ng-content>\n  </div>    \n</div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c, __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], BSModalContainer);
}, /* 223 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first__ = __webpack_require__(368), __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first__), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__ = __webpack_require__(170), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__), __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__ = __webpack_require__(531);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__.a(this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.f.alert, {
                isBlocking: !1
            });
        }, Modal.prototype.prompt = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__.a(this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.f.prompt, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.confirm = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__.a(this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.f.confirm, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.create = function(dialogRef, content, bindings) {
            var _this = this, backdropRef = this.createBackdrop(dialogRef, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.i), containerRef = this.createContainer(dialogRef, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.j, content, bindings), overlay = dialogRef.overlayRef.instance, backdrop = backdropRef.instance, container = containerRef.instance;
            // add body class if this is the only dialog in the stack
            return dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen(), document.body.classList.contains("vex-open") || document.body.classList.add("vex-open"), 
            overlay.addClass("vex vex-theme-" + dialogRef.context.className), backdrop.addClass("vex-overlay"), 
            container.addClass(dialogRef.context.contentClassName), container.setStyle("display", "block"), 
            dialogRef.inElement && (overlay.setStyle("padding", "0"), container.setStyle("margin-top", "20px")), 
            containerRef.location.nativeElement && containerRef.location.nativeElement.focus(), 
            "bottom-right-corner" === dialogRef.context.className && (overlay.setStyle("overflow-y", "hidden"), 
            container.setStyle("position", "absolute")), overlay.beforeDestroy(function() {
                overlay.addClass("vex-closing");
                var completer = new __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.k(), animationEnd$ = container.myAnimationEnd$();
                return "bottom-right-corner" !== dialogRef.context.className && (animationEnd$ = animationEnd$.combineLatest(backdrop.myAnimationEnd$(), function(s1, s2) {
                    return [ s1, s2 ];
                })), animationEnd$.subscribe(function(sources) {
                    1 === _this.overlay.groupStackLength(dialogRef) && document.body.classList.remove("vex-open"), 
                    completer.resolve();
                }), completer.promise;
            }), overlay.setClickBoundary(containerRef.location.nativeElement), dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_3_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.g ]) ], Modal);
}, /* 224 */
, /* 225 */
, /* 226 */
, /* 227 */
, /* 228 */
, /* 229 */
, /* 230 */
, /* 231 */
, /* 232 */
, /* 233 */
, /* 234 */
, /* 235 */
, /* 236 */
, /* 237 */
, /* 238 */
, /* 239 */
, /* 240 */
, /* 241 */
, /* 242 */
, /* 243 */
, /* 244 */
, /* 245 */
, /* 246 */
, /* 247 */
, /* 248 */
, /* 249 */
, /* 250 */
, /* 251 */
, /* 252 */
, /* 253 */
, /* 254 */
, /* 255 */
, /* 256 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function register(eventName, element, cb) {
        BROWSER_PREFIX.forEach(function(p) {
            element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, !1);
        });
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(66), __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(367), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__), __WEBPACK_IMPORTED_MODULE_2__framework_createComponent__ = __webpack_require__(258);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BaseDynamicComponent;
    });
    var BROWSER_PREFIX = [ "webkit", "moz", "MS", "o", "" ], BaseDynamicComponent = function() {
        function BaseDynamicComponent(el, renderer) {
            this.el = el, this.renderer = renderer;
        }
        /**
     * Set a specific inline style on the overlay host element.
     * @param prop The style key
     * @param value The value, undefined to remove
     * @returns {ModalOverlay}
     */
        /**
     * Add a component, supply a view container ref.
     * Note: The components vcRef will result in a sibling.
     * @param component The component to add
     * @param vcRef The container to add to
     * @param bindings Bindings to use (added on top of the ViewContainerRef)
     * @returns {Promise<ComponentRef<any>>}
     */
        return BaseDynamicComponent.prototype.activateAnimationListener = function() {
            var _this = this;
            this.animationEnd || (this.animationEnd = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__.Subject(), 
            this.animationEnd$ = this.animationEnd.asObservable(), register("TransitionEnd", this.el.nativeElement, function(e) {
                return _this.onEnd(e);
            }), register("AnimationEnd", this.el.nativeElement, function(e) {
                return _this.onEnd(e);
            }));
        }, BaseDynamicComponent.prototype.setStyle = function(prop, value) {
            return this.renderer.setElementStyle(this.el.nativeElement, prop, value), this;
        }, BaseDynamicComponent.prototype.forceReflow = function() {
            this.el.nativeElement.offsetWidth;
        }, BaseDynamicComponent.prototype.addClass = function(css, forceReflow) {
            var _this = this;
            void 0 === forceReflow && (forceReflow = !1), css.split(" ").forEach(function(c) {
                return _this.renderer.setElementClass(_this.el.nativeElement, c, !0);
            }), forceReflow && this.forceReflow();
        }, BaseDynamicComponent.prototype.removeClass = function(css, forceReflow) {
            var _this = this;
            void 0 === forceReflow && (forceReflow = !1), css.split(" ").forEach(function(c) {
                return _this.renderer.setElementClass(_this.el.nativeElement, c, !1);
            }), forceReflow && this.forceReflow();
        }, BaseDynamicComponent.prototype.ngOnDestroy = function() {
            this.animationEnd && !this.animationEnd.closed && this.animationEnd.complete();
        }, BaseDynamicComponent.prototype.myAnimationEnd$ = function() {
            var _this = this;
            return this.animationEnd$.filter(function(e) {
                return e.target === _this.el.nativeElement;
            });
        }, BaseDynamicComponent.prototype._addComponent = function(instructions) {
            var cmpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__framework_createComponent__.a)(instructions);
            return cmpRef.changeDetectorRef.detectChanges(), cmpRef;
        }, BaseDynamicComponent.prototype.onEnd = function(event) {
            this.animationEnd.closed || this.animationEnd.next(event);
        }, BaseDynamicComponent;
    }();
}, /* 257 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__swap_component_directive__ = __webpack_require__(718);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__swap_component_directive__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(256);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__css_backdrop__ = __webpack_require__(716);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__css_backdrop__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3__css_dialog_container__ = __webpack_require__(717);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_3__css_dialog_container__.a;
    });
}, /* 258 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function createComponent(instructions) {
        var injector = getInjector(instructions);
        return instructions.vcRef.createComponent(injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__.U).resolveComponentFactory(instructions.component), instructions.vcRef.length, injector, instructions.projectableNodes);
    }
    function getInjector(instructions) {
        var ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
        return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ? __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (immutable) */
    __webpack_exports__.a = createComponent;
}, /* 259 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return DROP_IN_TYPE;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OverlayRenderer;
    });
    var DROP_IN_TYPE;
    !function(DROP_IN_TYPE) {
        DROP_IN_TYPE[DROP_IN_TYPE.alert = 0] = "alert", DROP_IN_TYPE[DROP_IN_TYPE.prompt = 1] = "prompt", 
        DROP_IN_TYPE[DROP_IN_TYPE.confirm = 2] = "confirm";
    }(DROP_IN_TYPE || (DROP_IN_TYPE = {}));
    var OverlayRenderer = function() {
        function OverlayRenderer() {}
        return OverlayRenderer;
    }();
}, /* 260 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__overlay_directives__ = __webpack_require__(722);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__.a;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__.b;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "e", function() {
        return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__.c;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__overlay_component__ = __webpack_require__(721);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_1__overlay_component__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__overlay_service__ = __webpack_require__(388);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_2__overlay_service__.a;
    });
}, /* 261 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__dom_modal_renderer__ = __webpack_require__(723);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__dom_modal_renderer__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(724);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_1__modal__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__outside_event_plugin__ = __webpack_require__(725);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__outside_event_plugin__.a;
    });
}, /* 262 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return BSMessageModalTitle;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return BSMessageModalBody;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalFooter;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return BSMessageModal;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, BSMessageModalTitle = function() {
        function BSMessageModalTitle(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return Object.defineProperty(BSMessageModalTitle.prototype, "titleHtml", {
            get: function() {
                return this.context.titleHtml ? 1 : 0;
            },
            enumerable: !0,
            configurable: !0
        }), BSMessageModalTitle;
    }();
    BSMessageModalTitle = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-title",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div [ngClass]="context.headerClass" [ngSwitch]="titleHtml">\n      <button *ngIf="context.showClose" type="button" class="close" \n              aria-label="Close" (click)="dialog.dismiss()">\n          <span aria-hidden="true">×</span>\n      </button>\n      <div *ngSwitchCase="1" [innerHtml]="context.titleHtml"></div>\n      <h3 *ngSwitchDefault class="modal-title">{{context.title}}</h3>\n </div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSMessageModalTitle);
    var BSMessageModalBody = function() {
        function BSMessageModalBody(dialog) {
            this.dialog = dialog, this.context = dialog.context;
        }
        return BSMessageModalBody;
    }();
    BSMessageModalBody = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-body",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        styles: [ ".form-group {\n    margin-top: 10px;\n  }" ],
        template: '<div [ngClass]="context.bodyClass"> \n    <div [innerHtml]="context.message"></div>\n      <div *ngIf="context.showInput" class="form-group">\n        <input autofocus #input\n            name="bootstrap" \n            type="text" \n            class="form-control"\n            [value]="context.defaultValue"\n            (change)="context.defaultValue = input.value"  \n            placeholder="{{context.placeholder}}">\n      </div>\n    </div>\n'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSMessageModalBody);
    /**
 * Represents the modal footer for storing buttons.
 */
    var BSModalFooter = function() {
        function BSModalFooter(dialog) {
            this.dialog = dialog;
        }
        return BSModalFooter.prototype.onClick = function(btn, $event) {
            $event.stopPropagation(), btn.onClick(this, $event);
        }, BSModalFooter;
    }();
    BSModalFooter = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-footer",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div [ngClass]="dialog.context.footerClass">\n    <button *ngFor="let btn of dialog.context.buttons;"\n            [ngClass]="btn.cssClass"\n            (click)="onClick(btn, $event)">{{btn.caption}}</button>\n</div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSModalFooter);
    /**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
    var BSMessageModal = function() {
        function BSMessageModal(dialog) {
            this.dialog = dialog;
        }
        return BSMessageModal;
    }();
    BSMessageModal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-content",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: "<modal-title></modal-title><modal-body></modal-body><modal-footer></modal-footer>"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c ]) ], BSMessageModal);
}, /* 263 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalContainer;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, BSModalContainer = function(_super) {
        function BSModalContainer(dialog, el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            return _this.dialog = dialog, _this.activateAnimationListener(), _this;
        }
        return __extends(BSModalContainer, _super), BSModalContainer;
    }(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.n);
    BSModalContainer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "bs-modal-container",
        host: {
            tabindex: "-1",
            role: "dialog",
            class: "modal fade",
            style: "position: absolute; display: block"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<div [ngClass]="dialog.context.dialogClass" \n      [class.modal-lg]="dialog.context.size == \'lg\'"\n      [class.modal-sm]="dialog.context.size == \'sm\'">\n  <div class="modal-content" style="display:block" role="document" overlayDialogBoundary>\n    <ng-content></ng-content>\n  </div>    \n</div>'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.c, __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], BSModalContainer);
}, /* 264 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__message_modal_component__ = __webpack_require__(262), __WEBPACK_IMPORTED_MODULE_2__modal_context__ = __webpack_require__(389);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return MessageModalPresetBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_VALUES = {
        component: __WEBPACK_IMPORTED_MODULE_1__message_modal_component__.d,
        headerClass: "modal-header",
        bodyClass: "modal-body",
        footerClass: "modal-footer"
    }, DEFAULT_SETTERS = [ "headerClass", "title", "titleHtml", "bodyClass", "footerClass" ], MessageModalPresetBuilder = function(_super) {
        function MessageModalPresetBuilder(defaultValues, initialSetters, baseType) {
            void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0);
            var _this = _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                buttons: []
            }, DEFAULT_VALUES), defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.o)(_this, "body", "message", !0), 
            _this;
        }
        return __extends(MessageModalPresetBuilder, _super), MessageModalPresetBuilder.prototype.addButton = function(css, caption, onClick) {
            var btn = {
                cssClass: css,
                caption: caption,
                onClick: onClick
            }, key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.m)("buttons");
            return this[key].push(btn), this;
        }, MessageModalPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_2__modal_context__.b);
}, /* 265 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(266);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_0__modal__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(394), __WEBPACK_IMPORTED_MODULE_2__js_native_modal_renderer__ = __webpack_require__(393), __WEBPACK_IMPORTED_MODULE_3__presets_js_native_preset__ = __webpack_require__(395);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_3__presets_js_native_preset__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_4__js_native_module__ = __webpack_require__(727);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_4__js_native_module__.a;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_4__js_native_module__.b;
    });
}, /* 266 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__ = __webpack_require__(395);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__.a(this, __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.alert);
        }, Modal.prototype.prompt = function() {
            return new __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__.a(this, __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.prompt);
        }, Modal.prototype.confirm = function() {
            return new __WEBPACK_IMPORTED_MODULE_2__presets_js_native_preset__.a(this, __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.confirm);
        }, Modal.prototype.create = function(dialogRef, type, bindings) {
            return dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.g ]) ], Modal);
}, /* 267 */
, /* 268 */
, /* 269 */
, /* 270 */
, /* 271 */
, /* 272 */
, /* 273 */
, /* 274 */
, /* 275 */
, /* 276 */
, /* 277 */
, /* 278 */
, /* 279 */
, /* 280 */
, /* 281 */
, /* 282 */
, /* 283 */
, /* 284 */
, /* 285 */
, /* 286 */
, /* 287 */
, /* 288 */
, /* 289 */
, /* 290 */
, /* 291 */
, /* 292 */
, /* 293 */
, /* 294 */
, /* 295 */
, /* 296 */
, /* 297 */
, /* 298 */
, /* 299 */
, /* 300 */
, /* 301 */
, /* 302 */
, /* 303 */
, /* 304 */
, /* 305 */
, /* 306 */
, /* 307 */
, /* 308 */
, /* 309 */
, /* 310 */
, /* 311 */
, /* 312 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_components_swap_component_directive__ = __webpack_require__(155), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Wrapper_SwapComponentDirective;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_SwapComponentDirective = function() {
        function Wrapper_SwapComponentDirective(p0, p1, p2) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_components_swap_component_directive__.a(p0, p1, p2), 
            this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b;
        }
        return Wrapper_SwapComponentDirective.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_SwapComponentDirective.prototype.ngOnDestroy = function() {
            this.subscription0 && this.subscription0.unsubscribe();
        }, Wrapper_SwapComponentDirective.prototype.check_swapCmpBindings = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_0, currValue)) && (this._changed = !0, 
            this.context.swapCmpBindings = currValue, this._expr_0 = currValue);
        }, Wrapper_SwapComponentDirective.prototype.check_swapCmpInjector = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_1, currValue)) && (this._changed = !0, 
            this.context.swapCmpInjector = currValue, this._expr_1 = currValue);
        }, Wrapper_SwapComponentDirective.prototype.check_swapCmpProjectables = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_2, currValue)) && (this._changed = !0, 
            this.context.swapCmpProjectables = currValue, this._expr_2 = currValue);
        }, Wrapper_SwapComponentDirective.prototype.check_swapCmp = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_3, currValue)) && (this._changed = !0, 
            this.context.swapCmp = currValue, this._expr_3 = currValue);
        }, Wrapper_SwapComponentDirective.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_SwapComponentDirective.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_SwapComponentDirective.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_SwapComponentDirective.prototype.subscribe = function(view, _eventHandler, emit0) {
            this._eventHandler = _eventHandler, emit0 && (this.subscription0 = this.context.onCreate.subscribe(_eventHandler.bind(view, "onCreate")));
        }, Wrapper_SwapComponentDirective;
    }();
}, /* 313 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return App;
    }), __webpack_require__(700);
    /*
 * App Component
 * Top Level Component
 */
    var App = function() {
        function App() {}
        return App;
    }();
    App = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "app",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        styles: [ __webpack_require__(701) ],
        template: __webpack_require__(677)
    }), __metadata("design:paramtypes", []) ], App);
}, /* 314 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(294), __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(175), __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__(116), __WEBPACK_IMPORTED_MODULE_5__bootstrap_demo_routes__ = __webpack_require__(512), __WEBPACK_IMPORTED_MODULE_6__bootstrap_demo__ = __webpack_require__(149), __WEBPACK_IMPORTED_MODULE_7__bootstrap_demo_page_bootstrap_demo_page__ = __webpack_require__(148), __WEBPACK_IMPORTED_MODULE_8__bootstrap_demo_page_custom_modal_sample__ = __webpack_require__(214), __WEBPACK_IMPORTED_MODULE_9__modal_customisation_wizard_modal_customisation_wizard__ = __webpack_require__(150);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapDemoModule;
    });
    var BootstrapDemoModule = function() {
        function BootstrapDemoModule() {}
        return BootstrapDemoModule;
    }();
    BootstrapDemoModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2__angular_forms__.a, __WEBPACK_IMPORTED_MODULE_1__angular_common__.g, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__.a, __WEBPACK_IMPORTED_MODULE_5__bootstrap_demo_routes__.a, __WEBPACK_IMPORTED_MODULE_4__shared_module__.a ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_6__bootstrap_demo__.a, __WEBPACK_IMPORTED_MODULE_7__bootstrap_demo_page_bootstrap_demo_page__.a, __WEBPACK_IMPORTED_MODULE_8__bootstrap_demo_page_custom_modal_sample__.a, __WEBPACK_IMPORTED_MODULE_9__modal_customisation_wizard_modal_customisation_wizard__.a ],
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_8__bootstrap_demo_page_custom_modal_sample__.a ]
    }) ], BootstrapDemoModule);
}, /* 315 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__deam_head__ = __webpack_require__(115);
    /* harmony namespace reexport (by used) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__deam_head__.a;
    });
}, /* 316 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* unused harmony export InAppModalContext */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return InAppModalContextBuilder;
    });
    var InAppModalContext = function(_super) {
        function InAppModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(InAppModalContext, _super), InAppModalContext.prototype.normalize = function() {
            this.message || (this.message = "");
        }, InAppModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), InAppModalContextBuilder = function(_super) {
        function InAppModalContextBuilder(modal) {
            return _super.call(this, {
                modal: modal
            }, [ "title", "templateRef" ], InAppModalContext) || this;
        }
        return __extends(InAppModalContextBuilder, _super), InAppModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 317 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__(116), __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_js_native__ = __webpack_require__(265), __WEBPACK_IMPORTED_MODULE_4__js_native_demo_routes__ = __webpack_require__(514), __WEBPACK_IMPORTED_MODULE_5__js_native_demo__ = __webpack_require__(153);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeDemoModule;
    });
    var JSNativeDemoModule = function() {
        function JSNativeDemoModule() {}
        return JSNativeDemoModule;
    }();
    JSNativeDemoModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_1__angular_common__.g, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_js_native__.a, __WEBPACK_IMPORTED_MODULE_4__js_native_demo_routes__.a, __WEBPACK_IMPORTED_MODULE_2__shared_module__.a ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_5__js_native_demo__.a ]
    }) ], JSNativeDemoModule);
}, /* 318 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(294), __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_vex__ = __webpack_require__(396), __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__(116), __WEBPACK_IMPORTED_MODULE_5__vex_demo_routes__ = __webpack_require__(517), __WEBPACK_IMPORTED_MODULE_6__vex_demo__ = __webpack_require__(154), __WEBPACK_IMPORTED_MODULE_7__login_dialog__ = __webpack_require__(217);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VexDemoModule;
    });
    var VexDemoModule = function() {
        function VexDemoModule() {}
        return VexDemoModule;
    }();
    VexDemoModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2__angular_forms__.a, __WEBPACK_IMPORTED_MODULE_1__angular_common__.g, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_vex__.a, __WEBPACK_IMPORTED_MODULE_5__vex_demo_routes__.a, __WEBPACK_IMPORTED_MODULE_4__shared_module__.a ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_6__vex_demo__.a, __WEBPACK_IMPORTED_MODULE_7__login_dialog__.a ],
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_7__login_dialog__.a ]
    }) ], VexDemoModule);
}, /* 319 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(218);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CSSBackdrop;
    });
    /**
 * Represents the modal backdrop shaped by CSS.
 */
    var CSSBackdrop = function(_super) {
        function CSSBackdrop(el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            _this.activateAnimationListener();
            var style = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            };
            return Object.keys(style).forEach(function(k) {
                return _this.setStyle(k, style[k]);
            }), _this;
        }
        return __extends(CSSBackdrop, _super), CSSBackdrop;
    }(__WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__.a);
    CSSBackdrop = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "css-backdrop",
        host: {
            "[attr.class]": "cssClass",
            "[attr.style]": "styleStr"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: ""
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], CSSBackdrop);
}, /* 320 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(218), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(23);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CSSDialogContainer;
    });
    /**
 * A component that acts as a top level container for an open modal window.
 */
    var CSSDialogContainer = function(_super) {
        function CSSDialogContainer(dialog, el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            return _this.dialog = dialog, _this.activateAnimationListener(), _this;
        }
        return __extends(CSSDialogContainer, _super), CSSDialogContainer;
    }(__WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__.a);
    CSSDialogContainer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "css-dialog-container",
        host: {
            tabindex: "-1",
            role: "dialog"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: "<ng-content></ng-content>"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__.a, __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], CSSDialogContainer);
}, /* 321 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__swap_component_directive__ = __webpack_require__(155);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__swap_component_directive__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(218);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__css_backdrop__ = __webpack_require__(319);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__css_backdrop__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_3__css_dialog_container__ = __webpack_require__(320);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_3__css_dialog_container__.a;
    });
}, /* 322 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function createComponent(instructions) {
        var injector = getInjector(instructions);
        return instructions.vcRef.createComponent(injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__.U).resolveComponentFactory(instructions.component), instructions.vcRef.length, injector, instructions.projectableNodes);
    }
    function getInjector(instructions) {
        var ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
        return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ? __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (immutable) */
    __webpack_exports__.a = createComponent;
}, /* 323 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function getVCRef(key) {
        return vcRefCollection[key] ? vcRefCollection[key].slice() : [];
    }
    function setVCRef(key, vcRef) {
        vcRefCollection.hasOwnProperty(key) || (vcRefCollection[key] = []), vcRefCollection[key].push(vcRef);
    }
    function delVCRef(key, vcRef) {
        if (vcRef) {
            var coll = vcRefCollection[key] || [], idx = coll.indexOf(vcRef);
            idx > -1 && coll.splice(idx, 1);
        } else vcRefCollection[key] = [];
    }
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return vcRefStore;
    });
    var vcRefCollection = {}, vcRefStore = {
        getVCRef: getVCRef,
        setVCRef: setVCRef,
        delVCRef: delVCRef
    };
}, /* 324 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__overlay_directives__ = __webpack_require__(96);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__.a;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__.b;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "e", function() {
        return __WEBPACK_IMPORTED_MODULE_0__overlay_directives__.c;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__overlay_component__ = __webpack_require__(325);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_1__overlay_component__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__overlay_service__ = __webpack_require__(60);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_2__overlay_service__.a;
    });
}, /* 325 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(219), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(321);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalOverlay;
    });
    /**
 * Represents the modal overlay.
 */
    var ModalOverlay = function(_super) {
        function ModalOverlay(dialogRef, vcr, el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            return _this.dialogRef = dialogRef, _this.vcr = vcr, _this.activateAnimationListener(), 
            _this;
        }
        /**
     * @internal
     */
        /**
     * Define an element that click inside it will not trigger modal close.
     * Since events bubble, clicking on a dialog will bubble up to the overlay, a plugin
     * must define an element that represent the dialog, the overlay will make sure no to close when
     * it was clicked.
     * @param element
     */
        /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
        /**
     * A handler running before destruction of the overlay
     * use to delay destruction due to animation.
     * This is part of the workaround for animation, see canDestroy.
     *
     * NOTE: There is no guarantee that the listeners will fire, use dialog.onDestory for that.
     * @param fn
     */
        return __extends(ModalOverlay, _super), ModalOverlay.prototype.getProjectables = function(content, bindings) {
            var nodes;
            return nodes = "string" == typeof content ? [ [ this.renderer.createText(null, "" + content) ] ] : content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__.G ? [ this.dialogRef.overlay.defaultViewContainer.createEmbeddedView(content, {
                dialogRef: this.dialogRef
            }).rootNodes ] : [ this.embedComponent({
                component: content,
                bindings: bindings
            }).rootNodes ];
        }, ModalOverlay.prototype.embedComponent = function(config) {
            return this.vcr.createEmbeddedView(this.template, {
                $implicit: config
            });
        }, ModalOverlay.prototype.addComponent = function(type, bindings, projectableNodes) {
            return void 0 === bindings && (bindings = []), void 0 === projectableNodes && (projectableNodes = []), 
            _super.prototype._addComponent.call(this, {
                component: type,
                vcRef: this.innerVcr,
                bindings: bindings,
                projectableNodes: projectableNodes
            });
        }, ModalOverlay.prototype.fullscreen = function() {
            var _this = this, style = {
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "z-index": 1500
            };
            Object.keys(style).forEach(function(k) {
                return _this.setStyle(k, style[k]);
            });
        }, ModalOverlay.prototype.insideElement = function() {
            var _this = this, style = {
                position: "absolute",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            Object.keys(style).forEach(function(k) {
                return _this.setStyle(k, style[k]);
            });
        }, ModalOverlay.prototype.setClickBoundary = function(element) {
            var _this = this, target, elListener = function(event) {
                return target = event.target;
            }, docListener = function(event) {
                if (!_this.dialogRef.context.isBlocking && _this.dialogRef.overlay.isTopMost(_this.dialogRef)) {
                    var current = event.target;
                    // on click, this will hit.
                    if (current !== target) {
                        // on mouse down -> drag -> release the current might not be 'target', it might be
                        // a sibling or a child (i.e: not part of the tree-up direction). It might also be a release
                        // outside the dialog... so we compare to the boundary element
                        do if (current === element) return; while (current.parentNode && (current = current.parentNode));
                        _this.dialogRef.dismiss();
                    }
                }
            };
            this.dialogRef.onDestroy.subscribe(function() {
                element.removeEventListener("click", elListener, !1), element.removeEventListener("touchstart", elListener, !1), 
                document.removeEventListener("click", docListener, !1), document.removeEventListener("touchend", docListener, !1);
            }), setTimeout(function() {
                element.addEventListener("mousedown", elListener, !1), element.addEventListener("touchstart", docListener, !1), 
                document.addEventListener("click", docListener, !1), document.addEventListener("touchend", docListener, !1);
            });
        }, ModalOverlay.prototype.canDestroy = function() {
            var completer = new __WEBPACK_IMPORTED_MODULE_1__framework_utils__.a();
            if (Array.isArray(this.beforeDestroyHandlers)) {
                // run destroy notification but protect against halt.
                var id_1 = setTimeout(function() {
                    id_1 = null, completer.reject();
                }, 1e3), resolve = function() {
                    null !== id_1 && (clearTimeout(id_1), completer.resolve());
                };
                Promise.all(this.beforeDestroyHandlers.map(function(fn) {
                    return fn();
                })).then(resolve).catch(resolve);
            } else completer.resolve();
            return completer.promise;
        }, ModalOverlay.prototype.beforeDestroy = function(fn) {
            this.beforeDestroyHandlers || (this.beforeDestroyHandlers = []), this.beforeDestroyHandlers.push(fn);
        }, ModalOverlay.prototype.documentKeypress = function(event) {
            // check that this modal is the last in the stack.
            this.dialogRef.overlay.isTopMost(this.dialogRef) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__.b)(event.keyCode, this.dialogRef.context.keyboard) && this.dialogRef.dismiss();
        }, ModalOverlay.prototype.ngOnDestroy = function() {
            _super.prototype.ngOnDestroy.call(this), this.dialogRef.destroyed !== !0 && // if we're here the overlay is destroyed by an external event that is not user invoked.
            // i.e: The user did no call dismiss or close and dialogRef.destroy() did not invoke.
            // this will happen when routing or killing an element containing a blocked overlay (ngIf)
            // we bail out, i.e gracefully shutting down.
            this.dialogRef.bailOut();
        }, ModalOverlay;
    }(__WEBPACK_IMPORTED_MODULE_3__components_index__.d);
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("innerView", {
        read: __WEBPACK_IMPORTED_MODULE_0__angular_core__.H
    }), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.H) ], ModalOverlay.prototype, "innerVcr", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("template"), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.G) ], ModalOverlay.prototype, "template", void 0), 
    ModalOverlay = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-overlay",
        host: {
            "(body:keydown)": "documentKeypress($event)"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<template #innerView></template>\n<template #template let-ctx>\n    <template [swapCmp]="ctx.component" [swapCmpBindings]="ctx.bindings" [swapCmpProjectables]="ctx.projectableNodes"></template>\n</template>\n'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__.a, __WEBPACK_IMPORTED_MODULE_0__angular_core__.H, __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], ModalOverlay);
}, /* 326 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__message_modal_component__ = __webpack_require__(221), __WEBPACK_IMPORTED_MODULE_2__modal_context__ = __webpack_require__(522);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return MessageModalPresetBuilder;
    });
    var DEFAULT_VALUES = {
        component: __WEBPACK_IMPORTED_MODULE_1__message_modal_component__.d,
        headerClass: "modal-header",
        bodyClass: "modal-body",
        footerClass: "modal-footer"
    }, DEFAULT_SETTERS = [ "headerClass", "title", "titleHtml", "bodyClass", "footerClass" ], MessageModalPresetBuilder = function(_super) {
        function MessageModalPresetBuilder(defaultValues, initialSetters, baseType) {
            void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0);
            var _this = _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                buttons: []
            }, DEFAULT_VALUES), defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.o)(_this, "body", "message", !0), 
            _this;
        }
        return __extends(MessageModalPresetBuilder, _super), MessageModalPresetBuilder.prototype.addButton = function(css, caption, onClick) {
            var btn = {
                cssClass: css,
                caption: caption,
                onClick: onClick
            }, key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.m)("buttons");
            return this[key].push(btn), this;
        }, MessageModalPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_2__modal_context__.a);
}, /* 327 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__framework_createComponent__ = __webpack_require__(322), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_3__overlay_index__ = __webpack_require__(324);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DOMOverlayRenderer;
    });
    var DOMOverlayRenderer = function() {
        function DOMOverlayRenderer() {}
        return DOMOverlayRenderer.prototype.render = function(dialog, vcRef, injector) {
            var bindings = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__.a,
                useValue: dialog
            } ]), cmpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_createComponent__.a)({
                component: __WEBPACK_IMPORTED_MODULE_3__overlay_index__.b,
                vcRef: vcRef,
                injector: injector,
                bindings: bindings
            });
            return dialog.inElement ? vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement) : document.body.appendChild(cmpRef.location.nativeElement), 
            cmpRef;
        }, DOMOverlayRenderer;
    }();
    DOMOverlayRenderer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)() ], DOMOverlayRenderer);
}, /* 328 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /**
 * An event handler factory for event handlers that bubble the event to a given handler
 * if the event target is not an ancestor of the given element.
 * @param element
 * @param handler
 * @returns {function(any): undefined}
 */
    function bubbleNonAncestorHandlerFactory(element, handler) {
        return function(event) {
            var current = event.target;
            do if (current === element) return; while (current.parentNode && (current = current.parentNode));
            handler(event);
        };
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(219);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DOMOutsideEventPlugin;
    });
    // heavily inspired by:
    // http://www.bennadel.com/blog/3025-creating-custom-dom-and-host-event-bindings-in-angular-2-beta-6.htm
    var eventMap = {
        clickOutside: "click",
        mousedownOutside: "mousedown",
        mouseupOutside: "mouseup",
        mousemoveOutside: "mousemove"
    }, DOMOutsideEventPlugin = function() {
        function DOMOutsideEventPlugin() {
            // TODO: use DI factory for this.
            document && "function" == typeof document.addEventListener || (this.addEventListener = __WEBPACK_IMPORTED_MODULE_1__framework_utils__.c);
        }
        return DOMOutsideEventPlugin.prototype.supports = function(eventName) {
            return eventMap.hasOwnProperty(eventName);
        }, DOMOutsideEventPlugin.prototype.addEventListener = function(element, eventName, handler) {
            var zone = this.manager.getZone(), onceOnOutside = function() {
                var listener = bubbleNonAncestorHandlerFactory(element, function(evt) {
                    return zone.runGuarded(function() {
                        return handler(evt);
                    });
                });
                // mimic BrowserDomAdapter.onAndCancel
                return document.addEventListener(eventMap[eventName], listener, !1), function() {
                    return document.removeEventListener(eventMap[eventName], listener, !1);
                };
            };
            // we run the event registration for the document in a different zone, this will make sure
            // change detection is off.
            // It turns out that if a component that use DOMOutsideEventPlugin is built from a click
            // event, we might get here before the event reached the document, causing a quick false
            // positive handling (when stopPropagation() was'nt invoked). To workaround this we wait
            // for the next vm turn and register.
            // Event registration returns a dispose function for that event, angular use it to clean
            // up after component get's destroyed. Since we need to return a dispose function
            // synchronously we have to put a wrapper for it since we will get it asynchronously,
            // i.e: after we need to return it.
            //
            return zone.runOutsideAngular(function() {
                var fn;
                return setTimeout(function() {
                    return fn = onceOnOutside();
                }, 0), function() {
                    return fn();
                };
            });
        }, DOMOutsideEventPlugin.prototype.addGlobalEventListener = function(target, eventName, handler) {
            throw "not supported";
        }, DOMOutsideEventPlugin;
    }();
    DOMOutsideEventPlugin = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", []) ], DOMOutsideEventPlugin);
}, /* 329 */
, /* 330 */
, /* 331 */
, /* 332 */
, /* 333 */
, /* 334 */
, /* 335 */
, /* 336 */
, /* 337 */
, /* 338 */
, /* 339 */
, /* 340 */
, /* 341 */
, /* 342 */
, /* 343 */
, /* 344 */
, /* 345 */
, /* 346 */
, /* 347 */
, /* 348 */
, /* 349 */
, /* 350 */
, /* 351 */
, /* 352 */
, /* 353 */
, /* 354 */
, /* 355 */
, /* 356 */
, /* 357 */
, /* 358 */
, /* 359 */
, /* 360 */
, /* 361 */
, /* 362 */
, /* 363 */
, /* 364 */
, /* 365 */
, /* 366 */
, /* 367 */
, /* 368 */
, /* 369 */
, /* 370 */
, /* 371 */
, /* 372 */
, /* 373 */
, /* 374 */
, /* 375 */
, /* 376 */
, /* 377 */
, /* 378 */
, /* 379 */
, /* 380 */
, /* 381 */
, /* 382 */
/***/
function(module, exports) {
    function webpackEmptyContext(req) {
        throw new Error("Cannot find module '" + req + "'.");
    }
    webpackEmptyContext.keys = function() {
        return [];
    }, webpackEmptyContext.resolve = webpackEmptyContext, module.exports = webpackEmptyContext, 
    webpackEmptyContext.id = 382;
}, /* 383 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function validateMethodName(name) {
        if (!name) throw new Error("Illegal method name. Empty method name is not allowed");
        if (name in this) throw new Error("A member name '" + name + "' already defined.");
    }
    /**
 * Returns a list of assigned property names (non private)
 * @param subject
 * @returns {string[]}
 */
    function getAssignedPropertyNames(subject) {
        return Object.getOwnPropertyNames(subject).filter(function(name) {
            return RESERVED_REGEX.test(name);
        }).map(function(name) {
            return name.substr(2);
        });
    }
    function privateKey(name) {
        return PRIVATE_PREFIX + name;
    }
    function objectDefinePropertyValue(obj, propertyName, value) {
        Object.defineProperty(obj, propertyName, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: value
        });
    }
    /**
 * Given a FluentAssign instance, apply all of the supplied default values so calling
 * instance.toJSON will return those values (does not create a setter function)
 * @param instance
 * @param defaultValues
 */
    function applyDefaultValues(instance, defaultValues) {
        Object.getOwnPropertyNames(defaultValues).forEach(function(name) {
            return instance[privateKey(name)] = defaultValues[name];
        });
    }
    /**
 * Create a function for setting a value for a property on a given object.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param writeOnce If true will allow writing once (default: false)
 *
 * Example:
 * let obj = new FluentAssign<any>;
 * setAssignMethod(obj, 'myProp');
 * obj.myProp('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 *
 *
 * let obj = new FluentAssign<any>;
 * setAssignMethod(obj, 'myProp', true); // applying writeOnce
 * obj.myProp('someValue');
 * obj.myProp('someValue'); // ERROR: Overriding config property 'myProp' is not allowed.
 */
    function setAssignMethod(obj, propertyName, writeOnce) {
        var _this = this;
        void 0 === writeOnce && (writeOnce = !1), validateMethodName.call(obj, propertyName);
        var key = privateKey(propertyName);
        objectDefinePropertyValue(obj, propertyName, function(value) {
            if (writeOnce && _this.hasOwnProperty(key)) throw new Error("Overriding config property '" + propertyName + "' is not allowed.");
            return obj[key] = value, obj;
        });
    }
    /**
 * Create a function for setting a value that is an alias to an other setter function.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param srcPropertyName The name of the property on the object this alias points to
 * @param hard If true, will set a readonly property on the object that returns
 *        the value of the source property. Default: false
 *
 * Example:
 * let obj = new FluentAssign<any> ;
 * setAssignMethod(obj, 'myProp');
 * setAssignAlias(obj, 'myPropAlias', 'myProp');
 * obj.myPropAlias('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 * result.myPropAlias // undefined
 *
 *
 * let obj = new FluentAssign<any> ;
 * setAssignMethod(obj, 'myProp');
 * setAssignAlias(obj, 'myPropAlias', 'myProp', true); // setting a hard alias.
 * obj.myPropAlias('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 * result.myPropAlias // someValue
 */
    function setAssignAlias(obj, propertyName, srcPropertyName, hard) {
        if (void 0 === hard && (hard = !1), validateMethodName.call(obj, propertyName), 
        objectDefinePropertyValue(obj, propertyName, function(value) {
            return obj[srcPropertyName](value), obj;
        }), hard === !0) {
            var key = privateKey(propertyName), srcKey_1 = privateKey(srcPropertyName);
            Object.defineProperty(obj, key, {
                configurable: !1,
                enumerable: !1,
                get: function() {
                    return obj[srcKey_1];
                }
            });
        }
    }
    /* harmony export (immutable) */
    __webpack_exports__.b = privateKey, /* unused harmony export setAssignMethod */
    /* harmony export (immutable) */
    __webpack_exports__.c = setAssignAlias, /* unused harmony export FluentAssignFactory */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return FluentAssign;
    });
    var PRIVATE_PREFIX = "$$", RESERVED_REGEX = /^(\$\$).*/, FluentAssignFactory = function() {
        function FluentAssignFactory(fluentAssign) {
            this._fluentAssign = fluentAssign instanceof FluentAssign ? fluentAssign : new FluentAssign();
        }
        /**
     * Create a setter method on the FluentAssign instance.
     * @param name The name of the setter function.
     * @param defaultValue If set (not undefined) set's the value on the instance immediately.
     * @returns {FluentAssignFactory}
     */
        return FluentAssignFactory.prototype.setMethod = function(name, defaultValue) {
            return void 0 === defaultValue && (defaultValue = void 0), setAssignMethod(this._fluentAssign, name), 
            void 0 !== defaultValue && this._fluentAssign[name](defaultValue), this;
        }, Object.defineProperty(FluentAssignFactory.prototype, "fluentAssign", {
            /**
         * The FluentAssign instance.
         * @returns {FluentAssign<T>}
         */
            get: function() {
                return this._fluentAssign;
            },
            enumerable: !0,
            configurable: !0
        }), FluentAssignFactory;
    }(), FluentAssign = function() {
        /**
     *
     * @param defaultValues An object representing default values for the underlying object.
     * @param initialSetters A list of initial setters for this FluentAssign.
     * @param baseType the class/type to create a new base. optional, {} is used if not supplied.
     */
        function FluentAssign(defaultValues, initialSetters, baseType) {
            void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0);
            var _this = this;
            Array.isArray(defaultValues) ? defaultValues.forEach(function(d) {
                return applyDefaultValues(_this, d);
            }) : defaultValues && applyDefaultValues(this, defaultValues), Array.isArray(initialSetters) && initialSetters.forEach(function(name) {
                return setAssignMethod(_this, name);
            }), baseType && (this.__fluent$base__ = baseType);
        }
        /**
     * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
     * @param defaultValues An object representing default values for the instance.
     * @param initialSetters A list of initial setters for the instance.
     * @returns {FluentAssignFactory<T>}
     */
        /**
     * Returns a FluentAssignFactory<Z> where Z is an instance of FluentAssign<?> or a derived
     * class of it.
     * @param fluentAssign An instance of FluentAssign<?> or a derived class of FluentAssign<?>.
     * @returns {any}
     */
        return FluentAssign.compose = function(defaultValues, initialSetters) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            FluentAssign.composeWith(new FluentAssign(defaultValues, initialSetters));
        }, FluentAssign.composeWith = function(fluentAssign) {
            return new FluentAssignFactory(fluentAssign);
        }, FluentAssign.prototype.toJSON = function() {
            var _this = this;
            return getAssignedPropertyNames(this).reduce(function(obj, name) {
                var key = privateKey(name), propDesc = Object.getOwnPropertyDescriptor(_this, key);
                return propDesc ? Object.defineProperty(obj, name, propDesc) : obj[name] = _this[key], 
                obj;
            }, this.__fluent$base__ ? new this.__fluent$base__() : {});
        }, FluentAssign;
    }();
}, /* 384 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogBailOutError;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DialogBailOutError = function(_super) {
        function DialogBailOutError(value) {
            var _this = _super.call(this) || this;
            return value || (value = "Dialog was forced to close by an unknown source."), _this.message = value, 
            _this;
        }
        return __extends(DialogBailOutError, _super), DialogBailOutError;
    }(Error);
}, /* 385 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__framework_utils__ = __webpack_require__(87), __WEBPACK_IMPORTED_MODULE_1__overlay_context__ = __webpack_require__(386);
    /* unused harmony export DEFAULT_VALUES */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalContext;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return ModalContextBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_VALUES = {}, DEFAULT_SETTERS = [ "message" ], ModalContext = function(_super) {
        function ModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(ModalContext, _super), ModalContext;
    }(__WEBPACK_IMPORTED_MODULE_1__overlay_context__.a), ModalContextBuilder = function(_super) {
        function ModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__framework_utils__.e)(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__framework_utils__.d)(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
        }
        return __extends(ModalContextBuilder, _super), ModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__overlay_context__.b);
}, /* 386 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /**
 * A helper to create an `OverlayConfig` on the fly.
 * Since `OverlayConfig` requires context it means a builder is needed, this process had some boilerplate.
 * When a quick, on the fly overlay config is needed use this helper to avoid that boilerplate.
 *
 * A builder is used as an API to allow setting the context and providing some operations around the modal.
 * When a developers knows the context before hand we can skip this step, this is what this factory is for.
 *
 * @param context The context for the modal
 * @param baseContextType Optional. The type/class of the context. This is the class used to init a new instance of the context
 * @param baseConfig A base configuration that the result will extend
 * @returns {OverlayConfig}
 */
    function overlayConfigFactory(context, baseContextType, baseConfig) {
        return new OverlayContextBuilder(context, void 0, baseContextType).toOverlayConfig(baseConfig);
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__ = __webpack_require__(383), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(87);
    /* unused harmony export DEFAULT_VALUES */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OverlayContext;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return OverlayContextBuilder;
    }), /* harmony export (immutable) */
    __webpack_exports__.c = overlayConfigFactory;
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_VALUES = {
        inElement: !1,
        isBlocking: !0,
        keyboard: [ 27 ],
        supportsKey: function supportsKey(keyCode) {
            return this.keyboard.indexOf(keyCode) > -1;
        }
    }, DEFAULT_SETTERS = [ "inElement", "isBlocking", "keyboard" ], OverlayContext = function() {
        function OverlayContext() {}
        return OverlayContext.prototype.normalize = function() {
            this.isBlocking !== !1 && (this.isBlocking = !0), null === this.keyboard ? this.keyboard = [] : "number" == typeof this.keyboard ? this.keyboard = [ this.keyboard ] : Array.isArray(this.keyboard) || (this.keyboard = DEFAULT_VALUES.keyboard);
        }, OverlayContext;
    }(), OverlayContextBuilder = function(_super) {
        function OverlayContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__.e)(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__.d)(DEFAULT_SETTERS, initialSetters || []), baseType || OverlayContext) || this;
        }
        /**
     * Returns an new OverlayConfig with a context property representing the data in this builder.
     * @param base A base configuration that the result will extend
     * @returns OverlayConfig
     */
        return __extends(OverlayContextBuilder, _super), OverlayContextBuilder.prototype.toOverlayConfig = function(base) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__.e)(base || {}, {
                context: this.toJSON()
            });
        }, OverlayContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0__framework_fluent_assign__.a);
}, /* 387 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function getVCRef(key) {
        return vcRefCollection[key] ? vcRefCollection[key].slice() : [];
    }
    function setVCRef(key, vcRef) {
        vcRefCollection.hasOwnProperty(key) || (vcRefCollection[key] = []), vcRefCollection[key].push(vcRef);
    }
    function delVCRef(key, vcRef) {
        if (vcRef) {
            var coll = vcRefCollection[key] || [], idx = coll.indexOf(vcRef);
            idx > -1 && coll.splice(idx, 1);
        } else vcRefCollection[key] = [];
    }
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return vcRefStore;
    });
    var vcRefCollection = {}, vcRefStore = {
        getVCRef: getVCRef,
        setVCRef: setVCRef,
        delVCRef: delVCRef
    };
}, /* 388 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__models_tokens__ = __webpack_require__(259), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref_stack__ = __webpack_require__(719), __WEBPACK_IMPORTED_MODULE_3__models_vc_ref_store__ = __webpack_require__(387), __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__ = __webpack_require__(88);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Overlay;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, _stack = new __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref_stack__.a(), Overlay = function() {
        function Overlay(_modalRenderer) {
            this._modalRenderer = _modalRenderer;
        }
        /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
        /**
     * Creates an overlay and returns a dialog ref.
     * @param config instructions how to create the overlay
     * @param group A token to associate the new overlay with, used for reference (stacks usually)
     * @returns {DialogRef<T>[]}
     */
        return Object.defineProperty(Overlay.prototype, "stackLength", {
            get: function() {
                return _stack.length;
            },
            enumerable: !0,
            configurable: !0
        }), Overlay.prototype.isTopMost = function(dialogRef) {
            return _stack.indexOf(dialogRef) === _stack.length - 1;
        }, Overlay.prototype.stackPosition = function(dialogRef) {
            return _stack.indexOf(dialogRef);
        }, Overlay.prototype.groupStackLength = function(dialogRef) {
            return _stack.groupLength(_stack.groupOf(dialogRef));
        }, Overlay.prototype.open = function(config, group) {
            var _this = this, viewContainer = config.viewContainer, containers = [];
            if ("string" == typeof viewContainer ? containers = __WEBPACK_IMPORTED_MODULE_3__models_vc_ref_store__.a.getVCRef(viewContainer) : Array.isArray(viewContainer) ? containers = viewContainer : viewContainer && (containers = [ viewContainer ]), 
            !containers || !containers[0]) {
                if (!this.defaultViewContainer) throw new Error('Default view container not set. Add the "defaultOverlayTarget" directive to the application root component template (e.g: <span defaultOverlayTarget></span>. You can also set it manually using the "Overlay" service "defaultViewContainer" property.');
                containers = [ this.defaultViewContainer ];
            }
            return containers.map(function(vc) {
                return _this.createOverlay(config.renderer || _this._modalRenderer, vc, config, group);
            });
        }, Overlay.prototype.createOverlay = function(renderer, vcRef, config, group) {
            config.context && config.context.normalize();
            var dialog = new __WEBPACK_IMPORTED_MODULE_4__models_dialog_ref__.a(this, config.context || {});
            dialog.inElement = config.context && !!config.context.inElement;
            var cmpRef = renderer.render(dialog, vcRef, config.injector);
            return Object.defineProperty(dialog, "overlayRef", {
                value: cmpRef
            }), _stack.pushManaged(dialog, group), dialog;
        }, Overlay;
    }();
    Overlay = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_1__models_tokens__.a ]) ], Overlay);
}, /* 389 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalContext;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return BSModalContextBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_VALUES = {
        dialogClass: "modal-dialog",
        showClose: !1
    }, DEFAULT_SETTERS = [ "dialogClass", "size", "showClose" ], BSModalContext = function(_super) {
        function BSModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(BSModalContext, _super), BSModalContext.prototype.normalize = function() {
            this.dialogClass || (this.dialogClass = DEFAULT_VALUES.dialogClass), _super.prototype.normalize.call(this);
        }, BSModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), BSModalContextBuilder = function(_super) {
        function BSModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || BSModalContext) || this;
        }
        return __extends(BSModalContextBuilder, _super), BSModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 390 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest__ = __webpack_require__(170), __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest__), __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__(263), __WEBPACK_IMPORTED_MODULE_4__bootstrap_presets_one_button_preset__ = __webpack_require__(391), __WEBPACK_IMPORTED_MODULE_5__bootstrap_presets_two_button_preset__ = __webpack_require__(392);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__bootstrap_presets_one_button_preset__.a(this, {
                isBlocking: !1
            });
        }, Modal.prototype.prompt = function() {
            return new __WEBPACK_IMPORTED_MODULE_5__bootstrap_presets_two_button_preset__.a(this, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.confirm = function() {
            return new __WEBPACK_IMPORTED_MODULE_5__bootstrap_presets_two_button_preset__.b(this, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.create = function(dialogRef, content, bindings) {
            var _this = this, backdropRef = this.createBackdrop(dialogRef, __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.i), containerRef = this.createContainer(dialogRef, __WEBPACK_IMPORTED_MODULE_3__modal_container_component__.a, content, bindings), overlay = dialogRef.overlayRef.instance, backdrop = backdropRef.instance, container = containerRef.instance;
            // add body class if this is the only dialog in the stack
            return dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen(), document.body.classList.contains("modal-open") || document.body.classList.add("modal-open"), 
            dialogRef.inElement && backdrop.setStyle("position", "absolute"), backdrop.addClass("modal-backdrop fade", !0), 
            backdrop.addClass("in"), container.addClass("in"), containerRef.location.nativeElement && containerRef.location.nativeElement.focus(), 
            overlay.beforeDestroy(function() {
                var completer = new __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.k();
                return backdrop.removeClass("in"), container.removeClass("in"), backdrop.myAnimationEnd$().combineLatest(container.myAnimationEnd$(), function(s1, s2) {
                    return [ s1, s2 ];
                }).subscribe(function(sources) {
                    1 === _this.overlay.groupStackLength(dialogRef) && document.body.classList.remove("modal-open"), 
                    completer.resolve();
                }), completer.promise;
            }), dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.g ]) ], Modal);
}, /* 391 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__message_modal_preset__ = __webpack_require__(264);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OneButtonPresetBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, OneButtonPresetBuilder = function(_super) {
        function OneButtonPresetBuilder(modal, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                okBtn: "OK",
                okBtnClass: "btn btn-primary"
            }, defaultValues || {}), [ "okBtn", "okBtnClass" ]) || this;
        }
        return __extends(OneButtonPresetBuilder, _super), OneButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
                return cmp.dialog.close(!0);
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, OneButtonPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__message_modal_preset__.a);
}, /* 392 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__message_modal_preset__ = __webpack_require__(264);
    /* unused harmony export AbstractTwoButtonPresetBuilder */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return TwoButtonPresetBuilder;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return PromptPresetBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, AbstractTwoButtonPresetBuilder = function(_super) {
        function AbstractTwoButtonPresetBuilder(modal, defaultValues, initialSetters) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = []), 
            _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                okBtn: "OK",
                okBtnClass: "btn btn-primary",
                cancelBtn: "Cancel",
                cancelBtnClass: "btn btn-default"
            }, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)([ "okBtn", "okBtnClass", "cancelBtn", "cancelBtnClass" ], initialSetters)) || this;
        }
        return __extends(AbstractTwoButtonPresetBuilder, _super), AbstractTwoButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.cancelBtnClass, config.cancelBtn, function(cmp, $event) {
                return cmp.dialog.dismiss();
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, AbstractTwoButtonPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__message_modal_preset__.a), TwoButtonPresetBuilder = function(_super) {
        function TwoButtonPresetBuilder(modal, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, modal, defaultValues) || this;
        }
        return __extends(TwoButtonPresetBuilder, _super), TwoButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
                return cmp.dialog.close(!0);
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, TwoButtonPresetBuilder;
    }(AbstractTwoButtonPresetBuilder), PromptPresetBuilder = function(_super) {
        function PromptPresetBuilder(modal, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, modal, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                showInput: !0,
                defaultValue: ""
            }, defaultValues || {}), [ "placeholder", "defaultValue" ]) || this;
        }
        return __extends(PromptPresetBuilder, _super), PromptPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
                return cmp.dialog.close(cmp.dialog.context.defaultValue);
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, PromptPresetBuilder;
    }(AbstractTwoButtonPresetBuilder);
}, /* 393 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeModalRenderer;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, JSNativeModalRenderer = function() {
        function JSNativeModalRenderer() {}
        return JSNativeModalRenderer.prototype.render = function(dialog, vcRef) {
            var result;
            switch (dialog.context.dialogType) {
              case __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.alert:
                window.alert(dialog.context.message), result = !0;
                break;

              case __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.prompt:
                result = window.prompt(dialog.context.message, dialog.context.promptDefault);
                break;

              case __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.confirm:
                result = window.confirm(dialog.context.message);
            }
            // we need to return ComponentRef<ModalOverlay> but a native dialog does'nt have that
            // so we resolve an empty promise, the user of this renderer should expect that.
            return dialog.destroy = function() {}, result === !1 ? dialog.dismiss() : dialog.close(result), 
            {};
        }, JSNativeModalRenderer;
    }();
    JSNativeModalRenderer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)() ], JSNativeModalRenderer);
}, /* 394 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* unused harmony export JSNativeModalContext */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeModalContextBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_SETTERS = [ "promptDefault" ], JSNativeModalContext = function(_super) {
        function JSNativeModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(JSNativeModalContext, _super), JSNativeModalContext.prototype.normalize = function() {
            this.message || (this.message = ""), void 0 === this.dialogType && (this.dialogType = __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.alert);
        }, JSNativeModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), JSNativeModalContextBuilder = function(_super) {
        function JSNativeModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, defaultValues || {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || JSNativeModalContext) || this;
        }
        return __extends(JSNativeModalContextBuilder, _super), JSNativeModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 395 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(266), __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(394), __WEBPACK_IMPORTED_MODULE_2__js_native_modal_renderer__ = __webpack_require__(393);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativePresetBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, JSNativePresetBuilder = function(_super) {
        function JSNativePresetBuilder(modal, dialogType) {
            return _super.call(this, {
                modal: modal,
                dialogType: dialogType
            }) || this;
        }
        /**
     * Hook to alter config and return bindings.
     * @param config
     */
        /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
        return __extends(JSNativePresetBuilder, _super), JSNativePresetBuilder.prototype.$$beforeOpen = function(config) {
            return [];
        }, JSNativePresetBuilder.prototype.open = function(viewContainer) {
            var context = this.toJSON();
            if (!(context.modal instanceof __WEBPACK_IMPORTED_MODULE_0__modal__.a)) return Promise.reject(new Error("Configuration Error: modal service not set."));
            var overlayConfig = {
                context: context,
                renderer: new __WEBPACK_IMPORTED_MODULE_2__js_native_modal_renderer__.a(),
                viewContainer: viewContainer,
                bindings: "function" == typeof this.$$beforeOpen && this.$$beforeOpen(context)
            };
            return context.modal.open(context.component, overlayConfig);
        }, JSNativePresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.a);
}, /* 396 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(398);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "e", function() {
        return __WEBPACK_IMPORTED_MODULE_0__modal__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(397);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_1__modal_context__.a;
    });
    /* unused harmony reexport VEXModalContextBuilder */
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_2__presets_dropin_preset__ = __webpack_require__(400), __WEBPACK_IMPORTED_MODULE_3__dialog_form_modal__ = __webpack_require__(176), __WEBPACK_IMPORTED_MODULE_4__presets_dialog_preset__ = __webpack_require__(399);
    /* unused harmony reexport DialogPreset */
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return __WEBPACK_IMPORTED_MODULE_4__presets_dialog_preset__.b;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_5__vex_module__ = __webpack_require__(728);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_5__vex_module__.a;
    }), /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function() {
        return __WEBPACK_IMPORTED_MODULE_5__vex_module__.b;
    });
}, /* 397 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VEXModalContext;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return VEXModalContextBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_VALUES = {
        className: "default",
        overlayClassName: "vex-overlay",
        contentClassName: "vex-content",
        closeClassName: "vex-close"
    }, DEFAULT_SETTERS = [ "className", "overlayClassName", "contentClassName", "closeClassName", "showCloseButton" ], VEXModalContext = function(_super) {
        function VEXModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(VEXModalContext, _super), VEXModalContext.prototype.normalize = function() {
            this.className || (this.className = DEFAULT_VALUES.className), this.overlayClassName || (this.overlayClassName = DEFAULT_VALUES.overlayClassName), 
            this.contentClassName || (this.contentClassName = DEFAULT_VALUES.contentClassName), 
            this.closeClassName || (this.closeClassName = DEFAULT_VALUES.closeClassName), _super.prototype.normalize.call(this);
        }, VEXModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), VEXModalContextBuilder = function(_super) {
        function VEXModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || VEXModalContext) || this;
        }
        /**
     *
     * @aliasFor isBlocking
     */
        return __extends(VEXModalContextBuilder, _super), VEXModalContextBuilder.prototype.overlayClosesOnClick = function(value) {
            return this[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.m)("isBlocking")] = !value, 
            this;
        }, VEXModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 398 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first__ = __webpack_require__(368), __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_first__), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__ = __webpack_require__(170), __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__), __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__ = __webpack_require__(400);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, Modal = function(_super) {
        function Modal(overlay) {
            return _super.call(this, overlay) || this;
        }
        return __extends(Modal, _super), Modal.prototype.alert = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__.a(this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.f.alert, {
                isBlocking: !1
            });
        }, Modal.prototype.prompt = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__.a(this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.f.prompt, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.confirm = function() {
            return new __WEBPACK_IMPORTED_MODULE_4__presets_dropin_preset__.a(this, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.f.confirm, {
                isBlocking: !0,
                keyboard: null
            });
        }, Modal.prototype.create = function(dialogRef, content, bindings) {
            var _this = this, backdropRef = this.createBackdrop(dialogRef, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.i), containerRef = this.createContainer(dialogRef, __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.j, content, bindings), overlay = dialogRef.overlayRef.instance, backdrop = backdropRef.instance, container = containerRef.instance;
            // add body class if this is the only dialog in the stack
            return dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen(), document.body.classList.contains("vex-open") || document.body.classList.add("vex-open"), 
            overlay.addClass("vex vex-theme-" + dialogRef.context.className), backdrop.addClass("vex-overlay"), 
            container.addClass(dialogRef.context.contentClassName), container.setStyle("display", "block"), 
            dialogRef.inElement && (overlay.setStyle("padding", "0"), container.setStyle("margin-top", "20px")), 
            containerRef.location.nativeElement && containerRef.location.nativeElement.focus(), 
            "bottom-right-corner" === dialogRef.context.className && (overlay.setStyle("overflow-y", "hidden"), 
            container.setStyle("position", "absolute")), overlay.beforeDestroy(function() {
                overlay.addClass("vex-closing");
                var completer = new __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.k(), animationEnd$ = container.myAnimationEnd$();
                return "bottom-right-corner" !== dialogRef.context.className && (animationEnd$ = animationEnd$.combineLatest(backdrop.myAnimationEnd$(), function(s1, s2) {
                    return [ s1, s2 ];
                })), animationEnd$.subscribe(function(sources) {
                    1 === _this.overlay.groupStackLength(dialogRef) && document.body.classList.remove("vex-open"), 
                    completer.resolve();
                }), completer.promise;
            }), overlay.setClickBoundary(containerRef.location.nativeElement), dialogRef;
        }, Modal;
    }(__WEBPACK_IMPORTED_MODULE_3_angular2_modal__.b);
    Modal = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__.y)(), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.g ]) ], Modal);
}, /* 399 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(397), __WEBPACK_IMPORTED_MODULE_2__dialog_form_modal__ = __webpack_require__(176);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogPreset;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return DialogPresetBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_SETTERS = [ "content" ], DialogPreset = function(_super) {
        function DialogPreset() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(DialogPreset, _super), DialogPreset;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.a), DialogPresetBuilder = function(_super) {
        function DialogPresetBuilder(modal, defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                component: __WEBPACK_IMPORTED_MODULE_2__dialog_form_modal__.c,
                buttons: [],
                defaultResult: !0
            }, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || DialogPreset) || this;
        }
        return __extends(DialogPresetBuilder, _super), DialogPresetBuilder.prototype.addButton = function(css, caption, onClick) {
            var btn = {
                cssClass: css,
                caption: caption,
                onClick: onClick
            }, key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.m)("buttons");
            return this[key].push(btn), this;
        }, DialogPresetBuilder.prototype.addOkButton = function(text) {
            return void 0 === text && (text = "OK"), this.addButton("vex-dialog-button-primary vex-dialog-button vex-first", text, function(cmp, $event) {
                return cmp.dialog.close(cmp.dialog.context.defaultResult);
            }), this;
        }, DialogPresetBuilder.prototype.addCancelButton = function(text) {
            return void 0 === text && (text = "CANCEL"), this.addButton("vex-dialog-button-secondary vex-dialog-button vex-last", text, function(cmp, $event) {
                return cmp.dialog.dismiss();
            }), this;
        }, DialogPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.b);
}, /* 400 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__ = __webpack_require__(176), __WEBPACK_IMPORTED_MODULE_2__dialog_preset__ = __webpack_require__(399);
    /* unused harmony export DropInPreset */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DropInPresetBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_VALUES = {
        component: __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__.c,
        content: __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__.b,
        okBtn: "OK",
        cancelBtn: "Cancel"
    }, DEFAULT_SETTERS = [ "okBtn", "cancelBtn", "placeholder" ], DropInPreset = function(_super) {
        function DropInPreset() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(DropInPreset, _super), Object.defineProperty(DropInPreset.prototype, "showInput", {
            get: function() {
                return this.dropInType === __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.prompt;
            },
            enumerable: !0,
            configurable: !0
        }), DropInPreset;
    }(__WEBPACK_IMPORTED_MODULE_2__dialog_preset__.a), DropInPresetBuilder = function(_super) {
        function DropInPresetBuilder(modal, dropInType, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, modal, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                dropInType: dropInType
            }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset) || this;
        }
        return __extends(DropInPresetBuilder, _super), DropInPresetBuilder.prototype.$$beforeOpen = function(config) {
            switch (config.okBtn && this.addOkButton(config.okBtn), config.dropInType) {
              case __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.prompt:
                config.defaultResult = void 0;

              case __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.confirm:
                config.cancelBtn && this.addCancelButton(config.cancelBtn);
            }
            return _super.prototype.$$beforeOpen.call(this, config);
        }, DropInPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_2__dialog_preset__.b);
}, /* 401 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(188), __WEBPACK_IMPORTED_MODULE_1__src_demo_app_app_module__ = __webpack_require__(510), __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(267), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(279), __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(198), __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__ = __webpack_require__(206), __WEBPACK_IMPORTED_MODULE_6__src_lib_angular2_modal_module__ = __webpack_require__(518), __WEBPACK_IMPORTED_MODULE_7__src_demo_app_shared_module__ = __webpack_require__(116), __WEBPACK_IMPORTED_MODULE_8__angular_forms_src_directives__ = __webpack_require__(295), __WEBPACK_IMPORTED_MODULE_9__angular_forms_src_form_providers__ = __webpack_require__(300), __WEBPACK_IMPORTED_MODULE_10__src_lib_plugins_bootstrap_bootstrap_module__ = __webpack_require__(521), __WEBPACK_IMPORTED_MODULE_11__src_demo_app_bootstrap_demo_bootstrap_demo_module__ = __webpack_require__(314), __WEBPACK_IMPORTED_MODULE_12__src_lib_plugins_vex_vex_module__ = __webpack_require__(532), __WEBPACK_IMPORTED_MODULE_13__src_demo_app_vex_demo_vex_demo_module__ = __webpack_require__(318), __WEBPACK_IMPORTED_MODULE_14__src_lib_plugins_js_native_js_native_module__ = __webpack_require__(526), __WEBPACK_IMPORTED_MODULE_15__src_demo_app_js_native_demo_js_native_demo_module__ = __webpack_require__(317), __WEBPACK_IMPORTED_MODULE_16__src_demo_app_home_in_app_plugin_index__ = __webpack_require__(215), __WEBPACK_IMPORTED_MODULE_17__angular_common_src_localization__ = __webpack_require__(103), __WEBPACK_IMPORTED_MODULE_18__angular_core_src_application_init__ = __webpack_require__(129), __WEBPACK_IMPORTED_MODULE_19__angular_core_src_testability_testability__ = __webpack_require__(135), __WEBPACK_IMPORTED_MODULE_20__angular_core_src_application_ref__ = __webpack_require__(130), __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_compiler__ = __webpack_require__(69), __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(142), __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(77), __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(143), __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(141), __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(203), __WEBPACK_IMPORTED_MODULE_27__angular_core_src_animation_animation_queue__ = __webpack_require__(179), __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_browser_title__ = __webpack_require__(199), __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(93), __WEBPACK_IMPORTED_MODULE_31__src_lib_providers_dom_modal_renderer__ = __webpack_require__(327), __WEBPACK_IMPORTED_MODULE_32__src_lib_overlay_overlay_service__ = __webpack_require__(60), __WEBPACK_IMPORTED_MODULE_33__src_demo_app_home_in_app_plugin_modal__ = __webpack_require__(152), __WEBPACK_IMPORTED_MODULE_34__src_lib_plugins_bootstrap_modal__ = __webpack_require__(156), __WEBPACK_IMPORTED_MODULE_35__src_lib_plugins_vex_modal__ = __webpack_require__(223), __WEBPACK_IMPORTED_MODULE_36__src_lib_plugins_js_native_modal__ = __webpack_require__(157), __WEBPACK_IMPORTED_MODULE_37__angular_common_src_location_location__ = __webpack_require__(126), __WEBPACK_IMPORTED_MODULE_38__angular_router_src_url_tree__ = __webpack_require__(59), __WEBPACK_IMPORTED_MODULE_39__angular_router_src_router_outlet_map__ = __webpack_require__(78), __WEBPACK_IMPORTED_MODULE_40__angular_core_src_linker_system_js_ng_module_factory_loader__ = __webpack_require__(286), __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__ = __webpack_require__(207), __WEBPACK_IMPORTED_MODULE_42__lib_overlay_overlay_component_ngfactory__ = __webpack_require__(506), __WEBPACK_IMPORTED_MODULE_43__lib_components_css_backdrop_ngfactory__ = __webpack_require__(504), __WEBPACK_IMPORTED_MODULE_44__lib_components_css_dialog_container_ngfactory__ = __webpack_require__(505), __WEBPACK_IMPORTED_MODULE_45__lib_plugins_bootstrap_modal_container_component_ngfactory__ = __webpack_require__(508), __WEBPACK_IMPORTED_MODULE_46__lib_plugins_bootstrap_message_modal_component_ngfactory__ = __webpack_require__(507), __WEBPACK_IMPORTED_MODULE_47__bootstrap_demo_bootstrap_demo_ngfactory__ = __webpack_require__(489), __WEBPACK_IMPORTED_MODULE_48__bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page_ngfactory__ = __webpack_require__(487), __WEBPACK_IMPORTED_MODULE_49__bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard_ngfactory__ = __webpack_require__(490), __WEBPACK_IMPORTED_MODULE_50__bootstrap_demo_bootstrap_demo_page_custom_modal_sample_ngfactory__ = __webpack_require__(488), __WEBPACK_IMPORTED_MODULE_51__lib_plugins_vex_dialog_form_modal_ngfactory__ = __webpack_require__(509), __WEBPACK_IMPORTED_MODULE_52__vex_demo_vex_demo_ngfactory__ = __webpack_require__(503), __WEBPACK_IMPORTED_MODULE_53__vex_demo_login_dialog_ngfactory__ = __webpack_require__(502), __WEBPACK_IMPORTED_MODULE_54__js_native_demo_js_native_demo_ngfactory__ = __webpack_require__(493), __WEBPACK_IMPORTED_MODULE_55__home_in_app_plugin_modal_backdrop_ngfactory__ = __webpack_require__(492), __WEBPACK_IMPORTED_MODULE_56__home_home_ngfactory__ = __webpack_require__(491), __WEBPACK_IMPORTED_MODULE_57__app_ngfactory__ = __webpack_require__(485), __WEBPACK_IMPORTED_MODULE_58__angular_core_src_application_tokens__ = __webpack_require__(104), __WEBPACK_IMPORTED_MODULE_59__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(200), __WEBPACK_IMPORTED_MODULE_60__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(201), __WEBPACK_IMPORTED_MODULE_61__src_lib_providers_outside_event_plugin__ = __webpack_require__(328), __WEBPACK_IMPORTED_MODULE_62__angular_core_src_zone_ng_zone__ = __webpack_require__(108), __WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(140), __WEBPACK_IMPORTED_MODULE_64__src_demo_app_bootstrap_demo_bootstrap_demo__ = __webpack_require__(149), __WEBPACK_IMPORTED_MODULE_65__src_demo_app_bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page__ = __webpack_require__(148), __WEBPACK_IMPORTED_MODULE_66__src_demo_app_bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard__ = __webpack_require__(150), __WEBPACK_IMPORTED_MODULE_67__src_demo_app_vex_demo_vex_demo__ = __webpack_require__(154), __WEBPACK_IMPORTED_MODULE_68__src_demo_app_js_native_demo_js_native_demo__ = __webpack_require__(153), __WEBPACK_IMPORTED_MODULE_69__src_demo_app_home_home__ = __webpack_require__(151), __WEBPACK_IMPORTED_MODULE_70__angular_common_src_location_platform_location__ = __webpack_require__(127), __WEBPACK_IMPORTED_MODULE_71__angular_common_src_location_location_strategy__ = __webpack_require__(68), __WEBPACK_IMPORTED_MODULE_72__angular_router_src_url_handling_strategy__ = __webpack_require__(145), __WEBPACK_IMPORTED_MODULE_73__angular_router_src_route_reuse_strategy__ = __webpack_require__(205), __WEBPACK_IMPORTED_MODULE_74__angular_router_src_router__ = __webpack_require__(58), __WEBPACK_IMPORTED_MODULE_75__angular_core_src_console__ = __webpack_require__(132), __WEBPACK_IMPORTED_MODULE_76__angular_core_src_i18n_tokens__ = __webpack_require__(187), __WEBPACK_IMPORTED_MODULE_77__angular_core_src_error_handler__ = __webpack_require__(186), __WEBPACK_IMPORTED_MODULE_78__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(113), __WEBPACK_IMPORTED_MODULE_79__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(139), __WEBPACK_IMPORTED_MODULE_80__angular_core_src_render_api__ = __webpack_require__(134), __WEBPACK_IMPORTED_MODULE_81__angular_core_src_security__ = __webpack_require__(70), __WEBPACK_IMPORTED_MODULE_82__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_83__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(90), __WEBPACK_IMPORTED_MODULE_84__src_lib_models_tokens__ = __webpack_require__(220), __WEBPACK_IMPORTED_MODULE_85__src_lib_providers_modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_86__angular_router_src_router_config_loader__ = __webpack_require__(95), __WEBPACK_IMPORTED_MODULE_87__angular_core_src_linker_ng_module_factory_loader__ = __webpack_require__(189), __WEBPACK_IMPORTED_MODULE_88__angular_router_src_router_state__ = __webpack_require__(48);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return AppModuleNgFactory;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var AppModuleInjector = function(_super) {
        function AppModuleInjector(parent) {
            return _super.call(this, parent, [ __WEBPACK_IMPORTED_MODULE_42__lib_overlay_overlay_component_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_43__lib_components_css_backdrop_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_44__lib_components_css_dialog_container_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_45__lib_plugins_bootstrap_modal_container_component_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_46__lib_plugins_bootstrap_message_modal_component_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_47__bootstrap_demo_bootstrap_demo_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_48__bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_49__bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_50__bootstrap_demo_bootstrap_demo_page_custom_modal_sample_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_51__lib_plugins_vex_dialog_form_modal_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_51__lib_plugins_vex_dialog_form_modal_ngfactory__.b, __WEBPACK_IMPORTED_MODULE_52__vex_demo_vex_demo_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_53__vex_demo_login_dialog_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_54__js_native_demo_js_native_demo_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_55__home_in_app_plugin_modal_backdrop_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_56__home_home_ngfactory__.a, __WEBPACK_IMPORTED_MODULE_57__app_ngfactory__.a ], [ __WEBPACK_IMPORTED_MODULE_57__app_ngfactory__.a ]) || this;
        }
        return __extends(AppModuleInjector, _super), Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_17", {
            get: function() {
                return null == this.__LOCALE_ID_17 && (this.__LOCALE_ID_17 = "en-US"), this.__LOCALE_ID_17;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_18", {
            get: function() {
                return null == this.__NgLocalization_18 && (this.__NgLocalization_18 = new __WEBPACK_IMPORTED_MODULE_17__angular_common_src_localization__.a(this._LOCALE_ID_17)), 
                this.__NgLocalization_18;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_23", {
            get: function() {
                return null == this.__ApplicationRef_23 && (this.__ApplicationRef_23 = this._ApplicationRef__22), 
                this.__ApplicationRef_23;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Compiler_24", {
            get: function() {
                return null == this.__Compiler_24 && (this.__Compiler_24 = new __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_compiler__.a()), 
                this.__Compiler_24;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_25", {
            get: function() {
                return null == this.__APP_ID_25 && (this.__APP_ID_25 = __WEBPACK_IMPORTED_MODULE_58__angular_core_src_application_tokens__.a()), 
                this.__APP_ID_25;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_26", {
            get: function() {
                return null == this.__DOCUMENT_26 && (this.__DOCUMENT_26 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__.a()), 
                this.__DOCUMENT_26;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_27", {
            get: function() {
                return null == this.__HAMMER_GESTURE_CONFIG_27 && (this.__HAMMER_GESTURE_CONFIG_27 = new __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_src_dom_events_hammer_gestures__.a()), 
                this.__HAMMER_GESTURE_CONFIG_27;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_28", {
            get: function() {
                return null == this.__EVENT_MANAGER_PLUGINS_28 && (this.__EVENT_MANAGER_PLUGINS_28 = [ new __WEBPACK_IMPORTED_MODULE_59__angular_platform_browser_src_dom_events_dom_events__.a(), new __WEBPACK_IMPORTED_MODULE_60__angular_platform_browser_src_dom_events_key_events__.a(), new __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_src_dom_events_hammer_gestures__.b(this._HAMMER_GESTURE_CONFIG_27), new __WEBPACK_IMPORTED_MODULE_61__src_lib_providers_outside_event_plugin__.a() ]), 
                this.__EVENT_MANAGER_PLUGINS_28;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_EventManager_29", {
            get: function() {
                return null == this.__EventManager_29 && (this.__EventManager_29 = new __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_dom_events_event_manager__.a(this._EVENT_MANAGER_PLUGINS_28, this.parent.get(__WEBPACK_IMPORTED_MODULE_62__angular_core_src_zone_ng_zone__.a))), 
                this.__EventManager_29;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_30", {
            get: function() {
                return null == this.__DomSharedStylesHost_30 && (this.__DomSharedStylesHost_30 = new __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_src_dom_shared_styles_host__.a(this._DOCUMENT_26)), 
                this.__DomSharedStylesHost_30;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_31", {
            get: function() {
                return null == this.__AnimationDriver_31 && (this.__AnimationDriver_31 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__.b()), 
                this.__AnimationDriver_31;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_32", {
            get: function() {
                return null == this.__DomRootRenderer_32 && (this.__DomRootRenderer_32 = new __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_src_dom_dom_renderer__.a(this._DOCUMENT_26, this._EventManager_29, this._DomSharedStylesHost_30, this._AnimationDriver_31, this._APP_ID_25)), 
                this.__DomRootRenderer_32;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_33", {
            get: function() {
                return null == this.__NgProbeToken_33 && (this.__NgProbeToken_33 = [ __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.a() ]), 
                this.__NgProbeToken_33;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_34", {
            get: function() {
                return null == this.__RootRenderer_34 && (this.__RootRenderer_34 = __WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_src_dom_debug_ng_probe__.a(this._DomRootRenderer_32, this.parent.get(__WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_src_dom_debug_ng_probe__.b, null), this._NgProbeToken_33)), 
                this.__RootRenderer_34;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_35", {
            get: function() {
                return null == this.__DomSanitizer_35 && (this.__DomSanitizer_35 = new __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_src_security_dom_sanitization_service__.a()), 
                this.__DomSanitizer_35;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_36", {
            get: function() {
                return null == this.__Sanitizer_36 && (this.__Sanitizer_36 = this._DomSanitizer_35), 
                this.__Sanitizer_36;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_37", {
            get: function() {
                return null == this.__AnimationQueue_37 && (this.__AnimationQueue_37 = new __WEBPACK_IMPORTED_MODULE_27__angular_core_src_animation_animation_queue__.a(this.parent.get(__WEBPACK_IMPORTED_MODULE_62__angular_core_src_zone_ng_zone__.a))), 
                this.__AnimationQueue_37;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_38", {
            get: function() {
                return null == this.__ViewUtils_38 && (this.__ViewUtils_38 = new __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_view_utils__.ViewUtils(this._RootRenderer_34, this._Sanitizer_36, this._AnimationQueue_37)), 
                this.__ViewUtils_38;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_39", {
            get: function() {
                return null == this.__IterableDiffers_39 && (this.__IterableDiffers_39 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__.a()), 
                this.__IterableDiffers_39;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_40", {
            get: function() {
                return null == this.__KeyValueDiffers_40 && (this.__KeyValueDiffers_40 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__.b()), 
                this.__KeyValueDiffers_40;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_41", {
            get: function() {
                return null == this.__SharedStylesHost_41 && (this.__SharedStylesHost_41 = this._DomSharedStylesHost_30), 
                this.__SharedStylesHost_41;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Title_42", {
            get: function() {
                return null == this.__Title_42 && (this.__Title_42 = new __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_browser_title__.a()), 
                this.__Title_42;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_43", {
            get: function() {
                return null == this.__RadioControlRegistry_43 && (this.__RadioControlRegistry_43 = new __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_radio_control_value_accessor__.a()), 
                this.__RadioControlRegistry_43;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_OverlayRenderer_44", {
            get: function() {
                return null == this.__OverlayRenderer_44 && (this.__OverlayRenderer_44 = new __WEBPACK_IMPORTED_MODULE_31__src_lib_providers_dom_modal_renderer__.a()), 
                this.__OverlayRenderer_44;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Overlay_45", {
            get: function() {
                return null == this.__Overlay_45 && (this.__Overlay_45 = new __WEBPACK_IMPORTED_MODULE_32__src_lib_overlay_overlay_service__.a(this._OverlayRenderer_44)), 
                this.__Overlay_45;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Modal_46", {
            get: function() {
                return null == this.__Modal_46 && (this.__Modal_46 = new __WEBPACK_IMPORTED_MODULE_33__src_demo_app_home_in_app_plugin_modal__.a(this._Overlay_45)), 
                this.__Modal_46;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Modal_47", {
            get: function() {
                return null == this.__Modal_47 && (this.__Modal_47 = new __WEBPACK_IMPORTED_MODULE_34__src_lib_plugins_bootstrap_modal__.a(this._Overlay_45)), 
                this.__Modal_47;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_48", {
            get: function() {
                return null == this.__ROUTES_48 && (this.__ROUTES_48 = [ [ {
                    path: "bootstrap-demo",
                    component: __WEBPACK_IMPORTED_MODULE_64__src_demo_app_bootstrap_demo_bootstrap_demo__.a,
                    children: [ {
                        path: "",
                        component: __WEBPACK_IMPORTED_MODULE_65__src_demo_app_bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page__.a,
                        pathMatch: "full"
                    }, {
                        path: "customizeModals",
                        component: __WEBPACK_IMPORTED_MODULE_66__src_demo_app_bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard__.a
                    } ]
                } ], [ {
                    path: "vex-demo",
                    component: __WEBPACK_IMPORTED_MODULE_67__src_demo_app_vex_demo_vex_demo__.a
                } ], [ {
                    path: "js-native-demo",
                    component: __WEBPACK_IMPORTED_MODULE_68__src_demo_app_js_native_demo_js_native_demo__.a
                } ], [ {
                    path: "home",
                    component: __WEBPACK_IMPORTED_MODULE_69__src_demo_app_home_home__.a
                }, {
                    path: "",
                    redirectTo: "home",
                    pathMatch: "full"
                } ] ]), this.__ROUTES_48;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Modal_49", {
            get: function() {
                return null == this.__Modal_49 && (this.__Modal_49 = new __WEBPACK_IMPORTED_MODULE_35__src_lib_plugins_vex_modal__.a(this._Overlay_45)), 
                this.__Modal_49;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Modal_50", {
            get: function() {
                return null == this.__Modal_50 && (this.__Modal_50 = new __WEBPACK_IMPORTED_MODULE_36__src_lib_plugins_js_native_modal__.a(this._Overlay_45)), 
                this.__Modal_50;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Modal_51", {
            get: function() {
                return null == this.__Modal_51 && (this.__Modal_51 = new __WEBPACK_IMPORTED_MODULE_33__src_demo_app_home_in_app_plugin_modal__.a(this._Overlay_45)), 
                this.__Modal_51;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_52", {
            get: function() {
                return null == this.__ROUTER_CONFIGURATION_52 && (this.__ROUTER_CONFIGURATION_52 = {
                    useHash: !0,
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.a
                }), this.__ROUTER_CONFIGURATION_52;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_53", {
            get: function() {
                return null == this.__LocationStrategy_53 && (this.__LocationStrategy_53 = __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.b(this.parent.get(__WEBPACK_IMPORTED_MODULE_70__angular_common_src_location_platform_location__.a), this.parent.get(__WEBPACK_IMPORTED_MODULE_71__angular_common_src_location_location_strategy__.a, null), this._ROUTER_CONFIGURATION_52)), 
                this.__LocationStrategy_53;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Location_54", {
            get: function() {
                return null == this.__Location_54 && (this.__Location_54 = new __WEBPACK_IMPORTED_MODULE_37__angular_common_src_location_location__.a(this._LocationStrategy_53)), 
                this.__Location_54;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_55", {
            get: function() {
                return null == this.__UrlSerializer_55 && (this.__UrlSerializer_55 = new __WEBPACK_IMPORTED_MODULE_38__angular_router_src_url_tree__.a()), 
                this.__UrlSerializer_55;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_56", {
            get: function() {
                return null == this.__RouterOutletMap_56 && (this.__RouterOutletMap_56 = new __WEBPACK_IMPORTED_MODULE_39__angular_router_src_router_outlet_map__.a()), 
                this.__RouterOutletMap_56;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_57", {
            get: function() {
                return null == this.__NgModuleFactoryLoader_57 && (this.__NgModuleFactoryLoader_57 = new __WEBPACK_IMPORTED_MODULE_40__angular_core_src_linker_system_js_ng_module_factory_loader__.a(this._Compiler_24, this.parent.get(__WEBPACK_IMPORTED_MODULE_40__angular_core_src_linker_system_js_ng_module_factory_loader__.b, null))), 
                this.__NgModuleFactoryLoader_57;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_Router_58", {
            get: function() {
                return null == this.__Router_58 && (this.__Router_58 = __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.c(this._ApplicationRef_23, this._UrlSerializer_55, this._RouterOutletMap_56, this._Location_54, this, this._NgModuleFactoryLoader_57, this._Compiler_24, this._ROUTES_48, this._ROUTER_CONFIGURATION_52, this.parent.get(__WEBPACK_IMPORTED_MODULE_72__angular_router_src_url_handling_strategy__.a, null), this.parent.get(__WEBPACK_IMPORTED_MODULE_73__angular_router_src_route_reuse_strategy__.a, null))), 
                this.__Router_58;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_59", {
            get: function() {
                return null == this.__ActivatedRoute_59 && (this.__ActivatedRoute_59 = __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.d(this._Router_58)), 
                this.__ActivatedRoute_59;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_63", {
            get: function() {
                return null == this.__NoPreloading_63 && (this.__NoPreloading_63 = new __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.b()), 
                this.__NoPreloading_63;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_64", {
            get: function() {
                return null == this.__ROUTER_INITIALIZER_64 && (this.__ROUTER_INITIALIZER_64 = __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.e(this._Router_58, this._ApplicationRef_23, this._RouterPreloader_62, this._ROUTER_CONFIGURATION_52)), 
                this.__ROUTER_INITIALIZER_64;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_65", {
            get: function() {
                return null == this.__APP_BOOTSTRAP_LISTENER_65 && (this.__APP_BOOTSTRAP_LISTENER_65 = [ this._ROUTER_INITIALIZER_64 ]), 
                this.__APP_BOOTSTRAP_LISTENER_65;
            },
            enumerable: !0,
            configurable: !0
        }), AppModuleInjector.prototype.createInternal = function() {
            return this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__.a(), 
            this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__.c(), 
            this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__.c(this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__.c, null)), 
            this._ROUTER_FORROOT_GUARD_3 = __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.f(this.parent.get(__WEBPACK_IMPORTED_MODULE_74__angular_router_src_router__.a, null)), 
            this._RouterModule_4 = new __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.g(this._ROUTER_FORROOT_GUARD_3), 
            this._ModalModule_5 = new __WEBPACK_IMPORTED_MODULE_6__src_lib_angular2_modal_module__.a(), 
            this._SharedModule_6 = new __WEBPACK_IMPORTED_MODULE_7__src_demo_app_shared_module__.a(), 
            this._InternalFormsSharedModule_7 = new __WEBPACK_IMPORTED_MODULE_8__angular_forms_src_directives__.a(), 
            this._FormsModule_8 = new __WEBPACK_IMPORTED_MODULE_9__angular_forms_src_form_providers__.a(), 
            this._BootstrapModalModule_9 = new __WEBPACK_IMPORTED_MODULE_10__src_lib_plugins_bootstrap_bootstrap_module__.a(), 
            this._BootstrapDemoModule_10 = new __WEBPACK_IMPORTED_MODULE_11__src_demo_app_bootstrap_demo_bootstrap_demo_module__.a(), 
            this._VexModalModule_11 = new __WEBPACK_IMPORTED_MODULE_12__src_lib_plugins_vex_vex_module__.a(), 
            this._VexDemoModule_12 = new __WEBPACK_IMPORTED_MODULE_13__src_demo_app_vex_demo_vex_demo_module__.a(), 
            this._JSNativeModalModule_13 = new __WEBPACK_IMPORTED_MODULE_14__src_lib_plugins_js_native_js_native_module__.a(), 
            this._JSNativeDemoModule_14 = new __WEBPACK_IMPORTED_MODULE_15__src_demo_app_js_native_demo_js_native_demo_module__.a(), 
            this._InAppModalModule_15 = new __WEBPACK_IMPORTED_MODULE_16__src_demo_app_home_in_app_plugin_index__.a(), 
            this._AppModule_16 = new __WEBPACK_IMPORTED_MODULE_1__src_demo_app_app_module__.a(), 
            this._ErrorHandler_19 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__.d(), 
            this._ApplicationInitStatus_20 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_application_init__.a(this.parent.get(__WEBPACK_IMPORTED_MODULE_18__angular_core_src_application_init__.b, null)), 
            this._Testability_21 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_testability_testability__.a(this.parent.get(__WEBPACK_IMPORTED_MODULE_62__angular_core_src_zone_ng_zone__.a)), 
            this._ApplicationRef__22 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_application_ref__.a(this.parent.get(__WEBPACK_IMPORTED_MODULE_62__angular_core_src_zone_ng_zone__.a), this.parent.get(__WEBPACK_IMPORTED_MODULE_75__angular_core_src_console__.a), this, this._ErrorHandler_19, this, this._ApplicationInitStatus_20, this.parent.get(__WEBPACK_IMPORTED_MODULE_19__angular_core_src_testability_testability__.b, null), this._Testability_21), 
            this._PreloadAllModules_60 = new __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.a(), 
            this._PreloadingStrategy_61 = this._PreloadAllModules_60, this._RouterPreloader_62 = new __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.c(this._Router_58, this._NgModuleFactoryLoader_57, this._Compiler_24, this, this._PreloadingStrategy_61), 
            this._AppModule_16;
        }, AppModuleInjector.prototype.getInternal = function(token, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__.a ? this._CommonModule_0 : token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__.c ? this._ApplicationModule_1 : token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__.c ? this._BrowserModule_2 : token === __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.h ? this._ROUTER_FORROOT_GUARD_3 : token === __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.g ? this._RouterModule_4 : token === __WEBPACK_IMPORTED_MODULE_6__src_lib_angular2_modal_module__.a ? this._ModalModule_5 : token === __WEBPACK_IMPORTED_MODULE_7__src_demo_app_shared_module__.a ? this._SharedModule_6 : token === __WEBPACK_IMPORTED_MODULE_8__angular_forms_src_directives__.a ? this._InternalFormsSharedModule_7 : token === __WEBPACK_IMPORTED_MODULE_9__angular_forms_src_form_providers__.a ? this._FormsModule_8 : token === __WEBPACK_IMPORTED_MODULE_10__src_lib_plugins_bootstrap_bootstrap_module__.a ? this._BootstrapModalModule_9 : token === __WEBPACK_IMPORTED_MODULE_11__src_demo_app_bootstrap_demo_bootstrap_demo_module__.a ? this._BootstrapDemoModule_10 : token === __WEBPACK_IMPORTED_MODULE_12__src_lib_plugins_vex_vex_module__.a ? this._VexModalModule_11 : token === __WEBPACK_IMPORTED_MODULE_13__src_demo_app_vex_demo_vex_demo_module__.a ? this._VexDemoModule_12 : token === __WEBPACK_IMPORTED_MODULE_14__src_lib_plugins_js_native_js_native_module__.a ? this._JSNativeModalModule_13 : token === __WEBPACK_IMPORTED_MODULE_15__src_demo_app_js_native_demo_js_native_demo_module__.a ? this._JSNativeDemoModule_14 : token === __WEBPACK_IMPORTED_MODULE_16__src_demo_app_home_in_app_plugin_index__.a ? this._InAppModalModule_15 : token === __WEBPACK_IMPORTED_MODULE_1__src_demo_app_app_module__.a ? this._AppModule_16 : token === __WEBPACK_IMPORTED_MODULE_76__angular_core_src_i18n_tokens__.a ? this._LOCALE_ID_17 : token === __WEBPACK_IMPORTED_MODULE_17__angular_common_src_localization__.b ? this._NgLocalization_18 : token === __WEBPACK_IMPORTED_MODULE_77__angular_core_src_error_handler__.a ? this._ErrorHandler_19 : token === __WEBPACK_IMPORTED_MODULE_18__angular_core_src_application_init__.a ? this._ApplicationInitStatus_20 : token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_testability_testability__.a ? this._Testability_21 : token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_application_ref__.a ? this._ApplicationRef__22 : token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_application_ref__.b ? this._ApplicationRef_23 : token === __WEBPACK_IMPORTED_MODULE_21__angular_core_src_linker_compiler__.a ? this._Compiler_24 : token === __WEBPACK_IMPORTED_MODULE_58__angular_core_src_application_tokens__.b ? this._APP_ID_25 : token === __WEBPACK_IMPORTED_MODULE_78__angular_platform_browser_src_dom_dom_tokens__.a ? this._DOCUMENT_26 : token === __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_src_dom_events_hammer_gestures__.c ? this._HAMMER_GESTURE_CONFIG_27 : token === __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_dom_events_event_manager__.b ? this._EVENT_MANAGER_PLUGINS_28 : token === __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_dom_events_event_manager__.a ? this._EventManager_29 : token === __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_src_dom_shared_styles_host__.a ? this._DomSharedStylesHost_30 : token === __WEBPACK_IMPORTED_MODULE_79__angular_platform_browser_src_dom_animation_driver__.a ? this._AnimationDriver_31 : token === __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_src_dom_dom_renderer__.b ? this._DomRootRenderer_32 : token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_application_ref__.c ? this._NgProbeToken_33 : token === __WEBPACK_IMPORTED_MODULE_80__angular_core_src_render_api__.a ? this._RootRenderer_34 : token === __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_src_security_dom_sanitization_service__.b ? this._DomSanitizer_35 : token === __WEBPACK_IMPORTED_MODULE_81__angular_core_src_security__.a ? this._Sanitizer_36 : token === __WEBPACK_IMPORTED_MODULE_27__angular_core_src_animation_animation_queue__.a ? this._AnimationQueue_37 : token === __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_view_utils__.ViewUtils ? this._ViewUtils_38 : token === __WEBPACK_IMPORTED_MODULE_82__angular_core_src_change_detection_differs_iterable_differs__.a ? this._IterableDiffers_39 : token === __WEBPACK_IMPORTED_MODULE_83__angular_core_src_change_detection_differs_keyvalue_differs__.a ? this._KeyValueDiffers_40 : token === __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_src_dom_shared_styles_host__.b ? this._SharedStylesHost_41 : token === __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_browser_title__.a ? this._Title_42 : token === __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_radio_control_value_accessor__.a ? this._RadioControlRegistry_43 : token === __WEBPACK_IMPORTED_MODULE_84__src_lib_models_tokens__.a ? this._OverlayRenderer_44 : token === __WEBPACK_IMPORTED_MODULE_32__src_lib_overlay_overlay_service__.a ? this._Overlay_45 : token === __WEBPACK_IMPORTED_MODULE_85__src_lib_providers_modal__.a ? this._Modal_46 : token === __WEBPACK_IMPORTED_MODULE_34__src_lib_plugins_bootstrap_modal__.a ? this._Modal_47 : token === __WEBPACK_IMPORTED_MODULE_86__angular_router_src_router_config_loader__.a ? this._ROUTES_48 : token === __WEBPACK_IMPORTED_MODULE_35__src_lib_plugins_vex_modal__.a ? this._Modal_49 : token === __WEBPACK_IMPORTED_MODULE_36__src_lib_plugins_js_native_modal__.a ? this._Modal_50 : token === __WEBPACK_IMPORTED_MODULE_33__src_demo_app_home_in_app_plugin_modal__.a ? this._Modal_51 : token === __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.i ? this._ROUTER_CONFIGURATION_52 : token === __WEBPACK_IMPORTED_MODULE_71__angular_common_src_location_location_strategy__.b ? this._LocationStrategy_53 : token === __WEBPACK_IMPORTED_MODULE_37__angular_common_src_location_location__.a ? this._Location_54 : token === __WEBPACK_IMPORTED_MODULE_38__angular_router_src_url_tree__.b ? this._UrlSerializer_55 : token === __WEBPACK_IMPORTED_MODULE_39__angular_router_src_router_outlet_map__.a ? this._RouterOutletMap_56 : token === __WEBPACK_IMPORTED_MODULE_87__angular_core_src_linker_ng_module_factory_loader__.a ? this._NgModuleFactoryLoader_57 : token === __WEBPACK_IMPORTED_MODULE_74__angular_router_src_router__.a ? this._Router_58 : token === __WEBPACK_IMPORTED_MODULE_88__angular_router_src_router_state__.a ? this._ActivatedRoute_59 : token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.a ? this._PreloadAllModules_60 : token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.d ? this._PreloadingStrategy_61 : token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.c ? this._RouterPreloader_62 : token === __WEBPACK_IMPORTED_MODULE_41__angular_router_src_router_preloader__.b ? this._NoPreloading_63 : token === __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__.j ? this._ROUTER_INITIALIZER_64 : token === __WEBPACK_IMPORTED_MODULE_58__angular_core_src_application_tokens__.c ? this._APP_BOOTSTRAP_LISTENER_65 : notFoundResult;
        }, AppModuleInjector.prototype.destroyInternal = function() {
            this._ApplicationRef__22.ngOnDestroy(), this._RouterPreloader_62.ngOnDestroy();
        }, AppModuleInjector;
    }(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__.a), AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__.b(AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__src_demo_app_app_module__.a);
}, /* 402 */
, /* 403 */
, /* 404 */
, /* 405 */
, /* 406 */
, /* 407 */
, /* 408 */
, /* 409 */
, /* 410 */
, /* 411 */
, /* 412 */
, /* 413 */
, /* 414 */
, /* 415 */
, /* 416 */
, /* 417 */
, /* 418 */
, /* 419 */
, /* 420 */
, /* 421 */
, /* 422 */
, /* 423 */
, /* 424 */
, /* 425 */
, /* 426 */
, /* 427 */
, /* 428 */
, /* 429 */
, /* 430 */
, /* 431 */
, /* 432 */
, /* 433 */
, /* 434 */
, /* 435 */
, /* 436 */
, /* 437 */
, /* 438 */
, /* 439 */
, /* 440 */
, /* 441 */
, /* 442 */
, /* 443 */
, /* 444 */
, /* 445 */
, /* 446 */
, /* 447 */
, /* 448 */
, /* 449 */
, /* 450 */
, /* 451 */
, /* 452 */
, /* 453 */
, /* 454 */
, /* 455 */
, /* 456 */
, /* 457 */
, /* 458 */
, /* 459 */
, /* 460 */
, /* 461 */
, /* 462 */
, /* 463 */
, /* 464 */
, /* 465 */
, /* 466 */
, /* 467 */
, /* 468 */
, /* 469 */
, /* 470 */
, /* 471 */
, /* 472 */
, /* 473 */
, /* 474 */
, /* 475 */
, /* 476 */
, /* 477 */
, /* 478 */
, /* 479 */
, /* 480 */
, /* 481 */
, /* 482 */
, /* 483 */
, /* 484 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ 'body,html{height:100%}body{font-weight:300;padding-top:80px}header{z-index:1000}section{position:relative;padding-top:90px;padding-bottom:90px}section.background-gray-lighter{background:#cdcdcd}section.background-gray-lightest{background:#f7f7f7;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd}section.background-secondary{background:#9fb1bc;border-top:1px solid #658090;border-bottom:1px solid #658090}.section-inverse,.section-inverse h1,.section-inverse h2,.section-inverse h3,.section-inverse h4,.section-inverse h5,.section-inverse h6{color:#fff}.section-inverse .heading:after{background:#fff}.italic{font-style:italic;font-family:Georgia,Times New Roman,Times,serif}.heading{text-align:left;margin-bottom:40px}.heading:after{content:" ";display:block;width:100px;height:2px;margin:20px 0;background:#2b7551}@media (min-width:1200px){h1.heading{font-size:68px}h2.heading{font-size:58px}}.img-responsive{margin:0 auto}.no-space .box{margin:0 -15px}.margin-top{margin-top:30px}.margin-top--big{margin-top:60px!important}.margin-bottom{margin-bottom:30px}.margin-bottom--big{margin-bottom:60px!important}.margin-bottom--zero{margin-bottom:0!important}.no-padding-top{padding-top:0}.no-padding-bottom{padding-bottom:0}.padding--small{padding-top:30px;padding-bottom:30px}.weight-300{font-weight:300!important}.weight-500{font-weight:500!important}.weight-700{font-weight:700!important}.text-gray{color:#555}.text-gray-light{color:#999}.text-gray-lighter{color:#cdcdcd}@media (max-width:991px){.text-center-mobile{text-align:center!important}}a,button{-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out}a i.fa,button i.fa{margin:0 5px}.clickable{cursor:pointer!important}.accent,.required{color:#2b7551}.text-uppercase{text-transform:uppercase;letter-spacing:.1em}.list-style-none{list-style:none}.pages{text-align:center}#map{height:500px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd}.btn-ghost{color:#2b7551;background-color:transparent;border-color:#2b7551}.btn-ghost.active,.btn-ghost:active,.btn-ghost:focus,.btn-ghost:hover,.open .dropdown-toggle.btn-ghost{color:#2b7551;background-color:transparent;border-color:#1b4832}.btn-ghost.active,.btn-ghost:active,.open .dropdown-toggle.btn-ghost{background-image:none}.btn-ghost.disabled,.btn-ghost.disabled.active,.btn-ghost.disabled:active,.btn-ghost.disabled:focus,.btn-ghost.disabled:hover,.btn-ghost[disabled],.btn-ghost[disabled].active,.btn-ghost[disabled]:active,.btn-ghost[disabled]:focus,.btn-ghost[disabled]:hover,fieldset[disabled] .btn-ghost,fieldset[disabled] .btn-ghost.active,fieldset[disabled] .btn-ghost:active,fieldset[disabled] .btn-ghost:focus,fieldset[disabled] .btn-ghost:hover{background-color:transparent;border-color:#2b7551}.btn-ghost .badge{color:transparent;background-color:#2b7551}.btn-ghost.active,.btn-ghost:active,.btn-ghost:focus,.btn-ghost:hover,.open .dropdown-toggle.btn-ghost{color:#fff;background-color:#2b7551;border-color:#2b7551}.btn-white{color:#fff;background-color:transparent;border-color:#fff}.btn-white.active,.btn-white:active,.btn-white:focus,.btn-white:hover,.open .dropdown-toggle.btn-white{color:#fff;background-color:transparent;border-color:#e0e0e0}.btn-white.active,.btn-white:active,.open .dropdown-toggle.btn-white{background-image:none}.btn-white.disabled,.btn-white.disabled.active,.btn-white.disabled:active,.btn-white.disabled:focus,.btn-white.disabled:hover,.btn-white[disabled],.btn-white[disabled].active,.btn-white[disabled]:active,.btn-white[disabled]:focus,.btn-white[disabled]:hover,fieldset[disabled] .btn-white,fieldset[disabled] .btn-white.active,fieldset[disabled] .btn-white:active,fieldset[disabled] .btn-white:focus,fieldset[disabled] .btn-white:hover{background-color:transparent;border-color:#fff}.btn-white .badge{color:transparent;background-color:#fff}.btn-white.active,.btn-white:active,.btn-white:focus,.btn-white:hover,.open .dropdown-toggle.btn-white{color:#fff;background-color:#fff;border-color:#fff}.icon{display:inline-block;width:60px;height:60px;line-height:60px;border-radius:30px;border:1px solid #2b7551;color:#2b7551;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;font-size:30px;margin:0 auto 30px;text-align:center}.icon.brand-secondary{border-color:#9fb1bc;color:#9fb1bc}.icon.brand-terciary{border-color:#6e8898;color:#6e8898}.icon.brand-four{border-color:#1c3738;color:#1c3738}.text-intro{text-align:center;color:#fff}.text-intro h1{font-weight:700}.text-intro a{color:#fff;text-decoration:underline}.text-intro h1,.text-intro h2,.text-intro h3,.text-intro h4{color:#fff}.text-intro span{color:#2b7551}@media (min-width:1200px){.text-intro{background:transparent linear-gradient(135deg,#8ec64e,#41aba0) repeat scroll 0 0}}@media (max-width:1199px){.text-intro{background:#6bb2b5}}.services{margin-top:80px;text-align:center}.services .services-heading{text-transform:uppercase;letter-spacing:.1em;font-size:18px;font-weight:400;color:#999;margin-bottom:40px}.services .heading{font-size:18px;font-weight:700;margin-bottom:20px;text-align:center}.services .heading:after{content:" ";display:block;width:100px;height:1px;margin:20px auto;background:#2b7551}.services p{font-size:14px;line-height:1.5;margin-bottom:60px;color:#999}.customer{text-align:center}.customer img{display:inline-block;margin-top:10px;margin-bottom:10px;-webkit-filter:grayscale(100%);filter:grayscale(100%)}.customer img:hover{-webkit-filter:grayscale(0);filter:grayscale(0)}@media (max-width:991px){.sign-up-form .btn,.sign-up-form .form-control{margin-bottom:20px}}@media (min-width:768px){.sign-up-form .form-control{width:350px}}.ekko-lightbox-container{position:relative}.ekko-lightbox-nav-overlay{position:absolute;top:0;left:0;z-index:100;width:100%;height:100%}.ekko-lightbox-nav-overlay a{z-index:100;display:block;width:49%;height:100%;font-size:30px;color:#fff;opacity:0;text-decoration:none!important;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s}.ekko-lightbox-nav-overlay a:empty{width:49%;color:transparent}.ekko-lightbox a:hover,a:active,a:focus{text-decoration:none;opacity:1;color:#fff}.ekko-lightbox .glyphicon-chevron-left{left:0;float:left;padding-left:15px;text-align:left}.ekko-lightbox .glyphicon-chevron-right{right:0;float:right;padding-right:15px;text-align:right}.ekko-lightbox .modal-footer{text-align:left}.owl-carousel .owl-controls.clickable .owl-page:hover span,.owl-carousel .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span,.owl-theme .owl-controls .owl-page.active span{background:#2b7551}.owl-carousel .owl-controls .owl-buttons,.owl-theme .owl-controls .owl-buttons{position:absolute;top:5px;right:0}.owl-carousel .owl-controls .owl-buttons div,.owl-theme .owl-controls .owl-buttons div{width:26px;height:26px;line-height:25px;margin:0 5px 0 0;font-size:18px;color:#2b7551;padding:0;background:#fff;border-radius:13px;vertical-align:middle;text-align:center;opacity:1;filter:alpha(opacity=100)}.testimonials{padding:0;margin-bottom:40px}.testimonials .item{list-style-type:none;margin:0 5px;background:#fff;padding-bottom:60px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.testimonials .item .testimonial{position:relative;padding:20px}.testimonials .item .testimonial:after,.testimonials .item .testimonial:before{content:" ";display:table}.testimonials .item .testimonial:after{clear:both}.testimonials .item .testimonial .text{color:#999;margin-bottom:50px;font-size:14px;font-weight:400}.testimonials .item .testimonial .bottom{position:absolute;left:0;bottom:0;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:20px;height:50px}.testimonials .item .testimonial .bottom .testimonial-icon{display:inline-block;width:30px;height:30px;line-height:30px;border-radius:15px;color:#6e8898;font-size:40px;float:left;text-align:center}.testimonials .item .testimonial .name-picture{float:right;width:80%;text-align:right}.testimonials .item .testimonial .name-picture h5{font-size:16px;text-transform:uppercase;letter-spacing:.08em}.testimonials .item .testimonial .name-picture p{color:#999;margin:0;font-size:14px}.testimonials .item .testimonial .name-picture img{float:right;width:60px;border-radius:30px;margin-left:10px}.box-simple{text-align:center;margin-bottom:48px}.box-simple h3{font-size:24px;line-height:1.5;color:#555;font-weight:400}.box-simple h3 a{color:#555}.box-simple p{color:#999}.box-simple:hover .icon{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.box-simple:hover .icon i{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.box-simple.box-white{padding:20px;border:1px dotted #999}.box-simple.box-white .icon{color:#555;border-color:transparent;font-size:70px}.box-simple.box-dark{padding:20px;border:1px dotted #999;background:#555;color:#fff}.box-simple.box-dark .icon{color:#f7f7f7;border-color:transparent;font-size:70px}.box-simple.box-dark h3,.box-simple.box-dark h3 a,.box-simple.box-dark p{color:#fff}.box-image{position:relative;overflow:hidden;text-align:center;margin:15px 0}.box-image .bg{top:auto;height:100%;opacity:0;filter:alpha(opacity=0);background:#2b7551}.box-image .bg,.box-image .name{position:absolute;bottom:0;width:100%}.box-image .name{height:50%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;color:#fff;padding:0 20px}.box-image .name h3{color:#fff;text-transform:uppercase;font-size:24px;letter-spacing:.08em}.box-image .name h3 a{color:#fff;text-decoration:none}.box-image .text{position:absolute;width:100%;height:50%;top:0;-webkit-transform:translateY(-150%);-ms-transform:translateY(-150%);transform:translateY(-150%);-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;color:#fff;padding:0 20px}.box-image:hover .bg{opacity:.7;filter:alpha(opacity=70)}.box-image:hover .name{position:absolute;-webkit-transform:translateY(-75%);-ms-transform:translateY(-75%);transform:translateY(-75%)}.box-image:hover .text{position:absolute;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.box-image-text{position:relative;background:#fff;overflow:hidden;text-align:center;margin:15px 0}.box-image-text .top{position:relative;margin-bottom:10px}.box-image-text .top .bg{position:absolute;top:auto;bottom:0;width:100%;height:100%;opacity:0;filter:alpha(opacity=0);background:#fff}.box-image-text .top .logo{width:100%;position:absolute;text-align:center;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.box-image-text .top .name{position:absolute;width:100%;height:50%;bottom:0;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;color:#fff;padding:0 20px}.box-image-text .top .name h3{color:#fff;text-transform:uppercase;font-size:24px;letter-spacing:.08em}.box-image-text .top .name h3 a{color:#fff;text-decoration:none}.box-image-text .top .name h4{color:#fff;text-transform:uppercase;font-size:24px;letter-spacing:.08em}.box-image-text .top .name h4 a{color:#fff;text-decoration:none}.box-image-text .top .text{position:absolute;width:100%;height:50%;top:0;-webkit-transform:translateY(-150%);-ms-transform:translateY(-150%);transform:translateY(-150%);-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;color:#fff;padding:0 20px}.box-image-text .content{padding:15px 15px 0}.box-image-text .content h3,.box-image-text .content h4{text-transform:uppercase;line-height:1.5;color:#555;font-weight:800;letter-spacing:.08em}.box-image-text .content p{color:#999}.box-image-text.bg-visible .bg{opacity:.8;filter:alpha(opacity=80)}.box-image-text:hover .bg{opacity:.7;filter:alpha(opacity=70)}.box-image-text:hover .name{position:absolute;-webkit-transform:translateY(-75%);-ms-transform:translateY(-75%);transform:translateY(-75%)}.box-image-text:hover .text{position:absolute;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.header{width:100%}.navbar{font-weight:700;box-shadow:0 1px 5px #666}@media (min-width:768px){.navbar ul.nav>li>a{border-top:5px solid transparent;padding-top:23px}.navbar ul.nav>li>a:hover{border-top-color:#2b7551}.navbar ul.nav>li.active>a,.navbar ul.nav>li.open>a{text-decoration:none!important;border-top-color:#2b7551}}.navbar-toggle{text-transform:uppercase;letter-spacing:.1em;color:#6e8898}ul.dropdown-menu li a,ul.dropdown-menu li a:hover{-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out}#login-modal{overflow:hidden}#login-modal .modal-header h4{text-transform:uppercase}#login-modal form{margin-bottom:24px}#login-modal a{color:#2b7551}#login-modal p{font-weight:300;margin-bottom:24px;font-size:15px}.modal-backdrop{z-index:1035}.footer__copyright{background:#1c3738;color:#ccc;padding:20px 0;font-size:14px;line-height:28px}.footer__copyright p{margin:0}@media (max-width:991px){.footer__copyright p{float:none!important;text-align:center;margin-bottom:10px}}.copyright{margin-top:40px;color:#999}.copyright p.credit{text-align:right}.copyright p.credit a{color:#999}@media (max-width:991px){.copyright p.credit{text-align:center!important}}@media (min-width:1200px){.copyright{margin-top:60px}}@media (max-width:991px){.copyright{text-align:center!important}}#style-switch-button{position:fixed;top:120px;left:0;border-radius:0;z-index:2}#style-switch{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:300px;padding:20px;position:fixed;top:160px;left:0;background:#fff;border:1px solid #cdcdcd;z-index:2000}#style-switch h4{color:#555}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li>a{padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{background-color:#cdcdcd}.nav>li.disabled>a,.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#999}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#cdcdcd;border-color:#2b7551}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li>a{line-height:1.55;border-radius:2px 2px 0 0}.nav-tabs>li>a:hover{border-color:#cdcdcd #cdcdcd #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd}.nav-pills>li>a{border-radius:0}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#2b7551}.nav-tabs-justified>li>a{border-radius:2px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:2px 2px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.navbar{font-family:Open Sans,Helvetica,Arial,sans-serif;min-height:80px;margin-bottom:0;border-top:none;border-bottom:none}@media (min-width:768px){.navbar{border-radius:0}}.navbar-collapse{max-height:340px;overflow-x:visible;padding-right:15px;padding-left:15px}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px) and (max-width:991px){.navbar-collapse{font-size:14px}}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-collapse.right{float:right}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-left:0;padding-right:0}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-brand{float:left;padding:10px 15px;font-size:20px;line-height:24px;height:80px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}@media (min-width:768px){.navbar>.container-fluid .navbar-brand,.navbar>.container .navbar-brand{margin-left:-15px}}.navbar-toggle{padding:9px 10px!important;margin-right:15px;border-radius:2px}.navbar-nav{margin:14px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:24px}@media (max-width:767px){.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:24px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{margin:0 auto;display:table;table-layout:fixed;float:left}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:28px;padding-bottom:28px}.navbar-nav.navbar-right:last-child{margin-right:-15px}}.navbar-form{margin:21px -15px;padding:10px 15px;border:none}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}}.navbar-btn{margin-top:21px;margin-bottom:21px}.navbar-btn.btn-sm{margin-top:23.5px;margin-bottom:23.5px}.navbar-btn.btn-xs{margin-top:29px;margin-bottom:29px}.navbar-text{margin-top:28px;margin-bottom:28px}@media (min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}.navbar-text.navbar-right:last-child{margin-right:0}}.navbar-default{background-color:#fff;border-bottom-color:transparent}.navbar-default .navbar-brand{color:#6e8898}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#586e7b;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#6e8898}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#555;background-color:transparent}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:transparent}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:transparent}.navbar-default .navbar-toggle .icon-bar{background-color:#6e8898}.navbar-default .navbar-collapse{border-color:transparent}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{background-color:transparent;color:#555}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#6e8898}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#555;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#6e8898}.navbar-default .navbar-link:hover{color:#555}.dropdown-menu{z-index:1000;font-size:14px;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:2px}.dropdown-menu .divider{height:1px;margin:11px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{line-height:1.55;color:#555}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;background-color:#2b7551}.modal-content{border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:0}.modal-content,body{background-color:#fff}body{font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:#000}a{color:#2b7551;text-decoration:none}a:focus,a:hover{color:#163d2a;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.img-rounded{border-radius:0}hr{margin-top:24px;margin-bottom:24px;border:0;border-top:1px solid #cdcdcd}.progress{overflow:hidden;height:24px;margin-bottom:24px;background-color:#f5f5f5;border-radius:2px}.progress,.progress-bar{-webkit-box-shadow:inset 0 0 0 transparent;box-shadow:inset 0 0 0 transparent}.progress-bar{float:left;width:0;height:100%;font-size:14px;line-height:24px;text-align:center;-webkit-transition:width .6s ease;transition:width .6s ease}.breadcrumb{padding:8px 0;margin-bottom:24px;background-color:transparent;border-radius:0;text-align:center}.breadcrumb>li+li:before{content:"/\\A0";color:#ccc}.breadcrumb>.active{color:#999}.breadcrumb a{color:#2b7551}@media (max-width:991px){.breadcrumb{padding:8px 0;text-align:center}}.btn{font-weight:400;font-family:Open Sans,Helvetica,Arial,sans-serif;padding:6px 12px;font-size:16px;line-height:1.55}.btn-primary{color:#fff;background-color:#2b7551;border-color:#2b7551}.btn-primary.active,.btn-primary:active,.btn-primary:focus,.btn-primary:hover,.open .dropdown-toggle.btn-primary{color:#fff;background-color:#20573c;border-color:#1b4832}.btn-primary.active,.btn-primary:active,.open .dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled,.btn-primary.disabled.active,.btn-primary.disabled:active,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled],.btn-primary[disabled].active,.btn-primary[disabled]:active,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary,fieldset[disabled] .btn-primary.active,fieldset[disabled] .btn-primary:active,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#2b7551;border-color:#2b7551}.btn-primary .badge{color:#2b7551;background-color:#fff}.btn-transparent{color:#555;background-color:transparent;border-color:#555}.btn-transparent.active,.btn-transparent:active,.btn-transparent:focus,.btn-transparent:hover,.open .dropdown-toggle.btn-transparent{color:#555;background-color:transparent;border-color:#373737}.btn-transparent.active,.btn-transparent:active,.open .dropdown-toggle.btn-transparent{background-image:none}.btn-transparent.disabled,.btn-transparent.disabled.active,.btn-transparent.disabled:active,.btn-transparent.disabled:focus,.btn-transparent.disabled:hover,.btn-transparent[disabled],.btn-transparent[disabled].active,.btn-transparent[disabled]:active,.btn-transparent[disabled]:focus,.btn-transparent[disabled]:hover,fieldset[disabled] .btn-transparent,fieldset[disabled] .btn-transparent.active,fieldset[disabled] .btn-transparent:active,fieldset[disabled] .btn-transparent:focus,fieldset[disabled] .btn-transparent:hover{background-color:transparent;border-color:#555}.btn-transparent .badge{color:transparent;background-color:#555}.btn-transparent.active,.btn-transparent:active,.btn-transparent:focus,.btn-transparent:hover{background:#fff;color:#2b7551}.btn-lg{padding:10px 16px;font-size:20px;line-height:1.33;border-radius:2px}.btn-sm{padding:5px 10px}.btn-sm,.btn-xs{font-size:14px;line-height:1.5}.btn-xs{padding:1px 5px}.dropdown-menu>li>a{padding:8px 20px}.label{font-family:Open Sans,Helvetica,Arial,sans-serif;text-transform:uppercase}.label,label{font-weight:400}.form-control{display:block;width:100%;height:38px;padding:6px 12px;font-size:16px;line-height:1.55;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:2px;-webkit-box-shadow:none;box-shadow:none}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control:focus{border-color:#2b7551;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(43,117,81,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(43,117,81,.6)}.form-group{margin-bottom:20px}.pager{margin:24px 0;border-top:1px solid #cdcdcd;padding-top:24px;text-transform:uppercase;letter-spacing:.1em;font-size:14px;font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:700}.pager li{display:inline}.pager li>a,.pager li>span{background-color:#fff;border:1px solid #2b7551;border-radius:2px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;color:#fff;background-color:#2b7551}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#999;background-color:#fff;border-color:#ddd}.pagination{margin:24px 0;font-family:Open Sans,Helvetica,Arial,sans-serif;border-radius:0}.pagination>li>a,.pagination>li>span{padding:6px 12px;line-height:1.55;text-decoration:none;color:#2b7551;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:2px;border-top-left-radius:2px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:2px;border-top-right-radius:2px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{color:#2b7551;background-color:#6fca9e;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:2;color:#fff;background-color:#2b7551;border-color:#2b7551}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#999;background-color:#fff;border-color:#ddd}@media (max-width:767px){.text-center-xs{text-align:center!important}.text-center-xs img{display:block;margin-left:auto;margin-right:auto}}@media (min-width:768px) and (max-width:991px){.text-center-sm{text-align:center!important}.text-center-sm img{display:block;margin-left:auto;margin-right:auto}}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:700;line-height:1.2;color:#555}.h1,h1{font-size:48px}.h2,h2{font-size:38px}.h3,h3{font-size:32px}.h3,.h4,h3,h4{font-weight:700}.h4,h4{font-size:24px}.h5,h5{font-size:16px}.h5,.h6,h5,h6{font-weight:700}.h6,h6{font-size:14px}.h1,.h2,.h3,h1,h2,h3{margin-top:0;margin-bottom:24px}p{margin:0 0 24px}.lead{margin-bottom:24px;font-size:18px}@media (min-width:768px){.lead{font-size:24px}}.text-small{font-size:14px}.text-large{font-size:20px}.text-italic{font-style:italic}.text-primary{color:#2b7551}a.text-primary:hover{color:#1d5037}.bg-primary{color:#fff;background-color:#2b7551}a.bg-primary:hover{background-color:#1d5037}abbr[data-original-title],abbr[title]{border-bottom:1px dotted #999}blockquote{padding:12px 24px;margin:0 0 24px;font-size:16px;border-left:5px solid #2b7551}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.55;color:#999}blockquote .small:before,blockquote footer:before,blockquote small:before{content:\'\\2014   \\A0\'}.blockquote-reverse,blockquote.pull-right{border-right:5px solid #2b7551}address{margin-bottom:24px;line-height:1.55}.panel-default{border-color:#666}.panel-default>.panel-heading{color:#333;background-color:#fff;border-color:#666}.panel-default>.panel-heading+.panel-collapse .panel-body{border-top-color:#666}.panel-default>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#666}.panel-primary{border-color:#2b7551}.panel-primary>.panel-heading{color:#fff;background-color:#2b7551;border-color:#2b7551}.panel-primary>.panel-heading+.panel-collapse .panel-body{border-top-color:#2b7551}.panel-primary>.panel-footer+.panel-collapse .panel-body{border-bottom-color:#2b7551}.panel-primary .panel-title{font-weight:300}.panel-primary .panel-title a:hover,a.badge:focus,a.badge:hover{color:#fff;text-decoration:none}a.badge:focus,a.badge:hover{cursor:pointer}.nav-pills>.active>a>.badge,a.list-group-item.active>.badge{color:#2b7551;background-color:#fff}.nav-pills>li>a>.badge{margin-left:3px}.contact-form{margin-bottom:20px}p.social{text-align:center;margin-top:20px}p.social a{margin:0 10px 0 0;color:#fff;display:inline-block;width:40px;height:40px;border-radius:20px;font-size:15px;text-align:center;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;transition:all .2s ease-out;border:1px solid #ccc}p.social a,p.social a i{line-height:40px;vertical-align:bottom}p.social a.facebook{background-color:#4460ae;border-color:#4460ae}p.social a.gplus{background-color:#c21f25;border-color:#c21f25}p.social a.twitter{background-color:#3cf;border-color:#3cf}p.social a.instagram{background-color:#cd4378;border-color:#cd4378}p.social a.email{background-color:#4a7f45;border-color:#4a7f45}p.social a.link{background-color:#871aff;border-color:#871aff}p.social.social--outline a{background:transparent}p.social.social--outline a.facebook{color:#4460ae;border-color:#4460ae}p.social.social--outline a.gplus{color:#c21f25;border-color:#c21f25}p.social.social--outline a.twitter{color:#3cf;border-color:#3cf}p.social.social--outline a.instagram{color:#cd4378;border-color:#cd4378}p.social.social--outline a.email{color:#4a7f45;border-color:#4a7f45}p.social.social--outline a.link{color:#871aff;border-color:#871aff}' ];
}, /* 485 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_app__ = __webpack_require__(313), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__app_css_ngstyle__ = __webpack_require__(484), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_9__lib_overlay_overlay_directives_ngfactory__ = __webpack_require__(147), __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(310), __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_router_src_directives_router_outlet_ngfactory__ = __webpack_require__(311), __WEBPACK_IMPORTED_MODULE_12__src_lib_overlay_overlay_service__ = __webpack_require__(60), __WEBPACK_IMPORTED_MODULE_13__angular_router_src_router__ = __webpack_require__(58), __WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_state__ = __webpack_require__(48), __WEBPACK_IMPORTED_MODULE_15__angular_common_src_location_location_strategy__ = __webpack_require__(68), __WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_outlet_map__ = __webpack_require__(78), __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(56), __WEBPACK_IMPORTED_MODULE_18__src_lib_overlay_overlay_directives__ = __webpack_require__(96), __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__ = __webpack_require__(94), __WEBPACK_IMPORTED_MODULE_20__angular_router_src_directives_router_outlet__ = __webpack_require__(114);
    /* unused harmony export Wrapper_App */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return AppNgFactory;
    });
    /* unused harmony export View_App0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_App = function() {
        function Wrapper_App() {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_app__.a();
        }
        return Wrapper_App.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_App.prototype.ngOnDestroy = function() {}, Wrapper_App.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_App.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_App.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_App.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_App;
    }(), renderType_App_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_App_Host0 = function(_super) {
        function View_App_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_App_Host0, renderType_App_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_App_Host0, _super), View_App_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "app", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_App0(this.viewUtils, this, 0, this._el_0), this._App_0_3 = new Wrapper_App(), 
            this.compView_0.create(this._App_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._App_0_3.context);
        }, View_App_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_app__.a && 0 === requestNodeIndex ? this._App_0_3.context : notFoundResult;
        }, View_App_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._App_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_App_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_App_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_App_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), AppNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("app", View_App_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_app__.a), styles_App = [ __WEBPACK_IMPORTED_MODULE_7__app_css_ngstyle__.a ], renderType_App = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_App, {}), View_App0 = function(_super) {
        function View_App0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_App0, renderType_App, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._arr_52 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.pureProxy1(function(p0) {
                return [ p0 ];
            }), _this._arr_53 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.pureProxy1(function(p0) {
                return [ p0 ];
            }), _this._arr_54 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.pureProxy1(function(p0) {
                return [ p0 ];
            }), _this._arr_55 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.pureProxy1(function(p0) {
                return [ p0 ];
            }), _this;
        }
        return __extends(View_App0, _super), View_App0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "defaultOverlayTarget", ""), null), 
            this._vc_0 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(0, null, this, this._el_0), 
            this._DefaultOverlayTarget_0_5 = new __WEBPACK_IMPORTED_MODULE_9__lib_overlay_overlay_directives_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__src_lib_overlay_overlay_service__.a, this.parentIndex), this._vc_0.vcRef), 
            this._text_1 = this.renderer.createText(parentRenderNode, "\n", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "header", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "header"), null), 
            this._text_3 = this.renderer.createText(this._el_2, "\n    ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "navbar navbar-default navbar-fixed-top", "role", "navigation"), null), 
            this._text_5 = this.renderer.createText(this._el_4, "\n        ", null), this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_4, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container"), null), 
            this._text_7 = this.renderer.createText(this._el_6, "\n            ", null), this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_6, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "navbar-header"), null), 
            this._text_9 = this.renderer.createText(this._el_8, "\n\n            ", null), this._text_10 = this.renderer.createText(this._el_6, "\n            ", null), 
            this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_6, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "navbar-right", "id", "navigation"), null), 
            this._text_12 = this.renderer.createText(this._el_11, "\n                ", null), 
            this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_11, "ul", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "nav navbar-nav"), null), 
            this._text_14 = this.renderer.createText(this._el_13, "\n                    ", null), 
            this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_13, "li", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "a", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "scroll-to"), null), 
            this._RouterLinkWithHref_16_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_router_src_directives_router_link_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_state__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_common_src_location_location_strategy__.b, this.parentIndex)), 
            this._text_17 = this.renderer.createText(this._el_16, "Home", null), this._text_18 = this.renderer.createText(this._el_13, "\n                    ", null), 
            this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_13, "li", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_19, "a", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "scroll-to"), null), 
            this._RouterLinkWithHref_20_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_router_src_directives_router_link_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_state__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_common_src_location_location_strategy__.b, this.parentIndex)), 
            this._text_21 = this.renderer.createText(this._el_20, "Bootstrap Plugin", null), 
            this._text_22 = this.renderer.createText(this._el_13, "\n                    ", null), 
            this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_13, "li", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_23, "a", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "scroll-to"), null), 
            this._RouterLinkWithHref_24_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_router_src_directives_router_link_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_state__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_common_src_location_location_strategy__.b, this.parentIndex)), 
            this._text_25 = this.renderer.createText(this._el_24, "VEX Plugin", null), this._text_26 = this.renderer.createText(this._el_13, "\n                    ", null), 
            this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_13, "li", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._el_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_27, "a", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "scroll-to"), null), 
            this._RouterLinkWithHref_28_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_router_src_directives_router_link_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_state__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_common_src_location_location_strategy__.b, this.parentIndex)), 
            this._text_29 = this.renderer.createText(this._el_28, "JS Native Plugin", null), 
            this._text_30 = this.renderer.createText(this._el_13, "\n                ", null), 
            this._text_31 = this.renderer.createText(this._el_11, "\n                ", null), 
            this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_11, "a", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "btn navbar-btn btn-ghost", "href", "https://github.com/shlomiassaf/angular2-modal", "target", "_blank"), null), 
            this._text_33 = this.renderer.createText(this._el_32, "Fork on GitHub", null), this._text_34 = this.renderer.createText(this._el_11, "\n            ", null), 
            this._text_35 = this.renderer.createText(this._el_6, "\n        ", null), this._text_36 = this.renderer.createText(this._el_4, "\n    ", null), 
            this._text_37 = this.renderer.createText(this._el_2, "\n", null), this._text_38 = this.renderer.createText(parentRenderNode, "\n", null), 
            this._el_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "main", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_40 = this.renderer.createText(this._el_39, "\n    ", null), this._el_41 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_39, "router-outlet", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._vc_41 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(41, 39, this, this._el_41), 
            this._RouterOutlet_41_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_router_src_directives_router_outlet_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_outlet_map__.a, this.parentIndex), this._vc_41.vcRef, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory_resolver__.a, this.parentIndex), null), 
            this._text_42 = this.renderer.createText(this._el_39, "\n", null), this._text_43 = this.renderer.createText(parentRenderNode, "\n\n", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_16, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_16)), disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_20, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_20)), disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_24, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_24)), disposable_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_28, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_28));
            return this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._el_4, this._text_5, this._el_6, this._text_7, this._el_8, this._text_9, this._text_10, this._el_11, this._text_12, this._el_13, this._text_14, this._el_15, this._el_16, this._text_17, this._text_18, this._el_19, this._el_20, this._text_21, this._text_22, this._el_23, this._el_24, this._text_25, this._text_26, this._el_27, this._el_28, this._text_29, this._text_30, this._text_31, this._el_32, this._text_33, this._text_34, this._text_35, this._text_36, this._text_37, this._text_38, this._el_39, this._text_40, this._el_41, this._text_42, this._text_43 ], [ disposable_0, disposable_1, disposable_2, disposable_3 ]), 
            null;
        }, View_App0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_18__src_lib_overlay_overlay_directives__.c && 0 === requestNodeIndex ? this._DefaultOverlayTarget_0_5.context : token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__.b && 16 <= requestNodeIndex && requestNodeIndex <= 17 ? this._RouterLinkWithHref_16_3.context : token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__.b && 20 <= requestNodeIndex && requestNodeIndex <= 21 ? this._RouterLinkWithHref_20_3.context : token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__.b && 24 <= requestNodeIndex && requestNodeIndex <= 25 ? this._RouterLinkWithHref_24_3.context : token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__.b && 28 <= requestNodeIndex && requestNodeIndex <= 29 ? this._RouterLinkWithHref_28_3.context : token === __WEBPACK_IMPORTED_MODULE_20__angular_router_src_directives_router_outlet__.a && 41 === requestNodeIndex ? this._RouterOutlet_41_5.context : notFoundResult;
        }, View_App0.prototype.detectChangesInternal = function(throwOnChange) {
            this._DefaultOverlayTarget_0_5.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_16_0_0 = this._arr_52("/home");
            this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0, throwOnChange, !1), 
            this._RouterLinkWithHref_16_3.ngDoCheck(this, this._el_16, throwOnChange);
            var currVal_20_0_0 = this._arr_53("/bootstrap-demo");
            this._RouterLinkWithHref_20_3.check_routerLink(currVal_20_0_0, throwOnChange, !1), 
            this._RouterLinkWithHref_20_3.ngDoCheck(this, this._el_20, throwOnChange);
            var currVal_24_0_0 = this._arr_54("/vex-demo");
            this._RouterLinkWithHref_24_3.check_routerLink(currVal_24_0_0, throwOnChange, !1), 
            this._RouterLinkWithHref_24_3.ngDoCheck(this, this._el_24, throwOnChange);
            var currVal_28_0_0 = this._arr_55("/js-native-demo");
            this._RouterLinkWithHref_28_3.check_routerLink(currVal_28_0_0, throwOnChange, !1), 
            this._RouterLinkWithHref_28_3.ngDoCheck(this, this._el_28, throwOnChange), this._RouterOutlet_41_5.ngDoCheck(this, this._el_41, throwOnChange), 
            this._vc_0.detectChangesInNestedViews(throwOnChange), this._vc_41.detectChangesInNestedViews(throwOnChange), 
            this._RouterLinkWithHref_16_3.checkHost(this, this, this._el_16, throwOnChange), 
            this._RouterLinkWithHref_20_3.checkHost(this, this, this._el_20, throwOnChange), 
            this._RouterLinkWithHref_24_3.checkHost(this, this, this._el_24, throwOnChange), 
            this._RouterLinkWithHref_28_3.checkHost(this, this, this._el_28, throwOnChange);
        }, View_App0.prototype.destroyInternal = function() {
            this._vc_0.destroyNestedViews(), this._vc_41.destroyNestedViews(), this._DefaultOverlayTarget_0_5.ngOnDestroy(), 
            this._RouterLinkWithHref_16_3.ngOnDestroy(), this._RouterLinkWithHref_20_3.ngOnDestroy(), 
            this._RouterLinkWithHref_24_3.ngOnDestroy(), this._RouterLinkWithHref_28_3.ngOnDestroy(), 
            this._RouterOutlet_41_5.ngOnDestroy();
        }, View_App0.prototype.handleEvent_16 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            return result = this._RouterLinkWithHref_16_3.handleEvent(eventName, $event) && result;
        }, View_App0.prototype.handleEvent_20 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            return result = this._RouterLinkWithHref_20_3.handleEvent(eventName, $event) && result;
        }, View_App0.prototype.handleEvent_24 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            return result = this._RouterLinkWithHref_24_3.handleEvent(eventName, $event) && result;
        }, View_App0.prototype.handleEvent_28 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            return result = this._RouterLinkWithHref_28_3.handleEvent(eventName, $event) && result;
        }, View_App0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 486 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ ".simple-element[_ngcontent-%COMP%]{position:relative;display:block;background-color:#219161}" ];
}, /* 487 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page__ = __webpack_require__(148), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_plugins_bootstrap_modal__ = __webpack_require__(156), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_compiler__ = __webpack_require__(69), __WEBPACK_IMPORTED_MODULE_9__bootstrap_demo_page_css_shim_ngstyle__ = __webpack_require__(486), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__ = __webpack_require__(107), __WEBPACK_IMPORTED_MODULE_11__src_demo_app_demo_head_deam_head__ = __webpack_require__(115), __WEBPACK_IMPORTED_MODULE_12__demo_head_deam_head_ngfactory__ = __webpack_require__(213), __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(310), __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_15__angular_router_src_router__ = __webpack_require__(58), __WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_state__ = __webpack_require__(48), __WEBPACK_IMPORTED_MODULE_17__angular_common_src_location_location_strategy__ = __webpack_require__(68), __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__ = __webpack_require__(94), __WEBPACK_IMPORTED_MODULE_20__angular_common_src_pipes_json_pipe__ = __webpack_require__(178), __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
    /* unused harmony export Wrapper_BootstrapDemoPage */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapDemoPageNgFactory;
    });
    /* unused harmony export View_BootstrapDemoPage0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_BootstrapDemoPage = function() {
        function Wrapper_BootstrapDemoPage(p0, p1, p2) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page__.a(p0, p1, p2);
        }
        return Wrapper_BootstrapDemoPage.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BootstrapDemoPage.prototype.ngOnDestroy = function() {}, Wrapper_BootstrapDemoPage.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BootstrapDemoPage.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BootstrapDemoPage.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BootstrapDemoPage.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BootstrapDemoPage;
    }(), renderType_BootstrapDemoPage_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BootstrapDemoPage_Host0 = function(_super) {
        function View_BootstrapDemoPage_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BootstrapDemoPage_Host0, renderType_BootstrapDemoPage_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BootstrapDemoPage_Host0, _super), View_BootstrapDemoPage_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "bootstrap-demo-page", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_BootstrapDemoPage0(this.viewUtils, this, 0, this._el_0), 
            this._BootstrapDemoPage_0_3 = new Wrapper_BootstrapDemoPage(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_plugins_bootstrap_modal__.a, this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_compiler__.a, this.parentIndex), this.injector(0)), 
            this.compView_0.create(this._BootstrapDemoPage_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BootstrapDemoPage_0_3.context);
        }, View_BootstrapDemoPage_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page__.a && 0 === requestNodeIndex ? this._BootstrapDemoPage_0_3.context : notFoundResult;
        }, View_BootstrapDemoPage_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BootstrapDemoPage_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BootstrapDemoPage_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_BootstrapDemoPage_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BootstrapDemoPage_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BootstrapDemoPageNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("bootstrap-demo-page", View_BootstrapDemoPage_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_bootstrap_demo_page__.a), styles_BootstrapDemoPage = [ __WEBPACK_IMPORTED_MODULE_9__bootstrap_demo_page_css_shim_ngstyle__.a ], renderType_BootstrapDemoPage = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.Emulated, styles_BootstrapDemoPage, {}), View_BootstrapDemoPage0 = function(_super) {
        function View_BootstrapDemoPage0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_BootstrapDemoPage0, renderType_BootstrapDemoPage, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._arr_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.pureProxy1(function(p0) {
                return [ p0 ];
            }), _this;
        }
        return __extends(View_BootstrapDemoPage0, _super), View_BootstrapDemoPage0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            this._viewQuery_templateRef_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__.a(), 
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "demo-head", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "description", "An implementation of <a href='http://getbootstrap.com/javascript/#modals' target='_blank'>Bootstrap</a>", "title", "Bootstrap Modal plugin"), null), 
            this.compView_0 = new __WEBPACK_IMPORTED_MODULE_12__demo_head_deam_head_ngfactory__.a(this.viewUtils, this, 0, this._el_0), 
            this._DemoHead_0_3 = new __WEBPACK_IMPORTED_MODULE_12__demo_head_deam_head_ngfactory__.b(), 
            this._text_1 = this.renderer.createText(null, "\n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_3 = this.renderer.createText(null, "\n    ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container"), null), 
            this._text_5 = this.renderer.createText(this._el_4, "\n        ", null), this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_4, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "row"), null), 
            this._text_7 = this.renderer.createText(this._el_6, "\n            ", null), this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_6, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-xs-12"), null), 
            this._text_9 = this.renderer.createText(this._el_8, "\n                ", null), 
            this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_8, "a", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "lead"), null), 
            this._RouterLinkWithHref_10_3 = new __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_router_src_directives_router_link_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_router_src_router__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_state__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_common_src_location_location_strategy__.b, this.parentIndex)), 
            this._text_11 = this.renderer.createText(this._el_10, "Or use the modal code Generator!", null), 
            this._text_12 = this.renderer.createText(this._el_8, "\n            ", null), this._text_13 = this.renderer.createText(this._el_6, "\n        ", null), 
            this._text_14 = this.renderer.createText(this._el_4, "\n    ", null), this._text_15 = this.renderer.createText(null, "\n", null), 
            this.compView_0.create(this._DemoHead_0_3.context), this._text_16 = this.renderer.createText(parentRenderNode, "\n", null), 
            this._anchor_17 = this.renderer.createTemplateAnchor(parentRenderNode, null), this._vc_17 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__.a(17, null, this, this._anchor_17), 
            this._TemplateRef_17_4 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_template_ref__.a(this, 17, this._anchor_17);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_10, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_10));
            return this._viewQuery_templateRef_0.reset([ this._TemplateRef_17_4 ]), this.context.templateRef = this._viewQuery_templateRef_0.first, 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._el_4, this._text_5, this._el_6, this._text_7, this._el_8, this._text_9, this._el_10, this._text_11, this._text_12, this._text_13, this._text_14, this._text_15, this._text_16, this._anchor_17 ], [ disposable_0 ]), 
            null;
        }, View_BootstrapDemoPage0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__.b && 10 <= requestNodeIndex && requestNodeIndex <= 11 ? this._RouterLinkWithHref_10_3.context : token === __WEBPACK_IMPORTED_MODULE_11__src_demo_app_demo_head_deam_head__.a && 0 <= requestNodeIndex && requestNodeIndex <= 15 ? this._DemoHead_0_3.context : token === __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_template_ref__.b && 17 === requestNodeIndex ? this._TemplateRef_17_4 : notFoundResult;
        }, View_BootstrapDemoPage0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = "Bootstrap Modal plugin";
            this._DemoHead_0_3.check_title(currVal_0_0_0, throwOnChange, !1);
            var currVal_0_0_1 = "An implementation of <a href='http://getbootstrap.com/javascript/#modals' target='_blank'>Bootstrap</a>";
            this._DemoHead_0_3.check_description(currVal_0_0_1, throwOnChange, !1);
            var currVal_0_0_2 = this.context.modalCommands;
            this._DemoHead_0_3.check_modalCommands(currVal_0_0_2, throwOnChange, !1), this._DemoHead_0_3.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_10_0_0 = this._arr_24("customizeModals");
            this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0, throwOnChange, !1), 
            this._RouterLinkWithHref_10_3.ngDoCheck(this, this._el_10, throwOnChange), this._vc_17.detectChangesInNestedViews(throwOnChange), 
            this._RouterLinkWithHref_10_3.checkHost(this, this, this._el_10, throwOnChange), 
            this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BootstrapDemoPage0.prototype.destroyInternal = function() {
            this._vc_17.destroyNestedViews(), this.compView_0.destroy(), this._RouterLinkWithHref_10_3.ngOnDestroy(), 
            this._DemoHead_0_3.ngOnDestroy();
        }, View_BootstrapDemoPage0.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, ctx) {
            0 == nodeIndex && 1 == ngContentIndex && (cb(this._text_1, ctx), cb(this._el_2, ctx), 
            cb(this._text_3, ctx), cb(this._el_4, ctx), cb(this._text_15, ctx));
        }, View_BootstrapDemoPage0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 17 == nodeIndex ? new View_BootstrapDemoPage1(this.viewUtils, this, 17, this._anchor_17, this._vc_17) : null;
        }, View_BootstrapDemoPage0.prototype.handleEvent_10 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            return result = this._RouterLinkWithHref_10_3.handleEvent(eventName, $event) && result;
        }, View_BootstrapDemoPage0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_BootstrapDemoPage1 = function(_super) {
        function View_BootstrapDemoPage1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_BootstrapDemoPage1, renderType_BootstrapDemoPage, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_28 = __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BootstrapDemoPage1, _super), View_BootstrapDemoPage1.prototype.createInternal = function(rootSelector) {
            this._text_0 = this.renderer.createText(null, "\n    ", null), this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "style", "padding: 10px"), null), 
            this._text_2 = this.renderer.createText(this._el_1, "\n        ", null), this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_1, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "page-header"), null), 
            this._text_4 = this.renderer.createText(this._el_3, "\n            ", null), this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_3, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_6 = this.renderer.createText(this._el_5, "TemplateRef Example", null), 
            this._text_7 = this.renderer.createText(this._el_3, "\n        ", null), this._text_8 = this.renderer.createText(this._el_1, "\n        ", null), 
            this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_1, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "jumbotron"), null), 
            this._text_10 = this.renderer.createText(this._el_9, "\n            ", null), this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_12 = this.renderer.createText(this._el_11, "Hello, modal!", null), this._text_13 = this.renderer.createText(this._el_9, "\n            ", null), 
            this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "p", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_15 = this.renderer.createText(this._el_14, "I'm a declarative TemplateRef!", null), 
            this._text_16 = this.renderer.createText(this._el_9, "\n            ", null), this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "p", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_18 = this.renderer.createText(this._el_17, "TemplateRef can also access the DialogRef for context and modal control:", null), 
            this._text_19 = this.renderer.createText(this._el_9, "\n            ", null), this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "pre", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_21 = this.renderer.createText(this._el_20, "", null), this._text_22 = this.renderer.createText(this._el_9, "\n            ", null), 
            this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "button", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "btn btn-primary"), null), 
            this._text_24 = this.renderer.createText(this._el_23, "Close Me", null), this._text_25 = this.renderer.createText(this._el_9, "\n        ", null), 
            this._text_26 = this.renderer.createText(this._el_1, "\n    ", null), this._text_27 = this.renderer.createText(null, "\n", null), 
            this._pipe_json_0 = new __WEBPACK_IMPORTED_MODULE_20__angular_common_src_pipes_json_pipe__.a();
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_23, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_23));
            return this.init(this._text_27, this.renderer.directRenderer ? null : [ this._text_0, this._el_1, this._text_2, this._el_3, this._text_4, this._el_5, this._text_6, this._text_7, this._text_8, this._el_9, this._text_10, this._el_11, this._text_12, this._text_13, this._el_14, this._text_15, this._text_16, this._el_17, this._text_18, this._text_19, this._el_20, this._text_21, this._text_22, this._el_23, this._text_24, this._text_25, this._text_26, this._text_27 ], [ disposable_0 ]), 
            null;
        }, View_BootstrapDemoPage1.prototype.detectChangesInternal = function(throwOnChange) {
            var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__.c();
            valUnwrapper.reset();
            var currVal_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.dialogRef.context)), "");
            (valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_28, currVal_28)) && (this.renderer.setText(this._text_21, currVal_28), 
            this._expr_28 = currVal_28);
        }, View_BootstrapDemoPage1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._text_0, ctx), cb(this._el_1, ctx), cb(this._text_27, ctx);
        }, View_BootstrapDemoPage1.prototype.handleEvent_23 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.context.dialogRef.close(!0) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_BootstrapDemoPage1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 488 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_custom_modal_sample__ = __webpack_require__(214), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__ = __webpack_require__(209), __WEBPACK_IMPORTED_MODULE_9__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(90), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_13__angular_common_src_directives_ng_class__ = __webpack_require__(101);
    /* unused harmony export Wrapper_CustomModal */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CustomModalNgFactory;
    });
    /* unused harmony export View_CustomModal0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_CustomModal = function() {
        function Wrapper_CustomModal(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_custom_modal_sample__.a(p0);
        }
        return Wrapper_CustomModal.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_CustomModal.prototype.ngOnDestroy = function() {}, Wrapper_CustomModal.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_CustomModal.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_CustomModal.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_CustomModal.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_CustomModal;
    }(), renderType_CustomModal_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_CustomModal_Host0 = function(_super) {
        function View_CustomModal_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_CustomModal_Host0, renderType_CustomModal_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_CustomModal_Host0, _super), View_CustomModal_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-content", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_CustomModal0(this.viewUtils, this, 0, this._el_0), this._CustomModal_0_3 = new Wrapper_CustomModal(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._CustomModal_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._CustomModal_0_3.context);
        }, View_CustomModal_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_custom_modal_sample__.a && 0 === requestNodeIndex ? this._CustomModal_0_3.context : notFoundResult;
        }, View_CustomModal_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._CustomModal_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_CustomModal_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_CustomModal_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_CustomModal_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), CustomModalNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("modal-content", View_CustomModal_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo_page_custom_modal_sample__.a), styles_CustomModal = [ ".custom-modal-container[_ngcontent-%COMP%] {\n            padding: 15px;\n        }\n\n        .custom-modal-header[_ngcontent-%COMP%] {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }" ], renderType_CustomModal = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.Emulated, styles_CustomModal, {}), View_CustomModal0 = function(_super) {
        function View_CustomModal0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_CustomModal0, renderType_CustomModal, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._map_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.pureProxy1(function(p0) {
                return {
                    myclass: p0
                };
            }), _this._expr_39 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_40 = __WEBPACK_IMPORTED_MODULE_9__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_CustomModal0, _super), View_CustomModal0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            this._text_0 = this.renderer.createText(parentRenderNode, "\n        ", null), this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container-fluid custom-modal-container"), null), 
            this._text_2 = this.renderer.createText(this._el_1, "\n            ", null), this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_1, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "row custom-modal-header"), null), 
            this._text_4 = this.renderer.createText(this._el_3, "\n                ", null), 
            this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_3, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-sm-12"), null), 
            this._text_6 = this.renderer.createText(this._el_5, "\n                    ", null), 
            this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_5, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_8 = this.renderer.createText(this._el_7, "A Custom modal design", null), 
            this._text_9 = this.renderer.createText(this._el_5, "\n                ", null), 
            this._text_10 = this.renderer.createText(this._el_3, "\n            ", null), this._text_11 = this.renderer.createText(this._el_1, "\n            ", null), 
            this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_1, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "row"), null), 
            this._NgClass_12_3 = new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_keyvalue_differs__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_element_ref__.a(this._el_12), this.renderer), 
            this._text_13 = this.renderer.createText(this._el_12, "\n                ", null), 
            this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_12, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-xs-12"), null), 
            this._text_15 = this.renderer.createText(this._el_14, "\n                    ", null), 
            this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "jumbotron"), null), 
            this._text_17 = this.renderer.createText(this._el_16, "\n                        ", null), 
            this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_16, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_19 = this.renderer.createText(this._el_18, "Do the math to quit:", null), 
            this._text_20 = this.renderer.createText(this._el_16, "\n                        ", null), 
            this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_16, "p", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "lead"), null), 
            this._text_22 = this.renderer.createText(this._el_21, "I received an injection of the number ", null), 
            this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_21, "strong", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_24 = this.renderer.createText(this._el_23, "", null), this._text_25 = this.renderer.createText(this._el_21, " and the number ", null), 
            this._el_26 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_21, "strong", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_27 = this.renderer.createText(this._el_26, "", null), this._text_28 = this.renderer.createText(this._el_16, "\n                        ", null), 
            this._el_29 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_16, "span", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_30 = this.renderer.createText(this._el_29, "What is the sum?", null), 
            this._text_31 = this.renderer.createText(this._el_16, "\n                         ", null), 
            this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_16, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "autofocus", "", "class", "form-control", "type", "text"), null), 
            this._text_33 = this.renderer.createText(this._el_16, "\n                    ", null), 
            this._text_34 = this.renderer.createText(this._el_14, "\n                ", null), 
            this._text_35 = this.renderer.createText(this._el_12, "\n            ", null), this._text_36 = this.renderer.createText(this._el_1, "\n        ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_32, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "keyup", null), this.eventHandler(this.handleEvent_32));
            return this.init(null, this.renderer.directRenderer ? null : [ this._text_0, this._el_1, this._text_2, this._el_3, this._text_4, this._el_5, this._text_6, this._el_7, this._text_8, this._text_9, this._text_10, this._text_11, this._el_12, this._text_13, this._el_14, this._text_15, this._el_16, this._text_17, this._el_18, this._text_19, this._text_20, this._el_21, this._text_22, this._el_23, this._text_24, this._text_25, this._el_26, this._text_27, this._text_28, this._el_29, this._text_30, this._text_31, this._el_32, this._text_33, this._text_34, this._text_35, this._text_36 ], [ disposable_0 ]), 
            null;
        }, View_CustomModal0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_13__angular_common_src_directives_ng_class__.a && 12 <= requestNodeIndex && requestNodeIndex <= 35 ? this._NgClass_12_3.context : notFoundResult;
        }, View_CustomModal0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_12_0_0 = "row";
            this._NgClass_12_3.check_klass(currVal_12_0_0, throwOnChange, !1);
            var currVal_12_0_1 = this._map_38(this.context.shouldUseMyClass);
            this._NgClass_12_3.check_ngClass(currVal_12_0_1, throwOnChange, !1), this._NgClass_12_3.ngDoCheck(this, this._el_12, throwOnChange);
            var currVal_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.context.num1, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_39, currVal_39) && (this.renderer.setText(this._text_24, currVal_39), 
            this._expr_39 = currVal_39);
            var currVal_40 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.context.num2, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_40, currVal_40) && (this.renderer.setText(this._text_27, currVal_40), 
            this._expr_40 = currVal_40);
        }, View_CustomModal0.prototype.handleEvent_32 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("keyup" == eventName) {
                var pd_sub_0 = this.context.onKeyUp(this._el_32.value) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_CustomModal0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 489 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo__ = __webpack_require__(149), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_bootstrap_modal__ = __webpack_require__(156), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__ = __webpack_require__(60), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_router_src_directives_router_outlet_ngfactory__ = __webpack_require__(311), __WEBPACK_IMPORTED_MODULE_12__angular_router_src_router_outlet_map__ = __webpack_require__(78), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(56), __WEBPACK_IMPORTED_MODULE_14__angular_router_src_directives_router_outlet__ = __webpack_require__(114);
    /* unused harmony export Wrapper_BootstrapDemo */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapDemoNgFactory;
    });
    /* unused harmony export View_BootstrapDemo0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_BootstrapDemo = function() {
        function Wrapper_BootstrapDemo() {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo__.a();
        }
        return Wrapper_BootstrapDemo.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BootstrapDemo.prototype.ngOnDestroy = function() {}, Wrapper_BootstrapDemo.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BootstrapDemo.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BootstrapDemo.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BootstrapDemo.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BootstrapDemo;
    }(), renderType_BootstrapDemo_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BootstrapDemo_Host0 = function(_super) {
        function View_BootstrapDemo_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BootstrapDemo_Host0, renderType_BootstrapDemo_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BootstrapDemo_Host0, _super), Object.defineProperty(View_BootstrapDemo_Host0.prototype, "_Modal_0_4", {
            get: function() {
                return null == this.__Modal_0_4 && (this.__Modal_0_4 = new __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_bootstrap_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex))), 
                this.__Modal_0_4;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(View_BootstrapDemo_Host0.prototype, "_Modal_0_5", {
            get: function() {
                return null == this.__Modal_0_5 && (this.__Modal_0_5 = new __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_bootstrap_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex))), 
                this.__Modal_0_5;
            },
            enumerable: !0,
            configurable: !0
        }), View_BootstrapDemo_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "bootstrap-demo", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_BootstrapDemo0(this.viewUtils, this, 0, this._el_0), 
            this._BootstrapDemo_0_3 = new Wrapper_BootstrapDemo(), this.compView_0.create(this._BootstrapDemo_0_3.context), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BootstrapDemo_0_3.context);
        }, View_BootstrapDemo_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo__.a && 0 === requestNodeIndex ? this._BootstrapDemo_0_3.context : token === __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__.a && 0 === requestNodeIndex ? this._Modal_0_4 : token === __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_bootstrap_modal__.a && 0 === requestNodeIndex ? this._Modal_0_5 : notFoundResult;
        }, View_BootstrapDemo_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BootstrapDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BootstrapDemo_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_BootstrapDemo_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BootstrapDemo_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BootstrapDemoNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.b("bootstrap-demo", View_BootstrapDemo_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_bootstrap_demo__.a), styles_BootstrapDemo = [], renderType_BootstrapDemo = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_BootstrapDemo, {}), View_BootstrapDemo0 = function(_super) {
        function View_BootstrapDemo0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BootstrapDemo0, renderType_BootstrapDemo, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BootstrapDemo0, _super), View_BootstrapDemo0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "router-outlet", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._vc_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__.a(0, null, this, this._el_0), 
            this._RouterOutlet_0_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_router_src_directives_router_outlet_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_router_src_router_outlet_map__.a, this.parentIndex), this._vc_0.vcRef, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory_resolver__.a, this.parentIndex), null), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0 ], null), null;
        }, View_BootstrapDemo0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_14__angular_router_src_directives_router_outlet__.a && 0 === requestNodeIndex ? this._RouterOutlet_0_5.context : notFoundResult;
        }, View_BootstrapDemo0.prototype.detectChangesInternal = function(throwOnChange) {
            this._RouterOutlet_0_5.ngDoCheck(this, this._el_0, throwOnChange), this._vc_0.detectChangesInNestedViews(throwOnChange);
        }, View_BootstrapDemo0.prototype.destroyInternal = function() {
            this._vc_0.destroyNestedViews(), this._RouterOutlet_0_5.ngOnDestroy();
        }, View_BootstrapDemo0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 490 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard__ = __webpack_require__(150), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_providers_modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_forms_src_directives_ng_form_ngfactory__ = __webpack_require__(482), __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(211), __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__ = __webpack_require__(308), __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__ = __webpack_require__(212), __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__ = __webpack_require__(309), __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_forms_src_directives_checkbox_value_accessor_ngfactory__ = __webpack_require__(481), __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(307), __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_forms_src_directives_number_value_accessor_ngfactory__ = __webpack_require__(483), __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(146), __WEBPACK_IMPORTED_MODULE_18__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__ = __webpack_require__(75), __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_multiple_control_value_accessor__ = __webpack_require__(76), __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22), __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__ = __webpack_require__(74), __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__ = __webpack_require__(39), __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__ = __webpack_require__(72), __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_checkbox_value_accessor__ = __webpack_require__(92), __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(71), __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_number_value_accessor__ = __webpack_require__(110), __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__ = __webpack_require__(89), __WEBPACK_IMPORTED_MODULE_31__angular_forms_src_directives_ng_form__ = __webpack_require__(73), __WEBPACK_IMPORTED_MODULE_32__angular_forms_src_directives_control_container__ = __webpack_require__(38);
    /* unused harmony export Wrapper_ModalCustomisationWizard */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalCustomisationWizardNgFactory;
    });
    /* unused harmony export View_ModalCustomisationWizard0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_ModalCustomisationWizard = function() {
        function Wrapper_ModalCustomisationWizard(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard__.a(p0);
        }
        return Wrapper_ModalCustomisationWizard.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_ModalCustomisationWizard.prototype.ngOnDestroy = function() {}, Wrapper_ModalCustomisationWizard.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_ModalCustomisationWizard.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_ModalCustomisationWizard.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_ModalCustomisationWizard.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_ModalCustomisationWizard;
    }(), renderType_ModalCustomisationWizard_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_ModalCustomisationWizard_Host0 = function(_super) {
        function View_ModalCustomisationWizard_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_ModalCustomisationWizard_Host0, renderType_ModalCustomisationWizard_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_ModalCustomisationWizard_Host0, _super), View_ModalCustomisationWizard_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "customize-wizard", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_ModalCustomisationWizard0(this.viewUtils, this, 0, this._el_0), 
            this._ModalCustomisationWizard_0_3 = new Wrapper_ModalCustomisationWizard(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_providers_modal__.a, this.parentIndex)), 
            this.compView_0.create(this._ModalCustomisationWizard_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._ModalCustomisationWizard_0_3.context);
        }, View_ModalCustomisationWizard_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard__.a && 0 === requestNodeIndex ? this._ModalCustomisationWizard_0_3.context : notFoundResult;
        }, View_ModalCustomisationWizard_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._ModalCustomisationWizard_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_ModalCustomisationWizard_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_ModalCustomisationWizard_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_ModalCustomisationWizard_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), ModalCustomisationWizardNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("customize-wizard", View_ModalCustomisationWizard_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_bootstrap_demo_modal_customisation_wizard_modal_customisation_wizard__.a), styles_ModalCustomisationWizard = [], renderType_ModalCustomisationWizard = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_ModalCustomisationWizard, {}), View_ModalCustomisationWizard0 = function(_super) {
        function View_ModalCustomisationWizard0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_ModalCustomisationWizard0, renderType_ModalCustomisationWizard, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_347 = __WEBPACK_IMPORTED_MODULE_18__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_ModalCustomisationWizard0, _super), View_ModalCustomisationWizard0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container-fluid"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_3 = this.renderer.createText(this._el_2, "Customize A modal window", null), 
            this._text_4 = this.renderer.createText(this._el_0, "\n    ", null), this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "p", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "lead"), null), 
            this._text_6 = this.renderer.createText(this._el_5, "Configure a modal, see the code and view the output!", null), 
            this._text_7 = this.renderer.createText(this._el_0, "\n    ", null), this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "hr", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_9 = this.renderer.createText(this._el_0, "\n    ", null), this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_11 = this.renderer.createText(this._el_10, "\n        ", null), this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_10, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-xs-6"), null), 
            this._text_13 = this.renderer.createText(this._el_12, "\n            ", null), this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_12, "h3", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_15 = this.renderer.createText(this._el_14, "Configuration:", null), this._text_16 = this.renderer.createText(this._el_12, "\n        ", null), 
            this._text_17 = this.renderer.createText(this._el_10, "\n        ", null), this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_10, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-xs-6 col-md-4"), null), 
            this._text_19 = this.renderer.createText(this._el_18, "\n            ", null), this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_18, "button", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "btn btn-success pull-right"), null), 
            this._text_21 = this.renderer.createText(this._el_20, "Open Modal", null), this._text_22 = this.renderer.createText(this._el_18, "\n        ", null), 
            this._text_23 = this.renderer.createText(this._el_10, "\n        ", null), this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_10, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-xs-12"), null), 
            this._text_25 = this.renderer.createText(this._el_24, "\n            ", null), this._el_26 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_24, "form", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-horizontal"), null), 
            this._NgForm_26_3 = new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_forms_src_directives_ng_form_ngfactory__.a(null, null), 
            this._ControlContainer_26_4 = this._NgForm_26_3.context, this._NgControlStatusGroup_26_5 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.b(this._ControlContainer_26_4), 
            this._text_27 = this.renderer.createText(this._el_26, "\n                ", null), 
            this._el_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_26, "fieldset", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_29 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_30 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_31 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_32 = this.renderer.createText(this._el_31, "\n                        ", null), 
            this._el_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_31, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "modalType"), null), 
            this._text_34 = this.renderer.createText(this._el_33, "Type", null), this._text_35 = this.renderer.createText(this._el_31, "\n                        ", null), 
            this._el_36 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_31, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_37 = this.renderer.createText(this._el_36, "\n                            ", null), 
            this._el_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_36, "select", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "form-control", "id", "modalType", "name", "modalType"), null), 
            this._SelectControlValueAccessor_38_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_38)), 
            this._NG_VALUE_ACCESSOR_38_4 = [ this._SelectControlValueAccessor_38_3.context ], 
            this._NgModel_38_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_38_4), 
            this._NgControl_38_6 = this._NgModel_38_5.context, this._NgControlStatus_38_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_38_6), 
            this._text_39 = this.renderer.createText(this._el_38, "\n                                ", null), 
            this._el_40 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_38, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "alert"), null), 
            this._NgSelectOption_40_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_40), this.renderer, this._SelectControlValueAccessor_38_3.context), 
            this._NgSelectMultipleOption_40_4 = new __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_40), this.renderer, null), 
            this._text_41 = this.renderer.createText(this._el_40, "Alert", null), this._text_42 = this.renderer.createText(this._el_38, "\n                                ", null), 
            this._el_43 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_38, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "prompt"), null), 
            this._NgSelectOption_43_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_43), this.renderer, this._SelectControlValueAccessor_38_3.context), 
            this._NgSelectMultipleOption_43_4 = new __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_43), this.renderer, null), 
            this._text_44 = this.renderer.createText(this._el_43, "Prompt", null), this._text_45 = this.renderer.createText(this._el_38, "\n                                ", null), 
            this._el_46 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_38, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "confirm"), null), 
            this._NgSelectOption_46_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_46), this.renderer, this._SelectControlValueAccessor_38_3.context), 
            this._NgSelectMultipleOption_46_4 = new __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_46), this.renderer, null), 
            this._text_47 = this.renderer.createText(this._el_46, "Confirm", null), this._text_48 = this.renderer.createText(this._el_38, "\n                            ", null), 
            this._text_49 = this.renderer.createText(this._el_36, "\n                        ", null), 
            this._text_50 = this.renderer.createText(this._el_31, "\n                    ", null), 
            this._text_51 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._el_52 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_53 = this.renderer.createText(this._el_52, "\n                        ", null), 
            this._el_54 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_52, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "modalSize"), null), 
            this._text_55 = this.renderer.createText(this._el_54, "Modal Size", null), this._text_56 = this.renderer.createText(this._el_52, "\n                        ", null), 
            this._el_57 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_52, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_58 = this.renderer.createText(this._el_57, "\n                            ", null), 
            this._el_59 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_57, "select", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "form-control", "id", "modalSize", "name", "modalSize"), null), 
            this._SelectControlValueAccessor_59_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_59)), 
            this._NG_VALUE_ACCESSOR_59_4 = [ this._SelectControlValueAccessor_59_3.context ], 
            this._NgModel_59_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_59_4), 
            this._NgControl_59_6 = this._NgModel_59_5.context, this._NgControlStatus_59_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_59_6), 
            this._text_60 = this.renderer.createText(this._el_59, "\n                                ", null), 
            this._el_61 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_59, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "sm"), null), 
            this._NgSelectOption_61_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_61), this.renderer, this._SelectControlValueAccessor_59_3.context), 
            this._NgSelectMultipleOption_61_4 = new __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_61), this.renderer, null), 
            this._text_62 = this.renderer.createText(this._el_61, "Small", null), this._text_63 = this.renderer.createText(this._el_59, "\n                                ", null), 
            this._el_64 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_59, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "lg"), null), 
            this._NgSelectOption_64_3 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_64), this.renderer, this._SelectControlValueAccessor_59_3.context), 
            this._NgSelectMultipleOption_64_4 = new __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_64), this.renderer, null), 
            this._text_65 = this.renderer.createText(this._el_64, "Large", null), this._text_66 = this.renderer.createText(this._el_59, "\n                            ", null), 
            this._text_67 = this.renderer.createText(this._el_57, "\n                        ", null), 
            this._text_68 = this.renderer.createText(this._el_52, "\n                    ", null), 
            this._text_69 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._el_70 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_71 = this.renderer.createText(this._el_70, "\n                        ", null), 
            this._el_72 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_70, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "checkbox"), null), 
            this._text_73 = this.renderer.createText(this._el_72, "Blocking?", null), this._text_74 = this.renderer.createText(this._el_70, "\n                        ", null), 
            this._el_75 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_70, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_76 = this.renderer.createText(this._el_75, "\n                            ", null), 
            this._el_77 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_75, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "id", "checkbox", "name", "checkbox", "type", "checkbox"), null), 
            this._CheckboxControlValueAccessor_77_3 = new __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_forms_src_directives_checkbox_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_77)), 
            this._NG_VALUE_ACCESSOR_77_4 = [ this._CheckboxControlValueAccessor_77_3.context ], 
            this._NgModel_77_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_77_4), 
            this._NgControl_77_6 = this._NgModel_77_5.context, this._NgControlStatus_77_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_77_6), 
            this._text_78 = this.renderer.createText(this._el_75, "\n                        ", null), 
            this._text_79 = this.renderer.createText(this._el_70, "\n                    ", null), 
            this._text_80 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._el_81 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_82 = this.renderer.createText(this._el_81, "\n                        ", null), 
            this._el_83 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_81, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "showClose"), null), 
            this._text_84 = this.renderer.createText(this._el_83, "Show Close Button?", null), 
            this._text_85 = this.renderer.createText(this._el_81, "\n                        ", null), 
            this._el_86 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_81, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_87 = this.renderer.createText(this._el_86, "\n                            ", null), 
            this._el_88 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_86, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "id", "showClose", "name", "checkbox", "type", "checkbox"), null), 
            this._CheckboxControlValueAccessor_88_3 = new __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_forms_src_directives_checkbox_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_88)), 
            this._NG_VALUE_ACCESSOR_88_4 = [ this._CheckboxControlValueAccessor_88_3.context ], 
            this._NgModel_88_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_88_4), 
            this._NgControl_88_6 = this._NgModel_88_5.context, this._NgControlStatus_88_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_88_6), 
            this._text_89 = this.renderer.createText(this._el_86, "\n                        ", null), 
            this._text_90 = this.renderer.createText(this._el_81, "\n                    ", null), 
            this._text_91 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_92 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_93 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_94 = this.renderer.createText(this._el_93, "\n                        ", null), 
            this._el_95 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_93, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "closeKeys"), null), 
            this._text_96 = this.renderer.createText(this._el_95, "Close Key", null), this._text_97 = this.renderer.createText(this._el_93, "\n                        ", null), 
            this._el_98 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_93, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_99 = this.renderer.createText(this._el_98, "\n                            ", null), 
            this._el_100 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_98, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "closeKeys", "name", "closeKeys", "placeholder", "27", "type", "number"), null), 
            this._DefaultValueAccessor_100_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_100)), 
            this._NumberValueAccessor_100_4 = new __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_forms_src_directives_number_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_100)), 
            this._NG_VALUE_ACCESSOR_100_5 = [ this._DefaultValueAccessor_100_3.context, this._NumberValueAccessor_100_4.context ], 
            this._NgModel_100_6 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_100_5), 
            this._NgControl_100_7 = this._NgModel_100_6.context, this._NgControlStatus_100_8 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_100_7), 
            this._text_101 = this.renderer.createText(this._el_98, "\n                            ", null), 
            this._el_102 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_98, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_103 = this.renderer.createText(this._el_102, "Key code for closing the window (e.g: 27 for ESC)", null), 
            this._text_104 = this.renderer.createText(this._el_98, "\n                        ", null), 
            this._text_105 = this.renderer.createText(this._el_93, "\n                    ", null), 
            this._text_106 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._el_107 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_108 = this.renderer.createText(this._el_107, "\n                        ", null), 
            this._el_109 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_107, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "dialogClass"), null), 
            this._text_110 = this.renderer.createText(this._el_109, "Dialog Class", null), this._text_111 = this.renderer.createText(this._el_107, "\n                        ", null), 
            this._el_112 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_107, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_113 = this.renderer.createText(this._el_112, "\n                            ", null), 
            this._el_114 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_112, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "dialogClass", "name", "dialogClass", "placeholder", "modal-dialog", "type", "text"), null), 
            this._DefaultValueAccessor_114_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_114)), 
            this._NG_VALUE_ACCESSOR_114_4 = [ this._DefaultValueAccessor_114_3.context ], this._NgModel_114_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_114_4), 
            this._NgControl_114_6 = this._NgModel_114_5.context, this._NgControlStatus_114_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_114_6), 
            this._text_115 = this.renderer.createText(this._el_112, "\n                            ", null), 
            this._el_116 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_112, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_117 = this.renderer.createText(this._el_116, "A Class for the dialog container.  Default: modal-dialog", null), 
            this._text_118 = this.renderer.createText(this._el_112, "\n                        ", null), 
            this._text_119 = this.renderer.createText(this._el_107, "\n                    ", null), 
            this._text_120 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_121 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_122 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_123 = this.renderer.createText(this._el_122, "\n                        ", null), 
            this._el_124 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_122, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "headerClass"), null), 
            this._text_125 = this.renderer.createText(this._el_124, "Header Class", null), this._text_126 = this.renderer.createText(this._el_122, "\n                        ", null), 
            this._el_127 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_122, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_128 = this.renderer.createText(this._el_127, "\n                            ", null), 
            this._el_129 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_127, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "headerClass", "name", "headerClass", "placeholder", "modal-header", "type", "text"), null), 
            this._DefaultValueAccessor_129_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_129)), 
            this._NG_VALUE_ACCESSOR_129_4 = [ this._DefaultValueAccessor_129_3.context ], this._NgModel_129_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_129_4), 
            this._NgControl_129_6 = this._NgModel_129_5.context, this._NgControlStatus_129_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_129_6), 
            this._text_130 = this.renderer.createText(this._el_127, "\n                            ", null), 
            this._el_131 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_127, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_132 = this.renderer.createText(this._el_131, " A Class for the header (title) container.  Default: modal-header", null), 
            this._text_133 = this.renderer.createText(this._el_127, "\n                        ", null), 
            this._text_134 = this.renderer.createText(this._el_122, "\n                    ", null), 
            this._text_135 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_136 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_137 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_138 = this.renderer.createText(this._el_137, "\n                        ", null), 
            this._el_139 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_137, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "title"), null), 
            this._text_140 = this.renderer.createText(this._el_139, "Title", null), this._text_141 = this.renderer.createText(this._el_137, "\n                        ", null), 
            this._el_142 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_137, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_143 = this.renderer.createText(this._el_142, "\n                            ", null), 
            this._el_144 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_142, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "title", "name", "title", "placeholder", "This is a title", "type", "text"), null), 
            this._DefaultValueAccessor_144_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_144)), 
            this._NG_VALUE_ACCESSOR_144_4 = [ this._DefaultValueAccessor_144_3.context ], this._NgModel_144_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_144_4), 
            this._NgControl_144_6 = this._NgModel_144_5.context, this._NgControlStatus_144_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_144_6), 
            this._text_145 = this.renderer.createText(this._el_142, "\n                            ", null);
            this._el_146 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_142, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null);
            this._text_147 = this.renderer.createText(this._el_146, "Caption for the title, enclosed in a H3 container.", null), 
            this._text_148 = this.renderer.createText(this._el_142, "\n                        ", null), 
            this._text_149 = this.renderer.createText(this._el_137, "\n                    ", null), 
            this._text_150 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_151 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_152 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_153 = this.renderer.createText(this._el_152, "\n                        ", null), 
            this._el_154 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_152, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "titleHtml"), null), 
            this._text_155 = this.renderer.createText(this._el_154, "Title (HTML)", null), this._text_156 = this.renderer.createText(this._el_152, "\n                        ", null), 
            this._el_157 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_152, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_158 = this.renderer.createText(this._el_157, "\n                        ", null), 
            this._el_159 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_157, "textarea", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "form-control", "id", "titleHtml", "name", "titleHtml"), null), 
            this._DefaultValueAccessor_159_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_159)), 
            this._NG_VALUE_ACCESSOR_159_4 = [ this._DefaultValueAccessor_159_3.context ], this._NgModel_159_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_159_4), 
            this._NgControl_159_6 = this._NgModel_159_5.context, this._NgControlStatus_159_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_159_6), 
            this._text_160 = this.renderer.createText(this._el_157, "\n                        ", null), 
            this._text_161 = this.renderer.createText(this._el_152, "\n                        ", null), 
            this._el_162 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_152, "p", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_163 = this.renderer.createText(this._el_162, "An HTML (not compiled) body, if set Title is ignored.", null), 
            this._text_164 = this.renderer.createText(this._el_152, "\n                    ", null), 
            this._text_165 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_166 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_167 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_168 = this.renderer.createText(this._el_167, "\n                        ", null), 
            this._el_169 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_167, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "body"), null), 
            this._text_170 = this.renderer.createText(this._el_169, "Body", null), this._text_171 = this.renderer.createText(this._el_167, "\n                        ", null), 
            this._el_172 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_167, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-4"), null), 
            this._text_173 = this.renderer.createText(this._el_172, "\n                        ", null), 
            this._el_174 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_172, "textarea", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "form-control", "id", "body", "name", "body"), null), 
            this._DefaultValueAccessor_174_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_174)), 
            this._NG_VALUE_ACCESSOR_174_4 = [ this._DefaultValueAccessor_174_3.context ], this._NgModel_174_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_174_4), 
            this._NgControl_174_6 = this._NgModel_174_5.context, this._NgControlStatus_174_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_174_6), 
            this._text_175 = this.renderer.createText(this._el_172, "\n                        ", null), 
            this._text_176 = this.renderer.createText(this._el_167, "\n                    ", null), 
            this._text_177 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_178 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_179 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_180 = this.renderer.createText(this._el_179, "\n                        ", null), 
            this._el_181 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_179, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "bodyClass"), null), 
            this._text_182 = this.renderer.createText(this._el_181, "Body Class", null), this._text_183 = this.renderer.createText(this._el_179, "\n                        ", null), 
            this._el_184 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_179, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_185 = this.renderer.createText(this._el_184, "\n                            ", null), 
            this._el_186 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_184, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "bodyClass", "name", "bodyClass", "placeholder", "modal-body", "type", "text"), null), 
            this._DefaultValueAccessor_186_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_186)), 
            this._NG_VALUE_ACCESSOR_186_4 = [ this._DefaultValueAccessor_186_3.context ], this._NgModel_186_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_186_4), 
            this._NgControl_186_6 = this._NgModel_186_5.context, this._NgControlStatus_186_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_186_6), 
            this._text_187 = this.renderer.createText(this._el_184, "\n                            ", null), 
            this._el_188 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_184, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_189 = this.renderer.createText(this._el_188, "A Class for the body container. Default: modal-body", null), 
            this._text_190 = this.renderer.createText(this._el_184, "\n                        ", null), 
            this._text_191 = this.renderer.createText(this._el_179, "\n                    ", null), 
            this._text_192 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_193 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_194 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_195 = this.renderer.createText(this._el_194, "\n                        ", null), 
            this._el_196 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_194, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "footerClass"), null), 
            this._text_197 = this.renderer.createText(this._el_196, "Footer Class", null), this._text_198 = this.renderer.createText(this._el_194, "\n                        ", null), 
            this._el_199 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_194, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_200 = this.renderer.createText(this._el_199, "\n                            ", null), 
            this._el_201 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_199, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "footerClass", "name", "footerClass", "placeholder", "modal-footer", "type", "text"), null), 
            this._DefaultValueAccessor_201_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_201)), 
            this._NG_VALUE_ACCESSOR_201_4 = [ this._DefaultValueAccessor_201_3.context ], this._NgModel_201_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_201_4), 
            this._NgControl_201_6 = this._NgModel_201_5.context, this._NgControlStatus_201_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_201_6), 
            this._text_202 = this.renderer.createText(this._el_199, "\n                            ", null), 
            this._el_203 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_199, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_204 = this.renderer.createText(this._el_203, "A Class for the footer container. Default: modal-footer", null), 
            this._text_205 = this.renderer.createText(this._el_199, "\n                        ", null), 
            this._text_206 = this.renderer.createText(this._el_194, "\n                    ", null), 
            this._text_207 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_208 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_209 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_210 = this.renderer.createText(this._el_209, "\n                        ", null), 
            this._el_211 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_209, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "okBtn"), null), 
            this._text_212 = this.renderer.createText(this._el_211, "OK Button Text", null), 
            this._text_213 = this.renderer.createText(this._el_209, "\n                        ", null), 
            this._el_214 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_209, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_215 = this.renderer.createText(this._el_214, "\n                            ", null), 
            this._el_216 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_214, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "okBtn", "name", "okBtn", "placeholder", "OK", "type", "text"), null), 
            this._DefaultValueAccessor_216_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_216)), 
            this._NG_VALUE_ACCESSOR_216_4 = [ this._DefaultValueAccessor_216_3.context ], this._NgModel_216_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_216_4), 
            this._NgControl_216_6 = this._NgModel_216_5.context, this._NgControlStatus_216_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_216_6), 
            this._text_217 = this.renderer.createText(this._el_214, "\n                            ", null), 
            this._el_218 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_214, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_219 = this.renderer.createText(this._el_218, "Caption for the OK button. Default: OK", null), 
            this._text_220 = this.renderer.createText(this._el_214, "\n                        ", null), 
            this._text_221 = this.renderer.createText(this._el_209, "\n                    ", null), 
            this._text_222 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_223 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._el_224 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_28, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_225 = this.renderer.createText(this._el_224, "\n                        ", null), 
            this._el_226 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_224, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "okBtnClass"), null), 
            this._text_227 = this.renderer.createText(this._el_226, "OK Button Class", null), 
            this._text_228 = this.renderer.createText(this._el_224, "\n                        ", null), 
            this._el_229 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_224, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_230 = this.renderer.createText(this._el_229, "\n                            ", null), 
            this._el_231 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_229, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "okBtnClass", "name", "okBtnClass", "placeholder", "btn btn-primary", "type", "text"), null), 
            this._DefaultValueAccessor_231_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_231)), 
            this._NG_VALUE_ACCESSOR_231_4 = [ this._DefaultValueAccessor_231_3.context ], this._NgModel_231_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_231_4), 
            this._NgControl_231_6 = this._NgModel_231_5.context, this._NgControlStatus_231_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_231_6), 
            this._text_232 = this.renderer.createText(this._el_229, "\n                            ", null), 
            this._el_233 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_229, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_234 = this.renderer.createText(this._el_233, "A Class for the OK button. Default: btn btn-primary", null), 
            this._text_235 = this.renderer.createText(this._el_229, "\n                        ", null), 
            this._text_236 = this.renderer.createText(this._el_224, "\n                    ", null), 
            this._text_237 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_238 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._anchor_239 = this.renderer.createTemplateAnchor(this._el_28, null), this._vc_239 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__.a(239, 28, this, this._anchor_239), 
            this._TemplateRef_239_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__.a(this, 239, this._anchor_239), 
            this._NgIf_239_6 = new __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_239.vcRef, this._TemplateRef_239_5), 
            this._text_240 = this.renderer.createText(this._el_28, "\n\n                    ", null), 
            this._text_241 = this.renderer.createText(this._el_28, "\n                    ", null), 
            this._anchor_242 = this.renderer.createTemplateAnchor(this._el_28, null), this._vc_242 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__.a(242, 28, this, this._anchor_242), 
            this._TemplateRef_242_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__.a(this, 242, this._anchor_242), 
            this._NgIf_242_6 = new __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_242.vcRef, this._TemplateRef_242_5), 
            this._text_243 = this.renderer.createText(this._el_28, "\n\n                ", null), 
            this._text_244 = this.renderer.createText(this._el_26, "\n            ", null), 
            this._text_245 = this.renderer.createText(this._el_24, "\n        ", null), this._text_246 = this.renderer.createText(this._el_10, "\n    ", null), 
            this._text_247 = this.renderer.createText(this._el_0, "\n    ", null), this._el_248 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_249 = this.renderer.createText(this._el_248, "\n        ", null), this._el_250 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_248, "h3", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_251 = this.renderer.createText(this._el_250, "Code:", null), this._text_252 = this.renderer.createText(this._el_248, "\n        ", null), 
            this._el_253 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_248, "pre", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_254 = this.renderer.createText(this._el_253, "", null), this._text_255 = this.renderer.createText(this._el_248, "\n    ", null), 
            this._text_256 = this.renderer.createText(this._el_0, "\n", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_20, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_20)), disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_26, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngSubmit", null, "submit", null, "reset", null), this.eventHandler(this.handleEvent_26));
            this._NgForm_26_3.subscribe(this, this.eventHandler(this.handleEvent_26), !0);
            var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_38, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "change", null, "blur", null), this.eventHandler(this.handleEvent_38));
            this._NgModel_38_5.subscribe(this, this.eventHandler(this.handleEvent_38), !0);
            var disposable_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_59, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "change", null, "blur", null), this.eventHandler(this.handleEvent_59));
            this._NgModel_59_5.subscribe(this, this.eventHandler(this.handleEvent_59), !0);
            var disposable_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_77, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "change", null, "blur", null), this.eventHandler(this.handleEvent_77));
            this._NgModel_77_5.subscribe(this, this.eventHandler(this.handleEvent_77), !0);
            var disposable_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_88, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "change", null, "blur", null), this.eventHandler(this.handleEvent_88));
            this._NgModel_88_5.subscribe(this, this.eventHandler(this.handleEvent_88), !0);
            var disposable_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_100, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(8, "ngModelChange", null, "input", null, "blur", null, "change", null), this.eventHandler(this.handleEvent_100));
            this._NgModel_100_6.subscribe(this, this.eventHandler(this.handleEvent_100), !0);
            var disposable_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_114, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_114));
            this._NgModel_114_5.subscribe(this, this.eventHandler(this.handleEvent_114), !0);
            var disposable_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_129, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_129));
            this._NgModel_129_5.subscribe(this, this.eventHandler(this.handleEvent_129), !0);
            var disposable_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_144, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_144));
            this._NgModel_144_5.subscribe(this, this.eventHandler(this.handleEvent_144), !0);
            var disposable_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_159, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_159));
            this._NgModel_159_5.subscribe(this, this.eventHandler(this.handleEvent_159), !0);
            var disposable_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_174, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_174));
            this._NgModel_174_5.subscribe(this, this.eventHandler(this.handleEvent_174), !0);
            var disposable_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_186, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_186));
            this._NgModel_186_5.subscribe(this, this.eventHandler(this.handleEvent_186), !0);
            var disposable_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_201, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_201));
            this._NgModel_201_5.subscribe(this, this.eventHandler(this.handleEvent_201), !0);
            var disposable_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_216, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_216));
            this._NgModel_216_5.subscribe(this, this.eventHandler(this.handleEvent_216), !0);
            var disposable_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_231, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_231));
            return this._NgModel_231_5.subscribe(this, this.eventHandler(this.handleEvent_231), !0), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._text_4, this._el_5, this._text_6, this._text_7, this._el_8, this._text_9, this._el_10, this._text_11, this._el_12, this._text_13, this._el_14, this._text_15, this._text_16, this._text_17, this._el_18, this._text_19, this._el_20, this._text_21, this._text_22, this._text_23, this._el_24, this._text_25, this._el_26, this._text_27, this._el_28, this._text_29, this._text_30, this._el_31, this._text_32, this._el_33, this._text_34, this._text_35, this._el_36, this._text_37, this._el_38, this._text_39, this._el_40, this._text_41, this._text_42, this._el_43, this._text_44, this._text_45, this._el_46, this._text_47, this._text_48, this._text_49, this._text_50, this._text_51, this._el_52, this._text_53, this._el_54, this._text_55, this._text_56, this._el_57, this._text_58, this._el_59, this._text_60, this._el_61, this._text_62, this._text_63, this._el_64, this._text_65, this._text_66, this._text_67, this._text_68, this._text_69, this._el_70, this._text_71, this._el_72, this._text_73, this._text_74, this._el_75, this._text_76, this._el_77, this._text_78, this._text_79, this._text_80, this._el_81, this._text_82, this._el_83, this._text_84, this._text_85, this._el_86, this._text_87, this._el_88, this._text_89, this._text_90, this._text_91, this._text_92, this._el_93, this._text_94, this._el_95, this._text_96, this._text_97, this._el_98, this._text_99, this._el_100, this._text_101, this._el_102, this._text_103, this._text_104, this._text_105, this._text_106, this._el_107, this._text_108, this._el_109, this._text_110, this._text_111, this._el_112, this._text_113, this._el_114, this._text_115, this._el_116, this._text_117, this._text_118, this._text_119, this._text_120, this._text_121, this._el_122, this._text_123, this._el_124, this._text_125, this._text_126, this._el_127, this._text_128, this._el_129, this._text_130, this._el_131, this._text_132, this._text_133, this._text_134, this._text_135, this._text_136, this._el_137, this._text_138, this._el_139, this._text_140, this._text_141, this._el_142, this._text_143, this._el_144, this._text_145, this._el_146, this._text_147, this._text_148, this._text_149, this._text_150, this._text_151, this._el_152, this._text_153, this._el_154, this._text_155, this._text_156, this._el_157, this._text_158, this._el_159, this._text_160, this._text_161, this._el_162, this._text_163, this._text_164, this._text_165, this._text_166, this._el_167, this._text_168, this._el_169, this._text_170, this._text_171, this._el_172, this._text_173, this._el_174, this._text_175, this._text_176, this._text_177, this._text_178, this._el_179, this._text_180, this._el_181, this._text_182, this._text_183, this._el_184, this._text_185, this._el_186, this._text_187, this._el_188, this._text_189, this._text_190, this._text_191, this._text_192, this._text_193, this._el_194, this._text_195, this._el_196, this._text_197, this._text_198, this._el_199, this._text_200, this._el_201, this._text_202, this._el_203, this._text_204, this._text_205, this._text_206, this._text_207, this._text_208, this._el_209, this._text_210, this._el_211, this._text_212, this._text_213, this._el_214, this._text_215, this._el_216, this._text_217, this._el_218, this._text_219, this._text_220, this._text_221, this._text_222, this._text_223, this._el_224, this._text_225, this._el_226, this._text_227, this._text_228, this._el_229, this._text_230, this._el_231, this._text_232, this._el_233, this._text_234, this._text_235, this._text_236, this._text_237, this._text_238, this._anchor_239, this._text_240, this._text_241, this._anchor_242, this._text_243, this._text_244, this._text_245, this._text_246, this._text_247, this._el_248, this._text_249, this._el_250, this._text_251, this._text_252, this._el_253, this._text_254, this._text_255, this._text_256 ], [ disposable_0, disposable_1, disposable_2, disposable_3, disposable_4, disposable_5, disposable_6, disposable_7, disposable_8, disposable_9, disposable_10, disposable_11, disposable_12, disposable_13, disposable_14, disposable_15 ]), 
            null;
        }, View_ModalCustomisationWizard0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.b && 40 <= requestNodeIndex && requestNodeIndex <= 41 ? this._NgSelectOption_40_3.context : token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 40 <= requestNodeIndex && requestNodeIndex <= 41 ? this._NgSelectMultipleOption_40_4.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.b && 43 <= requestNodeIndex && requestNodeIndex <= 44 ? this._NgSelectOption_43_3.context : token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 43 <= requestNodeIndex && requestNodeIndex <= 44 ? this._NgSelectMultipleOption_43_4.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.b && 46 <= requestNodeIndex && requestNodeIndex <= 47 ? this._NgSelectOption_46_3.context : token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 46 <= requestNodeIndex && requestNodeIndex <= 47 ? this._NgSelectMultipleOption_46_4.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.a && 38 <= requestNodeIndex && requestNodeIndex <= 48 ? this._SelectControlValueAccessor_38_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 38 <= requestNodeIndex && requestNodeIndex <= 48 ? this._NG_VALUE_ACCESSOR_38_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 38 <= requestNodeIndex && requestNodeIndex <= 48 ? this._NgModel_38_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 38 <= requestNodeIndex && requestNodeIndex <= 48 ? this._NgControl_38_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 38 <= requestNodeIndex && requestNodeIndex <= 48 ? this._NgControlStatus_38_7.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.b && 61 <= requestNodeIndex && requestNodeIndex <= 62 ? this._NgSelectOption_61_3.context : token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 61 <= requestNodeIndex && requestNodeIndex <= 62 ? this._NgSelectMultipleOption_61_4.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.b && 64 <= requestNodeIndex && requestNodeIndex <= 65 ? this._NgSelectOption_64_3.context : token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 64 <= requestNodeIndex && requestNodeIndex <= 65 ? this._NgSelectMultipleOption_64_4.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_select_control_value_accessor__.a && 59 <= requestNodeIndex && requestNodeIndex <= 66 ? this._SelectControlValueAccessor_59_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 59 <= requestNodeIndex && requestNodeIndex <= 66 ? this._NG_VALUE_ACCESSOR_59_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 59 <= requestNodeIndex && requestNodeIndex <= 66 ? this._NgModel_59_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 59 <= requestNodeIndex && requestNodeIndex <= 66 ? this._NgControl_59_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 59 <= requestNodeIndex && requestNodeIndex <= 66 ? this._NgControlStatus_59_7.context : token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_checkbox_value_accessor__.a && 77 === requestNodeIndex ? this._CheckboxControlValueAccessor_77_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 77 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_77_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 77 === requestNodeIndex ? this._NgModel_77_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 77 === requestNodeIndex ? this._NgControl_77_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 77 === requestNodeIndex ? this._NgControlStatus_77_7.context : token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_checkbox_value_accessor__.a && 88 === requestNodeIndex ? this._CheckboxControlValueAccessor_88_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 88 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_88_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 88 === requestNodeIndex ? this._NgModel_88_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 88 === requestNodeIndex ? this._NgControl_88_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 88 === requestNodeIndex ? this._NgControlStatus_88_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 100 === requestNodeIndex ? this._DefaultValueAccessor_100_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_number_value_accessor__.a && 100 === requestNodeIndex ? this._NumberValueAccessor_100_4.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 100 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_100_5 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 100 === requestNodeIndex ? this._NgModel_100_6.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 100 === requestNodeIndex ? this._NgControl_100_7 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 100 === requestNodeIndex ? this._NgControlStatus_100_8.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 114 === requestNodeIndex ? this._DefaultValueAccessor_114_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 114 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_114_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 114 === requestNodeIndex ? this._NgModel_114_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 114 === requestNodeIndex ? this._NgControl_114_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 114 === requestNodeIndex ? this._NgControlStatus_114_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 129 === requestNodeIndex ? this._DefaultValueAccessor_129_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 129 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_129_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 129 === requestNodeIndex ? this._NgModel_129_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 129 === requestNodeIndex ? this._NgControl_129_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 129 === requestNodeIndex ? this._NgControlStatus_129_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 144 === requestNodeIndex ? this._DefaultValueAccessor_144_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 144 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_144_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 144 === requestNodeIndex ? this._NgModel_144_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 144 === requestNodeIndex ? this._NgControl_144_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 144 === requestNodeIndex ? this._NgControlStatus_144_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 159 === requestNodeIndex ? this._DefaultValueAccessor_159_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 159 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_159_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 159 === requestNodeIndex ? this._NgModel_159_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 159 === requestNodeIndex ? this._NgControl_159_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 159 === requestNodeIndex ? this._NgControlStatus_159_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 174 === requestNodeIndex ? this._DefaultValueAccessor_174_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 174 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_174_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 174 === requestNodeIndex ? this._NgModel_174_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 174 === requestNodeIndex ? this._NgControl_174_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 174 === requestNodeIndex ? this._NgControlStatus_174_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 186 === requestNodeIndex ? this._DefaultValueAccessor_186_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 186 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_186_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 186 === requestNodeIndex ? this._NgModel_186_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 186 === requestNodeIndex ? this._NgControl_186_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 186 === requestNodeIndex ? this._NgControlStatus_186_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 201 === requestNodeIndex ? this._DefaultValueAccessor_201_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 201 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_201_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 201 === requestNodeIndex ? this._NgModel_201_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 201 === requestNodeIndex ? this._NgControl_201_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 201 === requestNodeIndex ? this._NgControlStatus_201_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 216 === requestNodeIndex ? this._DefaultValueAccessor_216_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 216 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_216_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 216 === requestNodeIndex ? this._NgModel_216_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 216 === requestNodeIndex ? this._NgControl_216_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 216 === requestNodeIndex ? this._NgControlStatus_216_7.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 231 === requestNodeIndex ? this._DefaultValueAccessor_231_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 231 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_231_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 231 === requestNodeIndex ? this._NgModel_231_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 231 === requestNodeIndex ? this._NgControl_231_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 231 === requestNodeIndex ? this._NgControlStatus_231_7.context : token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__.b && 239 === requestNodeIndex ? this._TemplateRef_239_5 : token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__.a && 239 === requestNodeIndex ? this._NgIf_239_6.context : token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__.b && 242 === requestNodeIndex ? this._TemplateRef_242_5 : token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__.a && 242 === requestNodeIndex ? this._NgIf_242_6.context : token === __WEBPACK_IMPORTED_MODULE_31__angular_forms_src_directives_ng_form__.a && 26 <= requestNodeIndex && requestNodeIndex <= 244 ? this._NgForm_26_3.context : token === __WEBPACK_IMPORTED_MODULE_32__angular_forms_src_directives_control_container__.a && 26 <= requestNodeIndex && requestNodeIndex <= 244 ? this._ControlContainer_26_4 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.b && 26 <= requestNodeIndex && requestNodeIndex <= 244 ? this._NgControlStatusGroup_26_5.context : notFoundResult;
        }, View_ModalCustomisationWizard0.prototype.detectChangesInternal = function(throwOnChange) {
            this._NgForm_26_3.ngDoCheck(this, this._el_26, throwOnChange), this._NgControlStatusGroup_26_5.ngDoCheck(this, this._el_26, throwOnChange), 
            this._SelectControlValueAccessor_38_3.ngDoCheck(this, this._el_38, throwOnChange);
            var currVal_38_1_0 = "modalType";
            this._NgModel_38_5.check_name(currVal_38_1_0, throwOnChange, !1);
            var currVal_38_1_1 = this.context.type;
            this._NgModel_38_5.check_model(currVal_38_1_1, throwOnChange, !1), this._NgModel_38_5.ngDoCheck(this, this._el_38, throwOnChange), 
            this._NgControlStatus_38_7.ngDoCheck(this, this._el_38, throwOnChange);
            var currVal_40_0_0 = "alert";
            this._NgSelectOption_40_3.check_value(currVal_40_0_0, throwOnChange, !1), this._NgSelectOption_40_3.ngDoCheck(this, this._el_40, throwOnChange);
            var currVal_40_1_0 = "alert";
            this._NgSelectMultipleOption_40_4.check_value(currVal_40_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_40_4.ngDoCheck(this, this._el_40, throwOnChange);
            var currVal_43_0_0 = "prompt";
            this._NgSelectOption_43_3.check_value(currVal_43_0_0, throwOnChange, !1), this._NgSelectOption_43_3.ngDoCheck(this, this._el_43, throwOnChange);
            var currVal_43_1_0 = "prompt";
            this._NgSelectMultipleOption_43_4.check_value(currVal_43_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_43_4.ngDoCheck(this, this._el_43, throwOnChange);
            var currVal_46_0_0 = "confirm";
            this._NgSelectOption_46_3.check_value(currVal_46_0_0, throwOnChange, !1), this._NgSelectOption_46_3.ngDoCheck(this, this._el_46, throwOnChange);
            var currVal_46_1_0 = "confirm";
            this._NgSelectMultipleOption_46_4.check_value(currVal_46_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_46_4.ngDoCheck(this, this._el_46, throwOnChange), this._SelectControlValueAccessor_59_3.ngDoCheck(this, this._el_59, throwOnChange);
            var currVal_59_1_0 = "modalSize";
            this._NgModel_59_5.check_name(currVal_59_1_0, throwOnChange, !1);
            var currVal_59_1_1 = this.context.preset.size;
            this._NgModel_59_5.check_model(currVal_59_1_1, throwOnChange, !1), this._NgModel_59_5.ngDoCheck(this, this._el_59, throwOnChange), 
            this._NgControlStatus_59_7.ngDoCheck(this, this._el_59, throwOnChange);
            var currVal_61_0_0 = "sm";
            this._NgSelectOption_61_3.check_value(currVal_61_0_0, throwOnChange, !1), this._NgSelectOption_61_3.ngDoCheck(this, this._el_61, throwOnChange);
            var currVal_61_1_0 = "sm";
            this._NgSelectMultipleOption_61_4.check_value(currVal_61_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_61_4.ngDoCheck(this, this._el_61, throwOnChange);
            var currVal_64_0_0 = "lg";
            this._NgSelectOption_64_3.check_value(currVal_64_0_0, throwOnChange, !1), this._NgSelectOption_64_3.ngDoCheck(this, this._el_64, throwOnChange);
            var currVal_64_1_0 = "lg";
            this._NgSelectMultipleOption_64_4.check_value(currVal_64_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_64_4.ngDoCheck(this, this._el_64, throwOnChange), this._CheckboxControlValueAccessor_77_3.ngDoCheck(this, this._el_77, throwOnChange);
            var currVal_77_1_0 = "checkbox";
            this._NgModel_77_5.check_name(currVal_77_1_0, throwOnChange, !1);
            var currVal_77_1_1 = this.context.preset.isBlocking;
            this._NgModel_77_5.check_model(currVal_77_1_1, throwOnChange, !1), this._NgModel_77_5.ngDoCheck(this, this._el_77, throwOnChange), 
            this._NgControlStatus_77_7.ngDoCheck(this, this._el_77, throwOnChange), this._CheckboxControlValueAccessor_88_3.ngDoCheck(this, this._el_88, throwOnChange);
            var currVal_88_1_0 = "checkbox";
            this._NgModel_88_5.check_name(currVal_88_1_0, throwOnChange, !1);
            var currVal_88_1_1 = this.context.preset.showClose;
            this._NgModel_88_5.check_model(currVal_88_1_1, throwOnChange, !1), this._NgModel_88_5.ngDoCheck(this, this._el_88, throwOnChange), 
            this._NgControlStatus_88_7.ngDoCheck(this, this._el_88, throwOnChange), this._DefaultValueAccessor_100_3.ngDoCheck(this, this._el_100, throwOnChange), 
            this._NumberValueAccessor_100_4.ngDoCheck(this, this._el_100, throwOnChange);
            var currVal_100_2_0 = "closeKeys";
            this._NgModel_100_6.check_name(currVal_100_2_0, throwOnChange, !1);
            var currVal_100_2_1 = this.context.preset.keyboard;
            this._NgModel_100_6.check_model(currVal_100_2_1, throwOnChange, !1), this._NgModel_100_6.ngDoCheck(this, this._el_100, throwOnChange), 
            this._NgControlStatus_100_8.ngDoCheck(this, this._el_100, throwOnChange), this._DefaultValueAccessor_114_3.ngDoCheck(this, this._el_114, throwOnChange);
            var currVal_114_1_0 = "dialogClass";
            this._NgModel_114_5.check_name(currVal_114_1_0, throwOnChange, !1);
            var currVal_114_1_1 = this.context.preset.dialogClass;
            this._NgModel_114_5.check_model(currVal_114_1_1, throwOnChange, !1), this._NgModel_114_5.ngDoCheck(this, this._el_114, throwOnChange), 
            this._NgControlStatus_114_7.ngDoCheck(this, this._el_114, throwOnChange), this._DefaultValueAccessor_129_3.ngDoCheck(this, this._el_129, throwOnChange);
            var currVal_129_1_0 = "headerClass";
            this._NgModel_129_5.check_name(currVal_129_1_0, throwOnChange, !1);
            var currVal_129_1_1 = this.context.preset.headerClass;
            this._NgModel_129_5.check_model(currVal_129_1_1, throwOnChange, !1), this._NgModel_129_5.ngDoCheck(this, this._el_129, throwOnChange), 
            this._NgControlStatus_129_7.ngDoCheck(this, this._el_129, throwOnChange), this._DefaultValueAccessor_144_3.ngDoCheck(this, this._el_144, throwOnChange);
            var currVal_144_1_0 = "title";
            this._NgModel_144_5.check_name(currVal_144_1_0, throwOnChange, !1);
            var currVal_144_1_1 = this.context.preset.title;
            this._NgModel_144_5.check_model(currVal_144_1_1, throwOnChange, !1), this._NgModel_144_5.ngDoCheck(this, this._el_144, throwOnChange), 
            this._NgControlStatus_144_7.ngDoCheck(this, this._el_144, throwOnChange), this._DefaultValueAccessor_159_3.ngDoCheck(this, this._el_159, throwOnChange);
            var currVal_159_1_0 = "titleHtml";
            this._NgModel_159_5.check_name(currVal_159_1_0, throwOnChange, !1);
            var currVal_159_1_1 = this.context.preset.titleHtml;
            this._NgModel_159_5.check_model(currVal_159_1_1, throwOnChange, !1), this._NgModel_159_5.ngDoCheck(this, this._el_159, throwOnChange), 
            this._NgControlStatus_159_7.ngDoCheck(this, this._el_159, throwOnChange), this._DefaultValueAccessor_174_3.ngDoCheck(this, this._el_174, throwOnChange);
            var currVal_174_1_0 = "body";
            this._NgModel_174_5.check_name(currVal_174_1_0, throwOnChange, !1);
            var currVal_174_1_1 = this.context.preset.body;
            this._NgModel_174_5.check_model(currVal_174_1_1, throwOnChange, !1), this._NgModel_174_5.ngDoCheck(this, this._el_174, throwOnChange), 
            this._NgControlStatus_174_7.ngDoCheck(this, this._el_174, throwOnChange), this._DefaultValueAccessor_186_3.ngDoCheck(this, this._el_186, throwOnChange);
            var currVal_186_1_0 = "bodyClass";
            this._NgModel_186_5.check_name(currVal_186_1_0, throwOnChange, !1);
            var currVal_186_1_1 = this.context.preset.bodyClass;
            this._NgModel_186_5.check_model(currVal_186_1_1, throwOnChange, !1), this._NgModel_186_5.ngDoCheck(this, this._el_186, throwOnChange), 
            this._NgControlStatus_186_7.ngDoCheck(this, this._el_186, throwOnChange), this._DefaultValueAccessor_201_3.ngDoCheck(this, this._el_201, throwOnChange);
            var currVal_201_1_0 = "footerClass";
            this._NgModel_201_5.check_name(currVal_201_1_0, throwOnChange, !1);
            var currVal_201_1_1 = this.context.preset.footerClass;
            this._NgModel_201_5.check_model(currVal_201_1_1, throwOnChange, !1), this._NgModel_201_5.ngDoCheck(this, this._el_201, throwOnChange), 
            this._NgControlStatus_201_7.ngDoCheck(this, this._el_201, throwOnChange), this._DefaultValueAccessor_216_3.ngDoCheck(this, this._el_216, throwOnChange);
            var currVal_216_1_0 = "okBtn";
            this._NgModel_216_5.check_name(currVal_216_1_0, throwOnChange, !1);
            var currVal_216_1_1 = this.context.preset.okBtn;
            this._NgModel_216_5.check_model(currVal_216_1_1, throwOnChange, !1), this._NgModel_216_5.ngDoCheck(this, this._el_216, throwOnChange), 
            this._NgControlStatus_216_7.ngDoCheck(this, this._el_216, throwOnChange), this._DefaultValueAccessor_231_3.ngDoCheck(this, this._el_231, throwOnChange);
            var currVal_231_1_0 = "okBtnClass";
            this._NgModel_231_5.check_name(currVal_231_1_0, throwOnChange, !1);
            var currVal_231_1_1 = this.context.preset.okBtnClass;
            this._NgModel_231_5.check_model(currVal_231_1_1, throwOnChange, !1), this._NgModel_231_5.ngDoCheck(this, this._el_231, throwOnChange), 
            this._NgControlStatus_231_7.ngDoCheck(this, this._el_231, throwOnChange);
            var currVal_239_0_0 = "confirm" === this.context.type;
            this._NgIf_239_6.check_ngIf(currVal_239_0_0, throwOnChange, !1), this._NgIf_239_6.ngDoCheck(this, this._anchor_239, throwOnChange);
            var currVal_242_0_0 = "confirm" === this.context.type;
            this._NgIf_242_6.check_ngIf(currVal_242_0_0, throwOnChange, !1), this._NgIf_242_6.ngDoCheck(this, this._anchor_242, throwOnChange), 
            this._vc_239.detectChangesInNestedViews(throwOnChange), this._vc_242.detectChangesInNestedViews(throwOnChange), 
            this._NgControlStatusGroup_26_5.checkHost(this, this, this._el_26, throwOnChange), 
            this._NgControlStatus_38_7.checkHost(this, this, this._el_38, throwOnChange), this._NgControlStatus_59_7.checkHost(this, this, this._el_59, throwOnChange), 
            this._NgControlStatus_77_7.checkHost(this, this, this._el_77, throwOnChange), this._NgControlStatus_88_7.checkHost(this, this, this._el_88, throwOnChange), 
            this._NgControlStatus_100_8.checkHost(this, this, this._el_100, throwOnChange), 
            this._NgControlStatus_114_7.checkHost(this, this, this._el_114, throwOnChange), 
            this._NgControlStatus_129_7.checkHost(this, this, this._el_129, throwOnChange), 
            this._NgControlStatus_144_7.checkHost(this, this, this._el_144, throwOnChange), 
            this._NgControlStatus_159_7.checkHost(this, this, this._el_159, throwOnChange), 
            this._NgControlStatus_174_7.checkHost(this, this, this._el_174, throwOnChange), 
            this._NgControlStatus_186_7.checkHost(this, this, this._el_186, throwOnChange), 
            this._NgControlStatus_201_7.checkHost(this, this, this._el_201, throwOnChange), 
            this._NgControlStatus_216_7.checkHost(this, this, this._el_216, throwOnChange), 
            this._NgControlStatus_231_7.checkHost(this, this, this._el_231, throwOnChange);
            var currVal_347 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.code, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_347, currVal_347) && (this.renderer.setText(this._text_254, currVal_347), 
            this._expr_347 = currVal_347);
        }, View_ModalCustomisationWizard0.prototype.destroyInternal = function() {
            this._vc_239.destroyNestedViews(), this._vc_242.destroyNestedViews(), this._NgSelectOption_40_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_40_4.ngOnDestroy(), this._NgSelectOption_43_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_43_4.ngOnDestroy(), this._NgSelectOption_46_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_46_4.ngOnDestroy(), this._NgModel_38_5.ngOnDestroy(), 
            this._NgSelectOption_61_3.ngOnDestroy(), this._NgSelectMultipleOption_61_4.ngOnDestroy(), 
            this._NgSelectOption_64_3.ngOnDestroy(), this._NgSelectMultipleOption_64_4.ngOnDestroy(), 
            this._NgModel_59_5.ngOnDestroy(), this._NgModel_77_5.ngOnDestroy(), this._NgModel_88_5.ngOnDestroy(), 
            this._NgModel_100_6.ngOnDestroy(), this._NgModel_114_5.ngOnDestroy(), this._NgModel_129_5.ngOnDestroy(), 
            this._NgModel_144_5.ngOnDestroy(), this._NgModel_159_5.ngOnDestroy(), this._NgModel_174_5.ngOnDestroy(), 
            this._NgModel_186_5.ngOnDestroy(), this._NgModel_201_5.ngOnDestroy(), this._NgModel_216_5.ngOnDestroy(), 
            this._NgModel_231_5.ngOnDestroy(), this._NgForm_26_3.ngOnDestroy();
        }, View_ModalCustomisationWizard0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 239 == nodeIndex ? new View_ModalCustomisationWizard1(this.viewUtils, this, 239, this._anchor_239, this._vc_239) : 242 == nodeIndex ? new View_ModalCustomisationWizard2(this.viewUtils, this, 242, this._anchor_242, this._vc_242) : null;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_20 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.context.createModal() !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_26 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._NgForm_26_3.handleEvent(eventName, $event) && result, "ngSubmit" == eventName) {
                var pd_sub_0 = this.context.logForm(this._NgForm_26_3.context.value) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_38 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._SelectControlValueAccessor_38_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.type = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_59 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._SelectControlValueAccessor_59_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.size = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_77 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._CheckboxControlValueAccessor_77_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.isBlocking = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_88 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._CheckboxControlValueAccessor_88_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.showClose = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_100 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_100_3.handleEvent(eventName, $event) && result, 
            result = this._NumberValueAccessor_100_4.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.keyboard = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_114 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_114_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.dialogClass = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_129 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_129_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.headerClass = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_144 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_144_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.title = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_159 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_159_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.titleHtml = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_174 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_174_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.body = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_186 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_186_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.bodyClass = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_201 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_201_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.footerClass = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_216 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_216_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.okBtn = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0.prototype.handleEvent_231 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_231_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.preset.okBtnClass = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_ModalCustomisationWizard1 = function(_super) {
        function View_ModalCustomisationWizard1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_ModalCustomisationWizard1, renderType_ModalCustomisationWizard, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_ModalCustomisationWizard1, _super), View_ModalCustomisationWizard1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n                        ", null), 
            this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "cancelBtn"), null), 
            this._text_3 = this.renderer.createText(this._el_2, "Cancel Button Text", null), 
            this._text_4 = this.renderer.createText(this._el_0, "\n                        ", null), 
            this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_6 = this.renderer.createText(this._el_5, "\n                            ", null), 
            this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_5, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "cancelBtn", "name", "cancelBtn", "placeholder", "Cancel", "type", "text"), null), 
            this._DefaultValueAccessor_7_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_7)), 
            this._NG_VALUE_ACCESSOR_7_4 = [ this._DefaultValueAccessor_7_3.context ], this._NgModel_7_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this.parentView._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_7_4), 
            this._NgControl_7_6 = this._NgModel_7_5.context, this._NgControlStatus_7_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_7_6), 
            this._text_8 = this.renderer.createText(this._el_5, "\n                            ", null), 
            this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_5, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_10 = this.renderer.createText(this._el_9, "Caption for the Cancel button. Default: Cancel", null), 
            this._text_11 = this.renderer.createText(this._el_5, "\n                        ", null), 
            this._text_12 = this.renderer.createText(this._el_0, "\n                    ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_7));
            return this._NgModel_7_5.subscribe(this, this.eventHandler(this.handleEvent_7), !0), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._text_4, this._el_5, this._text_6, this._el_7, this._text_8, this._el_9, this._text_10, this._text_11, this._text_12 ], [ disposable_0 ]), 
            null;
        }, View_ModalCustomisationWizard1.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 7 === requestNodeIndex ? this._DefaultValueAccessor_7_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 7 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_7_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 7 === requestNodeIndex ? this._NgModel_7_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 7 === requestNodeIndex ? this._NgControl_7_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 7 === requestNodeIndex ? this._NgControlStatus_7_7.context : notFoundResult;
        }, View_ModalCustomisationWizard1.prototype.detectChangesInternal = function(throwOnChange) {
            this._DefaultValueAccessor_7_3.ngDoCheck(this, this._el_7, throwOnChange);
            var currVal_7_1_0 = "cancelBtn";
            this._NgModel_7_5.check_name(currVal_7_1_0, throwOnChange, !1);
            var currVal_7_1_1 = this.parentView.context.preset.cancelBtn;
            this._NgModel_7_5.check_model(currVal_7_1_1, throwOnChange, !1), this._NgModel_7_5.ngDoCheck(this, this._el_7, throwOnChange), 
            this._NgControlStatus_7_7.ngDoCheck(this, this._el_7, throwOnChange), this._NgControlStatus_7_7.checkHost(this, this, this._el_7, throwOnChange);
        }, View_ModalCustomisationWizard1.prototype.destroyInternal = function() {
            this._NgModel_7_5.ngOnDestroy();
        }, View_ModalCustomisationWizard1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_ModalCustomisationWizard1.prototype.handleEvent_7 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_7_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.parentView.context.preset.cancelBtn = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_ModalCustomisationWizard2 = function(_super) {
        function View_ModalCustomisationWizard2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_ModalCustomisationWizard2, renderType_ModalCustomisationWizard, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_ModalCustomisationWizard2, _super), View_ModalCustomisationWizard2.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n                        ", null), 
            this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "cancelBtnClass"), null), 
            this._text_3 = this.renderer.createText(this._el_2, "Cancel Button Class", null), 
            this._text_4 = this.renderer.createText(this._el_0, "\n                        ", null), 
            this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_6 = this.renderer.createText(this._el_5, "\n                            ", null), 
            this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_5, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray16(10, "class", "form-control input-md", "id", "cancelBtnClass", "name", "cancelBtnClass", "placeholder", "btn btn-default", "type", "text"), null), 
            this._DefaultValueAccessor_7_3 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__.a(this._el_7)), 
            this._NG_VALUE_ACCESSOR_7_4 = [ this._DefaultValueAccessor_7_3.context ], this._NgModel_7_5 = new __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(this.parentView._ControlContainer_26_4, null, null, this._NG_VALUE_ACCESSOR_7_4), 
            this._NgControl_7_6 = this._NgModel_7_5.context, this._NgControlStatus_7_7 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_7_6), 
            this._text_8 = this.renderer.createText(this._el_5, "\n                            ", null), 
            this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_5, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "help-block"), null), 
            this._text_10 = this.renderer.createText(this._el_9, "A Class for the Cancel button. Default: btn btn-default", null), 
            this._text_11 = this.renderer.createText(this._el_5, "\n                        ", null), 
            this._text_12 = this.renderer.createText(this._el_0, "\n                    ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_7));
            return this._NgModel_7_5.subscribe(this, this.eventHandler(this.handleEvent_7), !0), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._text_4, this._el_5, this._text_6, this._el_7, this._text_8, this._el_9, this._text_10, this._text_11, this._text_12 ], [ disposable_0 ]), 
            null;
        }, View_ModalCustomisationWizard2.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_default_value_accessor__.a && 7 === requestNodeIndex ? this._DefaultValueAccessor_7_3.context : token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__.a && 7 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_7_4 : token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__.a && 7 === requestNodeIndex ? this._NgModel_7_5.context : token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__.a && 7 === requestNodeIndex ? this._NgControl_7_6 : token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__.a && 7 === requestNodeIndex ? this._NgControlStatus_7_7.context : notFoundResult;
        }, View_ModalCustomisationWizard2.prototype.detectChangesInternal = function(throwOnChange) {
            this._DefaultValueAccessor_7_3.ngDoCheck(this, this._el_7, throwOnChange);
            var currVal_7_1_0 = "cancelBtnClass";
            this._NgModel_7_5.check_name(currVal_7_1_0, throwOnChange, !1);
            var currVal_7_1_1 = this.parentView.context.preset.cancelBtnClass;
            this._NgModel_7_5.check_model(currVal_7_1_1, throwOnChange, !1), this._NgModel_7_5.ngDoCheck(this, this._el_7, throwOnChange), 
            this._NgControlStatus_7_7.ngDoCheck(this, this._el_7, throwOnChange), this._NgControlStatus_7_7.checkHost(this, this, this._el_7, throwOnChange);
        }, View_ModalCustomisationWizard2.prototype.destroyInternal = function() {
            this._NgModel_7_5.ngOnDestroy();
        }, View_ModalCustomisationWizard2.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_ModalCustomisationWizard2.prototype.handleEvent_7 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_7_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.parentView.context.preset.cancelBtnClass = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_ModalCustomisationWizard2;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 491 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_home__ = __webpack_require__(151), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__src_demo_app_home_in_app_plugin_modal__ = __webpack_require__(152), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__ = __webpack_require__(60), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__ = __webpack_require__(107), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_12__lib_overlay_overlay_directives_ngfactory__ = __webpack_require__(147), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_14__src_lib_overlay_overlay_directives__ = __webpack_require__(96);
    /* unused harmony export Wrapper_Home */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return HomeNgFactory;
    });
    /* unused harmony export View_Home0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_Home = function() {
        function Wrapper_Home(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_home__.a(p0);
        }
        return Wrapper_Home.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_Home.prototype.ngOnDestroy = function() {}, Wrapper_Home.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_Home.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_Home.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_Home.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_Home;
    }(), renderType_Home_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_Home_Host0 = function(_super) {
        function View_Home_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_Home_Host0, renderType_Home_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_Home_Host0, _super), Object.defineProperty(View_Home_Host0.prototype, "_Modal_0_5", {
            get: function() {
                return null == this.__Modal_0_5 && (this.__Modal_0_5 = new __WEBPACK_IMPORTED_MODULE_4__src_demo_app_home_in_app_plugin_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex))), 
                this.__Modal_0_5;
            },
            enumerable: !0,
            configurable: !0
        }), View_Home_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "home", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_Home0(this.viewUtils, this, 0, this._el_0), this._Modal_0_3 = new __WEBPACK_IMPORTED_MODULE_4__src_demo_app_home_in_app_plugin_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex)), 
            this._Home_0_4 = new Wrapper_Home(this._Modal_0_3), this.compView_0.create(this._Home_0_4.context), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._Home_0_4.context);
        }, View_Home_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_4__src_demo_app_home_in_app_plugin_modal__.a && 0 === requestNodeIndex ? this._Modal_0_3 : token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_home__.a && 0 === requestNodeIndex ? this._Home_0_4.context : token === __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__.a && 0 === requestNodeIndex ? this._Modal_0_5 : notFoundResult;
        }, View_Home_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._Home_0_4.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange), 
            throwOnChange || 0 === this.numberOfChecks && this._Home_0_4.context.ngAfterViewInit();
        }, View_Home_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_Home_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_Home_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), HomeNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.b("home", View_Home_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_home__.a), styles_Home = [], renderType_Home = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_Home, {}), View_Home0 = function(_super) {
        function View_Home0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_Home0, renderType_Home, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_Home0, _super), View_Home0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._viewQuery_myTemplate_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__.a(), 
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "section", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "text-intro", "id", "intro"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container"), null), 
            this._text_3 = this.renderer.createText(this._el_2, "\n        ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "row"), null), 
            this._text_5 = this.renderer.createText(this._el_4, "\n            ", null), this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_4, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-12", "overlayTarget", "home-overlay-container"), null), 
            this._vc_6 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__.a(6, 4, this, this._el_6), 
            this._OverlayTarget_6_5 = new __WEBPACK_IMPORTED_MODULE_12__lib_overlay_overlay_directives_ngfactory__.b(this._vc_6.vcRef), 
            this._text_7 = this.renderer.createText(this._el_6, "\n            ", null), this._text_8 = this.renderer.createText(this._el_4, "\n        ", null), 
            this._text_9 = this.renderer.createText(this._el_2, "\n    ", null), this._text_10 = this.renderer.createText(this._el_0, "\n", null), 
            this._text_11 = this.renderer.createText(parentRenderNode, "\n\n", null), this._anchor_12 = this.renderer.createTemplateAnchor(parentRenderNode, null), 
            this._vc_12 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__.a(12, null, this, this._anchor_12), 
            this._TemplateRef_12_4 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__.a(this, 12, this._anchor_12), 
            this._text_13 = this.renderer.createText(parentRenderNode, "\n\n", null), this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "section", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "section no-padding-bottom"), null), 
            this._text_15 = this.renderer.createText(this._el_14, "\n    ", null), this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "container"), null), 
            this._text_17 = this.renderer.createText(this._el_16, "\n        ", null), this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_16, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "row"), null), 
            this._text_19 = this.renderer.createText(this._el_18, "\n            ", null), this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_18, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-offset-2 col-md-8"), null), 
            this._text_21 = this.renderer.createText(this._el_20, "\n                A generic, customizable and fluent modal/dialog window implementation for Angular 2.\n                UI platform/framework agnostic, plugins are used to describe a UI implementation (e.g: Bootstrap)\n                This means virtually any modal implementation out there can be ported into the library.\n                Comes with some built in UI platforms, external UI platform can be added in the future or externally used using NPM modules.\n            ", null), 
            this._text_22 = this.renderer.createText(this._el_18, "\n        ", null), this._text_23 = this.renderer.createText(this._el_16, "\n    ", null), 
            this._text_24 = this.renderer.createText(this._el_14, "\n", null), this._text_25 = this.renderer.createText(parentRenderNode, "\n", null), 
            this._viewQuery_myTemplate_0.reset([ this._TemplateRef_12_4 ]), this.context.myTemplate = this._viewQuery_myTemplate_0.first, 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._el_4, this._text_5, this._el_6, this._text_7, this._text_8, this._text_9, this._text_10, this._text_11, this._anchor_12, this._text_13, this._el_14, this._text_15, this._el_16, this._text_17, this._el_18, this._text_19, this._el_20, this._text_21, this._text_22, this._text_23, this._text_24, this._text_25 ], null), 
            null;
        }, View_Home0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_14__src_lib_overlay_overlay_directives__.a && 6 <= requestNodeIndex && requestNodeIndex <= 7 ? this._OverlayTarget_6_5.context : token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__.b && 12 === requestNodeIndex ? this._TemplateRef_12_4 : notFoundResult;
        }, View_Home0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_6_0_0 = "home-overlay-container";
            this._OverlayTarget_6_5.check_targetKey(currVal_6_0_0, throwOnChange, !1), this._OverlayTarget_6_5.ngDoCheck(this, this._el_6, throwOnChange), 
            this._vc_6.detectChangesInNestedViews(throwOnChange), this._vc_12.detectChangesInNestedViews(throwOnChange);
        }, View_Home0.prototype.destroyInternal = function() {
            this._vc_6.destroyNestedViews(), this._vc_12.destroyNestedViews(), this._OverlayTarget_6_5.ngOnDestroy();
        }, View_Home0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 12 == nodeIndex ? new View_Home1(this.viewUtils, this, 12, this._anchor_12, this._vc_12) : null;
        }, View_Home0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_Home1 = function(_super) {
        function View_Home1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_Home1, renderType_Home, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_Home1, _super), View_Home1.prototype.createInternal = function(rootSelector) {
            return this._text_0 = this.renderer.createText(null, "\n    ", null), this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "span", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_2 = this.renderer.createText(this._el_1, "UI agnostic, Plugin oriented, easy to use.", null), 
            this._text_3 = this.renderer.createText(null, "\n    ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "style", "padding: 15px 20%;"), null), 
            this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_4, "pre", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "text-left"), null), 
            this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_5, "p", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_7 = this.renderer.createText(this._el_6, "modal.alert()", null), this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_6, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_9 = this.renderer.createText(this._el_6, "  .message('Angular 2 Modal')", null), 
            this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_6, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_11 = this.renderer.createText(this._el_6, "  .open();", null), this._text_12 = this.renderer.createText(this._el_4, "\n    ", null), 
            this._text_13 = this.renderer.createText(null, "\n    ", null), this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "text-gray"), null), 
            this._text_15 = this.renderer.createText(this._el_14, "\n        ", null), this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "sub", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_17 = this.renderer.createText(this._el_16, "* This window ia a ad-hoc plugin built within the demo application.", null), 
            this._text_18 = this.renderer.createText(this._el_14, "\n        ", null), this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_20 = this.renderer.createText(this._el_14, "\n        ", null), this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "sub", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_22 = this.renderer.createText(this._el_21, "It is a simple OSX style modal plugin that display's a title and a ", null), 
            this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_21, "b", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_24 = this.renderer.createText(this._el_23, "TemplateRef", null), this._text_25 = this.renderer.createText(this._el_21, " provided to it.", null), 
            this._text_26 = this.renderer.createText(this._el_14, "\n        ", null), this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_28 = this.renderer.createText(this._el_14, "\n        ", null), this._el_29 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_14, "sub", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_30 = this.renderer.createText(this._el_29, "Check it out in the demo application. (home component)", null), 
            this._text_31 = this.renderer.createText(this._el_14, "\n    ", null), this._text_32 = this.renderer.createText(null, "\n", null), 
            this.init(this._text_32, this.renderer.directRenderer ? null : [ this._text_0, this._el_1, this._text_2, this._text_3, this._el_4, this._el_5, this._el_6, this._text_7, this._el_8, this._text_9, this._el_10, this._text_11, this._text_12, this._text_13, this._el_14, this._text_15, this._el_16, this._text_17, this._text_18, this._el_19, this._text_20, this._el_21, this._text_22, this._el_23, this._text_24, this._text_25, this._text_26, this._el_27, this._text_28, this._el_29, this._text_30, this._text_31, this._text_32 ], null), 
            null;
        }, View_Home1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._text_0, ctx), cb(this._el_1, ctx), cb(this._text_3, ctx), cb(this._el_4, ctx), 
            cb(this._text_13, ctx), cb(this._el_14, ctx), cb(this._text_32, ctx);
        }, View_Home1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 492 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function InAppModalBackdrop_zoomin_factory(view, element, currentState, nextState) {
        var previousPlayers = view.animationContext.getAnimationPlayers(element, "void" == nextState ? null : "zoomin"), collectedStyles = {}, player = null, totalTime = 0, defaultStateStyles = InAppModalBackdrop_zoomin_states["*"], startStateStyles = InAppModalBackdrop_zoomin_states[currentState];
        null == startStateStyles && (startStateStyles = defaultStateStyles);
        var endStateStyles = InAppModalBackdrop_zoomin_states[nextState];
        return null == endStateStyles && (endStateStyles = defaultStateStyles), null == player && "void" == currentState && "in" == nextState && (player = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_animation_animation_sequence_player__.a([ view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_styles__.a(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.f(collectedStyles, [ startStateStyles ])), [ new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_keyframe__.a(0, new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_styles__.a(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.f(collectedStyles, [ {
            transform: "scale(0.1, 0.1)"
        } ]))), new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_keyframe__.a(.5, new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_styles__.a(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.f(collectedStyles, [ {
            transform: "scale(1.2, 1.2)"
        } ]))), new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_keyframe__.a(1, new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_styles__.a(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.f(collectedStyles, [ {
            transform: "scale(1, 1)"
        } ]))) ], 500, 0, "ease-in", previousPlayers) ]), totalTime = 500), null == player && (player = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_player__.a()), 
        player.onDone(function() {
            player.destroy(), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.e(element, view.renderer, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.a(startStateStyles, endStateStyles));
        }), new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_animation_animation_sequence_player__.a(previousPlayers).destroy(), 
        __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.e(element, view.renderer, __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__.d(startStateStyles)), 
        view.animationContext.queueAnimation(element, "zoomin", player), new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_animation_animation_transition__.a(player, currentState, nextState, totalTime);
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_in_app_plugin_modal_backdrop__ = __webpack_require__(216), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_animation_animation_transition__ = __webpack_require__(276), __WEBPACK_IMPORTED_MODULE_9__angular_core_src_animation_animation_sequence_player__ = __webpack_require__(180), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_styles__ = __webpack_require__(275), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_style_util__ = __webpack_require__(274), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_keyframe__ = __webpack_require__(273), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_player__ = __webpack_require__(128), __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_common_src_directives_ng_template_outlet_ngfactory__ = __webpack_require__(480), __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_template_outlet__ = __webpack_require__(177);
    /* unused harmony export Wrapper_InAppModalBackdrop */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return InAppModalBackdropNgFactory;
    });
    /* unused harmony export View_InAppModalBackdrop0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_InAppModalBackdrop = function() {
        function Wrapper_InAppModalBackdrop(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_in_app_plugin_modal_backdrop__.a(p0);
        }
        return Wrapper_InAppModalBackdrop.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_InAppModalBackdrop.prototype.ngOnDestroy = function() {}, Wrapper_InAppModalBackdrop.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_InAppModalBackdrop.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_InAppModalBackdrop.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_InAppModalBackdrop.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_InAppModalBackdrop;
    }(), renderType_InAppModalBackdrop_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_InAppModalBackdrop_Host0 = function(_super) {
        function View_InAppModalBackdrop_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_InAppModalBackdrop_Host0, renderType_InAppModalBackdrop_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_InAppModalBackdrop_Host0, _super), View_InAppModalBackdrop_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-backdrop", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_InAppModalBackdrop0(this.viewUtils, this, 0, this._el_0), 
            this._InAppModalBackdrop_0_3 = new Wrapper_InAppModalBackdrop(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._InAppModalBackdrop_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._InAppModalBackdrop_0_3.context);
        }, View_InAppModalBackdrop_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_in_app_plugin_modal_backdrop__.a && 0 === requestNodeIndex ? this._InAppModalBackdrop_0_3.context : notFoundResult;
        }, View_InAppModalBackdrop_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._InAppModalBackdrop_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_InAppModalBackdrop_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_InAppModalBackdrop_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_InAppModalBackdrop_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), InAppModalBackdropNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("modal-backdrop", View_InAppModalBackdrop_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_home_in_app_plugin_modal_backdrop__.a), styles_InAppModalBackdrop = [ "[_nghost-%COMP%] {        \n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n\n}\n.in-app-modal-backdrop[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}", "article[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 600px;\n  background: inherit;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\narticle[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: inherit;\n  -webkit-filter: blur(10px) saturate(2);\n  filter: blur(10px) saturate(2);\n}\narticle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 8px;    \n  background: rgba(235, 235, 235, 0.85);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size:24px;\n  text-align: center;\n}\narticle[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.66);\n}" ], InAppModalBackdrop_zoomin_states = {
        "*": {},
        void: {},
        in: {}
    }, renderType_InAppModalBackdrop = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.Emulated, styles_InAppModalBackdrop, {
        zoomin: InAppModalBackdrop_zoomin_factory
    }), View_InAppModalBackdrop0 = function(_super) {
        function View_InAppModalBackdrop0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_InAppModalBackdrop0, renderType_InAppModalBackdrop, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_19 = __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_20 = __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_InAppModalBackdrop0, _super), View_InAppModalBackdrop0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "in-app-modal-backdrop"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "article", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_3 = this.renderer.createText(this._el_2, "\n        ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "title"), null), 
            this._text_5 = this.renderer.createText(this._el_4, "\n            ", null), this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_4, "span", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_7 = this.renderer.createText(this._el_6, "", null), this._text_8 = this.renderer.createText(this._el_4, "\n        ", null), 
            this._text_9 = this.renderer.createText(this._el_2, "\n        ", null), this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "content"), null), 
            this._text_11 = this.renderer.createText(this._el_10, "\n            ", null), this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null), 
            this._vc_12 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__.a(12, 10, this, this._anchor_12), 
            this._TemplateRef_12_5 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_template_ref__.a(this, 12, this._anchor_12), 
            this._NgTemplateOutlet_12_6 = new __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_common_src_directives_ng_template_outlet_ngfactory__.a(this._vc_12.vcRef), 
            this._text_13 = this.renderer.createText(this._el_10, "\n        ", null), this._text_14 = this.renderer.createText(this._el_2, "\n    ", null), 
            this._text_15 = this.renderer.createText(this._el_0, "    \n", null), this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._el_4, this._text_5, this._el_6, this._text_7, this._text_8, this._text_9, this._el_10, this._text_11, this._anchor_12, this._text_13, this._text_14, this._text_15 ], null), 
            null;
        }, View_InAppModalBackdrop0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_template_ref__.b && 12 === requestNodeIndex ? this._TemplateRef_12_5 : token === __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_template_outlet__.a && 12 === requestNodeIndex ? this._NgTemplateOutlet_12_6.context : notFoundResult;
        }, View_InAppModalBackdrop0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_19 = this.context.zoomState;
            if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
                var animationTransition_zoomin = this.componentType.animations.zoomin(this, this._el_2, this._expr_19 == __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__.b ? "void" : this._expr_19, currVal_19 == __WEBPACK_IMPORTED_MODULE_16__angular_core_src_change_detection_change_detection_util__.b ? "void" : currVal_19);
                this._expr_19 = currVal_19;
            }
            var currVal_12_0_0 = this.context.dialog.context.templateRef;
            this._NgTemplateOutlet_12_6.check_ngTemplateOutlet(currVal_12_0_0, throwOnChange, !1), 
            this._NgTemplateOutlet_12_6.ngDoCheck(this, this._anchor_12, throwOnChange), this._vc_12.detectChangesInNestedViews(throwOnChange);
            var currVal_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.dialog.context.title, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_20, currVal_20) && (this.renderer.setText(this._text_7, currVal_20), 
            this._expr_20 = currVal_20);
        }, View_InAppModalBackdrop0.prototype.destroyInternal = function() {
            this._vc_12.destroyNestedViews();
        }, View_InAppModalBackdrop0.prototype.detachInternal = function() {
            var animationTransition_zoomin = this.componentType.animations.zoomin(this, this._el_2, this._expr_19, "void");
        }, View_InAppModalBackdrop0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 12 == nodeIndex ? new View_InAppModalBackdrop1(this.viewUtils, this, 12, this._anchor_12, this._vc_12) : null;
        }, View_InAppModalBackdrop0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_InAppModalBackdrop1 = function(_super) {
        function View_InAppModalBackdrop1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_InAppModalBackdrop1, renderType_InAppModalBackdrop, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_InAppModalBackdrop1, _super), View_InAppModalBackdrop1.prototype.createInternal = function(rootSelector) {
            return this._el_0 = this.renderer.createTemplateAnchor(null, null), this.init(this._el_0, this.renderer.directRenderer ? null : [], null), 
            null;
        }, View_InAppModalBackdrop1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_InAppModalBackdrop1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 493 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_js_native_demo_js_native_demo__ = __webpack_require__(153), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_js_native_modal__ = __webpack_require__(157), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__ = __webpack_require__(60), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_10__src_demo_app_demo_head_deam_head__ = __webpack_require__(115), __WEBPACK_IMPORTED_MODULE_11__demo_head_deam_head_ngfactory__ = __webpack_require__(213);
    /* unused harmony export Wrapper_JSNativeDemo */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeDemoNgFactory;
    });
    /* unused harmony export View_JSNativeDemo0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_JSNativeDemo = function() {
        function Wrapper_JSNativeDemo(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_js_native_demo_js_native_demo__.a(p0);
        }
        return Wrapper_JSNativeDemo.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_JSNativeDemo.prototype.ngOnDestroy = function() {}, Wrapper_JSNativeDemo.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_JSNativeDemo.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_JSNativeDemo.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_JSNativeDemo.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_JSNativeDemo;
    }(), renderType_JSNativeDemo_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_JSNativeDemo_Host0 = function(_super) {
        function View_JSNativeDemo_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_JSNativeDemo_Host0, renderType_JSNativeDemo_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_JSNativeDemo_Host0, _super), Object.defineProperty(View_JSNativeDemo_Host0.prototype, "_Modal_0_5", {
            get: function() {
                return null == this.__Modal_0_5 && (this.__Modal_0_5 = new __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_js_native_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex))), 
                this.__Modal_0_5;
            },
            enumerable: !0,
            configurable: !0
        }), View_JSNativeDemo_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "js-native-demo", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_JSNativeDemo0(this.viewUtils, this, 0, this._el_0), this._Modal_0_3 = new __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_js_native_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex)), 
            this._JSNativeDemo_0_4 = new Wrapper_JSNativeDemo(this._Modal_0_3), this.compView_0.create(this._JSNativeDemo_0_4.context), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._JSNativeDemo_0_4.context);
        }, View_JSNativeDemo_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_js_native_modal__.a && 0 === requestNodeIndex ? this._Modal_0_3 : token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_js_native_demo_js_native_demo__.a && 0 === requestNodeIndex ? this._JSNativeDemo_0_4.context : token === __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__.a && 0 === requestNodeIndex ? this._Modal_0_5 : notFoundResult;
        }, View_JSNativeDemo_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._JSNativeDemo_0_4.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_JSNativeDemo_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_JSNativeDemo_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_JSNativeDemo_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), JSNativeDemoNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.b("js-native-demo", View_JSNativeDemo_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_js_native_demo_js_native_demo__.a), styles_JSNativeDemo = [], renderType_JSNativeDemo = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_JSNativeDemo, {}), View_JSNativeDemo0 = function(_super) {
        function View_JSNativeDemo0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_JSNativeDemo0, renderType_JSNativeDemo, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_JSNativeDemo0, _super), View_JSNativeDemo0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "demo-head", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "description", "A (useless?) proof of concept how to apply a different renderer, ain't angular 2 great?", "title", "JS Native Dialog"), null), 
            this.compView_0 = new __WEBPACK_IMPORTED_MODULE_11__demo_head_deam_head_ngfactory__.a(this.viewUtils, this, 0, this._el_0), 
            this._DemoHead_0_3 = new __WEBPACK_IMPORTED_MODULE_11__demo_head_deam_head_ngfactory__.b(), 
            this._text_1 = this.renderer.createText(null, "\n", null), this.compView_0.create(this._DemoHead_0_3.context), 
            this._text_2 = this.renderer.createText(parentRenderNode, "\n", null), this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._text_2 ], null), 
            null;
        }, View_JSNativeDemo0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_10__src_demo_app_demo_head_deam_head__.a && 0 <= requestNodeIndex && requestNodeIndex <= 1 ? this._DemoHead_0_3.context : notFoundResult;
        }, View_JSNativeDemo0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = "JS Native Dialog";
            this._DemoHead_0_3.check_title(currVal_0_0_0, throwOnChange, !1);
            var currVal_0_0_1 = "A (useless?) proof of concept how to apply a different renderer, ain't angular 2 great?";
            this._DemoHead_0_3.check_description(currVal_0_0_1, throwOnChange, !1);
            var currVal_0_0_2 = this.context.modalCommands;
            this._DemoHead_0_3.check_modalCommands(currVal_0_0_2, throwOnChange, !1), this._DemoHead_0_3.ngDoCheck(this, this._el_0, throwOnChange), 
            this.compView_0.internalDetectChanges(throwOnChange);
        }, View_JSNativeDemo0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this._DemoHead_0_3.ngOnDestroy();
        }, View_JSNativeDemo0.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, ctx) {
            0 == nodeIndex && 1 == ngContentIndex && cb(this._text_1, ctx);
        }, View_JSNativeDemo0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 494 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-slideup{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:0}2%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-webkit-keyframes vex-slideup{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:0}2%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-moz-keyframes vex-slideup{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:0}2%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-ms-keyframes vex-slideup{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:0}2%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-o-keyframes vex-slideup{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:0}2%{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@keyframes vex-slidedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px)}}@-webkit-keyframes vex-slidedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px)}}@-moz-keyframes vex-slidedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px)}}@-ms-keyframes vex-slidedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px)}}@-o-keyframes vex-slidedown{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(800px);-webkit-transform:translateY(800px);-moz-transform:translateY(800px);-ms-transform:translateY(800px);-o-transform:translateY(800px)}}@keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-webkit-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-moz-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-ms-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-o-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}.vex.vex-theme-bottom-right-corner{top:auto;bottom:0;right:0;overflow:visible}.vex.vex-theme-bottom-right-corner .vex-overlay{display:none}.vex.vex-theme-bottom-right-corner.vex-closing .vex-content{animation:vex-slidedown .5s;-webkit-animation:vex-slidedown .5s;-moz-animation:vex-slidedown .5s;-ms-animation:vex-slidedown .5s;-o-animation:vex-slidedown .5s;-webkit-backface-visibility:hidden}.vex.vex-theme-bottom-right-corner .vex-content{animation:vex-slideup .5s;-webkit-animation:vex-slideup .5s;-moz-animation:vex-slideup .5s;-ms-animation:vex-slideup .5s;-o-animation:vex-slideup .5s;-webkit-backface-visibility:hidden;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0;border-radius:5px 0 0 0;font-family:Helvetica Neue,sans-serif;background:#f0f0f0;color:#444;padding:1em;max-width:100%;width:450px;font-size:1.1em;line-height:1.5em;position:fixed;bottom:0;right:0;left:auto}.vex.vex-theme-bottom-right-corner .vex-content h1,.vex.vex-theme-bottom-right-corner .vex-content h2,.vex.vex-theme-bottom-right-corner .vex-content h3,.vex.vex-theme-bottom-right-corner .vex-content h4,.vex.vex-theme-bottom-right-corner .vex-content h5,.vex.vex-theme-bottom-right-corner .vex-content h6,.vex.vex-theme-bottom-right-corner .vex-content li,.vex.vex-theme-bottom-right-corner .vex-content p,.vex.vex-theme-bottom-right-corner .vex-content ul{color:inherit}.vex.vex-theme-bottom-right-corner .vex-close{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-bottom-right-corner .vex-close:before{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;position:absolute;content:"\\D7";font-size:26px;font-weight:400;line-height:31px;height:30px;width:30px;text-align:center;top:3px;right:3px;color:#bbb;background:transparent}.vex.vex-theme-bottom-right-corner .vex-close:active:before,.vex.vex-theme-bottom-right-corner .vex-close:hover:before{color:#777;background:#e0e0e0}.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input{margin-bottom:1em}.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input textarea{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background:#fff;width:100%;padding:.25em .67em;border:0;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em}.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #8dbdf1;-webkit-box-shadow:inset 0 0 0 2px #8dbdf1;box-shadow:inset 0 0 0 2px #8dbdf1;outline:none}.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-buttons{*zoom:1}.vex.vex-theme-bottom-right-corner .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-bottom-right-corner .vex-dialog-button{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:0;float:right;margin:0 0 0 .5em;font-family:inherit;text-transform:uppercase;letter-spacing:.1em;font-size:.8em;line-height:1em;padding:.75em 2em}.vex.vex-theme-bottom-right-corner .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-bottom-right-corner .vex-dialog-button:focus{animation:vex-pulse 1.1s infinite;-webkit-animation:vex-pulse 1.1s infinite;-moz-animation:vex-pulse 1.1s infinite;-ms-animation:vex-pulse 1.1s infinite;-o-animation:vex-pulse 1.1s infinite;-webkit-backface-visibility:hidden;outline:none}@media (max-width:568px){.vex.vex-theme-bottom-right-corner .vex-dialog-button:focus{animation:none;-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;-webkit-backface-visibility:hidden}}.vex.vex-theme-bottom-right-corner .vex-dialog-button.vex-dialog-button-primary{background:#3288e6;color:#fff}.vex.vex-theme-bottom-right-corner .vex-dialog-button.vex-dialog-button-secondary{background:#e0e0e0;color:#777}.vex-loading-spinner.vex-theme-bottom-right-corner{-moz-box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);-webkit-box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);-moz-border-radius:100%;-webkit-border-radius:100%;border-radius:100%;background:#f0f0f0;border:.2em solid transparent;border-top-color:#bbb;top:-1.1em;bottom:auto}body.vex-open{overflow:initial}' ];
}, /* 495 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-moz-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-ms-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-o-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-webkit-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-moz-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-ms-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-o-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-webkit-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-moz-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-ms-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-o-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}.vex.vex-theme-default{padding-top:160px;padding-bottom:160px}.vex.vex-theme-default.vex-closing .vex-content{animation:vex-flyout .5s;-webkit-animation:vex-flyout .5s;-moz-animation:vex-flyout .5s;-ms-animation:vex-flyout .5s;-o-animation:vex-flyout .5s;-webkit-backface-visibility:hidden}.vex.vex-theme-default .vex-content{animation:vex-flyin .5s;-webkit-animation:vex-flyin .5s;-moz-animation:vex-flyin .5s;-ms-animation:vex-flyin .5s;-o-animation:vex-flyin .5s;-webkit-backface-visibility:hidden;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;font-family:Helvetica Neue,sans-serif;background:#f0f0f0;color:#444;padding:1em;position:relative;margin:0 auto;max-width:100%;width:450px;font-size:1.1em;line-height:1.5em}.vex.vex-theme-default .vex-content h1,.vex.vex-theme-default .vex-content h2,.vex.vex-theme-default .vex-content h3,.vex.vex-theme-default .vex-content h4,.vex.vex-theme-default .vex-content h5,.vex.vex-theme-default .vex-content h6,.vex.vex-theme-default .vex-content li,.vex.vex-theme-default .vex-content p,.vex.vex-theme-default .vex-content ul{color:inherit}.vex.vex-theme-default .vex-close{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-default .vex-close:before{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;position:absolute;content:"\\D7";font-size:26px;font-weight:400;line-height:31px;height:30px;width:30px;text-align:center;top:3px;right:3px;color:#bbb;background:transparent}.vex.vex-theme-default .vex-close:active:before,.vex.vex-theme-default .vex-close:hover:before{color:#777;background:#e0e0e0}.vex.vex-theme-default .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-default .vex-dialog-form .vex-dialog-input{margin-bottom:1em}.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-default .vex-dialog-form .vex-dialog-input textarea{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background:#fff;width:100%;padding:.25em .67em;border:0;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em}.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-default .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #8dbdf1;-webkit-box-shadow:inset 0 0 0 2px #8dbdf1;box-shadow:inset 0 0 0 2px #8dbdf1;outline:none}.vex.vex-theme-default .vex-dialog-form .vex-dialog-buttons{*zoom:1}.vex.vex-theme-default .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-default .vex-dialog-button{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:0;float:right;margin:0 0 0 .5em;font-family:inherit;text-transform:uppercase;letter-spacing:.1em;font-size:.8em;line-height:1em;padding:.75em 2em}.vex.vex-theme-default .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-default .vex-dialog-button:focus{animation:vex-pulse 1.1s infinite;-webkit-animation:vex-pulse 1.1s infinite;-moz-animation:vex-pulse 1.1s infinite;-ms-animation:vex-pulse 1.1s infinite;-o-animation:vex-pulse 1.1s infinite;-webkit-backface-visibility:hidden;outline:none}@media (max-width:568px){.vex.vex-theme-default .vex-dialog-button:focus{animation:none;-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;-webkit-backface-visibility:hidden}}.vex.vex-theme-default .vex-dialog-button.vex-dialog-button-primary{background:#3288e6;color:#fff}.vex.vex-theme-default .vex-dialog-button.vex-dialog-button-secondary{background:#e0e0e0;color:#777}.vex-loading-spinner.vex-theme-default{-moz-box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);-webkit-box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);-moz-border-radius:100%;-webkit-border-radius:100%;border-radius:100%;background:#f0f0f0;border:.2em solid transparent;border-top-color:#bbb;top:-1.1em;bottom:auto}' ];
}, /* 496 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-flipin-horizontal{0%{opacity:0;transform:rotateY(-90deg);-webkit-transform:rotateY(-90deg);-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);-o-transform:rotateY(-90deg)}to{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}}@-webkit-keyframes vex-flipin-horizontal{0%{opacity:0;transform:rotateY(-90deg);-webkit-transform:rotateY(-90deg);-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);-o-transform:rotateY(-90deg)}to{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}}@-moz-keyframes vex-flipin-horizontal{0%{opacity:0;transform:rotateY(-90deg);-webkit-transform:rotateY(-90deg);-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);-o-transform:rotateY(-90deg)}to{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}}@-ms-keyframes vex-flipin-horizontal{0%{opacity:0;transform:rotateY(-90deg);-webkit-transform:rotateY(-90deg);-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);-o-transform:rotateY(-90deg)}to{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}}@-o-keyframes vex-flipin-horizontal{0%{opacity:0;transform:rotateY(-90deg);-webkit-transform:rotateY(-90deg);-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);-o-transform:rotateY(-90deg)}to{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}}@keyframes vex-flipout-horizontal{0%{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}to{opacity:0;transform:rotateY(90deg);-webkit-transform:rotateY(90deg);-moz-transform:rotateY(90deg);-ms-transform:rotateY(90deg);-o-transform:rotateY(90deg)}}@-webkit-keyframes vex-flipout-horizontal{0%{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}to{opacity:0;transform:rotateY(90deg);-webkit-transform:rotateY(90deg);-moz-transform:rotateY(90deg);-ms-transform:rotateY(90deg);-o-transform:rotateY(90deg)}}@-moz-keyframes vex-flipout-horizontal{0%{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}to{opacity:0;transform:rotateY(90deg);-webkit-transform:rotateY(90deg);-moz-transform:rotateY(90deg);-ms-transform:rotateY(90deg);-o-transform:rotateY(90deg)}}@-ms-keyframes vex-flipout-horizontal{0%{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}to{opacity:0;transform:rotateY(90deg);-webkit-transform:rotateY(90deg);-moz-transform:rotateY(90deg);-ms-transform:rotateY(90deg);-o-transform:rotateY(90deg)}}@-o-keyframes vex-flipout-horizontal{0%{opacity:1;transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg)}to{opacity:0;transform:rotateY(90deg);-webkit-transform:rotateY(90deg);-moz-transform:rotateY(90deg);-ms-transform:rotateY(90deg);-o-transform:rotateY(90deg)}}.vex.vex-theme-flat-attack{-moz-perspective:1300px;-webkit-perspective:1300px;perspective:1300px;-moz-perspective-origin:50% 150px;-webkit-perspective-origin:50% 150px;perspective-origin:50% 150px;padding-top:100px;padding-bottom:100px;font-size:1.5em}.vex.vex-theme-flat-attack.vex-closing .vex-content{animation:vex-flipout-horizontal .5s;-webkit-animation:vex-flipout-horizontal .5s;-moz-animation:vex-flipout-horizontal .5s;-ms-animation:vex-flipout-horizontal .5s;-o-animation:vex-flipout-horizontal .5s;-webkit-backface-visibility:hidden}.vex.vex-theme-flat-attack .vex-content{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;animation:vex-flipin-horizontal .5s;-webkit-animation:vex-flipin-horizontal .5s;-moz-animation:vex-flipin-horizontal .5s;-ms-animation:vex-flipin-horizontal .5s;-o-animation:vex-flipin-horizontal .5s;-webkit-backface-visibility:hidden;font-family:Helvetica Neue,sans-serif;font-weight:200;background:#fff;color:#444;padding:2em 2em 3em;line-height:1.5em;position:relative;margin:0 auto;max-width:100%;width:600px}.vex.vex-theme-flat-attack .vex-content h1,.vex.vex-theme-flat-attack .vex-content h2,.vex.vex-theme-flat-attack .vex-content h3,.vex.vex-theme-flat-attack .vex-content h4,.vex.vex-theme-flat-attack .vex-content h5,.vex.vex-theme-flat-attack .vex-content h6,.vex.vex-theme-flat-attack .vex-content li,.vex.vex-theme-flat-attack .vex-content p,.vex.vex-theme-flat-attack .vex-content ul{color:inherit}.vex.vex-theme-flat-attack .vex-close{position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-flat-attack .vex-close:before{font-family:Helvetica Neue,sans-serif;font-weight:100;line-height:1px;padding-top:.5em;display:block;font-size:2em;text-indent:1px;overflow:hidden;height:1.25em;width:1.25em;text-align:center;top:0;right:0;color:#fff;background:#666}.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input textarea{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background:#f0f0f0;width:100%;padding:.25em .67em;border:0;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em}.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #666;-webkit-box-shadow:inset 0 0 0 2px #666;box-shadow:inset 0 0 0 2px #666;outline:none}.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-buttons{*zoom:1;padding-top:1em;margin-bottom:-3em;margin-left:-2em;margin-right:-2em}.vex.vex-theme-flat-attack .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-flat-attack .vex-dialog-button{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border:0;margin:0;float:right;padding:.5em 1em;font-size:1.13em;text-transform:uppercase;font-weight:200;letter-spacing:.1em;line-height:1em;font-family:inherit}.vex.vex-theme-flat-attack .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-flat-attack .vex-dialog-button:focus{outline:none}.vex.vex-theme-flat-attack .vex-dialog-button.vex-dialog-button-primary{background:#666;color:#fff}.vex.vex-theme-flat-attack .vex-dialog-button.vex-dialog-button-primary:focus{-moz-box-shadow:inset 0 3px rgba(0,0,0,.2);-webkit-box-shadow:inset 0 3px rgba(0,0,0,.2);box-shadow:inset 0 3px rgba(0,0,0,.2)}.vex.vex-theme-flat-attack .vex-dialog-button.vex-dialog-button-secondary{background:#fff;color:#ccc}.vex.vex-theme-flat-attack .vex-dialog-button.vex-dialog-button-secondary:focus{-moz-box-shadow:inset 0 3px #aaa;-webkit-box-shadow:inset 0 3px #aaa;box-shadow:inset 0 3px #aaa;background:#eee;color:#777}.vex.vex-theme-flat-attack .vex-dialog-button.vex-dialog-button-secondary:active,.vex.vex-theme-flat-attack .vex-dialog-button.vex-dialog-button-secondary:hover{color:#777}.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-close:before{background:#ff7ea7}.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #ff7ea7;-webkit-box-shadow:inset 0 0 0 2px #ff7ea7;box-shadow:inset 0 0 0 2px #ff7ea7}.vex.vex-theme-flat-attack.vex-theme-flat-attack-pink .vex-dialog-form .vex-dialog-buttons .vex-dialog-button.vex-dialog-button-primary{background:#ff7ea7}.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-close:before{background:#ce4a55}.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #ce4a55;-webkit-box-shadow:inset 0 0 0 2px #ce4a55;box-shadow:inset 0 0 0 2px #ce4a55}.vex.vex-theme-flat-attack.vex-theme-flat-attack-red .vex-dialog-form .vex-dialog-buttons .vex-dialog-button.vex-dialog-button-primary{background:#ce4a55}.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-close:before{background:#34b989}.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #34b989;-webkit-box-shadow:inset 0 0 0 2px #34b989;box-shadow:inset 0 0 0 2px #34b989}.vex.vex-theme-flat-attack.vex-theme-flat-attack-green .vex-dialog-form .vex-dialog-buttons .vex-dialog-button.vex-dialog-button-primary{background:#34b989}.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-close:before{background:#477fa5}.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #477fa5;-webkit-box-shadow:inset 0 0 0 2px #477fa5;box-shadow:inset 0 0 0 2px #477fa5}.vex.vex-theme-flat-attack.vex-theme-flat-attack-blue .vex-dialog-form .vex-dialog-buttons .vex-dialog-button.vex-dialog-button-primary{background:#477fa5}.vex-loading-spinner.vex-theme-flat-attack{height:4em;width:4em}' ];
}, /* 497 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-moz-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-ms-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-o-keyframes vex-flyin{0%{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-webkit-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-moz-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-ms-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@-o-keyframes vex-flyout{0%{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{opacity:0;transform:translateY(-40px);-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px)}}@keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-webkit-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-moz-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-ms-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-o-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}.vex.vex-theme-os{padding-top:160px;padding-bottom:160px}.vex.vex-theme-os.vex-closing .vex-content{animation:vex-flyout .5s;-webkit-animation:vex-flyout .5s;-moz-animation:vex-flyout .5s;-ms-animation:vex-flyout .5s;-o-animation:vex-flyout .5s;-webkit-backface-visibility:hidden}.vex.vex-theme-os .vex-content{animation:vex-flyin .5s;-webkit-animation:vex-flyin .5s;-moz-animation:vex-flyin .5s;-ms-animation:vex-flyin .5s;-o-animation:vex-flyin .5s;-webkit-backface-visibility:hidden;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;-moz-box-shadow:inset 0 1px #a6a6a6,0 0 0 1px rgba(0,0,0,.08);-webkit-box-shadow:inset 0 1px #a6a6a6,0 0 0 1px rgba(0,0,0,.08);box-shadow:inset 0 1px #a6a6a6,0 0 0 1px rgba(0,0,0,.08);font-family:Helvetica Neue,sans-serif;border-top:20px solid #bbb;background:#f0f0f0;color:#444;padding:1em;position:relative;margin:0 auto;max-width:100%;width:450px;font-size:1.1em;line-height:1.5em}.vex.vex-theme-os .vex-content h1,.vex.vex-theme-os .vex-content h2,.vex.vex-theme-os .vex-content h3,.vex.vex-theme-os .vex-content h4,.vex.vex-theme-os .vex-content h5,.vex.vex-theme-os .vex-content h6,.vex.vex-theme-os .vex-content li,.vex.vex-theme-os .vex-content p,.vex.vex-theme-os .vex-content ul{color:inherit}.vex.vex-theme-os .vex-close{-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;border-radius:0 5px 0 0;position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-os .vex-close:before{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;position:absolute;content:"\\D7";font-size:26px;font-weight:400;line-height:31px;height:30px;width:30px;text-align:center;top:3px;right:3px;color:#bbb;background:transparent}.vex.vex-theme-os .vex-close:active:before,.vex.vex-theme-os .vex-close:hover:before{color:#777;background:#e0e0e0}.vex.vex-theme-os .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-os .vex-dialog-form .vex-dialog-input{margin-bottom:1em}.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-os .vex-dialog-form .vex-dialog-input textarea{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background:#fff;width:100%;padding:.25em .67em;border:0;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em}.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-os .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 1px #3288e6;-webkit-box-shadow:inset 0 0 0 1px #3288e6;box-shadow:inset 0 0 0 1px #3288e6;outline:none}.vex.vex-theme-os .vex-dialog-form .vex-dialog-buttons{*zoom:1}.vex.vex-theme-os .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-os .vex-dialog-button{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:0;float:right;margin:0 0 0 .5em;font-family:inherit;text-transform:uppercase;letter-spacing:.1em;font-size:.8em;line-height:1em;padding:.75em 2em}.vex.vex-theme-os .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-os .vex-dialog-button:focus{animation:vex-pulse 1.1s infinite;-webkit-animation:vex-pulse 1.1s infinite;-moz-animation:vex-pulse 1.1s infinite;-ms-animation:vex-pulse 1.1s infinite;-o-animation:vex-pulse 1.1s infinite;-webkit-backface-visibility:hidden;outline:none}@media (max-width:568px){.vex.vex-theme-os .vex-dialog-button:focus{animation:none;-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;-webkit-backface-visibility:hidden}}.vex.vex-theme-os .vex-dialog-button.vex-dialog-button-primary{background:#3288e6;color:#fff}.vex.vex-theme-os .vex-dialog-button.vex-dialog-button-secondary{background:#e0e0e0;color:#777}.vex-loading-spinner.vex-theme-os{-moz-box-shadow:0 0 0 1px rgba(0,0,0,.2),0 0 .5em rgba(0,0,0,.2);-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.2),0 0 .5em rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(0,0,0,.2),0 0 .5em rgba(0,0,0,.2);-moz-border-radius:100%;-webkit-border-radius:100%;border-radius:100%;background:hsla(0,0%,100%,.2);width:0;height:0;border:1.2em solid #bbb;border-top-color:#f0f0f0;border-bottom-color:#f0f0f0}' ];
}, /* 498 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-webkit-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-moz-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-ms-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-o-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}.vex.vex-theme-plain{padding-top:160px;padding-bottom:160px}.vex.vex-theme-plain .vex-content{font-family:Helvetica Neue,sans-serif;background:#fff;color:#444;padding:1em;position:relative;margin:0 auto;max-width:100%;width:450px;font-size:1.1em;line-height:1.5em}.vex.vex-theme-plain .vex-content h1,.vex.vex-theme-plain .vex-content h2,.vex.vex-theme-plain .vex-content h3,.vex.vex-theme-plain .vex-content h4,.vex.vex-theme-plain .vex-content h5,.vex.vex-theme-plain .vex-content h6,.vex.vex-theme-plain .vex-content li,.vex.vex-theme-plain .vex-content p,.vex.vex-theme-plain .vex-content ul{color:inherit}.vex.vex-theme-plain .vex-close{position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-plain .vex-close:before{position:absolute;content:"\\D7";font-size:26px;font-weight:400;line-height:31px;height:30px;width:30px;text-align:center;top:3px;right:3px;color:#bbb;background:transparent}.vex.vex-theme-plain .vex-close:active:before,.vex.vex-theme-plain .vex-close:hover:before{color:#777;background:#e0e0e0}.vex.vex-theme-plain .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input{margin-bottom:1em}.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input textarea{background:#f0f0f0;width:100%;padding:.25em .67em;border:0;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em}.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-plain .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px rgba(0,0,0,.2);-webkit-box-shadow:inset 0 0 0 2px rgba(0,0,0,.2);box-shadow:inset 0 0 0 2px rgba(0,0,0,.2);outline:none}.vex.vex-theme-plain .vex-dialog-form .vex-dialog-buttons{*zoom:1}.vex.vex-theme-plain .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-plain .vex-dialog-button{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border:0;float:right;margin:0 0 0 .5em;font-family:inherit;text-transform:uppercase;letter-spacing:.1em;font-size:.8em;line-height:1em;padding:.75em 2em}.vex.vex-theme-plain .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-plain .vex-dialog-button:focus{animation:vex-pulse 1.1s infinite;-webkit-animation:vex-pulse 1.1s infinite;-moz-animation:vex-pulse 1.1s infinite;-ms-animation:vex-pulse 1.1s infinite;-o-animation:vex-pulse 1.1s infinite;-webkit-backface-visibility:hidden;outline:none}@media (max-width:568px){.vex.vex-theme-plain .vex-dialog-button:focus{animation:none;-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;-webkit-backface-visibility:hidden}}.vex.vex-theme-plain .vex-dialog-button.vex-dialog-button-primary{background:#3288e6;color:#fff}.vex.vex-theme-plain .vex-dialog-button.vex-dialog-button-secondary{background:#e0e0e0;color:#777}.vex-loading-spinner.vex-theme-plain{height:2.5em;width:2.5em}' ];
}, /* 499 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-webkit-keyframes vex-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-moz-keyframes vex-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-ms-keyframes vex-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-o-keyframes vex-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}to{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@keyframes vex-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-webkit-keyframes vex-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-moz-keyframes vex-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-ms-keyframes vex-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-o-keyframes vex-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}to{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-webkit-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-moz-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-ms-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-o-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}.vex.vex-theme-top.vex-closing .vex-content{animation:vex-dropout .5s;-webkit-animation:vex-dropout .5s;-moz-animation:vex-dropout .5s;-ms-animation:vex-dropout .5s;-o-animation:vex-dropout .5s;-webkit-backface-visibility:hidden}.vex.vex-theme-top .vex-content{animation:vex-dropin .5s;-webkit-animation:vex-dropin .5s;-moz-animation:vex-dropin .5s;-ms-animation:vex-dropin .5s;-o-animation:vex-dropin .5s;-webkit-backface-visibility:hidden;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;border-radius:0 0 5px 5px;font-family:Helvetica Neue,sans-serif;background:#f0f0f0;color:#444;padding:1em;position:relative;margin:0 auto;max-width:100%;width:450px;font-size:1.1em;line-height:1.5em}.vex.vex-theme-top .vex-content h1,.vex.vex-theme-top .vex-content h2,.vex.vex-theme-top .vex-content h3,.vex.vex-theme-top .vex-content h4,.vex.vex-theme-top .vex-content h5,.vex.vex-theme-top .vex-content h6,.vex.vex-theme-top .vex-content li,.vex.vex-theme-top .vex-content p,.vex.vex-theme-top .vex-content ul{color:inherit}.vex.vex-theme-top .vex-close{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-top .vex-close:before{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;position:absolute;content:"\\D7";font-size:26px;font-weight:400;line-height:31px;height:30px;width:30px;text-align:center;top:3px;right:3px;color:#bbb;background:transparent}.vex.vex-theme-top .vex-close:active:before,.vex.vex-theme-top .vex-close:hover:before{color:#777;background:#e0e0e0}.vex.vex-theme-top .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-top .vex-dialog-form .vex-dialog-input{margin-bottom:1em}.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-top .vex-dialog-form .vex-dialog-input textarea{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background:#fff;width:100%;padding:.25em .67em;border:0;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em}.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-top .vex-dialog-form .vex-dialog-input textarea:focus{-moz-box-shadow:inset 0 0 0 2px #8dbdf1;-webkit-box-shadow:inset 0 0 0 2px #8dbdf1;box-shadow:inset 0 0 0 2px #8dbdf1;outline:none}.vex.vex-theme-top .vex-dialog-form .vex-dialog-buttons{*zoom:1}.vex.vex-theme-top .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-top .vex-dialog-button{-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:0;float:right;margin:0 0 0 .5em;font-family:inherit;text-transform:uppercase;letter-spacing:.1em;font-size:.8em;line-height:1em;padding:.75em 2em}.vex.vex-theme-top .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-top .vex-dialog-button:focus{animation:vex-pulse 1.1s infinite;-webkit-animation:vex-pulse 1.1s infinite;-moz-animation:vex-pulse 1.1s infinite;-ms-animation:vex-pulse 1.1s infinite;-o-animation:vex-pulse 1.1s infinite;-webkit-backface-visibility:hidden;outline:none}@media (max-width:568px){.vex.vex-theme-top .vex-dialog-button:focus{animation:none;-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;-webkit-backface-visibility:hidden}}.vex.vex-theme-top .vex-dialog-button.vex-dialog-button-primary{background:#3288e6;color:#fff}.vex.vex-theme-top .vex-dialog-button.vex-dialog-button-secondary{background:#e0e0e0;color:#777}.vex-loading-spinner.vex-theme-top{-moz-box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);-webkit-box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);box-shadow:0 0 0 .5em #f0f0f0,0 0 1px .5em rgba(0,0,0,.3);-moz-border-radius:100%;-webkit-border-radius:100%;border-radius:100%;background:#f0f0f0;border:.2em solid transparent;border-top-color:#bbb;top:-1.1em;bottom:auto}' ];
}, /* 500 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-webkit-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-moz-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-ms-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}@-o-keyframes vex-pulse{0%{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}70%{-moz-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);-webkit-box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25);box-shadow:inset 0 0 0 300px hsla(0,0%,100%,.25)}to{-moz-box-shadow:inset 0 0 0 300px transparent;-webkit-box-shadow:inset 0 0 0 300px transparent;box-shadow:inset 0 0 0 300px transparent}}.vex.vex-theme-wireframe{padding-top:160px;padding-bottom:160px}.vex.vex-theme-wireframe .vex-overlay{background:hsla(0,0%,100%,.4)}.vex.vex-theme-wireframe .vex-content{font-family:Helvetica Neue,sans-serif;background:#fff;color:#000;border:2px solid #000;padding:2em;position:relative;margin:0 auto;max-width:100%;width:400px;font-size:1.1em;line-height:1.5em}.vex.vex-theme-wireframe .vex-content h1,.vex.vex-theme-wireframe .vex-content h2,.vex.vex-theme-wireframe .vex-content h3,.vex.vex-theme-wireframe .vex-content h4,.vex.vex-theme-wireframe .vex-content h5,.vex.vex-theme-wireframe .vex-content h6,.vex.vex-theme-wireframe .vex-content li,.vex.vex-theme-wireframe .vex-content p,.vex.vex-theme-wireframe .vex-content ul{color:inherit}.vex.vex-theme-wireframe .vex-close{position:absolute;top:0;right:0;cursor:pointer}.vex.vex-theme-wireframe .vex-close:before{position:absolute;content:"\\D7";font-size:40px;font-weight:400;line-height:80px;height:80px;width:80px;text-align:center;top:3px;right:3px;color:#000}.vex.vex-theme-wireframe .vex-close:active:before,.vex.vex-theme-wireframe .vex-close:hover:before{color:#000}.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-message{margin-bottom:.5em}.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input{margin-bottom:1em}.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=date],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=datetime-local],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=datetime],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=email],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=month],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=number],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=password],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=search],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=tel],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=text],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=time],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=url],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=week],.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input textarea{background:#fff;width:100%;padding:.25em .67em;font-family:inherit;font-weight:inherit;font-size:inherit;min-height:2.5em;margin:0 0 .25em;border:2px solid #000}.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=date]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=datetime-local]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=datetime]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=email]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=month]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=number]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=password]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=search]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=tel]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=text]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=time]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=url]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input input[type=week]:focus,.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-input textarea:focus{border-style:dashed;outline:none}.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-buttons{*zoom:1}.vex.vex-theme-wireframe .vex-dialog-form .vex-dialog-buttons:after{content:"";display:table;clear:both}.vex.vex-theme-wireframe .vex-dialog-button{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border:0;float:right;margin:0 0 0 .5em;font-family:inherit;text-transform:uppercase;letter-spacing:.1em;font-size:.8em;line-height:1em;padding:.75em 2em}.vex.vex-theme-wireframe .vex-dialog-button.vex-last{margin-left:0}.vex.vex-theme-wireframe .vex-dialog-button:focus{animation:vex-pulse 1.1s infinite;-webkit-animation:vex-pulse 1.1s infinite;-moz-animation:vex-pulse 1.1s infinite;-ms-animation:vex-pulse 1.1s infinite;-o-animation:vex-pulse 1.1s infinite;-webkit-backface-visibility:hidden;outline:none}@media (max-width:568px){.vex.vex-theme-wireframe .vex-dialog-button:focus{animation:none;-webkit-animation:none;-moz-animation:none;-ms-animation:none;-o-animation:none;-webkit-backface-visibility:hidden}}.vex.vex-theme-wireframe .vex-dialog-button.vex-dialog-button-primary{background:#000;color:#fff;border:2px solid transparent}.vex.vex-theme-wireframe .vex-dialog-button.vex-dialog-button-secondary{background:#fff;color:#000;border:2px solid #000}.vex-loading-spinner.vex-theme-wireframe{height:2.5em;width:2.5em}' ];
}, /* 501 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return styles;
    });
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    var styles = [ '@keyframes vex-fadein{0%{opacity:0}to{opacity:1}}@-webkit-keyframes vex-fadein{0%{opacity:0}to{opacity:1}}@-moz-keyframes vex-fadein{0%{opacity:0}to{opacity:1}}@-ms-keyframes vex-fadein{0%{opacity:0}to{opacity:1}}@-o-keyframes vex-fadein{0%{opacity:0}to{opacity:1}}@keyframes vex-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes vex-fadeout{0%{opacity:1}to{opacity:0}}@-moz-keyframes vex-fadeout{0%{opacity:1}to{opacity:0}}@-ms-keyframes vex-fadeout{0%{opacity:1}to{opacity:0}}@-o-keyframes vex-fadeout{0%{opacity:1}to{opacity:0}}@keyframes vex-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}to{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-webkit-keyframes vex-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}to{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-moz-keyframes vex-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}to{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-ms-keyframes vex-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}to{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-o-keyframes vex-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}to{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}.vex,.vex *,.vex :after,.vex :before{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.vex{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:1111;top:0;right:0;bottom:0;left:0}.vex-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.vex-overlay{background:#000;filter:alpha(opacity=40);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";animation:vex-fadein .5s;-webkit-animation:vex-fadein .5s;-moz-animation:vex-fadein .5s;-ms-animation:vex-fadein .5s;-o-animation:vex-fadein .5s;-webkit-backface-visibility:hidden;position:fixed;background:rgba(0,0,0,.4);top:0;right:0;bottom:0;left:0}.vex.vex-closing .vex-overlay{animation:vex-fadeout .5s;-webkit-animation:vex-fadeout .5s;-moz-animation:vex-fadeout .5s;-ms-animation:vex-fadeout .5s;-o-animation:vex-fadeout .5s;-webkit-backface-visibility:hidden}.vex-content{animation:vex-fadein .5s;-webkit-animation:vex-fadein .5s;-moz-animation:vex-fadein .5s;-ms-animation:vex-fadein .5s;-o-animation:vex-fadein .5s;-webkit-backface-visibility:hidden;background:#fff}.vex.vex-closing .vex-content{animation:vex-fadeout .5s;-webkit-animation:vex-fadeout .5s;-moz-animation:vex-fadeout .5s;-ms-animation:vex-fadeout .5s;-o-animation:vex-fadeout .5s;-webkit-backface-visibility:hidden}.vex-close:before{font-family:Arial,sans-serif;content:"\\D7"}.vex-dialog-form{margin:0}.vex-dialog-button{text-rendering:optimizeLegibility;-moz-appearance:none;-webkit-appearance:none;cursor:pointer;-webkit-tap-highlight-color:transparent}.vex-loading-spinner{animation:vex-rotation .7s linear infinite;-webkit-animation:vex-rotation .7s linear infinite;-moz-animation:vex-rotation .7s linear infinite;-ms-animation:vex-rotation .7s linear infinite;-o-animation:vex-rotation .7s linear infinite;-webkit-backface-visibility:hidden;-moz-box-shadow:0 0 1em rgba(0,0,0,.1);-webkit-box-shadow:0 0 1em rgba(0,0,0,.1);box-shadow:0 0 1em rgba(0,0,0,.1);position:fixed;z-index:1112;margin:auto;top:0;right:0;bottom:0;left:0;height:2em;width:2em;background:#fff}body.vex-open{overflow:hidden}' ];
}, /* 502 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_login_dialog__ = __webpack_require__(217), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(146), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__ = __webpack_require__(89), __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(307), __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_ng_model_ngfactory__ = __webpack_require__(212), __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(211), __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(71), __WEBPACK_IMPORTED_MODULE_18__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22), __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_ng_model__ = __webpack_require__(74), __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_ng_control__ = __webpack_require__(39), __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_ng_control_status__ = __webpack_require__(72);
    /* unused harmony export Wrapper_LoginDialog */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return LoginDialogNgFactory;
    });
    /* unused harmony export View_LoginDialog0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_LoginDialog = function() {
        function Wrapper_LoginDialog(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_login_dialog__.a(p0);
        }
        return Wrapper_LoginDialog.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_LoginDialog.prototype.ngOnDestroy = function() {}, Wrapper_LoginDialog.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_LoginDialog.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_LoginDialog.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_LoginDialog.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_LoginDialog;
    }(), renderType_LoginDialog_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_LoginDialog_Host0 = function(_super) {
        function View_LoginDialog_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_LoginDialog_Host0, renderType_LoginDialog_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_LoginDialog_Host0, _super), View_LoginDialog_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "login-dialog", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_LoginDialog0(this.viewUtils, this, 0, this._el_0), this._LoginDialog_0_3 = new Wrapper_LoginDialog(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._LoginDialog_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._LoginDialog_0_3.context);
        }, View_LoginDialog_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_login_dialog__.a && 0 === requestNodeIndex ? this._LoginDialog_0_3.context : notFoundResult;
        }, View_LoginDialog_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._LoginDialog_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_LoginDialog_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_LoginDialog_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_LoginDialog_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), LoginDialogNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("login-dialog", View_LoginDialog_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_login_dialog__.a), styles_LoginDialog = [], renderType_LoginDialog = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_LoginDialog, {}), View_LoginDialog0 = function(_super) {
        function View_LoginDialog0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_LoginDialog0, renderType_LoginDialog, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_7 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_LoginDialog0, _super), View_LoginDialog0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "vex-dialog-message"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "", null), this._text_2 = this.renderer.createText(parentRenderNode, "\n    ", null), 
            this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode, null), this._vc_3 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(3, null, this, this._anchor_3), 
            this._TemplateRef_3_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.a(this, 3, this._anchor_3), 
            this._NgIf_3_6 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_3.vcRef, this._TemplateRef_3_5), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._text_2, this._anchor_3 ], null), 
            null;
        }, View_LoginDialog0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.b && 3 === requestNodeIndex ? this._TemplateRef_3_5 : token === __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__.a && 3 === requestNodeIndex ? this._NgIf_3_6.context : notFoundResult;
        }, View_LoginDialog0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_3_0_0 = this.context.context.showInput;
            this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, !1), this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange), 
            this._vc_3.detectChangesInNestedViews(throwOnChange);
            var currVal_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.context.message, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_7, currVal_7) && (this.renderer.setText(this._text_1, currVal_7), 
            this._expr_7 = currVal_7);
        }, View_LoginDialog0.prototype.destroyInternal = function() {
            this._vc_3.destroyNestedViews();
        }, View_LoginDialog0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 3 == nodeIndex ? new View_LoginDialog1(this.viewUtils, this, 3, this._anchor_3, this._vc_3) : null;
        }, View_LoginDialog0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_LoginDialog1 = function(_super) {
        function View_LoginDialog1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_LoginDialog1, renderType_LoginDialog, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_9 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_LoginDialog1, _super), View_LoginDialog1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "vex-dialog-input"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n        ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "vex-dialog-prompt-input", "name", "vex", "type", "text"), null), 
            this._DefaultValueAccessor_2_3 = new __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_element_ref__.a(this._el_2)), 
            this._NG_VALUE_ACCESSOR_2_4 = [ this._DefaultValueAccessor_2_3.context ], this._NgModel_2_5 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(null, null, null, this._NG_VALUE_ACCESSOR_2_4), 
            this._NgControl_2_6 = this._NgModel_2_5.context, this._NgControlStatus_2_7 = new __WEBPACK_IMPORTED_MODULE_15__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_2_6), 
            this._text_3 = this.renderer.createText(this._el_0, "\n    ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_2, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "input", null, "blur", null), this.eventHandler(this.handleEvent_2));
            return this._NgModel_2_5.subscribe(this, this.eventHandler(this.handleEvent_2), !0), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3 ], [ disposable_0 ]), 
            null;
        }, View_LoginDialog1.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_default_value_accessor__.a && 2 === requestNodeIndex ? this._DefaultValueAccessor_2_3.context : token === __WEBPACK_IMPORTED_MODULE_18__angular_forms_src_directives_control_value_accessor__.a && 2 === requestNodeIndex ? this._NG_VALUE_ACCESSOR_2_4 : token === __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_ng_model__.a && 2 === requestNodeIndex ? this._NgModel_2_5.context : token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_ng_control__.a && 2 === requestNodeIndex ? this._NgControl_2_6 : token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_ng_control_status__.a && 2 === requestNodeIndex ? this._NgControlStatus_2_7.context : notFoundResult;
        }, View_LoginDialog1.prototype.detectChangesInternal = function(throwOnChange) {
            this._DefaultValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
            var currVal_2_1_0 = "vex";
            this._NgModel_2_5.check_name(currVal_2_1_0, throwOnChange, !1);
            var currVal_2_1_1 = this.parentView.context.context.defaultResult;
            this._NgModel_2_5.check_model(currVal_2_1_1, throwOnChange, !1), this._NgModel_2_5.ngDoCheck(this, this._el_2, throwOnChange), 
            this._NgControlStatus_2_7.ngDoCheck(this, this._el_2, throwOnChange);
            var currVal_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.parentView.context.context.placeholder, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_9, currVal_9) && (this.renderer.setElementProperty(this._el_2, "placeholder", currVal_9), 
            this._expr_9 = currVal_9), this._NgControlStatus_2_7.checkHost(this, this, this._el_2, throwOnChange);
        }, View_LoginDialog1.prototype.destroyInternal = function() {
            this._NgModel_2_5.ngOnDestroy();
        }, View_LoginDialog1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_LoginDialog1.prototype.handleEvent_2 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._DefaultValueAccessor_2_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.parentView.context.context.defaultResult = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_LoginDialog1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 503 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_vex_demo__ = __webpack_require__(154), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_vex_modal__ = __webpack_require__(223), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__ = __webpack_require__(60), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_10__css_vex_css_ngstyle__ = __webpack_require__(501), __WEBPACK_IMPORTED_MODULE_11__css_vex_theme_default_css_ngstyle__ = __webpack_require__(495), __WEBPACK_IMPORTED_MODULE_12__css_vex_theme_os_css_ngstyle__ = __webpack_require__(497), __WEBPACK_IMPORTED_MODULE_13__css_vex_theme_plain_css_ngstyle__ = __webpack_require__(498), __WEBPACK_IMPORTED_MODULE_14__css_vex_theme_wireframe_css_ngstyle__ = __webpack_require__(500), __WEBPACK_IMPORTED_MODULE_15__css_vex_theme_flat_attack_css_ngstyle__ = __webpack_require__(496), __WEBPACK_IMPORTED_MODULE_16__css_vex_theme_top_css_ngstyle__ = __webpack_require__(499), __WEBPACK_IMPORTED_MODULE_17__css_vex_theme_bottom_right_corner_css_ngstyle__ = __webpack_require__(494), __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_query_list__ = __webpack_require__(107), __WEBPACK_IMPORTED_MODULE_19__src_demo_app_demo_head_deam_head__ = __webpack_require__(115), __WEBPACK_IMPORTED_MODULE_20__demo_head_deam_head_ngfactory__ = __webpack_require__(213), __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__ = __webpack_require__(308), __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_forms_src_directives_ng_model_ngfactory__ = __webpack_require__(212), __WEBPACK_IMPORTED_MODULE_23__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(211), __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__ = __webpack_require__(309), __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_27__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__ = __webpack_require__(75), __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__ = __webpack_require__(76), __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22), __WEBPACK_IMPORTED_MODULE_31__angular_forms_src_directives_ng_model__ = __webpack_require__(74), __WEBPACK_IMPORTED_MODULE_32__angular_forms_src_directives_ng_control__ = __webpack_require__(39), __WEBPACK_IMPORTED_MODULE_33__angular_forms_src_directives_ng_control_status__ = __webpack_require__(72), __WEBPACK_IMPORTED_MODULE_34__angular_common_src_pipes_json_pipe__ = __webpack_require__(178), __WEBPACK_IMPORTED_MODULE_35__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7);
    /* unused harmony export Wrapper_VexDemo */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VexDemoNgFactory;
    });
    /* unused harmony export View_VexDemo0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_VexDemo = function() {
        function Wrapper_VexDemo(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_vex_demo__.a(p0);
        }
        return Wrapper_VexDemo.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_VexDemo.prototype.ngOnDestroy = function() {}, Wrapper_VexDemo.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_VexDemo.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_VexDemo.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_VexDemo.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_VexDemo;
    }(), renderType_VexDemo_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_VexDemo_Host0 = function(_super) {
        function View_VexDemo_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_VexDemo_Host0, renderType_VexDemo_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_VexDemo_Host0, _super), Object.defineProperty(View_VexDemo_Host0.prototype, "_Modal_0_5", {
            get: function() {
                return null == this.__Modal_0_5 && (this.__Modal_0_5 = new __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_vex_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex))), 
                this.__Modal_0_5;
            },
            enumerable: !0,
            configurable: !0
        }), View_VexDemo_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "vex-demo", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_VexDemo0(this.viewUtils, this, 0, this._el_0), this._Modal_0_3 = new __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_vex_modal__.a(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_overlay_overlay_service__.a, this.parentIndex)), 
            this._VexDemo_0_4 = new Wrapper_VexDemo(this._Modal_0_3), this.compView_0.create(this._VexDemo_0_4.context), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._VexDemo_0_4.context);
        }, View_VexDemo_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_4__src_lib_plugins_vex_modal__.a && 0 === requestNodeIndex ? this._Modal_0_3 : token === __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_vex_demo__.a && 0 === requestNodeIndex ? this._VexDemo_0_4.context : token === __WEBPACK_IMPORTED_MODULE_9__src_lib_providers_modal__.a && 0 === requestNodeIndex ? this._Modal_0_5 : notFoundResult;
        }, View_VexDemo_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._VexDemo_0_4.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_VexDemo_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_VexDemo_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_VexDemo_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), VexDemoNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.b("vex-demo", View_VexDemo_Host0, __WEBPACK_IMPORTED_MODULE_0__src_demo_app_vex_demo_vex_demo__.a), styles_VexDemo = [ __WEBPACK_IMPORTED_MODULE_10__css_vex_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_11__css_vex_theme_default_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_12__css_vex_theme_os_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_13__css_vex_theme_plain_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_14__css_vex_theme_wireframe_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_15__css_vex_theme_flat_attack_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_16__css_vex_theme_top_css_ngstyle__.a, __WEBPACK_IMPORTED_MODULE_17__css_vex_theme_bottom_right_corner_css_ngstyle__.a ], renderType_VexDemo = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_VexDemo, {}), View_VexDemo0 = function(_super) {
        function View_VexDemo0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_VexDemo0, renderType_VexDemo, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_VexDemo0, _super), View_VexDemo0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            this._viewQuery_DemoHead_0 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_query_list__.a(), 
            this._viewQuery_templateRef_1 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_query_list__.a(), 
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "demo-head", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "description", "An implementation of <a href='http://github.hubspot.com/vex/docs/welcome/' target='_blank'>VEX</a>", "title", "VEX dialog plugin"), null), 
            this.compView_0 = new __WEBPACK_IMPORTED_MODULE_20__demo_head_deam_head_ngfactory__.a(this.viewUtils, this, 0, this._el_0), 
            this._DemoHead_0_3 = new __WEBPACK_IMPORTED_MODULE_20__demo_head_deam_head_ngfactory__.b(), 
            this._text_1 = this.renderer.createText(null, "\n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "extra-desc-content", ""), null), 
            this._text_3 = this.renderer.createText(this._el_2, "\n        ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "row"), null), 
            this._text_5 = this.renderer.createText(this._el_4, "\n            ", null), this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_4, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-xs-12"), null), 
            this._text_7 = this.renderer.createText(this._el_6, "\n                ", null), 
            this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_6, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_9 = this.renderer.createText(this._el_8, "\n                    ", null), 
            this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_8, "label", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "class", "col-md-4 control-label", "for", "theme"), null), 
            this._text_11 = this.renderer.createText(this._el_10, "Select a VEX Theme:", null), 
            this._text_12 = this.renderer.createText(this._el_8, "\n                    ", null), 
            this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_8, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "col-md-6"), null), 
            this._text_14 = this.renderer.createText(this._el_13, "\n                        ", null), 
            this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_13, "select", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "class", "form-control", "id", "theme", "name", "theme"), null), 
            this._SelectControlValueAccessor_15_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.a(this.renderer, new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_15)), 
            this._NG_VALUE_ACCESSOR_15_4 = [ this._SelectControlValueAccessor_15_3.context ], 
            this._NgModel_15_5 = new __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_forms_src_directives_ng_model_ngfactory__.a(null, null, null, this._NG_VALUE_ACCESSOR_15_4), 
            this._NgControl_15_6 = this._NgModel_15_5.context, this._NgControlStatus_15_7 = new __WEBPACK_IMPORTED_MODULE_23__node_modules_angular_forms_src_directives_ng_control_status_ngfactory__.a(this._NgControl_15_6), 
            this._text_16 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "default"), null), 
            this._NgSelectOption_17_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_17), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_17_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_17), this.renderer, null), 
            this._text_18 = this.renderer.createText(this._el_17, "default", null), this._text_19 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "os"), null), 
            this._NgSelectOption_20_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_20), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_20_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_20), this.renderer, null), 
            this._text_21 = this.renderer.createText(this._el_20, "os", null), this._text_22 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "plain"), null), 
            this._NgSelectOption_23_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_23), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_23_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_23), this.renderer, null), 
            this._text_24 = this.renderer.createText(this._el_23, "plain", null), this._text_25 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_26 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "wireframe"), null), 
            this._NgSelectOption_26_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_26), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_26_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_26), this.renderer, null), 
            this._text_27 = this.renderer.createText(this._el_26, "wireframe", null), this._text_28 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_29 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "flat-attack"), null), 
            this._NgSelectOption_29_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_29), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_29_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_29), this.renderer, null), 
            this._text_30 = this.renderer.createText(this._el_29, "flat-attack", null), this._text_31 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "top"), null), 
            this._NgSelectOption_32_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_32), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_32_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_32), this.renderer, null), 
            this._text_33 = this.renderer.createText(this._el_32, "top", null), this._text_34 = this.renderer.createText(this._el_15, "\n                            ", null), 
            this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_15, "option", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "value", "bottom-right-corner"), null), 
            this._NgSelectOption_35_3 = new __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__.b(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_35), this.renderer, this._SelectControlValueAccessor_15_3.context), 
            this._NgSelectMultipleOption_35_4 = new __WEBPACK_IMPORTED_MODULE_24__node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__.a(new __WEBPACK_IMPORTED_MODULE_26__angular_core_src_linker_element_ref__.a(this._el_35), this.renderer, null), 
            this._text_36 = this.renderer.createText(this._el_35, "bottom-right-corner", null), 
            this._text_37 = this.renderer.createText(this._el_15, "\n                        ", null), 
            this._text_38 = this.renderer.createText(this._el_13, "\n                    ", null), 
            this._text_39 = this.renderer.createText(this._el_8, "\n                ", null), 
            this._text_40 = this.renderer.createText(this._el_6, "\n            ", null), this._text_41 = this.renderer.createText(this._el_4, "\n        ", null), 
            this._text_42 = this.renderer.createText(this._el_2, "\n        ", null), this._el_43 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._el_44 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_2, "br", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_45 = this.renderer.createText(this._el_2, "\n    ", null), this._text_46 = this.renderer.createText(null, "\n", null), 
            this.compView_0.create(this._DemoHead_0_3.context), this._text_47 = this.renderer.createText(parentRenderNode, "\n", null), 
            this._anchor_48 = this.renderer.createTemplateAnchor(parentRenderNode, null), this._vc_48 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_view_container__.a(48, null, this, this._anchor_48), 
            this._TemplateRef_48_4 = new __WEBPACK_IMPORTED_MODULE_27__angular_core_src_linker_template_ref__.a(this, 48, this._anchor_48);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_15, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "ngModelChange", null, "change", null, "blur", null), this.eventHandler(this.handleEvent_15));
            return this._NgModel_15_5.subscribe(this, this.eventHandler(this.handleEvent_15), !0), 
            this._viewQuery_DemoHead_0.reset([ this._DemoHead_0_3.context ]), this.context.demoHead = this._viewQuery_DemoHead_0.first, 
            this._viewQuery_templateRef_1.reset([ this._TemplateRef_48_4 ]), this.context.templateRef = this._viewQuery_templateRef_1.first, 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._el_4, this._text_5, this._el_6, this._text_7, this._el_8, this._text_9, this._el_10, this._text_11, this._text_12, this._el_13, this._text_14, this._el_15, this._text_16, this._el_17, this._text_18, this._text_19, this._el_20, this._text_21, this._text_22, this._el_23, this._text_24, this._text_25, this._el_26, this._text_27, this._text_28, this._el_29, this._text_30, this._text_31, this._el_32, this._text_33, this._text_34, this._el_35, this._text_36, this._text_37, this._text_38, this._text_39, this._text_40, this._text_41, this._text_42, this._el_43, this._el_44, this._text_45, this._text_46, this._text_47, this._anchor_48 ], [ disposable_0 ]), 
            null;
        }, View_VexDemo0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 17 <= requestNodeIndex && requestNodeIndex <= 18 ? this._NgSelectOption_17_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 17 <= requestNodeIndex && requestNodeIndex <= 18 ? this._NgSelectMultipleOption_17_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 20 <= requestNodeIndex && requestNodeIndex <= 21 ? this._NgSelectOption_20_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 20 <= requestNodeIndex && requestNodeIndex <= 21 ? this._NgSelectMultipleOption_20_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 23 <= requestNodeIndex && requestNodeIndex <= 24 ? this._NgSelectOption_23_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 23 <= requestNodeIndex && requestNodeIndex <= 24 ? this._NgSelectMultipleOption_23_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 26 <= requestNodeIndex && requestNodeIndex <= 27 ? this._NgSelectOption_26_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 26 <= requestNodeIndex && requestNodeIndex <= 27 ? this._NgSelectMultipleOption_26_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 29 <= requestNodeIndex && requestNodeIndex <= 30 ? this._NgSelectOption_29_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 29 <= requestNodeIndex && requestNodeIndex <= 30 ? this._NgSelectMultipleOption_29_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 32 <= requestNodeIndex && requestNodeIndex <= 33 ? this._NgSelectOption_32_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 32 <= requestNodeIndex && requestNodeIndex <= 33 ? this._NgSelectMultipleOption_32_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.b && 35 <= requestNodeIndex && requestNodeIndex <= 36 ? this._NgSelectOption_35_3.context : token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_select_multiple_control_value_accessor__.b && 35 <= requestNodeIndex && requestNodeIndex <= 36 ? this._NgSelectMultipleOption_35_4.context : token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_select_control_value_accessor__.a && 15 <= requestNodeIndex && requestNodeIndex <= 37 ? this._SelectControlValueAccessor_15_3.context : token === __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_control_value_accessor__.a && 15 <= requestNodeIndex && requestNodeIndex <= 37 ? this._NG_VALUE_ACCESSOR_15_4 : token === __WEBPACK_IMPORTED_MODULE_31__angular_forms_src_directives_ng_model__.a && 15 <= requestNodeIndex && requestNodeIndex <= 37 ? this._NgModel_15_5.context : token === __WEBPACK_IMPORTED_MODULE_32__angular_forms_src_directives_ng_control__.a && 15 <= requestNodeIndex && requestNodeIndex <= 37 ? this._NgControl_15_6 : token === __WEBPACK_IMPORTED_MODULE_33__angular_forms_src_directives_ng_control_status__.a && 15 <= requestNodeIndex && requestNodeIndex <= 37 ? this._NgControlStatus_15_7.context : token === __WEBPACK_IMPORTED_MODULE_19__src_demo_app_demo_head_deam_head__.a && 0 <= requestNodeIndex && requestNodeIndex <= 46 ? this._DemoHead_0_3.context : token === __WEBPACK_IMPORTED_MODULE_27__angular_core_src_linker_template_ref__.b && 48 === requestNodeIndex ? this._TemplateRef_48_4 : notFoundResult;
        }, View_VexDemo0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = "VEX dialog plugin";
            this._DemoHead_0_3.check_title(currVal_0_0_0, throwOnChange, !1);
            var currVal_0_0_1 = "An implementation of <a href='http://github.hubspot.com/vex/docs/welcome/' target='_blank'>VEX</a>";
            this._DemoHead_0_3.check_description(currVal_0_0_1, throwOnChange, !1);
            var currVal_0_0_2 = this.context.modalCommands;
            this._DemoHead_0_3.check_modalCommands(currVal_0_0_2, throwOnChange, !1), this._DemoHead_0_3.ngDoCheck(this, this._el_0, throwOnChange), 
            this._SelectControlValueAccessor_15_3.ngDoCheck(this, this._el_15, throwOnChange);
            var currVal_15_1_0 = "theme";
            this._NgModel_15_5.check_name(currVal_15_1_0, throwOnChange, !1);
            var currVal_15_1_1 = this.context.theme;
            this._NgModel_15_5.check_model(currVal_15_1_1, throwOnChange, !1), this._NgModel_15_5.ngDoCheck(this, this._el_15, throwOnChange), 
            this._NgControlStatus_15_7.ngDoCheck(this, this._el_15, throwOnChange);
            var currVal_17_0_0 = "default";
            this._NgSelectOption_17_3.check_value(currVal_17_0_0, throwOnChange, !1), this._NgSelectOption_17_3.ngDoCheck(this, this._el_17, throwOnChange);
            var currVal_17_1_0 = "default";
            this._NgSelectMultipleOption_17_4.check_value(currVal_17_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_17_4.ngDoCheck(this, this._el_17, throwOnChange);
            var currVal_20_0_0 = "os";
            this._NgSelectOption_20_3.check_value(currVal_20_0_0, throwOnChange, !1), this._NgSelectOption_20_3.ngDoCheck(this, this._el_20, throwOnChange);
            var currVal_20_1_0 = "os";
            this._NgSelectMultipleOption_20_4.check_value(currVal_20_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_20_4.ngDoCheck(this, this._el_20, throwOnChange);
            var currVal_23_0_0 = "plain";
            this._NgSelectOption_23_3.check_value(currVal_23_0_0, throwOnChange, !1), this._NgSelectOption_23_3.ngDoCheck(this, this._el_23, throwOnChange);
            var currVal_23_1_0 = "plain";
            this._NgSelectMultipleOption_23_4.check_value(currVal_23_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_23_4.ngDoCheck(this, this._el_23, throwOnChange);
            var currVal_26_0_0 = "wireframe";
            this._NgSelectOption_26_3.check_value(currVal_26_0_0, throwOnChange, !1), this._NgSelectOption_26_3.ngDoCheck(this, this._el_26, throwOnChange);
            var currVal_26_1_0 = "wireframe";
            this._NgSelectMultipleOption_26_4.check_value(currVal_26_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_26_4.ngDoCheck(this, this._el_26, throwOnChange);
            var currVal_29_0_0 = "flat-attack";
            this._NgSelectOption_29_3.check_value(currVal_29_0_0, throwOnChange, !1), this._NgSelectOption_29_3.ngDoCheck(this, this._el_29, throwOnChange);
            var currVal_29_1_0 = "flat-attack";
            this._NgSelectMultipleOption_29_4.check_value(currVal_29_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_29_4.ngDoCheck(this, this._el_29, throwOnChange);
            var currVal_32_0_0 = "top";
            this._NgSelectOption_32_3.check_value(currVal_32_0_0, throwOnChange, !1), this._NgSelectOption_32_3.ngDoCheck(this, this._el_32, throwOnChange);
            var currVal_32_1_0 = "top";
            this._NgSelectMultipleOption_32_4.check_value(currVal_32_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_32_4.ngDoCheck(this, this._el_32, throwOnChange);
            var currVal_35_0_0 = "bottom-right-corner";
            this._NgSelectOption_35_3.check_value(currVal_35_0_0, throwOnChange, !1), this._NgSelectOption_35_3.ngDoCheck(this, this._el_35, throwOnChange);
            var currVal_35_1_0 = "bottom-right-corner";
            this._NgSelectMultipleOption_35_4.check_value(currVal_35_1_0, throwOnChange, !1), 
            this._NgSelectMultipleOption_35_4.ngDoCheck(this, this._el_35, throwOnChange), this._vc_48.detectChangesInNestedViews(throwOnChange), 
            this._NgControlStatus_15_7.checkHost(this, this, this._el_15, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_VexDemo0.prototype.destroyInternal = function() {
            this._vc_48.destroyNestedViews(), this.compView_0.destroy(), this._NgSelectOption_17_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_17_4.ngOnDestroy(), this._NgSelectOption_20_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_20_4.ngOnDestroy(), this._NgSelectOption_23_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_23_4.ngOnDestroy(), this._NgSelectOption_26_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_26_4.ngOnDestroy(), this._NgSelectOption_29_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_29_4.ngOnDestroy(), this._NgSelectOption_32_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_32_4.ngOnDestroy(), this._NgSelectOption_35_3.ngOnDestroy(), 
            this._NgSelectMultipleOption_35_4.ngOnDestroy(), this._NgModel_15_5.ngOnDestroy(), 
            this._DemoHead_0_3.ngOnDestroy();
        }, View_VexDemo0.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, ctx) {
            0 == nodeIndex && 0 == ngContentIndex && cb(this._el_2, ctx), 0 == nodeIndex && 1 == ngContentIndex && (cb(this._text_1, ctx), 
            cb(this._text_46, ctx));
        }, View_VexDemo0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 48 == nodeIndex ? new View_VexDemo1(this.viewUtils, this, 48, this._anchor_48, this._vc_48) : null;
        }, View_VexDemo0.prototype.handleEvent_15 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if (result = this._SelectControlValueAccessor_15_3.handleEvent(eventName, $event) && result, 
            "ngModelChange" == eventName) {
                var pd_sub_0 = (this.context.theme = $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_VexDemo0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_VexDemo1 = function(_super) {
        function View_VexDemo1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_VexDemo1, renderType_VexDemo, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_28 = __WEBPACK_IMPORTED_MODULE_35__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_VexDemo1, _super), View_VexDemo1.prototype.createInternal = function(rootSelector) {
            this._text_0 = this.renderer.createText(null, "\n    ", null), this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "style", "padding: 10px"), null), 
            this._text_2 = this.renderer.createText(this._el_1, "\n        ", null), this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_1, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "page-header"), null), 
            this._text_4 = this.renderer.createText(this._el_3, "\n            ", null), this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_3, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_6 = this.renderer.createText(this._el_5, "TemplateRef Example", null), 
            this._text_7 = this.renderer.createText(this._el_3, "\n        ", null), this._text_8 = this.renderer.createText(this._el_1, "\n        ", null), 
            this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_1, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "jumbotron"), null), 
            this._text_10 = this.renderer.createText(this._el_9, "\n            ", null), this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "h1", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_12 = this.renderer.createText(this._el_11, "Hello, modal!", null), this._text_13 = this.renderer.createText(this._el_9, "\n            ", null), 
            this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "p", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_15 = this.renderer.createText(this._el_14, " I'm a declarative TemplateRef!", null), 
            this._text_16 = this.renderer.createText(this._el_9, "\n            ", null), this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "p", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_18 = this.renderer.createText(this._el_17, "TemplateRef can also access the DialogRef for context and modal control:", null), 
            this._text_19 = this.renderer.createText(this._el_9, "\n            ", null), this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "pre", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_21 = this.renderer.createText(this._el_20, "", null), this._text_22 = this.renderer.createText(this._el_9, "\n            ", null), 
            this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_9, "button", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "btn btn-primary"), null), 
            this._text_24 = this.renderer.createText(this._el_23, "Close Me", null), this._text_25 = this.renderer.createText(this._el_9, "\n        ", null), 
            this._text_26 = this.renderer.createText(this._el_1, "\n    ", null), this._text_27 = this.renderer.createText(null, "\n", null), 
            this._pipe_json_0 = new __WEBPACK_IMPORTED_MODULE_34__angular_common_src_pipes_json_pipe__.a();
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_23, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_23));
            return this.init(this._text_27, this.renderer.directRenderer ? null : [ this._text_0, this._el_1, this._text_2, this._el_3, this._text_4, this._el_5, this._text_6, this._text_7, this._text_8, this._el_9, this._text_10, this._el_11, this._text_12, this._text_13, this._el_14, this._text_15, this._text_16, this._el_17, this._text_18, this._text_19, this._el_20, this._text_21, this._text_22, this._el_23, this._text_24, this._text_25, this._text_26, this._text_27 ], [ disposable_0 ]), 
            null;
        }, View_VexDemo1.prototype.detectChangesInternal = function(throwOnChange) {
            var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_35__angular_core_src_change_detection_change_detection_util__.c();
            valUnwrapper.reset();
            var currVal_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.dialogRef.context)), "");
            (valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_28, currVal_28)) && (this.renderer.setText(this._text_21, currVal_28), 
            this._expr_28 = currVal_28);
        }, View_VexDemo1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._text_0, ctx), cb(this._el_1, ctx), cb(this._text_27, ctx);
        }, View_VexDemo1.prototype.handleEvent_23 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.context.dialogRef.close(!0) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_VexDemo1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 504 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_backdrop__ = __webpack_require__(319), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_security__ = __webpack_require__(70), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_element_ref__ = __webpack_require__(27);
    /* unused harmony export Wrapper_CSSBackdrop */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CSSBackdropNgFactory;
    });
    /* unused harmony export View_CSSBackdrop0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_CSSBackdrop = function() {
        function Wrapper_CSSBackdrop(p0, p1) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_backdrop__.a(p0, p1), 
            this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b;
        }
        return Wrapper_CSSBackdrop.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_CSSBackdrop.prototype.ngOnDestroy = function() {
            this.context.ngOnDestroy();
        }, Wrapper_CSSBackdrop.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_CSSBackdrop.prototype.checkHost = function(view, componentView, el, throwOnChange) {
            var currVal_0 = this.context.cssClass;
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_0, currVal_0) && (view.renderer.setElementAttribute(el, "class", null == currVal_0 ? null : currVal_0.toString()), 
            this._expr_0 = currVal_0);
            var currVal_1 = this.context.styleStr;
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_1, currVal_1) && (view.renderer.setElementAttribute(el, "style", null == view.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_security__.b.STYLE, currVal_1) ? null : view.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_4__angular_core_src_security__.b.STYLE, currVal_1).toString()), 
            this._expr_1 = currVal_1);
        }, Wrapper_CSSBackdrop.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_CSSBackdrop.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_CSSBackdrop;
    }(), renderType_CSSBackdrop_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__.b.None, [], {}), View_CSSBackdrop_Host0 = function(_super) {
        function View_CSSBackdrop_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_CSSBackdrop_Host0, renderType_CSSBackdrop_Host, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_CSSBackdrop_Host0, _super), View_CSSBackdrop_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "css-backdrop", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_CSSBackdrop0(this.viewUtils, this, 0, this._el_0), this._CSSBackdrop_0_3 = new Wrapper_CSSBackdrop(new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this.compView_0.create(this._CSSBackdrop_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._CSSBackdrop_0_3.context);
        }, View_CSSBackdrop_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_backdrop__.a && 0 === requestNodeIndex ? this._CSSBackdrop_0_3.context : notFoundResult;
        }, View_CSSBackdrop_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._CSSBackdrop_0_3.ngDoCheck(this, this._el_0, throwOnChange), this._CSSBackdrop_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange), 
            this.compView_0.internalDetectChanges(throwOnChange);
        }, View_CSSBackdrop_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this._CSSBackdrop_0_3.ngOnDestroy();
        }, View_CSSBackdrop_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_CSSBackdrop_Host0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), CSSBackdropNgFactory = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_component_factory__.b("css-backdrop", View_CSSBackdrop_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_backdrop__.a), styles_CSSBackdrop = [], renderType_CSSBackdrop = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__.b.None, styles_CSSBackdrop, {}), View_CSSBackdrop0 = function(_super) {
        function View_CSSBackdrop0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_CSSBackdrop0, renderType_CSSBackdrop, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_7__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_CSSBackdrop0, _super), View_CSSBackdrop0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this.init(null, this.renderer.directRenderer ? null : [], null), null;
        }, View_CSSBackdrop0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a);
}, /* 505 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_dialog_container__ = __webpack_require__(320), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_element_ref__ = __webpack_require__(27);
    /* unused harmony export Wrapper_CSSDialogContainer */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CSSDialogContainerNgFactory;
    });
    /* unused harmony export View_CSSDialogContainer0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_CSSDialogContainer = function() {
        function Wrapper_CSSDialogContainer(p0, p1, p2) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_dialog_container__.a(p0, p1, p2);
        }
        return Wrapper_CSSDialogContainer.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_CSSDialogContainer.prototype.ngOnDestroy = function() {
            this.context.ngOnDestroy();
        }, Wrapper_CSSDialogContainer.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_CSSDialogContainer.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_CSSDialogContainer.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_CSSDialogContainer.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_CSSDialogContainer;
    }(), renderType_CSSDialogContainer_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_CSSDialogContainer_Host0 = function(_super) {
        function View_CSSDialogContainer_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_CSSDialogContainer_Host0, renderType_CSSDialogContainer_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_CSSDialogContainer_Host0, _super), View_CSSDialogContainer_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "css-dialog-container", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray4(4, "role", "dialog", "tabindex", "-1"), rootSelector, null), 
            this.compView_0 = new View_CSSDialogContainer0(this.viewUtils, this, 0, this._el_0), 
            this._CSSDialogContainer_0_3 = new Wrapper_CSSDialogContainer(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this.compView_0.create(this._CSSDialogContainer_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._CSSDialogContainer_0_3.context);
        }, View_CSSDialogContainer_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_dialog_container__.a && 0 === requestNodeIndex ? this._CSSDialogContainer_0_3.context : notFoundResult;
        }, View_CSSDialogContainer_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._CSSDialogContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_CSSDialogContainer_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this._CSSDialogContainer_0_3.ngOnDestroy();
        }, View_CSSDialogContainer_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_CSSDialogContainer_Host0.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, ctx) {}, 
        View_CSSDialogContainer_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), CSSDialogContainerNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("css-dialog-container", View_CSSDialogContainer_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_components_css_dialog_container__.a), styles_CSSDialogContainer = [], renderType_CSSDialogContainer = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 1, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_CSSDialogContainer, {}), View_CSSDialogContainer0 = function(_super) {
        function View_CSSDialogContainer0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_CSSDialogContainer0, renderType_CSSDialogContainer, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_CSSDialogContainer0, _super), View_CSSDialogContainer0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this.projectNodes(parentRenderNode, 0), this.init(null, this.renderer.directRenderer ? null : [], null), 
            null;
        }, View_CSSDialogContainer0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 506 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_component__ = __webpack_require__(325), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_8__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__ = __webpack_require__(107), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_12__components_swap_component_directive_ngfactory__ = __webpack_require__(312), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(56), __WEBPACK_IMPORTED_MODULE_14__src_lib_components_swap_component_directive__ = __webpack_require__(155);
    /* unused harmony export Wrapper_ModalOverlay */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalOverlayNgFactory;
    });
    /* unused harmony export View_ModalOverlay0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_ModalOverlay = function() {
        function Wrapper_ModalOverlay(p0, p1, p2, p3) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_component__.a(p0, p1, p2, p3);
        }
        return Wrapper_ModalOverlay.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_ModalOverlay.prototype.ngOnDestroy = function() {
            this.context.ngOnDestroy();
        }, Wrapper_ModalOverlay.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_ModalOverlay.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_ModalOverlay.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            if ("body:keydown" == eventName) {
                var pd_sub_0 = this.context.documentKeypress($event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, Wrapper_ModalOverlay.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_ModalOverlay;
    }(), renderType_ModalOverlay_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_ModalOverlay_Host0 = function(_super) {
        function View_ModalOverlay_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_ModalOverlay_Host0, renderType_ModalOverlay_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_ModalOverlay_Host0, _super), View_ModalOverlay_Host0.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-overlay", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this._vc_0 = new __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_container__.a(0, null, this, this._el_0), 
            this.compView_0 = new View_ModalOverlay0(this.viewUtils, this, 0, this._el_0), this._ModalOverlay_0_5 = new Wrapper_ModalOverlay(this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__src_lib_models_dialog_ref__.a, this.parentIndex), this._vc_0.vcRef, new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this.compView_0.create(this._ModalOverlay_0_5.context), this._el_1 = this.renderer.createTemplateAnchor(null, null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "keydown", "body"), this.eventHandler(this.handleEvent_0));
            return this.init(this._el_1, this.renderer.directRenderer ? null : [ this._el_0 ], [ disposable_0 ]), 
            new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._ModalOverlay_0_5.context);
        }, View_ModalOverlay_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_component__.a && 0 === requestNodeIndex ? this._ModalOverlay_0_5.context : notFoundResult;
        }, View_ModalOverlay_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._ModalOverlay_0_5.ngDoCheck(this, this._el_0, throwOnChange), this._vc_0.detectChangesInNestedViews(throwOnChange), 
            this.compView_0.internalDetectChanges(throwOnChange);
        }, View_ModalOverlay_Host0.prototype.destroyInternal = function() {
            this._vc_0.destroyNestedViews(), this.compView_0.destroy(), this._ModalOverlay_0_5.ngOnDestroy();
        }, View_ModalOverlay_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._vc_0.nativeElement, ctx), this._vc_0.visitNestedViewRootNodes(cb, ctx), 
            cb(this._el_1, ctx);
        }, View_ModalOverlay_Host0.prototype.handleEvent_0 = function(eventName, $event) {
            this.compView_0.markPathToRootAsCheckOnce();
            var result = !0;
            return result = this._ModalOverlay_0_5.handleEvent(eventName, $event) && result;
        }, View_ModalOverlay_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), ModalOverlayNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.b("modal-overlay", View_ModalOverlay_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_overlay_overlay_component__.a), styles_ModalOverlay = [], renderType_ModalOverlay = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_ModalOverlay, {}), View_ModalOverlay0 = function(_super) {
        function View_ModalOverlay0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_ModalOverlay0, renderType_ModalOverlay, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_ModalOverlay0, _super), View_ModalOverlay0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._viewQuery_innerView_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__.a(), 
            this._viewQuery_template_1 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__.a(), 
            this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null), this._vc_0 = new __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_container__.a(0, null, this, this._anchor_0), 
            this._TemplateRef_0_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.a(this, 0, this._anchor_0), 
            this._text_1 = this.renderer.createText(parentRenderNode, "\n", null), this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null), 
            this._vc_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_container__.a(2, null, this, this._anchor_2), 
            this._TemplateRef_2_4 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.a(this, 2, this._anchor_2), 
            this._text_3 = this.renderer.createText(parentRenderNode, "\n", null), this._viewQuery_innerView_0.reset([ this._vc_0.vcRef ]), 
            this.context.innerVcr = this._viewQuery_innerView_0.first, this._viewQuery_template_1.reset([ this._TemplateRef_2_4 ]), 
            this.context.template = this._viewQuery_template_1.first, this.init(null, this.renderer.directRenderer ? null : [ this._anchor_0, this._text_1, this._anchor_2, this._text_3 ], null), 
            null;
        }, View_ModalOverlay0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.b && 0 === requestNodeIndex ? this._TemplateRef_0_5 : token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.b && 2 === requestNodeIndex ? this._TemplateRef_2_4 : notFoundResult;
        }, View_ModalOverlay0.prototype.detectChangesInternal = function(throwOnChange) {
            this._vc_0.detectChangesInNestedViews(throwOnChange), this._vc_2.detectChangesInNestedViews(throwOnChange);
        }, View_ModalOverlay0.prototype.destroyInternal = function() {
            this._vc_0.destroyNestedViews(), this._vc_2.destroyNestedViews();
        }, View_ModalOverlay0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 0 == nodeIndex ? new View_ModalOverlay1(this.viewUtils, this, 0, this._anchor_0, this._vc_0) : 2 == nodeIndex ? new View_ModalOverlay2(this.viewUtils, this, 2, this._anchor_2, this._vc_2) : null;
        }, View_ModalOverlay0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_ModalOverlay1 = function(_super) {
        function View_ModalOverlay1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_ModalOverlay1, renderType_ModalOverlay, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_ModalOverlay1, _super), View_ModalOverlay1.prototype.createInternal = function(rootSelector) {
            return this._el_0 = this.renderer.createTemplateAnchor(null, null), this.init(this._el_0, this.renderer.directRenderer ? null : [], null), 
            null;
        }, View_ModalOverlay1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_ModalOverlay1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_ModalOverlay2 = function(_super) {
        function View_ModalOverlay2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_ModalOverlay2, renderType_ModalOverlay, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_ModalOverlay2, _super), View_ModalOverlay2.prototype.createInternal = function(rootSelector) {
            return this._text_0 = this.renderer.createText(null, "\n    ", null), this._anchor_1 = this.renderer.createTemplateAnchor(null, null), 
            this._vc_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_container__.a(1, null, this, this._anchor_1), 
            this._TemplateRef_1_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.a(this, 1, this._anchor_1), 
            this._SwapComponentDirective_1_6 = new __WEBPACK_IMPORTED_MODULE_12__components_swap_component_directive_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_component_factory_resolver__.a, this.parentIndex), this._vc_1.vcRef, this._TemplateRef_1_5), 
            this._text_2 = this.renderer.createText(null, "\n", null), this.init(this._text_2, this.renderer.directRenderer ? null : [ this._text_0, this._anchor_1, this._text_2 ], null), 
            null;
        }, View_ModalOverlay2.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__.b && 1 === requestNodeIndex ? this._TemplateRef_1_5 : token === __WEBPACK_IMPORTED_MODULE_14__src_lib_components_swap_component_directive__.a && 1 === requestNodeIndex ? this._SwapComponentDirective_1_6.context : notFoundResult;
        }, View_ModalOverlay2.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_1_0_0 = this.context.$implicit.bindings;
            this._SwapComponentDirective_1_6.check_swapCmpBindings(currVal_1_0_0, throwOnChange, !1);
            var currVal_1_0_1 = this.context.$implicit.projectableNodes;
            this._SwapComponentDirective_1_6.check_swapCmpProjectables(currVal_1_0_1, throwOnChange, !1);
            var currVal_1_0_2 = this.context.$implicit.component;
            this._SwapComponentDirective_1_6.check_swapCmp(currVal_1_0_2, throwOnChange, !1), 
            this._SwapComponentDirective_1_6.ngDoCheck(this, this._anchor_1, throwOnChange), 
            this._vc_1.detectChangesInNestedViews(throwOnChange);
        }, View_ModalOverlay2.prototype.destroyInternal = function() {
            this._vc_1.destroyNestedViews(), this._SwapComponentDirective_1_6.ngOnDestroy();
        }, View_ModalOverlay2.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._text_0, ctx), cb(this._vc_1.nativeElement, ctx), this._vc_1.visitNestedViewRootNodes(cb, ctx), 
            cb(this._text_2, ctx);
        }, View_ModalOverlay2.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 1 == nodeIndex ? new View_ModalOverlay3(this.viewUtils, this, 1, this._anchor_1, this._vc_1) : null;
        }, View_ModalOverlay2;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_ModalOverlay3 = function(_super) {
        function View_ModalOverlay3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_ModalOverlay3, renderType_ModalOverlay, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_ModalOverlay3, _super), View_ModalOverlay3.prototype.createInternal = function(rootSelector) {
            return this._el_0 = this.renderer.createTemplateAnchor(null, null), this.init(this._el_0, this.renderer.directRenderer ? null : [], null), 
            null;
        }, View_ModalOverlay3.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_ModalOverlay3;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 507 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__ = __webpack_require__(221), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__ = __webpack_require__(209), __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(210), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(90), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_for__ = __webpack_require__(102), __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_class__ = __webpack_require__(101), __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_common_src_directives_ng_switch_ngfactory__ = __webpack_require__(479), __WEBPACK_IMPORTED_MODULE_19__node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(146), __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_if__ = __webpack_require__(89), __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_switch__ = __webpack_require__(125), __WEBPACK_IMPORTED_MODULE_22__angular_core_src_security__ = __webpack_require__(70);
    /* unused harmony export Wrapper_BSModalFooter */
    /* unused harmony export Wrapper_BSMessageModalTitle */
    /* unused harmony export Wrapper_BSMessageModalBody */
    /* unused harmony export Wrapper_BSMessageModal */
    /* unused harmony export BSModalFooterNgFactory */
    /* unused harmony export View_BSModalFooter0 */
    /* unused harmony export BSMessageModalTitleNgFactory */
    /* unused harmony export View_BSMessageModalTitle0 */
    /* unused harmony export BSMessageModalBodyNgFactory */
    /* unused harmony export View_BSMessageModalBody0 */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSMessageModalNgFactory;
    });
    /* unused harmony export View_BSMessageModal0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_BSModalFooter = function() {
        function Wrapper_BSModalFooter(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.a(p0);
        }
        return Wrapper_BSModalFooter.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BSModalFooter.prototype.ngOnDestroy = function() {}, Wrapper_BSModalFooter.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BSModalFooter.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BSModalFooter.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BSModalFooter.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BSModalFooter;
    }(), Wrapper_BSMessageModalTitle = function() {
        function Wrapper_BSMessageModalTitle(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.b(p0);
        }
        return Wrapper_BSMessageModalTitle.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BSMessageModalTitle.prototype.ngOnDestroy = function() {}, Wrapper_BSMessageModalTitle.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BSMessageModalTitle.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BSMessageModalTitle.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BSMessageModalTitle.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BSMessageModalTitle;
    }(), Wrapper_BSMessageModalBody = function() {
        function Wrapper_BSMessageModalBody(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.c(p0);
        }
        return Wrapper_BSMessageModalBody.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BSMessageModalBody.prototype.ngOnDestroy = function() {}, Wrapper_BSMessageModalBody.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BSMessageModalBody.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BSMessageModalBody.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BSMessageModalBody.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BSMessageModalBody;
    }(), Wrapper_BSMessageModal = function() {
        function Wrapper_BSMessageModal(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.d(p0);
        }
        return Wrapper_BSMessageModal.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BSMessageModal.prototype.ngOnDestroy = function() {}, Wrapper_BSMessageModal.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BSMessageModal.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BSMessageModal.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BSMessageModal.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BSMessageModal;
    }(), renderType_BSModalFooter_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BSModalFooter_Host0 = function(_super) {
        function View_BSModalFooter_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSModalFooter_Host0, renderType_BSModalFooter_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSModalFooter_Host0, _super), View_BSModalFooter_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-footer", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_BSModalFooter0(this.viewUtils, this, 0, this._el_0), 
            this._BSModalFooter_0_3 = new Wrapper_BSModalFooter(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._BSModalFooter_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BSModalFooter_0_3.context);
        }, View_BSModalFooter_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.a && 0 === requestNodeIndex ? this._BSModalFooter_0_3.context : notFoundResult;
        }, View_BSModalFooter_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BSModalFooter_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BSModalFooter_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_BSModalFooter_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSModalFooter_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BSModalFooterNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("modal-footer", View_BSModalFooter_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.a), styles_BSModalFooter = [], renderType_BSModalFooter = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_BSModalFooter, {}), View_BSModalFooter0 = function(_super) {
        function View_BSModalFooter0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSModalFooter0, renderType_BSModalFooter, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSModalFooter0, _super), View_BSModalFooter0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._NgClass_0_3 = new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_keyvalue_differs__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__.a(2, 0, this, this._anchor_2), 
            this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.a(this, 2, this._anchor_2), 
            this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_common_src_directives_ng_for_ngfactory__.a(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.ref), 
            this._text_3 = this.renderer.createText(this._el_0, "\n", null), this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._anchor_2, this._text_3 ], null), 
            null;
        }, View_BSModalFooter0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.b && 2 === requestNodeIndex ? this._TemplateRef_2_5 : token === __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_for__.a && 2 === requestNodeIndex ? this._NgFor_2_6.context : token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_class__.a && 0 <= requestNodeIndex && requestNodeIndex <= 3 ? this._NgClass_0_3.context : notFoundResult;
        }, View_BSModalFooter0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = this.context.dialog.context.footerClass;
            this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, !1), this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_2_0_0 = this.context.dialog.context.buttons;
            this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, !1), this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange), 
            this._vc_2.detectChangesInNestedViews(throwOnChange);
        }, View_BSModalFooter0.prototype.destroyInternal = function() {
            this._vc_2.destroyNestedViews();
        }, View_BSModalFooter0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 2 == nodeIndex ? new View_BSModalFooter1(this.viewUtils, this, 2, this._anchor_2, this._vc_2) : null;
        }, View_BSModalFooter0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_BSModalFooter1 = function(_super) {
        function View_BSModalFooter1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_BSModalFooter1, renderType_BSModalFooter, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_3 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BSModalFooter1, _super), View_BSModalFooter1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "button", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._NgClass_0_3 = new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__.a(this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentView.parentIndex), this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_keyvalue_differs__.a, this.parentView.parentIndex), new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this._text_1 = this.renderer.createText(this._el_0, "", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_0));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1 ], [ disposable_0 ]), 
            null;
        }, View_BSModalFooter1.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_class__.a && 0 <= requestNodeIndex && requestNodeIndex <= 1 ? this._NgClass_0_3.context : notFoundResult;
        }, View_BSModalFooter1.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = this.context.$implicit.cssClass;
            this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, !1), this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.$implicit.caption, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_3, currVal_3) && (this.renderer.setText(this._text_1, currVal_3), 
            this._expr_3 = currVal_3);
        }, View_BSModalFooter1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSModalFooter1.prototype.handleEvent_0 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.parentView.context.onClick(this.context.$implicit, $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_BSModalFooter1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), renderType_BSMessageModalTitle_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BSMessageModalTitle_Host0 = function(_super) {
        function View_BSMessageModalTitle_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSMessageModalTitle_Host0, renderType_BSMessageModalTitle_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSMessageModalTitle_Host0, _super), View_BSMessageModalTitle_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-title", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_BSMessageModalTitle0(this.viewUtils, this, 0, this._el_0), 
            this._BSMessageModalTitle_0_3 = new Wrapper_BSMessageModalTitle(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._BSMessageModalTitle_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BSMessageModalTitle_0_3.context);
        }, View_BSMessageModalTitle_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.b && 0 === requestNodeIndex ? this._BSMessageModalTitle_0_3.context : notFoundResult;
        }, View_BSMessageModalTitle_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BSMessageModalTitle_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BSMessageModalTitle_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_BSMessageModalTitle_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModalTitle_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BSMessageModalTitleNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("modal-title", View_BSMessageModalTitle_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.b), styles_BSMessageModalTitle = [], renderType_BSMessageModalTitle = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_BSMessageModalTitle, {}), View_BSMessageModalTitle0 = function(_super) {
        function View_BSMessageModalTitle0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSMessageModalTitle0, renderType_BSMessageModalTitle, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSMessageModalTitle0, _super), View_BSMessageModalTitle0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._NgClass_0_3 = new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_keyvalue_differs__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this._NgSwitch_0_4 = new __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_common_src_directives_ng_switch_ngfactory__.a(), 
            this._text_1 = this.renderer.createText(this._el_0, "\n      ", null), this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__.a(2, 0, this, this._anchor_2), 
            this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.a(this, 2, this._anchor_2), 
            this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_19__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_2.vcRef, this._TemplateRef_2_5), 
            this._text_3 = this.renderer.createText(this._el_0, "\n      ", null), this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_4 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__.a(4, 0, this, this._anchor_4), 
            this._TemplateRef_4_5 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.a(this, 4, this._anchor_4), 
            this._NgSwitchCase_4_6 = new __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_common_src_directives_ng_switch_ngfactory__.b(this._vc_4.vcRef, this._TemplateRef_4_5, this._NgSwitch_0_4.context), 
            this._text_5 = this.renderer.createText(this._el_0, "\n      ", null), this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_6 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__.a(6, 0, this, this._anchor_6), 
            this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.a(this, 6, this._anchor_6), 
            this._NgSwitchDefault_6_6 = new __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_common_src_directives_ng_switch_ngfactory__.c(this._vc_6.vcRef, this._TemplateRef_6_5, this._NgSwitch_0_4.context), 
            this._text_7 = this.renderer.createText(this._el_0, "\n ", null), this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._anchor_2, this._text_3, this._anchor_4, this._text_5, this._anchor_6, this._text_7 ], null), 
            null;
        }, View_BSMessageModalTitle0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.b && 2 === requestNodeIndex ? this._TemplateRef_2_5 : token === __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_if__.a && 2 === requestNodeIndex ? this._NgIf_2_6.context : token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.b && 4 === requestNodeIndex ? this._TemplateRef_4_5 : token === __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_switch__.b && 4 === requestNodeIndex ? this._NgSwitchCase_4_6.context : token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.b && 6 === requestNodeIndex ? this._TemplateRef_6_5 : token === __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_switch__.c && 6 === requestNodeIndex ? this._NgSwitchDefault_6_6.context : token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_class__.a && 0 <= requestNodeIndex && requestNodeIndex <= 7 ? this._NgClass_0_3.context : token === __WEBPACK_IMPORTED_MODULE_21__angular_common_src_directives_ng_switch__.a && 0 <= requestNodeIndex && requestNodeIndex <= 7 ? this._NgSwitch_0_4.context : notFoundResult;
        }, View_BSMessageModalTitle0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = this.context.context.headerClass;
            this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, !1), this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_0_1_0 = this.context.titleHtml;
            this._NgSwitch_0_4.check_ngSwitch(currVal_0_1_0, throwOnChange, !1), this._NgSwitch_0_4.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_2_0_0 = this.context.context.showClose;
            this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, !1), this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
            var currVal_4_0_0 = 1;
            this._NgSwitchCase_4_6.check_ngSwitchCase(currVal_4_0_0, throwOnChange, !1), this._NgSwitchCase_4_6.ngDoCheck(this, this._anchor_4, throwOnChange), 
            this._NgSwitchDefault_6_6.ngDoCheck(this, this._anchor_6, throwOnChange), this._vc_2.detectChangesInNestedViews(throwOnChange), 
            this._vc_4.detectChangesInNestedViews(throwOnChange), this._vc_6.detectChangesInNestedViews(throwOnChange);
        }, View_BSMessageModalTitle0.prototype.destroyInternal = function() {
            this._vc_2.destroyNestedViews(), this._vc_4.destroyNestedViews(), this._vc_6.destroyNestedViews();
        }, View_BSMessageModalTitle0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 2 == nodeIndex ? new View_BSMessageModalTitle1(this.viewUtils, this, 2, this._anchor_2, this._vc_2) : 4 == nodeIndex ? new View_BSMessageModalTitle2(this.viewUtils, this, 4, this._anchor_4, this._vc_4) : 6 == nodeIndex ? new View_BSMessageModalTitle3(this.viewUtils, this, 6, this._anchor_6, this._vc_6) : null;
        }, View_BSMessageModalTitle0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_BSMessageModalTitle1 = function(_super) {
        function View_BSMessageModalTitle1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_BSMessageModalTitle1, renderType_BSMessageModalTitle, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_BSMessageModalTitle1, _super), View_BSMessageModalTitle1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "button", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(6, "aria-label", "Close", "class", "close", "type", "button"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n          ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "span", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "aria-hidden", "true"), null), 
            this._text_3 = this.renderer.createText(this._el_2, "×", null), this._text_4 = this.renderer.createText(this._el_0, "\n      ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_0));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._text_4 ], [ disposable_0 ]), 
            null;
        }, View_BSMessageModalTitle1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModalTitle1.prototype.handleEvent_0 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.parentView.context.dialog.dismiss() !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_BSMessageModalTitle1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_BSMessageModalTitle2 = function(_super) {
        function View_BSMessageModalTitle2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_BSMessageModalTitle2, renderType_BSMessageModalTitle, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_1 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BSMessageModalTitle2, _super), View_BSMessageModalTitle2.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            null;
        }, View_BSMessageModalTitle2.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_1 = this.parentView.context.context.titleHtml;
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_1, currVal_1) && (this.renderer.setElementProperty(this._el_0, "innerHTML", this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_22__angular_core_src_security__.b.HTML, currVal_1)), 
            this._expr_1 = currVal_1);
        }, View_BSMessageModalTitle2.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModalTitle2;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_BSMessageModalTitle3 = function(_super) {
        function View_BSMessageModalTitle3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_BSMessageModalTitle3, renderType_BSMessageModalTitle, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_2 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BSMessageModalTitle3, _super), View_BSMessageModalTitle3.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "h3", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "modal-title"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "", null), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1 ], null), 
            null;
        }, View_BSMessageModalTitle3.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.parentView.context.context.title, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_2, currVal_2) && (this.renderer.setText(this._text_1, currVal_2), 
            this._expr_2 = currVal_2);
        }, View_BSMessageModalTitle3.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModalTitle3;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), renderType_BSMessageModalBody_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BSMessageModalBody_Host0 = function(_super) {
        function View_BSMessageModalBody_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSMessageModalBody_Host0, renderType_BSMessageModalBody_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSMessageModalBody_Host0, _super), View_BSMessageModalBody_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-body", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_BSMessageModalBody0(this.viewUtils, this, 0, this._el_0), 
            this._BSMessageModalBody_0_3 = new Wrapper_BSMessageModalBody(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._BSMessageModalBody_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BSMessageModalBody_0_3.context);
        }, View_BSMessageModalBody_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.c && 0 === requestNodeIndex ? this._BSMessageModalBody_0_3.context : notFoundResult;
        }, View_BSMessageModalBody_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BSMessageModalBody_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BSMessageModalBody_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_BSMessageModalBody_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModalBody_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BSMessageModalBodyNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("modal-body", View_BSMessageModalBody_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.c), styles_BSMessageModalBody = [ ".form-group {\n    margin-top: 10px;\n  }" ], renderType_BSMessageModalBody = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_BSMessageModalBody, {}), View_BSMessageModalBody0 = function(_super) {
        function View_BSMessageModalBody0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_BSMessageModalBody0, renderType_BSMessageModalBody, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_11 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BSMessageModalBody0, _super), View_BSMessageModalBody0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._NgClass_0_3 = new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_src_directives_ng_class_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_keyvalue_differs__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this._text_1 = this.renderer.createText(this._el_0, " \n    ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._text_3 = this.renderer.createText(this._el_0, "\n      ", null), this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_4 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__.a(4, 0, this, this._anchor_4), 
            this._TemplateRef_4_5 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.a(this, 4, this._anchor_4), 
            this._NgIf_4_6 = new __WEBPACK_IMPORTED_MODULE_19__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_4.vcRef, this._TemplateRef_4_5), 
            this._text_5 = this.renderer.createText(this._el_0, "\n    ", null), this._text_6 = this.renderer.createText(parentRenderNode, "\n", null), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._anchor_4, this._text_5, this._text_6 ], null), 
            null;
        }, View_BSMessageModalBody0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_template_ref__.b && 4 === requestNodeIndex ? this._TemplateRef_4_5 : token === __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_if__.a && 4 === requestNodeIndex ? this._NgIf_4_6.context : token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_class__.a && 0 <= requestNodeIndex && requestNodeIndex <= 5 ? this._NgClass_0_3.context : notFoundResult;
        }, View_BSMessageModalBody0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = this.context.context.bodyClass;
            this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, !1), this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
            var currVal_4_0_0 = this.context.context.showInput;
            this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, !1), this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange), 
            this._vc_4.detectChangesInNestedViews(throwOnChange);
            var currVal_11 = this.context.context.message;
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_11, currVal_11) && (this.renderer.setElementProperty(this._el_2, "innerHTML", this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_22__angular_core_src_security__.b.HTML, currVal_11)), 
            this._expr_11 = currVal_11);
        }, View_BSMessageModalBody0.prototype.destroyInternal = function() {
            this._vc_4.destroyNestedViews();
        }, View_BSMessageModalBody0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 4 == nodeIndex ? new View_BSMessageModalBody1(this.viewUtils, this, 4, this._anchor_4, this._vc_4) : null;
        }, View_BSMessageModalBody0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), View_BSMessageModalBody1 = function(_super) {
        function View_BSMessageModalBody1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_BSMessageModalBody1, renderType_BSMessageModalBody, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_4 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_5 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BSMessageModalBody1, _super), View_BSMessageModalBody1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "form-group"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n        ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "input", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(8, "autofocus", "", "class", "form-control", "name", "bootstrap", "type", "text"), null), 
            this._text_3 = this.renderer.createText(this._el_0, "\n      ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_2, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray2(2, "change", null), this.eventHandler(this.handleEvent_2));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3 ], [ disposable_0 ]), 
            null;
        }, View_BSMessageModalBody1.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_4 = this.parentView.context.context.defaultValue;
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_4, currVal_4) && (this.renderer.setElementProperty(this._el_2, "value", currVal_4), 
            this._expr_4 = currVal_4);
            var currVal_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.parentView.context.context.placeholder, "");
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_5, currVal_5) && (this.renderer.setElementProperty(this._el_2, "placeholder", currVal_5), 
            this._expr_5 = currVal_5);
        }, View_BSMessageModalBody1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModalBody1.prototype.handleEvent_2 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("change" == eventName) {
                var pd_sub_0 = (this.parentView.context.context.defaultValue = this._el_2.value) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_BSMessageModalBody1;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), renderType_BSMessageModal_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BSMessageModal_Host0 = function(_super) {
        function View_BSMessageModal_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSMessageModal_Host0, renderType_BSMessageModal_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSMessageModal_Host0, _super), View_BSMessageModal_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-content", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_BSMessageModal0(this.viewUtils, this, 0, this._el_0), 
            this._BSMessageModal_0_3 = new Wrapper_BSMessageModal(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._BSMessageModal_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BSMessageModal_0_3.context);
        }, View_BSMessageModal_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.d && 0 === requestNodeIndex ? this._BSMessageModal_0_3.context : notFoundResult;
        }, View_BSMessageModal_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BSMessageModal_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BSMessageModal_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_BSMessageModal_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSMessageModal_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BSMessageModalNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("modal-content", View_BSMessageModal_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.d), styles_BSMessageModal = [], renderType_BSMessageModal = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_BSMessageModal, {}), View_BSMessageModal0 = function(_super) {
        function View_BSMessageModal0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSMessageModal0, renderType_BSMessageModal, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSMessageModal0, _super), View_BSMessageModal0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "modal-title", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this.compView_0 = new View_BSMessageModalTitle0(this.viewUtils, this, 0, this._el_0), 
            this._BSMessageModalTitle_0_3 = new Wrapper_BSMessageModalTitle(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._BSMessageModalTitle_0_3.context), this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "modal-body", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this.compView_1 = new View_BSMessageModalBody0(this.viewUtils, this, 1, this._el_1), 
            this._BSMessageModalBody_1_3 = new Wrapper_BSMessageModalBody(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_1.create(this._BSMessageModalBody_1_3.context), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "modal-footer", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this.compView_2 = new View_BSModalFooter0(this.viewUtils, this, 2, this._el_2), 
            this._BSModalFooter_2_3 = new Wrapper_BSModalFooter(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_2.create(this._BSModalFooter_2_3.context), this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._el_1, this._el_2 ], null), 
            null;
        }, View_BSMessageModal0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.b && 0 === requestNodeIndex ? this._BSMessageModalTitle_0_3.context : token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.c && 1 === requestNodeIndex ? this._BSMessageModalBody_1_3.context : token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_message_modal_component__.a && 2 === requestNodeIndex ? this._BSModalFooter_2_3.context : notFoundResult;
        }, View_BSMessageModal0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BSMessageModalTitle_0_3.ngDoCheck(this, this._el_0, throwOnChange), this._BSMessageModalBody_1_3.ngDoCheck(this, this._el_1, throwOnChange), 
            this._BSModalFooter_2_3.ngDoCheck(this, this._el_2, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange), 
            this.compView_1.internalDetectChanges(throwOnChange), this.compView_2.internalDetectChanges(throwOnChange);
        }, View_BSMessageModal0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this.compView_1.destroy(), this.compView_2.destroy();
        }, View_BSMessageModal0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 508 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_modal_container_component__ = __webpack_require__(222), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_element_ref__ = __webpack_require__(27), __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_src_directives_ng_class_ngfactory__ = __webpack_require__(209), __WEBPACK_IMPORTED_MODULE_10__overlay_overlay_directives_ngfactory__ = __webpack_require__(147), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(90), __WEBPACK_IMPORTED_MODULE_14__src_lib_overlay_overlay_directives__ = __webpack_require__(96), __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_class__ = __webpack_require__(101);
    /* unused harmony export Wrapper_BSModalContainer */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalContainerNgFactory;
    });
    /* unused harmony export View_BSModalContainer0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_BSModalContainer = function() {
        function Wrapper_BSModalContainer(p0, p1, p2) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_modal_container_component__.a(p0, p1, p2);
        }
        return Wrapper_BSModalContainer.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_BSModalContainer.prototype.ngOnDestroy = function() {
            this.context.ngOnDestroy();
        }, Wrapper_BSModalContainer.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_BSModalContainer.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_BSModalContainer.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_BSModalContainer.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_BSModalContainer;
    }(), renderType_BSModalContainer_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, [], {}), View_BSModalContainer_Host0 = function(_super) {
        function View_BSModalContainer_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_BSModalContainer_Host0, renderType_BSModalContainer_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_BSModalContainer_Host0, _super), View_BSModalContainer_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "bs-modal-container", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(8, "class", "modal fade", "role", "dialog", "style", "position: absolute; display: block", "tabindex", "-1"), rootSelector, null), 
            this.compView_0 = new View_BSModalContainer0(this.viewUtils, this, 0, this._el_0), 
            this._BSModalContainer_0_3 = new Wrapper_BSModalContainer(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this.compView_0.create(this._BSModalContainer_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._BSModalContainer_0_3.context);
        }, View_BSModalContainer_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_modal_container_component__.a && 0 === requestNodeIndex ? this._BSModalContainer_0_3.context : notFoundResult;
        }, View_BSModalContainer_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._BSModalContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_BSModalContainer_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this._BSModalContainer_0_3.ngOnDestroy();
        }, View_BSModalContainer_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_BSModalContainer_Host0.prototype.visitProjectableNodesInternal = function(nodeIndex, ngContentIndex, cb, ctx) {}, 
        View_BSModalContainer_Host0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a), BSModalContainerNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.b("bs-modal-container", View_BSModalContainer_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_bootstrap_modal_container_component__.a), styles_BSModalContainer = [], renderType_BSModalContainer = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderComponentType("", 1, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__.b.None, styles_BSModalContainer, {}), View_BSModalContainer0 = function(_super) {
        function View_BSModalContainer0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_BSModalContainer0, renderType_BSModalContainer, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_8 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_9 = __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_BSModalContainer0, _super), View_BSModalContainer0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this._NgClass_0_3 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_src_directives_ng_class_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_keyvalue_differs__.a, this.parentIndex), new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_element_ref__.a(this._el_0), this.renderer), 
            this._text_1 = this.renderer.createText(this._el_0, "\n  ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "div", new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.InlineArray8(8, "class", "modal-content", "overlayDialogBoundary", "", "role", "document", "style", "display:block"), null), 
            this._OverlayDialogBoundary_2_3 = new __WEBPACK_IMPORTED_MODULE_10__overlay_overlay_directives_ngfactory__.c(new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_element_ref__.a(this._el_2), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this._text_3 = this.renderer.createText(this._el_2, "\n    ", null), this.projectNodes(this._el_2, 0), 
            this._text_4 = this.renderer.createText(this._el_2, "\n  ", null), this._text_5 = this.renderer.createText(this._el_0, "    \n", null), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3, this._text_4, this._text_5 ], null), 
            null;
        }, View_BSModalContainer0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_14__src_lib_overlay_overlay_directives__.b && 2 <= requestNodeIndex && requestNodeIndex <= 4 ? this._OverlayDialogBoundary_2_3.context : token === __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_class__.a && 0 <= requestNodeIndex && requestNodeIndex <= 5 ? this._NgClass_0_3.context : notFoundResult;
        }, View_BSModalContainer0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_0_0_0 = this.context.dialog.context.dialogClass;
            this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, !1), this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange), 
            this._OverlayDialogBoundary_2_3.ngDoCheck(this, this._el_2, throwOnChange);
            var currVal_8 = "lg" == this.context.dialog.context.size;
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_8, currVal_8) && (this.renderer.setElementClass(this._el_0, "modal-lg", currVal_8), 
            this._expr_8 = currVal_8);
            var currVal_9 = "sm" == this.context.dialog.context.size;
            __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_9, currVal_9) && (this.renderer.setElementClass(this._el_0, "modal-sm", currVal_9), 
            this._expr_9 = currVal_9);
        }, View_BSModalContainer0;
    }(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__.a);
}, /* 509 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__ = __webpack_require__(158), __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__ = __webpack_require__(28), __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(210), __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__ = __webpack_require__(31), __WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_for__ = __webpack_require__(102), __WEBPACK_IMPORTED_MODULE_13__src_lib_models_dialog_ref__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(146), __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_if__ = __webpack_require__(89), __WEBPACK_IMPORTED_MODULE_16__components_swap_component_directive_ngfactory__ = __webpack_require__(312), __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(56), __WEBPACK_IMPORTED_MODULE_18__src_lib_components_swap_component_directive__ = __webpack_require__(155);
    /* unused harmony export Wrapper_VEXDialogButtons */
    /* unused harmony export Wrapper_FormDropIn */
    /* unused harmony export Wrapper_DialogFormModal */
    /* unused harmony export VEXDialogButtonsNgFactory */
    /* unused harmony export View_VEXDialogButtons0 */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return FormDropInNgFactory;
    }), /* unused harmony export View_FormDropIn0 */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogFormModalNgFactory;
    });
    /* unused harmony export View_DialogFormModal0 */
    /**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
    /* tslint:disable */
    var Wrapper_VEXDialogButtons = function() {
        function Wrapper_VEXDialogButtons() {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.a(), 
            this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b;
        }
        return Wrapper_VEXDialogButtons.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_VEXDialogButtons.prototype.ngOnDestroy = function() {
            this.subscription0 && this.subscription0.unsubscribe();
        }, Wrapper_VEXDialogButtons.prototype.check_buttons = function(currValue, throwOnChange, forceUpdate) {
            (forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_0, currValue)) && (this._changed = !0, 
            this.context.buttons = currValue, this._expr_0 = currValue);
        }, Wrapper_VEXDialogButtons.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_VEXDialogButtons.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_VEXDialogButtons.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_VEXDialogButtons.prototype.subscribe = function(view, _eventHandler, emit0) {
            this._eventHandler = _eventHandler, emit0 && (this.subscription0 = this.context.onButtonClick.subscribe(_eventHandler.bind(view, "onButtonClick")));
        }, Wrapper_VEXDialogButtons;
    }(), Wrapper_FormDropIn = function() {
        function Wrapper_FormDropIn(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.b(p0);
        }
        return Wrapper_FormDropIn.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_FormDropIn.prototype.ngOnDestroy = function() {}, Wrapper_FormDropIn.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_FormDropIn.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_FormDropIn.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_FormDropIn.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_FormDropIn;
    }(), Wrapper_DialogFormModal = function() {
        function Wrapper_DialogFormModal(p0) {
            this._changed = !1, this.context = new __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.c(p0);
        }
        return Wrapper_DialogFormModal.prototype.ngOnDetach = function(view, componentView, el) {}, 
        Wrapper_DialogFormModal.prototype.ngOnDestroy = function() {}, Wrapper_DialogFormModal.prototype.ngDoCheck = function(view, el, throwOnChange) {
            var changed = this._changed;
            return this._changed = !1, changed;
        }, Wrapper_DialogFormModal.prototype.checkHost = function(view, componentView, el, throwOnChange) {}, 
        Wrapper_DialogFormModal.prototype.handleEvent = function(eventName, $event) {
            var result = !0;
            return result;
        }, Wrapper_DialogFormModal.prototype.subscribe = function(view, _eventHandler) {
            this._eventHandler = _eventHandler;
        }, Wrapper_DialogFormModal;
    }(), renderType_VEXDialogButtons_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, [], {}), View_VEXDialogButtons_Host0 = function(_super) {
        function View_VEXDialogButtons_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_VEXDialogButtons_Host0, renderType_VEXDialogButtons_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_VEXDialogButtons_Host0, _super), View_VEXDialogButtons_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "vex-dialog-buttons", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_VEXDialogButtons0(this.viewUtils, this, 0, this._el_0), 
            this._VEXDialogButtons_0_3 = new Wrapper_VEXDialogButtons(), this.compView_0.create(this._VEXDialogButtons_0_3.context), 
            this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._VEXDialogButtons_0_3.context);
        }, View_VEXDialogButtons_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.a && 0 === requestNodeIndex ? this._VEXDialogButtons_0_3.context : notFoundResult;
        }, View_VEXDialogButtons_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._VEXDialogButtons_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_VEXDialogButtons_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy(), this._VEXDialogButtons_0_3.ngOnDestroy();
        }, View_VEXDialogButtons_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_VEXDialogButtons_Host0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), VEXDialogButtonsNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.b("vex-dialog-buttons", View_VEXDialogButtons_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.a), styles_VEXDialogButtons = [], renderType_VEXDialogButtons = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, styles_VEXDialogButtons, {}), View_VEXDialogButtons0 = function(_super) {
        function View_VEXDialogButtons0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_VEXDialogButtons0, renderType_VEXDialogButtons, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_VEXDialogButtons0, _super), View_VEXDialogButtons0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "vex-dialog-buttons"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_2 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(2, 0, this, this._anchor_2), 
            this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.a(this, 2, this._anchor_2), 
            this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_common_src_directives_ng_for_ngfactory__.a(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_change_detection_differs_iterable_differs__.a, this.parentIndex), this.ref), 
            this._text_3 = this.renderer.createText(this._el_0, "\n", null), this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._anchor_2, this._text_3 ], null), 
            null;
        }, View_VEXDialogButtons0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.b && 2 === requestNodeIndex ? this._TemplateRef_2_5 : token === __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_for__.a && 2 === requestNodeIndex ? this._NgFor_2_6.context : notFoundResult;
        }, View_VEXDialogButtons0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_2_0_0 = this.context.buttons;
            this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, !1), this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange), 
            this._vc_2.detectChangesInNestedViews(throwOnChange);
        }, View_VEXDialogButtons0.prototype.destroyInternal = function() {
            this._vc_2.destroyNestedViews();
        }, View_VEXDialogButtons0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 2 == nodeIndex ? new View_VEXDialogButtons1(this.viewUtils, this, 2, this._anchor_2, this._vc_2) : null;
        }, View_VEXDialogButtons0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), View_VEXDialogButtons1 = function(_super) {
        function View_VEXDialogButtons1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_VEXDialogButtons1, renderType_VEXDialogButtons, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_VEXDialogButtons1, _super), View_VEXDialogButtons1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "button", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "type", "button"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_0));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1 ], [ disposable_0 ]), 
            null;
        }, View_VEXDialogButtons1.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_2 = this.context.$implicit.cssClass;
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_2, currVal_2) && (this.renderer.setElementProperty(this._el_0, "className", currVal_2), 
            this._expr_2 = currVal_2);
            var currVal_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.$implicit.caption, "");
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_3, currVal_3) && (this.renderer.setText(this._text_1, currVal_3), 
            this._expr_3 = currVal_3);
        }, View_VEXDialogButtons1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_VEXDialogButtons1.prototype.handleEvent_0 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.parentView.context.onClick(this.context.$implicit, $event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_VEXDialogButtons1;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), renderType_FormDropIn_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, [], {}), View_FormDropIn_Host0 = function(_super) {
        function View_FormDropIn_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_FormDropIn_Host0, renderType_FormDropIn_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_FormDropIn_Host0, _super), View_FormDropIn_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "drop-in-dialog", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_FormDropIn0(this.viewUtils, this, 0, this._el_0), this._FormDropIn_0_3 = new Wrapper_FormDropIn(this.injectorGet(__WEBPACK_IMPORTED_MODULE_13__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._FormDropIn_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._FormDropIn_0_3.context);
        }, View_FormDropIn_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.b && 0 === requestNodeIndex ? this._FormDropIn_0_3.context : notFoundResult;
        }, View_FormDropIn_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._FormDropIn_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_FormDropIn_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_FormDropIn_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_FormDropIn_Host0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), FormDropInNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.b("drop-in-dialog", View_FormDropIn_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.b), styles_FormDropIn = [], renderType_FormDropIn = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, styles_FormDropIn, {}), View_FormDropIn0 = function(_super) {
        function View_FormDropIn0(viewUtils, parentView, parentIndex, parentElement) {
            var _this = _super.call(this, View_FormDropIn0, renderType_FormDropIn, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
            return _this._expr_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_FormDropIn0, _super), View_FormDropIn0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "div", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "vex-dialog-message"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "", null), this._text_2 = this.renderer.createText(parentRenderNode, "\n ", null), 
            this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode, null), this._vc_3 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(3, null, this, this._anchor_3), 
            this._TemplateRef_3_5 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.a(this, 3, this._anchor_3), 
            this._NgIf_3_6 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_3.vcRef, this._TemplateRef_3_5), 
            this._text_4 = this.renderer.createText(parentRenderNode, "\n ", null), this._anchor_5 = this.renderer.createTemplateAnchor(parentRenderNode, null), 
            this._vc_5 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(5, null, this, this._anchor_5), 
            this._TemplateRef_5_5 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.a(this, 5, this._anchor_5), 
            this._NgIf_5_6 = new __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_common_src_directives_ng_if_ngfactory__.a(this._vc_5.vcRef, this._TemplateRef_5_5), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._text_2, this._anchor_3, this._text_4, this._anchor_5 ], null), 
            null;
        }, View_FormDropIn0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.b && 3 === requestNodeIndex ? this._TemplateRef_3_5 : token === __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_if__.a && 3 === requestNodeIndex ? this._NgIf_3_6.context : token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.b && 5 === requestNodeIndex ? this._TemplateRef_5_5 : token === __WEBPACK_IMPORTED_MODULE_15__angular_common_src_directives_ng_if__.a && 5 === requestNodeIndex ? this._NgIf_5_6.context : notFoundResult;
        }, View_FormDropIn0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_3_0_0 = this.context.context.showInput;
            this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, !1), this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
            var currVal_5_0_0 = this.context.context.showCloseButton;
            this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, !1), this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange), 
            this._vc_3.detectChangesInNestedViews(throwOnChange), this._vc_5.detectChangesInNestedViews(throwOnChange);
            var currVal_12 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.context.context.message, "");
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_12, currVal_12) && (this.renderer.setText(this._text_1, currVal_12), 
            this._expr_12 = currVal_12);
        }, View_FormDropIn0.prototype.destroyInternal = function() {
            this._vc_3.destroyNestedViews(), this._vc_5.destroyNestedViews();
        }, View_FormDropIn0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 3 == nodeIndex ? new View_FormDropIn1(this.viewUtils, this, 3, this._anchor_3, this._vc_3) : 5 == nodeIndex ? new View_FormDropIn2(this.viewUtils, this, 5, this._anchor_5, this._vc_5) : null;
        }, View_FormDropIn0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), View_FormDropIn1 = function(_super) {
        function View_FormDropIn1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_FormDropIn1, renderType_FormDropIn, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_FormDropIn1, _super), View_FormDropIn1.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "vex-dialog-input"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n   ", null), this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "input", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray8(8, "autofocus", "", "class", "vex-dialog-prompt-input", "name", "vex", "type", "text"), null), 
            this._text_3 = this.renderer.createText(this._el_0, "\n ", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_2, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "change", null), this.eventHandler(this.handleEvent_2));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._el_2, this._text_3 ], [ disposable_0 ]), 
            null;
        }, View_FormDropIn1.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.inlineInterpolate(1, "", this.parentView.context.context.placeholder, "");
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_4, currVal_4) && (this.renderer.setElementProperty(this._el_2, "placeholder", currVal_4), 
            this._expr_4 = currVal_4);
        }, View_FormDropIn1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_FormDropIn1.prototype.handleEvent_2 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("change" == eventName) {
                var pd_sub_0 = (this.parentView.context.context.defaultResult = this._el_2.value) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_FormDropIn1;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), View_FormDropIn2 = function(_super) {
        function View_FormDropIn2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            var _this = _super.call(this, View_FormDropIn2, renderType_FormDropIn, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
            return _this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__.b, 
            _this;
        }
        return __extends(View_FormDropIn2, _super), View_FormDropIn2.prototype.createInternal = function(rootSelector) {
            this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, null, "div", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "click", null), this.eventHandler(this.handleEvent_0));
            return this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], [ disposable_0 ]), 
            null;
        }, View_FormDropIn2.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_1 = this.parentView.context.context.closeClassName;
            __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.checkBinding(throwOnChange, this._expr_1, currVal_1) && (this.renderer.setElementProperty(this._el_0, "className", currVal_1), 
            this._expr_1 = currVal_1);
        }, View_FormDropIn2.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_FormDropIn2.prototype.handleEvent_0 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("click" == eventName) {
                var pd_sub_0 = this.parentView.context.dialog.dismiss() !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_FormDropIn2;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), renderType_DialogFormModal_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, [], {}), View_DialogFormModal_Host0 = function(_super) {
        function View_DialogFormModal_Host0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_DialogFormModal_Host0, renderType_DialogFormModal_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_DialogFormModal_Host0, _super), View_DialogFormModal_Host0.prototype.createInternal = function(rootSelector) {
            return this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.selectOrCreateRenderHostElement(this.renderer, "modal-dialog", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, rootSelector, null), 
            this.compView_0 = new View_DialogFormModal0(this.viewUtils, this, 0, this._el_0), 
            this._DialogFormModal_0_3 = new Wrapper_DialogFormModal(this.injectorGet(__WEBPACK_IMPORTED_MODULE_13__src_lib_models_dialog_ref__.a, this.parentIndex)), 
            this.compView_0.create(this._DialogFormModal_0_3.context), this.init(this._el_0, this.renderer.directRenderer ? null : [ this._el_0 ], null), 
            new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.a(0, this, this._el_0, this._DialogFormModal_0_3.context);
        }, View_DialogFormModal_Host0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.c && 0 === requestNodeIndex ? this._DialogFormModal_0_3.context : notFoundResult;
        }, View_DialogFormModal_Host0.prototype.detectChangesInternal = function(throwOnChange) {
            this._DialogFormModal_0_3.ngDoCheck(this, this._el_0, throwOnChange), this.compView_0.internalDetectChanges(throwOnChange);
        }, View_DialogFormModal_Host0.prototype.destroyInternal = function() {
            this.compView_0.destroy();
        }, View_DialogFormModal_Host0.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_DialogFormModal_Host0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), DialogFormModalNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__.b("modal-dialog", View_DialogFormModal_Host0, __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.c), styles_DialogFormModal = [], renderType_DialogFormModal = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderComponentType("", 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__.b.None, styles_DialogFormModal, {}), View_DialogFormModal0 = function(_super) {
        function View_DialogFormModal0(viewUtils, parentView, parentIndex, parentElement) {
            return _super.call(this, View_DialogFormModal0, renderType_DialogFormModal, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways) || this;
        }
        return __extends(View_DialogFormModal0, _super), View_DialogFormModal0.prototype.createInternal = function(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
            this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, parentRenderNode, "form", new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "class", "vex-dialog-form"), null), 
            this._text_1 = this.renderer.createText(this._el_0, "\n    ", null), this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null), 
            this._vc_2 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_linker_view_container__.a(2, 0, this, this._anchor_2), 
            this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.a(this, 2, this._anchor_2), 
            this._SwapComponentDirective_2_6 = new __WEBPACK_IMPORTED_MODULE_16__components_swap_component_directive_ngfactory__.a(this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_component_factory_resolver__.a, this.parentIndex), this._vc_2.vcRef, this._TemplateRef_2_5), 
            this._text_3 = this.renderer.createText(this._el_0, "\n    ", null), this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.createRenderElement(this.renderer, this._el_0, "vex-dialog-buttons", __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.EMPTY_INLINE_ARRAY, null), 
            this.compView_4 = new View_VEXDialogButtons0(this.viewUtils, this, 4, this._el_4), 
            this._VEXDialogButtons_4_3 = new Wrapper_VEXDialogButtons(), this.compView_4.create(this._VEXDialogButtons_4_3.context), 
            this._text_5 = this.renderer.createText(this._el_0, "\n", null);
            var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.subscribeToRenderElement(this, this._el_4, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__.InlineArray2(2, "onButtonClick", null), this.eventHandler(this.handleEvent_4));
            return this._VEXDialogButtons_4_3.subscribe(this, this.eventHandler(this.handleEvent_4), !0), 
            this.init(null, this.renderer.directRenderer ? null : [ this._el_0, this._text_1, this._anchor_2, this._text_3, this._el_4, this._text_5 ], [ disposable_0 ]), 
            null;
        }, View_DialogFormModal0.prototype.injectorGetInternal = function(token, requestNodeIndex, notFoundResult) {
            return token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_template_ref__.b && 2 === requestNodeIndex ? this._TemplateRef_2_5 : token === __WEBPACK_IMPORTED_MODULE_18__src_lib_components_swap_component_directive__.a && 2 === requestNodeIndex ? this._SwapComponentDirective_2_6.context : token === __WEBPACK_IMPORTED_MODULE_0__src_lib_plugins_vex_dialog_form_modal__.a && 4 === requestNodeIndex ? this._VEXDialogButtons_4_3.context : notFoundResult;
        }, View_DialogFormModal0.prototype.detectChangesInternal = function(throwOnChange) {
            var currVal_2_0_0 = this.context.context.content;
            this._SwapComponentDirective_2_6.check_swapCmp(currVal_2_0_0, throwOnChange, !1), 
            this._SwapComponentDirective_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
            var currVal_4_0_0 = this.context.context.buttons;
            this._VEXDialogButtons_4_3.check_buttons(currVal_4_0_0, throwOnChange, !1), this._VEXDialogButtons_4_3.ngDoCheck(this, this._el_4, throwOnChange), 
            this._vc_2.detectChangesInNestedViews(throwOnChange), this.compView_4.internalDetectChanges(throwOnChange);
        }, View_DialogFormModal0.prototype.destroyInternal = function() {
            this._vc_2.destroyNestedViews(), this.compView_4.destroy(), this._SwapComponentDirective_2_6.ngOnDestroy(), 
            this._VEXDialogButtons_4_3.ngOnDestroy();
        }, View_DialogFormModal0.prototype.createEmbeddedViewInternal = function(nodeIndex) {
            return 2 == nodeIndex ? new View_DialogFormModal1(this.viewUtils, this, 2, this._anchor_2, this._vc_2) : null;
        }, View_DialogFormModal0.prototype.handleEvent_4 = function(eventName, $event) {
            this.markPathToRootAsCheckOnce();
            var result = !0;
            if ("onButtonClick" == eventName) {
                var pd_sub_0 = this.context.onButtonClick($event) !== !1;
                result = pd_sub_0 && result;
            }
            return result;
        }, View_DialogFormModal0;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a), View_DialogFormModal1 = function(_super) {
        function View_DialogFormModal1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
            return _super.call(this, View_DialogFormModal1, renderType_DialogFormModal, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__.a.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__.b.CheckAlways, declaredViewContainer) || this;
        }
        return __extends(View_DialogFormModal1, _super), View_DialogFormModal1.prototype.createInternal = function(rootSelector) {
            return this._el_0 = this.renderer.createTemplateAnchor(null, null), this.init(this._el_0, this.renderer.directRenderer ? null : [], null), 
            null;
        }, View_DialogFormModal1.prototype.visitRootNodesInternal = function(cb, ctx) {
            cb(this._el_0, ctx);
        }, View_DialogFormModal1;
    }(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__.a);
}, /* 510 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(144), __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(100), __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__(116), __WEBPACK_IMPORTED_MODULE_5__bootstrap_demo_bootstrap_demo_module__ = __webpack_require__(314), __WEBPACK_IMPORTED_MODULE_6__vex_demo_vex_demo_module__ = __webpack_require__(318), __WEBPACK_IMPORTED_MODULE_7__js_native_demo_js_native_demo_module__ = __webpack_require__(317), __WEBPACK_IMPORTED_MODULE_8__app__ = __webpack_require__(313), __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(151), __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(511), __WEBPACK_IMPORTED_MODULE_11__home_in_app_plugin_index__ = __webpack_require__(215);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return AppModule;
    });
    var AppModule = function() {
        function AppModule() {}
        return AppModule;
    }();
    AppModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__.c, __WEBPACK_IMPORTED_MODULE_1__angular_router__.a.forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__.a, {
            useHash: !0,
            preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__.b
        }), __WEBPACK_IMPORTED_MODULE_4__shared_module__.a.forRoot(), __WEBPACK_IMPORTED_MODULE_3_angular2_modal__.a.forRoot(), __WEBPACK_IMPORTED_MODULE_5__bootstrap_demo_bootstrap_demo_module__.a, __WEBPACK_IMPORTED_MODULE_6__vex_demo_vex_demo_module__.a, __WEBPACK_IMPORTED_MODULE_7__js_native_demo_js_native_demo_module__.a, __WEBPACK_IMPORTED_MODULE_11__home_in_app_plugin_index__.a ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_8__app__.a, __WEBPACK_IMPORTED_MODULE_9__home_home__.a ],
        bootstrap: [ __WEBPACK_IMPORTED_MODULE_8__app__.a ]
    }) ], AppModule);
}, /* 511 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(151);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return routes;
    });
    var routes = [ {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_0__home_home__.a
    }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    } ];
}, /* 512 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(144), __WEBPACK_IMPORTED_MODULE_1__bootstrap_demo__ = __webpack_require__(149), __WEBPACK_IMPORTED_MODULE_2__bootstrap_demo_page_bootstrap_demo_page__ = __webpack_require__(148), __WEBPACK_IMPORTED_MODULE_3__modal_customisation_wizard_modal_customisation_wizard__ = __webpack_require__(150);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return routing;
    });
    var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__.a.forChild([ {
        path: "bootstrap-demo",
        component: __WEBPACK_IMPORTED_MODULE_1__bootstrap_demo__.a,
        children: [ {
            path: "",
            component: __WEBPACK_IMPORTED_MODULE_2__bootstrap_demo_page_bootstrap_demo_page__.a,
            pathMatch: "full"
        }, {
            path: "customizeModals",
            component: __WEBPACK_IMPORTED_MODULE_3__modal_customisation_wizard_modal_customisation_wizard__.a
        } ]
    } ]);
}, /* 513 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function alert(modal) {
        return modal.alert().size("lg").showClose(!0).title("A simple Alert style modal window").body("\n        <h4>Alert is a classic (title/body/footer) 1 button modal window that \n        does not block.</h4>\n        <b>Configuration:</b>\n        <ul>\n            <li>Non blocking (click anywhere outside to dismiss)</li>\n            <li>Size large</li>\n            <li>Dismissed with default keyboard key (ESC)</li>\n            <li>Close wth button click</li>\n            <li>HTML content</li>\n        </ul>");
    }
    function prompt(modal) {
        return modal.prompt().size("lg").title("A simple Prompt style modal window").placeholder("This is a placeholder").body("Please type a value!");
    }
    function confirm(modal) {
        return modal.confirm().size("lg").titleHtml('\n            <div class="modal-title" \n                 style="font-size: 22px; color: grey; text-decoration: underline;">\n                 A simple Confirm style modal window</div>').body("\n            <h4>Confirm is a classic (title/body/footer) 2 button modal window that blocks.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Blocks (only button click can close/dismiss)</li>\n                <li>Size large</li>\n                <li>Keyboard can not dismiss</li>\n                <li>HTML Title</li>\n                <li>HTML content</li>\n            </ul>");
    }
    function cascading(modal) {
        var presets = [];
        return presets.push(alert(modal)), presets.push(prompt(modal)), presets.push(confirm(modal)), 
        presets.push(modal.prompt().size("sm").title("Cascading modals!").body("Find your way out...")), 
        {
            open: function() {
                for (var ret = presets.shift().open(); presets.length > 0; ) presets.shift().open();
                return ret;
            }
        };
    }
    function inElement(modal) {
        return modal.prompt().size("sm").title("A modal contained by an element").inElement(!0).body("Try stacking up more modals!");
    }
    /* harmony export (immutable) */
    __webpack_exports__.a = alert, /* harmony export (immutable) */
    __webpack_exports__.b = prompt, /* harmony export (immutable) */
    __webpack_exports__.c = confirm, /* harmony export (immutable) */
    __webpack_exports__.d = cascading, /* harmony export (immutable) */
    __webpack_exports__.e = inElement;
}, /* 514 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(144), __WEBPACK_IMPORTED_MODULE_1__js_native_demo__ = __webpack_require__(153);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return routing;
    });
    var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__.a.forChild([ {
        path: "js-native-demo",
        component: __WEBPACK_IMPORTED_MODULE_1__js_native_demo__.a
    } ]);
}, /* 515 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function alert(modal) {
        return modal.alert().message("This is a native alert!");
    }
    function prompt(modal) {
        return modal.prompt().message("This is a native prompt!").promptDefault("This is a default value");
    }
    function confirm(modal) {
        return modal.confirm().message("Yes or No?");
    }
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_js_native__ = __webpack_require__(265);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "JSNativePresetBuilder", function() {
        return __WEBPACK_IMPORTED_MODULE_0_angular2_modal_plugins_js_native__.d;
    }), /* harmony export (immutable) */
    __webpack_exports__.alert = alert, /* harmony export (immutable) */
    __webpack_exports__.prompt = prompt, /* harmony export (immutable) */
    __webpack_exports__.confirm = confirm;
}, /* 516 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function alert(modal) {
        return modal.alert().className(this.theme).message("An alert message!").showCloseButton(!0);
    }
    function prompt(modal) {
        return modal.prompt().className(this.theme).message("Please type a value!").placeholder("This is a placeholder");
    }
    function confirm(modal) {
        return modal.confirm().className(this.theme).message("Yes or No?").okBtn("Yes").cancelBtn("No");
    }
    function noButtons(modal) {
        return modal.alert().className(this.theme).showCloseButton(!0).isBlocking(!0).message("Luckily I have an X button, phew...").okBtn(null).cancelBtn(null);
    }
    function customButtons(modal) {
        return modal.alert().className(this.theme).showCloseButton(!0).isBlocking(!0).message("Let's show some bootstrap style buttons...").okBtn(null).cancelBtn(null).addButton("btn-primary", "BTN-PRIMARY", function(cmp, $event) {
            return cmp.dialog.close("primary");
        }).addButton("btn-warning", "BTN-WARNING", function(cmp, $event) {
            return cmp.dialog.close("warning");
        }).addButton("btn-success", "BTN-SUCCESS", function(cmp, $event) {
            return cmp.dialog.close("success");
        });
    }
    function cascading(modal) {
        var presets = [];
        return presets.push(alert.call(this, modal)), presets.push(prompt.call(this, modal)), 
        presets.push(confirm.call(this, modal)), presets.push(modal.alert().className(this.theme).message("Cascading modals! Find your way out...")), 
        {
            open: function() {
                for (var ret = presets.shift().open(); presets.length > 0; ) presets.shift().open();
                return ret;
            }
        };
    }
    /* harmony export (immutable) */
    __webpack_exports__.a = alert, /* harmony export (immutable) */
    __webpack_exports__.b = prompt, /* harmony export (immutable) */
    __webpack_exports__.c = confirm, /* harmony export (immutable) */
    __webpack_exports__.e = noButtons, /* harmony export (immutable) */
    __webpack_exports__.f = customButtons, /* harmony export (immutable) */
    __webpack_exports__.d = cascading;
}, /* 517 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(144), __WEBPACK_IMPORTED_MODULE_1__vex_demo__ = __webpack_require__(154);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return routing;
    });
    var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__.a.forChild([ {
        path: "vex-demo",
        component: __WEBPACK_IMPORTED_MODULE_1__vex_demo__.a
    } ]);
}, /* 518 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(100), __WEBPACK_IMPORTED_MODULE_2__providers_index__ = __webpack_require__(533), __WEBPACK_IMPORTED_MODULE_3__models_tokens__ = __webpack_require__(220), __WEBPACK_IMPORTED_MODULE_4__components_index__ = __webpack_require__(321), __WEBPACK_IMPORTED_MODULE_5__overlay_index__ = __webpack_require__(324);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalModule;
    });
    var ModalModule = ModalModule_1 = function() {
        function ModalModule() {}
        /**
     * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
     * Since dynamic components are not analysed by the angular compiler they must register manually
     * using entryComponents, this is an easy way to do it.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
     */
        /**
     * Returns a NgModule for use in the root Module.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns ModuleWithProviders
     */
        return ModalModule.withComponents = function(entryComponents) {
            return {
                ngModule: ModalModule_1,
                providers: [ {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__.l,
                    useValue: entryComponents,
                    multi: !0
                } ]
            };
        }, ModalModule.forRoot = function(entryComponents) {
            return {
                ngModule: ModalModule_1,
                providers: [ __WEBPACK_IMPORTED_MODULE_5__overlay_index__.a, {
                    provide: __WEBPACK_IMPORTED_MODULE_3__models_tokens__.a,
                    useClass: __WEBPACK_IMPORTED_MODULE_2__providers_index__.a
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__.d,
                    useClass: __WEBPACK_IMPORTED_MODULE_2__providers_index__.b,
                    multi: !0
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__.l,
                    useValue: entryComponents || [],
                    multi: !0
                } ]
            };
        }, ModalModule;
    }();
    ModalModule = ModalModule_1 = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        declarations: [ __WEBPACK_IMPORTED_MODULE_5__overlay_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.a, __WEBPACK_IMPORTED_MODULE_4__components_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.c, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.c, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.d, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.e ],
        exports: [ __WEBPACK_IMPORTED_MODULE_4__components_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.c, __WEBPACK_IMPORTED_MODULE_4__components_index__.a, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.c, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.d, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.e ],
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_5__overlay_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.c ]
    }) ], ModalModule);
    var ModalModule_1;
}, /* 519 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogRefStack;
    });
    var BASKET_GROUP = {}, DialogRefStack = function() {
        function DialogRefStack() {
            this._stack = [], this._stackMap = new Map();
        }
        /**
     * Push a DialogRef into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param dialogRef
     */
        /**
     * Remove a DialogRef from the stack.
     * @param dialogRef
     */
        return Object.defineProperty(DialogRefStack.prototype, "length", {
            get: function() {
                return this._stack.length;
            },
            enumerable: !0,
            configurable: !0
        }), DialogRefStack.prototype.push = function(dialogRef, group) {
            this._stack.indexOf(dialogRef) === -1 && (this._stack.push(dialogRef), this._stackMap.set(dialogRef, group || BASKET_GROUP));
        }, DialogRefStack.prototype.pushManaged = function(dialogRef, group) {
            var _this = this;
            this.push(dialogRef, group), dialogRef.onDestroy.subscribe(function() {
                return _this.remove(dialogRef);
            });
        }, DialogRefStack.prototype.pop = function() {
            var dialogRef = this._stack.pop();
            return this._stackMap.delete(dialogRef), dialogRef;
        }, DialogRefStack.prototype.remove = function(dialogRef) {
            var idx = this.indexOf(dialogRef);
            idx > -1 && (this._stack.splice(idx, 1), this._stackMap.delete(dialogRef));
        }, DialogRefStack.prototype.index = function(index) {
            return this._stack[index];
        }, DialogRefStack.prototype.indexOf = function(dialogRef) {
            return this._stack.indexOf(dialogRef);
        }, DialogRefStack.prototype.groupOf = function(dialogRef) {
            return this._stackMap.get(dialogRef);
        }, DialogRefStack.prototype.groupBy = function(group) {
            var arr = [];
            return group && this._stackMap.forEach(function(value, key) {
                value === group && arr.push(key);
            }), arr;
        }, DialogRefStack.prototype.groupLength = function(group) {
            var count = 0;
            return group && this._stackMap.forEach(function(value, key) {
                value === group && count++;
            }), count;
        }, DialogRefStack;
    }();
}, /* 520 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogBailOutError;
    });
    var DialogBailOutError = function(_super) {
        function DialogBailOutError(value) {
            var _this = _super.call(this) || this;
            return value || (value = "Dialog was forced to close by an unknown source."), _this.message = value, 
            _this;
        }
        return __extends(DialogBailOutError, _super), DialogBailOutError;
    }(Error);
}, /* 521 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(156), __WEBPACK_IMPORTED_MODULE_4__modal_container_component__ = __webpack_require__(222), __WEBPACK_IMPORTED_MODULE_5__message_modal_component__ = __webpack_require__(221);
    /* unused harmony export providers */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapModalModule;
    });
    var providers = [ {
        provide: __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_3__modal__.a,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    } ], BootstrapModalModule = function() {
        function BootstrapModalModule() {}
        return BootstrapModalModule.getProviders = function() {
            return providers;
        }, BootstrapModalModule;
    }();
    BootstrapModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.a, __WEBPACK_IMPORTED_MODULE_1__angular_common__.g ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.a, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.b, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.c, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.d, __WEBPACK_IMPORTED_MODULE_4__modal_container_component__.a ],
        providers: providers,
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_4__modal_container_component__.a, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.d ]
    }) ], BootstrapModalModule);
}, /* 522 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* unused harmony export BSModalContext */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BSModalContextBuilder;
    });
    var DEFAULT_VALUES = {
        dialogClass: "modal-dialog",
        showClose: !1
    }, DEFAULT_SETTERS = [ "dialogClass", "size", "showClose" ], BSModalContext = function(_super) {
        function BSModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(BSModalContext, _super), BSModalContext.prototype.normalize = function() {
            this.dialogClass || (this.dialogClass = DEFAULT_VALUES.dialogClass), _super.prototype.normalize.call(this);
        }, BSModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), BSModalContextBuilder = function(_super) {
        function BSModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || BSModalContext) || this;
        }
        return __extends(BSModalContextBuilder, _super), BSModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 523 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__message_modal_preset__ = __webpack_require__(326);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OneButtonPresetBuilder;
    });
    /**
 * A Preset for a classic 1 button modal window.
 */
    var OneButtonPresetBuilder = function(_super) {
        function OneButtonPresetBuilder(modal, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                okBtn: "OK",
                okBtnClass: "btn btn-primary"
            }, defaultValues || {}), [ "okBtn", "okBtnClass" ]) || this;
        }
        return __extends(OneButtonPresetBuilder, _super), OneButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
                return cmp.dialog.close(!0);
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, OneButtonPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__message_modal_preset__.a);
}, /* 524 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__message_modal_preset__ = __webpack_require__(326);
    /* unused harmony export AbstractTwoButtonPresetBuilder */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return TwoButtonPresetBuilder;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return PromptPresetBuilder;
    });
    /** Common two button preset */
    var AbstractTwoButtonPresetBuilder = function(_super) {
        function AbstractTwoButtonPresetBuilder(modal, defaultValues, initialSetters) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = []), 
            _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                okBtn: "OK",
                okBtnClass: "btn btn-primary",
                cancelBtn: "Cancel",
                cancelBtnClass: "btn btn-default"
            }, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)([ "okBtn", "okBtnClass", "cancelBtn", "cancelBtnClass" ], initialSetters)) || this;
        }
        return __extends(AbstractTwoButtonPresetBuilder, _super), AbstractTwoButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.cancelBtnClass, config.cancelBtn, function(cmp, $event) {
                return cmp.dialog.dismiss();
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, AbstractTwoButtonPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__message_modal_preset__.a), TwoButtonPresetBuilder = function(_super) {
        function TwoButtonPresetBuilder(modal, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, modal, defaultValues) || this;
        }
        return __extends(TwoButtonPresetBuilder, _super), TwoButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
                return cmp.dialog.close(!0);
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, TwoButtonPresetBuilder;
    }(AbstractTwoButtonPresetBuilder), PromptPresetBuilder = function(_super) {
        function PromptPresetBuilder(modal, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, modal, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                showInput: !0,
                defaultValue: ""
            }, defaultValues || {}), [ "placeholder", "defaultValue" ]) || this;
        }
        return __extends(PromptPresetBuilder, _super), PromptPresetBuilder.prototype.$$beforeOpen = function(config) {
            return this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
                return cmp.dialog.close(cmp.dialog.context.defaultValue);
            }), _super.prototype.$$beforeOpen.call(this, config);
        }, PromptPresetBuilder;
    }(AbstractTwoButtonPresetBuilder);
}, /* 525 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeModalRenderer;
    });
    var JSNativeModalRenderer = function() {
        function JSNativeModalRenderer() {}
        return JSNativeModalRenderer.prototype.render = function(dialog, vcRef) {
            var result;
            switch (dialog.context.dialogType) {
              case __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.alert:
                window.alert(dialog.context.message), result = !0;
                break;

              case __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.prompt:
                result = window.prompt(dialog.context.message, dialog.context.promptDefault);
                break;

              case __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.f.confirm:
                result = window.confirm(dialog.context.message);
            }
            // we need to return ComponentRef<ModalOverlay> but a native dialog does'nt have that
            // so we resolve an empty promise, the user of this renderer should expect that.
            return dialog.destroy = function() {}, result === !1 ? dialog.dismiss() : dialog.close(result), 
            {};
        }, JSNativeModalRenderer;
    }();
    JSNativeModalRenderer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)() ], JSNativeModalRenderer);
}, /* 526 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(157);
    /* unused harmony export providers */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeModalModule;
    });
    var providers = [ {
        provide: __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.b,
        useClass: __WEBPACK_IMPORTED_MODULE_2__modal__.a
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_2__modal__.a,
        useClass: __WEBPACK_IMPORTED_MODULE_2__modal__.a
    } ], JSNativeModalModule = function() {
        function JSNativeModalModule() {}
        return JSNativeModalModule.getProviders = function() {
            return providers;
        }, JSNativeModalModule;
    }();
    JSNativeModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        providers: providers
    }) ], JSNativeModalModule);
}, /* 527 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* unused harmony export JSNativeModalContext */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeModalContextBuilder;
    });
    var DEFAULT_SETTERS = [ "promptDefault" ], JSNativeModalContext = function(_super) {
        function JSNativeModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(JSNativeModalContext, _super), JSNativeModalContext.prototype.normalize = function() {
            this.message || (this.message = ""), void 0 === this.dialogType && (this.dialogType = __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.alert);
        }, JSNativeModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), JSNativeModalContextBuilder = function(_super) {
        function JSNativeModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, defaultValues || {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || JSNativeModalContext) || this;
        }
        return __extends(JSNativeModalContextBuilder, _super), JSNativeModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 528 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(157), __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(527), __WEBPACK_IMPORTED_MODULE_2__js_native_modal_renderer__ = __webpack_require__(525);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativePresetBuilder;
    });
    var JSNativePresetBuilder = function(_super) {
        function JSNativePresetBuilder(modal, dialogType) {
            return _super.call(this, {
                modal: modal,
                dialogType: dialogType
            }) || this;
        }
        /**
     * Hook to alter config and return bindings.
     * @param config
     */
        /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
        return __extends(JSNativePresetBuilder, _super), JSNativePresetBuilder.prototype.$$beforeOpen = function(config) {
            return [];
        }, JSNativePresetBuilder.prototype.open = function(viewContainer) {
            var context = this.toJSON();
            if (!(context.modal instanceof __WEBPACK_IMPORTED_MODULE_0__modal__.a)) return Promise.reject(new Error("Configuration Error: modal service not set."));
            var overlayConfig = {
                context: context,
                renderer: new __WEBPACK_IMPORTED_MODULE_2__js_native_modal_renderer__.a(),
                viewContainer: viewContainer,
                bindings: "function" == typeof this.$$beforeOpen && this.$$beforeOpen(context)
            };
            return context.modal.open(context.component, overlayConfig);
        }, JSNativePresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.a);
}, /* 529 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VEXModalContext;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return VEXModalContextBuilder;
    });
    var DEFAULT_VALUES = {
        className: "default",
        overlayClassName: "vex-overlay",
        contentClassName: "vex-content",
        closeClassName: "vex-close"
    }, DEFAULT_SETTERS = [ "className", "overlayClassName", "contentClassName", "closeClassName", "showCloseButton" ], VEXModalContext = function(_super) {
        function VEXModalContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(VEXModalContext, _super), VEXModalContext.prototype.normalize = function() {
            this.className || (this.className = DEFAULT_VALUES.className), this.overlayClassName || (this.overlayClassName = DEFAULT_VALUES.overlayClassName), 
            this.contentClassName || (this.contentClassName = DEFAULT_VALUES.contentClassName), 
            this.closeClassName || (this.closeClassName = DEFAULT_VALUES.closeClassName), _super.prototype.normalize.call(this);
        }, VEXModalContext;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.d), VEXModalContextBuilder = function(_super) {
        function VEXModalContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(DEFAULT_VALUES, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || VEXModalContext) || this;
        }
        /**
     *
     * @aliasFor isBlocking
     */
        return __extends(VEXModalContextBuilder, _super), VEXModalContextBuilder.prototype.overlayClosesOnClick = function(value) {
            return this[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.m)("isBlocking")] = !value, 
            this;
        }, VEXModalContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.e);
}, /* 530 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(529), __WEBPACK_IMPORTED_MODULE_2__dialog_form_modal__ = __webpack_require__(158);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogPreset;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return DialogPresetBuilder;
    });
    var DEFAULT_SETTERS = [ "content" ], DialogPreset = function(_super) {
        function DialogPreset() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(DialogPreset, _super), DialogPreset;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.a), DialogPresetBuilder = function(_super) {
        function DialogPresetBuilder(modal, defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                component: __WEBPACK_IMPORTED_MODULE_2__dialog_form_modal__.c,
                buttons: [],
                defaultResult: !0
            }, defaultValues || {}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.h)(DEFAULT_SETTERS, initialSetters || []), baseType || DialogPreset) || this;
        }
        return __extends(DialogPresetBuilder, _super), DialogPresetBuilder.prototype.addButton = function(css, caption, onClick) {
            var btn = {
                cssClass: css,
                caption: caption,
                onClick: onClick
            }, key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.m)("buttons");
            return this[key].push(btn), this;
        }, DialogPresetBuilder.prototype.addOkButton = function(text) {
            return void 0 === text && (text = "OK"), this.addButton("vex-dialog-button-primary vex-dialog-button vex-first", text, function(cmp, $event) {
                return cmp.dialog.close(cmp.dialog.context.defaultResult);
            }), this;
        }, DialogPresetBuilder.prototype.addCancelButton = function(text) {
            return void 0 === text && (text = "CANCEL"), this.addButton("vex-dialog-button-secondary vex-dialog-button vex-last", text, function(cmp, $event) {
                return cmp.dialog.dismiss();
            }), this;
        }, DialogPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.b);
}, /* 531 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__ = __webpack_require__(158), __WEBPACK_IMPORTED_MODULE_2__dialog_preset__ = __webpack_require__(530);
    /* unused harmony export DropInPreset */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DropInPresetBuilder;
    });
    var DEFAULT_VALUES = {
        component: __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__.c,
        content: __WEBPACK_IMPORTED_MODULE_1__dialog_form_modal__.b,
        okBtn: "OK",
        cancelBtn: "Cancel"
    }, DEFAULT_SETTERS = [ "okBtn", "cancelBtn", "placeholder" ], DropInPreset = function(_super) {
        function DropInPreset() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(DropInPreset, _super), Object.defineProperty(DropInPreset.prototype, "showInput", {
            get: function() {
                return this.dropInType === __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.prompt;
            },
            enumerable: !0,
            configurable: !0
        }), DropInPreset;
    }(__WEBPACK_IMPORTED_MODULE_2__dialog_preset__.a), DropInPresetBuilder = function(_super) {
        function DropInPresetBuilder(modal, dropInType, defaultValues) {
            return void 0 === defaultValues && (defaultValues = void 0), _super.call(this, modal, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_modal__.l)({
                modal: modal,
                dropInType: dropInType
            }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset) || this;
        }
        return __extends(DropInPresetBuilder, _super), DropInPresetBuilder.prototype.$$beforeOpen = function(config) {
            switch (config.okBtn && this.addOkButton(config.okBtn), config.dropInType) {
              case __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.prompt:
                config.defaultResult = void 0;

              case __WEBPACK_IMPORTED_MODULE_0_angular2_modal__.f.confirm:
                config.cancelBtn && this.addCancelButton(config.cancelBtn);
            }
            return _super.prototype.$$beforeOpen.call(this, config);
        }, DropInPresetBuilder;
    }(__WEBPACK_IMPORTED_MODULE_2__dialog_preset__.b);
}, /* 532 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(223), __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__ = __webpack_require__(158);
    /* unused harmony export providers */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VexModalModule;
    });
    var providers = [ {
        provide: __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_3__modal__.a,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    } ], VexModalModule = function() {
        function VexModalModule() {}
        return VexModalModule.getProviders = function() {
            return providers;
        }, VexModalModule;
    }();
    VexModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.a, __WEBPACK_IMPORTED_MODULE_1__angular_common__.g ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.a, __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.b, __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.c ],
        providers: providers,
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.c, __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.b ]
    }) ], VexModalModule);
}, /* 533 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__dom_modal_renderer__ = __webpack_require__(327);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__dom_modal_renderer__.a;
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(79), __WEBPACK_IMPORTED_MODULE_2__outside_event_plugin__ = __webpack_require__(328);
    /* harmony reexport (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__outside_event_plugin__.a;
    });
}, /* 534 */
, /* 535 */
, /* 536 */
, /* 537 */
, /* 538 */
, /* 539 */
, /* 540 */
, /* 541 */
, /* 542 */
, /* 543 */
, /* 544 */
, /* 545 */
, /* 546 */
, /* 547 */
, /* 548 */
, /* 549 */
, /* 550 */
, /* 551 */
, /* 552 */
, /* 553 */
, /* 554 */
, /* 555 */
, /* 556 */
, /* 557 */
, /* 558 */
, /* 559 */
, /* 560 */
, /* 561 */
, /* 562 */
, /* 563 */
, /* 564 */
, /* 565 */
, /* 566 */
, /* 567 */
, /* 568 */
, /* 569 */
, /* 570 */
, /* 571 */
, /* 572 */
, /* 573 */
, /* 574 */
, /* 575 */
, /* 576 */
, /* 577 */
, /* 578 */
, /* 579 */
, /* 580 */
, /* 581 */
, /* 582 */
, /* 583 */
, /* 584 */
, /* 585 */
, /* 586 */
, /* 587 */
, /* 588 */
, /* 589 */
, /* 590 */
, /* 591 */
, /* 592 */
, /* 593 */
, /* 594 */
, /* 595 */
, /* 596 */
, /* 597 */
, /* 598 */
, /* 599 */
, /* 600 */
, /* 601 */
, /* 602 */
, /* 603 */
, /* 604 */
, /* 605 */
, /* 606 */
, /* 607 */
, /* 608 */
, /* 609 */
, /* 610 */
, /* 611 */
, /* 612 */
, /* 613 */
, /* 614 */
, /* 615 */
, /* 616 */
, /* 617 */
, /* 618 */
, /* 619 */
, /* 620 */
, /* 621 */
, /* 622 */
, /* 623 */
, /* 624 */
, /* 625 */
, /* 626 */
, /* 627 */
, /* 628 */
, /* 629 */
, /* 630 */
, /* 631 */
, /* 632 */
, /* 633 */
, /* 634 */
, /* 635 */
, /* 636 */
, /* 637 */
, /* 638 */
, /* 639 */
, /* 640 */
, /* 641 */
, /* 642 */
, /* 643 */
, /* 644 */
, /* 645 */
, /* 646 */
, /* 647 */
, /* 648 */
, /* 649 */
, /* 650 */
, /* 651 */
, /* 652 */
, /* 653 */
, /* 654 */
, /* 655 */
, /* 656 */
, /* 657 */
, /* 658 */
, /* 659 */
, /* 660 */
, /* 661 */
, /* 662 */
, /* 663 */
, /* 664 */
, /* 665 */
, /* 666 */
, /* 667 */
, /* 668 */
, /* 669 */
, /* 670 */
, /* 671 */
, /* 672 */
, /* 673 */
, /* 674 */
, /* 675 */
, /* 676 */
, /* 677 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 678 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 679 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 680 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 681 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 682 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 683 */
/***/
function(module, exports) {
    module.exports = "";
}, /* 684 */
, /* 685 */
, /* 686 */
, /* 687 */
, /* 688 */
, /* 689 */
, /* 690 */
, /* 691 */
, /* 692 */
, /* 693 */
, /* 694 */
, /* 695 */
, /* 696 */
, /* 697 */
, /* 698 */
, /* 699 */
, /* 700 */
, /* 701 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 702 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 703 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 704 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 705 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 706 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 707 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 708 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 709 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 710 */
/***/
function(module, exports, __webpack_require__) {
    var result = __webpack_require__(45);
    "string" == typeof result ? module.exports = result : module.exports = result.toString();
}, /* 711 */
, /* 712 */
, /* 713 */
, /* 714 */
, /* 715 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(100), __WEBPACK_IMPORTED_MODULE_2__providers_index__ = __webpack_require__(261), __WEBPACK_IMPORTED_MODULE_3__models_tokens__ = __webpack_require__(259), __WEBPACK_IMPORTED_MODULE_4__components_index__ = __webpack_require__(257), __WEBPACK_IMPORTED_MODULE_5__overlay_index__ = __webpack_require__(260);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalModule;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, ModalModule = ModalModule_1 = function() {
        function ModalModule() {}
        /**
     * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
     * Since dynamic components are not analysed by the angular compiler they must register manually
     * using entryComponents, this is an easy way to do it.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
     */
        /**
     * Returns a NgModule for use in the root Module.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns ModuleWithProviders
     */
        return ModalModule.withComponents = function(entryComponents) {
            return {
                ngModule: ModalModule_1,
                providers: [ {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__.l,
                    useValue: entryComponents,
                    multi: !0
                } ]
            };
        }, ModalModule.forRoot = function(entryComponents) {
            return {
                ngModule: ModalModule_1,
                providers: [ __WEBPACK_IMPORTED_MODULE_5__overlay_index__.a, {
                    provide: __WEBPACK_IMPORTED_MODULE_3__models_tokens__.a,
                    useClass: __WEBPACK_IMPORTED_MODULE_2__providers_index__.a
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__.d,
                    useClass: __WEBPACK_IMPORTED_MODULE_2__providers_index__.b,
                    multi: !0
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__.l,
                    useValue: entryComponents || [],
                    multi: !0
                } ]
            };
        }, ModalModule;
    }();
    ModalModule = ModalModule_1 = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        declarations: [ __WEBPACK_IMPORTED_MODULE_5__overlay_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.a, __WEBPACK_IMPORTED_MODULE_4__components_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.c, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.c, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.d, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.e ],
        exports: [ __WEBPACK_IMPORTED_MODULE_4__components_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.c, __WEBPACK_IMPORTED_MODULE_4__components_index__.a, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.c, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.d, __WEBPACK_IMPORTED_MODULE_5__overlay_index__.e ],
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_5__overlay_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.b, __WEBPACK_IMPORTED_MODULE_4__components_index__.c ]
    }) ], ModalModule);
    var ModalModule_1;
}, /* 716 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(256);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CSSBackdrop;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, CSSBackdrop = function(_super) {
        function CSSBackdrop(el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            _this.activateAnimationListener();
            var style = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            };
            return Object.keys(style).forEach(function(k) {
                return _this.setStyle(k, style[k]);
            }), _this;
        }
        return __extends(CSSBackdrop, _super), CSSBackdrop;
    }(__WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__.a);
    CSSBackdrop = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "css-backdrop",
        host: {
            "[attr.class]": "cssClass",
            "[attr.style]": "styleStr"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: ""
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], CSSBackdrop);
}, /* 717 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__ = __webpack_require__(256), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(88);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return CSSDialogContainer;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, CSSDialogContainer = function(_super) {
        function CSSDialogContainer(dialog, el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            return _this.dialog = dialog, _this.activateAnimationListener(), _this;
        }
        return __extends(CSSDialogContainer, _super), CSSDialogContainer;
    }(__WEBPACK_IMPORTED_MODULE_1__base_dynamic_component__.a);
    CSSDialogContainer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "css-dialog-container",
        host: {
            tabindex: "-1",
            role: "dialog"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: "<ng-content></ng-content>"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__.a, __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], CSSDialogContainer);
}, /* 718 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return SwapComponentDirective;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, SwapComponentDirective = function() {
        function SwapComponentDirective(cfr, vcRef, tRef) {
            this.cfr = cfr, this.vcRef = vcRef, this.tRef = tRef, this.onCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y(!1);
        }
        return Object.defineProperty(SwapComponentDirective.prototype, "swapCmp", {
            set: function(component) {
                if (this.component = component, this.vcRef.clear(), this.component) {
                    var injector = this.swapCmpInjector || this.vcRef.parentInjector;
                    Array.isArray(this.swapCmpBindings) && this.swapCmpBindings.length > 0 && (injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.fromResolvedProviders(this.swapCmpBindings, injector));
                    var cmpRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(component), this.vcRef.length, injector, this.swapCmpProjectables);
                    cmpRef.changeDetectorRef.detectChanges(), this.onCreate.emit(cmpRef);
                }
            },
            enumerable: !0,
            configurable: !0
        }), SwapComponentDirective;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], SwapComponentDirective.prototype, "swapCmpBindings", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.c) ], SwapComponentDirective.prototype, "swapCmpInjector", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Array) ], SwapComponentDirective.prototype, "swapCmpProjectables", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Z)(), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.Y) ], SwapComponentDirective.prototype, "onCreate", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)(), __metadata("design:type", Object), __metadata("design:paramtypes", [ Object ]) ], SwapComponentDirective.prototype, "swapCmp", null), 
    SwapComponentDirective = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[swapCmp]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.U, __WEBPACK_IMPORTED_MODULE_0__angular_core__.H, __WEBPACK_IMPORTED_MODULE_0__angular_core__.G ]) ], SwapComponentDirective);
}, /* 719 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DialogRefStack;
    });
    var BASKET_GROUP = {}, DialogRefStack = function() {
        function DialogRefStack() {
            this._stack = [], this._stackMap = new Map();
        }
        /**
     * Push a DialogRef into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param dialogRef
     */
        /**
     * Remove a DialogRef from the stack.
     * @param dialogRef
     */
        return Object.defineProperty(DialogRefStack.prototype, "length", {
            get: function() {
                return this._stack.length;
            },
            enumerable: !0,
            configurable: !0
        }), DialogRefStack.prototype.push = function(dialogRef, group) {
            this._stack.indexOf(dialogRef) === -1 && (this._stack.push(dialogRef), this._stackMap.set(dialogRef, group || BASKET_GROUP));
        }, DialogRefStack.prototype.pushManaged = function(dialogRef, group) {
            var _this = this;
            this.push(dialogRef, group), dialogRef.onDestroy.subscribe(function() {
                return _this.remove(dialogRef);
            });
        }, DialogRefStack.prototype.pop = function() {
            var dialogRef = this._stack.pop();
            return this._stackMap.delete(dialogRef), dialogRef;
        }, DialogRefStack.prototype.remove = function(dialogRef) {
            var idx = this.indexOf(dialogRef);
            idx > -1 && (this._stack.splice(idx, 1), this._stackMap.delete(dialogRef));
        }, DialogRefStack.prototype.index = function(index) {
            return this._stack[index];
        }, DialogRefStack.prototype.indexOf = function(dialogRef) {
            return this._stack.indexOf(dialogRef);
        }, DialogRefStack.prototype.groupOf = function(dialogRef) {
            return this._stackMap.get(dialogRef);
        }, DialogRefStack.prototype.groupBy = function(group) {
            var arr = [];
            return group && this._stackMap.forEach(function(value, key) {
                value === group && arr.push(key);
            }), arr;
        }, DialogRefStack.prototype.groupLength = function(group) {
            var count = 0;
            return group && this._stackMap.forEach(function(value, key) {
                value === group && count++;
            }), count;
        }, DialogRefStack;
    }();
}, /* 720 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__providers_index__ = __webpack_require__(261), __WEBPACK_IMPORTED_MODULE_1__modal_context__ = __webpack_require__(385), __WEBPACK_IMPORTED_MODULE_2__framework_utils__ = __webpack_require__(87);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalOpenContext;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return ModalOpenContextBuilder;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, DEFAULT_SETTERS = [ "component" ], ModalOpenContext = function(_super) {
        function ModalOpenContext() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(ModalOpenContext, _super), ModalOpenContext;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.a), ModalOpenContextBuilder = function(_super) {
        function ModalOpenContextBuilder(defaultValues, initialSetters, baseType) {
            return void 0 === defaultValues && (defaultValues = void 0), void 0 === initialSetters && (initialSetters = void 0), 
            void 0 === baseType && (baseType = void 0), _super.call(this, defaultValues || {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__framework_utils__.d)(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
        }
        /**
     * Hook to alter config and return bindings.
     * @param config
     */
        /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
        return __extends(ModalOpenContextBuilder, _super), ModalOpenContextBuilder.prototype.$$beforeOpen = function(config) {
            return [];
        }, ModalOpenContextBuilder.prototype.open = function(viewContainer) {
            var context = this.toJSON();
            if (!(context.modal instanceof __WEBPACK_IMPORTED_MODULE_0__providers_index__.c)) return Promise.reject(new Error("Configuration Error: modal service not set."));
            var overlayConfig = {
                context: context,
                viewContainer: viewContainer,
                bindings: "function" == typeof this.$$beforeOpen && this.$$beforeOpen(context)
            };
            return context.modal.open(context.component, overlayConfig);
        }, ModalOpenContextBuilder;
    }(__WEBPACK_IMPORTED_MODULE_1__modal_context__.b);
}, /* 721 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(87), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(88), __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(257);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ModalOverlay;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, ModalOverlay = function(_super) {
        function ModalOverlay(dialogRef, vcr, el, renderer) {
            var _this = _super.call(this, el, renderer) || this;
            return _this.dialogRef = dialogRef, _this.vcr = vcr, _this.activateAnimationListener(), 
            _this;
        }
        /**
     * @internal
     */
        /**
     * Define an element that click inside it will not trigger modal close.
     * Since events bubble, clicking on a dialog will bubble up to the overlay, a plugin
     * must define an element that represent the dialog, the overlay will make sure no to close when
     * it was clicked.
     * @param element
     */
        /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
        /**
     * A handler running before destruction of the overlay
     * use to delay destruction due to animation.
     * This is part of the workaround for animation, see canDestroy.
     *
     * NOTE: There is no guarantee that the listeners will fire, use dialog.onDestory for that.
     * @param fn
     */
        return __extends(ModalOverlay, _super), ModalOverlay.prototype.getProjectables = function(content, bindings) {
            var nodes;
            return nodes = "string" == typeof content ? [ [ this.renderer.createText(null, "" + content) ] ] : content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__.G ? [ this.dialogRef.overlay.defaultViewContainer.createEmbeddedView(content, {
                dialogRef: this.dialogRef
            }).rootNodes ] : [ this.embedComponent({
                component: content,
                bindings: bindings
            }).rootNodes ];
        }, ModalOverlay.prototype.embedComponent = function(config) {
            return this.vcr.createEmbeddedView(this.template, {
                $implicit: config
            });
        }, ModalOverlay.prototype.addComponent = function(type, bindings, projectableNodes) {
            return void 0 === bindings && (bindings = []), void 0 === projectableNodes && (projectableNodes = []), 
            _super.prototype._addComponent.call(this, {
                component: type,
                vcRef: this.innerVcr,
                bindings: bindings,
                projectableNodes: projectableNodes
            });
        }, ModalOverlay.prototype.fullscreen = function() {
            var _this = this, style = {
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "z-index": 1500
            };
            Object.keys(style).forEach(function(k) {
                return _this.setStyle(k, style[k]);
            });
        }, ModalOverlay.prototype.insideElement = function() {
            var _this = this, style = {
                position: "absolute",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            Object.keys(style).forEach(function(k) {
                return _this.setStyle(k, style[k]);
            });
        }, ModalOverlay.prototype.setClickBoundary = function(element) {
            var _this = this, target, elListener = function(event) {
                return target = event.target;
            }, docListener = function(event) {
                if (!_this.dialogRef.context.isBlocking && _this.dialogRef.overlay.isTopMost(_this.dialogRef)) {
                    var current = event.target;
                    // on click, this will hit.
                    if (current !== target) {
                        // on mouse down -> drag -> release the current might not be 'target', it might be
                        // a sibling or a child (i.e: not part of the tree-up direction). It might also be a release
                        // outside the dialog... so we compare to the boundary element
                        do if (current === element) return; while (current.parentNode && (current = current.parentNode));
                        _this.dialogRef.dismiss();
                    }
                }
            };
            this.dialogRef.onDestroy.subscribe(function() {
                element.removeEventListener("click", elListener, !1), element.removeEventListener("touchstart", elListener, !1), 
                document.removeEventListener("click", docListener, !1), document.removeEventListener("touchend", docListener, !1);
            }), setTimeout(function() {
                element.addEventListener("mousedown", elListener, !1), element.addEventListener("touchstart", docListener, !1), 
                document.addEventListener("click", docListener, !1), document.addEventListener("touchend", docListener, !1);
            });
        }, ModalOverlay.prototype.canDestroy = function() {
            var completer = new __WEBPACK_IMPORTED_MODULE_1__framework_utils__.a();
            if (Array.isArray(this.beforeDestroyHandlers)) {
                // run destroy notification but protect against halt.
                var id_1 = setTimeout(function() {
                    id_1 = null, completer.reject();
                }, 1e3), resolve = function() {
                    null !== id_1 && (clearTimeout(id_1), completer.resolve());
                };
                Promise.all(this.beforeDestroyHandlers.map(function(fn) {
                    return fn();
                })).then(resolve).catch(resolve);
            } else completer.resolve();
            return completer.promise;
        }, ModalOverlay.prototype.beforeDestroy = function(fn) {
            this.beforeDestroyHandlers || (this.beforeDestroyHandlers = []), this.beforeDestroyHandlers.push(fn);
        }, ModalOverlay.prototype.documentKeypress = function(event) {
            // check that this modal is the last in the stack.
            this.dialogRef.overlay.isTopMost(this.dialogRef) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_utils__.b)(event.keyCode, this.dialogRef.context.keyboard) && this.dialogRef.dismiss();
        }, ModalOverlay.prototype.ngOnDestroy = function() {
            _super.prototype.ngOnDestroy.call(this), this.dialogRef.destroyed !== !0 && // if we're here the overlay is destroyed by an external event that is not user invoked.
            // i.e: The user did no call dismiss or close and dialogRef.destroy() did not invoke.
            // this will happen when routing or killing an element containing a blocked overlay (ngIf)
            // we bail out, i.e gracefully shutting down.
            this.dialogRef.bailOut();
        }, ModalOverlay;
    }(__WEBPACK_IMPORTED_MODULE_3__components_index__.d);
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("innerView", {
        read: __WEBPACK_IMPORTED_MODULE_0__angular_core__.H
    }), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.H) ], ModalOverlay.prototype, "innerVcr", void 0), 
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._2)("template"), __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__.G) ], ModalOverlay.prototype, "template", void 0), 
    ModalOverlay = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._1)({
        selector: "modal-overlay",
        host: {
            "(body:keydown)": "documentKeypress($event)"
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__.R.None,
        template: '<template #innerView></template>\n<template #template let-ctx>\n    <template [swapCmp]="ctx.component" [swapCmpBindings]="ctx.bindings" [swapCmpProjectables]="ctx.projectableNodes"></template>\n</template>\n'
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__.a, __WEBPACK_IMPORTED_MODULE_0__angular_core__.H, __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_0__angular_core__.L ]) ], ModalOverlay);
}, /* 722 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__ = __webpack_require__(88), __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__ = __webpack_require__(387), __WEBPACK_IMPORTED_MODULE_3__overlay_service__ = __webpack_require__(388);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return OverlayDialogBoundary;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return OverlayTarget;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return DefaultOverlayTarget;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, OverlayDialogBoundary = function() {
        function OverlayDialogBoundary(el, dialogRef) {
            dialogRef && el.nativeElement && dialogRef.overlayRef.instance.setClickBoundary(el.nativeElement);
        }
        return OverlayDialogBoundary;
    }();
    OverlayDialogBoundary = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[overlayDialogBoundary]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.K, __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a ]) ], OverlayDialogBoundary);
    var OverlayTarget = function() {
        function OverlayTarget(vcRef) {
            this.vcRef = vcRef;
        }
        return Object.defineProperty(OverlayTarget.prototype, "targetKey", {
            set: function(value) {
                this._targetKey = value, value && __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__.a.setVCRef(value, this.vcRef);
            },
            enumerable: !0,
            configurable: !0
        }), OverlayTarget.prototype.ngOnDestroy = function() {
            this._targetKey && __WEBPACK_IMPORTED_MODULE_2__models_vc_ref_store__.a.delVCRef(this._targetKey, this.vcRef);
        }, OverlayTarget;
    }();
    __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.E)("overlayTarget"), __metadata("design:type", String), __metadata("design:paramtypes", [ String ]) ], OverlayTarget.prototype, "targetKey", null), 
    OverlayTarget = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[overlayTarget]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_0__angular_core__.H ]) ], OverlayTarget);
    var noop = function() {}, DefaultOverlayTarget = function() {
        function DefaultOverlayTarget(overlay, vcRef) {
            this.overlay = overlay, overlay.defaultViewContainer = vcRef;
        }
        return DefaultOverlayTarget.prototype.ngOnDestroy = function() {
            this.overlay.defaultViewContainer = void 0;
        }, DefaultOverlayTarget;
    }();
    DefaultOverlayTarget = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.D)({
        selector: "[defaultOverlayTarget]"
    }), __metadata("design:paramtypes", [ __WEBPACK_IMPORTED_MODULE_3__overlay_service__.a, __WEBPACK_IMPORTED_MODULE_0__angular_core__.H ]) ], DefaultOverlayTarget);
}, /* 723 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__framework_createComponent__ = __webpack_require__(258), __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__ = __webpack_require__(88), __WEBPACK_IMPORTED_MODULE_3__overlay_index__ = __webpack_require__(260);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DOMOverlayRenderer;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, DOMOverlayRenderer = function() {
        function DOMOverlayRenderer() {}
        return DOMOverlayRenderer.prototype.render = function(dialog, vcRef, injector) {
            var bindings = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_2__models_dialog_ref__.a,
                useValue: dialog
            } ]), cmpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__framework_createComponent__.a)({
                component: __WEBPACK_IMPORTED_MODULE_3__overlay_index__.b,
                vcRef: vcRef,
                injector: injector,
                bindings: bindings
            });
            return dialog.inElement ? vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement) : document.body.appendChild(cmpRef.location.nativeElement), 
            cmpRef;
        }, DOMOverlayRenderer;
    }();
    DOMOverlayRenderer = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)() ], DOMOverlayRenderer);
}, /* 724 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__ = __webpack_require__(88);
    /* unused harmony export UnsupportedDropInError */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return Modal;
    });
    var __extends = this && this.__extends || function(d, b) {
        function __() {
            this.constructor = d;
        }
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    }, UnsupportedDropInError = function(_super) {
        function UnsupportedDropInError(dropInName) {
            var _this = _super.call(this) || this;
            return _this.message = "Unsupported Drop-In " + dropInName, _this;
        }
        return __extends(UnsupportedDropInError, _super), UnsupportedDropInError;
    }(Error), Modal = function() {
        function Modal(overlay) {
            this.overlay = overlay;
        }
        /**
     * Opens a modal window inside an existing component.
     * @param content The content to display, either string, template ref or a component.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
        /**
     * A helper function for derived classes to create backdrop & container
     * @param dialogRef
     * @param backdrop
     * @param container
     * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
     *
     * @deprecated use createBackdrop and createContainer instead
     */
        return Modal.prototype.alert = function() {
            throw new UnsupportedDropInError("alert");
        }, Modal.prototype.prompt = function() {
            throw new UnsupportedDropInError("prompt");
        }, Modal.prototype.confirm = function() {
            throw new UnsupportedDropInError("confirm");
        }, Modal.prototype.open = function(content, config) {
            config = config || {};
            try {
                var dialogs = this.overlay.open(config, this.constructor);
                // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
                //        upgrade to multiple containers.
                return dialogs.length > 1 && console.warn("Attempt to open more then 1 overlay detected.\n        Multiple modal copies are not supported at the moment, \n        only the first viewContainer will display."), 
                Promise.resolve(this.create(dialogs[0], content, config.bindings));
            } catch (e) {
                return Promise.reject(e);
            }
        }, Modal.prototype.createBackdrop = function(dialogRef, BackdropComponent) {
            var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a,
                useValue: dialogRef
            } ]);
            return dialogRef.overlayRef.instance.addComponent(BackdropComponent, b);
        }, Modal.prototype.createContainer = function(dialogRef, ContainerComponent, content, bindings) {
            var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a,
                useValue: dialogRef
            } ]).concat(bindings || []), nodes = dialogRef.overlayRef.instance.getProjectables(content, b);
            return dialogRef.overlayRef.instance.addComponent(ContainerComponent, b, nodes);
        }, Modal.prototype.createModal = function(dialogRef, backdrop, container) {
            var b = __WEBPACK_IMPORTED_MODULE_0__angular_core__.V.resolve([ {
                provide: __WEBPACK_IMPORTED_MODULE_1__models_dialog_ref__.a,
                useValue: dialogRef
            } ]);
            return {
                backdropRef: dialogRef.overlayRef.instance.addComponent(backdrop, b),
                containerRef: dialogRef.overlayRef.instance.addComponent(container, b)
            };
        }, Modal;
    }();
}, /* 725 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /**
 * An event handler factory for event handlers that bubble the event to a given handler
 * if the event target is not an ancestor of the given element.
 * @param element
 * @param handler
 * @returns {function(any): undefined}
 */
    function bubbleNonAncestorHandlerFactory(element, handler) {
        return function(event) {
            var current = event.target;
            do if (current === element) return; while (current.parentNode && (current = current.parentNode));
            handler(event);
        };
    }
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__framework_utils__ = __webpack_require__(87);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return DOMOutsideEventPlugin;
    });
    // heavily inspired by:
    // http://www.bennadel.com/blog/3025-creating-custom-dom-and-host-event-bindings-in-angular-2-beta-6.htm
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(k, v);
    }, eventMap = {
        clickOutside: "click",
        mousedownOutside: "mousedown",
        mouseupOutside: "mouseup",
        mousemoveOutside: "mousemove"
    }, DOMOutsideEventPlugin = function() {
        function DOMOutsideEventPlugin() {
            // TODO: use DI factory for this.
            document && "function" == typeof document.addEventListener || (this.addEventListener = __WEBPACK_IMPORTED_MODULE_1__framework_utils__.c);
        }
        return DOMOutsideEventPlugin.prototype.supports = function(eventName) {
            return eventMap.hasOwnProperty(eventName);
        }, DOMOutsideEventPlugin.prototype.addEventListener = function(element, eventName, handler) {
            var zone = this.manager.getZone(), onceOnOutside = function() {
                var listener = bubbleNonAncestorHandlerFactory(element, function(evt) {
                    return zone.runGuarded(function() {
                        return handler(evt);
                    });
                });
                // mimic BrowserDomAdapter.onAndCancel
                return document.addEventListener(eventMap[eventName], listener, !1), function() {
                    return document.removeEventListener(eventMap[eventName], listener, !1);
                };
            };
            // we run the event registration for the document in a different zone, this will make sure
            // change detection is off.
            // It turns out that if a component that use DOMOutsideEventPlugin is built from a click
            // event, we might get here before the event reached the document, causing a quick false
            // positive handling (when stopPropagation() was'nt invoked). To workaround this we wait
            // for the next vm turn and register.
            // Event registration returns a dispose function for that event, angular use it to clean
            // up after component get's destroyed. Since we need to return a dispose function
            // synchronously we have to put a wrapper for it since we will get it asynchronously,
            // i.e: after we need to return it.
            //
            return zone.runOutsideAngular(function() {
                var fn;
                return setTimeout(function() {
                    return fn = onceOnOutside();
                }, 0), function() {
                    return fn();
                };
            });
        }, DOMOutsideEventPlugin.prototype.addGlobalEventListener = function(target, eventName, handler) {
            throw "not supported";
        }, DOMOutsideEventPlugin;
    }();
    DOMOutsideEventPlugin = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.y)(), __metadata("design:paramtypes", []) ], DOMOutsideEventPlugin);
}, /* 726 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(390), __WEBPACK_IMPORTED_MODULE_4__modal_container_component__ = __webpack_require__(263), __WEBPACK_IMPORTED_MODULE_5__message_modal_component__ = __webpack_require__(262);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return providers;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return BootstrapModalModule;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, providers = [ {
        provide: __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_3__modal__.a,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    } ], BootstrapModalModule = function() {
        function BootstrapModalModule() {}
        return BootstrapModalModule.getProviders = function() {
            return providers;
        }, BootstrapModalModule;
    }();
    BootstrapModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.a, __WEBPACK_IMPORTED_MODULE_1__angular_common__.g ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.a, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.b, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.c, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.d, __WEBPACK_IMPORTED_MODULE_4__modal_container_component__.a ],
        providers: providers,
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_4__modal_container_component__.a, __WEBPACK_IMPORTED_MODULE_5__message_modal_component__.d ]
    }) ], BootstrapModalModule);
}, /* 727 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(266);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return providers;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return JSNativeModalModule;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, providers = [ {
        provide: __WEBPACK_IMPORTED_MODULE_1_angular2_modal__.b,
        useClass: __WEBPACK_IMPORTED_MODULE_2__modal__.a
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_2__modal__.a,
        useClass: __WEBPACK_IMPORTED_MODULE_2__modal__.a
    } ], JSNativeModalModule = function() {
        function JSNativeModalModule() {}
        return JSNativeModalModule.getProviders = function() {
            return providers;
        }, JSNativeModalModule;
    }();
    JSNativeModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        providers: providers
    }) ], JSNativeModalModule);
}, /* 728 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25), __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(398), __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__ = __webpack_require__(176);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return providers;
    }), /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return VexModalModule;
    });
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, providers = [ {
        provide: __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.b,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    }, {
        provide: __WEBPACK_IMPORTED_MODULE_3__modal__.a,
        useClass: __WEBPACK_IMPORTED_MODULE_3__modal__.a
    } ], VexModalModule = function() {
        function VexModalModule() {}
        return VexModalModule.getProviders = function() {
            return providers;
        }, VexModalModule;
    }();
    VexModalModule = __decorate([ __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.k)({
        imports: [ __WEBPACK_IMPORTED_MODULE_2_angular2_modal__.a, __WEBPACK_IMPORTED_MODULE_1__angular_common__.g ],
        declarations: [ __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.a, __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.b, __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.c ],
        providers: providers,
        entryComponents: [ __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.c, __WEBPACK_IMPORTED_MODULE_4__dialog_form_modal__.b ]
    }) ], VexModalModule);
}, /* 729 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function main() {
        return _bootstrapped ? Promise.reject(null) : (_bootstrapped = !0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__.a)().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_1__compiled_src_demo_app_app_module_ngfactory__.a).catch(function(err) {
            return console.error(err);
        }));
    }
    function bootstrapDomReady() {
        document.addEventListener("DOMContentLoaded", main);
    }
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(100), __WEBPACK_IMPORTED_MODULE_1__compiled_src_demo_app_app_module_ngfactory__ = __webpack_require__(401);
    /* harmony export (immutable) */
    __webpack_exports__.main = main, /* harmony export (immutable) */
    __webpack_exports__.bootstrapDomReady = bootstrapDomReady;
    // The app module
    var _bootstrapped = !1;
    bootstrapDomReady();
} ], [ 729 ]);