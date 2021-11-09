import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDisplayComponent } from './display.component';

describe('MatDisplayComponent', () => {
    let component: MatDisplayComponent;
    let fixture: ComponentFixture<MatDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
