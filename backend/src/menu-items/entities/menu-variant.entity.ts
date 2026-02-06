import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MenuItem } from './menu-item.entity';

@Entity('menu_variants')
export class MenuVariant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // e.g. Full, Half

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    menuItemId: number;

    @ManyToOne(() => MenuItem, (item) => item.variants, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'menuItemId' })
    menuItem: MenuItem;
}
