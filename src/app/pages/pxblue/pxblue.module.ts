import { NgModule } from '@angular/core';
import { PxbSurfacesComponent } from './surfaces/surfaces.component';
import { PxbDisplayComponent } from './data-display/display.component';
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
} from '@pxblue/angular-components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { PxbNavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [PxbSurfacesComponent, PxbDisplayComponent, PxbNavigationComponent],
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
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MobileStepperModule,
        ScoreCardModule,
        UserMenuModule,
    ],
    exports: [PxbSurfacesComponent, PxbDisplayComponent, PxbNavigationComponent],
})
export class PxblueModule {}
