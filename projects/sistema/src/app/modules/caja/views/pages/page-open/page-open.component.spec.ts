import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOpenComponent } from './page-open.component';

describe('PageOpenComponent', () => {
  let component: PageOpenComponent;
  let fixture: ComponentFixture<PageOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOpenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
