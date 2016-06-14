System.registerDynamic("providers/dom-modal-renderer", ["@angular/core"], true, function($__require, exports, module) {
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
  var DOMModalRenderer = (function() {
    function DOMModalRenderer(_cr) {
      this._cr = _cr;
    }
    DOMModalRenderer.prototype.render = function(type, viewContainer, bindings, dialog) {
      return this._cr.resolveComponent(type).then(function(cmpFactory) {
        var ctxInjector = viewContainer.parentInjector;
        var childInjector = Array.isArray(bindings) && bindings.length > 0 ? core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return viewContainer.createComponent(cmpFactory, viewContainer.length, childInjector);
      }).then(function(cmpRef) {
        if (dialog.inElement) {
          viewContainer.element.nativeElement.appendChild(cmpRef.hostView.rootNodes[0]);
        } else {
          document.body.appendChild(cmpRef.hostView.rootNodes[0]);
        }
        dialog.destroy = function() {
          return cmpRef.destroy();
        };
        return dialog;
      });
    };
    DOMModalRenderer = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [core_1.ComponentResolver])], DOMModalRenderer);
    return DOMModalRenderer;
  }());
  exports.DOMModalRenderer = DOMModalRenderer;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/modal-backdrop", ["@angular/core", "../../angular2-modal", "./modal-container"], true, function($__require, exports, module) {
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
  var angular2_modal_1 = $__require('../../angular2-modal');
  var modal_container_1 = $__require('./modal-container');
  var dialogRefCount = 0;
  var BSModalBackdrop = (function() {
    function BSModalBackdrop(dialog) {
      this.hs = {
        ps: null,
        sz: null,
        pt: null
      };
      dialogRefCount++;
      document.body.classList.add('modal-open');
      if (dialog.inElement) {
        this.hs.ps = 'absolute';
        this.hs.sz = '100%';
        this.hs.pt = '0';
      }
    }
    BSModalBackdrop.prototype.ngOnDestroy = function() {
      if (--dialogRefCount === 0) {
        document.body.classList.remove('modal-open');
      }
    };
    BSModalBackdrop = __decorate([core_1.Component({
      selector: 'modal-backdrop',
      host: {
        '[style.position]': 'hs.ps',
        '[style.height]': 'hs.sz',
        '[style.width]': 'hs.sz',
        '[style.top]': 'hs.pt',
        '[style.left]': 'hs.pt',
        '[style.right]': 'hs.pt',
        '[style.bottom]': 'hs.pt'
      },
      directives: [modal_container_1.BSModalContainer],
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div [style.position]=\"hs.ps\" class=\"modal-backdrop fade in\"></div>\n<modal-container></modal-container>"
    }), __metadata('design:paramtypes', [angular2_modal_1.DialogRef])], BSModalBackdrop);
    return BSModalBackdrop;
  }());
  exports.BSModalBackdrop = BSModalBackdrop;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/presets/one-button-preset", ["./message-modal-preset", "../../../framework/utils"], true, function($__require, exports, module) {
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
  var message_modal_preset_1 = $__require('./message-modal-preset');
  var utils_1 = $__require('../../../framework/utils');
  var OneButtonPresetBuilder = (function(_super) {
    __extends(OneButtonPresetBuilder, _super);
    function OneButtonPresetBuilder(modal, defaultValues) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      _super.call(this, utils_1.extend({
        modal: modal,
        okBtn: 'OK',
        okBtnClass: 'btn btn-primary'
      }, defaultValues || {}), ['okBtn', 'okBtnClass']);
    }
    OneButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
      this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
        return cmp.dialog.close(true);
      });
      return _super.prototype.$$beforeOpen.call(this, config);
    };
    return OneButtonPresetBuilder;
  }(message_modal_preset_1.MessageModalPresetBuilder));
  exports.OneButtonPresetBuilder = OneButtonPresetBuilder;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/presets/two-button-preset", ["../../../framework/utils", "./message-modal-preset"], true, function($__require, exports, module) {
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
  var utils_1 = $__require('../../../framework/utils');
  var message_modal_preset_1 = $__require('./message-modal-preset');
  var TwoButtonPresetBuilder = (function(_super) {
    __extends(TwoButtonPresetBuilder, _super);
    function TwoButtonPresetBuilder(modal, defaultValues) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      _super.call(this, utils_1.extend({
        modal: modal,
        okBtn: 'OK',
        okBtnClass: 'btn btn-primary',
        cancelBtn: 'Cancel',
        cancelBtnClass: 'btn btn-default'
      }, defaultValues || {}), ['okBtn', 'okBtnClass', 'cancelBtn', 'cancelBtnClass']);
    }
    TwoButtonPresetBuilder.prototype.$$beforeOpen = function(config) {
      this.addButton(config.okBtnClass, config.okBtn, function(cmp, $event) {
        return cmp.dialog.close(true);
      }).addButton(config.cancelBtnClass, config.cancelBtn, function(cmp, $event) {
        return cmp.dialog.dismiss();
      });
      return _super.prototype.$$beforeOpen.call(this, config);
    };
    return TwoButtonPresetBuilder;
  }(message_modal_preset_1.MessageModalPresetBuilder));
  exports.TwoButtonPresetBuilder = TwoButtonPresetBuilder;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/modal", ["../../providers/modal"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var modal_1 = $__require('../../providers/modal');
  exports.Modal = modal_1.Modal;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/modal-container", ["@angular/core", "../../angular2-modal", "./modal", "../../framework/utils"], true, function($__require, exports, module) {
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
  var angular2_modal_1 = $__require('../../angular2-modal');
  var modal_1 = $__require('./modal');
  var utils_1 = $__require('../../framework/utils');
  var BSModalContainer = (function() {
    function BSModalContainer(dialog, _compileConfig, _modal, _cr) {
      this.dialog = dialog;
      this._compileConfig = _compileConfig;
      this._modal = _modal;
      this._cr = _cr;
      if (!dialog.inElement) {
        this.position = null;
      } else {
        this.position = 'absolute';
      }
    }
    BSModalContainer.prototype.ngAfterViewInit = function() {
      var _this = this;
      this._cr.resolveComponent(this._compileConfig.component).then(function(cmpFactory) {
        var vcr = _this._viewContainer,
            bindings = _this._compileConfig.bindings,
            ctxInjector = vcr.parentInjector;
        var childInjector = Array.isArray(bindings) && bindings.length > 0 ? core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return _this.dialog.contentRef = vcr.createComponent(cmpFactory, vcr.length, childInjector);
      });
    };
    BSModalContainer.prototype.onClickOutside = function() {
      return this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking && this.dialog.dismiss();
    };
    BSModalContainer.prototype.documentKeypress = function(event) {
      if (!this._modal.isTopMost(this.dialog))
        return;
      if (utils_1.supportsKey(event.keyCode, this.dialog.context.keyboard)) {
        this.dialog.dismiss();
      }
    };
    __decorate([core_1.ViewChild('modalDialog', {read: core_1.ViewContainerRef}), __metadata('design:type', core_1.ViewContainerRef)], BSModalContainer.prototype, "_viewContainer", void 0);
    BSModalContainer = __decorate([core_1.Component({
      selector: 'modal-container',
      host: {
        'tabindex': '-1',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)'
      },
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div [ngClass]=\"dialog.context.dialogClass\"\n          [class.modal-lg]=\"dialog.context.size == 'lg'\"\n          [class.modal-sm]=\"dialog.context.size == 'sm'\">\n         <div class=\"modal-content\"              \n              style=\"display:block\"              \n              role=\"document\"\n              (clickOutside)=\"onClickOutside()\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
    }), __metadata('design:paramtypes', [angular2_modal_1.DialogRef, angular2_modal_1.ModalCompileConfig, modal_1.Modal, core_1.ComponentResolver])], BSModalContainer);
    return BSModalContainer;
  }());
  exports.BSModalContainer = BSModalContainer;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/modal-context", ["../../models/modal-open-context", "./../../framework/utils"], true, function($__require, exports, module) {
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
  var modal_open_context_1 = $__require('../../models/modal-open-context');
  var utils_1 = $__require('./../../framework/utils');
  var DEFAULT_VALUES = {
    dialogClass: 'modal-dialog',
    showClose: false
  };
  var DEFAULT_SETTERS = ['dialogClass', 'size', 'showClose'];
  var BSModalContext = (function(_super) {
    __extends(BSModalContext, _super);
    function BSModalContext() {
      _super.apply(this, arguments);
    }
    BSModalContext.prototype.normalize = function() {
      if (!this.dialogClass) {
        this.dialogClass = DEFAULT_VALUES.dialogClass;
      }
      _super.prototype.normalize.call(this);
    };
    return BSModalContext;
  }(modal_open_context_1.ModalOpenContext));
  exports.BSModalContext = BSModalContext;
  var BSModalContextBuilder = (function(_super) {
    __extends(BSModalContextBuilder, _super);
    function BSModalContextBuilder(defaultValues, initialSetters, baseType) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      _super.call(this, utils_1.extend(DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || BSModalContext);
    }
    return BSModalContextBuilder;
  }(modal_open_context_1.ModalOpenContextBuilder));
  exports.BSModalContextBuilder = BSModalContextBuilder;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/modal-footer", ["@angular/core"], true, function($__require, exports, module) {
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
  var BSModalFooter = (function() {
    function BSModalFooter() {
      this.onButtonClick = new core_1.EventEmitter();
    }
    BSModalFooter.prototype.onClick = function(btn, $event) {
      this.onButtonClick.emit({
        btn: btn,
        $event: $event
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], BSModalFooter.prototype, "footerClass", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Array)], BSModalFooter.prototype, "buttons", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], BSModalFooter.prototype, "onButtonClick", void 0);
    BSModalFooter = __decorate([core_1.Component({
      selector: 'modal-footer',
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div [ngClass]=\"footerClass\">\n    <button *ngFor=\"let btn of buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
    }), __metadata('design:paramtypes', [])], BSModalFooter);
    return BSModalFooter;
  }());
  exports.BSModalFooter = BSModalFooter;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/message-modal", ["@angular/core", "../../angular2-modal", "./modal-footer"], true, function($__require, exports, module) {
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
  var angular2_modal_1 = $__require('../../angular2-modal');
  var modal_footer_1 = $__require('./modal-footer');
  var BSMessageModal = (function() {
    function BSMessageModal(dialog) {
      this.dialog = dialog;
      this.context = dialog.context;
    }
    BSMessageModal.prototype.onFooterButtonClick = function($event) {
      $event.btn.onClick(this, $event.$event);
    };
    Object.defineProperty(BSMessageModal.prototype, "titleHtml", {
      get: function() {
        return this.context.titleHtml ? 1 : 0;
      },
      enumerable: true,
      configurable: true
    });
    BSMessageModal = __decorate([core_1.Component({
      selector: 'modal-content',
      directives: [modal_footer_1.BSModalFooter],
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n        <button *ngIf=\"context.showClose\" type=\"button\" class=\"close\" \n                aria-label=\"Close\" (click)=\"dialog.dismiss()\">\n            <span aria-hidden=\"true\">\u00D7</span>\n        </button>\n        <div *ngSwitchWhen=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n        <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n    </div>\n    <div [ngClass]=\"context.bodyClass\" [innerHtml]=\"context.message\"></div>\n    <modal-footer [footerClass]=\"context.footerClass\" \n                  [buttons]=\"context.buttons\"\n                  (onButtonClick)=\"onFooterButtonClick($event)\"></modal-footer>"
    }), __metadata('design:paramtypes', [angular2_modal_1.DialogRef])], BSMessageModal);
    return BSMessageModal;
  }());
  exports.BSMessageModal = BSMessageModal;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/presets/message-modal-preset", ["../../../framework/fluent-assign", "../modal-context", "../message-modal", "../../../framework/utils"], true, function($__require, exports, module) {
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
  var fluent_assign_1 = $__require('../../../framework/fluent-assign');
  var modal_context_1 = $__require('../modal-context');
  var message_modal_1 = $__require('../message-modal');
  var utils_1 = $__require('../../../framework/utils');
  var DEFAULT_VALUES = {
    component: message_modal_1.BSMessageModal,
    headerClass: 'modal-header',
    bodyClass: 'modal-body',
    footerClass: 'modal-footer'
  };
  var DEFAULT_SETTERS = ['headerClass', 'title', 'titleHtml', 'bodyClass', 'footerClass'];
  var MessageModalPresetBuilder = (function(_super) {
    __extends(MessageModalPresetBuilder, _super);
    function MessageModalPresetBuilder(defaultValues, initialSetters, baseType) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      _super.call(this, utils_1.extend(utils_1.extend({buttons: []}, DEFAULT_VALUES), defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType);
      fluent_assign_1.setAssignAlias(this, 'body', 'message', true);
    }
    MessageModalPresetBuilder.prototype.addButton = function(css, caption, onClick) {
      var btn = {
        cssClass: css,
        caption: caption,
        onClick: onClick
      };
      var key = fluent_assign_1.privateKey('buttons');
      this[key].push(btn);
      return this;
    };
    return MessageModalPresetBuilder;
  }(modal_context_1.BSModalContextBuilder));
  exports.MessageModalPresetBuilder = MessageModalPresetBuilder;
  return module.exports;
});

