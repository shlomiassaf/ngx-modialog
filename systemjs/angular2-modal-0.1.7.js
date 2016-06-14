System.registerDynamic("presets/OneButtonPreset", ["@angular/core", "../modals/MessageModal", "./base/MessageModalPreset", "../framework/Utils"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var core_1 = $__require('@angular/core');
  var MessageModal_1 = $__require('../modals/MessageModal');
  var MessageModalPreset_1 = $__require('./base/MessageModalPreset');
  var Utils_1 = $__require('../framework/Utils');
  function createBindings(config) {
    config.buttons = [{
      cssClass: config.okBtnClass,
      caption: config.okBtn,
      onClick: function(modalComponent, $event) {
        return modalComponent.dialog.close(true);
      }
    }];
    return core_1.ReflectiveInjector.resolve([core_1.provide(MessageModal_1.MessageModalContext, {useValue: config})]);
  }
  var OneButtonPreset = (function(_super) {
    __extends(OneButtonPreset, _super);
    function OneButtonPreset(modal, defaultValues) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      _super.call(this, Utils_1.extend({
        modal: modal,
        bindings: createBindings,
        okBtn: 'OK',
        okBtnClass: 'btn btn-primary'
      }, defaultValues || {}), ['okBtn', 'okBtnClass']);
    }
    return OneButtonPreset;
  }(MessageModalPreset_1.MessageModalPreset));
  exports.OneButtonPreset = OneButtonPreset;
  return module.exports;
});

System.registerDynamic("framework/ModalInstanceStack", ["@angular/platform-browser/src/dom/dom_adapter"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var dom_adapter_1 = $__require('@angular/platform-browser/src/dom/dom_adapter');
  var ModalInstanceStack = (function() {
    function ModalInstanceStack() {
      this._stack = [];
    }
    ModalInstanceStack.prototype.push = function(mInstance) {
      var idx = this._stack.indexOf(mInstance);
      if (idx === -1)
        this._stack.push(mInstance);
      var DOM = dom_adapter_1.getDOM();
      if (DOM && this._stack.length === 1) {
        DOM.addClass(DOM.query('body'), 'modal-open');
      }
    };
    ModalInstanceStack.prototype.pushManaged = function(mInstance) {
      var _this = this;
      this.push(mInstance);
      mInstance.result.then(function() {
        return _this.remove(mInstance);
      }).catch(function() {
        return _this.remove(mInstance);
      });
    };
    ModalInstanceStack.prototype.pop = function() {
      this._stack.pop();
    };
    ModalInstanceStack.prototype.remove = function(mInstance) {
      var idx = this._stack.indexOf(mInstance);
      if (idx > -1)
        this._stack.splice(idx, 1);
      var DOM = dom_adapter_1.getDOM();
      if (DOM && this._stack.length === 0) {
        DOM.removeClass(DOM.query('body'), 'modal-open');
      }
    };
    ModalInstanceStack.prototype.index = function(index) {
      return this._stack[index];
    };
    ModalInstanceStack.prototype.indexOf = function(mInstance) {
      return this._stack.indexOf(mInstance);
    };
    Object.defineProperty(ModalInstanceStack.prototype, "length", {
      get: function() {
        return this._stack.length;
      },
      enumerable: true,
      configurable: true
    });
    return ModalInstanceStack;
  }());
  exports.ModalInstanceStack = ModalInstanceStack;
  return module.exports;
});

