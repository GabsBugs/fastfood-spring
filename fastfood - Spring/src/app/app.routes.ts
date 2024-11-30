import { OrderFormComponent } from './order-form/order-form.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: OrderFormComponent
  }
];
