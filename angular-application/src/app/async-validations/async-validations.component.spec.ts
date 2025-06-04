import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidationsComponent } from './async-validations.component';

describe('AsyncValidationsComponent', () => {
  let component: AsyncValidationsComponent;
  let fixture: ComponentFixture<AsyncValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
