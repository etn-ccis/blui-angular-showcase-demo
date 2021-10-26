import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PxbNavigationComponent } from './navigation.component';

describe('PxbNavigationComponent', () => {
    let component: PxbNavigationComponent;
    let fixture: ComponentFixture<PxbNavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PxbNavigationComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PxbNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
