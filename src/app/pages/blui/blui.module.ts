import { NgModule } from '@angular/core';
import { BluiSurfacesComponent } from './surfaces/surfaces.component';
import { BluiDisplayComponent } from './data-display/display.component';
import { MatCardModule } from '@angular/material/card';
import {
    AppBarModule,
    ChannelValueModule,
    DropdownToolbarModule,
    EmptyStateModule,
    HeroModule,
    InfoListItemModule,
    ListItemTagModule,
    MobileStepperModule,
    ScoreCardModule,
    ThreeLinerModule,
    UserMenuModule,
    ToolbarMenuModule,
} from '@brightlayer-ui/angular-components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BluiNavigationComponent } from './navigation/navigation.component';
import { BluiTypographyComponent } from './typography.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PasswordStrengthCheckerModule } from '@blui-lab/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [BluiSurfacesComponent, BluiDisplayComponent, BluiNavigationComponent, BluiTypographyComponent],
    imports: [
        AppBarModule,
        CommonModule,
        ChannelValueModule,
        DropdownToolbarModule,
        EmptyStateModule,
        HeroModule,
        InfoListItemModule,
        ListItemTagModule,
        ThreeLinerModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MobileStepperModule,
        ScoreCardModule,
        UserMenuModule,
        ToolbarMenuModule,
        PasswordStrengthCheckerModule,
    ],
    exports: [BluiSurfacesComponent, BluiDisplayComponent, BluiNavigationComponent, BluiTypographyComponent],
})
export class BluiModule {}
