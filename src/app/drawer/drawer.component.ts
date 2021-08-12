import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { DrawerNavItem } from '@pxblue/angular-components';
import { ViewportService } from '../services/viewport.service';
import { StateService } from '../services/state.service';
import {NavigationEnd, Router} from '@angular/router';

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
    selectedItemId: string;
    pxblueGroupId = 'PX Blue Components';
    materialComponentsGroupId = 'Material Components';
    pageTemplatesGroupId = 'Page Templates';
    dataDisplay = 'Data Display';
    navigation = 'Navigation';
    surfaces = 'Surfaces';
    feedback = 'Feedback';
    inputs = 'Inputs';
    alarms = 'Alarms';
    settings = 'Settings';
    dashboard = 'Dashboard';

    constructor(
        private readonly _stateService: StateService,
        private readonly _viewportService: ViewportService,
        private readonly _router: Router,
        private readonly _changeDetector: ChangeDetectorRef
    ) {
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationEnd && !this.selectedItemId) {
                switch (route.urlAfterRedirects.split('?')[0]) {
                    case `/pxblue-components/data-display-components`: {
                        this.selectedItemId = `${this.pxblueGroupId}${this.dataDisplay}`
                        this.navItems[0].expanded = true;
                        break;
                    }
                    case `/pxblue-components/navigation-components`: {
                        this.selectedItemId = `${this.pxblueGroupId}${this.navigation}`
                        this.navItems[0].expanded = true;
                        break;
                    }
                    case `/pxblue-components/surface-components`: {
                        this.selectedItemId = `${this.pxblueGroupId}${this.surfaces}`
                        this.navItems[0].expanded = true;
                        break;
                    }
                    case `/material-components/data-display-components`: {
                        this.selectedItemId = `${this.materialComponentsGroupId}${this.dataDisplay}`
                        this.navItems[1].expanded = true;
                        break;
                    }
                    case `/material-components/feedback-components`: {
                        this.selectedItemId = `${this.materialComponentsGroupId}${this.feedback}`
                        this.navItems[1].expanded = true;
                        break;
                    }
                    case `/material-components/input-components`: {
                        this.selectedItemId = `${this.materialComponentsGroupId}${this.inputs}`
                        this.navItems[1].expanded = true;
                        break;
                    }
                    case `/material-components/navigation-components`: {
                        this.selectedItemId = `${this.materialComponentsGroupId}${this.navigation}`
                        this.navItems[1].expanded = true;
                        break;
                    }
                    case `/material-components/surface-components`: {
                        this.selectedItemId = `${this.materialComponentsGroupId}${this.surfaces}`
                        this.navItems[1].expanded = true;
                        break;
                    }
                    case `/templates/alarms`: {
                        this.selectedItemId = `${this.pageTemplatesGroupId}${this.alarms}`
                        this.navItems[2].expanded = true;
                        break;
                    }
                    case `/templates/settings`: {
                        this.selectedItemId = `${this.pageTemplatesGroupId}${this.settings}`
                        this.navItems[2].expanded = true;
                        break;
                    }
                    case `/templates/dashboard`: {
                        this.selectedItemId = `${this.pageTemplatesGroupId}${this.dashboard}`
                        this.navItems[2].expanded = true;
                        break;
                    }
                    default:
                        return;
                }
            }
        });
    }

    navItems: DrawerNavItem[] = [
        {
            title: this.pxblueGroupId,
            icon: 'pxblue',
            expanded: false,
            items: [
                {
                    title: this.dataDisplay,
                    onSelect: (): void => this.navigate('/pxblue-components/data-display-components'),
                },
                {
                    title: this.navigation,
                    onSelect: (): void => this.navigate('/pxblue-components/navigation-components'),
                },
                {
                    title: this.surfaces,
                    onSelect: (): void => this.navigate('/pxblue-components/surface-components'),
                },
            ],
        },
        {
            title: this.materialComponentsGroupId,
            icon: 'category',
            expanded: false,
            items: [
                {
                    title: this.dataDisplay,
                    onSelect: (): void => this.navigate('/material-components/data-display-components'),
                },
                {
                    title: this.feedback,
                    onSelect: (): void => this.navigate('/material-components/feedback-components'),
                },
                {
                    title: this.inputs,
                    onSelect: (): void => this.navigate('/material-components/input-components'),
                },
                {
                    title: this.navigation,
                    onSelect: (): void => this.navigate('/material-components/navigation-components'),
                },
                {
                    title: this.surfaces,
                    onSelect: (): void => this.navigate('/material-components/surface-components'),
                },
            ],
        },
        {
            title: this.pageTemplatesGroupId,
            icon: 'layers',
            expanded: false,
            items: [
                {
                    title: this.alarms,
                    onSelect: (): void => this.navigate('/templates/alarms'),
                },
                {
                    title: this.dashboard,
                    onSelect: (): void => this.navigate('/templates/dashboard'),
                },
                {
                    title: this.settings,
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
