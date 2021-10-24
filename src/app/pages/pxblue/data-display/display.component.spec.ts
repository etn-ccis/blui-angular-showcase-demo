import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PxbDisplayComponent } from './display.component';

import { By } from '@angular/platform-browser';

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

    it('should call handleInfoListItemClick method', () => {
        fixture.detectChanges();
        const infoListItem = fixture.debugElement.query(By.css('.display-info-list-item'));
        const handleInfoListItemClickSpy = spyOn(component, 'handleInfoListItemClick').and.stub();
        infoListItem.triggerEventHandler('click', undefined);
        fixture.detectChanges();
        void expect(handleInfoListItemClickSpy).toHaveBeenCalled();
    });
});
