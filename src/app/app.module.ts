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
