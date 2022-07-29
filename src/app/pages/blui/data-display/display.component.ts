import { Component, ViewEncapsulation } from '@angular/core';
import { BLUIColors } from '@brightlayer-ui/colors';
import { RtlService } from '../../../services/rtl.service';
import { FormControl } from '@angular/forms';
import { PasswordRequirement } from '@blui-lab/angular';

@Component({
    selector: 'app-blui-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BluiDisplayComponent {
    colors = BLUIColors;
    userMenuOpen1 = false;
    userMenuOpen2 = false;
    userMenuOpen3 = false;
    userMenuOpen4 = false;
    userMenuOpen5 = false;
    passesStrengthCheck = false;

    passwordFormControl: FormControl;
    passwordRequirements: PasswordRequirement[];

    userMenuItems = [
        {
            title: 'Settings',
            icon: 'settings',
        },
        {
            title: 'Contact Us',
            icon: 'mail',
        },
        {
            title: 'Log Out',
            icon: 'logout',
        },
    ];

    constructor(public rtl: RtlService) {}

    ngOnInit(): void {
        this.passwordRequirements = this.createPasswordRequirements();
        this.passwordFormControl = new FormControl('');
    }

    createPasswordRequirements(): PasswordRequirement[] {
        const req: PasswordRequirement[] = [];
        req.push({
            description: 'Must be between 8 and 16 characters',
            regex: /^.{8,16}$/,
        });
        req.push({
            description: 'Must have one number',
            regex: /[0-9]/,
        });
        req.push({
            description: 'Must have uppercase Letter',
            regex: /[A-Z]/,
        });

        return req;
    }

    handleInfoListItemClick(): void {
        // eslint-disable-next-line no-console
        console.info('InfoListItem clicked');
    }
}
