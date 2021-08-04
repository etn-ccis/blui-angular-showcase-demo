import { NgModule } from '@angular/core';
import {PxbSurfacesComponent} from "./surfaces/surfaces.component";
import {PxbDisplayComponent} from "./display/display.component";

@NgModule({
    declarations: [
        PxbSurfacesComponent,
        PxbDisplayComponent,
    ],
    imports: [
    ],
    exports: [
        PxbSurfacesComponent,
        PxbDisplayComponent
    ]
})
export class PxblueModule {}
