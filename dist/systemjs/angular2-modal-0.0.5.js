System.registerDynamic("models/ModalConfig", ["angular2/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var _defaultConfig;
  var ModalConfig = (function() {
    function ModalConfig(size, isBlocking, keyboard) {
      if (size === void 0) {
        size = null;
      }
      if (isBlocking === void 0) {
        isBlocking = null;
      }
      if (keyboard === void 0) {
        keyboard = undefined;
      }
      this.size = size;
      this.isBlocking = isBlocking;
      this.keyboard = keyboard;
    }
    ModalConfig.makeValid = function(config, defaultConfig) {
      defaultConfig = (defaultConfig) ? defaultConfig : _defaultConfig;
      if (!config.size)
        config.size = defaultConfig.size;
      if (config.isBlocking !== false)
        config.isBlocking = true;
      if (config.keyboard !== null) {
        if (Array.isArray(config.keyboard)) {
          config.keyboard = config.keyboard.length === 0 ? defaultConfig.keyboard : config.keyboard;
        } else if (!isNaN(config.keyboard)) {
          config.keyboard = [config.keyboard];
        } else {
          config.keyboard = defaultConfig.keyboard;
        }
      }
      return config;
    };
    ModalConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [String, Boolean, Object])], ModalConfig);
    return ModalConfig;
  }());
  exports.ModalConfig = ModalConfig;
  _defaultConfig = new ModalConfig('lg', true, [27]);
  return module.exports;
});

System.registerDynamic("components/modalBackdrop", ["angular2/core", "../models/ModalDialogInstance"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var ModalBackdrop = (function() {
    function ModalBackdrop(dialog) {
      if (!dialog.inElement) {
        this.position = this.width = this.height = null;
        this.top = this.left = this.right = this.bottom = null;
      } else {
        this.position = 'absolute';
        this.height = '100%';
        this.width = '100%';
        this.top = this.left = this.right = this.bottom = '0';
      }
    }
    ModalBackdrop = __decorate([core_1.Component({
      selector: 'modal-backdrop',
      host: {
        '[style.position]': 'position',
        '[style.height]': 'height',
        '[style.width]': 'width',
        '[style.top]': 'top',
        '[style.left]': 'left',
        '[style.right]': 'right',
        '[style.bottom]': 'bottom'
      },
      template: '<div [style.position]="position" class="in modal-backdrop" #modalBackdrop></div>'
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])], ModalBackdrop);
    return ModalBackdrop;
  }());
  exports.ModalBackdrop = ModalBackdrop;
  return module.exports;
});

