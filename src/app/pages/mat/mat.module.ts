import { NgModule } from '@angular/core';
import { MatSurfacesComponent } from './surfaces/surfaces.component';
import { MatDisplayComponent } from './data-display/display.component';
import { MatFeedackComponent } from './feedback/feedback.component';
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

@NgModule({
    declarations: [
        MatSurfacesComponent,
        MatDisplayComponent,
        MatFeedackComponent,
        MatInputsComponent,
        MatNavigationComponent,
    ],
    imports: [
        CommonModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
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
    ],
    exports: [
        MatSurfacesComponent,
        MatDisplayComponent,
        MatFeedackComponent,
        MatInputsComponent,
        MatNavigationComponent,
    ],
})
export class MatModule {}
