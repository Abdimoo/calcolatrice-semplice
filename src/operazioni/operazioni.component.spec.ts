import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperazioniComponent } from './operazioni.component';

describe('OperazioniComponent', () => {
  let component: OperazioniComponent;
  let fixture: ComponentFixture<OperazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperazioniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
