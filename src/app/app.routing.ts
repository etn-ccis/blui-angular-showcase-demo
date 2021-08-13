import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/templates/dashboard/dashboard.component';
import { PxbSurfacesComponent } from './pages/pxblue/surfaces/surfaces.component';
import { PxbDisplayComponent } from './pages/pxblue/data-display/display.component';
import { MatDisplayComponent } from './pages/mat/data-display/display.component';
import { MatFeedackComponent } from './pages/mat/feedback/feedback.component';
import { MatInputsComponent } from './pages/mat/inputs/inputs.component';
import { MatNavigationComponent } from './pages/mat/navigation/navigation.component';
import { MatSurfacesComponent } from './pages/mat/surfaces/surfaces.component';
import { PxbNavigationComponent } from './pages/pxblue/navigation/navigation.component';
import { AlarmsComponent } from './pages/templates/alarms/alarms.component';
import { SettingsComponent } from './pages/templates/settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: 'templates/dashboard', pathMatch: 'full' },
    { path: 'pxblue-components/surface-components', component: PxbSurfacesComponent },
    { path: 'pxblue-components/data-display-components', component: PxbDisplayComponent },
    { path: 'pxblue-components/navigation-components', component: PxbNavigationComponent },
    { path: 'material-components/data-display-components', component: MatDisplayComponent },
    { path: 'material-components/feedback-components', component: MatFeedackComponent },
    { path: 'material-components/input-components', component: MatInputsComponent },
    { path: 'material-components/navigation-components', component: MatNavigationComponent },
    { path: 'material-components/surface-components', component: MatSurfacesComponent },
    { path: 'templates/alarms', component: AlarmsComponent },
    { path: 'templates/dashboard', component: DashboardComponent },
    { path: 'templates/settings', component: SettingsComponent },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
