import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEscenarioComponent } from './buscar-escenario.component';

describe('BuscarEscenarioComponent', () => {
  let component: BuscarEscenarioComponent;
  let fixture: ComponentFixture<BuscarEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
