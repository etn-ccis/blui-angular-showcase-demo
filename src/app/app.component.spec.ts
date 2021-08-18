import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(() => {
            void TestBed.configureTestingModule({
                providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
                imports: [AppModule],
            }).compileComponents();
        })
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });

    // it(`should have as title 'Hero-Component'`, () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.title).toEqual('Hero-Component');
    // });
});
