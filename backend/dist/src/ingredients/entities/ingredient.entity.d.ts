import { Branch } from '../../branches/entities/branch.entity';
export declare class Ingredient {
    id: number;
    name: string;
    branchId: number;
    branch: Branch;
    stockQty: number;
    unit: string;
    lowStockThreshold: number;
    createdAt: Date;
    updatedAt: Date;
}
