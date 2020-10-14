import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormsFormBuliderComponent } from './react-forms-form-bulider.component';

describe('ReactFormsFormBuliderComponent', () => {
  let component: ReactFormsFormBuliderComponent;
  let fixture: ComponentFixture<ReactFormsFormBuliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormsFormBuliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormsFormBuliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