System.registerDynamic("plugins/bootstrap/index", ["@angular/core", "./modal", "./modal-backdrop", "./presets/one-button-preset", "./presets/two-button-preset", "../../angular2-modal", "./modal-context", "./modal-container", "./message-modal", "./modal-footer", "./presets/message-modal-preset", "./../../models/modal-open-context"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var modal_1 = $__require('./modal');
  var modal_backdrop_1 = $__require('./modal-backdrop');
  var one_button_preset_1 = $__require('./presets/one-button-preset');
  var two_button_preset_1 = $__require('./presets/two-button-preset');
  var angular2_modal_1 = $__require('../../angular2-modal');
  var modal_context_1 = $__require('./modal-context');
  exports.BSModalContext = modal_context_1.BSModalContext;
  exports.BSModalContextBuilder = modal_context_1.BSModalContextBuilder;
  var modal_backdrop_2 = $__require('./modal-backdrop');
  exports.BSModalBackdrop = modal_backdrop_2.BSModalBackdrop;
  var modal_container_1 = $__require('./modal-container');
  exports.BSModalContainer = modal_container_1.BSModalContainer;
  var message_modal_1 = $__require('./message-modal');
  exports.BSMessageModal = message_modal_1.BSMessageModal;
  var modal_footer_1 = $__require('./modal-footer');
  exports.BSModalFooter = modal_footer_1.BSModalFooter;
  var message_modal_preset_1 = $__require('./presets/message-modal-preset');
  exports.MessageModalPresetBuilder = message_modal_preset_1.MessageModalPresetBuilder;
  var modal_open_context_1 = $__require('./../../models/modal-open-context');
  exports.ModalOpenContext = modal_open_context_1.ModalOpenContext;
  exports.ModalOpenContextBuilder = modal_open_context_1.ModalOpenContextBuilder;
  var one_button_preset_2 = $__require('./presets/one-button-preset');
  exports.OneButtonPresetBuilder = one_button_preset_2.OneButtonPresetBuilder;
  var two_button_preset_2 = $__require('./presets/two-button-preset');
  exports.TwoButtonPresetBuilder = two_button_preset_2.TwoButtonPresetBuilder;
  var modal_2 = $__require('./modal');
  exports.Modal = modal_2.Modal;
  exports.BS_MODAL_PROVIDERS = angular2_modal_1.MODAL_PROVIDERS.concat([new core_1.Provider(angular2_modal_1.Modal, {useClass: modal_1.Modal}), new core_1.Provider(modal_1.Modal, {useClass: modal_1.Modal}), new core_1.Provider(angular2_modal_1.ModalBackdropComponent, {useValue: modal_backdrop_1.BSModalBackdrop}), new core_1.Provider(angular2_modal_1.ModalDropInFactory, {useValue: {
      alert: function(modal) {
        return new one_button_preset_1.OneButtonPresetBuilder(modal, {isBlocking: false});
      },
      prompt: function(modal) {
        return new one_button_preset_1.OneButtonPresetBuilder(modal, {
          isBlocking: true,
          keyboard: null
        });
      },
      confirm: function(modal) {
        return new two_button_preset_1.TwoButtonPresetBuilder(modal, {
          isBlocking: true,
          keyboard: null
        });
      }
    }})]);
  return module.exports;
});

