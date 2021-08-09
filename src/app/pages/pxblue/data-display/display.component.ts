import { Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { RtlService } from '../../../services/rtl.service';

@Component({
    selector: 'app-pxb-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PxbDisplayComponent {
    colors = PXBColors;
    userMenuOpen1 = false;
    userMenuOpen2 = false;
    userMenuOpen3 = false;
    userMenuOpen4 = false;
    userMenuOpen5 = false;

    userMenuItems = [
        {
            title: 'Settings',
            icon: 'settings',
        },
        {
            title: 'Contact Us',
            icon: 'mail',
        },
        {
            title: 'Log Out',
            icon: 'logout',
        },
    ];

    constructor(public rtl: RtlService) {}

    handleInfoListItemClick(): void {
        // eslint-disable-next-line no-console
        console.info('InfoListItem clicked');
    }
}
