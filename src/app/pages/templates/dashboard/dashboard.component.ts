import { Component, ViewEncapsulation } from '@angular/core';
import * as BLUIIcons from '@brightlayer-ui/colors';

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
    colors = BLUIIcons;
}
