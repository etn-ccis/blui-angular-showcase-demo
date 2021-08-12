import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { DrawerNavItem } from '@pxblue/angular-components';
import { ViewportService } from '../services/viewport.service';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';

@Component({
    selector: 'showcase-drawer',
    styleUrls: ['./drawer.component.scss'],
    template: `
        <pxb-drawer [open]="isOpen()">
            <pxb-drawer-header title="Showcase App" class="test-background-image">
                <button mat-icon-button pxb-icon (click)="clickMenuButton()">
                    <mat-icon>menu</mat-icon>
                </button>
            </pxb-drawer-header>
            <pxb-drawer-body>
                <pxb-drawer-nav-group>
                    <pxb-drawer-nav-item
                        *ngFor="let navItem of navItems"
                        [title]="navItem.title"
                        [subtitle]="navItem.subtitle"
                        [divider]="true"
                        [selected]="selectedItemId === navItem.title"
                    >
                        <pxb-drawer-nav-item
                            *ngFor="let nestedItem of navItem.items"
                            [title]="nestedItem.title"
                            [selected]="selectedItemId === navItem.title + nestedItem.title"
                            (select)="nestedItem.onSelect(); setActive(navItem.title, nestedItem.title)"
                        ></pxb-drawer-nav-item>
                        <i pxb-icon *ngIf="navItem.icon === 'pxblue'" class="pxb-pxblue_small"></i>
                        <mat-icon pxb-icon *ngIf="navItem.icon !== 'pxblue'">{{ navItem.icon }}</mat-icon>
                    </pxb-drawer-nav-item>
                </pxb-drawer-nav-group>
            </pxb-drawer-body>
            <pxb-drawer-footer>
                <img src="../assets/EatonLogo.svg" width="170" style="align-self: center; padding: 16px" />
            </pxb-drawer-footer>
        </pxb-drawer>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
    colors = PXBColors;
    selectedItemId = 'Dashboard';

    constructor(
        private readonly _stateService: StateService,
        private readonly _viewportService: ViewportService,
        private readonly _router: Router,
        private readonly _changeDetector: ChangeDetectorRef
    ) {}

    navItems: DrawerNavItem[] = [
        {
            title: 'PX Blue Components',
            icon: 'pxblue',
            items: [
                {
                    title: 'Display Data',
                    onSelect: (): void => this.navigate('/pxblue-components/data-display-components'),
                },
                {
                    title: 'Navigation',
                    onSelect: (): void => this.navigate('/pxblue-components/navigation-components'),
                },
                {
                    title: 'Surfaces',
                    onSelect: (): void => this.navigate('/pxblue-components/surface-components'),
                },
            ],
        },
        {
            title: 'Material Components',
            icon: 'category',
            items: [
                {
                    title: 'Display Data',
                    onSelect: (): void => this.navigate('/material-components/data-display-components'),
                },
                {
                    title: 'Feedback',
                    onSelect: (): void => this.navigate('/material-components/feedback-components'),
                },
                {
                    title: 'Inputs',
                    onSelect: (): void => this.navigate('/material-components/input-components'),
                },
                {
                    title: 'Navigation',
                    onSelect: (): void => this.navigate('/material-components/navigation-components'),
                },
                {
                    title: 'Surfaces',
                    onSelect: (): void => this.navigate('/material-components/surface-components'),
                },
            ],
        },
        {
            title: 'Page Templates',
            icon: 'layers',
            onSelect: (): void => {},
            items: [
                {
                    title: 'Alarms',
                    onSelect: (): void => this.navigate('/templates/alarms'),
                },
                {
                    title: 'Dashboard',
                    onSelect: (): void => this.navigate('/templates/dashboard'),
                },
                {
                    title: 'Settings',
                    onSelect: (): void => this.navigate('/templates/settings'),
                },
            ],
        },
    ];

    navigate(url: string): void {
        void this._router.navigateByUrl(url);
    }

    isOpen(): boolean {
        return this._stateService.getDrawerOpen();
    }

    setActive(groupId: string, itemId: string): void {
        if (!groupId) {
            return;
        }
        this.selectedItemId = groupId + itemId;
        if (this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(false);
        }
    }

    clickMenuButton(): void {
        this._stateService.setDrawerOpen(!this._stateService.getDrawerOpen());
    }
}
