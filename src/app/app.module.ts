/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//brightlayer-ui modules
import { NgProgressIconsModule } from '@brightlayer-ui/ng-progress-icons';
import {
    HeroModule,
    ChannelValueModule,
    EmptyStateModule,
    ScoreCardModule,
    InfoListItemModule,
    DrawerModule,
    ListItemTagModule,
    AppBarModule,
    DropdownToolbarModule,
    UserMenuModule,
    MobileStepperModule,
    ThreeLinerModule,
} from '@brightlayer-ui/angular-components';

//material modules
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from './drawer/drawer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardComponent } from './pages/templates/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AlarmsComponent } from './pages/templates/alarms/alarms.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BluiModule } from './pages/blui/blui.module';
import { MatModule } from './pages/mat/mat.module';
import { SettingsComponent } from './pages/templates/settings/settings.component';

@NgModule({
    declarations: [AppComponent, DashboardComponent, DrawerComponent, AlarmsComponent, SettingsComponent],
    imports: [
        MatRippleModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatTabsModule,
        MatBadgeModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatExpansionModule,
        //blui
        UserMenuModule,
        NgProgressIconsModule,
        ChannelValueModule,
        EmptyStateModule,
        ScoreCardModule,
        HeroModule,
        InfoListItemModule,
        DrawerModule,
        MobileStepperModule,
        ListItemTagModule,
        ThreeLinerModule,
        DropdownToolbarModule,
        RouterModule,
        AppBarModule,
        BluiModule,
        MatModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
