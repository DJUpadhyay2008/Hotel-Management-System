import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Branch } from '../../branches/entities/branch.entity';
import { Table } from '../../tables/entities/table.entity';
import { OrderItem } from './order-item.entity';

export enum OrderStatus {
    PENDING = 'PENDING',
    PREPARING = 'PREPARING',
    READY = 'READY',
    SERVED = 'SERVED',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    branchId: number;

    @ManyToOne(() => Branch)
    @JoinColumn({ name: 'branchId' })
    branch: Branch;

    @Column({ nullable: true })
    tableId: number;

    @ManyToOne(() => Table, (table) => table.orders, { nullable: true })
    @JoinColumn({ name: 'tableId' })
    table: Table;

    @Column({ default: OrderStatus.PENDING })
    status: OrderStatus;

    @Column({ default: 'CAPTAIN' }) // CAPTAIN, QR
    source: string;

    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
    items: OrderItem[];

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    total: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
