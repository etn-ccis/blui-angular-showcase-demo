import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements AfterViewInit {
    colors = PXBColors;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }
}
