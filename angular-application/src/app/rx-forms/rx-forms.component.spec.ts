import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFormsComponent } from './rx-forms.component';

describe('RxFormsComponent', () => {
  let component: RxFormsComponent;
  let fixture: ComponentFixture<RxFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
