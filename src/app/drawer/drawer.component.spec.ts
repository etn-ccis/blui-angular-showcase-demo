import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DrawerComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // const fixture = TestBed.createComponent(DrawerComponent);
        // const component = fixture.componentInstance;
        void expect(component).toBeTruthy();
    });
});
