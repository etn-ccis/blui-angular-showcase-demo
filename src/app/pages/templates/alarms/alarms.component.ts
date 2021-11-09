import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';

@Component({
    selector: 'app-template-alarms',
    templateUrl: './alarms.component.html',
    styleUrls: ['./alarms.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-template-alarms',
    },
})
export class AlarmsComponent implements AfterViewInit {
    colors = BLUIColors;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }
}