System.registerDynamic("components/bootstrapModalContainer", ["@angular/core", "../models/ModalDialogInstance", "../providers/Modal"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var Modal_1 = $__require('../providers/Modal');
  var BootstrapModalContainer = (function() {
    function BootstrapModalContainer(dialog, _modal, _cr, _compileConfig) {
      this.dialog = dialog;
      this._modal = _modal;
      this._cr = _cr;
      this._compileConfig = _compileConfig;
      if (!dialog.inElement) {
        this.position = null;
      } else {
        this.position = 'absolute';
      }
    }
    BootstrapModalContainer.prototype.ngAfterViewInit = function() {
      var _this = this;
      this._cr.resolveComponent(this._compileConfig.component).then(function(cmpFactory) {
        var vcr = _this._viewContainer,
            bindings = _this._compileConfig.bindings,
            ctxInjector = vcr.parentInjector;
        var childInjector = Array.isArray(bindings) && bindings.length > 0 ? core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return _this.dialog.contentRef = vcr.createComponent(cmpFactory, vcr.length, childInjector);
      });
    };
    BootstrapModalContainer.prototype.onContainerClick = function($event) {
      $event.stopPropagation();
    };
    BootstrapModalContainer.prototype.onClick = function() {
      return !this.dialog.config.isBlocking && this.dialog.dismiss();
    };
    BootstrapModalContainer.prototype.documentKeypress = function(event) {
      if (this._modal.stackPosition(this.dialog) !== this._modal.stackLength - 1)
        return;
      if (this.dialog.config.supportsKey(event.keyCode)) {
        this.dialog.dismiss();
      }
    };
    __decorate([core_1.ViewChild('modalDialog', {read: core_1.ViewContainerRef}), __metadata('design:type', core_1.ViewContainerRef)], BootstrapModalContainer.prototype, "_viewContainer", void 0);
    BootstrapModalContainer = __decorate([core_1.Component({
      selector: 'modal-container',
      host: {
        'tabindex': '-1',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
      },
      template: "<div [ngClass]=\"dialog.config.dialogClass\"\n          [class.modal-lg]=\"dialog.config.size == 'lg'\"\n          [class.modal-sm]=\"dialog.config.size == 'sm'\">\n         <div class=\"modal-content\" \n              role=\"document\"\n              style=\"display: block\"\n              (click)=\"onContainerClick($event)\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, Modal_1.Modal, core_1.ComponentResolver, Modal_1.ModalCompileConfig])], BootstrapModalContainer);
    return BootstrapModalContainer;
  }());
  exports.BootstrapModalContainer = BootstrapModalContainer;
  return module.exports;
});

System.registerDynamic("components/modalBackdrop", ["@angular/core", "../models/ModalDialogInstance", "./bootstrapModalContainer"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var bootstrapModalContainer_1 = $__require('./bootstrapModalContainer');
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
      directives: [bootstrapModalContainer_1.BootstrapModalContainer],
      template: "<div [style.position]=\"position\" class=\"modal-backdrop fade in\"></div>\n<modal-container></modal-container>"
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])], ModalBackdrop);
    return ModalBackdrop;
  }());
  exports.ModalBackdrop = ModalBackdrop;
  return module.exports;
});

System.registerDynamic("providers/Modal", ["@angular/core", "../framework/ModalInstanceStack", "../models/ModalConfig", "../models/ModalDialogInstance", "../components/modalBackdrop", "../presets"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var ModalInstanceStack_1 = $__require('../framework/ModalInstanceStack');
  var ModalConfig_1 = $__require('../models/ModalConfig');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var modalBackdrop_1 = $__require('../components/modalBackdrop');
  var presets_1 = $__require('../presets');
  var _stack = new ModalInstanceStack_1.ModalInstanceStack();
  var ModalCompileConfig = (function() {
    function ModalCompileConfig(component, bindings) {
      this.component = component;
      this.bindings = bindings;
    }
    return ModalCompileConfig;
  }());
  exports.ModalCompileConfig = ModalCompileConfig;
  var Modal = (function() {
    function Modal(_cr, _renderer, defaultConfig) {
      this._cr = _cr;
      this._renderer = _renderer;
      Object.defineProperty(this, 'config', {
        configurable: false,
        enumerable: true,
        value: (defaultConfig) ? ModalConfig_1.ModalConfig.makeValid(defaultConfig) : ModalConfig_1.ModalConfig.makeValid(new ModalConfig_1.ModalConfig()),
        writable: false
      });
    }
    Modal.prototype.alert = function() {
      return new presets_1.OneButtonPreset(this, {isBlocking: false});
    };
    Modal.prototype.prompt = function() {
      return new presets_1.OneButtonPreset(this, {
        isBlocking: true,
        keyboard: null
      });
    };
    Modal.prototype.confirm = function() {
      return new presets_1.TwoButtonPreset(this, {
        isBlocking: true,
        keyboard: null
      });
    };
    Modal.prototype.open = function(component, bindings, config) {
      return this.openInside(component, this.defaultViewContainer, bindings, config);
    };
    Modal.prototype.openInside = function(component, viewContainer, bindings, config) {
      config = (config) ? ModalConfig_1.ModalConfig.makeValid(config, this.config) : this.config;
      var dialog = new ModalDialogInstance_1.ModalDialogInstance(config);
      var compileConfig = new ModalCompileConfig(component, bindings || []);
      dialog.inElement = viewContainer !== this.defaultViewContainer;
      var dialogBindings = core_1.ReflectiveInjector.resolve([new core_1.Provider(Modal, {useValue: this}), new core_1.Provider(ModalDialogInstance_1.ModalDialogInstance, {useValue: dialog}), new core_1.Provider(ModalCompileConfig, {useValue: compileConfig})]);
      return this.createBackdrop(viewContainer, dialogBindings, dialog.inElement).then(function(backdropRef) {
        dialog.destroy = function() {
          return backdropRef.destroy();
        };
        _stack.pushManaged(dialog);
        return dialog;
      });
    };
    Modal.prototype.stackPosition = function(mInstance) {
      return _stack.indexOf(mInstance);
    };
    Object.defineProperty(Modal.prototype, "stackLength", {
      get: function() {
        return _stack.length;
      },
      enumerable: true,
      configurable: true
    });
    Modal.prototype.createBackdrop = function(viewContainer, bindings, attachToBody) {
      var _this = this;
      return this._cr.resolveComponent(modalBackdrop_1.ModalBackdrop).then(function(cmpFactory) {
        var ctxInjector = viewContainer.parentInjector;
        var childInjector = Array.isArray(bindings) && bindings.length > 0 ? core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return viewContainer.createComponent(cmpFactory, viewContainer.length, childInjector);
      }).then(function(cmpRef) {
        if (attachToBody) {
          _this._renderer.invokeElementMethod(viewContainer.element.nativeElement, 'appendChild', [cmpRef.hostView.rootNodes[0]]);
        } else {
          document.body.appendChild(cmpRef.hostView.rootNodes[0]);
        }
        return cmpRef;
      });
    };
    Modal = __decorate([core_1.Injectable(), __param(2, core_1.Optional()), __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.Renderer, ModalConfig_1.ModalConfig])], Modal);
    return Modal;
  }());
  exports.Modal = Modal;
  exports.MODAL_PROVIDERS = [new core_1.Provider(Modal, {useClass: Modal}), new core_1.Provider(ModalConfig_1.ModalConfig, {useValue: new ModalConfig_1.ModalConfig('lg', true, 27)})];
  return module.exports;
});

