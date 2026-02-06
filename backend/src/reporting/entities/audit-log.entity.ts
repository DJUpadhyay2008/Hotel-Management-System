import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    userId: number;

    @Column({ nullable: true })
    branchId: number;

    @Column()
    action: string;

    @Column('text', { nullable: true })
    details: string;

    @CreateDateColumn()
    createdAt: Date;
}