System.registerDynamic("components/bootstrapModalContainer", ["angular2/core", "../models/ModalDialogInstance"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var BootstrapModalContainer = (function() {
    function BootstrapModalContainer(dialogInstance) {
      this.dialogInstance = dialogInstance;
      if (!dialogInstance.inElement) {
        this.position = null;
      } else {
        this.position = 'absolute';
      }
    }
    BootstrapModalContainer.prototype.onContainerClick = function($event) {
      $event.stopPropagation();
    };
    BootstrapModalContainer.prototype.onClick = function() {
      return !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    };
    BootstrapModalContainer.prototype.documentKeypress = function(event) {
      if (this.dialogInstance.config.keyboard && this.dialogInstance.config.keyboard.indexOf(event.keyCode) > -1) {
        this.dialogInstance.dismiss();
      }
    };
    BootstrapModalContainer = __decorate([core_1.Component({
      selector: 'bootstrap-modal',
      host: {
        'tabindex': '0',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
      },
      template: "<div class=\"modal-dialog\"\n         [class.modal-lg]=\"dialogInstance.config.size == 'lg'\"\n         [class.modal-sm]=\"dialogInstance.config.size == 'sm'\">\n         <div class=\"modal-content\" (click)=\"onContainerClick($event)\" style=\"display: block\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])], BootstrapModalContainer);
    return BootstrapModalContainer;
  }());
  exports.BootstrapModalContainer = BootstrapModalContainer;
  return module.exports;
});

System.registerDynamic("providers/Modal", ["angular2/core", "../models/ModalConfig", "../models/ModalDialogInstance", "../components/modalBackdrop", "../components/bootstrapModalContainer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var ModalConfig_1 = $__require('../models/ModalConfig');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var modalBackdrop_1 = $__require('../components/modalBackdrop');
  var bootstrapModalContainer_1 = $__require('../components/bootstrapModalContainer');
  var _config;
  var Modal = (function() {
    function Modal(componentLoader, appRef, defaultConfig) {
      this.componentLoader = componentLoader;
      this.appRef = appRef;
      _config = (defaultConfig) ? ModalConfig_1.ModalConfig.makeValid(defaultConfig) : new ModalConfig_1.ModalConfig();
    }
    Modal.prototype.open = function(componentType, bindings, config) {
      var elementRef = this.appRef._rootComponents[0].location;
      return this.openInside(componentType, elementRef, null, bindings, config);
    };
    Modal.prototype.openInside = function(componentType, elementRef, anchorName, bindings, config) {
      var _this = this;
      config = (config) ? ModalConfig_1.ModalConfig.makeValid(config, _config) : _config;
      var dialog = new ModalDialogInstance_1.ModalDialogInstance(config);
      dialog.inElement = !!anchorName;
      var dialogBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, {useValue: dialog})]);
      return this.createBackdrop(elementRef, dialogBindings, anchorName).then(function(backdropRef) {
        dialog.backdropRef = backdropRef;
        var modalDataBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, {useValue: dialog})]).concat(bindings);
        return _this.componentLoader.loadIntoLocation(bootstrapModalContainer_1.BootstrapModalContainer, backdropRef.location, 'modalBackdrop', dialogBindings).then(function(bootstrapRef) {
          dialog.bootstrapRef = bootstrapRef;
          return _this.componentLoader.loadIntoLocation(componentType, bootstrapRef.location, 'modalDialog', modalDataBindings).then(function(contentRef) {
            dialog.contentRef = contentRef;
            return dialog;
          });
        });
      });
    };
    Modal.prototype.createBackdrop = function(elementRef, bindings, anchorName) {
      return (!anchorName) ? this.componentLoader.loadNextToLocation(modalBackdrop_1.ModalBackdrop, elementRef, bindings) : this.componentLoader.loadIntoLocation(modalBackdrop_1.ModalBackdrop, elementRef, anchorName, bindings);
    };
    Modal = __decorate([core_1.Injectable(), __param(2, core_1.Optional()), __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ApplicationRef, ModalConfig_1.ModalConfig])], Modal);
    return Modal;
  }());
  exports.Modal = Modal;
  return module.exports;
});

System.registerDynamic("commonModals/yesNoModal", ["angular2/core", "angular2/common", "../models/ICustomModal", "../models/ModalDialogInstance"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var ICustomModal_1 = $__require('../models/ICustomModal');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var YesNoModalContent = (function() {
    function YesNoModalContent(title, body, hideNo, yesText, noText) {
      if (title === void 0) {
        title = 'Hello World Title';
      }
      if (body === void 0) {
        body = 'Hello World Body!';
      }
      if (hideNo === void 0) {
        hideNo = false;
      }
      if (yesText === void 0) {
        yesText = 'YES';
      }
      if (noText === void 0) {
        noText = 'NO';
      }
      this.title = title;
      this.body = body;
      this.hideNo = hideNo;
      this.yesText = yesText;
      this.noText = noText;
    }
    return YesNoModalContent;
  }());
  exports.YesNoModalContent = YesNoModalContent;
  var YesNoModal = (function() {
    function YesNoModal(dialog, modelContentData) {
      this.dialog = dialog;
      this.context = modelContentData;
    }
    YesNoModal.prototype.ok = function($event) {
      $event.stopPropagation();
      this.dialog.close(true);
    };
    YesNoModal.prototype.cancel = function() {
      this.dialog.dismiss();
    };
    YesNoModal = __decorate([core_1.Component({
      selector: 'modal-content',
      directives: [common_1.NgIf],
      template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok($event)\">{{context.yesText}}</button>\n            <button *ngIf=\"!context.hideNo\" class=\"btn btn-warning\" (click)=\"cancel()\">{{context.noText}}</button>\n        </div>"
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])], YesNoModal);
    return YesNoModal;
  }());
  exports.YesNoModal = YesNoModal;
  return module.exports;
});