System.registerDynamic("models/ModalConfig", ["@angular/core"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var _defaultConfig;
  var ModalConfig = (function() {
    function ModalConfig(size, isBlocking, keyboard, dialogClass) {
      if (size === void 0) {
        size = undefined;
      }
      if (isBlocking === void 0) {
        isBlocking = null;
      }
      if (keyboard === void 0) {
        keyboard = undefined;
      }
      if (dialogClass === void 0) {
        dialogClass = undefined;
      }
      this.size = size;
      this.isBlocking = isBlocking;
      this.keyboard = keyboard;
      this.dialogClass = dialogClass;
    }
    ModalConfig.makeValid = function(config, defaultConfig) {
      defaultConfig = (defaultConfig) ? defaultConfig : _defaultConfig;
      if (!config.size)
        config.size = defaultConfig.size;
      if (config.isBlocking !== false)
        config.isBlocking = true;
      if (config.keyboard === null) {
        config.keyboard = [];
      } else if (typeof config.keyboard === 'number') {
        config.keyboard = [config.keyboard];
      } else if (!Array.isArray(config.keyboard)) {
        config.keyboard = defaultConfig.keyboard;
      }
      if (!config.dialogClass) {
        config.dialogClass = defaultConfig.dialogClass;
      }
      return config;
    };
    ModalConfig.prototype.supportsKey = function(keyCode) {
      return this.keyboard.indexOf(keyCode) > -1;
    };
    ModalConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [String, Boolean, Object, String])], ModalConfig);
    return ModalConfig;
  }());
  exports.ModalConfig = ModalConfig;
  _defaultConfig = new ModalConfig('lg', true, [27], 'modal-dialog');
  return module.exports;
});

