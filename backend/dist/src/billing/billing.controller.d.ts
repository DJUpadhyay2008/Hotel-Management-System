import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    create(createBillingDto: CreateBillingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBillingDto: UpdateBillingDto): string;
    remove(id: string): string;
}