System.registerDynamic("plugins/vex/modal-backdrop", ["@angular/core", "../../models/dialog-ref", "./modal", "./modal-content", "../../framework/utils"], true, function($__require, exports, module) {
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
  var dialog_ref_1 = $__require('../../models/dialog-ref');
  var modal_1 = $__require('./modal');
  var modal_content_1 = $__require('./modal-content');
  var utils_1 = $__require('../../framework/utils');
  var dialogRefCount = 0;
  var VexModalBackdrop = (function() {
    function VexModalBackdrop(dialog, _modal) {
      this.dialog = dialog;
      this._modal = _modal;
      this.hs = {};
      dialogRefCount++;
      document.body.classList.add('vex-open');
      if (dialog.inElement) {
        this.hs.ps = 'absolute';
        this.hs.sz = '100%';
        this.hs.pt = 0;
      }
    }
    Object.defineProperty(VexModalBackdrop.prototype, "cssClass", {
      get: function() {
        return "vex vex-theme-" + this.dialog.context.className;
      },
      enumerable: true,
      configurable: true
    });
    VexModalBackdrop.prototype.ngOnDestroy = function() {
      if (--dialogRefCount === 0) {
        document.body.classList.remove('vex-open');
      }
    };
    VexModalBackdrop.prototype.documentKeypress = function(event) {
      if (!this._modal.isTopMost(this.dialog))
        return;
      if (utils_1.supportsKey(event.keyCode, this.dialog.context.keyboard)) {
        this.dialog.dismiss();
      }
    };
    VexModalBackdrop = __decorate([core_1.Component({
      selector: 'modal-backdrop',
      host: {
        '[class.in-element]': 'dialog.inElement',
        '[style.position]': 'hs.ps',
        '[style.height]': 'hs.sz',
        '[style.width]': 'hs.sz',
        '[style.top]': 'hs.pt',
        '[style.left]': 'hs.pt',
        '[style.right]': 'hs.pt',
        '[style.bottom]': 'hs.pt',
        '(body:keydown)': 'documentKeypress($event)'
      },
      styles: ["\n              .in-element .vex.vex-theme-default,\n.in-element .vex.vex-theme-os,\n.in-element .vex.vex-theme-plain,\n.in-element .vex.vex-theme-wireframe ,\n.in-element .vex.vex-theme-flat-attack,\n.in-element .vex.vex-theme-top,\n.in-element .vex.vex-theme-bottom-right-corner {\n    position: relative;\n    padding: 0px;\n    width: 100%;\n    height: 100%;\n}\n\n.in-element .vex-overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n}\n\n.in-element modal-content {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding-top: 20px;\n    overflow-x: hidden;\n    overflow-y: auto\n}\n\n.in-element .vex.vex-theme-bottom-right-corner,\n.in-element .vex.vex-theme-bottom-right-corner modal-content {\n    overflow-y: hidden\n}\n.in-element .vex.vex-theme-bottom-right-corner .vex-content {\n    position: absolute;\n}\n            "],
      directives: [modal_content_1.VexModalContent],
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div [class]=\"cssClass\">\n    <div [class]=\"dialog.context.overlayClassName\"></div>\n    <modal-content></modal-content>    \n</div>"
    }), __metadata('design:paramtypes', [dialog_ref_1.DialogRef, modal_1.Modal])], VexModalBackdrop);
    return VexModalBackdrop;
  }());
  exports.VexModalBackdrop = VexModalBackdrop;
  return module.exports;
});

