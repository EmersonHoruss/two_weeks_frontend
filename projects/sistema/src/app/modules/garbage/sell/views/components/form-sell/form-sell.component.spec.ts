import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSellComponent } from './form-sell.component';

describe('FormSellComponent', () => {
  let component: FormSellComponent;
  let fixture: ComponentFixture<FormSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
