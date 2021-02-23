import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatTab} from "@angular/material/tabs";
import {MatSnackBar} from "@angular/material/snack-bar";

export class AlwaysErrorState implements ErrorStateMatcher {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return true;
    }
}
@Component({
    selector: 'app-kitchen-sink',
    templateUrl: './kitchen-sink.component.html',
    styleUrls: ['./kitchen-sink.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class KitchenSinkComponent {
    colors = PXBColors;
    mobileStepperStep = 0;
    errorMatcher = new AlwaysErrorState();
    errorControl: FormControl =  new FormControl('', [Validators.required]);

    constructor(private readonly _snackBar: MatSnackBar) {}

    openSnackBar(): void {
        this._snackBar.open('Sample Message', 'DISMISS', {
            duration: 2000,
        });
    }
}
