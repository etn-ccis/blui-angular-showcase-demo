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
            <pxb-drawer-header
                title="Showcase App"
                class="test-background-image"
            >
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
                        (select)="navItem.onSelect(); setActive(navItem.title)"
                    >
                        <pxb-drawer-nav-item
                            *ngFor="let nestedItem of navItem.items"
                            [title]="nestedItem.title"
                            [selected]="selectedItemId === nestedItem.title"
                            (select)="nestedItem.onSelect(); setActive(nestedItem.title)"
                        ></pxb-drawer-nav-item>
                        <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
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
            onSelect: (): void => {},
            items: [
                {
                    title: 'Display Data',
                    onSelect: (): void => this.navigate('/pxblue-components/data-display-components'),
                },
                {
                    title: 'Surfaces',
                    onSelect: (): void => this.navigate('/pxblue-components/surface-components'),
                },
            ],

        },
        {
            title: 'Contextual',
            subtitle: 'components in an app setting',
            icon: 'layers',
            onSelect: (): void => {},
            items: [
                {
                    title: 'Dashboard',
                    onSelect: (): void => this.navigate('/dashboard'),
                },
                {
                    title: 'Timeline',
                    onSelect: (): void => this.navigate('/timeline'),
                },
            ],
        },
        {
            title: 'Kitchen Sink',
            subtitle: 'components at a glance',
            onSelect: (): void => this.navigate('/kitchen-sink'),
            icon: 'kitchen',
        },
        {
            title: 'Typography',
            subtitle: 'see all font sizes and variants',
            onSelect: (): void => this.navigate('/typography'),
            icon: 'text_fields',
        },
    ];

    navigate(url: string): void {
        void this._router.navigateByUrl(url);
    }

    isOpen(): boolean {
        return this._stateService.getDrawerOpen();
    }

    setActive(id: string): void {
        this.selectedItemId = id;
        if (this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(false);
        }
    }

    clickMenuButton(): void {
        this._stateService.setDrawerOpen(!this._stateService.getDrawerOpen());
    }
}
