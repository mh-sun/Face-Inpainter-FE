import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpaintComponent } from './inpaint.component';

describe('InpaintComponent', () => {
  let component: InpaintComponent;
  let fixture: ComponentFixture<InpaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
