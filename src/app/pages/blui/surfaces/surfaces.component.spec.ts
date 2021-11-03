import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BluiSurfacesComponent } from './surfaces.component';

describe('BluiSurfacesComponent', () => {
    let component: BluiSurfacesComponent;
    let fixture: ComponentFixture<BluiSurfacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BluiSurfacesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BluiSurfacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
