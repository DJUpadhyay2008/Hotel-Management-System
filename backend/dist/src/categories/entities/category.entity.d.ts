import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Hotel } from '../../hotels/entities/hotel.entity';
export declare class Category {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    hotelId: number;
    hotel: Hotel;
    menuItems: MenuItem[];
    createdAt: Date;
    updatedAt: Date;
}
