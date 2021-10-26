import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PxbSurfacesComponent } from './surfaces.component';

describe('PxbSurfacesComponent', () => {
    let component: PxbSurfacesComponent;
    let fixture: ComponentFixture<PxbSurfacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PxbSurfacesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PxbSurfacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
