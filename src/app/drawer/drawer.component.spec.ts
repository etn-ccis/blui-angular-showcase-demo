import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { StateService } from '../services/state.service';

describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    const eventSubject = new ReplaySubject<RouterEvent>(1);

    const routerMock = {
        navigate: jasmine.createSpy('navigate'),
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
        events: eventSubject.asObservable(),
        url: 'test/url',
    };

    const StateServiceMock = {
        setDrawerOpen: jasmine.createSpy('setDrawerOpen'),
        getDrawerOpen: jasmine.createSpy('getDrawerOpen'),
        drawerOpen: true,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DrawerComponent],
            providers: [
                { provide: Router, useValue: routerMock },
                { provide: StateService, useValue: StateServiceMock },
            ],
        });

        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should set selectedItemId Page TemplatesDashboard', () => {
        eventSubject.next(new NavigationEnd(1, '/templates/dashboard', '/templates/dashboard'));
        fixture.detectChanges();
        void expect(component.selectedItemId).toBe('Page TemplatesDashboard');
    });

    it('should navigate to data display', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuData'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to navigation', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuNavigation'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Surfaces', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuSurfaces'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Surfaces', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuSurfaces'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Feedback', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuFeedback'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Inputs', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuInputs'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Alarms', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuAlarms'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Dashboard', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuDashboard'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should navigate to Settings', () => {
        fixture.detectChanges();
        const navMenuItem = fixture.debugElement.query(By.css('.nav-menuSettings'));
        const navigateSpy = spyOn(component, 'navigate').and.stub();
        navMenuItem.triggerEventHandler('select', undefined);
        fixture.detectChanges();
        void expect(navigateSpy).toHaveBeenCalled();
    });

    it('should call isOpen method', () => {
        const checkDrawerOpenSpy = spyOn(component, 'isOpen');
        fixture.detectChanges();
        void expect(checkDrawerOpenSpy).toBeTruthy();
    });

    it('should collapsed drawer when click on menu icon', () => {
        const showcaseMenuIcon = document.getElementsByClassName('showcase-menu-button')[0];
        const mouseEvent = new MouseEvent('click');
        showcaseMenuIcon.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const collapsedDrawer = document.getElementsByClassName('pxb-drawer-collapse');
        void expect(collapsedDrawer).toBeTruthy();
    });
});
