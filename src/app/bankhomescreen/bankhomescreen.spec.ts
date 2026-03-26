import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankhomescreen } from './bankhomescreen';

describe('Bankhomescreen', () => {
  let component: Bankhomescreen;
  let fixture: ComponentFixture<Bankhomescreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bankhomescreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bankhomescreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
