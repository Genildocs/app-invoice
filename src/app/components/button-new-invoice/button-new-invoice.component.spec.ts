import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNewInvoiceComponent } from './button-new-invoice.component';

describe('ButtonNewInvoiceComponent', () => {
  let component: ButtonNewInvoiceComponent;
  let fixture: ComponentFixture<ButtonNewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonNewInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
