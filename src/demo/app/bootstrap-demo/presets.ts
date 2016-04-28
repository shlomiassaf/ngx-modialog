import {Modal} from 'angular2-modal';

export function alert(modal: Modal) {
    return modal.alert()
        .size('lg')
        .title('A simple Alert style modal window')
        .body(`
        <h4>Alert is a classic (title/body/footer) 1 button modal window that 
        does not block.</h4>
        <b>Configuration:</b>
        <ul>
            <li>Non blocking (click anywhere outside to dismiss)</li>
            <li>Size large</li>
            <li>Dismissed with default keyboard key (ESC)</li>
            <li>Close wth button click</li>
            <li>HTML content</li>
        </ul>`);
}

export function prompt(modal: Modal) {
    return modal.prompt()
        .size('lg')
        .title('A simple Prompt style modal window')
        .body(`
            <h4>Prompt is a classic (title/body/footer) 1 button modal window that 
            blocks.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Blocks (only button click can dismiss)</li>
                <li>Size large</li>
                <li>Keyboard can not dismiss</li>
                <li>HTML content</li>
            </ul>`);
}

export function confirm(modal: Modal) {
    return modal.confirm()
        .size('lg')
        .titleHtml(`
            <div class="modal-title" 
                 style="font-size: 22px; color: grey; text-decoration: underline;">
                 A simple Confirm style modal window</div>`)
        .body(`
            <h4>Confirm is a classic (title/body/footer) 2 button modal window that blocks.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Blocks (only button click can close/dismiss)</li>
                <li>Size large</li>
                <li>Keyboard can not dismiss</li>
                <li>HTML Title</li>
                <li>HTML content</li>
            </ul>`);
}

export function cascading(modal: Modal) {
    let presets = [];

    presets.push(alert(modal));
    presets.push(prompt(modal));
    presets.push(confirm(modal));
    presets.push(
        modal.prompt()
            .size('sm')
            .title('Cascading modals!')
            .body('Find your way out...')
    );

    return {
        open: () => {
            let ret = presets.shift().open();
            while (presets.length > 0) presets.shift().open();
            return ret;
        }
    };
}

export function inElement(modal: Modal) {
    return modal.prompt()
        .size('sm')
        .title('A modal contained by an element')
        .body('Try stacking up more modals!');
}
