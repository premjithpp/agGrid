import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTestComponent } from './ag-test.component';

describe('AgTestComponent', () => {
  let component: AgTestComponent;
  let fixture: ComponentFixture<AgTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