System.registerDynamic("plugins/vex/presets/dropin-preset", ["../../../models/tokens", "../dialog-form-modal", "./dialog-preset", "../../../framework/utils"], true, function($__require, exports, module) {
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
  var tokens_1 = $__require('../../../models/tokens');
  var dialog_form_modal_1 = $__require('../dialog-form-modal');
  var dialog_preset_1 = $__require('./dialog-preset');
  var utils_1 = $__require('../../../framework/utils');
  var DEFAULT_SETTERS = ['placeholder', 'showCloseButton'];
  var DropInPreset = (function(_super) {
    __extends(DropInPreset, _super);
    function DropInPreset() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(DropInPreset.prototype, "showInput", {
      get: function() {
        return this.dropInType === tokens_1.DROP_IN_TYPE.prompt;
      },
      enumerable: true,
      configurable: true
    });
    return DropInPreset;
  }(dialog_preset_1.DialogPreset));
  exports.DropInPreset = DropInPreset;
  var DropInPresetBuilder = (function(_super) {
    __extends(DropInPresetBuilder, _super);
    function DropInPresetBuilder(modal, dropInType, defaultValues) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      _super.call(this, modal, utils_1.extend({
        modal: modal,
        component: dialog_form_modal_1.DialogFormModal,
        content: dialog_form_modal_1.FormDropIn,
        dropInType: dropInType
      }, defaultValues || {}), DEFAULT_SETTERS, DropInPreset);
    }
    DropInPresetBuilder.prototype.$$beforeOpen = function(config) {
      this.addOkButton('Yep');
      switch (config.dropInType) {
        case tokens_1.DROP_IN_TYPE.prompt:
          config.defaultResult = undefined;
        case tokens_1.DROP_IN_TYPE.confirm:
          this.addCancelButton('Nope');
          break;
      }
      return _super.prototype.$$beforeOpen.call(this, config);
    };
    return DropInPresetBuilder;
  }(dialog_preset_1.DialogPresetBuilder));
  exports.DropInPresetBuilder = DropInPresetBuilder;
  return module.exports;
});

System.registerDynamic("plugins/vex/modal", ["../../providers/modal"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var modal_1 = $__require('../../providers/modal');
  exports.Modal = modal_1.Modal;
  return module.exports;
});

System.registerDynamic("plugins/vex/modal-content", ["@angular/core", "./modal", "../../models/tokens", "../../models/dialog-ref"], true, function($__require, exports, module) {
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
  var modal_1 = $__require('./modal');
  var tokens_1 = $__require('../../models/tokens');
  var dialog_ref_1 = $__require('../../models/dialog-ref');
  var VexModalContent = (function() {
    function VexModalContent(dialog, _modal, _compileConfig, _cr) {
      this.dialog = dialog;
      this._modal = _modal;
      this._compileConfig = _compileConfig;
      this._cr = _cr;
      this.context = dialog.context;
    }
    VexModalContent.prototype.ngAfterViewInit = function() {
      var _this = this;
      this._cr.resolveComponent(this._compileConfig.component).then(function(cmpFactory) {
        var vcr = _this._viewContainer,
            bindings = _this._compileConfig.bindings,
            ctxInjector = vcr.parentInjector;
        var childInjector = Array.isArray(bindings) && bindings.length > 0 ? core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return _this.dialog.contentRef = vcr.createComponent(cmpFactory, vcr.length, childInjector);
      });
    };
    VexModalContent.prototype.onClickOutside = function() {
      return this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking && this.dialog.dismiss();
    };
    __decorate([core_1.ViewChild('modalDialog', {read: core_1.ViewContainerRef}), __metadata('design:type', core_1.ViewContainerRef)], VexModalContent.prototype, "_viewContainer", void 0);
    VexModalContent = __decorate([core_1.Component({
      selector: 'modal-content',
      template: "<div [class]=\"context.contentClassName\" (clickOutside)=\"onClickOutside()\">\n    <div style=\"display: none\" #modalDialog></div>    \n    <div *ngIf=\"context.showCloseButton\" \n         [class]=\"context.closeClassName\" \n         (click)=\"dialog.dismiss()\"></div>\n</div>",
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [dialog_ref_1.DialogRef, modal_1.Modal, tokens_1.ModalCompileConfig, core_1.ComponentResolver])], VexModalContent);
    return VexModalContent;
  }());
  exports.VexModalContent = VexModalContent;
  return module.exports;
});

System.registerDynamic("models/dialog-ref-stack", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DialogRefStack = (function() {
    function DialogRefStack() {
      this._stack = [];
    }
    DialogRefStack.prototype.push = function(dialogRef) {
      var idx = this._stack.indexOf(dialogRef);
      if (idx === -1)
        this._stack.push(dialogRef);
    };
    DialogRefStack.prototype.pushManaged = function(dialogRef) {
      var _this = this;
      this.push(dialogRef);
      dialogRef.result.then(function() {
        return _this.remove(dialogRef);
      }).catch(function() {
        return _this.remove(dialogRef);
      });
    };
    DialogRefStack.prototype.pop = function() {
      this._stack.pop();
    };
    DialogRefStack.prototype.remove = function(dialogRef) {
      var idx = this._stack.indexOf(dialogRef);
      if (idx > -1)
        this._stack.splice(idx, 1);
    };
    DialogRefStack.prototype.index = function(index) {
      return this._stack[index];
    };
    DialogRefStack.prototype.indexOf = function(dialogRef) {
      return this._stack.indexOf(dialogRef);
    };
    Object.defineProperty(DialogRefStack.prototype, "length", {
      get: function() {
        return this._stack.length;
      },
      enumerable: true,
      configurable: true
    });
    return DialogRefStack;
  }());
  exports.DialogRefStack = DialogRefStack;
  return module.exports;
});

