import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlwaysErrorState } from '../../../kitchen-sink/kitchen-sink.component';

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
