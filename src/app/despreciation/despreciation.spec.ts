import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Despreciation } from './despreciation';

describe('Despreciation', () => {
  let component: Despreciation;
  let fixture: ComponentFixture<Despreciation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Despreciation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Despreciation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
