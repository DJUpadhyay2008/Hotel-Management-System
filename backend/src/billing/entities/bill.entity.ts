import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('bills')
export class Bill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderId: number;

    @OneToOne(() => Order)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @Column('decimal', { precision: 10, scale: 2 })
    total: number;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    tax: number;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    discount: number;

    @Column('decimal', { precision: 10, scale: 2 })
    grandTotal: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
