import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuExpandComponent } from './side-menu-expand.component';

describe('SideMenuExpandComponent', () => {
  let component: SideMenuExpandComponent;
  let fixture: ComponentFixture<SideMenuExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideMenuExpandComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
