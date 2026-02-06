import { Branch } from '../../branches/entities/branch.entity';
export declare class Hotel {
    id: number;
    name: string;
    subscription_plan: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    branches: Branch[];
}
