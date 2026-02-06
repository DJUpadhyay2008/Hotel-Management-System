import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Bill } from './bill.entity';

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    billId: number;

    @ManyToOne(() => Bill)
    @JoinColumn({ name: 'billId' })
    bill: Bill;

    @Column({ enum: ['CASH', 'CARD', 'UPI', 'ONLINE'] })
    method: string;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column({ default: 'SUCCESS' })
    status: string; // SUCCESS, PENDING, FAILED

    @CreateDateColumn()
    createdAt: Date;
}
