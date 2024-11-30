package com.fastfoodproject.fastfood.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    private int quantity;

    private double price;

    @Column(name = "endereco_id")
    private Long addressId; // Relacionamento com a tabela de endereços

    @Column(name = "data_pedido")
    private Date orderDate; // Data do pedido

    // Construtores
    public Order() {}

    public Order(String itemName, int quantity, double price, Long addressId, Date orderDate) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.addressId = addressId;
        this.orderDate = orderDate;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }
}
