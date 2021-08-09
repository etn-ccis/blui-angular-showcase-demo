import { Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { RtlService } from '../../../services/rtl.service';

@Component({
    selector: 'app-mat-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MatDisplayComponent {
    colors = PXBColors;
    constructor(public rtl: RtlService) {}
}
