import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Branch } from '../../branches/entities/branch.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity('tables')
export class Table {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tableNumber: string;

    @Column()
    branchId: number;

    @ManyToOne(() => Branch)
    @JoinColumn({ name: 'branchId' })
    branch: Branch;

    @Column({ nullable: true })
    capacity: number;

    @Column({ unique: true })
    qrCode: string;

    @OneToMany(() => Order, (order) => order.table)
    orders: Order[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
