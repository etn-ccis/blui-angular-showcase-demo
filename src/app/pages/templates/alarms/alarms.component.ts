import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
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

    constructor(private readonly _ref: ChangeDetectorRef, public themeService: ThemeService) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }
}
