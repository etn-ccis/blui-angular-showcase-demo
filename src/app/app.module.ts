import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import {
    HeroModule,
    ChannelValueModule,
    EmptyStateModule,
    ScoreCardModule,
    InfoListItemModule,
    DrawerModule,
    ListItemTagModule,
    DropdownToolbarModule,
    UserMenuModule,
} from '@pxblue/angular-components';

//material modules
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from './drawer/drawer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

@NgModule({
    declarations: [AppComponent, DrawerComponent, DashboardComponent, KitchenSinkComponent],
    imports: [
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
        MatCheckboxModule,
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
        //pxblue
        UserMenuModule,
        NgProgressIconsModule,
        ChannelValueModule,
        EmptyStateModule,
        ScoreCardModule,
        HeroModule,
        InfoListItemModule,
        DrawerModule,
        ListItemTagModule,
        DropdownToolbarModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
