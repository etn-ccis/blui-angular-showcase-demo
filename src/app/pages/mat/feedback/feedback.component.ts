import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-mat-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'host',
    },
})
export class MatFeedackComponent {}
