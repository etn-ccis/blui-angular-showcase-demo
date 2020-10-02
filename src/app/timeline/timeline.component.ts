import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'class' : 'host'
    }
})
export class TimelineComponent implements AfterViewInit {
    colors = PXBColors;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }
}
