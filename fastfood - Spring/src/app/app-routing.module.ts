import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component'; // Importando a lista de pedidos
import { OrderFormComponent } from './order-form/order-form.component'; // Importando o formulário de pedidos

// Definindo as rotas da aplicação
export const routes: Routes = [
  { path: '', redirectTo: '/order-form', pathMatch: 'full' }, // Redireciona para o formulário de pedidos
  { path: 'orders', component: OrderListComponent }, // Rota para a lista de pedidos
  { path: 'order-form', component: OrderFormComponent }, // Rota para o formulário de pedidos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