System.registerDynamic("providers/modal", ["@angular/core", "../models/tokens", "../models/dialog-ref-stack", "../angular2-modal"], true, function($__require, exports, module) {
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
  var tokens_1 = $__require('../models/tokens');
  var dialog_ref_stack_1 = $__require('../models/dialog-ref-stack');
  var angular2_modal_1 = $__require('../angular2-modal');
  var _stack = new dialog_ref_stack_1.DialogRefStack();
  var unsupportedDropIn = function() {
    throw new Error('Unsupported Drop-in.');
  };
  var UnsupportedDropInFactory = {
    alert: unsupportedDropIn,
    prompt: unsupportedDropIn,
    confirm: unsupportedDropIn
  };
  function normalizeDropInFactory(dropInFactory) {
    if (!dropInFactory)
      return UnsupportedDropInFactory;
    return ['alert', 'prompt', 'confirm'].reduce(function(dif, key) {
      if (typeof dif[key] !== 'function')
        dif[key] = unsupportedDropIn;
      return dif;
    }, dropInFactory);
  }
  var Modal = (function() {
    function Modal(_modalRenderer, _backdrop, _dropIn) {
      this._modalRenderer = _modalRenderer;
      this._backdrop = _backdrop;
      this._dropIn = normalizeDropInFactory(_dropIn);
    }
    Modal.prototype.alert = function() {
      return this._dropIn.alert(this);
    };
    Modal.prototype.prompt = function() {
      return this._dropIn.prompt(this);
    };
    Modal.prototype.confirm = function() {
      return this._dropIn.confirm(this);
    };
    Modal.prototype.open = function(componentType, context, bindings, viewContainer, inside) {
      if (context === void 0) {
        context = undefined;
      }
      if (bindings === void 0) {
        bindings = undefined;
      }
      if (viewContainer === void 0) {
        viewContainer = undefined;
      }
      inside = inside === undefined ? !!viewContainer : !!inside;
      if (!viewContainer) {
        if (!this.defaultViewContainer) {
          throw new Error('defaultViewContainer not set.');
        }
        viewContainer = this.defaultViewContainer;
      }
      if (context) {
        context.normalize();
      }
      var dialog = new angular2_modal_1.DialogRef(context || {});
      dialog.inElement = inside;
      var compileConfig = new tokens_1.ModalCompileConfig(componentType, bindings || []);
      var b = core_1.ReflectiveInjector.resolve([core_1.provide(Modal, {useValue: this}), core_1.provide(tokens_1.ModalRenderer, {useValue: this._modalRenderer}), core_1.provide(angular2_modal_1.DialogRef, {useValue: dialog}), core_1.provide(tokens_1.ModalCompileConfig, {useValue: compileConfig})]);
      return this._modalRenderer.render(this._backdrop, viewContainer, b, dialog).then(function(dialog) {
        _stack.pushManaged(dialog);
        return dialog;
      });
    };
    Modal.prototype.isTopMost = function(dialogRef) {
      return _stack.indexOf(dialogRef) === _stack.length - 1;
    };
    Modal.prototype.stackPosition = function(dialogRef) {
      return _stack.indexOf(dialogRef);
    };
    Object.defineProperty(Modal.prototype, "stackLength", {
      get: function() {
        return _stack.length;
      },
      enumerable: true,
      configurable: true
    });
    Modal = __decorate([core_1.Injectable(), __param(2, core_1.Optional()), __metadata('design:paramtypes', [tokens_1.ModalRenderer, tokens_1.ModalBackdropComponent, tokens_1.ModalDropInFactory])], Modal);
    return Modal;
  }());
  exports.Modal = Modal;
  return module.exports;
});

System.registerDynamic("models/modal-context", ["@angular/core", "./../framework/fluent-assign", "./../framework/utils"], true, function($__require, exports, module) {
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
  var fluent_assign_1 = $__require('./../framework/fluent-assign');
  var utils_1 = $__require('./../framework/utils');
  exports.DEFAULT_VALUES = {
    isBlocking: true,
    keyboard: [27],
    supportsKey: function supportsKey(keyCode) {
      return this.keyboard.indexOf(keyCode) > -1;
    }
  };
  var DEFAULT_SETTERS = ['isBlocking', 'keyboard', 'message'];
  var ModalContext = (function() {
    function ModalContext() {}
    ModalContext.prototype.normalize = function() {
      if (this.isBlocking !== false)
        this.isBlocking = true;
      if (this.keyboard === null) {
        this.keyboard = [];
      } else if (typeof this.keyboard === 'number') {
        this.keyboard = [this.keyboard];
      } else if (!Array.isArray(this.keyboard)) {
        this.keyboard = exports.DEFAULT_VALUES.keyboard;
      }
    };
    return ModalContext;
  }());
  exports.ModalContext = ModalContext;
  var ModalContextBuilder = (function(_super) {
    __extends(ModalContextBuilder, _super);
    function ModalContextBuilder(defaultValues, initialSetters, baseType) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      _super.call(this, utils_1.extend(exports.DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType);
    }
    ModalContextBuilder = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [Object, Array, Function])], ModalContextBuilder);
    return ModalContextBuilder;
  }(fluent_assign_1.FluentAssign));
  exports.ModalContextBuilder = ModalContextBuilder;
  return module.exports;
});

System.registerDynamic("models/modal-open-context", ["../providers/modal", "./modal-context", "../framework/utils"], true, function($__require, exports, module) {
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
  var modal_1 = $__require('../providers/modal');
  var modal_context_1 = $__require('./modal-context');
  var utils_1 = $__require('../framework/utils');
  var DEFAULT_SETTERS = ['component'];
  var ModalOpenContext = (function(_super) {
    __extends(ModalOpenContext, _super);
    function ModalOpenContext() {
      _super.apply(this, arguments);
    }
    return ModalOpenContext;
  }(modal_context_1.ModalContext));
  exports.ModalOpenContext = ModalOpenContext;
  var ModalOpenContextBuilder = (function(_super) {
    __extends(ModalOpenContextBuilder, _super);
    function ModalOpenContextBuilder(defaultValues, initialSetters, baseType) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      _super.call(this, defaultValues || {}, utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType);
    }
    ModalOpenContextBuilder.prototype.$$beforeOpen = function(config) {
      return [];
    };
    ModalOpenContextBuilder.prototype.open = function(viewContainer) {
      var config = this.toJSON();
      if (!(config.modal instanceof modal_1.Modal)) {
        return Promise.reject(new Error('Configuration Error: modal service not set.'));
      }
      var bindings = typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(config);
      return config.modal.open(config.component, config, bindings, viewContainer);
    };
    return ModalOpenContextBuilder;
  }(modal_context_1.ModalContextBuilder));
  exports.ModalOpenContextBuilder = ModalOpenContextBuilder;
  return module.exports;
});

