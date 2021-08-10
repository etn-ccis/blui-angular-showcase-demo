import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-template-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-settings',
    },
})
export class SettingsComponent {
    notifications = true;
    textNotifications = true;
    autoLogout = true;
}
