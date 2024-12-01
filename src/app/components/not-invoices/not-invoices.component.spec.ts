import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInvoicesComponent } from './not-invoices.component';

describe('NotInvoicesComponent', () => {
  let component: NotInvoicesComponent;
  let fixture: ComponentFixture<NotInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