System.registerDynamic("framework/fluent-assign", [], true, function($__require, exports, module) {
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
  exports.privateKey = privateKey;
  function objectDefinePropertyValue(obj, propertyName, value) {
    Object.defineProperty(obj, propertyName, {
      configurable: false,
      enumerable: false,
      writable: false,
      value: value
    });
  }
  function applyDefaultValues(instance, defaultValues) {
    Object.getOwnPropertyNames(defaultValues).forEach(function(name) {
      return instance[privateKey(name)] = defaultValues[name];
    });
  }
  function setAssignMethod(obj, propertyName, writeOnce) {
    var _this = this;
    if (writeOnce === void 0) {
      writeOnce = false;
    }
    validateMethodName.call(obj, propertyName);
    var key = privateKey(propertyName);
    objectDefinePropertyValue(obj, propertyName, function(value) {
      if (writeOnce && _this.hasOwnProperty(key)) {
        throw new Error("Overriding config property '" + propertyName + "' is not allowed.");
      }
      obj[key] = value;
      return obj;
    });
  }
  exports.setAssignMethod = setAssignMethod;
  function setAssignAlias(obj, propertyName, srcPropertyName, hard) {
    if (hard === void 0) {
      hard = false;
    }
    validateMethodName.call(obj, propertyName);
    objectDefinePropertyValue(obj, propertyName, function(value) {
      obj[srcPropertyName](value);
      return obj;
    });
    if (hard === true) {
      var key = privateKey(propertyName),
          srcKey_1 = privateKey(srcPropertyName);
      Object.defineProperty(obj, key, {
        configurable: false,
        enumerable: false,
        get: function() {
          return obj[srcKey_1];
        }
      });
    }
  }
  exports.setAssignAlias = setAssignAlias;
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
    function FluentAssign(defaultValues, initialSetters, baseType) {
      var _this = this;
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      if (Array.isArray(defaultValues)) {
        defaultValues.forEach(function(d) {
          return applyDefaultValues(_this, d);
        });
      } else if (defaultValues) {
        applyDefaultValues(this, defaultValues);
      }
      if (Array.isArray(initialSetters)) {
        initialSetters.forEach(function(name) {
          return setAssignMethod(_this, name);
        });
      }
      if (baseType) {
        this.__fluent$base__ = baseType;
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
        var key = privateKey(name);
        var propDesc = Object.getOwnPropertyDescriptor(_this, key);
        if (propDesc) {
          Object.defineProperty(obj, name, propDesc);
        } else {
          obj[name] = _this[key];
        }
        return obj;
      }, this.__fluent$base__ ? new this.__fluent$base__() : {});
    };
    return FluentAssign;
  }());
  exports.FluentAssign = FluentAssign;
  return module.exports;
});

System.registerDynamic("plugins/vex/modal-context", ["../../models/modal-open-context", "./../../framework/fluent-assign", "./../../framework/utils"], true, function($__require, exports, module) {
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
  var modal_open_context_1 = $__require('../../models/modal-open-context');
  var fluent_assign_1 = $__require('./../../framework/fluent-assign');
  var utils_1 = $__require('./../../framework/utils');
  var DEFAULT_VALUES = {
    className: 'default',
    overlayClassName: 'vex-overlay',
    contentClassName: 'vex-content',
    closeClassName: 'vex-close'
  };
  var DEFAULT_SETTERS = ['className', 'overlayClassName', 'contentClassName', 'closeClassName'];
  var VEXModalContext = (function(_super) {
    __extends(VEXModalContext, _super);
    function VEXModalContext() {
      _super.apply(this, arguments);
    }
    return VEXModalContext;
  }(modal_open_context_1.ModalOpenContext));
  exports.VEXModalContext = VEXModalContext;
  var VEXModalContextBuilder = (function(_super) {
    __extends(VEXModalContextBuilder, _super);
    function VEXModalContextBuilder(defaultValues, initialSetters, baseType) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      _super.call(this, utils_1.extend(DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || VEXModalContext);
    }
    VEXModalContextBuilder.prototype.overlayClosesOnClick = function(value) {
      this[fluent_assign_1.privateKey('isBlocking')] = !value;
      return this;
    };
    return VEXModalContextBuilder;
  }(modal_open_context_1.ModalOpenContextBuilder));
  exports.VEXModalContextBuilder = VEXModalContextBuilder;
  return module.exports;
});

System.registerDynamic("models/tokens", ["@angular/core"], true, function($__require, exports, module) {
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
  (function(DROP_IN_TYPE) {
    DROP_IN_TYPE[DROP_IN_TYPE["alert"] = 0] = "alert";
    DROP_IN_TYPE[DROP_IN_TYPE["prompt"] = 1] = "prompt";
    DROP_IN_TYPE[DROP_IN_TYPE["confirm"] = 2] = "confirm";
  })(exports.DROP_IN_TYPE || (exports.DROP_IN_TYPE = {}));
  var DROP_IN_TYPE = exports.DROP_IN_TYPE;
  var ModalCompileConfig = (function() {
    function ModalCompileConfig(component, bindings) {
      this.component = component;
      this.bindings = bindings;
    }
    return ModalCompileConfig;
  }());
  exports.ModalCompileConfig = ModalCompileConfig;
  var ModalRenderer = (function() {
    function ModalRenderer() {}
    return ModalRenderer;
  }());
  exports.ModalRenderer = ModalRenderer;
  var ModalBackdropComponent = (function(_super) {
    __extends(ModalBackdropComponent, _super);
    function ModalBackdropComponent() {
      _super.apply(this, arguments);
    }
    return ModalBackdropComponent;
  }(core_1.Type));
  exports.ModalBackdropComponent = ModalBackdropComponent;
  var ModalDropInFactory = (function() {
    function ModalDropInFactory() {}
    return ModalDropInFactory;
  }());
  exports.ModalDropInFactory = ModalDropInFactory;
  return module.exports;
});

