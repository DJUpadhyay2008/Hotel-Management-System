import { Bill } from './bill.entity';
export declare class Payment {
    id: number;
    billId: number;
    bill: Bill;
    method: string;
    amount: number;
    status: string;
    createdAt: Date;
}
