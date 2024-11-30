package com.fastfoodproject.fastfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fastfoodproject.fastfood.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Métodos de consulta personalizados podem ser adicionados aqui
}