System.registerDynamic("models/dialog-ref", ["@angular/core/src/facade/promise"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var promise_1 = $__require('@angular/core/src/facade/promise');
  var DialogRef = (function() {
    function DialogRef(context) {
      this.context = context;
      this._resultDeferred = promise_1.PromiseWrapper.completer();
    }
    Object.defineProperty(DialogRef.prototype, "result", {
      get: function() {
        return this._resultDeferred.promise;
      },
      enumerable: true,
      configurable: true
    });
    DialogRef.prototype.close = function(result) {
      if (result === void 0) {
        result = null;
      }
      if (this._fireHook('beforeClose') === true)
        return;
      this.destroy();
      this._resultDeferred.resolve(result);
    };
    DialogRef.prototype.dismiss = function() {
      if (this._fireHook('beforeDismiss') === true)
        return;
      this.destroy();
      this._resultDeferred.reject();
    };
    DialogRef.prototype.destroy = function() {};
    DialogRef.prototype._fireHook = function(name) {
      var instance = this.contentRef && this.contentRef.instance,
          fn = instance && typeof instance[name] === 'function' && instance[name];
      if (fn) {
        return fn.call(instance);
      } else {
        return undefined;
      }
    };
    return DialogRef;
  }());
  exports.DialogRef = DialogRef;
  return module.exports;
});

