import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';

const routes: Routes = [
  {
    path: '',
    title: 'App Invoice',
    component: HomeComponent,
  },
  {
    path: 'create-invoice',
    title: 'Create Invoice',
    component: CreateInvoiceComponent,
  },
  {
    path: 'edit-invoice',
    title: 'Edit Invoice',
    component: EditInvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
