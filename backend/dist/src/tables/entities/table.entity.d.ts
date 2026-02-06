import { Branch } from '../../branches/entities/branch.entity';
import { Order } from '../../orders/entities/order.entity';
export declare class Table {
    id: number;
    tableNumber: string;
    branchId: number;
    branch: Branch;
    capacity: number;
    qrCode: string;
    orders: Order[];
    createdAt: Date;
    updatedAt: Date;
}
