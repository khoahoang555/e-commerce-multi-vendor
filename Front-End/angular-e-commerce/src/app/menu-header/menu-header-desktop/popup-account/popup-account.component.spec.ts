import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAccountComponent } from './popup-account.component';

describe('PopupAccountComponent', () => {
  let component: PopupAccountComponent;
  let fixture: ComponentFixture<PopupAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
