import { Order } from './order.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { MenuVariant } from '../../menu-items/entities/menu-variant.entity';
export declare class OrderItem {
    id: number;
    orderId: number;
    order: Order;
    menuItemId: number;
    menuItem: MenuItem;
    variantId: number;
    variant: MenuVariant;
    quantity: number;
    price: number;
}
