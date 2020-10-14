import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarBelowComponent } from './topbar-below.component';

describe('TopbarBelowComponent', () => {
  let component: TopbarBelowComponent;
  let fixture: ComponentFixture<TopbarBelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarBelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
