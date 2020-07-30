import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobRossComponent } from './bob-ross.component';

describe('BobRossComponent', () => {
  let component: BobRossComponent;
  let fixture: ComponentFixture<BobRossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobRossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobRossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
