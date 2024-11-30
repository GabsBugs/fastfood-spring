// Interface que representa um item de um pedido
export interface Item {
    productId: number;  // Identificador único do produto
    itemName: string;    // Nome do produto
    quantity: number;    // Quantidade do produto no pedido
}

// Interface que representa um pedido
export interface Order {
    id: number;          // Identificador único do pedido
    items: Item[];      // Lista de itens no pedido
    totalAmount: number; // Valor total do pedido
    orderDate: Date;     // Data em que o pedido foi realizado
    customerName: string; // Nome do cliente que fez o pedido
}


