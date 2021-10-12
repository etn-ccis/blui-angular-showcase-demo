import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PxbDisplayComponent } from './display.component';

describe('PxbDisplayComponent', () => {
    let component: PxbDisplayComponent;
    let fixture: ComponentFixture<PxbDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PxbDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PxbDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
