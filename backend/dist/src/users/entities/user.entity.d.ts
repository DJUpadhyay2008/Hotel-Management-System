import { Hotel } from '../../hotels/entities/hotel.entity';
import { Branch } from '../../branches/entities/branch.entity';
import { Role } from '../../roles/entities/role.entity';
export declare class User {
    id: number;
    name: string;
    phone: string;
    password: string;
    hotelId: number;
    hotel: Hotel;
    branchId: number;
    branch: Branch;
    roleId: number;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
