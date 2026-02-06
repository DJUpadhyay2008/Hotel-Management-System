import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Hotel } from '../../hotels/entities/hotel.entity';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    hotelId: number;

    @ManyToOne(() => Hotel)
    @JoinColumn({ name: 'hotelId' })
    hotel: Hotel;

    @OneToMany(() => MenuItem, (item) => item.category)
    menuItems: MenuItem[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
