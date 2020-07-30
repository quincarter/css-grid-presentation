import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFitVsAutoFillComponent } from './auto-fit-vs-auto-fill.component';

describe('AutoFitVsAutoFillComponent', () => {
  let component: AutoFitVsAutoFillComponent;
  let fixture: ComponentFixture<AutoFitVsAutoFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFitVsAutoFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFitVsAutoFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
