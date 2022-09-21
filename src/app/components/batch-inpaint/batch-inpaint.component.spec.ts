import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchInpaintComponent } from './batch-inpaint.component';

describe('BatchInpaintComponent', () => {
  let component: BatchInpaintComponent;
  let fixture: ComponentFixture<BatchInpaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchInpaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchInpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
