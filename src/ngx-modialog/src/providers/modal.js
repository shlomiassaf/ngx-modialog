export function unsupportedDropInError(dropInName) {
    return new Error("Unsupported Drop-In " + dropInName);
}
var Modal = (function () {
    function Modal(overlay) {
        this.overlay = overlay;
    }
    Modal.prototype.alert = function () {
        throw unsupportedDropInError('alert');
    };
    Modal.prototype.prompt = function () {
        throw unsupportedDropInError('prompt');
    };
    Modal.prototype.confirm = function () {
        throw unsupportedDropInError('confirm');
    };
    /**
     * Opens a modal window inside an existing component.
     * @param content The content to display, either string, template ref or a component.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
    Modal.prototype.open = function (content, config) {
        config = config || {};
        try {
            var dialogs = this.overlay.open(config, this.constructor);
            if (dialogs.length > 1) {
                console.warn("Attempt to open more then 1 overlay detected.\n        Multiple modal copies are not supported at the moment, \n        only the first viewContainer will display.");
            }
            // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
            //        upgrade to multiple containers.
            return Promise.resolve(this.create(dialogs[0], content));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    Modal.prototype.createBackdrop = function (dialogRef, BackdropComponent) {
        return dialogRef.overlayRef.instance.addComponent(BackdropComponent);
    };
    Modal.prototype.createContainer = function (dialogRef, ContainerComponent, content) {
        var nodes = dialogRef.overlayRef.instance.getProjectables(content);
        return dialogRef.overlayRef.instance.addComponent(ContainerComponent, nodes);
    };
    return Modal;
}());
export { Modal };
//# sourceMappingURL=modal.js.map