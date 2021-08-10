import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Component({
    selector: 'app-template-alarms',
    templateUrl: './alarms.component.html',
    styleUrls: ['./alarms.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-alarms',
    },
})
export class AlarmsComponent implements AfterViewInit {
    colors = PXBColors;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }
}
