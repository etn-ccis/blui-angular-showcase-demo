import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as PXBColors from '@pxblue/colors';
import { ViewportService } from './services/viewport.service';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { StateService } from './services/state.service';
import { RtlService } from './services/rtl.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    isDarkMode = false;
    isRtl = false;
    colors: Record<string, any>;
    variant: DrawerLayoutVariantType = 'persistent';
    dropdownToolbarSubtitle = 'Language';
    userMenuOpen = false;
    title: string;
    menuGroups = [
        {
            items: [
                {
                    title: 'Account Settings',
                    icon: 'settings',
                },
                {
                    title: 'Log Out',
                    icon: 'logout',
                },
            ],
        },
        {
            title: 'Contact Us',
            items: [
                {
                    title: 'eatonhelp@eaton.com',
                    icon: 'send',
                },
                {
                    title: '1-866-905-9988',
                    icon: 'mail',
                },
            ],
        },
    ];
    constructor(
        private readonly _stateService: StateService,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _domSanitizer: DomSanitizer,
        private readonly _viewportService: ViewportService,
        private readonly _rtlService: RtlService,
        private readonly _router: Router
    ) {
        this.colors = PXBColors;
        this.listenForRouteChanges();
        this._matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            /* **Note to PX Blue Users:
                Stackblitz has difficulty reading static assets found within the node_modules folder.
                For this example to work inside Stackblitz, we use a https request to fetch the PX Blue icon set.
                In normal situations, we encourage you to import the iconSet directly from the node_modules folder like below:
                    // const iconSet = require('@pxblue/icons-svg/icons.svg').default;
                    // this._domSanitizer.bypassSecurityTrustResourceUrl('iconSet')
             */
            this._domSanitizer.bypassSecurityTrustResourceUrl(
                'https://raw.githubusercontent.com/pxblue/icons/dev/svg/icons.svg'
            )
        );
    }

    listenForRouteChanges(): void {
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationEnd) {
                switch (route.urlAfterRedirects.split('?')[0]) {
                    case `/pxblue-components/data-display-components`: {
                        this.title = 'PX Blue Data Display';
                        break;
                    }
                    case `/pxblue-components/navigation-components`: {
                        this.title = 'PX Blue Navigation';
                        break;
                    }
                    case `/pxblue-components/surface-components`: {
                        this.title = 'PX Blue Surfaces';
                        break;
                    }
                    case `/material-components/data-display-components`: {
                        this.title = 'Material Data Display';
                        break;
                    }
                    case `/material-components/feedback-components`: {
                        this.title = 'Material Feedback';
                        break;
                    }
                    case `/material-components/input-components`: {
                        this.title = 'Material Inputs';
                        break;
                    }
                    case `/material-components/navigation-components`: {
                        this.title = 'Material Navigation';
                        break;
                    }
                    case `/material-components/surface-components`: {
                        this.title = 'Material Surfaces';
                        break;
                    }
                    case `/templates/alarms`: {
                        this.title = 'Alarms';
                        break;
                    }
                    case `/templates/settings`: {
                        this.title = 'Settings';
                        break;
                    }
                    case `/templates/dashboard`: {
                        this.title = 'Dashboard';
                        break;
                    }
                    default:
                        return;
                }
            }
        });
    }

    isMobile(): boolean {
        return this._viewportService.isSmall();
    }

    getVariant(): DrawerLayoutVariantType {
        if (this.variant === 'persistent' && this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(false);
        } else if (this.variant === 'temporary' && !this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(true);
        }

        this.variant = this._viewportService.isSmall() ? 'temporary' : 'persistent';
        return this.variant;
    }

    closeDrawer(): void {
        this._stateService.setDrawerOpen(false);
    }

    openDrawer(): void {
        this._stateService.setDrawerOpen(true);
    }

    updateDropdownToolbarSubtitle(string: string): void {
        this.dropdownToolbarSubtitle = string;
    }

    toggleTheme(): void {
        const body = document.querySelector('body') as HTMLElement;
        if (this.isDarkMode) {
            body.classList.remove('pxb-blue-dark');
            body.classList.add('pxb-blue');
        } else {
            body.classList.remove('pxb-blue');
            body.classList.add('pxb-blue-dark');
        }
        this.isDarkMode = !this.isDarkMode;
    }

    toggleDirectionality(): void {
        this.isRtl = !this.isRtl;
        this._rtlService.setRTL(this.isRtl);
    }
}
