import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Ingredient } from '../../ingredients/entities/ingredient.entity';
export declare class Recipe {
    id: number;
    menuItemId: number;
    menuItem: MenuItem;
    ingredientId: number;
    ingredient: Ingredient;
    qtyRequired: number;
}
