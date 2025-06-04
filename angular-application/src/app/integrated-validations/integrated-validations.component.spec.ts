import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedValidationsComponent } from './integrated-validations.component';

describe('IntegratedValidationsComponent', () => {
  let component: IntegratedValidationsComponent;
  let fixture: ComponentFixture<IntegratedValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegratedValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