System.registerDynamic("models/ICustomModal", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ICustomModal = (function() {
    function ICustomModal() {}
    return ICustomModal;
  }());
  exports.ICustomModal = ICustomModal;
  return module.exports;
});

System.registerDynamic("models/ModalDialogInstance", ["angular2/src/facade/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var async_1 = $__require('angular2/src/facade/async');
  var ModalDialogInstance = (function() {
    function ModalDialogInstance(config) {
      this.config = config;
      this._resultDefered = async_1.PromiseWrapper.completer();
    }
    Object.defineProperty(ModalDialogInstance.prototype, "backdropRef", {
      set: function(value) {
        this._backdropRef = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "bootstrapRef", {
      set: function(value) {
        this._bootstrapRef = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "result", {
      get: function() {
        return this._resultDefered.promise;
      },
      enumerable: true,
      configurable: true
    });
    ModalDialogInstance.prototype.close = function(result) {
      if (result === void 0) {
        result = null;
      }
      if (this.contentRef.instance.beforeClose && this.contentRef.instance.beforeClose() === true)
        return;
      this.dispose();
      this._resultDefered.resolve(result);
    };
    ModalDialogInstance.prototype.dismiss = function() {
      if (this.contentRef.instance.beforeDismiss && this.contentRef.instance.beforeDismiss() === true)
        return;
      this.dispose();
      this._resultDefered.reject();
    };
    ModalDialogInstance.prototype.dispose = function() {
      this._bootstrapRef.dispose();
      this._backdropRef.dispose();
      this.contentRef.dispose();
    };
    return ModalDialogInstance;
  }());
  exports.ModalDialogInstance = ModalDialogInstance;
  return module.exports;
});

System.registerDynamic("commonModals/okOnlyModal", ["angular2/core", "../models/ICustomModal", "../models/ModalDialogInstance"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var ICustomModal_1 = $__require('../models/ICustomModal');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var OKOnlyContent = (function() {
    function OKOnlyContent(title, body, okText) {
      if (title === void 0) {
        title = 'Hello World Title';
      }
      if (body === void 0) {
        body = 'Hello World Body!';
      }
      if (okText === void 0) {
        okText = 'OK';
      }
      this.title = title;
      this.body = body;
      this.okText = okText;
    }
    return OKOnlyContent;
  }());
  exports.OKOnlyContent = OKOnlyContent;
  var OKOnlyModal = (function() {
    function OKOnlyModal(dialog, modelContentData) {
      this.dialog = dialog;
      this.context = modelContentData;
    }
    OKOnlyModal.prototype.ok = function() {
      this.dialog.close(true);
    };
    OKOnlyModal = __decorate([core_1.Component({
      selector: 'modal-content',
      template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok()\">{{context.okText}}</button>\n        </div>"
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])], OKOnlyModal);
    return OKOnlyModal;
  }());
  exports.OKOnlyModal = OKOnlyModal;
  return module.exports;
});

System.registerDynamic("angular2-modal", ["./models/ICustomModal", "./models/ModalConfig", "./models/ModalDialogInstance", "./components/modalBackdrop", "./components/bootstrapModalContainer", "./providers/Modal", "./commonModals/yesNoModal", "./commonModals/okOnlyModal"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('./models/ICustomModal'));
  __export($__require('./models/ModalConfig'));
  __export($__require('./models/ModalDialogInstance'));
  __export($__require('./components/modalBackdrop'));
  __export($__require('./components/bootstrapModalContainer'));
  __export($__require('./providers/Modal'));
  __export($__require('./commonModals/yesNoModal'));
  __export($__require('./commonModals/okOnlyModal'));
  return module.exports;
});
