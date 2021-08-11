import { NgModule } from '@angular/core';
import { MatSurfacesComponent } from './surfaces/surfaces.component';
import { MatDisplayComponent } from './data-display/display.component';
import { FeedbackBottomSheetExample, FeedbackDialogExample, MatFeedackComponent } from './feedback/feedback.component';
import { MatInputsComponent } from './inputs/inputs.component';
import { MatNavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        MatSurfacesComponent,
        MatDisplayComponent,
        MatFeedackComponent,
        MatInputsComponent,
        MatNavigationComponent,
        FeedbackDialogExample,
        FeedbackBottomSheetExample,
    ],
    imports: [
        CommonModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatDialogModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatStepperModule,
        MatTabsModule,
        MatSelectModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatTableModule,
        MatTooltipModule,
    ],
    exports: [
        MatSurfacesComponent,
        MatDisplayComponent,
        MatFeedackComponent,
        MatInputsComponent,
        MatNavigationComponent,
        FeedbackDialogExample,
        FeedbackBottomSheetExample,
    ],
})
export class MatModule {}
