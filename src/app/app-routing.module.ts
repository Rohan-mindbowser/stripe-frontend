import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomescreenComponent,
  },
  {
    path: 'success',
    pathMatch: 'full',
    component: PaymentSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
