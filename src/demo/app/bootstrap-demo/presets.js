export function alert(modal) {
    return modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body("\n        <h4>Alert is a classic (title/body/footer) 1 button modal window that \n        does not block.</h4>\n        <b>Configuration:</b>\n        <ul>\n            <li>Non blocking (click anywhere outside to dismiss)</li>\n            <li>Size large</li>\n            <li>Dismissed with default keyboard key (ESC)</li>\n            <li>Close wth button click</li>\n            <li>HTML content</li>\n        </ul>");
}
export function prompt(modal) {
    return modal.prompt()
        .size('lg')
        .title('A simple Prompt style modal window')
        .placeholder('This is a placeholder')
        .body('Please type a value!');
}
export function confirm(modal) {
    return modal.confirm()
        .size('lg')
        .titleHtml("\n            <div class=\"modal-title\" \n                 style=\"font-size: 22px; color: grey; text-decoration: underline;\">\n                 A simple Confirm style modal window</div>")
        .body("\n            <h4>Confirm is a classic (title/body/footer) 2 button modal window that blocks.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Blocks (only button click can close/dismiss)</li>\n                <li>Size large</li>\n                <li>Keyboard can not dismiss</li>\n                <li>HTML Title</li>\n                <li>HTML content</li>\n            </ul>");
}
export function cascading(modal) {
    var presets = [];
    presets.push(alert(modal));
    presets.push(prompt(modal));
    presets.push(confirm(modal));
    presets.push(modal.prompt()
        .size('sm')
        .title('Cascading modals!')
        .body('Find your way out...'));
    return {
        open: function () {
            var ret = presets.shift().open();
            while (presets.length > 0)
                presets.shift().open();
            return ret;
        }
    };
}
export function inElement(modal) {
    return modal.prompt()
        .size('sm')
        .title('A modal contained by an element')
        .inElement(true)
        .body('Try stacking up more modals!');
}
//# sourceMappingURL=presets.js.map