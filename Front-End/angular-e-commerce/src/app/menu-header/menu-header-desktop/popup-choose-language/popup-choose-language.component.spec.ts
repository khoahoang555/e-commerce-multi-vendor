import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChooseLanguageComponent } from './popup-choose-language.component';

describe('PopupChooseLanguageComponent', () => {
  let component: PopupChooseLanguageComponent;
  let fixture: ComponentFixture<PopupChooseLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupChooseLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupChooseLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
