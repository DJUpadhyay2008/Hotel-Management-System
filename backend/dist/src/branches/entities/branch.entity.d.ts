import { Hotel } from '../../hotels/entities/hotel.entity';
export declare class Branch {
    id: number;
    name: string;
    address: string;
    hotelId: number;
    hotel: Hotel;
    createdAt: Date;
    updatedAt: Date;
}