System.registerDynamic("framework/FluentAssign", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var PRIVATE_PREFIX = '$$';
  var RESERVED_REGEX = /^(\$\$).*/;
  function validateMethodName(name) {
    if (!name) {
      throw new Error("Illegal method name. Empty method name is not allowed");
    } else if (name in this) {
      throw new Error("A member name '" + name + "' already defined.");
    }
  }
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
  function setAssignMethod(obj, propertyName, writeOnce) {
    if (writeOnce === void 0) {
      writeOnce = false;
    }
    validateMethodName.call(obj, propertyName);
    Object.defineProperty(obj, propertyName, {
      configurable: false,
      enumerable: false,
      writable: false,
      value: function(value) {
        var key = privateKey(propertyName);
        if (writeOnce && this.hasOwnProperty(key)) {
          throw new Error("Overriding config property '" + propertyName + "' is not allowed.");
        }
        this[key] = value;
        return this;
      }
    });
  }
  exports.setAssignMethod = setAssignMethod;
  var FluentAssignFactory = (function() {
    function FluentAssignFactory(fluentAssign) {
      this._fluentAssign = fluentAssign instanceof FluentAssign ? fluentAssign : new FluentAssign();
    }
    FluentAssignFactory.prototype.setMethod = function(name, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = undefined;
      }
      setAssignMethod(this._fluentAssign, name);
      if (defaultValue !== undefined) {
        this._fluentAssign[name](defaultValue);
      }
      return this;
    };
    Object.defineProperty(FluentAssignFactory.prototype, "fluentAssign", {
      get: function() {
        return this._fluentAssign;
      },
      enumerable: true,
      configurable: true
    });
    return FluentAssignFactory;
  }());
  exports.FluentAssignFactory = FluentAssignFactory;
  var FluentAssign = (function() {
    function FluentAssign(defaultValues, initialSetters) {
      var _this = this;
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (defaultValues) {
        Object.getOwnPropertyNames(defaultValues).forEach(function(name) {
          return _this[privateKey(name)] = defaultValues[name];
        });
      }
      if (Array.isArray(initialSetters)) {
        initialSetters.forEach(function(name) {
          return setAssignMethod(_this, name);
        });
      }
    }
    FluentAssign.compose = function(defaultValues, initialSetters) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      return FluentAssign.composeWith(new FluentAssign(defaultValues, initialSetters));
    };
    FluentAssign.composeWith = function(fluentAssign) {
      return new FluentAssignFactory(fluentAssign);
    };
    FluentAssign.prototype.toJSON = function() {
      var _this = this;
      return getAssignedPropertyNames(this).reduce(function(obj, name) {
        obj[name] = _this[privateKey(name)];
        return obj;
      }, {});
    };
    return FluentAssign;
  }());
  exports.FluentAssign = FluentAssign;
  return module.exports;
});

System.registerDynamic("presets/base/ModalAwarePreset", ["../../providers/Modal", "../../models/ModalConfig", "./../../framework/FluentAssign"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Modal_1 = $__require('../../providers/Modal');
  var ModalConfig_1 = $__require('../../models/ModalConfig');
  var FluentAssign_1 = $__require('./../../framework/FluentAssign');
  var ModalAwarePreset = (function(_super) {
    __extends(ModalAwarePreset, _super);
    function ModalAwarePreset(defaultValues, initialSetters) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      _super.call(this, defaultValues, initialSetters);
      FluentAssign_1.setAssignMethod(this, 'modal', true);
      FluentAssign_1.setAssignMethod(this, 'component', true);
      FluentAssign_1.setAssignMethod(this, 'bindings', true);
      FluentAssign_1.setAssignMethod(this, 'size');
      FluentAssign_1.setAssignMethod(this, 'isBlocking');
      FluentAssign_1.setAssignMethod(this, 'keyboard');
      FluentAssign_1.setAssignMethod(this, 'dialogClass');
    }
    ModalAwarePreset.prototype.open = function(viewContainer) {
      var config = this.toJSON();
      if (!(config.modal instanceof Modal_1.Modal)) {
        return Promise.reject(new Error('Configuration Error: modal service not set.'));
      }
      if (typeof config.bindings !== 'function') {
        return Promise.reject(new Error('Configuration Error: bindings not set.'));
      }
      if (viewContainer) {
        return config.modal.openInside(config.component, viewContainer, config.bindings(config), new ModalConfig_1.ModalConfig(config.size, config.isBlocking, config.keyboard));
      } else {
        return config.modal.open(config.component, config.bindings(config), new ModalConfig_1.ModalConfig(config.size, config.isBlocking, config.keyboard, config.dialogClass));
      }
    };
    return ModalAwarePreset;
  }(FluentAssign_1.FluentAssign));
  exports.ModalAwarePreset = ModalAwarePreset;
  return module.exports;
});

