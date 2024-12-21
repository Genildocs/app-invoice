import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonNewInvoiceComponent } from './components/button-new-invoice/button-new-invoice.component';
import { TableInvoicesComponent } from './components/table-invoices/table-invoices.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotInvoicesComponent } from './components/not-invoices/not-invoices.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { BillFromComponent } from './components/bill-from/bill-from.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';
import { BillToComponent } from './components/bill-to/bill-to.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonNewInvoiceComponent,
    TableInvoicesComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
    NotInvoicesComponent,
    CreateInvoiceComponent,
    BillFromComponent,
    EditInvoiceComponent,
    BillToComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    RouterLink,
    RouterLinkActive,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
