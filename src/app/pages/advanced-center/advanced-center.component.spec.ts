import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCenterComponent } from './advanced-center.component';

describe('AdvancedCenterComponent', () => {
  let component: AdvancedCenterComponent;
  let fixture: ComponentFixture<AdvancedCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
