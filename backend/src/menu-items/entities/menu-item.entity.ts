import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { MenuVariant } from './menu-variant.entity';

@Entity('menu_items')
export class MenuItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column({ default: true })
    isAvailable: boolean;

    @Column({ enum: ['veg', 'non-veg', 'egg'] })
    type: string;

    @Column({ nullable: true })
    imageUrl: string;

    @Column()
    categoryId: number;

    @ManyToOne(() => Category, (category) => category.menuItems)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @OneToMany(() => MenuVariant, (variant) => variant.menuItem)
    variants: MenuVariant[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
