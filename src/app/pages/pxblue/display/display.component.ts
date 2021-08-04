import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-pxb-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'host',
    },
})
export class PxbDisplayComponent {
}
