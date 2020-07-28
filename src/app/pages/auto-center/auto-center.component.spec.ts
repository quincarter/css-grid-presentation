import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCenterComponent } from './auto-center.component';

describe('AutoCenterComponent', () => {
  let component: AutoCenterComponent;
  let fixture: ComponentFixture<AutoCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
