import { Branch } from '../../branches/entities/branch.entity';
import { Table } from '../../tables/entities/table.entity';
import { OrderItem } from './order-item.entity';
export declare enum OrderStatus {
    PENDING = "PENDING",
    PREPARING = "PREPARING",
    READY = "READY",
    SERVED = "SERVED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class Order {
    id: number;
    branchId: number;
    branch: Branch;
    tableId: number;
    table: Table;
    status: OrderStatus;
    source: string;
    items: OrderItem[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
}
