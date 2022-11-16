import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCategoryMobileComponent } from './popup-category-mobile.component';

describe('PopupCategoryMobileComponent', () => {
  let component: PopupCategoryMobileComponent;
  let fixture: ComponentFixture<PopupCategoryMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCategoryMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCategoryMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
