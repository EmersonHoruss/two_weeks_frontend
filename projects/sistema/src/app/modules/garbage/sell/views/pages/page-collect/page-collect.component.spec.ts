import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCollectComponent } from './page-collect.component';

describe('PageCollectComponent', () => {
  let component: PageCollectComponent;
  let fixture: ComponentFixture<PageCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