System.registerDynamic("plugins/vex/dialog-form-modal", ["@angular/core", "../../models/tokens", "../../models/dialog-ref"], true, function($__require, exports, module) {
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
  var tokens_1 = $__require('../../models/tokens');
  var dialog_ref_1 = $__require('../../models/dialog-ref');
  var VEXDialogButtons = (function() {
    function VEXDialogButtons() {
      this.onButtonClick = new core_1.EventEmitter();
    }
    VEXDialogButtons.prototype.onClick = function(btn, $event) {
      this.onButtonClick.emit({
        btn: btn,
        $event: $event
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', Array)], VEXDialogButtons.prototype, "buttons", void 0);
    __decorate([core_1.Output(), __metadata('design:type', Object)], VEXDialogButtons.prototype, "onButtonClick", void 0);
    VEXDialogButtons = __decorate([core_1.Component({
      selector: 'vex-dialog-buttons',
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div class=\"vex-dialog-buttons\">\n    <button type=\"button\" \n         *ngFor=\"let btn of buttons;\"\n         [class]=\"btn.cssClass\"\n         (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
    }), __metadata('design:paramtypes', [])], VEXDialogButtons);
    return VEXDialogButtons;
  }());
  exports.VEXDialogButtons = VEXDialogButtons;
  var DialogFormModal = (function() {
    function DialogFormModal(dialog, _compileConfig, _cr) {
      this.dialog = dialog;
      this._compileConfig = _compileConfig;
      this._cr = _cr;
      this.context = dialog.context;
    }
    DialogFormModal.prototype.ngAfterViewInit = function() {
      var _this = this;
      this._cr.resolveComponent(this.context.content).then(function(cmpFactory) {
        var vcr = _this._viewContainer,
            bindings = _this._compileConfig.bindings,
            ctxInjector = vcr.parentInjector;
        var childInjector = Array.isArray(bindings) && bindings.length > 0 ? core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return _this.dialog.contentRef = vcr.createComponent(cmpFactory, vcr.length, childInjector);
      });
    };
    DialogFormModal.prototype.onButtonClick = function($event) {
      $event.btn.onClick(this, $event.$event);
    };
    __decorate([core_1.ViewChild('modalDialog', {read: core_1.ViewContainerRef}), __metadata('design:type', core_1.ViewContainerRef)], DialogFormModal.prototype, "_viewContainer", void 0);
    DialogFormModal = __decorate([core_1.Component({
      selector: 'modal-dialog',
      directives: [VEXDialogButtons],
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<form class=\"vex-dialog-form\">\n    <div style=\"display: none\" #modalDialog></div> \n    <vex-dialog-buttons [buttons]=\"context.buttons\"\n                        (onButtonClick)=\"onButtonClick($event)\"></vex-dialog-buttons>\n</form>"
    }), __metadata('design:paramtypes', [dialog_ref_1.DialogRef, tokens_1.ModalCompileConfig, core_1.ComponentResolver])], DialogFormModal);
    return DialogFormModal;
  }());
  exports.DialogFormModal = DialogFormModal;
  var FormDropIn = (function() {
    function FormDropIn(dialog) {
      this.dialog = dialog;
      this.context = dialog.context;
    }
    FormDropIn = __decorate([core_1.Component({
      selector: 'drop-in-dialog',
      directives: [VEXDialogButtons],
      encapsulation: core_1.ViewEncapsulation.None,
      template: "<div class=\"vex-dialog-message\">{{context.message}}</div>\n    <div *ngIf=\"context.showInput\" class=\"vex-dialog-input\">\n        <input name=\"vex\" \n               type=\"text\" \n               class=\"vex-dialog-prompt-input\"\n               [(ngModel)]=\"context.defaultResult\" \n               placeholder=\"{{context.placeholder}}\">\n    </div>"
    }), __metadata('design:paramtypes', [dialog_ref_1.DialogRef])], FormDropIn);
    return FormDropIn;
  }());
  exports.FormDropIn = FormDropIn;
  return module.exports;
});

System.registerDynamic("framework/utils", [], true, function($__require, exports, module) {
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
  function supportsKey(keyCode, config) {
    if (!Array.isArray(config))
      return config === null ? false : true;
    return config.indexOf(keyCode) > -1;
  }
  exports.supportsKey = supportsKey;
  function toStyleString(obj) {
    return Object.getOwnPropertyNames(obj).map(function(k) {
      return (k + ":" + obj[k]);
    }).join(';');
  }
  exports.toStyleString = toStyleString;
  return module.exports;
});

System.registerDynamic("plugins/vex/presets/dialog-preset", ["../../../framework/fluent-assign", "../modal-context", "../dialog-form-modal", "../../../framework/utils"], true, function($__require, exports, module) {
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
  var fluent_assign_1 = $__require('../../../framework/fluent-assign');
  var modal_context_1 = $__require('../modal-context');
  var dialog_form_modal_1 = $__require('../dialog-form-modal');
  var utils_1 = $__require('../../../framework/utils');
  var DEFAULT_SETTERS = ['content'];
  var DialogPreset = (function(_super) {
    __extends(DialogPreset, _super);
    function DialogPreset() {
      _super.apply(this, arguments);
    }
    return DialogPreset;
  }(modal_context_1.VEXModalContext));
  exports.DialogPreset = DialogPreset;
  var DialogPresetBuilder = (function(_super) {
    __extends(DialogPresetBuilder, _super);
    function DialogPresetBuilder(modal, defaultValues, initialSetters, baseType) {
      if (defaultValues === void 0) {
        defaultValues = undefined;
      }
      if (initialSetters === void 0) {
        initialSetters = undefined;
      }
      if (baseType === void 0) {
        baseType = undefined;
      }
      _super.call(this, utils_1.extend({
        modal: modal,
        component: dialog_form_modal_1.DialogFormModal,
        buttons: [],
        defaultResult: true
      }, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || DialogPreset);
    }
    DialogPresetBuilder.prototype.addButton = function(css, caption, onClick) {
      var btn = {
        cssClass: css,
        caption: caption,
        onClick: onClick
      };
      var key = fluent_assign_1.privateKey('buttons');
      this[key].push(btn);
      return this;
    };
    DialogPresetBuilder.prototype.addOkButton = function(text) {
      if (text === void 0) {
        text = 'OK';
      }
      this.addButton('vex-dialog-button-primary vex-dialog-button vex-first', text, function(cmp, $event) {
        return cmp.dialog.close(cmp.dialog.context.defaultResult);
      });
      return this;
    };
    DialogPresetBuilder.prototype.addCancelButton = function(text) {
      if (text === void 0) {
        text = 'CANCEL';
      }
      this.addButton('vex-dialog-button-secondary vex-dialog-button vex-last', text, function(cmp, $event) {
        return cmp.dialog.dismiss();
      });
      return this;
    };
    return DialogPresetBuilder;
  }(modal_context_1.VEXModalContextBuilder));
  exports.DialogPresetBuilder = DialogPresetBuilder;
  return module.exports;
});

System.registerDynamic("plugins/vex/index", ["@angular/core", "./modal", "../../angular2-modal", "./modal-backdrop", "./presets/dropin-preset", "./modal-content", "./modal-context", "./dialog-form-modal", "./presets/dialog-preset"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core_1 = $__require('@angular/core');
  var modal_1 = $__require('./modal');
  var angular2_modal_1 = $__require('../../angular2-modal');
  var modal_backdrop_1 = $__require('./modal-backdrop');
  var dropin_preset_1 = $__require('./presets/dropin-preset');
  var modal_2 = $__require('./modal');
  exports.Modal = modal_2.Modal;
  var modal_backdrop_2 = $__require('./modal-backdrop');
  exports.VexModalBackdrop = modal_backdrop_2.VexModalBackdrop;
  var modal_content_1 = $__require('./modal-content');
  exports.VexModalContent = modal_content_1.VexModalContent;
  var modal_context_1 = $__require('./modal-context');
  exports.VEXModalContext = modal_context_1.VEXModalContext;
  exports.VEXModalContextBuilder = modal_context_1.VEXModalContextBuilder;
  var dropin_preset_2 = $__require('./presets/dropin-preset');
  exports.DropInPreset = dropin_preset_2.DropInPreset;
  exports.DropInPresetBuilder = dropin_preset_2.DropInPresetBuilder;
  var dialog_form_modal_1 = $__require('./dialog-form-modal');
  exports.DialogFormModal = dialog_form_modal_1.DialogFormModal;
  exports.FormDropIn = dialog_form_modal_1.FormDropIn;
  exports.VEXDialogButtons = dialog_form_modal_1.VEXDialogButtons;
  var dialog_preset_1 = $__require('./presets/dialog-preset');
  exports.DialogPreset = dialog_preset_1.DialogPreset;
  exports.DialogPresetBuilder = dialog_preset_1.DialogPresetBuilder;
  var dropInFactory = {
    alert: function(modal) {
      return new dropin_preset_1.DropInPresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.alert, {isBlocking: false});
    },
    prompt: function(modal) {
      return new dropin_preset_1.DropInPresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.prompt, {
        isBlocking: true,
        keyboard: null
      });
    },
    confirm: function(modal) {
      return new dropin_preset_1.DropInPresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.confirm, {
        isBlocking: true,
        keyboard: null
      });
    }
  };
  exports.VEX_MODAL_PROVIDERS = angular2_modal_1.MODAL_PROVIDERS.concat([new core_1.Provider(angular2_modal_1.Modal, {useClass: modal_1.Modal}), new core_1.Provider(modal_1.Modal, {useClass: modal_1.Modal}), new core_1.Provider(angular2_modal_1.ModalBackdropComponent, {useValue: modal_backdrop_1.VexModalBackdrop}), new core_1.Provider(angular2_modal_1.ModalDropInFactory, {useValue: dropInFactory})]);
  return module.exports;
});

System.registerDynamic("angular2-modal", ["@angular/core", "./models/tokens", "./providers/modal", "./providers/dom-modal-renderer", "./framework/fluent-assign", "./models/dialog-ref", "./models/modal-context", "./models/modal-open-context", "./plugins/bootstrap/index", "./plugins/vex/index"], true, function($__require, exports, module) {
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
  var core_1 = $__require('@angular/core');
  var tokens_1 = $__require('./models/tokens');
  var modal_1 = $__require('./providers/modal');
  var dom_modal_renderer_1 = $__require('./providers/dom-modal-renderer');
  __export($__require('./framework/fluent-assign'));
  __export($__require('./models/tokens'));
  __export($__require('./models/dialog-ref'));
  __export($__require('./models/modal-context'));
  __export($__require('./models/modal-open-context'));
  var modal_2 = $__require('./providers/modal');
  exports.Modal = modal_2.Modal;
  var dom_modal_renderer_2 = $__require('./providers/dom-modal-renderer');
  exports.DOMModalRenderer = dom_modal_renderer_2.DOMModalRenderer;
  exports.MODAL_PROVIDERS = [new core_1.Provider(modal_1.Modal, {useClass: modal_1.Modal}), new core_1.Provider(tokens_1.ModalRenderer, {useClass: dom_modal_renderer_1.DOMModalRenderer})];
  var bootstrap = $__require('./plugins/bootstrap/index');
  var vex = $__require('./plugins/vex/index');
  exports.plugins = {
    bootstrap: bootstrap,
    vex: vex
  };
  return module.exports;
});
