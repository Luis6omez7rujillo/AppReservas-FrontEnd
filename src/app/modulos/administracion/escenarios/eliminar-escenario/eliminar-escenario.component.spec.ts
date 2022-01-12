import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEscenarioComponent } from './eliminar-escenario.component';

describe('EliminarEscenarioComponent', () => {
  let component: EliminarEscenarioComponent;
  let fixture: ComponentFixture<EliminarEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
