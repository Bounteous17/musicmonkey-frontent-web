import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynComponentComponent } from './dyn-component.component';

describe('DynComponentComponent', () => {
  let component: DynComponentComponent;
  let fixture: ComponentFixture<DynComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
