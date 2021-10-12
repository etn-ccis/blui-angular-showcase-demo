import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNavigationComponent } from './navigation.component';

describe('MatNavigationComponent', () => {
    let component: MatNavigationComponent;
    let fixture: ComponentFixture<MatNavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatNavigationComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
