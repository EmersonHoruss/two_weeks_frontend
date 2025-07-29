import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListGarbageComponent } from './page-list-garbage.component';

describe('PageListGarbageComponent', () => {
  let component: PageListGarbageComponent;
  let fixture: ComponentFixture<PageListGarbageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListGarbageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListGarbageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
