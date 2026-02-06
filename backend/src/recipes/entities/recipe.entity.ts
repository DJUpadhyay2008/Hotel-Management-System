import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Ingredient } from '../../ingredients/entities/ingredient.entity';

@Entity('recipes')
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    menuItemId: number;

    @ManyToOne(() => MenuItem)
    @JoinColumn({ name: 'menuItemId' })
    menuItem: MenuItem;

    @Column()
    ingredientId: number;

    // Note: linking to Ingredient (which is branch specific) is tricky if MenuItem is global.
    // We assume here that recipes are defined per branch OR ingredient IDs are managed to be consistent.
    // Or better, we would have 'GlobalIngredient' vs 'BranchStock'.
    // Following prompt request strictly: recipes(menu_item_id, ingredient_id).
    @ManyToOne(() => Ingredient)
    @JoinColumn({ name: 'ingredientId' })
    ingredient: Ingredient;

    @Column('decimal', { precision: 10, scale: 2 })
    qtyRequired: number;
}
