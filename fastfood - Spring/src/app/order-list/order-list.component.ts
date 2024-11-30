import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { HttpErrorResponse } from '@angular/common/http'; // Importando HttpErrorResponse para tratamento de erros
import { CommonModule } from '@angular/common'; // Importando CommonModule para pipes

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  standalone: true, // Definindo o componente como standalone
  imports: [CommonModule], // Importando CommonModule
})
export class OrderListComponent implements OnInit {
  orders: Order[] = []; // Inicializa uma lista de pedidos.

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders(); // Carrega os pedidos ao inicializar o componente.
  }

  // Método para carregar pedidos utilizando o serviço.
  private loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data: Order[]) => {
        this.orders = data; // Atribui os dados recebidos à lista de pedidos.
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erro ao carregar os pedidos:', error.message); // Mostra a mensagem de erro no console
      },
    });
  }

  // Método para cancelar um pedido utilizando o serviço.
  cancelOrder(orderId: number): void {
    this.orderService.cancelOrder(orderId).subscribe({
      next: () => {
        this.loadOrders(); // Atualiza a lista de pedidos após o cancelamento.
      },
      error: (error: HttpErrorResponse) => {
        console.error(`Erro ao cancelar o pedido ${orderId}:`, error.message); // Mostra a mensagem de erro
      },
    });
  }
}
