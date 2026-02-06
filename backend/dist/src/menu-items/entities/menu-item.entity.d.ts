import { Category } from '../../categories/entities/category.entity';
import { MenuVariant } from './menu-variant.entity';
export declare class MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    type: string;
    imageUrl: string;
    categoryId: number;
    category: Category;
    variants: MenuVariant[];
    createdAt: Date;
    updatedAt: Date;
}