System.registerDynamic("components/modalFooter", ["@angular/core"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var ModalFooter = (function() {
    function ModalFooter() {
      this.onButtonClick = new core_1.EventEmitter();
    }
    ModalFooter.prototype.onClick = function(btn, $event) {
      this.onButtonClick.emit({
        btn: btn,
        $event: $event
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], ModalFooter.prototype, "footerClass", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Array)], ModalFooter.prototype, "buttons", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], ModalFooter.prototype, "onButtonClick", void 0);
    ModalFooter = __decorate([core_1.Component({
      selector: 'modal-footer',
      template: "<div [ngClass]=\"footerClass\">\n    <button *ngFor=\"let btn of buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
    }), __metadata('design:paramtypes', [])], ModalFooter);
    return ModalFooter;
  }());
  exports.ModalFooter = ModalFooter;
  return module.exports;
});

System.registerDynamic("modals/MessageModal", ["@angular/core", "../models/ModalDialogInstance", "../components/modalFooter"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var ModalDialogInstance_1 = $__require('../models/ModalDialogInstance');
  var modalFooter_1 = $__require('../components/modalFooter');
  var MessageModalContext = (function() {
    function MessageModalContext() {}
    return MessageModalContext;
  }());
  exports.MessageModalContext = MessageModalContext;
  var MessageModal = (function() {
    function MessageModal(dialog, context) {
      this.dialog = dialog;
      this.context = context;
    }
    MessageModal.prototype.onFooterButtonClick = function($event) {
      $event.btn.onClick(this, $event.$event);
    };
    Object.defineProperty(MessageModal.prototype, "titleHtml", {
      get: function() {
        return this.context.titleHtml ? 1 : 0;
      },
      enumerable: true,
      configurable: true
    });
    MessageModal = __decorate([core_1.Component({
      selector: 'modal-content',
      directives: [modalFooter_1.ModalFooter],
      template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n        <div *ngSwitchWhen=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n        <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n    </div>\n    <div [ngClass]=\"context.bodyClass\" [innerHtml]=\"context.body\"></div>\n    <modal-footer [footerClass]=\"context.footerClass\" \n                  [buttons]=\"context.buttons\"\n                  (onButtonClick)=\"onFooterButtonClick($event)\"></modal-footer>"
    }), __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, MessageModalContext])], MessageModal);
    return MessageModal;
  }());
  exports.MessageModal = MessageModal;
  return module.exports;
});

System.registerDynamic("framework/Utils", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function extend(m1, m2) {
    var m = {};
    for (var attr in m1) {
      if (m1.hasOwnProperty(attr)) {
        m[attr] = m1[attr];
      }
    }
    for (var attr in m2) {
      if (m2.hasOwnProperty(attr)) {
        m[attr] = m2[attr];
      }
    }
    return m;
  }
  exports.extend = extend;
  function arrayUnion(arr1, arr2) {
    return arr1.concat(arr2.filter(function(v) {
      return arr1.indexOf(v) === -1;
    }));
  }
  exports.arrayUnion = arrayUnion;
  return module.exports;
});

System.registerDynamic("presets/base/MessageModalPreset", ["./ModalAwarePreset", "../../modals/MessageModal", "../../framework/Utils"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ModalAwarePreset_1 = $__require('./ModalAwarePreset');
  var MessageModal_1 = $__require('../../modals/MessageModal');
  var Utils_1 = $__require('../../framework/Utils');
  var DEFAULT_CONFIG_VALUES = {
    component: MessageModal_1.MessageModal,
    headerClass: 'modal-header',
    bodyClass: 'modal-body',
    footerClass: 'modal-footer'
  };
  var DEFAULT_INITIAL_SETTERS = ['headerClass', 'title', 'titleHtml', 'body', 'bodyClass', 'footerClass'];
  var MessageModalPreset = (function(_super) {
    __extends(MessageModalPreset, _super);
    function MessageModalPreset(defaultValues, initialSetters) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      _super.call(this, Utils_1.extend(DEFAULT_CONFIG_VALUES, defaultValues || {}), Utils_1.arrayUnion(DEFAULT_INITIAL_SETTERS, initialSetters || []));
    }
    return MessageModalPreset;
  }(ModalAwarePreset_1.ModalAwarePreset));
  exports.MessageModalPreset = MessageModalPreset;
  return module.exports;
});

