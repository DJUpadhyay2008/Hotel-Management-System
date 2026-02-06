import { Order } from '../../orders/entities/order.entity';
export declare class Bill {
    id: number;
    orderId: number;
    order: Order;
    total: number;
    tax: number;
    discount: number;
    grandTotal: number;
    createdAt: Date;
    updatedAt: Date;
}
