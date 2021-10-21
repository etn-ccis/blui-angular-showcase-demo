import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { By } from '@angular/platform-browser';

fdescribe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    const eventSubject = new ReplaySubject<RouterEvent>(1);

    const routerMock = {
        navigate: jasmine.createSpy('navigate'),
        events: eventSubject.asObservable(),
        url: 'test/url'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DrawerComponent],
            providers: [
                {provide: Router, useValue: routerMock}
            ]
        });

        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // beforeEach(() => {
    //     fixture = TestBed.createComponent(DrawerComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    // });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });


    it('should set selectedItemId Page TemplatesDashboard', () => {
        eventSubject.next(new NavigationEnd(1, '/templates/dashboard', '/templates/dashboard'));
        fixture.detectChanges();
        void expect(component.selectedItemId).toBe('Page TemplatesDashboard');
    });

    it('should set selectedItemId PX Blue ComponentsData Display', () => {
        eventSubject.next(new NavigationEnd(2, '/pxblue-components/data-display-components', '/pxblue-components/data-display-components'));
        fixture.detectChanges();
        void expect(component.selectedItemId).toBe('PX Blue ComponentsData Display');
    });

    // it('should display title PX Blue Data Display in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/pxblue-components/data-display-components', '/pxblue-components/data-display-components'));
    //     void expect(component.title).toBe('PX Blue Data Display');
    // });

    // it('should display title PX Blue Navigation in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/pxblue-components/navigation-components', '/pxblue-components/navigation-components'));
    //     void expect(component.title).toBe('PX Blue Navigation');
    // });

    // it('should display title PX Blue Surfaces in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/pxblue-components/surface-components', '/pxblue-components/surface-components'));
    //     void expect(component.title).toBe('PX Blue Surfaces');
    // });

    // it('should display title Material Data Display in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/material-components/data-display-components', '/material-components/data-display-components'));
    //     void expect(component.title).toBe('Material Data Display');
    // });

    // it('should display title Material Feedback in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/material-components/feedback-components', '/material-components/feedback-components'));
    //     void expect(component.title).toBe('Material Feedback');
    // });

    // it('should display title Material Inputs in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/material-components/input-components', '/material-components/input-components'));
    //     void expect(component.title).toBe('Material Inputs');
    // });

    // it('should display title Material Navigation in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/material-components/navigation-components', '/material-components/navigation-components'));
    //     void expect(component.title).toBe('Material Navigation');
    // });

    // it('should display title Material Surfaces in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/material-components/surface-components', '/material-components/surface-components'));
    //     void expect(component.title).toBe('Material Surfaces');
    // });

    // it('should display title Alarms in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/templates/alarms', '/templates/alarms'));
    //     void expect(component.title).toBe('Alarms');
    // });

    // it('should display title Settings in toolbar', () => {
    //     eventSubject.next(new NavigationEnd(1, '/templates/settings', '/templates/settings'));
    //     void expect(component.title).toBe('Settings');
    // });

    // it('should return isMobile', () => {
    //     let isMobile = component.isMobile();
    //     void expect(isMobile).toBe(false);
    // });
});