System.registerDynamic("presets/TwoButtonPreset", ["@angular/core", "../framework/Utils", "../modals/MessageModal", "./base/MessageModalPreset"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var core_1 = $__require('@angular/core');
  var Utils_1 = $__require('../framework/Utils');
  var MessageModal_1 = $__require('../modals/MessageModal');
  var MessageModalPreset_1 = $__require('./base/MessageModalPreset');
  function createBindings(config) {
    config.buttons = [{
      cssClass: config.okBtnClass,
      caption: config.okBtn,
      onClick: function(modalComponent, $event) {
        return modalComponent.dialog.close(true);
      }
    }, {
      cssClass: config.cancelBtnClass,
      caption: config.cancelBtn,
      onClick: function(modalComponent, $event) {
        return modalComponent.dialog.dismiss();
      }
    }];
    return core_1.ReflectiveInjector.resolve([core_1.provide(MessageModal_1.MessageModalContext, {useValue: config})]);
  }
  var TwoButtonPreset = (function(_super) {
    __extends(TwoButtonPreset, _super);
    function TwoButtonPreset(modal, defaultValues) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      _super.call(this, Utils_1.extend({
        modal: modal,
        bindings: createBindings,
        okBtn: 'OK',
        okBtnClass: 'btn btn-primary',
        cancelBtn: 'Cancel',
        cancelBtnClass: 'btn btn-default'
      }, defaultValues || {}), ['okBtn', 'okBtnClass', 'cancelBtn', 'cancelBtnClass']);
    }
    return TwoButtonPreset;
  }(MessageModalPreset_1.MessageModalPreset));
  exports.TwoButtonPreset = TwoButtonPreset;
  return module.exports;
});

System.registerDynamic("presets", ["./presets/base/ModalAwarePreset", "./presets/base/MessageModalPreset", "./presets/OneButtonPreset", "./presets/TwoButtonPreset"], true, function($__require, exports, module) {
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
  __export($__require('./presets/base/ModalAwarePreset'));
  __export($__require('./presets/base/MessageModalPreset'));
  var OneButtonPreset_1 = $__require('./presets/OneButtonPreset');
  exports.OneButtonPreset = OneButtonPreset_1.OneButtonPreset;
  var TwoButtonPreset_1 = $__require('./presets/TwoButtonPreset');
  exports.TwoButtonPreset = TwoButtonPreset_1.TwoButtonPreset;
  return module.exports;
});

System.registerDynamic("commonModals/yesNoModal", ["@angular/core", "../models/ICustomModal", "../models/ModalDialogInstance"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
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
      console.warn('DEPRECATED: YesNoModal will not be available in next version of ' + 'angular2-modal, please move to the preset API.');
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
      directives: [],
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

System.registerDynamic("models/ModalDialogInstance", ["@angular/core/src/facade/promise"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var promise_1 = $__require('@angular/core/src/facade/promise');
  var ModalDialogInstance = (function() {
    function ModalDialogInstance(config) {
      this.config = config;
      this._resultDeferred = promise_1.PromiseWrapper.completer();
    }
    Object.defineProperty(ModalDialogInstance.prototype, "result", {
      get: function() {
        return this._resultDeferred.promise;
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
      this.destroy();
      this._resultDeferred.resolve(result);
    };
    ModalDialogInstance.prototype.dismiss = function() {
      if (this.contentRef.instance.beforeDismiss && this.contentRef.instance.beforeDismiss() === true)
        return;
      this.destroy();
      this._resultDeferred.reject();
    };
    ModalDialogInstance.prototype.destroy = function() {};
    return ModalDialogInstance;
  }());
  exports.ModalDialogInstance = ModalDialogInstance;
  return module.exports;
});

System.registerDynamic("commonModals/okOnlyModal", ["@angular/core", "../models/ICustomModal", "../models/ModalDialogInstance"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
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
      console.warn('DEPRECATED: OKOnlyModal will not be available in next version of ' + 'angular2-modal, please move to the preset API.');
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

System.registerDynamic("angular2-modal", ["./models/ICustomModal", "./models/ModalConfig", "./models/ModalDialogInstance", "./components/modalBackdrop", "./components/bootstrapModalContainer", "./components/modalFooter", "./providers/Modal", "./framework/FluentAssign", "./modals/MessageModal", "./presets", "./commonModals/yesNoModal", "./commonModals/okOnlyModal"], true, function($__require, exports, module) {
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
  __export($__require('./components/modalFooter'));
  __export($__require('./providers/Modal'));
  __export($__require('./framework/FluentAssign'));
  __export($__require('./modals/MessageModal'));
  __export($__require('./presets'));
  __export($__require('./commonModals/yesNoModal'));
  __export($__require('./commonModals/okOnlyModal'));
  return module.exports;
});
