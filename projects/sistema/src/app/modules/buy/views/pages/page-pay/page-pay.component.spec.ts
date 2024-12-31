import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePayComponent } from './page-pay.component';

describe('PagePayComponent', () => {
  let component: PagePayComponent;
  let fixture: ComponentFixture<PagePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
