import { Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Component({
    selector: 'app-template-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-template-dashboard',
    },
})
export class DashboardComponent {
    colors = PXBColors;
}
