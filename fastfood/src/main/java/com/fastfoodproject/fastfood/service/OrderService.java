package com.fastfoodproject.fastfood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fastfoodproject.fastfood.model.Order;
import com.fastfoodproject.fastfood.repository.OrderRepository;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Obter todos os pedidos
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Criar um novo pedido
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    // Obter um pedido por ID
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    // Atualizar um pedido
    public Order updateOrder(Long id, Order orderDetails) {
        // Verifica se o pedido existe
        Order order = orderRepository.findById(id).orElse(null);
        if (order != null) {
            order.setItemName(orderDetails.getItemName());
            order.setQuantity(orderDetails.getQuantity());
            return orderRepository.save(order);
        }
        return null; // Retorna null se o pedido não existir
    }

    // Deletar um pedido
    public boolean deleteOrder(Long id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
            return true; // Retorna true se o pedido foi deletado
        }
        return false; // Retorna false se o pedido não existir
    }
}
