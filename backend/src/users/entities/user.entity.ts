import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Hotel } from '../../hotels/entities/hotel.entity';
import { Branch } from '../../branches/entities/branch.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    phone: string;

    @Column({ select: false }) // Don't return password by default
    password: string;

    @Column()
    hotelId: number;

    @ManyToOne(() => Hotel)
    @JoinColumn({ name: 'hotelId' })
    hotel: Hotel;

    @Column({ nullable: true })
    branchId: number;

    @ManyToOne(() => Branch, { nullable: true })
    @JoinColumn({ name: 'branchId' })
    branch: Branch;

    @Column()
    roleId: number;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'roleId' })
    role: Role;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
