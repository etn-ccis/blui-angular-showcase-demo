import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TypographyComponent } from './typography/typography.component';
import { PxbSurfacesComponent } from './pages/pxblue/surfaces/surfaces.component';
import { PxbDisplayComponent } from './pages/pxblue/data-display/display.component';
import { MatDisplayComponent } from './pages/mat/data-display/display.component';
import { MatFeedackComponent } from './pages/mat/feedback/feedback.component';
import { MatInputsComponent } from './pages/mat/inputs/inputs.component';
import { MatNavigationComponent } from './pages/mat/navigation/navigation.component';
import { MatSurfacesComponent } from './pages/mat/surfaces/surfaces.component';
import { PxbNavigationComponent } from './pages/pxblue/navigation/navigation.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'timeline', component: TimelineComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'kitchen-sink', component: KitchenSinkComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'pxblue-components/surface-components', component: PxbSurfacesComponent },
    { path: 'pxblue-components/data-display-components', component: PxbDisplayComponent },
    { path: 'pxblue-components/navigation-components', component: PxbNavigationComponent },
    { path: 'material-components/data-display-components', component: MatDisplayComponent },
    { path: 'material-components/feedback-components', component: MatFeedackComponent },
    { path: 'material-components/input-components', component: MatInputsComponent },
    { path: 'material-components/navigation-components', component: MatNavigationComponent },
    { path: 'material-components/surface-components', component: MatSurfacesComponent },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
