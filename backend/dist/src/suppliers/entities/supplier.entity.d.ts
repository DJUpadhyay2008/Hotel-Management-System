import { Branch } from '../../branches/entities/branch.entity';
export declare class Supplier {
    id: number;
    name: string;
    contact: string;
    branchId: number;
    branch: Branch;
    createdAt: Date;
    updatedAt: Date;
}
