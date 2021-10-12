import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSurfacesComponent } from './surfaces.component';

describe('MatSurfacesComponent', () => {
    let component: MatSurfacesComponent;
    let fixture: ComponentFixture<MatSurfacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatSurfacesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatSurfacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
