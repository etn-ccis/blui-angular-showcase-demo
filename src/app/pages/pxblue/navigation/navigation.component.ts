import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-pxb-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PxbNavigationComponent {
    mobileStepperStep = 0;
}
