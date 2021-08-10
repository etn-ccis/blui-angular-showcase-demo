import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class AlwaysErrorState implements ErrorStateMatcher {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return true;
    }
}

@Component({
    selector: 'app-mat-inputs',
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'host',
    },
})
export class MatInputsComponent {
    errorMatcher = new AlwaysErrorState();
    errorControl: FormControl = new FormControl('', [Validators.required]);
}
